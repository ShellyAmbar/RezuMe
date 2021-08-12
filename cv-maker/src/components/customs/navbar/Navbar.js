import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../button/Button";
import "../navbar/Navbar.css";
import { useAuth } from "../../contexts/AuthContext";
import { Modal } from "react-bootstrap";

function Navbar() {
  const statuses = ["Sign Up", "Log Out"];
  const [click, setClick] = useState(false);
  const [buttonRegister, setButtonRegister] = useState(true);
  const [registerStatus, setRegisterStatus] = useState(statuses[0]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [showLogout, setshowLogout] = useState(false);
  const history = useHistory();
  const { logout, currentUser } = useAuth();

  async function handleLogout(e) {
    try {
      setLoading(true);
      setSuccess("");
      setError("");
      await logout();
      setSuccess("You loged out successfully!");
      currentUser = null;
    } catch {
      setSuccess("");
      setError("Failed to logout");
    }
    setLoading(false);
    setshowLogout(true);
  }

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButtonRegister(false);
    } else {
      setButtonRegister(true);
    }
  };
  const onClickButtonRegister = () => {
    if (registerStatus == statuses[0]) {
      history.push("/SignUp");
    } else if (registerStatus == statuses[1]) {
      setRegisterStatus(statuses[0]);

      handleLogout();
      history.push("/");
    }
    closeMobileMenu();
  };

  useEffect(() => {
    if (currentUser) {
      setRegisterStatus(statuses[1]);
    } else {
      setRegisterStatus(statuses[0]);
    }
  }, [currentUser]);

  const handleRegisteration = () => {};

  window.addEventListener("resize", showButton);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <i class="fas fa-feather-alt"></i>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/ResumeGenerator"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Resume Generator
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/ResumesGallery"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Resumes Gallery
            </Link>
          </li>
          {!buttonRegister && (
            <li className="nav-item">
              <Link className="nav-links" onClick={onClickButtonRegister}>
                {registerStatus}
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link
              to="/UpdatePasswordEmail"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Resume" className="nav-links" onClick={closeMobileMenu}>
              Profile
            </Link>
          </li>
        </ul>
        {buttonRegister && (
          <Button buttonStyle="btn--outline" onClick={onClickButtonRegister}>
            {currentUser ? statuses[1] : statuses[0]}
          </Button>
        )}
      </div>

      <Modal
        size="sm"
        show={showLogout}
        onHide={() => setshowLogout(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "green" }}
            id="example-modal-sizes-title-sm"
          >
            {success ? (
              <div style={{ color: "green" }}>{success}</div>
            ) : (
              <div style={{ color: "red" }}>{error}</div>
            )}
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default Navbar;
