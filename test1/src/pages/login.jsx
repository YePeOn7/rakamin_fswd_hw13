import { useNavigate } from "react-router-dom";
import "./common.css"
import axios from "axios";

export default function Login(){
    const navigate = useNavigate();
    return(
        <div className="container">
            <h1>Login</h1>
            <div className="form-container" onSubmit={async (e) => {
                e.preventDefault();
                try{
                    const res = await axios.post("http://localhost:3000/api/auth/login", {
                        email: e.target.email.value,
                        password: e.target.password.value
                    });

                    console.log(res.data.accessToken);
                    localStorage.setItem("token", res.data.accessToken);
                    window.alert("Register Success");
                    navigate("/");
                }catch (e){
                    console.log(e)
                    window.alert("Something Wrong!!!");
                }
            }}>
                <form action="">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}