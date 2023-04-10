import styled from 'styled-components'
import { ICartStyleProps } from '../../interfaces'

export const CartStyle = styled.div<ICartStyleProps>`
  display: flex;
  position: fixed;
  top: 0;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 1;

  .container-cart {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 82px;
    align-items: center;
    justify-content: flex-start;
    height: ${(props) => props.height};
    max-width: 500px;
    width: 100%;
    background-color: #f9f9f9;
    border-radius: 0 8px 8px 8px;

    .header-cart {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 50px;
      padding: 5px 15px;
      color: white;
      background-color: #006cd0;
      border-radius: 0 8px 0 0;

      h3 {
        font-weight: 600;
        font-size: 20px;
        cursor: default;

        @media (max-width: 519px) {
          font-size: 16px;
        }
      }

      .buttons-clear-close {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 180 px;

        #clear {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 80px;
          height: 20px;
          background: none;
          border: none;
          cursor: pointer;
          transition: 0.2s;
          color: white;
          font-weight: 600;
          font-size: 14px;
          margin-right: 20px;

          svg {
            font-size: 20px;
            color: white;
            transition: 0.2s;
          }
        }

        #close {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 32px;
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          transition: 0.2s;

          @media (max-width: 519px) {
            font-size: 16px;
          }

          &:hover {
            color: rgba(255, 255, 255, 0.5);

            svg {
              color: rgba(255, 255, 255, 0.5);
              transition: 0.2s;
            }
          }

          svg {
            font-size: 25px;

            @media (max-width: 519px) {
              font-size: 20px;
            }
          }
        }
      }
    }

    .content-cart-empty {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 120px;
      width: 100%;
      color: black;
      font-size: 18px;
      font-weight: 600;
      gap: 10px;

      @media (max-width: 519px) {
        font-size: 14px;
      }

      svg {
        font-size: 40px;
        color: gray;

        @media (max-width: 519px) {
          font-size: 30px;
        }
      }
    }

    .content-cart {
      display: flex;
      height: 370px;
      padding-top: 10px;
      margin-bottom: 10px;

      .list-products-cart {
        display: flex;
        flex-direction: column;
        gap: 10px;
        overflow-y: auto;

        &::-webkit-scrollbar {
          background-color: rgba(24, 89, 254, 0.8);
          height: 6px;
          width: 6px;
        }

        &::-webkit-scrollbar-track {
          background: lightgrey;
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: rgb(0, 67, 130);
        }

        &::-webkit-scrollbar-thumb {
          background-color: rgba(24, 89, 254, 0.8);
          border-radius: 20px;
        }
      }
    }

    .purchase {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 15px;
      width: 100%;
      height: 50px;
      background-color: #004382;
      border-radius: 0 0 8px 8px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: none;
        border: none;
        color: white;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s;

        @media (max-width: 519px) {
          font-size: 14px;
        }

        svg {
          color: white;
          font-size: 28px;
          transition: 0.2s;

          @media (max-width: 519px) {
            font-size: 20px;
          }
        }

        &:hover {
          color: rgba(5, 151, 58, 1);

          svg {
            color: rgba(5, 151, 58, 1);
          }
        }
      }

      #items {
        cursor: default;
        font-size: 16px;
        font-weight: 600;
        color: white;

        @media (max-width: 519px) {
          font-size: 14px;
        }
      }

      #total {
        cursor: default;
        font-size: 16px;
        font-weight: 600;
        color: white;

        @media (max-width: 519px) {
          font-size: 14px;
        }
      }
    }
  }
`
