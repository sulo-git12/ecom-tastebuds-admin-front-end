import axios from "axios";
import { useState } from "react";
import config from "../config.json";

export const S3ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [ImageLocation, setImageLocation] = useState(null);

  const onChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const uploadImage = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("file", selectedFile);
    // console.log(formData);
    const apiURL = config.serverURL + config.imageEndpointPath;
    const { data } = axios({
      method: "post",
      url: apiURL,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        //console.log(res);
        setImageLocation(res.data.Location);
      })
      .catch((error) => {
        console.error(error.response);
      });
    console.log("Uploaded successfully");
  };
  return (
    <div>
      <div className="container">
        <div></div>
        <div
          className="card border-light mb-3 mt-5"
          style={{ boxShadow: "0 6px 10px 3px rgba(200,200,200,200)" }}
        >
          <div className="card-header">
            <h3 style={{ marginLeft: "10px" }}>Image Upload</h3>
            <p className="text-muted" style={{ marginLeft: "12px" }}>
              Image Upload to S3 Bucket
            </p>
          </div>
          <div className="card-body">
            <p className="card-text">Please upload an image for TasteBuds</p>
            <input type="file" name="uploadImage" onChange={onChange} />
            <div className="mt-5">
              <button className="btn btn-info" onClick={uploadImage}>
                Upload
              </button>
            </div>
            <br></br>
            <div>
              <img
                src={ImageLocation}
                className="img-fluid"
                alt="Retrive Upload Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
