import Footer from '../../components/footer';
import Nav from '../../components/nav';
import Login from '../../components/Login'
import Sound from './dark.mp3'
import SideMenu from '../../components/sidemenu';

function DarkFlorest() {
    setTimeout(() => {
        document.querySelector('.imgOver').style.animation = 'not 2s infinite'
        document.querySelector('.inputs').style.opacity = '1'
    }, 10000);


    return (
        <div className="dark" style={{ background: '#030202' }}>
            <SideMenu ></SideMenu>
            <div className='inputs'>            <Login></Login>
                <Nav></Nav></div>


            <div className="monsterPage" onClick={() => {
                document.querySelector('.monsterPage').style.opacity = '0'
                document.querySelector('.monsterPage').style.zIndex = '0'
            }}>
                <div class="cardd">
                    <div class="card-image"><img src="https://cdn.discordapp.com/attachments/1077441049024282756/1077455281409232916/Momessito_quick_reflexmagic_cast_head__nohair_blue_casting__tel_1c1895af-5bc7-4e1b-b20b-66668ca2882f.png" /></div>
                    <div class="card-description">
                        <p class="text-title">Você ganhou uma habilidade!</p>
                        <p class="text-Star">Senha: O toque das trevas</p><br></br>
                        <p class="text-body">fale essa senha para o ADM Momesso e se você for o primeiro a achar esse easter egg voce ira ganhar uma habilidade.</p>
                    </div>
                </div>
            </div>


            <div className="imgOver"><img className='imgFlorest' src='https://i.ibb.co/0m9p2Qd/florest.png' />

                <img className='imgFlorestMonstr' src='https://i.ibb.co/D4k8xkk/Florest-Monster.png' />

            </div>
            <div className="fade"></div>
            <div className="TitlesDark">
                <h1>O Mal Esta a Espreita</h1>
                <h3>E esta se aproximando</h3>
            </div>
            <div class="content-container">
                <div class="content">

                    <h1>Mrs. Dalloway</h1>
                    <hr />
                    <h2>por Virginia Woolf</h2>

                    <h3>Carta de Expedição ao Vazio</h3>

                    <p><span>M</span>rs. Dalloway</p>

                    <p>As Forças das Escuridão são uma ameaça sem precedentes para todos aqueles que ousam se aventurar em seus territórios. Originárias dos corpos das vítimas da Guerra dos 7 Reinos, essas criaturas são uma mistura grotesca de carne e osso, cujas formas e aparências variam amplamente. Algumas são tão grandes quanto montanhas, enquanto outras são tão pequenas quanto ratos. Algumas parecem ser uma mistura de vários animais, enquanto outras são uma mistura horrível de humano e animal.</p>

                    <p>O que se sabe com certeza sobre esses monstros é que eles se alimentam de corpos, e quanto mais matam, mais o seu exército cresce. Eles já conquistaram inúmeros territórios e sua presença é acompanhada por uma escuridão extrema que enlouquece a mente daqueles que se aventuram em seus territórios. Aqueles que tentam lutar contra as Forças das Escuridão têm pouca chance de sobrevivência, e aqueles que conseguem retornar são frequentemente marcados pela experiência.</p>

                    <p>A maioria dos relatos das Forças das Escuridão é de segunda mão, vinda de sobreviventes ou observadores distantes. Eles parecem estar se espalhando rapidamente, engolindo tudo em seu caminho. Algumas pessoas dizem que os monstros estão sendo controlados por uma inteligência maligna, enquanto outras acreditam que eles são uma manifestação do mal puro. Qualquer que seja a verdade, é inegável que as Forças das Escuridão são uma ameaça imensa que deve ser combatida antes que seja tarde demais.</p>

                    <p>Um Cavaleiro que sobreviveu deu se Relato: <br></br><br></br>"Você não pode imaginar o que eu vi, companheiro. O horror que se ergue nas trevas é inominável. Eu nunca vi nada parecido em minha vida. Eu estava patrulhando a fronteira quando vi aquela criatura. Eu não sei como descrever isso, mas era como uma espécie de mistura entre um homem e um inseto gigante, com pernas longas e finas e múltiplos braços que terminavam em lâminas afiadas. Ele parecia tão confiante, tão satisfeito em sua própria força que pensei que seria fácil lidar com ele. Mas quando nos atacou, nossas armas mal arranhavam sua pele dura como aço. Ele era tão rápido, se movia como se dançasse entre nós, cortando-nos e matando sem esforço. Eu nunca senti tanto medo em toda a minha vida. Nós tivemos que recuar. Eu nunca quero voltar para lá novamente."</p>

                    <p>Alem disso um de meus homens voltou da expedição e reportou: <br></br><br></br> "Meu senhor, eu lamento informá-lo que falhamos em nossa missão. Os homens que me seguiram ao Território do Vazio estão mortos. Eu sou o único sobrevivente. Eu vi coisas lá que me fizeram questionar a própria existência da humanidade. Há algo terrível, algo que nunca vi antes, algo que nunca poderia ter imaginado. Eles são criaturas abomináveis, tão diferentes de tudo o que conhecemos. Eles não são homens nem animais, mas uma espécie de híbrido grotesco de ambos. Alguns tinham garras afiadas como navalhas, outros tinham tentáculos que se estendiam para agarrar suas vítimas. Havia um que tinha uma boca enorme, cheia de dentes irregulares e desiguais. Eles não pararam até que todos os meus homens estivessem mortos. Se eu não tivesse lutado como um homem louco e desesperado, teria morrido também. Eu não sei como conseguiram se tornar tão poderosos, tão aterrorizantes. Mas eu não posso ficar aqui de braços cruzados enquanto eles crescem em número e poder. Eu imploro que me dê a chance de voltar lá, para levar justiça a essas criaturas e vingar meus companheiros."</p>

                    <p>Termino meu relato.</p>

                    <p>Jacob P.</p>

                </div>
            </div>

            <div className="monsterClick" onClick={() => { document.querySelector('.monsterPage').style.opacity = '1'; document.querySelector('.monsterPage').style.zIndex = '1000' }}></div>

            <iframe src={Sound} allow="autoplay" id="iframeAudio">
            </iframe>
            <Footer></Footer>
        </div>

    );
}

export default DarkFlorest; 