import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, 
  GoogleAuthProvider, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, signOut, onAuthStateChanged 
} from "firebase/auth";
import { doc, getDoc , setDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCo6w2dBQ3AdAM2W1iUmTwIyNDQzGPwfkE",
    authDomain: "crwn-clothing-65695.firebaseapp.com",
    projectId: "crwn-clothing-65695",
    storageBucket: "crwn-clothing-65695.appspot.com",
    messagingSenderId: "818976939289",
    appId: "1:818976939289:web:b03213d963f50a37407988"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth, additionalinfo = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log('userDocRef: ', userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log('userSnapshot: ', userSnapshot);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName, email, createdAt, ...additionalinfo
        });
      } catch (error) {
        console.log('An error occured', error.message);
      }
    }

    return userDocRef;
  }

  export const logGoogleUser = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      switch (error.code) {
        case ('auth/popup-closed-by-user'):
            alert('Popup Closed..!');
          break;
      
        default:
            alert('An error occured: '+error.code);
          break;
      }
    }
    // const userDocRef = await createUserDocumentFromAuth();
    // console.log(user);
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);  
  }

  export const signInAuthWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);  
  }

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);