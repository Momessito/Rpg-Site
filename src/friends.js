import Footer from './components/footer';
import SideMenu from './components/sidemenu';
import Nav from './components/nav';
import mySound from './tabern.mp3'
import guild from './adventure.png'
import char from './char2.png'
import char2 from './char3.png'
import axios from 'axios';
import { Component, useState } from 'react';
import Login from './components/Login'

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tavernData: []
    };
  }

  componentDidMount() {
    axios.get('http://52.201.221.102:3000/tavern')
      .then(response => {
        this.setState({ tavernData: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { tavernData } = this.state;

    return (
      <div className="FriendsApp">
        <SideMenu />
        <Login></Login>
        <Nav />
        <iframe src={mySound} allow="autoplay loop" id="iframeAudio"></iframe>
        <img className='coofe' src='https://cdn.discordapp.com/attachments/946523460060975157/1077250363759013888/Momessito_fantasyrpganime_scenery_city_center_1589d12e-2fe1-4c72-a09d-d962e66aad93.png' />
        <h1 style={{ marginTop: '0px', textAlign: 'center' }}>Taberna</h1>
        <p style={{ margin: '10px' }}>A Taberna é um lugar onde você pode encontrar outros jogadores, conversar, compartilhar dicas e estratégias e fazer novas amizades. É o lugar perfeito para se socializar e relaxar entre as missões e desafios.</p>
        <img />
        <div className='Friends'>
          {tavernData.map((friend) => (
            <div className='card' key={friend.id}>
              <img src={friend.img} />
              <h2>{friend.name}</h2>
              <div className='starsCard'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Friends;
