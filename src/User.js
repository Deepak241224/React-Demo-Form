import React, { useState } from "react";
import "./index.css"
function User(){
   const [name,setName] = useState("");
   const[passw,setPassword] = useState("");
   const [nameErr,setNameErr] = useState(false);
   const [passwErr,setPasswordErr] = useState(false);
   const [phone,setPhone] = useState("");
   const [phoneErr,setPhoneErr] = useState(false);
   function formHandle(e)
   {
      e.preventDefault();
      if(name.length<3 || passw.length<3 || phone.length<10 || phone.length>10)
      {
         alert("please enter corret values")
      }
      else{
         console.log(name,phone,passw);
      //    let data = document.getElementById("showing-data").setAttribute(name.value)
      //   data = name;
      //      console.log(data)
      document.getElementById("showing-data").innerHTML = `${name} <br> ${phone} <br> ${passw}`;
         document.getElementById("showing-data2").innerHTML = navigator.appVersion;
      }
   }
   function userHandle(e)
   {
      let item = e.target.value
      if(item.length<3)
      {
         setNameErr(true)
      }
      else{
         setNameErr(false)
      }
      setName(item)
   }
   function passHandle(e)
   {
      let item = e.target.value
      if(item.length<5)
      {
         setPasswordErr(true)
      }
      else{
         setPasswordErr(false)
      }
      setPassword(item)
   }
   // phone handle
   function phoneHandle(e)
   {
      let item = e.target.value
      if(item.length<10)
      {
         setPhoneErr(true)
      }
      else if(item.length>10)
      {
         setPhoneErr(true)
      }
      else{
         setPhoneErr(false)
      }
      setPhone(item)
   }
      return(
         <div className="container">
         <div className="form">
         <h1>Login page</h1>
         <form onSubmit={formHandle}>
            <input type="text"required placeholder="Enter username" onChange={userHandle}/>{nameErr?<span>user not valid</span>:""}
            <br /><br />
            <input type="email" required placeholder="Enter your Email"/>
            <br /><br />
            <input type="tel" required placeholder="Enter your Phone" onChange={phoneHandle}/>{phoneErr?<span>phone number is not valid</span>:""}
            <br /><br />
            <input type="text" required placeholder="Enter your Address"/>
            <br /><br />
            <select>
               <option selected disabled>Select your state</option>
               <option>Delhi</option>
               <option>Uttarakhand</option>
               <option>Maharastra</option>
               <option>Chennai</option>
            </select>
            <br /><br />
            <input type="text" required placeholder="Enter password" onChange={passHandle}/>{passwErr?<span>user not valid</span>:""}
            <br /><br />
            <button type="submit">Submit</button>
         </form>
         </div>
         <div className="showing-data">
            <h1>User data</h1>
            <p id="showing-data"></p>
            <p id="showing-data2"></p>
         </div>
         </div>
      );
}
export default User;