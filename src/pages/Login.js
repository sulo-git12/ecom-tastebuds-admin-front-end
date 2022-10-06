import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
	<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
			<div className="signup">
            {/* <div class="imgcontainer">
                 <img src="https://cdn-icons-png.flaticon.com/512/2830/2830305.png" alt="Avatar" className="avatar"/>
            </div>  */}
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
				
			</div>

			<div className="login">
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				
			</div>
	</div>

  );
};

export default Login;
