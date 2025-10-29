import React from "react";
import validation from "./validation";

const Form = () => {

    const [input, setInput] = React.useState({
        email:"",
        password:""
    })

    const [errors, setErrors] = React.useState({})

    const handleChange = (event) => {
        setInput ({
            ...input,
            [event.target.name]: event.target.value
        })
        setErrors(validation(input));
    }

    const handleSumbit = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSumbit}>
            <label htmlFor="email">Email: </label>
            <input onChange={handleChange} type="email"  name="email" value={input.email}/>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

            <br />

            <label htmlFor="password">Password: </label>
            <input onChange={handleChange} type="password" name="password" value={input.password}/>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

            <br />

            <button type="submit" disabled={input.email === "" || input.password === "" || errors.email || errors.password}>submit</button>
        </form>
    )
}

export default Form;