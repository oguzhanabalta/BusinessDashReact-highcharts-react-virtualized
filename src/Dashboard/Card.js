import styled from 'styled-components';
import {medGrey, darkerGray} from "./GlobalStyle";

export const Card=styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${({dark}) => dark ? darkerGray : "white" };  
  box-shadow: 0px 3px 5px ${({dark}) => dark ? 'black' : medGrey };
  box-sizing: border-box;
  ${({height}) => height && `height: ${height}px;`};
  @media (max-width:1200px){
    padding: 10px;
  
}
  
  

`