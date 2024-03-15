
<script>
// @ts-nocheck
  import { auth, db } from "$lib/firebase/firebase";
  import { doc, getDoc, setDoc } from "firebase/firestore";
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import { onMount } from "svelte";
  import { authStore } from "../store/store";

  const nonAuthRoutes = ['/']

  onMount(() => {
    console.log(`Mounting`)

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      const currentPath = window.location.pathname

      if(!user && !nonAuthRoutes.includes(currentPath)) {
        window.location.href = "/";
        return
      }

      if (user && currentPath == '/') {
        window.location.href = '/Student/Dashboard'
        return
      }

      if (!user) {
        return;
      }

      let dataToSetToStore;
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        const userRef = doc(db,'user', user.uid);
        dataToSetToStore = {
          email: user.email,
        }
        await setDoc(userRef, dataToSetToStore, {merge: true})
      } else {
        const userData = docSnap.data();
        dataToSetToStore = userData;
      }
      authStore.update((curr) => {
        return {
        ...curr,
        user,
        data: dataToSetToStore,
        loading: false,
      }
      })
    })
  })

</script>

<slot />
<Footer />
