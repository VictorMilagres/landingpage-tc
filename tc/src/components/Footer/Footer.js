import React from 'react'
import {Container, Content1, Content2} from './style'
import logotc from '../../assets/logotc.png'
import redesocial from '../../assets/RedeSocial2.png'

const Footer = () => {
    return (
        <Container>
            <Content1>
                <img src={logotc}/>
                <h3>
                    <i>Disclaimer: Lucros passados não são garantia de retornos futuros. Invista com responsabilidade.
                    Para minimizar os riscos, opte por uma carteira diversificada. O mercado de criptomoedas é volátil,
                    não recomendamos que você coloque todo seu dinheiro em um único ativo.</i>
                </h3>
            </Content1>
            <Content2> 
                <h3>© TradersClub 2021 | Todos os direitos Reservados</h3>
                <img src={redesocial}/>
            </Content2>
        </Container>
    )
}

export default Footer;