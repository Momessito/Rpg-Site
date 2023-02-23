import { useState, useEffect } from "react";
import Footer from "./components/footer";
import SideMenu from "./components/sidemenu";
import Nav from "./components/nav";
import mySound from "./user.mp3";
import guild from "./adventure.png";
import char from "./char2.png";
import axios from "axios";
import Login from "./components/Login";

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

  return (
    <div className="UserApp">
      <SideMenu />
      <Login />
      <Nav />
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
              Rank: <span>{userData.rank}</span>
            </h2>
            <h2>
              Idade: <span>{userData.age}</span>
            </h2>
            <div className="ProfileRank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
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
