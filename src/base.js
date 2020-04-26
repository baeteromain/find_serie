import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQdY8kYNq7An3o_2wUMtkI5zP3Cx6B7Y0",
  authDomain: "find-serie.firebaseapp.com",
  databaseURL: "https://find-serie.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
