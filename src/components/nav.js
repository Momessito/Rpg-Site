

function Nav() {
    return (
<nav onClick={SideMenu} className='nav'>
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
</nav>
    );

    function SideMenu(){
        document.querySelector('.Side').style.transform = 'translateX(0px)'
        document.querySelector('.Side').style.height = '100vh'
        document.querySelector('.Side').style.animation = 'slide-in-fwd-tl 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
    }
  }
  
  export default Nav;
  