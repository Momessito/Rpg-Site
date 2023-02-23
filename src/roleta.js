import Footer from "./components/footer";
import Nav from "./components/nav";
import SideMenu from "./components/sidemenu";
import React, { useState } from "react";
import ticket from "./bilhete.png";

const nomes = ["João", "Maria", "Pedro", "Ana", "Lucas", "Bianca", "Carlos"];

const Sorteador = () => {
  const [nomeSorteado, setNomeSorteado] = useState(null);
  const [ultimaDataDeUso, setUltimaDataDeUso] = useState(
    localStorage.getItem("ultimaDataDeUso")
  );

  const sortearNome = () => {
    const agora = new Date();
    const hora = agora.getHours();
    const hoje = agora.toDateString();

    if (ultimaDataDeUso === hoje) {
      alert("Você já usou a roleta hoje. Tente novamente amanhã!");
      return;
    }

    if (hora < 0 || hora >= 2) {
      alert("A roleta só pode ser usada entre meia-noite e 2h da manhã!");
      return;
    }

    const indice = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indice];

    setNomeSorteado(nomeSorteado);
    setUltimaDataDeUso(hoje);

    localStorage.setItem("ultimaDataDeUso", hoje);
  };

  return (
    <div className="container">
      <SideMenu></SideMenu>
      <Nav></Nav>
      <div className="limiter">
        <img
          src="https://img.freepik.com/vecteurs-premium/fond-rafale-retro-vintage-blue-ray_92086-446.jpg?w=2000"
          className="circus"
        />
      </div>



      <div className="screen">
        <h1>Roleta</h1>
        <p>
          Regras: A roleta so pode ser usada uma vez por dia, e quando usada o
          item dela vai direto para seu inventario, ela so pode ser pedida das
          meia noite ate as duas da manha
        </p>
        <button onClick={sortearNome}>Sortear</button>
        {nomeSorteado && (
      <div className="ticket">
            <div style={{ marginTop: "30px" }}>
              O nome sorteado foi: <br /> <span>{nomeSorteado}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sorteador;
