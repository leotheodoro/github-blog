import styled from 'styled-components'
import headerBackgroundImg from '../../assets/header-background.svg'

export const HeaderContainer = styled.div`
  background-image: url(${headerBackgroundImg});
  background-size: cover;
  height: 296px;
  display: flex;
  justify-content: center;

  img {
    width: 148px;
  }
`
