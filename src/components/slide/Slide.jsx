import img1 from './../../utils/actividad-piloto/1.jpg'
import img2 from './../../utils/actividad-piloto/2.jpg'
import img3 from './../../utils/actividad-piloto/3.jpg'
import img4 from './../../utils/actividad-piloto/4.jpg'

export function Slide(){
    return(
        <div>
            <div>
                <img src={img1}/>
            </div>
            <div>
                Controles
            </div>
        </div>
    )
}