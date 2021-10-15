import styled from 'styled-components';


export const Container = styled.div `
height: 70vh;
background: #EAEDF8;
display: flex;
justify-content: space-between;
`

export const Content1 = styled.div `
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 9%;

h3{
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
}

h4{
   
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-top: 1%;
}
`
export const Mascara2 = styled.img `
width: 35%;
margin-top: 2.5rem;
`

export const DivImg = styled.div `
top: 0.25rem;
right: 0.75rem;
position: absolute;

img{
    width: 10px;
}
`

export const Live = styled.div `
width: 50%;
border: 2px solid red;
padding: 0.5rem;
border-radius: 1rem;
text-align: center;
margin-bottom: 3%;
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 20px;
position: relative;
`

export const Content2 = styled.div `
width: 50%;

`

export const ContentInput = styled.div `
    
    margin-right: 15%;

h2{
    margin-top: 10%;
    margin-bottom: 6%;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 1.25rem;
    margin-left: 20%;
}

`
export const Form = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

input{
    padding: 1.15rem;
    width: 65%;
    border-radius: 1.5rem;
    border: solid 0.1px #707070;
    margin-bottom: 0.75rem;
}

button{
    width: 65%;
    border-radius: 1.5rem;
    padding: 1rem;
    margin-top: 5%;
    background-color: #33CC99;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1rem;
}
`