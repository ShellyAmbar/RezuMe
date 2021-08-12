import React from "react";
import FileUpload from "../../../customs/file_upload/FileUpload";

function EditMediaGallery() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Upload Photo</h1>
      <FileUpload />
    </div>
  );
}

export default EditMediaGallery;
