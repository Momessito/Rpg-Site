import Footer from "./components/footer";
import SideMenu from "./components/sidemenu";
import Nav from "./components/nav";
import mySound from "./musics/tabern.mp3";
import guild from "./images/adventure.png";
import axios from "axios";
import { Component, useState } from "react";
import Login from "./components/Login";
import Tavern from "./images/IMG_4108.PNG"

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tavernData: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://saintdev.link/tavern")
      .then((response) => {
        console.log(response)
        this.setState({ tavernData: response.data });
      })
      .catch((error) => {
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
        <img
          className="coofe"
          src={Tavern}
        />
        <h1 style={{ marginTop: "0px", textAlign: "center" }}>Taberna</h1>
        <p style={{ margin: "10px" }}>
          A Taberna é um lugar onde você pode encontrar outros jogadores,
          conversar, compartilhar dicas e estratégias e fazer novas amizades. É
          o lugar perfeito para se socializar e relaxar entre as missões e
          desafios.
        </p>
        <img />
        <div className="Friends">
          {tavernData.map((friend) => (
            <div className="card" key={friend.id}>
              <img src={friend.img} />
              <h2>{friend.name}</h2>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Friends;
