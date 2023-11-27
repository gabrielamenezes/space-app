import styled from 'styled-components';
import tags from './tags.json'
import './style.css'
const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;
const ContainerSectionTags = styled.section`
  display: flex;
  margin: 66px 0 49px;

`
const ContainerTags = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`
const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`
const Tags = () =>  {
  return (
    <ContainerSectionTags>
        <p>Busque por tags:</p>
        <ContainerTags>
          {tags.map(tag => <Tag key={tag.id}><TagTitulo>{tag.titulo}</TagTitulo></Tag>)}
        </ContainerTags>
    </ContainerSectionTags>
  )
}

export default Tags