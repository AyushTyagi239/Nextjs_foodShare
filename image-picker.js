'use client';
import { useRef, useState } from "react";
import classes from "./image-picker.module.css"

export default function ImagePicker({label,name}){
    const [pickedImage, SetPickedImage] = useState();
    const imageInput = useRef();
    function handlePickClick(){
         imageInput.current.click();
    }
    function handleImageChange(event){
    const file = event.target.files[0];
    if(!file){
        return;
    }
    const fileReader=new FileReader();
    fileReader.onload=()=>{
        SetPickedImage(fileReader.result)
    }
    fileReader.readAsDataURL(file);
    }
return (
    <div className={classes.picker}>
        <label htmlFor ={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No Image Selected</p>}
                {pickedImage && (
                    <Image 
                    src={pickedImage}
                    alt="The Image"
                    />
                )}
            </div>
         <input type ="file"
         className={classes.input}
         id={name}
         accept="image/png image/jpeg" 
         name={name}
         ref={imageInput}
         onChange={handleImageChange}
         />
         <button className={classes.button} type="button" onClick={handlePickClick}>Pick An Image</button>
        </div>
    </div>
)
}