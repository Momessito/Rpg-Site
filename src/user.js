import { useState, useEffect } from "react";
import Footer from "./components/footer";
import SideMenu from "./components/sidemenu";
import Nav from "./components/nav";
import mySound from "./musics/user.mp3";
import guild from "./images/adventure.png";
import axios from "axios";
import Login from "./components/Login";
import sound from "./musics/zoom.mp3";

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
        console.log(response.data);
        setUserData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    getProfile();
  }, []);

  const [StatusData, setStatusData] = useState(null);
  const [StatusWea, setStatusWea] = useState(null);
  const [StatusArm, setStatusArm] = useState(null);
  const [StatusShi, setStatusShi] = useState(null);

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
      setStatusData(response.data);
      getStatusWeapon(response.data.weapon);
      getStatusArm(response.data.armor);
      getStatusShi(response.data.shield);
    } catch (err) {
      console.log(err);
    }
  }

  async function getStatusWeapon(item) {
    try {
      const url = `https://saintdev.link/inventory/${item}`;
      const token = localStorage.getItem("token");
      const response = await axios.get(url, {
        headers: {
          "x-access-token": token,
        },
      });
      console.log(response.data.data);
      setStatusWea(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getStatusProfile();

  }, []);
  async function getStatusArm(item) {
    try {
      const url = `https://saintdev.link/inventory/${item}`;
      const token = localStorage.getItem("token");
      const response = await axios.get(url, {
        headers: {
          "x-access-token": token,
        },
      });
      console.log(response.data.data);
      setStatusArm(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function getStatusShi(item) {
    try {
      const url = `https://saintdev.link/inventory/${item}`;
      const token = localStorage.getItem("token");
      const response = await axios.get(url, {
        headers: {
          "x-access-token": token,
        },
      });
      console.log(response.data.data);
      setStatusShi(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getStatusProfile();

  }, []);

  async function adicionarStatusProfile(token, nomeDoAtributo, status) {
    try {
      const url = `https://saintdev.link/profile/status/${nomeDoAtributo}/add`;
      const response = await axios.post(
        url,
        { status },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      console.log(response.data);
      getStatusProfile(); // chama a função getStatusProfile após o sucesso da requisição POST
      // Lógica adicional após o sucesso da requisição
    } catch (err) {
      console.log(err);
      alert('Você não possui mais pontos para gastar')
      // Lógica adicional após o erro da requisição
    }
  }


  
  return (
    <div className="UserApp">
      <SideMenu />
      <Nav />
      <div className="Armor">
      {StatusWea ? (
      <img style={{width : '100%', height : '100%'}} src={StatusWea.img}/>):(
        <div></div>
      )}
      </div>
      <div className="Weapons">
      {StatusArm ? (
      <img style={{width : '100%', height : '100%'}} src={StatusArm.img}/>):(
        <div></div>
      )}
      </div>
      <div className="Shield">
      {StatusShi ? (
      <img style={{width : '100%' , height : '100%'}} src={StatusShi.img}/>):(
        <div></div>
      )}
      </div>
      <div
        className="SkillButton"
        onClick={() => {
          document.querySelector(".SkillTree").style.display = "block";
          document.querySelector(".SkillTree").style.animation =
            "SkillAnimt 0.7s linear";
          new Audio(sound).play();
          document.body.style.overflowX = "auto";
        }}
      >
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
        <div
          className="SkillExit"
          onClick={() => {
            document.querySelector(".SkillTree").style.display = "none";
            document.body.style.overflowX = "auto";
          }}
        >
          X
        </div>
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f9e57ab-8ae1-4b64-9811-5f54bd27114d/dd45lgk-cc827193-cf12-4186-b1e7-e9f45e170f9c.jpg/v1/fill/w_1024,h_1821,q_75,strp/abstract_neon_wallpaper_9_16_by_zenoeon_dd45lgk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyMSIsInBhdGgiOiJcL2ZcLzJmOWU1N2FiLThhZTEtNGI2NC05ODExLTVmNTRiZDI3MTE0ZFwvZGQ0NWxnay1jYzgyNzE5My1jZjEyLTQxODYtYjFlNy1lOWY0NWUxNzBmOWMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.T1--dmwHg-Me_FPpokpEcqere7E3gAq58I6l1E7ZFxw" />
        {StatusData ? (
          <div className="Skills">
            <a>Free Points : {StatusData.free_point}</a>
            <div>
              <h1>Força</h1>
              <p>{StatusData.str}</p>{" "}
              <button
                className="str"
                onClick={() => {
                  const token = localStorage.getItem("token");
                  const nomeDoAtributo = "str";
                  const status = "Upando Status";
                  adicionarStatusProfile(token, nomeDoAtributo, status);
                }}
              >
                Aumentar Atributo
              </button>
              
            </div>
            <div>
              <h1>Destreza</h1>
              <p>{StatusData.dex}</p>{" "}
              <button
                className="dex"
                onClick={() => {
                  const token = localStorage.getItem("token");
                  const nomeDoAtributo = "dex";
                  const status = "Upando Status";
                  adicionarStatusProfile(token, nomeDoAtributo, status);
                }}
              >
                Aumentar Atributo
              </button>
            </div>
            <div>
              <h1>Constituição</h1>
              <p>{StatusData.cons}</p>
              <button
                className="cons"
                onClick={() => {
                  const token = localStorage.getItem("token");
                  const nomeDoAtributo = "cons";
                  const status = "Upando Status";
                  adicionarStatusProfile(token, nomeDoAtributo, status);
                }}
              >
                Aumentar Atributo
              </button>{" "}
            </div>
            <div>
              <h1>Sabedoria</h1>
              <p>{StatusData.wis}</p>
              <button
                onClick={() => {
                  const token = localStorage.getItem("token");
                  const nomeDoAtributo = "wis";
                  const status = "Upando Status";
                  adicionarStatusProfile(token, nomeDoAtributo, status);
                }}
              >
                Aumentar Atributo
              </button>
            </div>
            <div>
              <h1>Inteligencia</h1>
              <p>{StatusData.int}</p>
              <button
                onClick={() => {
                  const token = localStorage.getItem("token");
                  const nomeDoAtributo = "int";
                  const status = "Upando Status";
                  adicionarStatusProfile(token, nomeDoAtributo, status);
                }}
              >
                Aumentar Atributo
              </button>{" "}
            </div>
            <div>
              <h1>Charme</h1>
              <p>{StatusData.charm}</p>
              <button
                onClick={() => {
                  const token = localStorage.getItem("token");
                  const nomeDoAtributo = "charm";
                  const status = "Upando Status";
                  adicionarStatusProfile(token, nomeDoAtributo, status);
                }}
              >
                Aumentar Atributo
              </button>{" "}
            </div>
            <div>
              <h1>Luck</h1>
              <p>{StatusData.luck}</p>
              <button
                onClick={() => {
                  const token = localStorage.getItem("token");
                  const nomeDoAtributo = "luck";
                  const status = "Upando Status";
                  adicionarStatusProfile(token, nomeDoAtributo, status);
                }}
              >
                Aumentar Atributo
              </button>{" "}
            </div>
          </div>
        ) : (
          <p>Carregando perfil...</p>
        )}
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
        Gold: <span>{userData.money}</span>
      </h2>
      <h2>
        Idade: <span>{userData.age}</span>
      </h2>
      {StatusData && (
        <div>
          <h2>Level:<span>{StatusData.lv}</span></h2>
      <h3>
      XP: <span>
        <div className="XPAtual">{StatusData.xp} / {StatusData.lv}00</div>
        </span>

    </h3>
      <h3 style={{marginTop : '30px'}}>
      Hp: <span>
        <div className="Health">{StatusData.hp} / {StatusData.max_hp}</div>
        </span>
        
    </h3>
      <h3 style={{marginTop : '30px'}}>
      Mp: <span>
        <div className="Mana">{StatusData.mp} / {StatusData.max_mp}</div>
        </span>

    </h3>
    </div>
      )}
      <div className="ProfileRank"></div>
    </div>

    <div className="ProfileAdicional">
      <h2>Historia</h2>
      <p>{userData.biography}</p>
    </div>

    <p style={{ textAlign: "center", width: "100%", fontSize: "20px" }}>
      ID :{userData.user_id}
    </p>
  </div>
) : (
  <p>Carregando perfil...</p>
)}

      <Footer />
    </div>
  );
}

export default User;
