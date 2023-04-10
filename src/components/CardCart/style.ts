import styled from 'styled-components'

export const CardCartStyle = styled.li`
  display: flex;
  align-items: center;
  max-width: 460px;
  width: 100%;
  height: 81px;
  padding: 6px 15px;
  background-color: white;
  list-style: none;

  @media (max-width: 390px) {
    height: 100px;
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 65px;
    margin-right: 10px;

    img {
      width: 100px;
      height: 65px;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    #title {
      font-size: 16px;
      font-weight: 600;
      color: #006cd0;
    }

    .price-quantity {
      display: flex;
      align-items: center;
      justify-content: space-between;

      #price {
        font-size: 14px;
        font-weight: 600;
      }

      .quantity {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 55px;
        height: 18px;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background-color: #004382;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          cursor: pointer;

          svg {
            font-size: 16px;
            color: white;
          }
        }

        #amount {
          font-size: 16px;
          font-weight: 600;
          cursor: default;
        }
      }
    }
  }
`
