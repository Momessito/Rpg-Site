import { useState, useEffect } from "react";
import Footer from "./components/footer";
import SideMenu from "./components/sidemenu";
import Nav from "./components/nav";
import mySound from "./user.mp3";
import guild from "./adventure.png";
import char from "./char2.png";
import axios from "axios";
import Login from "./components/Login";
import sound from "./zoom.mp3";

function User() {
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
        console.log(response);
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getProfile();
  }, []);

  const [StatusData, setStatusData] = useState(null);

  useEffect(() => {
    async function getStatusProfile() {
      try {
        const url = "https://saintdev.link/profile/status/";
        const token = localStorage.getItem("token");
        const response = await axios.get(url, {
          headers: {
            "x-access-token": token,
          },
        });

        setStatusData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getStatusProfile();
  }, []);

  return (
    <div className="UserApp">
      <SideMenu />
      <Login />
      <Nav />
      <div className="SkillButton" onClick={()=>{document.querySelector('.SkillTree').style.display = 'block';document.querySelector('.SkillTree').style.animation = 'SkillAnimt 0.7s linear';new Audio(sound).play();document.body.style.overflowY = 'hidden'}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-arrow-up-circle-fill"
          viewBox="0 0 16 16"
          
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
        </svg>
      </div>
      <div className="SkillTree">
        <div className="SkillExit" onClick={()=>{document.querySelector('.SkillTree').style.display = 'none';document.body.style.overflowY = 'auto'}}>X</div>
        <img src="https://i.imgur.com/F2OsUtI.png"/>
        <div className="Skills">
            <div><h1>Força</h1><p>40</p> <button>Aumentar Atributo</button><img src="https://static.thenounproject.com/png/185171-200.png"/></div>
            <div><h1>Destreza</h1><p>40</p> <button>Aumentar Atributo</button><img src="https://static.thenounproject.com/png/4494012-200.png"/></div>
            <div><h1>Constituição</h1><p>40</p><button>Aumentar Atributo</button> <img src="https://cdn-icons-png.flaticon.com/512/6333/6333192.png"/></div>
            <div><h1>Arcano</h1><p>40</p><button>Aumentar Atributo</button><img src="https://cdn-icons-png.flaticon.com/512/234/234515.png"/></div>
            <div><h1>Inteligencia</h1><p>40</p><button>Aumentar Atributo</button> <img src="https://cdn-icons-png.flaticon.com/512/883/883039.png"/></div>
        </div>
      </div>





      <iframe src={mySound} allow="autoplay" id="iframeAudio"></iframe>
      {userData ? (
        <div className="Profile">
          <img src={userData.img} alt="Avatar do usuário" />
          <div className="FadeProfile"></div>
          <div className="ProfileInfo">
            <h2>
              Nome: <span>{userData.name}</span>
            </h2>
            <h2>
              Raça: <span>{userData.race}</span>
            </h2>
            <h2>
              Money: <span>{userData.money}</span>
            </h2>
            <h2>
              Idade: <span>{userData.age}</span>
            </h2>
            <div className="ProfileRank">
            </div>
          </div>

          <div className="ProfileAdicional">
            <h2>Historia</h2>
            <p>{userData.biography}</p>
          </div>
        </div>
      ) : (
        <p>Carregando perfil...</p>
      )}
      <Footer />
    </div>
  );
}

export default User;
