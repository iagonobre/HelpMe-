import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(45deg, #896DB4, #B478FF);
  width: 500px;
  height: 600px;
  align-items: center;
  position: fixed;
  top: 0; 
  bottom: 0;
  left: 0; 
  right: 0;
  margin: auto;
  border-radius: 10px;
  opacity: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media only screen and (max-width : 968px){
    width: 300px;
    height: 500px;
  }
  /* iphone 5 */
  @media only screen and (max-height: 568px){
    width: 300px;
    height: 400px;
  }
`

export const Topborder = styled.div`
  background-color: #B478FF;
  height: 60px;
  width: 500px;
  display: flex;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 900;

  img {
    height: 50px;
    margin: auto;
    z-index: 1000;
  }

  svg {
    color: white;
    width: 25px;
    height: 25px;
    position: fixed;
    margin-top: 20px;
    margin-left: 7px;
  }

  p {
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
    color: white;
    position: fixed;
    font-size: 20px;
    margin-top: 20px;
    margin-left: 30px;
  }

  @media only screen and (max-width : 968px){
    width: 300px;
    height: 45px;
    img{ 
      height: 40px;
    }
    svg {
      width: 20px;
      height: 20px;
      margin-top: 12px;
      margin-left: 4px;
    }
    p {
      font-size: 9;
      margin-top: 10px;
      margin-left: 22px;
    }
  }
  /* iphone 5 */
  @media only screen and (max-height: 568px){
    width: 300px;
    height: 40px;
    img {
      height: 30px;
    }
    svg {
      width: 20px;
      height: 20px;
      margin-top: 10px;
      margin-left: 4px;
    }
    p {
      font-size: 9;
      margin-top: 8px;
      margin-left: 25px;
    }
  }
`

export const Text = styled.p`
  color: white;
  margin: 0 auto;
  margin-top: 20px;
  font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
  font-size: 25px;
  font-weight: bold;

  @media only screen and (max-width : 968px){
    font-size: 25px;
  }
  /* iphone 5 */
  @media only screen and (max-height: 568px){
    font-size: 15px;
  }
`

export const Botoes = styled.div`
  margin: 0 auto;
  margin-top: 15px;
  width: 450px;
  height: 400px;

  button {
    height: 50px;
    color: white;
    width: 410px;
    margin: 6px;
    border-radius: 8px;
    border: 0px;
    background: linear-gradient(45deg, #A25BFF, #B478FF);
    font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
    font-size: 25px;
    font-weight: bolder;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  button:hover  {
    transition: 0.5s;
    background: #A25BFF;
    border: 4px solid white;
  }

  @media only screen and (max-width : 968px){
    margin-top: 15px;
    width: 300px;
    height: 300px;

    button {
      height: 38px;
      width: 260px;
      margin: 3px;
      font-size: 16px;
    }
    svg {
      width: 10px;
      height: 10px;
      color: white;
    }
  }
  /* iphone 5 */
  @media only screen and (max-height: 568px){
    margin-top: 15px;
    width: 300px;
    height: 300px;

    button {
      height: 35px;
      width: 248px;
      margin: 3px;
    }
  }
`
