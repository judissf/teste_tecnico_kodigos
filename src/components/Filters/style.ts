import styled from 'styled-components'

export const FiltersStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 250px;
  width: 100%;
  height: 585px;

  @media (max-width: 599px) {
    max-width: 599px;
    width: 100%;
  }

  .filter-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    height: 35px;
    font-size: 20px;
    margin-bottom: 17px;
    cursor: default;

    svg {
      font-size: 32px;
    }
  }

  .filter-fields {
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: #065cab;
    color: white;
    height: 458px;
    width: 100%;
    border-radius: 0 0 8px 8px;

    @media (max-width: 599px) {
      flex-direction: row;
      justify-content: space-between;
      height: 210px;
    }
    
    @media (max-width: 439px) {
      flex-direction: column;
      justify-content: space-between;
      height: 425px;
    }

    .field-categories {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      gap: 5px;

      &::after {
        display: block;
        content: '';
        background-color: #00539e;
        width: 218px;
        height: 2px;
        border-radius: 6px;
        margin-top: 10px;

        @media (max-width: 599px) {
          display: none;
        }
      }

      #title-categories {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
        cursor: default;
      }

      label {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        width: max-content;
        transition: 0.1s;

        &:hover {
          color: #2496ff;
        }
      }

      input {
        margin-right: 5px;
        cursor: pointer;
      }
    }

    .field-mark {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 15px;

      &::after {
        display: block;
        content: '';
        background-color: #00539e;
        width: 218px;
        height: 2px;
        border-radius: 6px;
        margin-top: 10px;

        @media (max-width: 599px) {
          display: none;
        }
      }

      #title-marks {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
        cursor: default;
      }

      label {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        width: max-content;
        transition: 0.1s;

        &:hover {
          color: #2496ff;
        }
      }

      input {
        margin-right: 5px;
      }
    }

    .field-price {
      display: flex;
      flex-direction: column;
      gap: 5px;

      #title-prices {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
        cursor: default;
      }
    }
  }
`
