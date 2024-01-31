import { useState } from "react";
import ActionButton from "../Commons/Button";
import InputField from "../Commons/InputField";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { NavLink, useNavigate } from "react-router-dom";
import { url } from "../../utils";
import Lottie from "lottie-react";
import preloader from "../../pages/Home/Animation - 1703321875032 (1).json";

const SigninForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isUsingPhone, setIsUsingPhone] = useState(false);
  const [isUsingUsername, setIsUsingUsername] = useState(false);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const goToForgot = () => {
    navigate("/forgot");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setEmail("");
    setPhone("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setPhone("");
    setUsername("");
  };
  const handlePhoneChange = (event) => {
    setEmail("");
    setPhone(event);
    setUsername("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleUsePhoneClick = () => {
    setIsUsingPhone(!isUsingPhone);
    setIsUsingUsername(false);
  };

  const handleUseUsernameClick = () => {
    setIsUsingUsername(!isUsingUsername);
    setIsUsingPhone(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "__cf_bm=oS1dmDeDMkQpDAPnlYg28Ix3zAE6SZbWA.1_IWkWXJw-1701779685-0-AfxEpp6d9SR7CMo1RCgu8/uDjkq3F/XguwuQK8Z13CXc1XP9eFdnCnLnzNRBySwPokOEN0xgG4Q0pfx7xyVLv74=; csrftoken=0tQF8jDzX38l95IB6wx5xqAxebxqHdM2; sessionid=si1y25m97ctl3faemkc2aby35ejiti6x"
    );

    let formData =
      (username && {
        username: username,
        password: password,
      }) ||
      (email && {
        email: email,
        password: password,
      }) ||
      (phone && {
        phone_number: phone,
        password: password,
      });

    var raw = JSON.stringify(formData);
    console.log(formData);
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `${url}/login/`,
        requestOptions
      );
      const result = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          alert(result.error);
        } else if (response.status === 401) {
          alert(result.error);
        }
      } else {
        localStorage.setItem("authTOken", result.token);
        navigate("/Home");
      }
      // Handle successful login, e.g., store the token in local storage
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.error);
      } else {
        console.log("An error occurred during the login process.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sign-form">
      <div className="create-ead-txt">Login</div>
      <div className="greet-txt">
        Welcome back. Enter your details to continue.
      </div>

      <form action="" onSubmit={handleLogin}>
        {isUsingPhone && !isUsingUsername && (
          <div className="inp-phone">
            <PhoneInput
              defaultCountry="NG"
              className="custom-phone-input"
              value={phone}
              style={{ height: "40px" }}
              onChange={(text) => handlePhoneChange(text)}
              placeholder="+1 201-555-0123"
              required
            />
          </div>
        )}

        {!isUsingPhone && !isUsingUsername && (
          <div className="inp-email">
            <InputField
              placeholder={"Input email address"}
              type={"email"}
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        )}

        {isUsingUsername && (
          <div className="inp-username">
            <InputField
              placeholder={"Username"}
              type={"text"}
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        )}

        <div className="pass-con">
          <InputField
            placeholder={"Password"}
            type={passwordVisible ? "text" : "password"}
            onChange={handlePasswordChange}
          />
          <div className="eye-box" onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <BsEyeSlashFill className="eye-icon" />
            ) : (
              <BsEyeFill className="eye-icon" />
            )}
          </div>
        </div>
        <div className="forg-pas-contan" onClick={goToForgot}>
          Forgot password?
        </div>
        <div className="use-phone" onClick={handleUsePhoneClick}>
          {isUsingPhone
            ? "Use Email Address Instead"
            : isUsingUsername
            ? "Use Email Address Instead"
            : "Use Phone Number Instead"}
        </div>
        <div
          className="use-phone"
          onClick={
            isUsingUsername ? handleUsePhoneClick : handleUseUsernameClick
          }
        >
          {isUsingUsername
            ? "Use Phone Number Instead"
            : "Use Username Instead"}
        </div>

        <div className="btn-continu">
          {isLoading ? (
            <Lottie
              animationData={preloader}
              style={{
                width: "300px",
                height: "100px",
              }}
            />
          ) : (
            <ActionButton
              label={"Continue"}
              bg={"pruplr"}
              handleLogin={handleLogin}
            />
          )}
        </div>
        <div className="alr-ave">
          New user? &nbsp;
          <span>
            <NavLink
              className="goto-link"
              to="/Signup"
              style={{ color: "#4f0da3" }}
            >
              Sign up
            </NavLink>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;