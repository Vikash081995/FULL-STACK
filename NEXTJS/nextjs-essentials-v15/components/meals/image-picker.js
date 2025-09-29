"use client";
import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  const imageInputRef = useRef();

  function handleImageClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;   
    }

    const fileReader = new fileReader();
    fileReader.onload = function (event) {
      setPickedImage(event.target.result);
    };

    // Read the file as a data URL
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="image-picker">
      <label htmlFor={name}>{label}</label>
      <div>{pickedImage && <Image src={pickedImage} alt="Picked" />}</div>
      <div className={classes.controls}>
        <input
          type="file"
          id="image"
          name={name}
          accept="image/*"
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handleImageClick}
        >
          Pick an Image{" "}
        </button>
      </div>
    </div>
  );
}
