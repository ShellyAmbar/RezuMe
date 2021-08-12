import React from "react";
import DropZone from "react-dropzone";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import "./FileUpload.css";

function FileUpload() {
  const onDrop = (files) => {
    let formData = new FormData();

    formData.append("file", files[0]);
  };
  return (
    <div className="file-upload-container">
      <DropZone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "350px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <AddIcon style={{ width: "40px", height: "40px" }} />
          </div>
        )}
      </DropZone>
      <div
        style={{
          border: "1px solid lightgray",
          display: "flex",
          width: "350px",
          height: "240px",
        }}
      >
        <img />
        <DeleteIcon />
      </div>
    </div>
  );
}

export default FileUpload;
