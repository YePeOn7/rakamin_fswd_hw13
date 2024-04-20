import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

function Home() {
  const [data, setData] = useState({data:[], pageInfo:{}});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      setLoading(true);
      const data = await fetch("http://localhost:3000/api/users");
      const json = await data.json();
      setData(json);
      setLoading(false);
      
      // console.log(typeof(json));
      // console.log(json);
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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/dashboard/details" element={<DashboardDetails/>}/>
        <Route path="/users/:userId" element={<User/>}/>
      </Routes>
    </Router>
  )
}

export default App
