import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useAuth } from "../../commons/auth";

// const baseUrl = "http://localhost:8800/api/auth";
const baseUrl = process.env.REACT_APP_BASE_URL

const LoginForm = () => {
  // authentication
  const auth = useAuth();
  const navigate = useNavigate();
  // implementing state and hooks
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    isAdmin: false,
  });

  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [errors, setErrors] = useState({ message: "" });

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();

      // Check if email and password are provided
      if (!inputs.email || !inputs.password) {
        alert("Email and password are required.");
        return;
      }

      // Display loading feedback
      // You can set a loading state variable and conditionally render a spinner

      try {
        const response = await axios.post(`${baseUrl}/auth/login`, {
          email: inputs.email,
          password: inputs.password,
          isAdmin: inputs.isAdmin,
        });

        const { accessToken, username } = response.data;
        
        if (accessToken) {
          // Update welcome message
          setWelcomeMessage(`Welcome, ${username}!`);
          // Authenticate the user and navigate to the home page
          auth.login(username);
          navigate("/", { replace: true });
        } else {
          // Handle login failure feedback
          console.log(username);
          setErrors({ message: username });
        }

        // Clear the form inputs
        setInputs({
          password: "",
          email: "",
        });
      } catch (error) {
        // Handle network errors or other exceptions
        console.log(baseUrl)
        console.error("Login error:", error);
        // alert("Login failed. Please try again later.");
         
      }
    }
  };

  const handleInputChange = async (event) => {
    event.persist();
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="Property">
      <Header />
      {/* login form */}

      <form onSubmit={handleSubmit}>
        <div className="flex  text-left py-20 bg-zinc-700 h-[500px] mb-10 justify-center align-middle text-xl ">
          <div className="w-[400px] ">
            <div className="grid grid-cols-2  mb-4 align-middle">
              <div
                className="bg-zinc-900 flex justify-center align-middle py-4 text-[#74c69d]"
                onClick={() => navigate("/userForm")}
              >
                Sign up
              </div>
              <div
                className="bg-zinc-800 flex justify-center align-middle py-4 text-[#74c69d]"
                onClick={() => navigate("/loginForm")}
              >
                Login
              </div>
            </div>
            <div>
              <label>Email Address</label>
              <input
                className="formInput"
                type="email"
                name="email"
                onChange={handleInputChange}
                value={inputs.email}
                placeholder="email@email.com"
                required
              />
            </div>

            <div>
              <label>Password</label>
              <input
                className="formInput"
                type="password"
                name="password"
                onChange={handleInputChange}
                placeholder="Enter Password"
                value={inputs.password}
              />
            </div>

            <div className="mx-auto text-left text-xl">
              <button type="submit" className="px-10 py-4 bg-[#74c69d] hover:bg-[#5a8e71]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>

      {welcomeMessage && <div>{welcomeMessage}</div>}
      {errors.message && <div>{errors.message}</div>}

      <Footer />
    </div>
  );
};

export default LoginForm;