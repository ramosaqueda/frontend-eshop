// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC7-KwpcBTTDxA4JHZB1w7Lgrwe7ED_TAo',
  authDomain: 'fullstack-ecomerce.firebaseapp.com',
  projectId: 'fullstack-ecomerce',
  storageBucket: 'fullstack-ecomerce.appspot.com',
  messagingSenderId: '390034514489',
  appId: '1:390034514489:web:74ac8e75ac44c27b26e3e8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
