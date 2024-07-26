"use server";
import { signIn } from "@/auth";
import prisma  from "@/lib/prisma";

interface creds{
    email:string,
    password:string
}
export async function oauth(form: FormData) {
    const actionType = form.get("action");
    console.log(form);
    console.log(actionType);

    // Ensure actionType is a string before passing it to signIn
    if (typeof actionType === "string") {
        await signIn(actionType,form);
    } else {
        console.error("Invalid action type:", actionType);
    }
}

export async function getUserFromDb(props:creds){
    try{
    const user=await prisma.user.findUnique({
        where: {
          email: props.email,
        },
      })
      if(user){
        return user;
      }
    return null;
    }
    catch(e){
        throw new Error;
    }
}

export async function createUser(props:creds){
    const user = await prisma.user.create({
        data: {
          email: props.email,
          password: props.password,
        },
      })
      return JSON.parse(JSON.stringify(user));
}
