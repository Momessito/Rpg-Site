import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    // criar uma cópia do objeto statusData
    const updatedStatusData = {...statusData};
    // definir a vida do jogador para o valor original
    updatedStatusData.hp = 100;
    // atualizar o estado statusData com a cópia atualizada
    setStatusData(updatedStatusData);
  
    setGameStarted(true);
    setTurn(1); // Começar a rodada 1
    chooseRandomMonster();
  }

  function endGame() {
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
  }
  
  

  function handleFlee() {}

  return (
  <div className='Game'>
  {!gameStarted && (
  <div>
  <h1 className='Weacome'>Bem-vindo ao Coliseu</h1>
  <p>Bem vindos desafiantes, onde vocês irao enfrentar seus inimigos, e batalhar pela gloria eterna</p>
  <button onClick={startGame}>Começar Jogo</button>
  </div>
  )}  {gameStarted && (
    <div className='gameint'>



      <div>
        <h3>Monstro</h3>
        {currentMonster && (
          <div className='MonsterCard'>
            <p>{currentMonster.name}</p>
            <img src={currentMonster.image} alt={currentMonster.name} />
            <p>Vida: {currentMonster.health}</p>
            <p>Dano: {currentMonster.damage}</p>
            <p>Xp: {currentMonster.xp}</p>
          </div>
        )}
      </div>
      <h2 style={{textAlign : 'center'}}>Round {turn}</h2>
      <div className='PlayerCard'>
        <h3>Jogador</h3>
        {statusData && (
          <div>
            <p>{statusData.name}</p>
            <p>Vida: {statusData.hp}</p>
            <p>Força: {statusData.str + 10}</p>
          </div>
        )}
      </div>
      {winner && (
        <div className='Attack'>
          <h3>{winner === 'player' ? 'Você ganhou! ' : 'Você perdeu!'}</h3>
          <button onClick={endGame}>Jogar Novamente</button>
        </div>
      )}

      {!winner && (
        <div className='Attack'>
          <button onClick={handleAttack}>Atacar</button>
        </div>
      )}
    </div>
  )}
</div>
);
}

export default Game;
