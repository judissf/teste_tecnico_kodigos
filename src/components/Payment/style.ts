import styled from 'styled-components'

export const PaymentStyle = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 1;
  max-width: 100vw;
  width: 100%;
  min-height: 110vh;
  background-color: rgba(0, 0, 0, 0.35);

  .container {
    display: flex;
    flex-direction: column;
    /* position: absolute;
    top: 82px; */
    max-width: 1000px;
    width: 100%;
    height: 700px;
    z-index: 2;

    @media (max-width: 840px) {
      height: 1200px;
    }


    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 50px;
      background-color: #004382;
      padding: 5px 15px;
      border-radius: 0 8px 0px 0px;

      h3 {
        color: white;
        font-size: 20px;
        font-weight: 600;
        cursor: default;
      }

      button {
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

        &:hover {
          color: rgba(255, 255, 255, 0.5);

          svg {
            color: rgba(255, 255, 255, 0.5);
            transition: 0.2s;
          }
        }

        svg {
          font-size: 25px;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: white;
      height: 650px;
      width: 100%;
      padding: 30px 15px;
      border-radius: 0 0 8px 8px;
      z-index: 2;

      @media (max-width: 840px) {
        height: 1010px;
        overflow-y: scroll;
      }

      @media (max-width: 560px) {
        height: 1200px;
      }


      .purchase-order-delivery {
        display: flex;
        justify-content: space-between;
        height: 376px;
        width: 100%;

        @media (max-width: 560px) {
          flex-direction: column;
          height: 520px;
        }

        .purchase-order {
          display: flex;
          flex-direction: column;
          max-width: 621px;
          width: 100%;

          @media (max-width: 885px) {
            max-width: 590px;
          }

          @media (max-width: 845px) {
            max-width: 550px;
          }

          @media (max-width: 805px) {
            max-width: 500px;
          }

          @media (max-width: 760px) {
            max-width: 450px;
          }

          @media (max-width: 710px) {
            max-width: 400px;
          }

          @media (max-width: 710px) {
            max-width: 350px;
          }

          @media (max-width: 610px) {
            max-width: 300px;
          }

          @media (max-width: 560px) {
            max-width: 100%;
          }

          #title-purchase {
            font-size: 20px;
            font-weight: 600;
            color: black;
            cursor: default;
          }

          .list-products {
            display: flex;
            align-items: center;
            overflow-y: hidden;
            overflow-x: auto;
            gap: 12px;
            height: 376px;
            padding: 5px;
            height: 100%;
            width: 100%;

            

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

        .delivery-total {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 20px;
          max-width: 300px;
          width: 100%;
          height: 100%;
          margin-left: 15px;

          @media (max-width: 560px) {
            margin-left: 0;
            height: 170px;
          }

          #label-delivery {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: column;
            font-size: 20px;
            font-weight: 600;
            height: 65px;

            #delivery-date {
              max-width: 218px;
              width: 100%;
              height: 32px;
              font-size: 14px;
              font-weight: 600;
              border: 2px solid gray;
              padding-left: 5px;
              cursor: pointer;
              color: gray;
              transition: 0.2s;

              &::placeholder {
                font-size: 14px;
                font-weight: 500;
              }

              &:focus {
                outline: none;
                border-color: #006cd0;
                color: #006cd0;
              }

              &:hover {
                border-color: black;
                color: black;
              }
            }
          }

          .items-total {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 64px;

            @media (max-width: 984px) {
              height: 80px;
            }
            
            @media (max-width: 560px) {
              height: 64px;
            }
            

            #items {
              font-size: 18px;
              font-weight: 600;
              color: black;
              cursor: default;
            }

            #total {
              font-size: 22px;
              font-weight: bold;
              color: #004382;
              cursor: default;
            }
          }
        }
      }

      .payments {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 140px;
        width: 100%;

        @media (max-width: 840px) {
          height: 500px;
        }

        #title-payments {
          font-size: 20px;
          font-weight: 600;
          color: black;
          cursor: default;
        }

        .inputs {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 100px;

          @media (max-width: 840px) {
            flex-direction: column;
            height: 450px;
          }

          label {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 235px;
            height: 100px;
            font-size: 22px;
            font-weight: 800;
            border: 2px solid black;
            border-radius: 0 8px 8px 8px;
            cursor: pointer;
            transition: 0.15s;

            @media (max-width: 984px) {
              width: 200px;
            }

            @media (max-width: 840px) {
              width: 100%;
            }

            svg {
              font-size: 36px;
            }

            input {
              display: none;
            }

            &:hover {
              background-color: #a0ddff;
              border-color: #a0ddff;
              color: white;
            }
          }

          label:has(input:checked) {
            background-color: #004382;
            border-color: #004382;
            color: white;
          }
        }
      }

      #button-buy {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        height: 42px;
        background-color: transparent;
        border: 2px solid #156900;
        border-radius: 8px;
        color: #156900;
        cursor: pointer;
        transition: 0.2s;
        font-size: 16px;
        font-weight: 500;

        svg {
          font-size: 22px;
        }

        &:hover {
          color: white;
          background-color: #156900;
        }
      }
    }
  }
`
