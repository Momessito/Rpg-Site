import Footer from './components/footer';
import SideMenu from './components/sidemenu';
import Nav from './components/nav';
import mySound from './musics/guild.mp3'
import guild from './images/adventure.png'




function Guild() {


    return (

        <div className="guildApp">
            <SideMenu></SideMenu>
            <h2 className='Login'>Log In</h2>
            <Nav></Nav>
            <iframe src={mySound} allow="autoplay loop" id="iframeAudio">
            </iframe>
            <div className='canvasGui'>

                <img className='guild' src={guild} />
                <div className='FadeGuild'></div>
            </div>
            <h1>Guilda Dos Aventureiros</h1>
            <p>
                Bem-vindo à guilda, aventureiro! Estamos felizes em ter você conosco. Aqui, você encontrará muitas oportunidades emocionantes para explorar o mundo, combater monstros e cumprir missões para obter recompensas valiosas.
                <br /><br /><br />
                Nós temos missões para todos os tipos de aventureiros, desde iniciantes até veteranos experientes. Cada missão é classificada de E a SSS, com base em sua dificuldade e recompensas oferecidas. Você pode escolher qual missão deseja aceitar e trabalhar em direção a classificações mais altas.
                <br /><br /><br />
                Falando em recompensas, você será recompensado por cada missão que cumprir. As recompensas incluem dinheiro, itens, pontos de experiência e muito mais. Quanto mais difícil for a missão, maiores serão as recompensas.
                <br /><br /><br />
                Também temos um sistema de ranking para recompensar nossos aventureiros mais dedicados e talentosos. Quanto mais missões você cumprir, mais pontos de classificação você receberá. Esses pontos ajudarão a determinar seu nível de classificação na guilda, variando de F a SSS.
                <br /><br /><br />
                Estamos animados para ver o que você pode realizar na guilda. Se você tiver alguma dúvida, sinta-se à vontade para perguntar a um de nossos membros experientes. Boa sorte em suas missões, aventureiro!
            </p>

            <button style={{marginLeft : '50%',transform : 'translate(-50%)'}} onClick={() => { window.location.href = '/missions' }}>Entrar Na Aventura</button>
            <Footer></Footer>
        </div>


    );

}

export default Guild;
