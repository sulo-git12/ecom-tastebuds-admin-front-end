import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/item.css";
import { Button, Form } from "semantic-ui-react";

const EditOutlet = () => {
  //Get All Outlet Details
  const [Outlets, setAllOutlets] = useState([]);
  const [foodOutlet, setFoodOutlet] = useState([]);
  const [OutletID, setOutletID] = useState();


  const fetchAllOutlets = async () => {
    const { data } = await axios.get("http://localhost:8088/api/outlets");
    setAllOutlets(data);
  };


  // Get specific outlet details by outletId.
  const getFoodOutletById = async (paramId) => {
    try {
      
      let URL = `http://localhost:8088/api/outlets/${paramId}`;

      const { data } = await axios.get(URL);

      setFoodOutlet(data);
      console.log(data);
      
    } catch (error) {
      console.log(error);
    } 
    
  };

  useEffect(() => {
    fetchAllOutlets();
  }, []);


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
    isActive: "",
    email: "",
  });

  
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function rowclick(e){
    getFoodOutletById(e);
    setOutletID(e);
  }
  
  
  
  function submit(e) {
    e.preventDefault();
    let urldata = `http://localhost:8088/api/outlets/${OutletID}`;
    axios
      .put(urldata, {
        name: data.name,
        contactNo: data.contactNo,
        email: data.email,
        description: data.description,
        imageUrl: data.imageUrl,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((res) => {
        let errs = res.response.data;
        console.log(errs);
        // for (let err in errs) {
        //   console.log(errs[err]);
        // }
      });
  }


  function submitDelete(e) {
    e.preventDefault();
    let urldata = `http://localhost:8088/api/outlets/${OutletID}`;
    axios
      .delete(urldata, {
        
      })
      .then((res) => {
        alert(res.data);
        
      })
      .catch((res) => {
        let errs = res.response.data;
        console.log(errs);
        // for (let err in errs) {
        //   console.log(errs[err]);
        // }
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
                  value={foodOutlet.outletNo}
                />
              </Form.Field>
              <p>{foodOutlet.outletNo}</p>
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
              <p>{foodOutlet.name}</p>
            </td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;</td>
          </tr>
          <tr>
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
              <p>{foodOutlet.contactNo}</p>
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
              <p>{foodOutlet.description}</p>
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
              <p>{foodOutlet.email}</p>
            </td>
            <td>
              <Form.Field>
                <label>Image URL :&nbsp;</label>
                <input
                  type="text"
                  className="form-control"
                  id="imageUrl"
                  onChange={(e) => handle(e)}
                  value={data.imageUrl}
                />
              </Form.Field>
              <p>{foodOutlet.imageUrl}</p>
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
              <Button type="submit" onClick={(e) => submit(e)} name="update" className="btn btn-warning">
                Update
              </Button>
            </td>
            <td>
              <Button type="submit" delete="delete" onClick={(e) => submitDelete(e)} className="btn btn-danger">
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;</td>
          </tr>
          </tbody>
        </table>
      </Form>

      <table className="table table-bordered table-responsive">
        <thead className="thead-dark bg-info">
          <tr>
            <th scope="col">#</th>
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
              <th scope="row" align="center">
                <img
                  src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-10/32/Pencil-icon.png"
                  id={outlat.outletNo}
                  alt="edit_data"
                  onClick={(e) => rowclick(outlat.outletNo)}
                />
              </th>
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
    </div>
    </React.StrictMode>
  );
};

export default EditOutlet;
