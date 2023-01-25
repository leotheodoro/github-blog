import styled from 'styled-components'

export const PostCardContainer = styled.div`
  max-width: 416px;
  width: 100%;
  border-radius: 10px;
  padding: 2rem;

  background-color: ${(props) => props.theme['base-post']};

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    a {
      width: 70%;
      color: ${(props) => props.theme['base-subtitle']};
      text-decoration: none;
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
  p {
    overflow: hidden;
    line-height: 2rem;
    max-height: 8rem;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    overflow: hidden !important;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
  }
`
