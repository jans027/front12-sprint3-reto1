import styled from "styled-components";

export const Textos1 = styled.div`
        line-height: 1.5em;
        text-align: center;
        width: 100%;
        height: max-content;
        margin: auto;
        position: fixed;
        bottom: 7em;
        h1{
                font-family: var(--font-2);
                font-weight:600;
                font-size: 2em;
                line-height: 1.5em;
        }
        p{
                font-family: var(--font-2);
                font-weight:200;
                font-size: 1.2em;
        }
`

export const Section = styled.div`
        display: flex;
        flex-direction:column;
        justify-content: center;
        height:100fr;
        max-height: 100vh;
        width: 100%;
        margin:auto;
        
`

export  const DivCard = styled.div`
        width: 100%;
        /* margin:auto; */
        overflow: hidden;
        img{
                display: inline-block;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center center;
        }
`;
export  const DivCard2 = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
        img{
                height: 100%;
                object-fit: cover;
                object-position: center center;
        }
`



export const Enlace1 = styled.span`
        width: 100%;
        margin: auto;
        max-width: 600px;
        text-align: center;
        margin-bottom: 1.5em;
        position: fixed;
        bottom: 1.5em;
        left: 0; 
        right: 0;
        a{
                text-decoration: none;
                color: black;
                background-color: var(--second-color);
                padding: 1em 40%;
                border-radius:1.5em;
        }
`

export const DivPadre = styled.div`
        display: flex;
        height: 100vh;
        padding: 5em;
        flex-direction: column;
        justify-content: center;
        background-color: var(--main-bg-color);
        span{
                text-align: center;
                font-size: 2em;
                font-family:var(--font-1);
        }

`
export const LinearBarStyled = styled.div`
                width: 90%;
                padding-top: 20vh;
                max-width: 400px;
                margin: 0 auto;
`

export const DivPortada = styled.div`
                
                display: flex;
                justify-content: center;
`

export const DivLogos = styled.div`
                display: flex;
                justify-content: center;
                div{
                        width: 10em;
                }
`

export const Navigation = styled.nav`
        height: 80px;
        width: 100%;
        position: fixed;
        top: 0;
        display: flex;
        /* flex-wrap: wrap; */
        align-items: center;
        justify-content: space-between;
        padding: 0 1.4em;
        font-size: 1.2em;
        & > div{
                width: 6em;
                display: flex;
                justify-content: space-between;
        }

`
export const Seccion1 = styled.section`
                /* border: 1px solid white; */
                display: flex;
                flex-direction: column;
                /* width: 100%; */
                max-height: 100vh;
                background-color: var(--main-bg-color);
`