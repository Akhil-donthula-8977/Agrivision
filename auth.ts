
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    authorization:{
      params:{
        prompt:"consent",
        access_type:"offline",
        response_type:"code"
      }
    }
  })],
  callbacks:{
    async signIn({profile}){
      console.log(profile);
      //console.log("type:",typeof user)
      return true;
    }
  }
})