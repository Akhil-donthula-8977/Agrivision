"use server";
import { signIn } from "@/auth";

export async function oauth(form: FormData) {
    const actionType = form.get("action");
    console.log(form);
    console.log(actionType);

    // Ensure actionType is a string before passing it to signIn
    if (typeof actionType === "string") {
        await signIn(actionType, { redirectTo: "/home" });
    } else {
        console.error("Invalid action type:", actionType);
    }
}
