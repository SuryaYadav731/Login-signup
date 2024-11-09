import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import photo from "../Images/photosurya.jpg";

function Home() {
  const navigate = useNavigate();
  const logout = ()=>{
     localStorage.removeItem("user");
     navigate("/");

  }
  return (
    <div>
      <Navbar/>

      <div className='home'>
        <h1>Welcome Spark App</h1>
      
        <button onClick={logout}>Logout</button>

      </div>
      <div>
      <a href="https://react-portfolio-surya.vercel.app/" target='_blank'>Portfolio</a>
      <img src={photo} alt="image" style={{ borderRadius: "50%", objectFit: "contain", height: "200px", width: "200px" }} />
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae itaque magnam assumenda commodi atque eos quos nam sapiente odio, tempora, voluptatibus quod perferendis nostrum non autem nulla inventore nesciunt aspernatur recusandae earum reiciendis. Molestias odit at rerum tempora sequi voluptates.
       </p>
      </div>
    </div>
  )
}

export default Home
