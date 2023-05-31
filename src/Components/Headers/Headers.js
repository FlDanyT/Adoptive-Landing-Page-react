import friesImg from './menu-img.jpg';

function Headers() {
    return (
        <div>
            <div className='LogoFonts'>
      <h3 className="textHeaderLogo">REBORN APP</h3>
            </div>
            <div>
                <h1 className="textHeaderOne">Оставить заявку</h1>
                <h2 className="textHeaderMenu">Меню</h2>
            </div>
            <div>
            <img className='imgMenu' src={friesImg}>
      </img>
            </div>
        </div>
    )
}

export default Headers