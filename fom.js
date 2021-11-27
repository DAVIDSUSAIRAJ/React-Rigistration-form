import { useState } from "react";

import "./form.scss";
// THIS IS BOOTSTRP AND REACT JS REGISTRATION FORM
function Form(params) {
  const [name, setName] = useState({});
  const [feed, setFeed] = useState("");
  const [lfeed, setLfeed] = useState("");
  const [efeed, setEfeed] = useState("");
  const [tfeed, setTfeed] = useState("");
  const [adfeed, setAdfeed] = useState("");
  const [stfeed, setStfeed] = useState("");
  const [stateval, setStateval] = useState("");
  const [txtfeed, setTxtfeed] = useState("");
  const [txtval, setTxtval] = useState("");
  const [subval, setSubval] = useState("");
  
  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setName((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "fname") {
      const Letters = /^[a-zA-Z ]*$/;
      if (
        value !== "" &&
        value.match(Letters) &&
        3 <= value.length &&
        value.length <= 20
      ) {
        setFeed("WOW! looks good.");
        document.getElementsByTagName("span")[0].style.color = "green";
      } else {
        setFeed("* please check your input feild!! * ");
        document.getElementsByTagName("span")[0].style.color = "red";
      }
    }
    // try
    // this is only correct way not work id and class only html element
    // document.getElementsByClassName("hello")[0].style.color = 'red';
    // THIS IS LAST NAME
    if (name === "lname") {
      const Letters = /^[a-zA-Z ]*$/;
      if (
        value !== "" &&
        value.match(Letters) &&
        3 <= value.length &&
        value.length <= 20
      ) {
        setLfeed("WOW! looks good.");
        document.getElementsByTagName("span")[1].style.color = "green";
      } else {
        setLfeed("* please check your input feild!! *");
        document.getElementsByTagName("span")[1].style.color = "red";
      }
    }
    // THIS IS VALUE.MATCH(EMAIL REGEX)
    if (name === "email") {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (value.match(mailformat)) {
        setEfeed("WOW! looks good.");
        document.getElementsByTagName("span")[2].style.color = "green";
      } else {
        setEfeed("* please check your input feild!! * ");
        document.getElementsByTagName("span")[2].style.color = "red";
      }
    }
    // THIS IS END EMAIL VALIDATION
    // THIS IS PHONE VALIDATION
    if (name === "tel") {
      let pattern = /^\d{10}$/;
      if (value.match(pattern)) {
        setTfeed("WOW! looks good.");
        document.getElementsByTagName("span")[3].style.color = "green";
      } else {
        setTfeed("* please check your input feild!! * ");
        document.getElementsByTagName("span")[3].style.color = "red";
      }
    }
    // THIS IS END PHONE VALIDATION
    // THIS IS ADDRESS VALIDATION
    if (name === "address") {
      if (value !== "" && 15 <= value.length && value.length <= 60) {
        setAdfeed("WOW! looks good.");
        document.getElementsByTagName("span")[4].style.color = "green";
      } else {
        setAdfeed("* please check your input feild!! * ");
        document.getElementsByTagName("span")[4].style.color = "red";
      }
    }
    // THIS IS END ADDRESS VALIDATION
  };
  // this is comments
  const State = (e) => {
    const value = e.target.value;
    setStateval(value);
    if (value === "") {
      setStfeed("* please check your input feild!! * ");
      document.getElementsByTagName("span")[5].style.color = "red";
    } else {
      setStfeed("WOW! looks good.");
      document.getElementsByTagName("span")[5].style.color = "green";
    }
  };
  const Text = (e) => {
    const value = e.target.value;
    setTxtval(value);
    if (value === " " || value.length <= 20) {
      setTxtfeed("* please check your input feild!! * ");
      document.getElementsByTagName("span")[6].style.color = "red";
    } else {
      setTxtfeed("WOW! looks good.");
      document.getElementsByTagName("span")[6].style.color = "green";
    }
  };
  // SUBMIT FORM
  const HandleSubmit = (event) => {
    // event.preventDefault();

    alert(`${name.fname} form successfully addded`);
  };

  return (
    <div className=" bgColor">
      <div className="container">
        <div className="row">
          <form
            autoComplete="off"
            className="was-validated"
            onSubmit={HandleSubmit}
          >
            {/*THIS IS FIRST NAME AND LAST NAME DETAIALS */}
            <h2 className="text-primary text-center mt-2">
              REGISTRATION FORM
            </h2>
            <div className="row g-3">
              <div className="col-md-6">
                <label for="fname" className="form-label fs-5">
                  First name <i style={{ color: "red" }}>*</i>
                  <i style={{ color: "#0d6efd" }}>{name.fname}</i>
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="form-control"
                  placeholder="First name"
                  onChange={HandleChange}
                  aria-label="First name"
                  required
                ></input>
                <span className="fd" id="fid">
                  <i>{feed}</i>
                  <i style={{ visibility: "hidden" }}>*</i>
                </span>
              </div>

              <div className="col-md-6">
                <label for="lname" className="form-label fs-5">
                  Last name <i style={{ color: "red" }}>*</i>{" "}
                  <i style={{ color: "#0d6efd" }}>{name.lname}</i>
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className="form-control"
                  placeholder="Last name"
                  onChange={HandleChange}
                  aria-label="Last name"
                  required
                ></input>
                <span>
                  <i>{lfeed}</i>
                </span>
                <i style={{ visibility: "hidden" }}>*</i>
              </div>
            </div>
            {/* THIS IS END FIRST AND LAST NAME DETAILS */}
            {/* THIS IS EMAIL AND PHONE DETAILS */}
            <div className="row g-3">
              <div className="col-md-6">
                <label for="inputEmail" className="form-label fs-5">
                  Email <i style={{ color: "red" }}>*</i>{" "}
                  <i style={{ color: "#0d6efd" }}>{name.email}</i>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="inputEmail"
                  onChange={HandleChange}
                  placeholder="you@gmail.com"
                  required
                ></input>
                <span>
                  <i>{efeed}</i>
                </span>
                <i style={{ visibility: "hidden" }}>*</i>
              </div>
              <div className="col-md-6">
                <label for="mobileNumber" className="form-label fs-5">
                  Mobile number<i style={{ color: "red" }}> * </i>
                  <i style={{ color: "#0d6efd" }}>{name.tel}</i>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  className="form-control"
                  name="tel"
                  onChange={HandleChange}
                  placeholder="+918345343434"
                  required
                ></input>
                <span>
                  <i>{tfeed}</i>
                </span>
                <i style={{ visibility: "hidden" }}>*</i>
              </div>
            </div>
            {/* THIS IS END EMAIL AND MOBILEANUMBER */}
            {/* THIS IS ADDRESS AND STATE  */}
            <div className="row g-3">
              <div className="col-md-6">
                <label for="aname" className="form-label col-form-label-lg">
                  Address <i style={{ color: "red" }}> * </i>
                  <i style={{ color: "#0d6efd" }}>{name.address}</i>
                </label>
                <input
                  type="text"
                  name="address"
                  id="aname"
                  onChange={HandleChange}
                  className="form-control"
                  placeholder="Enter your address"
                  aria-label="Enter your addrress name"
                  required
                ></input>
                <span>
                  <i>{adfeed}</i>
                </span>
                <i style={{ visibility: "hidden" }}>*</i>
              </div>
              <div className="col-md-6">
                <label for="state" className="form-label col-form-label-lg">
                  State <i style={{ color: "red" }}>*</i>{" "}
                  <i style={{ color: "#0d6efd" }}>{stateval}</i>
                </label>
                <select
                  id="state"
                  className="form-select"
                  aria-label=".form-select-lg example"
                  onChange={State}
                  required
                >
                  <option value="">Open this select your state</option>
                  <option value="Tamilnadu">Taminadu</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                </select>
                <span>
                  <i>{stfeed}</i>
                </span>
                <i style={{ visibility: "hidden" }}>*</i>
              </div>
            </div>
            {/* THIS IS END ADDRESS AND STATE */}
            {/* THIS IS TEXT AREA */}
            <div className="row">
              <div className="col-12">
                <label for="floatingTextarea" className="form-label fs-5">
                  Aim and Experiance <i style={{ color: "red" }}>*</i>
                </label>
                <textarea
                  className="form-control form-control-lg "
                  placeholder="Enter your comment"
                  id="floatingTextarea"
                  onChange={Text}
                  required
                  // style={{ height: "" }}
                ></textarea>
                <span>
                  <i>{txtfeed}</i>
                </span>
                <i style={{ visibility: "hidden" }}>*</i>
              </div>
            </div>
            {/* THIS IS END TEXT AREA */}
            {/* THIS IS CHECK INPUT */}
            <div className="row mt-2">
              <div className="col-12">
                <div className="form-check mt-2">
                  <input
                    className="form-check-input checked"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    required
                  ></input>
                  <label className="form-check-label" for="flexCheckDefault">
                    Agree to terms & conditions
                  </label>
                </div>
              </div>
            </div>
            {/* THIS IS END CHECK INPUT */}
            {/* SUBMIT BUTTON */}
            <div className="row my-3">
              <button
                type="submit"
                className="btn btn-primary py-2 rounded-pill"
              >
                Submit
              </button>
            </div>

            {/* END SUBMIT BUTTON */}
          </form>
        </div>
      </div>
    </div>
  );
}
export default Form;
