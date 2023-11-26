import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import AsideMenu from "./components/AsideMenu";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

const FundoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const GalleryContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
function App() {

  return (
    <FundoGradiente>
      <GlobalStyle/>
      <AppContainer>
        <Header/>
        <MainContainer>
          <AsideMenu/>
          <GalleryContainer>
            <Banner text="A galeria mais completa de fotos do espaço!" backgroundImage="/src/assets/banner.png"/>
            <Gallery/>
          </GalleryContainer>
        </MainContainer>
      </AppContainer>
      
    </FundoGradiente>
  )
}

export default App
