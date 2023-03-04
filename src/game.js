import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { point } from 'leaflet';

function Game() {
  const [monsters, setMonsters] = useState([
    {
      name: 'Zumbi',
      description: 'Um monstro morto-vivo que se levanta da sepultura para atacar os vivos.',
      image: 'https://www.royalmodel.eu/569-large_default/zombie-zombies-serie-135.jpg',
      damage: 10,
      health: 50,
      xp: 25,
    },
    {
      name: 'Vampiro',
      description: 'Uma criatura mística que se alimenta de sangue humano.',
      image: 'vampire.png',
      damage: 20,
      health: 100,
      xp: 50,
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
      const url = 'https://saintdev.link/profile/status/';
      const token = localStorage.getItem('token');
      const response = await axios.get(url, {
        headers: {
          'x-access-token': token,
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
    if(statusData.hp <= 0){
      alert('Voce Está derrotado')
    }else{
    // criar uma cópia do objeto statusData
    const updatedStatusData = {...statusData};
    // definir a vida do jogador para o valor original
    // atualizar o estado statusData com a cópia atualizada
    setStatusData(updatedStatusData);
  
    setGameStarted(true);
    setTurn(1); // Começar a rodada 1
    chooseRandomMonster();}
  }

  function endGame() {
    // Define as informações necessárias para a solicitação em axios
    const url = 'https://saintdev.link/tct';
    const token = localStorage.getItem('token');
    let points = 0;
  
    const monsterXP = parseInt(document.querySelector('.monsterxp').innerHTML) * 10;
    const winner = document.querySelector('.Winner').innerHTML
    console.log(winner)

    // Verifica se o jogador ganhou ou perdeu o jogo
    if (winner == 'Você ganhou!') {
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
            'x-access-token': token,
          },
        }
      )
      .then((response) => {
        console.log('Solicitação enviada com sucesso!');
      })
      .catch((error) => {
        console.log('Ocorreu um erro ao enviar a solicitação:');
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
    const damageToMonster = player.str + 10;
    const newMonsterHealth = currentMonster.health - damageToMonster;
    setCurrentMonster({
      ...currentMonster,
      health: newMonsterHealth
    });
  
    // Verificar se o monstro ainda tem vida
    if (newMonsterHealth <= 0) {
      setWinner('player'); // Jogador ganhou a batalha
      return;
    }
  
    // Ataque do monstro ao jogador
    const damageToPlayer = currentMonster.damage;
    console.log(damageToPlayer)
    const url = 'https://saintdev.link/profile/status/hp';
    const token = localStorage.getItem('token');
  
    axios.post(url, { hp: -parseInt(damageToPlayer) }, {
        headers: {
          "x-access-token": token,
        },
      
    })
    .then(response => {
      const newPlayerHealth = statusData.hp - damageToPlayer;
      setStatusData({
        ...statusData,
        hp: newPlayerHealth
      });
  
      // Verificar se o jogador ainda tem vida
      if (newPlayerHealth <= 0) {
        setWinner('monster'); // Monstro ganhou a batalha
        return;
      }
  
      // Próxima rodada
      setTurn(turn + 1);
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  
  

  function handleFlee() {}

  return (
  <div className='Game'>
  {!gameStarted && (
  <div>
  <h1 className='Weacome'>Bem-vindo ao Coliseu</h1>
  <p>Bem vindos desafiantes, onde vocês irao enfrentar seus inimigos, e batalhar pela gloria eterna</p>
  <button onClick={startGame}>Batalhar</button>
  </div>
  )}  {gameStarted && (
    <div className='gameint'>



      <div>
        {currentMonster && (
          <div>
                      <img className='MonsterCard-img' src={currentMonster.image} alt={currentMonster.name} />
          <div className='MonsterCard'>


            <p>{currentMonster.name}</p>
            <a>HP: {currentMonster.health}</a>
            <a>Atk: {currentMonster.damage}</a>
            <a >Xp: <span className='monsterxp'>{currentMonster.xp / 10}</span></a>
          </div>
          </div>
        )}
      </div>
      
      {winner && (
        <div className='Attack'>
          <h3 className='Winner'>{winner === 'player' ? 'Você ganhou!' : 'Você perdeu!'}</h3>
          <button onClick={endGame}>Jogar Novamente</button>
        </div>
      )}
      {!winner && (
        <div className='Attack'>
          <button onClick={handleAttack}>Atacar</button>
        </div>
      )}
      <h2 className='turn' style={{textAlign : 'center'}}>Round {turn}</h2>



<div className='PlayerCard'>
{userData ? (
<div>
<img src={userData.img} alt="Avatar do usuário" />
</div>
) : (
<p>Carregando perfil...</p>
)}
  <div className='PlayerCard-info'>
  
  {statusData && (
    <div>
            {userData ? (
<p>{userData.name}</p>
) : (
<a>Nome</a>
)}
      <a>HP: {statusData.hp}</a>
      <a>Atk: {statusData.str + 10}</a>
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
