import Footer from "./components/footer";
import Nav from "./components/nav";
import SideMenu from "./components/sidemenu";

function Shop() {
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

      <ul>
        <li>Poções de cura e mana: 50 a 100 moedas de prata</li>
        <li>
          Flechas, dardos e balas para armas: 1 a 2 moedas de prata por unidade
        </li>
        <li>Adagas, machados e espadas simples: 50 a 150 moedas de prata</li>
        <li>Armaduras leves de couro ou malha: 100 a 250 moedas de prata</li>
        <li>
          Livros de habilidades e feitiços básicos: 100 a 200 moedas de prata
        </li>
        <li>Ferramentas de mineração e coleta: 25 a 50 moedas de prata</li>
        <li>
          Pederneiras e isqueiros para acender fogueiras: 5 a 10 moedas de prata
        </li>
        <li>Pães, frutas e água potável: 2 a 5 moedas de prata</li>
        <li>
          Cordas e correntes para escalar ou prender inimigos: 25 a 50 moedas de
          prata
        </li>
        <li>Bolsas e mochilas para carregar itens: 10 a 25 moedas de prata</li>
      </ul>
      <Footer></Footer>
    </div>
  );
}

export default Shop;
