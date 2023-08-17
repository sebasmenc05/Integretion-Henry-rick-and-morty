import { useState } from "react"
import styles from "./Forms.module.css"
import validation from "./validation"


export default function Forms (props){
const [errors, setErrors] = useState({
    email: '',
    password: ''
})


    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
function handleChange (event){
    setUserData({...userData, [event.target.name]: event.target.value });
    setErrors(validation({...userData, [event.target.name]: event.target.value }))
}

function handleSubmit (event){
    event.preventDefault();
    props.login(userData)

}

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>Email: </label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}/>
            <p>{errors.email}</p>

            <label>Password </label>
            <input type="text" name="password" value={userData.password} onChange={handleChange} />
            <p>{errors.password}</p>
            <button type="submit">submit</button>
        </form>
    )
}