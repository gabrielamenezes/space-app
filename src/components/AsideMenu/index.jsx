import styled from "styled-components"
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
                    <li>
                        <a href="#">
                            Início
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            Mais vistas
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            Mais curtidas
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            Novas
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            Surpreenda-me
                        </a>
                    </li>
                </StyledList>
            </nav>
        </aside>
    )
}

export default AsideMenu;