
import { useEffect, useState } from "react";
import initializeFirebase from "../Page/Home/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";




initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();



    const registerUser = (email, Password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, Password)
            .then((userCredential) => {
                console.log(userCredential)
                // Signed in 
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name)
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });

                history.replace('/');
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                // localStorage.setItem('email', userCredential.user.email)
                // console.log(userCredential);
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // Signed in 
                setAuthError('');
                // setUser(userCredential);

                // ...
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
        ;
    }
    // observe iser state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`https://fathomless-atoll-20854.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])
    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                // localStorage.removeItem('email')
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));

    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };

        fetch('https://fathomless-atoll-20854.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()

    }


    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,

        logout,

    }

}
export default useFirebase;