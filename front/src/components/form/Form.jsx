import { useState } from "react";
import validation from "./validation";

function Form({ login }) {
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (evento) => {
        setErrors(validation({...userData, [evento.target.name]:evento.target.value }))
        setUserData({...userData, [evento.target.name]:evento.target.value })
    }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        login(userData)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email:
                <input type="text" placeholder="Ingrese un email" id="email" name="email" value={userData.email} onChange={handleChange}
                />
            </label>

            { errors.email && <p>{errors.email}</p>}

            <label htmlFor="password">
                Contraseña:
                <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} />
            </label>

            { errors.password && <p>{errors.password}</p>}

            <button>Submit</button>
        </form>
    </div>;
}

export default Form;