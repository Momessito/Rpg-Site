import Footer from '../components/footer';
import Nav from '../components/nav';
import Login from '../components/Login'
import Sound from './war.mp3'
import SideMenu from '../components/sidemenu';
import War1 from '../images/war1.jpeg'
import War2 from '../images/War2.jpeg'
import War3 from '../images/war.png'

function War() {


    return (
        <div className="dark" style={{ background: '#030202' }}>
            <SideMenu ></SideMenu>
            <Login></Login>
            <Nav></Nav>

            <img className='imgWar' src={War3} />

            <div className="fade"></div>
            <div className="TitlesWar">
                <h1>A guerra dos sete Reinos</h1>
                <h3>Um mundo todo em guerra</h3>
            </div>
            <div class="carde">
                <div class="imgBox">
                    <div class="bark"></div>
                    <img src={War2} />
                </div>
                <div class="details">
                    <h4 class="color1">A guerra dos Sete reinos</h4>
                    <h4 class="color2 margin">A <span onClick={() =>{alert('Parabens voce achou um easter egg diga a senha : "A matança era a solução?" para o adm Eldarion.')}}>matança</span> dos dez anos</h4>
                    <p>Eu era apenas um jovem soldado quando a guerra começou. Era uma época de incerteza e medo, com cada reino lutando pelo poder. Os reis e rainhas da época estavam dispostos a fazer qualquer coisa para alcançar seus objetivos, incluindo derramar o sangue de seus próprios cidadãos.</p>
                </div>
            </div>
            <div class="carde2">
                <div class="imgBox">
                    <div class="bark"></div>
                    <img src={War1} />
                </div>
                <div class="details">
                    <p style={{ fontSize: '10px' }}>Lembro-me vividamente do primeiro ataque. O céu estava escuro e as nuvens pareciam pesadas com a chuva que estava por vir. Eu estava de guarda na fronteira do meu reino quando vi as primeiras tropas inimigas se aproximando. Eram muitos, e suas armas eram reluzentes sob a luz da lua.
                        <br></br>                        <br></br>

                        Foi uma batalha feroz e sangrenta. As espadas se chocavam, os arcos lançavam flechas, as catapultas lançavam pedras. O som era ensurdecedor, com gritos e gemidos por todos os lados. Eu lutei como nunca antes, sentindo o medo e a adrenalina correndo pelas minhas veias.
                        <br></br>                        <br></br>
                        A guerra durou anos, e eu vi coisas que nunca pensei que veria. Cidades queimadas até as cinzas, campos cobertos de corpos, famílias inteiras mortas. Foi uma época de desespero e caos.
                        <br></br>                        <br></br>
                        Mas, no final, nosso reino emergiu vitorioso. Os outros seis reinos foram destruídos ou enfraquecidos o suficiente para se submeterem a nosso rei. Foi uma vitória amarga, e eu senti a perda de tantas vidas inocentes.
                        <br></br>                        <br></br>
                        Desde então, tenho procurado maneiras de trazer a paz e a justiça ao nosso reino. Mas às vezes ainda tenho pesadelos com a guerra, com as lâminas brilhantes e o sangue jorrando. Espero que nunca tenhamos que passar por algo assim novamente.</p>
                </div>
            </div>
            <div className="down"></div>
            <iframe src={Sound} allow="autoplay" id="iframeAudio">
            </iframe>
            <Footer></Footer>
        </div>

    );
}

export default War; 