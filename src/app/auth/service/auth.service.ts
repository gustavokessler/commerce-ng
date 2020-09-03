import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, of, Subject, onErrorResumeNext } from 'rxjs';


export interface User {
    displayName?: string;
    email?: string;
    phoneNumber?: string;
    photoURL?: string;
    providerId?: string;
    role?: number;
    uid?: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {

    public user$: Observable<User> = this.auth.user;
    
    


    constructor(
        public auth: AngularFireAuth,
        private firestore: AngularFirestore,
    ) {
        this.auth.user.subscribe((a) => console.log(a));
        // this.user$ = 
    }


    // public authenticated$ = this.auth.authState.pipe(
    //     map((state) => !!state),
    // );

    // signIn(email: string, password: string) {
    //     return from(
    //         this.auth.signInWithEmailAndPassword(email, password),
    //     );
    // }

    // signInGoogle() {
    //     return from(
    //         this.oauthSignIn(new firebase.auth.GoogleAuthProvider()),
    //     );
    // }

    // signInAnonymously() {
    //     return from(
    //         this.auth.signInAnonymously(),
    //     );
    // }

    // private oauthSignIn(provider: firebase.auth.AuthProvider) {
    //     if (!(window as any).cordova) {
    //         return this.auth.signInWithPopup(provider);
    //     } else {
    //         return this.auth.signInWithRedirect(provider)
    //             .then(() => {
    //                 return this.auth.getRedirectResult().then((result) => {
    //                     // This gives you an Access Token. You can use it to access the associated APIs.
    //                     const token = (result.credential as any).accessToken;
    //                     // The signed-in user info.
    //                     const user = result.user;
    //                     console.log(token, user);
    //                 }).catch((error) => {
    //                     // Handle Errors here.
    //                     alert(error.message);
    //                 });
    //             });
    //     }
    // }

    singout(): void {
        this.auth.signOut();
    }

}
