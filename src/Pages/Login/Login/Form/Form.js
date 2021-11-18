import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState } from "react";

import './App.css';
import intializeAuthentication from './firebase/firebase.init';


intializeAuthentication();
// const googleProvider = new GoogleAuthProvider();


const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();


    // const handleGoogleSignIn = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             const user = result.user;
    //             console.log(user)
    //         })

    // }
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const handleNamechange = e => {
        setName(e.target.checked)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    const handleRegistration = e => {
        console.log(email, password)
        e.preventDefault();
        if (password.length < 6) {
            setError('Password should be 6 charecters long')
            return;
        }
        isLogin ? processLogin(email, password) : registerNewUser(email, password);


    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
            })
            .catch(error => {
                setError(error.massege);
            })
    }


    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                setUserName();
                verifyEmail();
            })
            .catch(error => {
                setError(error.massege);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => { })
    }
    return (
        <div className="mx-5">
            <form onSubmit={handleRegistration}>
                <h3 className="text-info ">Please {isLogin ? 'Login' : 'Register'} </h3>

                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleNamechange} type="name" className="form-control" id="inputName" placeholder="enter your name" required />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?

                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger" >{error}</div>
                <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
                <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm">Reset password</button>
            </form>
            {/* <button onClick={handleGoogleSignIn}>Google sign in</button> */}
        </div>
    );
}


export default Form;