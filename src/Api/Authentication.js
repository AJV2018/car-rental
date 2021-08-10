import firebase from "firebase";

export const signIn = (email, password) => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            if (user) {
                resolve(user)
            } else (
                reject('User Not Found')
            )
        })
        .catch((error) => {
            reject(error.message)
        });
})

export const signUp = (name, email, password) => new Promise((resolve, reject) => {
    console.log('IN SIGNUP')
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('USER >>>', userCredential.user)
            var user = userCredential.user;
            if (user) {
                addUser(name, email).then(() => {
                    resolve(user)
                }).catch(err => reject(err.message))
            } else (
                reject('User Already Exist')
            )
        })
        .catch((error) => {
            reject(error.message)
        });
})

export const addUser = (name, email) => new Promise((resolve, reject) => {
    console.log('ADD USER >>>')
    const users = firebase.firestore().collection('users')
    users.doc(email).set({
        name: name,
        email: email
    }).then(res => {
        resolve()
    }).catch(err => reject(err.message))
})


