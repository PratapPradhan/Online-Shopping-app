import { useState } from "react";
import "./sign-up-form.styles.scss";
import FormInput from "../form-input.component";
import Button from "../../button/button.component";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// const defaultFormFields = {
//   email: "",
//   displayName: "",
//   password: "",
//   confirmPassword: "",
// };
const SignUp = () => {
  // const [formFields, setFormFields] = useState(defaultFormFields);
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("sign up clicked");
    const { displayName, email, password, confirmPassword } = user;
    if (password !== confirmPassword) {
      toast.warning("Confirm your password correctly", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const response = await fetch(
        `http://localhost:4000/api/auth/createuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ displayName, email, password }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.success) {
        toast.success("User Registered successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
        setUser({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        toast.error("Invaild details", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };
  return (
    <div className="sign-up-container register">
      {console.log("user", user)}
      <h2>Create An Account</h2>
      <span>Enter Your Credentials</span>

      <form onSubmit={onSubmitHandler} method="POST">
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={user.displayName}
        />
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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={user.confirmPassword}
        />
        <div className="buttons-container">
          <Button type="submit">Sign Up</Button>
          {/* <Button buttonType="google">Google Sign In</Button> */}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
