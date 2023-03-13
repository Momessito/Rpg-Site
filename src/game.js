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
      name: "Slime",
      image:
        "https://i.pinimg.com/236x/99/9d/16/999d16e1fa7f20640e9e1c9d5a95518b.jpg",
      damage: 18,
      dex: 5500,
      health: 30,
      xp: 50,
    },
    {
      name: "Rato",
      image:
        "https://cdn.discordapp.com/attachments/1077978423147897003/1083896069462708285/df543a0e269a28e302260316f2aa7167.jpg",
      damage: 22,
      dex: 5000,
      health: 32,
      xp: 70,
    },
  ]);

  const [gameStarted, setGameStarted] = useState(false);
  const [player, setPlayer] = useState(null);
  const [currentMonster, setCurrentMonster] = useState({});
  const [turn, setTurn] = useState(0);
  const [winner, setWinner] = useState(null);
  const [items, setItems] = useState([]);
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
      document.querySelector(".Game").style.overflow = "hidden";
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
      points = -1 * (monsterXP / 2);
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
    if (player.dex < 10000) {

      // Ataque do monstro ao jogador
      const damageToPlayer = currentMonster.damage;

      // Calcula a chance de desvio do jogador baseado em sua sorte
      const playerDodgeChance = Math.floor(Math.random() * 100) + 1;
      if (playerDodgeChance <= player.dex / 50) {
        alert("Você desviou do ataque!");
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

          // Verificar se o monstro ainda tem vida
          if (newMonsterHealth <= 0) {
            setTimeout(() => {
              new Audio(win).play();
            }, 1000);
            setWinner("player"); // Jogador ganhou a batalha
            return;
          }
          // Verificar se o jogador ainda tem vida
          if (newPlayerHealth <= 0) {
            setTimeout(() => {
              new Audio(death).play();
            }, 1000);

            setTimeout(() => {
              document.querySelector(".DamageHP").style.animation =
                "a 0.5s linear";
              document.querySelector(".PDamageHP").style.animation =
                "a 0.5s linear";
              document.querySelector(".DamagePlayer").style.animation =
                "a 0.2s linear";
              document.querySelector(".DamageEnemy").style.animation =
                "a 0.2s linear";
              document.querySelector(".slashE").style.animation =
                "a 0.2s linear";
              document.querySelector(".slashP").style.animation =
                "a 0.2s linear";
              document.querySelector(".Attack").style.animation =
                "a 0.2s linear";
            }, 2500);
            setWinner("monster"); // Monstro ganhou a batalha
            return;
          }
          // Próxima rodada
          setTurn(turn + 1);
        })
        .catch((error) => {
          console.error(error);
        });

      // Ataque do jogador ao monstro

      const damageToMonster = player.damage;
      const newMonsterHealth = currentMonster.health - damageToMonster;

      // Calcula a chance de desvio do monstro baseado em sua sorte
      const monsterDodgeChance = Math.floor(Math.random() * 10) + 1;
      if (monsterDodgeChance === 1) {
        alert("Monstro desviou do ataque!");
        return;
      }

      setCurrentMonster({
        ...currentMonster,
        health: newMonsterHealth,
      });
    }

    document.querySelector(".attackB").style.display = "none";

    setTimeout(() => {
      new Audio(bite).play();
      document.querySelector(".slashP").style.animation = "slash 0.5s linear";
      document.querySelector(".attackB").style.opacity = "0";

      setTimeout(() => {
        document.querySelector(".DamagePlayer").style.animation =
          "Damage-indicatorP 0.8s linear";
        document.querySelector(".PDamageHP").style.animation =
          "Damage 0.5s linear";
        document.querySelector(".attackB").style.display = "flex";
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
      document.querySelector(".attackB").style.opacity = "1";
    }, 2000);
  }

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
  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    getProfile();
  }, []);

  const handleUse = async (itemId) => {
    try {
      const url = `https://saintdev.link/inventory/${itemId}/use/`;
      console.log(url);
      const token = localStorage.getItem("token");
      await axios.post(url, null, {
        headers: {
          "x-access-token": token,
        },
      });
      getProfile();
      getStatusProfile();
    } catch (err) {
      console.log(err);
    }
  };

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
            Bem-vindo ao Coliseu, o lugar onde lendas são forjadas e a glória é
            conquistada! Localizado no coração da cidade, nosso lendário Coliseu
            é o palco de alguns dos maiores combates que já foram vistos em todo
            o mundo.
            <br /> <br />
            Com uma história rica e fascinante, o Coliseu é mais do que apenas
            um lugar para lutas. É um símbolo da <span onClick={() =>{alert('Parabens voce achou um easter egg diga a senha : "A força prevalece" para o adm Eldarion.')}}>força</span> e da coragem, onde os
            guerreiros mais habilidosos e destemidos do mundo se reúnem para
            enfrentar uns aos outros em batalhas épicas.
            <br /> <br />
            Com uma ampla variedade de desafios e torneios para escolher, há
            sempre algo emocionante acontecendo no Coliseu. Você pode lutar
            contra os melhores lutadores do mundo em uma batalha épica até a
            morte, ou participar de um torneio para mostrar sua habilidade e
            sagacidade estratégica.
            <br /> <br />
          </p>
          <button className="startButton" onClick={startGame}>
            Batalhar
          </button>
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
                  {statusData && (
                    <div className="DamageEnemy">-{statusData.damage}</div>
                  )}
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
            <div>
              <div className="Attack">
                <button className="attackB" onClick={handleAttack}>
                  <img src="https://images.emojiterra.com/google/android-nougat/512px/2694.png" />
                  Atacar
                </button>
              </div>

              <div className="Heal">
                <button
                  onClick={() => {
                    document.querySelector(".Inventory-Heal").style.transform =
                      "translateX(0px)";
                    document.querySelector(".Inventory-Heal").style.opacity =
                      "1";
                    document.querySelector(".Inventory-Heal").style.display =
                      "flex";
                  }}
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/1029/1029134.png" />
                  Curar
                </button>
              </div>
              <div className="Magic">
                <button
                  onClick={() => {
                    alert("Voce ainda nao possui magias para utilizar!");
                  }}
                >
                  <img src="https://cdn-icons-png.flaticon.com/512/234/234464.png" />
                  Magia
                </button>
              </div>
              <div className="Inventory-Heal">
                <h1
                  onClick={() => {
                    document.querySelector(".Inventory-Heal").style.transform =
                      "translateX(500px)";
                  }}
                >
                  X
                </h1>
                {items.map((item) => (
                  <div
                    className={`item-inv ${
                      item.consumable ? "consumable" : "item-nada"
                    }`}
                    key={item.id}
                  >
                    <img src={item.img} />
                    <div className="item-text">
                      <p>{item.name}</p>
                      <button
                        style={{ backgroundColor: "green" }}
                        onClick={() => handleUse(item.id)}
                      >
                        Utilizar
                      </button>
                    </div>
                    <p className="item-desc">{item.description}</p>
                  </div>
                ))}
              </div>
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
