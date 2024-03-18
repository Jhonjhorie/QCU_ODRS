// @ts-nocheck

import { auth } from "$lib/firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    }

}
