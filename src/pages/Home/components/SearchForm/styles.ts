import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.125rem;
      font-weight: bold;
    }

    span {
      font-size: 0.875rem;
    }
  }

  input {
    width: 100%;
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 1rem;
    margin: 1rem 0;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
