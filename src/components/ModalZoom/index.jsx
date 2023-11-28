import styled from "styled-components"
import Imagem from "../Gallery/Imagem"
const Overlay = styled.div `
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`
const Dialog = styled.dialog`
    position: absolute;
    top: 294px;
`
const ModalZoom = ({foto}) => {
    return (
        <>
        (foto && <>
            <Overlay/>
            <Dialog open={!!foto}>
                <Imagem foto={foto} expandida/>
            </Dialog>
        </>)
        </>
    )
}

export default ModalZoom