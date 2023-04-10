import styled from 'styled-components'
import { IHomeStyleProps } from '../../interfaces'

export const HomeStyle = styled.main<IHomeStyleProps>`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  min-height: 100vh;
  max-width: 1400px;
  height: 100%;
  width: 100%;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 10px;

  @media (max-width: 599px) {
    flex-direction: column;
  }
  
  aside {
    display: flex;
    margin-right: 15px;
    height: 100%;
    
    @media (max-width: 599px) {
      flex-direction: column;
      width: 100%;
      margin: 0;
      height: 290px;
    }

    @media (max-width: 439px) {
      height: 500px;
    }
  }

  .container-home {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;

    .container-header {
      display: flex;
      flex-direction: column;
      width: 100%;

      .filterResult-styleCards {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        font-size: 15px;
        font-weight: 600;

        .styleCards {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 200px;
          height: 100%;

          @media (max-width: 1309px) {
            display: none;
          }

          #legend-styleCards {
            cursor: default;
          }

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            padding: 0;
            margin: 0;
            border: none;
            background: none;
            cursor: pointer;

            &:hover {
              svg {
                transition: 0.1s;
                transform: scale(1.05);
              }
            }

            &:active {
              svg {
                color: darkgray;
              }
            }

            svg {
              font-size: 36px;
              color: black;
            }
          }
        }
      }
    }

    .list-products {
      display: flex;
      flex-direction: ${(props) => props.flex_direction};
      flex-wrap: ${(props) => props.flex_wrap};
      height: ${(props) => props.height};
      max-width: 1000px;
      width: 100%;
      padding: 5px;
      gap: 10px;
      overflow-y: auto;
      overflow-x: hidden;

      @media (max-width: 1309px) {
        flex-wrap: wrap;
        flex-direction: row;
      }

      @media (max-width: 910px) {
        justify-content: center;
      }


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
`
