import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -5rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  gap: 2rem;

  header {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
    }
  }

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const PostInfo = styled.div`
  display: flex;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostBody = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme['base-text']};
`
