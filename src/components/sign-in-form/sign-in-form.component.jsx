import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { toast } from "react-toastify";

const SignInForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:4000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the token in local storage
      localStorage.setItem("token", json.authtoken);
      toast.success("Logged in successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/");
    } else {
      toast.error("Invalid credentials", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="sign-in-container">
      {console.log("user", user)}
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={login} method="POST">
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={user.email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={user.password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          {/* <Button buttonType="google">Google Sign In</Button> */}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
