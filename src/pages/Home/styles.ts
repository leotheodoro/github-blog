import styled from 'styled-components'

export const PostsContainer = styled.main`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`
