import React from "react";
import "../styles/registration.css";

const Registration = () => {
  return (
    <div>
      <h2>Registration Form</h2>

      <label for="r1" id="fn">
        First Name :
      </label>
      <input type="text" name="fname" id="r1" />
      <br />

      <label for="r2" id="ln">
        Last Name :
      </label>
      <input type="text" name="lname" id="r2" />
      <br />

      <label for="r3" id="un">
        Username :
      </label>
      <input type="text" name="uname" id="r3" />
      <br />

      <label for="r4" id="pwd">
        Password :
      </label>
      <input type="password" name="pass" id="r4" />
      <br />

      <label for="r5" id="em">
        Email :
      </label>
      <input type="text" name="email" id="r5" />
      <br />

      <label for="r6" id="mn">
        Mobile No :
      </label>
      <input type="text" name="mno" id="r6" />
      <br />

      <label for="r8" id="cy">
        City:
      </label>

      <select name="ct" id="r8">
        <option>Select</option>
        <option>Pune</option>
        <option>Mumbai</option>
        <option>Raigad</option>
        <option>Nagpur</option>
        <option>Nasik</option>
        <option>Raigad</option>
        <option>Nagar</option>
        <option>Kolhapur</option>
        <option>Solapur</option>
      </select>
      <br />
      <br />

      <button type="submit" value="Submit" id="button">
        Register
      </button>
      <a href="Login">Back to Home</a>
    </div>
  );
};

export default Registration;
