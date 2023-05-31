import RectangleOne from './PortfolioImage/RectangleOne.png'
import RectangleTwo from './PortfolioImage/RectangleTwo.png'
import RectangleThree from './PortfolioImage/RectangleThree.png'

import ArrowPortfolio from './PortfolioImage/ArrowPortfolio.png'

import VectorOne from './PortfolioImage/VectorOne.png'
import VectorTwo from './PortfolioImage/VectorTwo.png'
import VectorThree from './PortfolioImage/VectorThree.png'
function Portfolio() {
    return (
        <div>
            <p className="PortfolioPoragrof">Наше Портфолио</p>
            <div>

                <div>
                <img className='RectangleOne1' src={RectangleOne}/> 
                <p className='PortfolioPoragrofProjectOne'>Проект</p>
                <img className='ArrowPortfolio1' src={ArrowPortfolio}/> 
                </div>

                <div>
                <img className='RectangleOne2' src={RectangleOne}/>
                <p className='PortfolioPoragrofProjectTwo'>Проект</p>
                <img className='ArrowPortfolio2' src={ArrowPortfolio}/> 
                </div>

                <div>
                <img className='RectangleTwo1' src={RectangleTwo}/>
                <p className='PortfolioPoragrofProjectThree'>Проект</p>
                <img className='ArrowPortfolio3' src={ArrowPortfolio}/> 
                </div>
                <div>
                <img className='RectangleTwo2' src={RectangleTwo}/>
                <p className='PortfolioPoragrofProjectFour'>Проект</p>
                <img className='ArrowPortfolio4' src={ArrowPortfolio}/> 
                </div>

                <div>
                <img className='RectangleThree1' src={RectangleThree}/>
                <p className='PortfolioPoragrofProjectFive'>Проект</p>
                <img className='ArrowPortfolio5' src={ArrowPortfolio}/> 
                </div>
                <div>
                <img className='RectangleThree2' src={RectangleThree}/>
                <p className='PortfolioPoragrofProjectSix'>Проект</p>
                <img className='ArrowPortfolio6' src={ArrowPortfolio}/> 
                </div>
            </div>
            <div>
                <div>
                    <p className='PortfolioNumberYears'>9</p>
                    <img className='VectorOne' src={VectorOne}/> 
                    <h1 className='YearsOld'>Лет опыта</h1>
                </div>
                <div>
                    <p className='PortfolioNumberWorld'>20</p>
                    <img className='VectorTwo' src={VectorTwo}/> 
                    <h1 className='OficWorld'>Офисов по миру</h1>
                </div>
                <div>
                    <p className='PortfolioOldProject'>350</p>
                    <img className='VectorTree' src={VectorThree}/> 
                    <h1 className='OldProject'>Выполненых проектов</h1>
                </div>
            </div>
        </div>
    )
}
export default Portfolio