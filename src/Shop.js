import Footer from "./components/footer";
import Nav from "./components/nav";
import SideMenu from "./components/sidemenu";
import axios from "axios";
import { useState } from "react";

function Shop() {

  const [message, setMessage] = useState("");
  const items = [
    { id: 1, name: "Espada Comum" },
    { id: 2, name: "Armadura de Couro" },
    { id: 3, name: "Poção de Cura" },
  ];

  async function buyItem(itemId) {
    try {
      const url = `https://saintdev.link/store/${itemId}/buy`;
      const token = localStorage.getItem("token");
      const response = await axios.post(url, {}, {
        headers: {
          "x-access-token": token,
        },
      });
      setMessage(`Compra realizada com sucesso para o item ${itemId}!`);
    } catch (err) {
      setMessage(`Ocorreu um erro ao comprar o item ${itemId}: ${err.message}`);
    }
  }
  return (
    // rotas
    <div className="Shop">
      <SideMenu></SideMenu>
      <h2 className="Login">Log In</h2>
      <Nav></Nav>
      <img
        style={{ width: "100%" }}
        src="https://cdn.discordapp.com/ephemeral-attachments/946523460060975157/1077328424969969814/grid_0.webp"
      />
      <div className="FadeProfile"></div>
      <h1 style={{ textAlign: "center" }}>Shop</h1>
      <h1>Lista de Itens</h1>

              {items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <button onClick={() => buyItem(item.id)}>Comprar</button>
          </li>
        ))}

      <p>{message}</p>

      <Footer></Footer>
    </div>
  );
}

export default Shop;
