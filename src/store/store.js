// @ts-nocheck

import { auth } from "$lib/firebase/firebase";
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";

export const authStore = writable({
    user: null,
    loading: true,
    data: {}
})

export const authHandlers = {
    signup: async (email, pass) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
            return userCredential;
        } catch (error) {
            throw error; // Propagate error if user creation fails
        }
    },
    login: async (email, pass) => {
        await signInWithEmailAndPassword(auth, email, pass)
    },
    logout: async () => {
        await signOut(auth)
    },
    changePassword: async (oldpass, pass, cpass) => {
        try {
            const response = await fetch('/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ oldpass, pass, cpass })
            });
            const data = await response.json();
            return data;
        } catch (error) {
            throw error; 
        }
    },
    ForgetPass: async (email) => {
        sendPasswordResetEmail(auth, email).then(()=>{
            alert("A Password Reset Link has sent to your email")
        }).catch((error)=>{
            alert(error.message)
            console.log(error.code);
            console.log(error.message)
        })
    }

}
