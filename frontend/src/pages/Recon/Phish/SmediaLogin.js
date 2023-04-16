import React, { useState } from "react";
import logo from './logo.png';

function SmediaLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email and password to server
  };

  const styles = `
    .container {
      margin: 100px auto;
      width: 400px;
      background-color: #f0f2f5;
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0px 0px 10px #999999;
      text-align: center;
      font-family: Arial, sans-serif;
    }

    .smedialogin-logo {
      width: 120px;
      height: 120px;
      background-size: contain;
      margin: 0 auto 20px auto;
      background-repeat: no-repeat;
      background-position: center;
    }

    h1 {
      color: #1877f2;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    form {
      margin-bottom: 20px;
    }

    input[type="text"],
    input[type="password"] {
      display: block;
      margin-bottom: 10px;
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: none;
      font-size: 16px;
      background-color: #ffffff;
    }

    button[type="submit"] {
      background-color: #1877f2;
      color: #ffffff;
      border: none;
      padding: 10px;
      margin-top: 10px;
      width: 100%;
      height: 40px;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }

    .bottom-links {
      text-align: center;
    }

    .bottom-links a {
      color: #1877f2;
      text-decoration: none;
      margin: 0 10px;
    }
  `;

  return (
    <div className="container">
      <div
        className="smedialogin-logo"
         style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <h1>Log in to Social-Media</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email address or phone number"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="smedialogin-button">
          Log In
        </button>
      </form>
      <div className="bottom-links">
        <a href="#">Forgot password?</a>
        <a href="#">Create new account</a>
      </div>
      <style>{styles}</style>
    </div>
  );
}

export default SmediaLogin;
