import orn from '../ornam2.png'
import orn2 from '../ornam1.png'

function SideMenu() {
    return (
<div className="Side">
<svg onClick={SideMenu} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
<img className='orn2' src={orn2}/>
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/user">Perfil</a></li>
    <li><a href="/inventory">Inventario</a></li>
    <li><a href="/shop">Loja</a></li>
    <li><a href="/guild">Guild</a></li>
    <li><a href="/friends">Taberna</a></li>
    <li><a href="/monsters">Monstruario</a></li>
    <li><a href="/roleta">Roleta</a></li>
    <li><a href="/cards">Cards</a></li>
    <li><a href="/tct">TCT</a></li>
</ul>
<img src={orn}/>

</div>
    );
    function SideMenu(){
        document.querySelector('.Side').style.transform = 'translateX(-500px)'
        document.querySelector('.Side').style.height = '100vh'
        document.querySelector('.Side').style.animation = 'slide-out-bck-tl 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
    }
  }
  
  export default SideMenu;
  