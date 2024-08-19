import Footer from "./components/footer";
import Nav from "./components/nav";
import SideMenu from "./components/sidemenu";
import axios from "axios";
import Shop1 from './images/IMG_4106.PNG'
import { useState,useEffect } from "react";

function Shop() {

  const [items, setItems] = useState("");

  useEffect(() => {
    axios.get('https://saintdev.link/store')
      .then(response => {
        console.log(response.data)
        setItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  async function buyItem(itemId,itemName,itemPrice) {
    const confirmPurchase = window.confirm(`Deseja comprar o item ${itemName} por ${itemPrice} G?`);
    if (confirmPurchase) {
      try {
        const url = `https://saintdev.link/store/${itemId}/buy`;
        const token = localStorage.getItem("token");
        const response = await axios.post(url, {}, {
          headers: {
            "x-access-token": token,
          },
        });
        alert(`Compra realizada com sucesso para o item ${itemName}!`);
      } catch (err) {
        alert(`Ocorreu um erro ao comprar o item ${itemName}: ${err.message}`);
      }
    }
  }
  
  return (
    // rotas
    <div className="">
      <SideMenu></SideMenu>
      <Nav></Nav>
      <img
        style={{ width: "100%" }}
        src={Shop1}
      />
      
      <div className="FadeProfile"></div>
      <h1 style={{ textAlign: "center" }}>Shop</h1>

      <div className="Shop">
      {/* o restante do código do componente */}
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.img}/>
              <h2>{item.name}</h2>
              <h5>{item.price} G</h5>
              <button onClick={() => buyItem(item.id,item.name,item.price)}>Comprar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando...</p>
      )}
    </div>


      <Footer></Footer>
    </div>
  );
}

export default Shop;
