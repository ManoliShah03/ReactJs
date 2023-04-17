import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import './Signup.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../../firebase";

function Signup(){
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const handleSubmission = (event) => {
        console.log(values);
        event.preventDefault();

        const valid = validationForm();

        if(valid) {

            setErrorMsg("");
            setSubmitButtonDisabled(true);

            createUserWithEmailAndPassword(auth, values.email, values.pass)
                .then(async (res) => {
                    //console.log(res);
                    setSubmitButtonDisabled(false);
                    const user = res.user;
                    await updateProfile(user, {
                        displayName: values.name,
                    });
                    navigate("/Login");
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
        let nameReg = /^[A-Za-z\s]+$/; //name valdiation regex
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }

        if (!nameReg.test(values.name)) {
            setErrorMsg('Name not valid !!!');
            return false;
        }

        return true;
    }

    return(

        <div className="signup-cont">
            <div className="sign-innerBox">
                <h1 className="headingname">Signup</h1>

                <input type="text" placeholder="Enter Your Name"
                       onChange={(event) =>
                           setValues((prev) => ({ ...prev, name: event.target.value }))
                       }      />

                <input type="email" placeholder="Enter Email address"
                       onChange={(event) =>
                    setValues((prev) => ({ ...prev, email: event.target.value }))
                } />

                <input type="password" placeholder="Enter Password"
                       onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                } />
                <div className="cont2">
                    <b className="error">{errorMsg}</b>
                    <button onClick={handleSubmission} disabled={submitButtonDisabled} className={'btn'}>Sign In</button>
                    <p>
                        Already Have an account? {""}
                        <span>
           <Link to="/login">Login</Link>
        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}


export default Signup