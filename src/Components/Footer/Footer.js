import Vector4 from './FooterImage/Vector4.png'
import Vector5 from './FooterImage/Vector4.png'
import Vector6 from './FooterImage/Vector6.png'

import mmi from './FooterImage/mmi.png'
import whatapp from './FooterImage/whatapp.png'
import telegram from './FooterImage/telegram.png'
import gmail from './FooterImage/gmail.png'
function Footer() {
    return (
    <div>
        <div>
        <p className="FooterPoragrof">Хотите обсудить проект?</p>
        <div>
            <h1 className="InputName">Имя</h1>
        <img className='Vector4'src={Vector4}/>
        </div>
        <div>
        <h1 className="InputEmail">Email</h1>
        <img className='Vector5'src={Vector5}/>
        </div>
        <div>
        <h1 className='InputMassage'>Ваше сообщение</h1>
        <img className='Vector6'src={Vector6}/>
        </div>
        <button className='Button'>Отправить</button>
        <img className='mmi'src={mmi}/>
        <p className='Reborn-APP'>Reborn-APP 2021. Все права защищены</p>
        </div>
        <div>
            <p className='FooterFast'>Хотите получить быстрый ответ? Звоните , пишите :</p>
            <p className='FooterPhone'>+12(345)-678-9</p>
            <div>
            <img className='whatapp'src={whatapp}/>
            <img className='telegram'src={telegram}/>
            <img className='gmail'src={gmail}/>
            </div>
        </div>
    </div>
    )
}

export default Footer