import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState()
  const nevigate = useNavigate()

  const submitData = (data) =>{
     nevigate('/signup')
  }

  const onSubmitData = (e) =>{console.log("first",e)
    if(e){
      setUser(true)
    }
  }

  return (
    <>
     {user && (
          <Navigate to="/clientdashboard" replace={true} />
        )}
      <div className="login">
        <div className="form">
          <div style={{ position: "relative" }}>
            <img src={require(`../assets/icons/eikomp_logo.png`)} className="eikomp_logo" width={230} height={130} alt="logo" />
            {/* <p className="efficient">efficient Compliances.</p> */}
          </div>
          <p>Don't have an account?</p>

          <button10 onClick={submitData}  style={{cursor:'pointer'}} id="singup" >Sign up</button10>
          <h3 style={{padding:0}}>WELCOME</h3>
          <input
            type="email"
            name="email"
            className="box"
            placeholder="Username"
            value=""
          />
          <input
            type="email"
            name="email"
            className="boxx"
            placeholder="Password"
            value=""
          />
          <input style={{cursor:'pointer'}} type="submit" value="LOGIN" id="submit" onClick={()=>onSubmitData('data')} />
          <Link to="#">Forget Password?</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
