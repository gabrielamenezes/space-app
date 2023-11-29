import styled from "styled-components"
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import AsideMenu from "./components/AsideMenu";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import fotos from './fotos.json'
import ModalZoom from "./components/ModalZoom";
import { useEffect, useState } from "react";

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
const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  
  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtro, tag])

  const fecharModal = () => {
    setFotoSelecionada(null);
  }
  const aoAlternarFavorito = (foto) => {
    if(foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }
  return (
    <FundoGradiente>
      <GlobalStyle/>
      <AppContainer>
        <Header filtro={filtro} setFiltro={setFiltro}/>
        <MainContainer>
          <AsideMenu/>
          <GalleryContainer>
            <Banner text="A galeria mais completa de fotos do espaço!" backgroundImage="/src/assets/banner.png"/>
            <Gallery fotos={fotosDaGaleria} aoAlternarFavorito={aoAlternarFavorito} aoFotoSelecionada={foto => setFotoSelecionada(foto)} setTag={setTag}/>
          </GalleryContainer>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={fecharModal} aoAlternarFavorito={aoAlternarFavorito}/>
    </FundoGradiente>
  )
}

export default App
