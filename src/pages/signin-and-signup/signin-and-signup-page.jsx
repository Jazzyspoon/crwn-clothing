import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import "./signin-and-signup-page.styles.scss";

const SigninAndSignupPage = () => (
  <div className="signin-and-signup-page">
    <SignIn />
    <SignUp />
  </div>
);

export default SigninAndSignupPage;
