import { useState } from "react";

function FileUpload({ label }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="upload-box">
      <label>{label}</label>

      <input type="file" onChange={handleFileChange} />

      {file && (
        <div className="file-preview">
          <p>{file.name}</p>
          <p>{(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;