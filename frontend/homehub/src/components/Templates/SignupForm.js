import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// const baseUrl = "http://localhost:8800/api/auth";
const baseUrl = process.env.BASE_URL || 3000
const SignupForm = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
    isAdmin:false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.password === inputs.repeatPassword) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const data = {
        email: inputs.email,
        username: inputs.username,
        password: inputs.password,
        isAdmin:false
      };
  
      try {
        const response = await axios.post(`${baseUrl}/register`,JSON.stringify(data), config);
  
        if (response.status === 201) {
          // Registration successful
          navigate("/loginForm", { replace: true });
          alert("Registration Succeful");
        } else {
          // Handle other responses as needed
          alert("Registration failed. Please try again.");
        }
      } catch (error) {
        // Handle errors, including validation errors, here
        console.error("Registration error:", error);
        alert("Registration failed. Please check your input data.");
      }
    } else {
      alert("Passwords do not match");
      setInputs((prevInputs) => ({
        ...prevInputs,
        password: "",
        repeatPassword: "",
      }));
    }
  };
  
  
  
  const handleInputChange = (event) => {
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
      {/* <div className="w-full mx-auto p-10 text-center">
        <p className="font-thin  text-4xl">SignUp For The Best Experience?</p>
      </div> */}

      <form onSubmit={handleSubmit}>
        <div className="flex  text-left py-10 bg-zinc-700 mb-10 justify-center align-middle text-xl ">
          <div className="w-[400px]">
            <div className="grid grid-cols-2  mb-4 align-middle">
              <div
                className="bg-zinc-900 text-[#74c69d] flex justify-center align-middle py-4"
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
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                name="username"
                onChange={handleInputChange}
                value={inputs.username}
                placeholder="user"
                required
              />
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
                className="formInput "
                type="password"
                name="password"
                onChange={handleInputChange}
                placeholder="Enter Password"
                value={inputs.password}
              />
            </div>

            <div>
              <label>Renter Password</label>
              <input
                className="formInput"
                type="password"
                name="repeatPassword"
                onChange={handleInputChange}
                placeholder="Renter Password"
                value={inputs.repeatPassword}
              />
            </div>
            <div className="mx-auto text-left text-xl">
              {/* <button onClick={NavigateToLoginForm}>Submit</button> */}
              {/* <button onClick={navigateToHome} cl></button> */}
              <button type="submit" className=" bg-[#74c69d] hover:bg-[#d3f2e1]">Submit</button>
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
};

// function LoginForm() {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// }

export default SignupForm;
