import React, { useState } from 'react';
import styles from '../styles/IconsBtn.module.css'
import axios from 'axios';

export default function IconsBtn() {
   const [obj,setInterval]=useState([])
  function PostData()
  {
   axios({
     method:'Get',
     url:'https://randomuser.me/api/',
    //  data:UserData
   }).then((res)=>{console.log(res)
  })
   .catch(err=>console.error(err));
  }

  
      function myOverContact() {
     
        document.getElementById("demo3").innerHTML ="Hi, My name is" ;
        document.getElementById('ApiUserDataShow')
   
     }
     function myOverEmail() {
        document.getElementById("demo3").innerHTML ="My email address is" ;
      
     }
     function myOverDOB() {
        document.getElementById("demo3").innerHTML ="My birthday is" ;
     
     }
     function myOverAddress() {
        document.getElementById("demo3").innerHTML ="My address is" ;
      
     }
     function myOverPhone() {
      document.getElementById("demo3").innerHTML ="My phone number is" ;
     
   }
     function myOverpassword() {
        document.getElementById("demo3").innerHTML ="My password is" ;
     
     }
  return (
 <>
 <p class={styles.dataShow}>  <span id="demo3">Mouse over me!</span></p>
 <h3> <span id="ApiUserDataShow"></span></h3>

 <div className="container text-center">
  <div className="row">
  
         <p onMouseEnter={myOverContact} className="col">
         UserName
       </p>
       <p  onMouseEnter={ myOverEmail} className="col">
       email
       </p>
       <p  onMouseEnter={myOverDOB} className="col">
       Date of birth
       </p>
       <p  onMouseEnter={myOverAddress} className="col">
       Address
       </p>
       <p  onMouseEnter={myOverPhone} className="col">
       Phone
       </p>
       <p  onMouseEnter={myOverpassword} className="col">
       password
       </p>

     
    
  </div>
</div>
 </>
  )
}

