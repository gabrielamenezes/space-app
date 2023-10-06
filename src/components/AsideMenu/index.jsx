import styled from "styled-components"
import ListItem from "./ListItem"
const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const AsideMenu = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <ListItem 
                        iconeInativo={'/icons/home-inativo.png'} 
                        iconeAtivo={'/icons/home-ativo.png'} 
                        alt={'Ícone de uma casa'}
                        ativo  
                    >
                        Início
                    </ListItem>
                    <ListItem 
                        iconeInativo={'/icons/mais-vistas-inativo.png'} 
                        iconeAtivo={'/icons/mais-vistas-ativo.png'} 
                        alt={'Ícone de um olho'}  
                    >
                        Mais Vistas
                    </ListItem>
                    <ListItem 
                        iconeInativo={'/icons/mais-curtidas-inativo.png'} 
                        iconeAtivo={'/icons/mais-curtidas-ativo.png'} 
                        alt={'Ícone de um joinha'}  
                    >
                        Mais Curtidas
                    </ListItem>

                    <ListItem 
                        iconeInativo={'/icons/novas-inativo.png'} 
                        iconeAtivo={'/icons/novas-ativo.png'} 
                        alt={'Ícone de um brilhinho'}  
                    >
                        Novas
                    </ListItem>

                    <ListItem 
                        iconeInativo={'/icons/surpreenda-me-inativo.png'} 
                        iconeAtivo={'/icons/surpreenda-me-ativo.png'} 
                        alt={'Ícone de uma lâmpada'}  
                    >
                        Surpreenda-me
                    </ListItem>
                </StyledList>
            </nav>
        </aside>
    )
}

export default AsideMenu;