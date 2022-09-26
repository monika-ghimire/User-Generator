import React from 'react'
import  Styles from '../styles/IconsBtn.module.css'
import IconsBtn from '../Components/IconsBtn';
import { selectImgUrl } from '../ReduxStore/Reducer/randomUserSlice';
import { useSelector, useDispatch } from "react-redux";


export default function FormHolder() {
  const imgUrl = useSelector(selectImgUrl);
  return (
  <>
  <div class={Styles.ContainerHolder}>
  <p class={Styles.Heading}>Random User Generator</p>
  <div class={Styles.formHolder}>
  <img src={imgUrl}/>
  </div>
  
  
  <div class={Styles.detailsShowContainer}>
 <IconsBtn/>
 </div> 

  </div>

 
 
  </>
  )
}
