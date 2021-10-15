import React from 'react'

import {Container, Content1, Content2, ContentInput, Form, Live, DivImg, Mascara2} from './style'
import elipse from '../../assets/Elipse.png'
import mascara2 from '../../assets/mascara2.png'
const Main = () => {
    return (
        <Container>
            <Content1>
                <Live>
                    <h2>LIVE EXCLUSIVA</h2>
                <DivImg>
                    <img src={elipse}/>
                </DivImg>
                </Live>
                    <h3>dia 25 de outubro, às 19h</h3>
                    <h4>(horário de Brasília)</h4>
                    <Mascara2 src={mascara2}/>
            </Content1>
            <Content2>
                <ContentInput>
                    <h2>
                        Cadastre-se agora para participar da Live<br/> para você reservar sua transferência:
                    </h2>
                <Form>
                    <input type="text" placeholder="Nome:"/>
                    <input type="email" placeholder='E-mail:'/>
                    <input type="tel" placeholder='Celular:'/>
                    <button>QUERO PARTICIPAR</button>
                </Form>
                </ContentInput>
                
            </Content2>
        </Container>
    )
}

export default Main;