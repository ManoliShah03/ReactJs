import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
import './Login.css';

function Login() {

    const navigate = useNavigate(); //navigation
    const [values, setValues] = useState({
        email: "",
        pass: ""
    });

    const [errorMsg, setErrorMsg] = useState(""); //storing error messages
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = (event) => {
        event.preventDefault();
        const valid = validationForm();

        if (valid) {
            setErrorMsg("");

            setSubmitButtonDisabled(true);

            signInWithEmailAndPassword(auth, values.email, values.pass ,values.name)
                .then(async (res) => {
                    setSubmitButtonDisabled(false);
                    navigate("/Home");
                })
                .catch((err) => {
                    setSubmitButtonDisabled(false);
                    setErrorMsg(err.message);
                });
        } else {
            console.log(errorMsg);
        }
    };

    const validationForm = () => {

        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return false;
        }
        return true;
    }

    return (
       

            <div className={'signup-cont'}>

                <div className={'sign-innerBox'}>
                    <h1 className={'heading'}>Login</h1>

                    <input
                        label="Email"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, email: event.target.value }))
                        }
                        placeholder="Enter email address"
                    />
                    <input
                        label="Password"
                        type={"password"}
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, pass: event.target.value }))
                        }
                        placeholder="Enter Password"
                    />

                    <div className={'footer'}>
                        <b className={'footer'}>{errorMsg}</b>
                        <button disabled={submitButtonDisabled} onClick={handleSubmission} className={'btn'}>
                            Login
                        </button>
                        <p>
                            Don't have an account?{" "}
                            <span>
              <Link to="/">Sign up</Link>
            </span>
                        </p>
                    </div>
                </div>
            </div>
     
    )
}

export default Login