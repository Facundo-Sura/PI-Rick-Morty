import React from "react";
import { useNavigate } from "react-router-dom";

function Error404() {
    const navigate = useNavigate()

    navigate('/home')

    return <img src="https://http.dog/404.jpg" alt="error" />;
}

export default Error404;