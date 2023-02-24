import React, { useState, useEffect } from "react";
import axios from "axios";
import SideMenu from "./components/sidemenu";
import Nav from "./components/nav";
import Login from "./components/Login";

function Inv() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getProfile() {
      try {
        const url = "https://saintdev.link/inventory";
        const token = localStorage.getItem("token");
        const response = await axios.get(url, {
          headers: {
            "x-access-token": token,
          },
        });
        console.log(response);
        setItems(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getProfile();
  }, []);

  return (
    <div className="Inv">
      <Nav></Nav>
      <SideMenu></SideMenu>
      <Login></Login>
      <h1 className="inventarioTitle">Inventario</h1>
      <div className="inventory">
        <div className="Invetory-canvas">
          <div className="inv">
            {items.map((item) => (
              <div className="item-inv" key={item.id}>
                <img src={item.img} />
                <div className="item-text">
                  <p>{item.name}</p>
                </div>
                <p className="item-desc">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="inventoryW"></div>
    </div>
  );
}

export default Inv;
