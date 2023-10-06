import styled from "styled-components"

const StyledListItem = styled.li`
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    font-size: 24px;
    font-style: normal;
    line-height: normal;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 22px;
    margin-top: 22px;
`
//children é o texto dentro do item
const ListItem = ({children, iconeAtivo, iconeInativo, ativo = false, alt}) => {
    return (
        <StyledListItem $ativo={ativo}> {/*passando propriedade para o styled component */}
            <img src={ativo ? iconeAtivo : iconeInativo} alt={alt}/>
            {children}
        </StyledListItem>
    )
}
export default ListItem;