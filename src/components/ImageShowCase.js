import React from "react";
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/carousel-images.css";

function ImageShowCase({imageSource, onCloseButton}) {

    const closeImageHandler = () => {
        onCloseButton(); 
      }

  return (
    <div className="image__container">
      <Image src={imageSource} className="image__container--image"/>
      <Button variant="secondary" onClick={closeImageHandler}>
        Close
      </Button>
    </div>
  );
}

export default ImageShowCase;
