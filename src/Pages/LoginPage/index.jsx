import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import logo2 from "../../assets/images/logo2.png";
import "./index.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { $JoinType, $Users } from "../../GlobalStates/Store";

export default function LoginPage() {
  const [users, setUsers] = useRecoilState($Users);
  const [joinType, setJoinType] = useRecoilState($JoinType);
  let emailInput = useRef();
  let passInput = useRef();
  const handleChange = () => {
    let emailVal = emailInput.current.value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailPaternCheck = pattern.test(emailVal);
    if (emailPaternCheck) {
      checkEmailExisit(emailVal);
    } else {
      setJoinType();
    }
  };
  function checkEmailExisit(emailInput) {
    let emailIndex = users.findIndex((user) => {
      return user.email.toLocaleLowerCase() == emailInput.toLocaleLowerCase();
    });
    if (emailIndex == -1) {
      setJoinType("register");
    } else {
      setJoinType("login");
    }
    return emailIndex;
  }
  function checkPass(index) {
    if (users[index].password == passInput.current.value) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  return (
    <div className="col-12 d-flex justify-content-center p-5 LoginForm">
      <form
        action="submit"
        onSubmit={(event) => {
          event.preventDefault();
          checkPass(0);
        }}
        className="col-12 col-sm-10 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center position-relativ">
        <img src={logo2} alt="" className="position-absolute col-7 logo" />
        <div className="col-12 bg-primary py-3 px-4 formTop d-flex align-items-end position-relative">
          <div className="container d-flex position-relative h-75">
            <img
              src={img1}
              alt=""
              className="object-fit-cover  col-6 img1 position-absolute"
            />
            <img
              src={img2}
              alt=""
              className=" object-fit-cover img2 position-absolute"
            />
          </div>
        </div>
        <div className="col-12 d-flex flex-column align-items-start justify-content-center gap-5 gap-lg-4 p-5 bg-white formBody">
          <div className="position-relative col-10 col-md-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="col-12 email"
              ref={emailInput}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={faUser}
              className="position-absolute userIcon"
            />
          </div>
          {joinType == "login" ? (
            <div className="d-flex flex-column gap-5 gap-lg-4 align-items-start justify-content-center col-12">
              <div className="position-relative col-10 col-md-12">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="col-12 email"
                  ref={passInput}
                />
                <FontAwesomeIcon
                  icon={faLock}
                  className="position-absolute userIcon"
                />
              </div>
              <div className="d-flex gap-2 align-items-center ms-2 ">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button className="submitBtn align-self-center">Login</button>
            </div>
          ) : joinType == "register" ? (
            <div className="d-flex flex-column gap-5 gap-lg-4 align-items-center justify-content-center col-12">
              <div className="position-relative col-10  col-md-12">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="col-12 email "
                />
                <FontAwesomeIcon
                  icon={faLock}
                  className="position-absolute userIcon"
                />
              </div>
              <div className="position-relative col-10  col-md-12">
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="col-12 email "
                />
                <FontAwesomeIcon
                  icon={faLock}
                  className="position-absolute userIcon"
                />
              </div>
              <button className="submitBtn">Register</button>
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
