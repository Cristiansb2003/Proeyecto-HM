import { useState } from 'react';
import st from './gallery.module.css'
import Img1 from '../../../utils/actividad-piloto/1.jpg';
import Img2 from '../../../utils/actividad-piloto/2.jpg';
import Img3 from '../../../utils/actividad-piloto/3.jpg';
import Img4 from '../../../utils/actividad-piloto/4.jpg';
import Img5 from '../../../utils/actividad-piloto/5.jpg';
import Img6 from '../../../utils/actividad-piloto/6.jpg';
export function Gallery(){
    let data =[
        {
        id: 1,
        imgSrc: Img1
        },
        {
        id: 2,
        imgSrc: Img2
        },
        {
        id: 3,
        imgSrc: Img3
        },
        {
        id: 4,
        imgSrc: Img4
        }
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return(
        <div>
            <div className={model? `${st.model} ${st.open}`: st.model}>
                <img src={tempimgSrc}/>
                <i class="fa-solid fa-xmark cl"></i>
            </div>
            <div className={st.gallery}>
            {
                data.map((item, index)=>{
                    return(
                        <div className={st.pics} key ={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} className={st.lar}/>
                        </div>
                    )
                })
            }
        </div>
        </div>
    );
}