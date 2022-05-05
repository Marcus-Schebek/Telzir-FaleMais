import styled from "styled-components";

export const InputSection = styled.section`
  background: #fff;
  height: 24em;
  width: 24em;
  border-radius: 8px;
  margin: 1em 6em 0.8em 2.4em;


    
    @media screen and (max-width: 768px) {
      height: 25em;
      widht: 25em;
      margin: 4.5em 5%;
    }
 
    section{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.9em 0;
        &:first-child{
            padding: 3em 0 1em;
        }

        &:nth-child(3){
            padding: 0.5em 0;
        }
        &:nth-child(4){
            padding: 0.5em 0 1em;
        }

        div{
          justify-content: center;
          align-items: center;
        }
        input{
            width: 72%;
            border-radius: 8px;
            border: 2px solid #e0e0e0;
            outline-color: #00468C;
            box-shadow: 0 1px 3px -2px #9098A9;
                ::placeholder{
                    color: #828282;
                }
                &:first-child{
                    padding: 0.5em;
                }
        
        span{
            margin-right: 4px;
            font-weight: 500;
        }
    }
    select{
    padding: 8px;
    border: 1px solid #E8EAED;
    border-radius: 5px;
    background: white;
    box-shadow: 0 1px 3px -2px #9098A9;
    cursor: pointer;
    font-size: 14px;
    transition: all 150ms ease;
    outline-color: #00468C;

    option{
      color: #223254;
    &:focus{
      outline: none;
      border-color: #00468C;
      box-shadow: 0 0 0 2px rgba(#00468C,.2);
    }
    &:hover {
      stroke: #00468C
        }
    }

    .radioSection{

      margin: 0;
      padding: 0;
        >span{
          font-size: 14px;
          padding: 0 2px;
      }
    }
    
}
@media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0.5em 0;

    h3{
      font-size: 16px;
    }
    
    p{
      font-size: 14px;
      margin: 0 1em;
    }

    span{ 
      font-size: 14px;
      margin: 1em 0.4em;
    }

    select{
      margin: 4px 25% 0;
      width: 72px;
    }

}
}
`;

export const SimulatorSection = styled(InputSection)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 4.5em 2em ;

  transition: all 2s ease 0;
  
  
  h1{
    font-size: 64px;
    font-weight: bold;
    text-align: center;
    margin-right: 16px;
    

    span{
      font-size: 24px;
      font-weight: bold;
      vertical-align: text-top;
      margin-right: 16px;
    }
  }

  .priceWithOutPlan{
    color: #E3262E;
  }
  .priceWithPlan{
    color: #27AE60;
  }
  h2{
        margin: 0 20px;
        color: #00468C;
        font-size: 36px;
        font-weight: bold;
        .h2Red{
          color:#E3262E;
        }
        .h2Yellow{
          color:#F3AE02;
        }
      }
      h3{
        margin-bottom: 20px;
      }

`