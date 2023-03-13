import SignUp from "../../components/form-input/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div>
      <h1 className="heading">Sign In Page</h1>
      <div className="authentication-container">
        <SignInForm />

        <SignUp />
      </div>
    </div>
  );
};
export default Authentication;
