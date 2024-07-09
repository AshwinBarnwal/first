// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDoc, addDoc ,doc, setDoc} from 'firebase/firestore/lite';
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { getServerSession } from "next-auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4_M50x2pNOdtqixw32kNbUmmRBKox4FA",
  authDomain: "nth-glass-292010.firebaseapp.com",
  projectId: "nth-glass-292010",
  storageBucket: "nth-glass-292010.appspot.com",
  messagingSenderId: "1060643336484",
  appId: "1:1060643336484:web:c0578bf1a75a85d32743b1",
  measurementId: "G-6GHKR2KF61"
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig)
const db=getFirestore(app)

export async function writedoc(num: string, content:string, email:string){
    const writer=doc(db, `users/id`)
    const docdata={
        [num]:content
    }
    try{
        await setDoc(writer,docdata, {merge: true})
        console.log("saved successfully")
    }
    catch(error){
        console.log(error)
    }
}

export async function readdoc(val: string, email:string){
    const writer=doc(db, `users/id`)
    const docload= await getDoc(writer)
    if (docload.exists()){
        const docData=docload.data();
        console.log(docData[val])
        return (docData[val])
    }
    return undefined;
}


/*const analytics = getAnalytics(app);

async function getDocumentData(collectionName: string, documentId: string) {
    try {
      // Reference to the document we want to retrieve
      const docRef = doc(db, collectionName, documentId)
  
      // Use getDoc to fetch the document
      const documentSnapshot = await getDoc(docRef)
  
      // Check if the document exists
      if (documentSnapshot.exists()) {
        // Return document data
        return documentSnapshot.data()
      } else {
        // Return null if document does not exist
        return null
      }
    } catch (error) {
      // Propagate error to the caller
      throw error
    }
  }

  async function addDocumentData(){
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }*/