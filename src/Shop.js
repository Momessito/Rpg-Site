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

  async function buyItem(itemId) {
    try {
      const url = `https://saintdev.link/store/${itemId}/buy`;
      const token = localStorage.getItem("token");
      const response = await axios.post(url, {}, {
        headers: {
          "x-access-token": token,
        },
      });
      alert(`Compra realizada com sucesso para o item ${itemId}!`);
    } catch (err) {
      alert(`Ocorreu um erro ao comprar o item ${itemId}: ${err.message}`);
    }
  }
  return (
    // rotas
    <div className="">
      <SideMenu></SideMenu>
      <h2 className="Login">Log In</h2>
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
              <button onClick={() => buyItem(item.id)}>Comprar</button>
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
