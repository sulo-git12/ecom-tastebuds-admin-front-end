import React, { useState, useEffect } from "react";
import axios from "axios";
import TableScrollbar from 'react-table-scrollbar';
import "../styles/item.css";

const Item = () => {
 
   //Get All Food Details
   const [items, setAllItems] = useState([]);

   const fetchAllItems = async () => {
     const { data } = await axios.get(
       "http://localhost:8088/api/foods"
     );
     
     const items = data;
     setAllItems(items);
   };
 
   useEffect(() => {
    fetchAllItems();
   }, []);
 
  return (
    <div>
         <br/>
         <h2><u>View Food Items</u></h2><br/>
         <TableScrollbar height="500px">
          <table className="table table-bordered table-responsive">
              <thead className="thead-dark bg-info">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Discount</th>
                  <th scope="col">Description</th>
                  <th scope="col">Ratings</th>
                  <th scope="col">Image</th>
                </tr>
              </thead>
              <tbody>
              {
                items.map((item) => ( 
                    <tr key = { item.itemNo }>
                    <td>{ item.name }</td>
                    <td align="right">{ item.price.price }</td>
                    <td align="right">{ item.price.discount }</td>
                    <td>{ item.description }</td>
                    <td align="center">{ item.rating }</td>
                    <td align="center"><img src={ item.imageUrl } alt="food-items"/></td>
                  </tr>
                ))
              }
              </tbody>
          </table>
        </TableScrollbar>
    </div>


  );
};

export default Item;
