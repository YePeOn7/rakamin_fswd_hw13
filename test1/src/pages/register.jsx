import axios from "axios";
import "./common.css"
import { useNavigate } from "react-router-dom";

export default function Register(){
    const navigate = useNavigate()
    return(
        <div className="container">
            <h1>Register</h1>
            <div className="form-container" onSubmit={async (e) => {
                e.preventDefault();
                // console.log(e.target.email.value);
                try{
                    const res = await axios.post("http://localhost:3000/api/auth/register", {
                        email: e.target.email.value,
                        password: e.target.password.value,
                        gender: e.target.gender.value,
                        role: e.target.role.value
                    });

                    console.log(res);
                    window.alert("Register Success");
                    navigate("/login");
                }catch (e){
                    window.alert("Something Wrong!!!");
                }
            }}>
                <form action="">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name="confirmPassword" id="confirmPassword"/>
                    <label htmlFor="gender">Gender:</label>
                    <input type="text" name="gender" id="gender"/>
                    <label htmlFor="role">Role:</label>
                    <input type="text" name="role" id="role"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}