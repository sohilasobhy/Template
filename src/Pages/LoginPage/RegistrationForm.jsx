import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import logo2 from "../../assets/images/logo2.png";
import "./index.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
export default function RegistrationFrom() {
  return (
    <div className="col-12 d-flex justify-content-center p-5 RegistrationFrom">
      <form
        action="submit"
        className="col-12 col-sm-8 col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center position-relativ">
        <img src={logo2} className="position-absolute col-7 logo" />
        <div className="col-12 bg-primary py-3 px-4 formTop d-flex align-items-end position-relative">
          <div className="container d-flex position-relative h-75">
            <img
              src={img1}
              alt=""
              className="object-fit-cover col-6 img1 position-absolute"
            />
            <img
              src={img2}
              alt=""
              className=" object-fit-cover img2 position-absolute"
            />
          </div>
        </div>
        <div className="col-12 d-flex flex-column align-items-center justify-contant-center gap-5 gap-md-4 gap-lg-3 p-3 bg-white formBody">
          <div className="position-relative col-10 col-md-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="col-12 email "
            />
            <FontAwesomeIcon
              icon={faUser}
              className="position-absolute userIcon"
            />
          </div>
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
          <button className="submitBtn ">Register</button>
        </div>
      </form>
    </div>
  );
}
