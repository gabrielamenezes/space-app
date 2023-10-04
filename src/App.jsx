import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import AsideMenu from "./components/AsideMenu";

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
    </FundoGradiente>
  )
}

export default App
