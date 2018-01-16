import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBiEqXCoBNA8Y3HNy8gQH5fWyMXF5v8pQ8",
  authDomain: "talkpapers.Firebaseapp.com",
  databaseURL: "https://talkpapers.Firebaseio.com",
  projectId: "talkpapers",
  storageBucket: "talkpapers.appspot.com",
  messagingSenderId: "13425552193"
}

// Configure FirebaseUI.
export const FirebaseUIConfig = {
  // signInFlow: 'popup',
  signInSuccessUrl: '/',
  queryParameterForWidgetMode: 'select',
  signInOptions: [
    Firebase.auth.EmailAuthProvider.PROVIDER_ID,
    Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    Firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ]
}

export default !Firebase.apps.length
  ? Firebase.initializeApp(config)
  : Firebase.app()
