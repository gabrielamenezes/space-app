import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";
const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`
const GaleriaContainer = styled.div `
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Gallery = ({fotos = [], aoFotoSelecionada}) => {
    return (
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem aoZoomSolicitado={aoFotoSelecionada} key={foto.id} foto={foto}></Imagem>)}
                    </ImagensContainer>
                </SecaoFluida>

                <Populares>
                
                </Populares>    
            </GaleriaContainer>
        </>
    )
}

export default Gallery;