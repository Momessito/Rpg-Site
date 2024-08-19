import mySound from './Sea.mp3'
import sound from './scream.mp3'
import Nav from '../components/nav';
import Login from '../components/Login';
import SideMenu from '../components/sidemenu';
import Tritanius from '../images/20240814_232227640_iOS.png'
function Sea() {

    setTimeout(() => {
        new Audio(sound).play();
        document.querySelector('.inputs').style.opacity = '1'
    }, 20000);
    return ( 

        <div className="Sea">
                                <div className='inputs'> <Nav></Nav>
                    <Login></Login>
                    <SideMenu></SideMenu></div>
            <img src={Tritanius} style={{width : '100%'}}/>
            <iframe src={mySound} allow="autoplay" id="iframeAudio">
      </iframe>
      <div className='eye' onClick={()=>{alert('Parabens voce descobriu um segredo diga a senha: no olho do monstro para o ADM Momesso para receber sua recompensa')}}></div>
        <div className="Titles">
            <h1 style={{textAlign : 'center', color : '#40A5C2'}}>Tritanius</h1>
        </div>
        </div>
     );
}

export default Sea;