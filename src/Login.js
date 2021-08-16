import React, { useState } from 'react'
import './Login.css'
import linkedinlogo from './images/download.png'
import { auth } from './firebase'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error));
    };
    const register = () => {
        if (!name) {
            return alert("Please enter a Full Name")
        }
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        }));
                    })
            }).catch(error => alert(error))
    };
    return (
        <div className="login">
            <img src={linkedinlogo} />

            <form>
                <input type="text" placeholder="full name required if registering"
                    value={name} onChange={(e) => setName(e.target.value)} />

                <input type="text" placeholder="Profile pic URL (optional)"
                    value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />

                <input type="text" placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} autoComplete="on"/>

                <input type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="button" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member ? {""}
                <span className="login__register" onClick={register}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
