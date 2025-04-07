// components/Photos.js
import React, { useState, useEffect } from 'react';

function Photos() {
  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (image) => {
    setClickedImage(image);
  };

  const handleOutsideClick = (e) => {
    if (e.target.closest(".photo-gallery") === null) {
      setClickedImage(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <section id="photos">
      <h2>Photos</h2>
      <div className="photo-gallery">
        {["Picture1", "Picture2", "Picture3", "Picture4", "Picture5", "Picture6", "Picture7", "Picture8", "Picture9", "Picture10", "Picture11", "Picture12", "Picture13", "Picture14", "Picture15", "Picture16", "Picture17", "Picture18", "Picture19", "Picture20", "Picture21", "Picture22"].map((pic, index) => (
          <img
            key={index}
            src={`Pictures/${pic}.png`}
            alt=""
            className={`photo ${clickedImage === pic ? 'image-clicked' : ''}`}
            onClick={() => handleImageClick(pic)}
          />
        ))}
      </div>
    </section>
  );
}

export default Photos;