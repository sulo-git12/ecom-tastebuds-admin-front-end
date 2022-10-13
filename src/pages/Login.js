import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import "../styles/login.css";

const Login = () => {

	function handleCallbackResponse(response){
		console.log("Encoded JWT ID Token:" +response.credential);
		var userObject = jwtDecode(response.credential);
		console.log(userObject);
	}

	useEffect(() => {

		/* global google */
		google.account.id.initialize({
           client_id: "462506750128-em3i34q6944s8en70ik4nlaeqi8i42vd.apps.googleusercontent.com",
		   callback: handleCallbackResponse
		});

		google.account.id.renderButton(
		 document.getElementById("signInDiv"),
		 {theme: "outline", size: "large"});

	}, []);

	  return (
		<div className="App">
			<div id="container">
				<div class="border-box">
				<h2>Login Form</h2>
				<label for="uname" id="un">Username:</label>
				<input type="text" name="user" placeholder="Enter Username" id="uname"/><br/>
				
				<label for="upass" id="ps">Password:</label>
				<input type="password" name="pass" placeholder="Enter Password" id="upass"/><br/>
				
				<button type="submit" value="Login"  id="submit" onClick="alert('Login Successfully')">Login</button>
				
				<a href="Registration">New Member</a>
				</div>
					
				<div id="signInDiv"></div>	
				
			</div>
		</div>

  );
};

export default Login;
