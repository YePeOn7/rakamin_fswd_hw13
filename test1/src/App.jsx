import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import axios from "axios"
import Register from "./pages/register"
import Login from './pages/login';
import PrivateRoute from './components/PrivateRoute';
function Home() {
  const [data, setData] = useState({data:[], pageInfo:{}});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData(){
      try{
        setLoading(true);
        const token = localStorage.getItem("token");
        console.log(token);
        const res = await axios.get("http://localhost:3000/api/users", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        if(res.status != 200){
          navigate("/login")
        }
        // const json = await data.json();
        setData(res.data);
        setLoading(false);
      } catch (e) {
        navigate("/login");
      }
    }

    fetchData();
  }, []);

  // console.log(data);

  return (
    <div>
      <h1>Home</h1>
      {loading && <h2>Loading.....</h2>}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.role}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
    <ul>
      <li><a href="/dashboard/details">Dashboard Detail</a></li>
    </ul>
      <h1>Dashboard</h1>
    </div>
  )
}

function DashboardDetails() {
  return (
    <div>
    <ul>
      <li><a href="/dashboard">Dashboard</a></li>
    </ul>
      <h1>Dashboard Details</h1>
    </div>
  )
}

function User() {
  let { userId } = useParams();
  return (
    <div>
      <h1>Hi {userId}!!!</h1>
    </div>
  )
}

function Upload() {
  const [file, setFile] = useState(null);
  return (
    <div>
      <h1>Upload</h1>
      <input type="file" onChange={(e) => {
        setFile(e.target.files[0]);
      }} />
      <button onClick={async () => {
        try{
          if(!file){
            window.alert("Please select file");
            return;
          }
          
          const formData = new FormData();
          formData.append('file', file);
          const res = await axios.post("http://localhost:3000/api/movies/upload", formData, {
            headers:{
              'Content-Type': 'multipart/form-data'
            }
          });

          console.log(res);
          window.alert("Upload Success");
        } catch (e){
          window.alert("Something Wrong!!!");
        }
      }}>Upload</button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/users/Yohan">Users</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <Routes>

        <Route path="/" element={<PrivateRoute/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/dashboard/details" element={<DashboardDetails/>}/>
          <Route path="/users/:userId" element={<User/>}/>
          <Route path='/upload' element={<Upload/>}/>
        </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
