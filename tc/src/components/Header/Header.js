import React from 'react'
import { 
    Container, 
    Content , 
    Content1, 
    Content2, 
    Logo, 
    Cripto, 
    Mascara, 
    Linha,
    Nome
    } from './style.js'
import logo from '../../assets/Grupo 5133.png'
import cripto from '../../assets/Criptografia.png'
import mascara from '../../assets/Grupodemascara.png'
import linha from '../../assets/Linha.png'

const Header = () => {
    return (
        <Container>
            <Content>
                <Content1>
                    <Logo src={logo}/>
                    <Cripto src={cripto}/>
                    <Mascara src={mascara}/>
                </Content1>
                <Content2>
                    <h2>
                        Se você tivesse investido <b>R$ 100</b> em Bitcoin em Janeiro de 2019, 
                        você teria hoje <b>R$ 1.610.</b>
                    </h2>
                    <br/>
                    <h2>
                        Se você investido <b>R$ 100</b>  em Solana em Agosto de 2021, você teria hoje <b>R$ 600.</b>
                    </h2>
                        <Linha src={linha}/>
                    <h2>
                        Agora nós temos uma nova aposta, que pode trazer lucros tão grandes quanto esses.
                    </h2>
                        <br/>
                    <h2>
                            E nós vamos te dar R$ 100, em uma conta no seu nome no Mercado Bitcoin, 
                            para você começar a investir hoje mesmo nessa que pode ser a nossa grande aposta das criptomoedas.
                    </h2>
                    <br/>
                    <Nome>Paulo Boghosian</Nome>
                </Content2>
            </Content>
        </Container>
    )
}

export default Header;