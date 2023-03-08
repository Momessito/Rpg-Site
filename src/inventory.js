import React, { useState, useEffect } from "react";
import axios from "axios";
import SideMenu from "./components/sidemenu";
import Nav from "./components/nav";
import Login from "./components/Login";
import mySound from './inventory.mp3'

function Inv() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem("token");

    async function getProfile() {
      try {
        const url = "https://saintdev.link/inventory";
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
    
    useEffect(() => {
      // Atualiza o título do documento usando a API do browser
      getProfile();
    }, []);
    

  
  const handleEquip = async (itemId) => {
    try {
      const url = "https://saintdev.link/inventory/equip";
      const token = localStorage.getItem("token");
      const response = await axios.post(
        url,
        { inv_id: itemId },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      console.log(response);
      // atualize a lista de itens se necessário
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, equipped: true } : item
        )
      );
      // chama a função getProfile() para atualizar a lista de itens
      getProfile();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnequip = async (itemId) => {
    try {
      const url = "https://saintdev.link/inventory/unequip";
      const token = localStorage.getItem("token");
      const response = await axios.post(
        url,
        { inv_id: itemId },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      console.log(response);
      // atualize a lista de itens se necessário
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, equipped: false } : item
        )
      );
      // chama a função getProfile() para atualizar a lista de itens
      getProfile();
    } catch (err) {
      console.log(err);
    }
  };
  
const handleUse = async (itemId) => {
  try {
    const url = `https://saintdev.link/inventory/${itemId}/use/`;
    console.log(url)
    const token = localStorage.getItem("token");
    await axios.post(url, null, {
      headers: {
        "x-access-token": token,
      },
    });
    getProfile();
  } catch (err) {
    console.log(err);
  }
};


  return (
    <div className="Inv">
        <iframe src={mySound} allow="autoplay" id="iframeAudio"></iframe>

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
                {item.equipped ? (
                  <button onClick={() => handleUnequip(item.id)} style={{backgroundColor : 'orange'}}>Desequipar</button>
                ) : item.consumable ? (
                  <button style={{backgroundColor : 'green'}} onClick={() => handleUse(item.id)}>Utilizar</button>
                ) : (
                  <button style={{backgroundColor : 'black'}} onClick={() => handleEquip(item.id) }>Equipar</button>
                )}
              </div>
              <p className="item-desc">{item.description}</p>
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
