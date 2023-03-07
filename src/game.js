import React, { useState, useEffect } from "react";
import axios from "axios";
import { point } from "leaflet";
import attack from "./attack.mp3";
import bite from "./bite.mp3";
import win from "./win.mp3";
import ost from "./ost.mp3";
import death from "./death.mp3";
import Nav from "./components/nav";
import SideMenu from "./components/sidemenu";
import orn from "./ornam.png";
import { Alert } from "bootstrap";

function Game() {
  const [monsters, setMonsters] = useState([
    {
      name: "Lobo Branco",
      image:
        "https://i.pinimg.com/originals/94/b8/50/94b850e5704e43c8691531640a7b3b44.jpg",
      damage: 10,
      health: 100,
      xp: 100,
    },
    {
      name: "Servo Vampiro Deformado",
      image:
        "https://i.pinimg.com/originals/5a/e4/88/5ae488d2ae5fd0b31dcb29ed7c1d088a.jpg",
      damage: 15,
      health: 150,
      xp: 150,
    },
    {
      name: "Goblin",
      image:
        "https://cdn.discordapp.com/attachments/1077945959490797699/1082331199197945927/98b374acc4849c695b9e1bf27f8f8a9b.jpg",
      damage: 15,
      health: 150,
      xp: 150,
    },
    {
      name: "Esqueleto",
      image:
        "https://cdn.discordapp.com/attachments/1077945959490797699/1082331198963077170/dfbf6712ddee64251c115830a98d00b3.jpg",
      damage: 20,
      health: 200,
      xp: 200,
    },
    {
      name: "Aranha Gigante",
      image:
        "https://cdn.discordapp.com/attachments/1077945959490797699/1082331198690431007/af7ac291347ad8a3fc95bd397c5cd968.jpg",
      damage: 25,
      health: 250,
      xp: 250,
    },
    {
      name: "Lobo Solitario",
      image:
        "https://i.pinimg.com/originals/5a/e4/88/5ae488d2ae5fd0b31dcb29ed7c1d088a.jpg",
      damage: 35,
      health: 350,
      xp: 350,
    },    
    {
      name: "Troll",
      image:
        "https://cdn.discordapp.com/attachments/1077945959490797699/1082331198405222574/a6f422a9f4bcce3b1916a18378a56c84.jpg",
      damage: 40,
      health: 400,
      xp: 400,
    },
    {
      name: "Ghoul",
      image:
        "https://cdn.discordapp.com/attachments/1077945959490797699/1082331198124216410/7185fa06cac15b8fd7b82498367ff778.jpg",
      damage: 45,
      health: 450,
      xp: 450,
    },    {
      name: "Minotauro",
      image:
        "https://cdn.discordapp.com/attachments/1077945959490797699/1082331197851574342/5a30b0969b5cb49ded0f962bbba7c244.jpg",
      damage: 50,
      health: 500,
      xp: 500,
    },    {
      name: "Draconato",
      image:
        "https://cdn.discordapp.com/attachments/1077945959490797699/1082331197591539732/2682863c5f2bd0d4fb0d3d51e0cdee43.jpg",
      damage: 55,
      health: 550,
      xp: 550,
    },
    {
      name: "Dragão Jovem",
      image:
        "https://cdn.discordapp.com/attachments/1077945959490797699/1082331197302116443/3998eb81ecb5d25e512dbbdac5a1f16f.jpg",
      damage: 100,
      health: 1000,
      xp: 1000,
    }
  ]);

  const [gameStarted, setGameStarted] = useState(false);
  const [player, setPlayer] = useState(null);
  const [currentMonster, setCurrentMonster] = useState({});
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);

  const [statusData, setStatusData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getProfile() {
      try {
        const url = "https://saintdev.link/profile";
        const token = localStorage.getItem("token");
        const response = await axios.get(url, {
          headers: {
            "x-access-token": token,
          },
        });
        console.log(response.data);
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getProfile();
  }, []);

  async function getStatusProfile() {
    try {
      const url = "https://saintdev.link/profile/status/";
      const token = localStorage.getItem("token");
      const response = await axios.get(url, {
        headers: {
          "x-access-token": token,
        },
      });
      console.log(response.data);
      setPlayer(response.data);
      setStatusData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getStatusProfile();
  }, []);

  function chooseRandomMonster() {
    const randomIndex = Math.floor(Math.random() * monsters.length);
    const randomMonster = monsters[randomIndex];
    setCurrentMonster(randomMonster);
  }

  function startGame() {
    if (statusData.hp <= 0) {
      alert("Voce Está derrotado");
    } else {
      // criar uma cópia do objeto statusData
      document.querySelector(".nav").style.display = "none";
      document.getElementById("root").style.overflow = "hidden";
      const updatedStatusData = { ...statusData };
      // definir a vida do jogador para o valor original
      // atualizar o estado statusData com a cópia atualizada
      setStatusData(updatedStatusData);

      setGameStarted(true);
      setTurn(1); // Começar a rodada 1
      chooseRandomMonster();
    }
  }

  function endGame() {



    // Define as informações necessárias para a solicitação em axios
    const url = "https://saintdev.link/tct";
    const token = localStorage.getItem("token");
    let points = 0;
    
    const monsterXP =
      parseInt(document.querySelector(".monsterxp").innerHTML) * 10;
    const winner = document.querySelector(".Winner").innerHTML;
    console.log(winner);

    // Verifica se o jogador ganhou ou perdeu o jogo
    if (winner == "Você ganhou!") {
      // Se ganhou, os pontos são iguais ao XP do monstro
      points = monsterXP;
    } else {
      // Se perdeu, os pontos são iguais ao XP do monstro multiplicado por -1
      points = -1 * monsterXP;
    }

    // Faz a solicitação em axios usando o método POST
    const response = axios
      .post(
        url,
        { points: points },
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then((response) => {
        console.log("Solicitação enviada com sucesso!");
        document.querySelector(".nav").style.display = "block";
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao enviar a solicitação:");
        console.log(error);
      });

    // Reseta os estados do jogo
    setGameStarted(false);
    setCurrentMonster({});
    setWinner(null);
    setTurn(0);
  }

  function handleAttack() {
    // Ataque do jogador ao monstro
  
    const damageToMonster = player.damage;
    const newMonsterHealth = currentMonster.health - damageToMonster;
  
    // Calcula a chance de desvio do monstro baseado em sua sorte
    const monsterDodgeChance = Math.floor(Math.random() * 10) + 1;
    if (monsterDodgeChance === 1) {
      alert('Monstro desviou do ataque!');
      return;
    }
    
    setCurrentMonster({
      ...currentMonster,
      health: newMonsterHealth,
    });
  
    // Verificar se o monstro ainda tem vida
    if (newMonsterHealth <= 0) {
      setTimeout(() => {
        new Audio(win).play();
      }, 2000);
      setWinner("player"); // Jogador ganhou a batalha
      return;
    }
  
    document.querySelector(".Attack").style.display = "none";
  
    setTimeout(() => {
      new Audio(bite).play();
      document.querySelector(".slashP").style.animation = "slash 0.5s linear";
      document.querySelector(".Attack").style.opacity = "0";

      setTimeout(() => {
        document.querySelector(".DamagePlayer").style.animation =
          "Damage-indicatorP 0.8s linear";
        document.querySelector(".PDamageHP").style.animation =
          "Damage 0.5s linear";
        document.querySelector(".Attack").style.display = "flex";
      
      }, 200);
    }, 500);
  
    setTimeout(() => {
      new Audio(attack).play();
      document.querySelector(".slashE").style.animation = "slash 0.5s linear";
  
      setTimeout(() => {
        document.querySelector(".DamageEnemy").style.animation =
          "Damage-indicatorP 0.8s linear";
        document.querySelector(".DamageHP").style.animation =
          "Damage 0.5s linear";
      }, 200);
    }, 1500);
  
    setTimeout(() => {
      document.querySelector(".Attack").style.opacity = "1";
    }, 2000);
  
    // Ataque do monstro ao jogador
    const damageToPlayer = currentMonster.damage;

    // Calcula a chance de desvio do jogador baseado em sua sorte
    const playerDodgeChance = Math.floor(Math.random() * 100) + 1;
    if (playerDodgeChance <= player.dex) {
      Alert('Você desviou do ataque!');
      setTurn(turn + 1);
      return;
    }
  
    const url = "https://saintdev.link/profile/status/hp";
    const token = localStorage.getItem("token");
  
    axios
      .post(
        url,
        { hp: -parseInt(damageToPlayer) },
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then((response) => {
        const newPlayerHealth = statusData.hp - damageToPlayer;
setStatusData({
  ...statusData,
  hp: newPlayerHealth,
});
        document.querySelector(".DamageHP").style.animation = "a 0.5s linear";
        document.querySelector(".PDamageHP").style.animation = "a 0.5s linear";
        document.querySelector(".DamagePlayer").style.animation =
          "a 0.2s linear";
        document.querySelector(".DamageEnemy").style.animation =
          "a 0.2s linear";
        document.querySelector(".slashE").style.animation = "a 0.2s linear";
        document.querySelector(".slashP").style.animation = "a 0.2s linear";
        document.querySelector(".Attack").style.animation = "a 0.2s linear";

        // Verificar se o jogador ainda tem vida
if (newPlayerHealth <= 0) {
  setTimeout(() => {
    new Audio(death).play();
  }, 2000);

  setWinner("monster"); // Monstro ganhou a batalha
  return;
}
        // Próxima rodada
        setTurn(turn + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  

        
        
  function handleFlee() {}

  return (
    <div className="Game">
      <Nav></Nav>
      <SideMenu></SideMenu>
      <iframe src={ost} allow="autoplay" id="iframeAudio"></iframe>
      {!gameStarted && (
        <div>
          <h1 className="Weacome">Bem-vindo ao Coliseu</h1>
          <p className="text-weacome">
            Bem vindos desafiantes, onde vocês irao enfrentar seus inimigos, e
            batalhar pela gloria eterna
          </p>
          <button className="startButton" onClick={()=>{alert('Voce é fraco volte quando ficar mais forte!')}}>Batalhar</button>
        </div>
      )}{" "}
      {gameStarted && (
        <div className="gameint">
          <div>
            {currentMonster && (
              <div>
                <div className="MonsterCard-img">
                  <img src={currentMonster.image} alt={currentMonster.name} />
                  <img src={orn} className="ornColi" />
                </div>
                <div className="MonsterCard">
                  <p>{currentMonster.name}</p>
                  <a className="DamageHP">HP: {currentMonster.health}</a>
                  <div className="DamageEnemy">-{currentMonster.damage}</div>
                  <a>Atk: {currentMonster.damage}</a>
                  <a>
                    Xp:{" "}
                    <span className="monsterxp">{currentMonster.xp / 10}</span>
                  </a>
                </div>
              </div>
            )}
          </div>
          <img
            src="https://ugokawaii.com/wp-content/uploads/2022/08/flash-effect-300x300.gif"
            className="slashE"
          />
          <img
            src="https://i.pinimg.com/originals/78/7b/54/787b5434734f1539f93f0fc24e67e07a.gif"
            className="slashP"
          />

          {winner && (
            <div className="Attack2">
              <h3 className="Winner">
                {winner === "player" ? "Você ganhou!" : "Você perdeu!"}
              </h3>
              <button onClick={endGame}>Jogar Novamente</button>
            </div>
          )}
          {!winner && (
            <div className="Attack">
              <button onClick={handleAttack}>
                <img src="https://images.emojiterra.com/google/android-nougat/512px/2694.png" />
                Atacar
              </button>
            </div>
            
          )}
          <h2 className="turn" style={{ textAlign: "center" }}>
            Rodada {turn}
          </h2>

          <div className="PlayerCard">
            {userData ? (
              <div className="PlayerCard-img">
                <img src={orn} className="ornColi" />
                <img src={userData.img} alt="Avatar do usuário" />
              </div>
            ) : (
              <p>Carregando perfil...</p>
            )}
            <div className="PlayerCard-info">
              {statusData && (
                <div>
                  {userData ? <p>{userData.name}</p> : <a>Nome</a>}
                  <a className="PDamageHP">HP: {statusData.hp}</a>
                  <div className="DamagePlayer">-{statusData.damage}</div>
                  <a>Atk: {statusData.damage}</a>
                  <a>Lv: {statusData.lv}</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
