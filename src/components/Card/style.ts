import styled from 'styled-components'
import { ICardStyleProps } from '../../interfaces'

export const CardStyle = styled.li<ICardStyleProps>`
  display: flex;
  flex-direction: ${(props) => props.flex_direction};
  align-items: center;
  justify-content: flex-start;
  max-width: ${(props) => props.width};
  width: 100%;
  height: ${(props) => props.height};
  padding: 15px;
  background-color: white;
  box-shadow: 0 0 1.5px 1.5px transparent;
  transition: 0.2s;
  list-style: none;

  @media (max-width: 1309px) {
    flex-direction: column;
    width: 300px;
    height: 442px;
  }

  &:hover {
    box-shadow: 0 0 1.5px 1.5px #004382;
  }

  figure {
    margin: auto;
    width: 227px;
    height: 170px;
    margin-right: 20px;

    img {
      width: 227px;
      height: 170px;
      filter: ${(props) => props.filter};
    }
  }

  .product-informations {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100%;
    width: 100%;

    #name {
      font-size: 18px;
      font-weight: 600;
      color: ${(props) => props.color};
      line-height: 20px;
      height: 40px;
      cursor: default;
      margin-bottom: ${(props) => props.margin_bottom};

      @media (max-width: 1309px) {
        margin-bottom: 5px;
      }
    }

    #description {
      width: 100%;
      font-size: 14px;
      font-weight: 400;
      color: lightgray;
      font-style: italic;
      text-align: justify;
      height: ${(props) => props.heightDescription};
      margin-bottom: ${(props) => props.margin_bottom};

      @media (max-width: 1309px) {
        height: 120px;
        margin-bottom: 5px;
      }
    }

    .price-quantity-button {
      display: flex;
      flex-direction: ${(props) => props.flex_direction};
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: ${(props) => props.heightPriceQuantityButton};

      @media (max-width: 1309px) {
        flex-direction: column;
        height: 70px;
      }

      .product-price-quantity {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: ${(props) => props.width_price_quantity};
        height: 32px;
        width: 100%;

        @media (max-width: 1309px) {
          max-width: 268px;
        }

        #price {
          font-size: 16px;
          font-weight: 700;
          color: ${(props) => props.color};
          cursor: default;
        }

        #quantity {
          font-size: 16px;
          font-weight: 500;
          cursor: default;
        }
      }

      #add-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${(props) => props.gap};
        width: ${(props) => props.buttonWidth};
        height: 32px;
        background-color: #dcf2fe;
        font-size: 14px;
        font-weight: 600;
        padding: 0;
        margin: 0;
        border: none;
        border-radius: 6px;
        color: #004382;
        transition: 0.2s;
        cursor: pointer;

        @media (max-width: 1309px) {
          gap: 10px;
          width: 268px;
        }

        svg {
          font-size: 20px;
          color: #004382;
        }

        &:hover {
          background-color: #004382;
          color: white;

          svg {
            color: white;
          }
        }
      }

      #unavailable {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: darkgray;
        cursor: not-allowed;
        gap: ${(props) => props.gap};
        width: ${(props) => props.buttonWidth};
        height: 32px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        border: none;

        @media (max-width: 1309px) {
          gap: 10px;
          width: 268px;
        }

        svg {
          font-size: 20px;
        }
      }
    }
  }
`
