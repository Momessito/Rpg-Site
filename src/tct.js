import React, { Component } from 'react';
import Nav from './components/nav';
import Login from './components/Login';
import SideMenu from './components/sidemenu';
import mySound from './musics/tct.mp3';
import axios from 'axios';
import Castle from './images/20240814_232239857_iOS.png'
class Tct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      timeLeft: 30,
      targetX: 0,
      targetY: 0,
      gameOver: false,
      gameStarted: false,
      postSent: false
    };

    this.handleTargetClick = this.handleTargetClick.bind(this);
    this.startGame = this.startGame.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
  }

  componentDidMount() {
    this.timerInterval = null;
  }

  startGame() {
    const url = "https://saintdev.link/tct";
    const token = localStorage.getItem("token");
    
    this.setState({
      score: 0,
      timeLeft: 30,
      gameOver: false,
      gameStarted: true,
      postSent: false
    });
  
    this.generateNewTarget();
  
    this.timerInterval = setInterval(() => {
      if (this.state.timeLeft === 0) {
        clearInterval(this.timerInterval);
        this.setState({
          gameOver: true
        });
  
        if (!this.state.postSent) {
          // POST request to url
          
          axios.post(url, { points: this.state.score }, { headers: { "x-access-token": token } })
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.error(error);
            })
            .finally(() => {
              this.setState({
                postSent: true
              });
            });
        }
      } else {
        this.setState(prevState => ({
          timeLeft: prevState.timeLeft - 1
        }));
      }
    }, 1000);
  }
  

  generateNewTarget() {
    const targetSize = 50;
    const maxX = window.innerWidth - targetSize;
    const maxY = window.innerHeight - targetSize;
    const targetX = Math.floor(Math.random() * maxX);
    const targetY = Math.floor(Math.random() * maxY);

    this.setState({
      targetX,
      targetY
    });
  }

  handleTargetClick() {
    this.setState({
      score: this.state.score + 1
    });

    this.generateNewTarget();
  }

  handleStartClick() {
    this.startGame();
  }

  handleRestartClick() {
    clearInterval(this.timerInterval);
    this.setState({
      score: 0,
      timeLeft: 30,
      targetX: 0,
      targetY: 0,
      gameOver: false,
      gameStarted: false
    });
  }

  render() {
    const { score, timeLeft, targetX, targetY, gameOver, gameStarted } = this.state;

    return (
        <div className='tct'> 
            <img className='bg' src={Castle}/>       
            <img className='bg' src='https://www.icegif.com/wp-content/uploads/2023/02/icegif-1172.gif'/>       
        <Nav></Nav>
        <SideMenu></SideMenu>
        <iframe src={mySound} allow="autoplay" id="iframeAudio">
      </iframe>
      <div className="RandomClickGame">

        <div className="header">
          <div className="score">Pontuação: {score}</div>
          <div className="time-left">Tempo faltando: {timeLeft}s</div>
        </div>
        {gameOver ? (
          <div className="game-over-message">
            O jogo Acabou! Sua pontuação foi:  {score}
            <button className="restart-button" onClick={this.handleRestartClick}>
              Resetar o Jogo
            </button>
          </div>
        ) : (
          <div
            className="target"
            style={{
              left: targetX,
              top: targetY
            }}
            onClick={this.handleTargetClick}
          />
        )}
        {!gameStarted && !gameOver && (
          <button className="start-button" onClick={this.handleStartClick}>
            Iniciar
          </button>
        )}
      </div>
      </div>
    );
  }
}

export default Tct;
