import * as firebase from 'firebase';

export class AuthService{
  signupUser(email: string, password: string){
    // auth() contains all the auth methods/promises
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }
}