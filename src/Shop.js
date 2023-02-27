import Footer from "./components/footer";
import Nav from "./components/nav";
import SideMenu from "./components/sidemenu";
import axios from "axios";
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

  async function buyItem(itemId,itemName) {
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
  return (
    // rotas
    <div className="">
      <SideMenu></SideMenu>
      <Nav></Nav>
      <img
        style={{ width: "100%" }}
        src="https://cdn.discordapp.com/ephemeral-attachments/946523460060975157/1077328424969969814/grid_0.webp"
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
              <h5>{item.price} Moedas de bronze</h5>
              <button onClick={() => buyItem(item.id,item.name)}>Comprar</button>
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
