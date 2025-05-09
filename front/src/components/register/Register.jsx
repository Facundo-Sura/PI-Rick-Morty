import styles from "./Register.module.css";
import validation from "./validation";
import { useState } from "react";

function Register () {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        password2: "",
    });

// Suggested code may be subject to a license. Learn more: ~LicenseLog:908487374.
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setErrors(
            validation({...userData, [e.target.name]:
                e.target.value})
        )
        setUserData({ ...userData, [e.target.name]:
            e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Register(userData)
    }

}

export default Register