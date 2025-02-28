import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"
import { ZodError, unknown } from "zod";
import { signInSchema } from "./lib/utils";
import { getUserFromDb } from "./lib/users.action";
import { createUser } from "./lib/users.action";
interface UserToken {
  email: string;
  sub: string;
  _id: string;
  iat: number;
  exp: number;
  jti: string;
}


export const { handlers, auth,signIn,signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { },
        password: {  },
      },
      authorize: async (credentials) => {
        try {
       const { email, password } = await signInSchema.parseAsync(credentials);

          // Logic to hash the password
          const pwHash = password; // Replace with actual hashing logic
          // Logic to verify if the user exists
          const user = await getUserFromDb({ email, password: pwHash });

          if (!user) {
            const newUser=await createUser({email,password});
            console.log(newUser);
            return newUser;
          }

          return user;
        } catch (error) {
          
          console.log(error)
       
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/',  // Add your custom sign-in page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user.id;
      }
      
      return token;
    },
    async session({ session, token }) {
      console.log(session)
     
      if (session?.user ) {
         //@ts-ignore
        session.user.id = token._id;
      }
    
      return session;
    }
  },
});

