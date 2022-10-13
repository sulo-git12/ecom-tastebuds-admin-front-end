import React, { useState, useEffect } from "react";
import axios from "axios";
import TableScrollbar from "react-table-scrollbar";
import "../styles/item.css";
import { Button, Form } from "semantic-ui-react";
import config from "../config.json";

const Outlet = () => {
  //Get All Outlet Details
  const [Outlets, setAllOutlets] = useState([]);
  //image
  const [selectedFile, setSelectedFile] = useState();
  const [ImageLocation, setImageLocation] = useState(null);

  const fetchAllOutlets = async () => {
    const { data } = await axios.get("http://localhost:8088/api/outlets");
    setAllOutlets(data);
  };

  //image
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
        console.log(res);
        setImageLocation(res.data.Location);
      })
      .catch((error) => {
        console.error(error.response);
      });
    console.log("Uploaded successfully");
  };
  //end

  useEffect(() => {
    fetchAllOutlets();
  }, []);

  const urldata = "http://localhost:8088/api/outlets";

  const [data, setData] = useState({
    outletNo: "",
    name: "",
    no: "",
    street: "",
    city: "",
    latitude: "",
    longitude: "",
    days: "",
    hours: "",
    rating: "",
    contactNo: "",
    description: "",
    type: "",
    imageUrl: "",
    email: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();

    axios
      .post(urldata, {
        outletNo: data.outletNo,
        name: data.name,
        address: {
          no: data.no,
          street: data.street,
          city: data.city,
        },
        location: {
          latitude: data.latitude,
          longitude: data.longitude,
        },
        opening: {
          days: data.days,
          hours: data.hours,
        },
        type: [data.type],
        rating: data.rating,
        contactNo: data.contactNo,
        email: data.email,
        description: data.description,
        imageUrl: ImageLocation,
      })
      .then((res) => {
        //console.log(res.data);
        alert(res.data);
        alert("Insert Succesfully");
      })
      .catch((res) => {
        let errs = res.response.data;
        console.log(errs);
        // for (let err in errs) {
        //   console.log(errs[err]);
        // }
        // alert(res.errors)
      });
  }

  return (
    <React.StrictMode>
      <div>
        <Form>
          <table align="center">
            <tbody>
              <tr>
                <td>&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>Outlet No :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="outletNo"
                      onChange={(e) => handle(e)}
                      value={data.outletNo}
                    />
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Name :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={(e) => handle(e)}
                      value={data.name}
                    />
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Street No :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="no"
                      onChange={(e) => handle(e)}
                      value={data.no}
                    />
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>Street :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="street"
                      onChange={(e) => handle(e)}
                      value={data.street}
                    />
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>City :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      onChange={(e) => handle(e)}
                      value={data.city}
                    />
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Location Latitude :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="latitude"
                      onChange={(e) => handle(e)}
                      value={data.latitude}
                    />
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>Location Longitude :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="longitude"
                      onChange={(e) => handle(e)}
                      value={data.longitude}
                    />
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Opening Days :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="days"
                      onChange={(e) => handle(e)}
                      value={data.days}
                    />
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Opening Hours :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="hours"
                      onChange={(e) => handle(e)}
                      value={data.hours}
                    />
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>Ratings :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="rating"
                      onChange={(e) => handle(e)}
                      value={data.rating}
                    />
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Contact No :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactNo"
                      onChange={(e) => handle(e)}
                      value={data.contactNo}
                    />
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Description :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      onChange={(e) => handle(e)}
                      value={data.description}
                    />
                  </Form.Field>
                </td>
              </tr>
              <tr>
                <td>&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td>
                  <Form.Field>
                    <label>Email :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      onChange={(e) => handle(e)}
                      value={data.email}
                    />
                  </Form.Field>
                </td>
                <td>
                  <Form.Field>
                    <label>Type :&nbsp;</label>
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      onChange={(e) => handle(e)}
                      value={data.type}
                    />
                  </Form.Field>
                </td>
                {/* <td>
                  <Form.Field>
                    <label>Image URL :&nbsp;</label>
                    
                    <input
                      type="text"
                      className="form-control"
                      id="imageUrl"
                      onChange={(e) => handle(e)}
                      value={ImageLocation}
                    />
                  </Form.Field>
                </td> */}
              </tr>
              <tr>
                <td>&nbsp;&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <table align="center">
            <tbody>
              <tr style={{ rowspan: "2" }}>
                <td>
                  <div>
                    <div>
                      <p>Please upload an image for TasteBuds</p>
                      <input
                        type="file"
                        name="uploadImage"
                        onChange={onChange}
                      />
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
                          alt="Retrive Upload Image" style={{width:"250px", height:"250px"}}
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>&nbsp;&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <table align="center">
            <tbody>
              <tr>
                <td>
                  <Button
                    type="submit"
                    name="save"
                    className="btn btn-primary"
                    onClick={(e) => submit(e)}
                  >
                    Save
                  </Button>
                </td>
              </tr>
              <tr>
                <td>&nbsp;&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </Form>

        <TableScrollbar height="400px">
          <table className="table table-bordered table-responsive">
            <thead className="thead-dark bg-info">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Type</th>
                <th scope="col">Ratings</th>
                <th scope="col">Contact No</th>
                <th scope="col">Email</th>
                <th scope="col">Description</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>
              {Outlets.map((outlat) => (
                <tr key={outlat.outletNo}>
                  <td>{outlat.name}</td>
                  <td>
                    {outlat.address.no},{outlat.address.street},
                    {outlat.address.city}
                  </td>
                  <td align="center">{outlat.type}</td>
                  <td align="center">{outlat.rating}</td>
                  <td align="center">{outlat.contactNo}</td>
                  <td>{outlat.email}</td>
                  <td>{outlat.description}</td>
                  <td align="center">
                    <img src={outlat.imageUrl} alt="food-items" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScrollbar>
      </div>
    </React.StrictMode>
  );
};

export default Outlet;
