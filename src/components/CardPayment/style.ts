import styled from 'styled-components'

export const CardPaymentStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 300px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0 1.5px 1.5px transparent;
  transition: 0.2s;
  list-style: none;

  &:hover {
    box-shadow: 0 0 1.5px 1.5px #004382;
  }

  figure {
    margin: auto;
    width: 227px;
    height: 170px;

    img {
      width: 227px;
      height: 170px;
    }
  }

  .product-informations {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-top: 10px;

    #name {
      font-size: 18px;
      font-weight: 600;
      color: #006cd0;
      line-height: 20px;
      cursor: default;
      width: 100%;
    }

    .price-quantity {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      #price {
        font-size: 16px;
        font-weight: 700;
        color: #006cd0;
        cursor: default;
      }

      #quantity {
        font-size: 16px;
        font-weight: 500;
        cursor: default;
      }
    }
  }
`
