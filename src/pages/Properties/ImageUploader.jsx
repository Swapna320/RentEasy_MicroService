import { useState } from "react";
import "../../styles/uploader.css";

function ImageUploader() {
  const [images, setImages] = useState([]); 

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  
  const removeImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="upload-box">
      <h3>Upload Images</h3>
      <input type="file" multiple onChange={handleImages} />

      <div className="image-grid">
        {images.map((file, index) => (
          <div key={index} className="image-wrapper">
            <img src={URL.createObjectURL(file)} alt={file.name} />
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeImage(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUploader;