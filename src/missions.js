import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Nav from "./components/nav";
import SideMenu from "./components/sidemenu";
import mySound from './inventory.mp3'

const missions = [
  {
    name: "Derrotar o bando de goblins",
    description: "Os goblins estão atacando a vila! Derrote o líder do bando de goblins e proteja a vila.",
    difficulty: "E",
    reward: "10 moedas de bronze"
    },
    {
    name: "Capturar um ladrão",
    description: "Um ladrão está roubando as casas da vila. Capture-o e devolva os pertences roubados aos donos.",
    difficulty: "E",
    reward: "5 moedas de bronze"
    },
    {
    name: "Encontrar um item perdido",
    description: "Encontre um item perdido por um viajante em uma estrada próxima.",
    difficulty: "E",
    reward: "6 moedas de bronze"
    },
    {
    name: "Proteger um comerciante",
    description: "Um comerciante está sendo ameaçado por bandidos. Proteja-o e escolte-o até a cidade.",
    difficulty: "E",
    reward: "8 moedas de bronze"
    },
    {
    name: "Colher frutas em uma fazenda",
    description: "Ajude uma fazendeira a colher as frutas de sua plantação.",
    difficulty: "E",
    reward: "7 moedas de bronze"
    },
    {
    name: "Entregar uma mensagem",
    description: "Entregue uma mensagem urgente para um comerciante na cidade.",
    difficulty: "E",
    reward: "5 moedas de bronze"
    },
    {
    name: "Caçar coelhos para um jantar",
    description: "Um grupo de caçadores precisa de coelhos para um jantar importante. Cace alguns coelhos para eles.",
    difficulty: "E",
    reward: "6 moedas de bronze"
    },
    {
    name: "Procurar por ervas medicinais",
    description: "Procure por ervas medicinais em uma floresta próxima para uma curandeira.",
    difficulty: "E",
    reward: "7 moedas de bronze"
    },
    {
    name: "Reparar uma cerca",
    description: "Uma cerca que separa a vila de uma floresta próxima precisa ser reparada. Conserte-a.",
    difficulty: "E",
    reward: "5 moedas de bronze"
    },
    {
    name: "Encontrar um cachorro perdido",
    description: "Um cachorro fugiu de casa e está perdido. Encontre-o e devolva-o para seu dono.",
    difficulty: "E",
    reward: "6 moedas de bronze"
    },
    {
    name: "Resgate de um prisioneiro",
    description: "Resgatar um prisioneiro que está sendo mantido em cativeiro em uma caverna próxima. O prisioneiro é importante para um grupo de rebeldes que estão lutando contra um tirano que governa a região.",
    difficulty: "E",
    reward: "10 moedas de bronze"
    },
    {
    name: "Encontrando um objeto perdido",
    description: "Encontrar um objeto valioso que foi perdido em uma floresta próxima. O objeto é um amuleto que pertence a um grupo de viajantes que estão de passagem pela região.",
    difficulty: "E",
    reward: "6 moedas de bronze"},{
      name: "Recuperar tesouro roubado",
      description: "Um grupo de ladrões roubou um tesouro valioso. Recupere o tesouro e entregue-o ao proprietário original.",
      difficulty: "D",
      reward: "25 moedas de bronze"
      },
      {
      name: "Ajudar fazendeiro com problemas",
      description: "Um fazendeiro local está tendo problemas com criaturas que estão destruindo suas plantações. Ajude-o a proteger sua fazenda e a se livrar das criaturas.",
      difficulty: "D",
      reward: "30 moedas de bronze"
      },
      {
      name: "Ajudar uma caravana",
      description: "Uma caravana de comerciantes está tendo problemas com bandidos. Ajude-os a proteger sua carga e a chegar ao seu destino.",
      difficulty: "D",
      reward: "35 moedas de bronze"
      },
      {
      name: "Derrotar um monstro",
      description: "Um monstro perigoso está ameaçando uma cidade. Derrote o monstro e proteja a cidade.",
      difficulty: "D",
      reward: "40 moedas de bronze"
      },
      {
      name: "Resgatar reféns",
      description: "Um grupo de bandidos sequestrou alguns reféns. Resgate-os e leve-os de volta em segurança.",
      difficulty: "D",
      reward: "45 moedas de bronze"
      },
      {
      name: "Ajudar um viajante perdido",
      description: "Um viajante se perdeu na floresta. Ajude-o a encontrar o caminho de volta.",
      difficulty: "D",
      reward: "30 moedas de bronze"
      },
      {
      name: "Encontrar um objeto perdido",
      description: "Um objeto valioso foi perdido em algum lugar na cidade. Encontre o objeto e devolva-o ao seu proprietário.",
      difficulty: "D",
      reward: "25 moedas de bronze"
      },
      {
      name: "Capturar um animal perigoso",
      description: "Um animal perigoso está solto e ameaçando os moradores da cidade. Capture o animal e leve-o para um lugar seguro.",
      difficulty: "D",
      reward: "50 moedas de bronze"
      },
  {
    name: "Derrotar o bando de goblins",
    description:
      "Os goblins estão atacando a vila! Derrote o líder do bando de goblins e proteja a vila.",
    difficulty: "B",
    reward: "20 moedas de prata",
  },
  {
    name: "Encontrar o tesouro perdido",
    description:
      "Um tesouro lendário está escondido em algum lugar na floresta. Encontre o tesouro e fique rico!",
    difficulty: "A",
    reward: "100 moedas de prata",
  },
  {
    name: "Conquistar a torre dos magos",
    description:
      "A torre dos magos é uma fortaleza impenetrável. Derrote o líder dos magos e tome a torre para si.",
    difficulty: "S",
    reward: "100 moedas de ouro",
  },
  {
    name: "Enfrentar o dragão ancestral",
    description:
      "O dragão ancestral é um monstro lendário de poder inimaginável. Derrote-o e torne-se uma lenda viva.",
    difficulty: "SS",
    reward: "500 moedas de ouro",
  },
  {
    name: "Salvar o mundo da escuridão",
    description:
      "Um mal antigo está despertando e ameaça consumir o mundo. Junte-se a outros heróis e derrote o mal para sempre.",
    difficulty: "SSS",
    reward: "1000 moedas de ouro",
  },
];

function Missions() {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
    

    return (
        <div>
                    <Nav></Nav>
        <SideMenu></SideMenu>
        <Login></Login>
        <iframe src={mySound} allow="autoplay" id="iframeAudio"></iframe>
      <div className="mission-board">

        <h1>Missões disponíveis:</h1>
        <div className="missions">
          {expanded ? (
            missions.map((mission, index) => (
              <div className="mission-card mission" key={index}>
                <h2>{mission.name}</h2>
                <p>{mission.description}</p>
                <p className="Rank">
                  <strong>Dificuldade:</strong> {mission.difficulty}
                </p>
                <p>
                  <strong>Recompensa:</strong> {mission.reward}
                </p>
              </div>
            ))
          ) : (
            <div className="mission-card mission">
              <p>Selecione uma missão para mais informações.</p>
            </div>
          )}
        </div>
        <div className="mission-buttons">
          {expanded ? (
            <button onClick={toggleExpanded}>Recolher</button>
          ) : (
            <button onClick={toggleExpanded}>Expandir</button>
          )}
        </div>
      </div>
      </div>
    );
  }

export default Missions;
