import styled from "styled-components"
import InputText from "../InputText";

const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Header = ({filtro, setFiltro}) => {
    return (
        <StyledHeader>
            <img src="images/logo.png" alt="Logo do SpaceApp" />
            <InputText placeholder="O que você procura?" type="text" setFiltro={setFiltro} filtro={filtro}/>
        </StyledHeader>
    )
}

export default Header;