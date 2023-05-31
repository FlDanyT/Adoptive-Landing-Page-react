import  Arrow from './DescriptionsImage/Arrow.png'
import Vector from './DescriptionsImage/Vector.png'

function Descriptions() {
    return (
        <div>
            <p className="DescriptionsPorgraf">Наша команда создает продвинутые комерчиские приложения от фронт до мобильного приложения Android/iOS</p>
            <div>
                <p className="DescriptionsPorgrafInfo">Что мы Делаем</p>


                <div>
                    <p className="DescriptionsPorgrafProjectThree">Доработка и тех поддержка проектов</p>
                    <h1 className="DescriptionsTextProjectThree">Сделаем подробное ТЗ, отрисуем макет создадим передовой дизайн, сделаем качественое программирование</h1>
                    <img className='Vector1' src={Vector}/> 

                </div>

                <div>
                    <p className="DescriptionsPorgrafProjectOne">Создание интернет-магазинов</p>
                    <h1 className="DescriptionsTextProjectOne">Сделаем подробное ТЗ, отрисуем макет создадим передовой дизайн, сделаем качественое программирование</h1>
                    <img className='Vector2' src={Vector}/> 
                </div>

                <div>
                    <p className="DescriptionsPorgrafProjectTwo">Создание мобильных приложений</p>
                    <h1 className="DescriptionsTextProjectTwo">Сделаем подробное ТЗ, отрисуем макет создадим передовой дизайн, сделаем качественое программирование</h1>
                    <img className='Vector3' src={Vector}/> 

                </div>

                <p className="DescriptionsPorgrafInfoTwo">Оставить заявку</p>
                <img className='Arrow' src={Arrow}/>

            </div>
        </div>
    )
}

export default Descriptions