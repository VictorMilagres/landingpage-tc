import styled from 'styled-components';
import background from '../../assets/base_Criptografia.png'


export const Container = styled.div `
width: 100vw;
height: 140vh;
margin: 0 auto;
background-image: url(${background});
background-position: center;
background-size: cover;
`

export const Content = styled.div `
height: 100vh;
width: 100%;
display: flex;
justify-content: space-between;
`
export const Content1 = styled.div `
width: 50%;
display: flex;
flex-direction: column;
margin-right: 15%;
`
export const Content2= styled.div `
width: 35%;
color: white;
margin-right: 5rem;
margin-top: 5%;

h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    padding: 2%;
}

`

export const Logo = styled.img `
margin-top: 5rem;
margin-left: 8rem;
width: 15rem;
`

export const Cripto = styled.img `
width: 130%;
margin-top: 1.5rem;
`

export const Mascara = styled.img `
width: 35%;
margin-top: 2rem;
margin-left: 50%;
`
export const Linha = styled.img `
margin: 3rem 1rem;
`

export const Nome = styled.h2 `
margin-top: 1rem;
`