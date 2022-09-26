import React, {useState, useEffect } from "react";
import styles from "../styles/IconsBtn.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import {storeImgUrl} from "../ReduxStore/Reducer/randomUserSlice";

export default function IconsBtn() {
 const dispatch=useDispatch();

  const [data , setData]=useState([])
 
    useEffect(() => {
      axios.get("https://randomuser.me/api/").then((resp) => {

        setData(resp.data.results[0]) 
        dispatch(storeImgUrl(data.picture.large))
      });
    });

  

  let demo3 = document.getElementById("demo3");
  let ApiUserDataShow = document.getElementById("ApiUserDataShow");
  function myOverContact() {
    demo3.innerHTML = "Hi, My name is";
    ApiUserDataShow.innerHTML = data.name.first;
  }
  function myOverEmail() {
    demo3.innerHTML = "My email address is";
    ApiUserDataShow.innerHTML = data.email;
  }

  function myOverDOB() {
    demo3.innerHTML = "My birthday is";
    ApiUserDataShow.innerHTML = data.dob.date;
  }

  function myOverAddress() {
    demo3.innerHTML = "My address is";
    ApiUserDataShow.innerHTML = data.location.state;
  }
  function myOverPhone() {
    demo3.innerHTML = "My phone number is";
    ApiUserDataShow.innerHTML = data.phone;
  }
  function myOverpassword() {
    demo3.innerHTML = "My password is";
    ApiUserDataShow.innerHTML = data.id.value;
  }
  return (
    <>
      <p class={styles.dataShow}>
        {""}
        <span id="demo3">Mouse over me!</span>
      </p>
      <h3>
        {" "}
        <span id="ApiUserDataShow"></span>
      </h3>

      <div className="container text-center">
        <div className="row">
          <p onMouseEnter={myOverContact} className="col">
            UserName
          </p>
          <p onMouseEnter={myOverEmail} className="col">
            email
          </p>
          <p onMouseEnter={myOverDOB} className="col">
            Date of birth
          </p>
          <p onMouseEnter={myOverAddress} className="col">
            Address
          </p>
          <p onMouseEnter={myOverPhone} className="col">
            Phone
          </p>
          <p onMouseEnter={myOverpassword} className="col">
            password
          </p>
        </div>
      </div>
    </>
  );
}
