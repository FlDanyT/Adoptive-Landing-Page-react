import Rectangle from './ContentImage/Rectangle.png'
import Rectangle1 from './ContentImage/Rectangle (1).png'
import Rectangle2 from './ContentImage/Rectangle (2).png'
import Rectangle3 from './ContentImage/Rectangle (3).png'
import Rectangle4 from './ContentImage/Rectangle (4).png'

import simple_icons_woo from './ContentImage/simple-icons_woo.png'
import cib_github from './ContentImage/cib_github.png'
import bx_bxl_git from './ContentImage/bx_bxl-git.png'
function Content() {
return (
    <div>
        <div>
            <p className="ContentPorgrafOne">Разработка функциональных</p>
            <p className="ContentPorgrafTwo">eСommerce приложений</p>
            <h4 className="ContentDescription">Передовое диджитал агенство разработки сложнейших решений для бизнеса</h4>
        </div>
        <div>
        <img className='Rectangle1' src={Rectangle1}/>
        <img className='Rectangle4' src={Rectangle4}/>
            <img className='Rectangle' src={Rectangle}/>
            <img className='Rectangle2' src={Rectangle2}/>
            <img className='Rectangle3' src={Rectangle3}/>
            
            
            <img className='bx_bxl_git' src={bx_bxl_git}/>
            <img className='cib_github' src={cib_github}/>
            <img className='simple_icons_woo' src={simple_icons_woo}/>


            </div>
    </div>
)
}

export default Content