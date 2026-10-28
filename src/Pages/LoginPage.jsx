import { useState } from "react";
import authServices from "../Services/authServices";

const LoginPage =()=> {

    //variables
    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    //traitements
    const handleChange = (e) => {
        //console.log(e.target);
    const {name, value} = e.target;
    console.log(name, value);
setUser ({...user,[name] : value})
    }

    const handleSubmit = async (e) =>{
e.preventDefault();
        try {
           console.log(user);
           const response = await authServices.login(user);
           const token = response.data.token;
           window.localStorage.setItem("token", token);
console.log (response);
        } catch (error) {
           console.error(error); 
        }
    }
    //rendu
    return <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="Username">Login</label>
        <input type="text" name="username" id="username" value={user.username} onChange={handleChange} />
        <label htmlFor="password">MDP</label>
        <input type="password" id="password" name="password" value={user.password} onChange={handleChange}/>
        <button type="submit">Se connecter</button>
    </form>
    </>;
}

export default LoginPage;