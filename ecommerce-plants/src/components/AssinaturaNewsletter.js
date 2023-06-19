import imagePlant from '../assets/image-plant.png';
import backgroundYellow from '../assets/image-yellow.png';
import styled from 'styled-components';
import { useState } from 'react';

const MainContainer = styled.main`
    display: flex;
`;

const TextNewsletterContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 585px;
    height: 462px;
`;

const TextPlants = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    line-height: 27px;
    color: #202020;
    opacity: 0.5;
`;

const TextBestPlants = styled.span`
    width: 375px;
    text-align: center;
    font-family: 'Elsie Swash Caps', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    color: #202020;
    margin-top: 12px;
`;

const BiggerTextPlants = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    line-height: 27px;
    color: #202020;
    opacity: 0.5;
    width: 381px;
    height: 99px;
    margin-top: 24px;
    font-size: 16px;
`;

const ContainerEmail = styled.section`
    display: flex;
    justify-content: center;

    input {
        height: 70px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        line-height: 20px;
        color: #202020;
        padding-left: 35px;
        opacity: 0.3;
    }

    button {
        cursor: pointer;
        width: 194px;
        height: 75px;
        border: none;
        background: #FFCB47;
        color: #fff;
        font-family: 'Montserrat';
        font-size: 16px;
        line-height: 20px;
    }
`;

const MensagemErro = styled.span`
    margin-left: 75px;
    color: red;
    font-family: 'Montserrat';
    margin-top: 15px;
    display: flex;
`;

const ContainerPlantNewsletter = styled.section`
    background: url(${backgroundYellow});
    background-repeat: no-repeat;

    img {
        width: 787px;
        height: 750px;
    }
`;

function AssinaturaNewsletter() {
    const [email, setEmail] = useState();
    const [errors, setErrors] = useState({
        email: ""
    });

    const validate = (emailValue) => {
        if (!emailValue || !emailValue.includes("@")) {
            setErrors({
                email: "Por favor, digite um email válido"
            });
        } else {
            setErrors({
                email: ""
            });
            
            let mensagemEmailValido = `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`;
            alert(mensagemEmailValido);
        }
    }

    return (
        <MainContainer>
            <section>
                <TextNewsletterContainer>
                    <TextPlants>Sua casa com as</TextPlants>
                    <TextBestPlants>melhores plantas</TextBestPlants>
                    <BiggerTextPlants>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</BiggerTextPlants>
                </TextNewsletterContainer>
                <ContainerEmail>
                    <input onChange={e => setEmail(e.target.value)} value={email} id="email" name="email" type="email" placeholder="Insira seu email" />
                    <button onClick={event => {
                        event.preventDefault();
                        validate(email);
                        }
                    } type="submit">Assinar newsletter</button>
                </ContainerEmail>
                {errors.email && <MensagemErro>{errors.email}</MensagemErro>}
            </section>
            <ContainerPlantNewsletter>
                <img alt="Planta" src={imagePlant}></img>
            </ContainerPlantNewsletter>
        </MainContainer>
    )
}

export default AssinaturaNewsletter;