import styles from "./Register.module.css";
import validation from "./validation";
import { useState } from "react";

function Register() {
    return (
        <div className={styles.pagina}>
            <form className={styles.registrarse}>
                <h2>Regstrarse</h2>
            </form>
        </div>
    )

}

export default Register