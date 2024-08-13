import Footer from './components/footer';
import SideMenu from './components/sidemenu';
import Nav from './components/nav';
import mySound from './musics/tabern.mp3'
import guild from './images/adventure.png'

function Monsters() {


    return (

        <div className="MonstersApp">


            <SideMenu></SideMenu>
            <h2 className='Login'>Log In</h2>
            <Nav></Nav>
            <iframe src={mySound} allow="autoplay loop" id="iframeAudio">
            </iframe>
            <img src='https://cdn.discordapp.com/attachments/946523460060975157/1077257286948503612/Momessito_book_on_the_table__anime__fantasy_b48dad61-e709-42ec-98ca-393b951253b4.png' style={{width : '100%'}}/>
            <h2 style={{textAlign : 'center'}}>Monstruario</h2>
            <h4>O Monstruario mostra os monstros e criaturas mais conhecidos dos livros:</h4>
            <span>Rank E:</span>
            <ul>
                <li>Rato Gigante</li>
                <li>Besouro Escaravelho</li>
                <li>Morcego de Sangue</li>
                <li>Larva de verme venenoso</li>
            </ul>
            <span>Rank D:</span>
            <ul>
                <li>Lobos Ferozes</li>
                <li>Goblins Ladrões</li>
                <li>Aranha Venenosa</li>
                <li>Zumbi Fraco</li>
            </ul>
            <span>Rank C:</span>
            <ul>
                <li>Zumbis Guerreiros</li>
                <li>Ooze Ácido</li>
                <li>Serpente Venenosa Gigante</li>
                <li>Esqueleto com Espada</li>
            </ul>
            <span>Rank A:</span>
            <ul>
                <li>Dragão Pequeno</li>
                <li>Elemental de Fogo</li>
                <li>Golem de Pedra</li>
                <li>Bruxa Malvada</li>
            </ul>
            <span>Rank S:</span>
            <ul>
                <li>Behemoth do Abismo</li>
                <li>Dragão Ancião</li>
                <li>Quimera Mítica</li>
                <li>Rei Demoníaco</li>
            </ul>
            <span>Rank SSS:</span>
            <ul>
                <li>Deus do Caos</li>
                <li>Cthulhu</li>
                <li>Titã do Fim dos Tempos</li>
                <li>Leviatã Primordial</li>
            </ul>
            <Footer></Footer>
        </div>


    );

}

export default Monsters;
