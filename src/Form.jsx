import { useEffect, useState } from "react";
import "./App.css";
import useColor from "./hooks/useColor";
import useHttp from "./hooks/useHttp";

const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordagain, setPasswordAgain] = useState("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passworagainError, setPasswordAgainError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const [allusersData, setAllUsersData] = useState([]);

  const [loading, error, response, getData, postData, deleteData] = useHttp("http://localhost:3000/users");

  const handleDelete = (id) => {
    deleteData(id);
  }

  const {
    headerColor,
    gray,
    brown,
    yellow,
    blue,
    lightblue,
    green,
    pink,
    purple,
  } = useColor();

  const validEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name.trim() === "" &&
      surname.trim() === "" &&
      email.trim() === "" &&
      password.trim() === "" &&
      passwordagain.trim() === ""
    ) {
      setGeneralError("All fields can't be empty");
      return;
    } else {
      setGeneralError("");
    }

    if (name.trim() === "") {
      setNameError("This filed can't be empty");
      return;
    } else {
      setNameError("");
    }

    if (surname.trim() === "") {
      setSurnameError("This filed can't be empty");
      return;
    } else {
      setSurnameError("");
    }

    if (email.trim() === "") {
      setEmailError("This filed can't be empty");
      return;
    } else if (!validEmail(email)) {
      setEmailError("Please enter valid email");
      return;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("This filed can't be empty");
      return;
    } else {
      setPasswordError("");
    }

    if (passwordagain.trim() === "") {
      setPasswordAgainError("This filed can't be empty");
      return;
    } else if (password !== passwordagain) {
      setPasswordAgainError("please enter the same password");
    } else {
      setPasswordAgainError("");
    }

    const userData = {
      name,
      surname,
      email,
      password,
      passwordagain,
    };
    postData(userData);

  };

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    setAllUsersData(response);
  }, [response])


  return (
    <div>
      <div className="header" style={{ backgroundColor: headerColor }}>
        Alphastellar Assessment
      </div>

      <div
        className="content"
        style={{ display: "flex", justifyContent: "space-between", margin: 20 }}
      >
        <div>
          <form onSubmit={handleSubmit}>
            <div
              className="button-wrapper"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "10rem",
                gap: "10px",
                margin: 20,
              }}
            >
              <button
                style={{
                  background: "#cbd5e1",
                  padding: "15px 50px",
                  border: "none",
                }}
                onClick={gray}
              >
                #cbd5e1
              </button>
              <button
                style={{
                  background: "#d6d3d1",
                  padding: "15px 50px",
                  border: "none",
                }}
                onClick={brown}
              >
                #d6d3d1
              </button>
              <button
                style={{
                  background: "#fde047",
                  padding: "15px 50px",
                  border: "none",
                }}
                onClick={yellow}
              >
                #fcba03
              </button>
              <button
                style={{
                  background: "#22d3ee",
                  padding: "15px 50px",
                  border: "none",
                }}
                onClick={blue}
              >
                #22d3ee
              </button>
              <button
                style={{
                  background: "#e0f2fe",
                  padding: "15px 50px",
                  border: "none",
                }}
                onClick={lightblue}
              >
                #e0f2fe
              </button>
              <button
                style={{
                  background: "#bef264",
                  padding: "15px 50px",
                  border: "none",
                }}
                onClick={green}
              >
                #bef264
              </button>
              <button
                style={{
                  background: "#f0abfc",
                  padding: "15px 50px",
                  border: "none",
                }}
                onClick={pink}
              >
                #f0abfc
              </button>
              <button
                style={{
                  background: "#a78bfa",
                  padding: "15px 50px",
                  border: "none",
                }}
                onClick={purple}
              >
                #a78bfa
              </button>
            </div>

            <div className="input-wrapper" style={{ marginLeft: "10%" }}>
              <h2 style={{ textAlign: "center" }}>PLEASE FILL IN THIS FORM</h2>
              {generalError && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {generalError}
                </p>
              )}
              <input
                type="text"
                placeholder="Your name..."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError("");
                }}
              />
              {nameError && (
                <p style={{ color: "red", textAlign: "center" }}>{nameError}</p>
              )}
              <input
                type="text"
                placeholder="Your surname..."
                value={surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                  setSurnameError("");
                }}
              />
              {surnameError && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {surnameError}
                </p>
              )}

              <input
                type="text"
                placeholder="Your email..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {emailError}
                </p>
              )}

              <input
                type="text"
                placeholder="Your password..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
              />
              {passwordError && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {passwordError}
                </p>
              )}

              <input
                type="text"
                placeholder="Your password again..."
                value={passwordagain}
                onChange={(e) => {
                  setPasswordAgain(e.target.value);
                  setPasswordAgainError("");
                }}
              />
              {passworagainError && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {passworagainError}
                </p>
              )}

              <div className="buttons">
                <button type="reset">Reset button</button>
                <button type="submit">Submit button</button>
              </div>
            </div>
          </form>
        </div>

        <div style={{ backgroundColor: "#ecf1f6", padding: 30 }}>
          {/* {loading && <p>Loading...</p>} */}
          {error && <p>Error: {error.message}</p>}
          {allusersData.map((item) => (
            <div key={item.id} style={{border: "1px solid gray", padding: 10}}>
              <p><b>Name: </b>{item.name}</p>
              <p><b>Surname: </b>{item.surname}</p>
              <p><b>Email: </b>{item.email}</p>
              <p><b>Password: </b>{item.password}</p>
              <button style={{background: "red", color: "#fff", padding: "8px 20px", border: "none"}}  onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>

      <div className="footer" style={{ backgroundColor: headerColor }}>
        <p>Designed & Built by</p>
        <span>Aytac Gahramanova</span>
      </div>
    </div>
  );
};

export default Form;
