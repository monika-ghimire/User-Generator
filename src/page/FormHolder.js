import React from 'react'
import  Styles from '../styles/IconsBtn.module.css'
import IconsBtn from '../Components/IconsBtn';
export default function FormHolder() {
  return (
  <>
  <div class={Styles.ContainerHolder}>
  <p class={Styles.Heading}>Random User Generator</p>
  <div class={Styles.formHolder}>
  <img src='https://randomuser.me/api/portraits/men/57.jpg'/>
  </div>
  
  
  <div class={Styles.detailsShowContainer}>
 <IconsBtn/>
 </div> 

  </div>

 
 
  </>
  )
}
