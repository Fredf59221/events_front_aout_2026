import { useNavigate } from "react-router";

const Homepage = () => {
   //variables
   // Const navigate de usenavigate me permet de faire des redirections
   const navigate = useNavigate();
   
   
   //functions




   //rendu
   
   
   
    return<>
    <h1>Home page</h1>
    <button onClick={()=>{navigate("/login")}}>Login</button>
    <button onClick={()=>{navigate("/register")}}>Register</button>
    <button onClick={()=>{navigate("/events")}}>Events</button>
    </>;

}

export default Homepage;