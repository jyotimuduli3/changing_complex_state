import React, { useState } from "react";

function App() {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  // function fhandleChange(event) {
  //   setFname(event.target.value);
  // }
  // function lhandleChnage(event) {
  //   setLname(event.target.value);
  // }

  //handling complex state
  const [fullname, setFullname] = useState({
    fname: "",
    lname: ""
  });
  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputname = event.target.name;
    // instead
    const { name, value } = event.target;

    setFullname((prevvalue) => {
      if (name === "fName") {
        return { fname: value, lname: prevvalue.lname };
      } else if (name === "lName") {
        return { fname: prevvalue.fname, lname: value };
      }
    });
  }
  // function handleClick(event) {
  //   setFirstname(fname);
  //   setLastname(lname);

  //   event.preventDefault();
  // }

  return (
    <div className="container">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullname.fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
