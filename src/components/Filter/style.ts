import styled from 'styled-components'

export const FilterStyle = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  max-width: max-content;
  width: 100%;
  transition: 0.1s;

  &:hover {
    color: #2496ff;
  }

  input {
    margin-right: 5px;
    cursor: pointer;
    width: 15px;
    height: 15px;
  }
`
