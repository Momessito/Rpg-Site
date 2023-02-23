import "./App.css";
import Map from "./map.png";
import War from "./war.png";
import God from "./god.png";
import dest from "./destr.png";
import monster from "./monsters.png";
import orn from "./ornam.png";
import orn2 from "./ornam1.png";
import mySound from "./music.mp3";
import Footer from "./components/footer";
import Carrosel from "./components/carrosel";
import SideMenu from "./components/sidemenu";
import sound from "./zoom.mp3";
import Nav from "./components/nav";
import compass from "./compass.png";
import Login from "./components/Login";



function Home() {
  var istrue = true;
  function animate() {
    if (istrue == true) {
      istrue = false;
      new Audio(sound).play();
      document.querySelector(".Map").style.transform =
        "scale(1.2) rotate(150deg)";
      document.querySelector(".Map").style.opacity =
        "0";
      document.querySelector(".FronteiraUnida").style.opacity =
        "1";
      document.querySelector(".light").style.display = "none";
      document.querySelector(".light2").style.display = "none";
      document.querySelector(".Start").innerHTML = "Voltar";
      document.querySelector(".Mapa").style.display = "flex";

      document.querySelector(".title").innerHTML = "Earth of Dungeons";
      document.querySelector(".subtitle").innerHTML =
        "Explore o Mundo de magia";
      document.querySelector(".FronteiraUnidaShop").style.zindex = "-200";
    } else {

      document.querySelector(".Map").style.opacity =
      "1";
      istrue = true;
      document.querySelector(".FronteiraUnida").style.opacity =
      "0";
      document.querySelector(".Map").style.transform = "scale(1) rotate(0deg)";
      document.querySelector(".light").style.display = "block";
      document.querySelector(".light2").style.display = "block";
      document.querySelector(".Start").innerHTML = "Começar";
      document.querySelector(".Map").style.transform = "scale(1) rotate(0deg)";
      new Audio(sound).play();
    }
  }

  function Shope() {
    window.location.href = "/shop";
  }
  return (
    <div className="App">
      <div className="OnlyCell">
        Atenção! Essa Aplicação so funciona para celulares.
      </div>

      <SideMenu></SideMenu>

      <iframe src={mySound} allow="autoplay" id="iframeAudio"></iframe>

      <Nav></Nav>
      <Login></Login>

      <main className="Canvas">
        <div
          className="easterCLick"
          onClick={() => {
            window.location.href = "/sea";
          }}
        ></div>
        <div className="Fade"></div>

        <h1 className="title"> Earth of Dungeons </h1>

        <h2 className="subtitle">Explore o Mundo de magia</h2>

        <button className="Start" onClick={animate}>
          Começar
        </button>


        <img src={Map} className="Map" />

        <img
          className="FronteiraUnida"
          src="https://cdn.discordapp.com/attachments/1077978423147897003/1078225253723013140/map.jpg"
        />
      </main>
      <audio src={sound} />
      <div className="light"></div>
      <div className="light2"></div>
      <div className="Scroll">
        <img src={orn2} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-caret-down-fill"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
        <h4>Scroll</h4>
      </div>
      <div className="canvas1">
        <h1>O mundo</h1>
        <p>
          Houve um tempo em que a paz reinava entre as diferentes raças do mundo
          de Jigen. Elfos, anões, humanos, orcs,Fadas, Draconatos, Tieflings
          todos coexistiam pacificamente, compartilhando suas culturas e
          tradições. No entanto, tudo mudou quando a guerra eclodiu entre eles.
          Ninguém sabe exatamente qual foi a causa, mas logo as batalhas se
          tornaram comuns e o mundo se tornou um lugar perigoso, cheio de morte
          e destruição.
        </p>
        <hr></hr>
        <div className="ornnament">
          <a href="/war">
            <img src={orn} className="orn" />
            <img className="imgHistory" src={War} />
          </a>
        </div>
        <hr></hr>
        <p>
          A guerra durou por uma década, deixando um rastro de destruição e
          sofrimento em todo o mundo. Mas justamente quando parecia que as
          coisas não poderiam piorar, um novo mal surgiu das trevas. Monstros
          horríveis começaram a aparecer, aterrorizando as pessoas e destruindo
          tudo em seu caminho. Esses monstros eram diferentes de tudo o que já
          havia sido visto antes, e logo ficou claro que eles não tinham nenhuma
          relação com qualquer das raças envolvidas na guerra.
        </p>
        <hr></hr>
        <div className="ornnament">
          <img src={orn} className="orn" />
          <img className="imgHistory" src={dest} />
        </div>
        <hr></hr>
        <p>
          Mas os monstros não eram a única ameaça. De repente, enormes torres
          começaram a aparecer em todo o mundo, como se tivessem surgido do
          nada. Essas torres eram altas, tão altas que tocavam o céu, e pareciam
          estar envoltas em uma aura sombria e misteriosa. Poucas pessoas se
          atreviam a se aproximar delas, mas a lenda dizia que aqueles que
          conseguissem escalar até o topo se tornariam a própria encarnação do
          deus que habitava a torre.
        </p>
        <hr></hr>
        <div className="ornnament">
          <img src={orn} className="orn" />
          <img className="imgHistory" src={God} />
        </div>
        <p>
          <hr></hr>
          Agora, com os monstros das trevas destruindo tudo em seu caminho e as
          torres atraindo a atenção de todos, o mundo se tornou ainda mais
          perigoso e imprevisível. As sete raças rivais terão que deixar suas
          diferenças de lado e unir forças para enfrentar essas novas ameaças,
          antes que seja tarde demais.
        </p>
        <hr></hr>
        <div className="ornnament">
          <a
            href="/darkflorest"
            onClick={() => {
              document.querySelector(".monst").style.zIndex = "1000000";
              document.querySelector(".monst").style.transform = "scale(10)";
            }}
          >
            <img src={orn} className="orn" />
            <img className="imgHistory monst" src={monster} />
          </a>
        </div>
      </div>
      <hr></hr>
      <div className="canvas2">
        <h1>Raças</h1>
        <p>
          No mundo de Jigen dos sete reinos, a diversidade é uma característica
          notável. As sete raças que habitam este mundo são muito diferentes
          umas das outras e possuem características distintas.
          <br />
          <br />
          <br />
          Os humanos, por exemplo, são conhecidos por sua capacidade de
          adaptação e por sua grande habilidade em diferentes áreas, desde a
          magia até a luta. Já os elfos são famosos por sua beleza e agilidade,
          além de possuírem habilidades mágicas impressionantes.
          <br />
          <br />
          <br />
          Os orcs, por sua vez, são criaturas fortes e brutais, muitas vezes
          temidos por outras raças devido à sua reputação de serem guerreiros
          ferozes. Enquanto isso, os anões são conhecidos por sua habilidade em
          trabalhos manuais, como a forja, e por sua grande resistência física.
          <br />
          <br />
          <br />
          As fadas são criaturas mágicas pequenas, ágeis e graciosas, que são
          muitas vezes consideradas como seres de grande beleza e encanto. Já os
          draconatos, são criaturas humanoides que possuem características de
          dragão, como escamas, asas e respiração de fogo. Eles são conhecidos
          por sua grande força e sabedoria.
          <br />
          <br />
          <br />
          Além disso, também há os Tieflings, uma raça com traços demoníacos que
          muitas vezes são discriminados e marginalizados devido à sua aparência
          e à conexão com o mundo infernal. Eles possuem habilidades mágicas
          poderosas, como manipulação de fogo e sombras, e são muitas vezes
          temidos pelas outras raças devido à sua associação com o mal.
          <br />
          <br />
          <br />
          Cada raça possui sua própria cultura, tradições e história, o que
          torna o mundo de fantasia dos sete reinos um lugar fascinante e
          diverso. Embora a guerra tenha dividido as raças, é importante lembrar
          que a diversidade é uma característica valiosa e que cada raça possui
          habilidades únicas e importantes para o mundo em que vivemos.
        </p>
        <Carrosel></Carrosel>
      </div>
      <hr></hr>
      <div className="canvas3">
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-discord"
            viewBox="0 0 16 16"
          >
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
          </svg>
          Sobre o Projeto
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-discord"
            viewBox="0 0 16 16"
          >
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
          </svg>
        </h1>
        <div className="ornnament">
          <img src={orn} className="orn" />
          <img
            className="imgHistory"
            src="https://cdn.discordapp.com/attachments/946523460060975157/1077208999017062420/Momessito_people_gaming_RPG_in_your_computer_becoming_your_own__64dd5bfe-f39a-4a28-8b12-db767c5fa75f.png"
          />
        </div>
        <p>
          Temos o prazer de anunciar nosso novo RPG no Discord, o Earth of
          Dungeons! Se você é um fã de jogos de RPG e quer se aventurar em um
          mundo mágico, este é o lugar perfeito para você!
          <br />
          <br />
          <br />
          Nosso jogo é baseado em cartas, tornando-o único e desafiador. Você
          pode escolher seu personagem e usar cartas para realizar ações, lutar
          contra inimigos e explorar o mundo.
          <br />
          <br />
          <br />
          Mas isso não é tudo! Também temos um sistema de site que oferece
          recompensas diárias e missões paralelas para tornar sua experiência de
          jogo ainda mais envolvente e recompensadora. Com essas missões, você
          pode ganhar pontos e itens especiais que podem ser usados para
          melhorar seu personagem e aumentar suas chances de sobrevivência.
          <br />
          <br />
          <br />
          Junte-se a nós e comece sua aventura em Earth of Dungeons! Nós
          fornecemos todas as ferramentas necessárias para ajudá-lo a ter a
          melhor experiência de jogo possível. E com um sistema de recompensas,
          você tem ainda mais motivos para continuar jogando e se aprimorando.
          <br />
          <br />
          <br />
          Não perca mais tempo e entre no nosso servidor do Discord para começar
          a jogar. Junte-se a outros jogadores e embarque em uma aventura
          emocionante em um mundo mágico e cheio de desafios. Vamos jogar!
        </p>
      </div>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default Home;
