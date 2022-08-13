import { Slideshow } from './Slideshow/Slideshow'
import st from './slide.module.css'
import styled from 'styled-components'

export function Slide(){
    return(
       <main>
        <Titulo>Productos Destacados</Titulo>
        <Slideshow/>
       </main>
    )
}

const Titulo = styled.p`
    font-size: 18px;
    font-wight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
`;