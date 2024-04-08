import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  /*   const [usersList, setUsersList] = useState([]);
  const userForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userFormData = new FormData(userForm.current);
    let newUser = {};
    //for (let [key, value] of userFormData.entries()){
    //  newUser[key] = value;
      //console.log(`${key}: ${value}`);
    //}
    newUser = Object.fromEntries(userFormData.entries());
    setUsersList((prev) => [...prev, newUser]);
    userForm.current.reset();
  };
  console.log(usersList) */
  const [customerInfo, setCustomerInfo] = useState({
    fullName: "", 
    phoneNumber: "",
  });

  const [errorMessages, setErrorMessages] = useState({});
  const [formIsValid, setFormIsValid ] = useState(null);
  
  const validateInput = ()=>{
    let isValid = true;
    const clonedErrors = { ...errorMessages };
    if(!customerInfo.fullName.trim()){
      clonedErrors.fullNameError = !customerInfo.fullName.trim()
      ? "Full name is required! ⚠️" 
      : "";
      isValid = false
    } 
    if(!customerInfo.phoneNumber.trim()){
        clonedErrors.phoneNumberError = "Phone number is required! ⚠️";
        isValid = false
      } 
      else if(customerInfo.phoneNumber.length !== 8){
        clonedErrors.phoneNumberError = "Phone number must be 8 digits! ⚠️"
        isValid=false
      } else{
        clonedErrors.phoneNumberError = "";
        isValid = true;
      }
    
    setErrorMessages(clonedErrors);
    return isValid 
  };

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setCustomerInfo({...customerInfo, [name]: value})
  };
/*   const handleBlur = (e)=>{
    const { name, value } = e.target;
    validateInput(name, value);
  };
 */

  const handleSubmission = (e)=>{
    e.preventDefault();
    const valid = validateInput()
    setFormIsValid(valid);
    if(valid) {
      console.log('Form is submitting!');
    } else {
      console.log('Form is not valid!');
    }
  }

  return (
    <> 

    <form onSubmit={handleSubmission}>
      <div>
        <label htmlFor="fullName">Full name:</label>
        <input type="text" name="fullName" onChange={handleChange} /* onBlur={handleBlur} */></input>
        <p>{errorMessages.fullNameError}</p>
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" name="phoneNumber" onChange={handleChange} /* onBlur={handleBlur} */></input>
        <p>{errorMessages.phoneNumberError}</p>
      </div>
      <button className="button">Submit</button>
    </form>
 {/*      <div>
        <form onSubmit={handleSubmit} ref={userForm}>
          <div>
            <label htmlFor="firstName"></label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
            ></input>
          </div>
          <div>
            <label htmlFor="lastName"></label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
            ></input>
          </div>
          <div>
            <label htmlFor="birthDate"></label>
            <input
              type="date"
              name="birthDate"
              placeholder="Enter your birth date"
            ></input>
          </div>
          <div>
            <label htmlFor="city"></label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
            ></input>
          </div>
          <div>
            <label htmlFor="zip"></label>
            <input
              type="text"
              name="zip"
              placeholder="Enter your zip code"
            ></input>
          </div>
          <button>Submit</button>
        </form>
      </div> */}
    </>
  );
}

export default App;
