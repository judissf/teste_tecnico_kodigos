import styled from 'styled-components'

export const SearchStyle = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  width: 100%;
  height: 42px;
  color: black;
  font-size: 16px;
  font-weight: 600;
  padding: 6px 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  transition: 0.2s;

  svg {
    font-size: 25px;
    color: black;
    margin-right: 18px;
  }

  input {
    max-width: 932px;
    width: 100%;
    height: 100%;
    color: black;
    font-size: 16px;
    font-weight: 600;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    transition: 0.2s;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: black;
      font-size: 16px;
      font-weight: 600;
    }
  }

  &:hover {
    background-color: rgba(208, 208, 208, 0.5);
  }
`
