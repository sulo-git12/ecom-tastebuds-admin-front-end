import React, { useState, useEffect } from "react";
import axios from "axios";
//import "bootstrap/dist/css/bootstrap.css";
import "../styles/home.css";

const Home = () => {
  
  //Outlats Count
  const [outlats, setOutlats] = useState([]);

  const fetchOutlats = async () => {
    const { data } = await axios.get(
      "http://localhost:8088/api/detailscount/outlets"
    );
    
    const outlats = data;
    setOutlats(outlats);
  };

  useEffect(() => {
    fetchOutlats();
  }, []);

  //Orders Count
  const [order, setOrders] = useState([]);

  const fetchOrders = async () => {
    const { data } = await axios.get(
      "http://localhost:8088/api/detailscount/orders"
    );
    
    const order = data;
    setOrders(order);
  };

  useEffect(() => {
    fetchOrders();
  }, []);


  //Users Count
  const [user, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get(
      "http://localhost:8088/api/detailscount/users"
    );
    
    const user = data;
    setUsers(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);



  return (    
   <div className="container">
        <div className="card">
            <div className="card-header">
            <img src="https://png.pngtree.com/png-clipart/20220930/original/pngtree-supermarket-with-shelves-shop-store-png-image_8643666.png" alt="rover" />
            </div>
            <div className="card-body">
            <span className="tag tag-teal">OUTLETS</span>
            <h4>
                Total Outlets Count
            </h4>
            <p>
                This is our total outlets count in this section.
            </p>
            <div className="user">
                <img src="https://png.pngtree.com/png-clipart/20220930/original/pngtree-supermarket-with-shelves-shop-store-png-image_8643656.png" alt="user" />
                <div className="user-info">
                <h5>Outlets : {outlats.foodOutlets}</h5>
                </div>
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
            <img src="https://png.pngtree.com/png-clipart/20220909/original/pngtree-food-delivery-50s-60s-art-png-image_8498011.png" alt="ballons" />
            </div>
            <div className="card-body">
            <span className="tag tag-purple">ORDERS</span>
            <h4>
                Total Orders Count
            </h4>
            <p>
                This is our total orders count in this section.
            </p>
            <div className="user">
                <img src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-illustration-of-male-chef-png-image_8364030.png" alt="user" />
                <div className="user-info">
                <h5>Orders : {order.orders}</h5>
                </div>
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
            <img src="https://png.pngtree.com/png-clipart/20220930/original/pngtree-customer-feedback-with-people-giving-star-ratings-clients-choose-satisfaction-or-png-image_8644417.png" alt="city" />
            </div>
            <div className="card-body">
            <span className="tag tag-pink">USERS</span>
            <h4>
                Total Users Count
            </h4>
            <p>
                This is our total users count in this section.
            </p>
            <div className="user">
                <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg" alt="user" />
                <div className="user-info">
                <h5>Users : {user.users}</h5>
                </div>
            </div>
            </div>
        </div>      
    </div>
  );
};

export default Home;
