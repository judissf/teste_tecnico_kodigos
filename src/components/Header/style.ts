import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  width: 100%;
  height: 80px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #006cd0;
  z-index: 1;

  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;

    h1 {
      font-size: 25px;
      color: white;
      font-weight: 900;
      cursor: default;

      @media (max-width: 405px) {
        font-size: 20px;
      }
    }

    .user-cart {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 220px;
      width: 100%;

      @media (max-width: 599px) {
        max-width: 180px;
      }

      @media (max-width: 405px) {
        max-width: 150px;
      }


      .user {
        display: flex;
        align-items: center;
        max-width: 150px;
        width: 100%;
        color: white;
        font-weight: 500;
        cursor: default;

        .user-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: white;
          margin-right: 10px;

          @media (max-width: 405px) {
            width: 36px;
            height: 36px;
          }

          svg {
            color: black;
            font-size: 32px;

            @media (max-width: 405px) {
              font-size: 26px;
            }
          }
        }
      }

      .cart {
        position: relative;
        width: 40px;
        height: 40px;

        @media (max-width: 405px) {
          width: 35px;
          height: 35px;
        }

        .newItem {
          position: absolute;
          top: 3px;
          right: 0;
          width: 10px;
          height: 10px;
          background-color: red;
          border-radius: 50%;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          z-index: 2;
          cursor: pointer;

          @media (max-width: 405px) {
            width: 35px;
            height: 35px;
          }

          svg {
            color: white;
            font-size: 38px;

            @media (max-width: 405px) {
              font-size: 30px;
            }
          }
        }
      }
    }
  }
`
