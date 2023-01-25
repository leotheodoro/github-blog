import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const ProfileContent = styled.div`
  display: flex;
  margin-top: -5rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const ProfileInformation = styled.div`
  strong {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    a {
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      text-decoration: none;
    }
  }

  p {
    margin-bottom: 24px;
  }
`
