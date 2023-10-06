import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import AsideMenu from "./components/AsideMenu";
import Banner from "./components/Banner";

const FundoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <GlobalStyle/>
      <Header/>
      <AsideMenu/>
      <Banner text="A galeria mais completa de fotos do espaço!" backgroundImage="/src/assets/banner.png"/>
    </FundoGradiente>
  )
}

export default App
