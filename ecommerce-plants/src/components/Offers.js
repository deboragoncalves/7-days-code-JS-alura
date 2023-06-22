import arrow from '../assets/arrow.png';
import plantAjuga from '../assets/plant-ajuga.png';
import plantCordyline from '../assets/plant-cordyline.png';
import plantCrassula from '../assets/plant-crassula.png';

import styled from 'styled-components';

const MainContainerOffers = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    width: 100%;
`;

const SmallTitle = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    line-height: 27px;
    color: #202020;
    opacity: 0.5;
    margin-top: 50px;
`;

const BigTittle = styled.span`
    letter-spacing: 0em;
    line-height: 94px;
    text-align: center;
    font-family: 'Elsie Swash Caps', sans-serif;
    font-weight: 900;
    font-size: 82px;
    color: #202020;
    margin-top: 12px;
    width: 283px;
    height: 94px;
`;

const ContainerOffers = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
`;

const SubcontainerOffer = styled.section`
    display: flex;
    width: 380px;
    height: 200px;
    margin-right: 20px;

    img {
        margin-right: 10px;
    }
`;

const ContainerTextsPlant = styled.section`
    display: flex;
    flex-direction: column;
`;

const TitlePlant = styled.span`
    font-family: 'Elsie Swash Caps', sans-serif;
    font-size: 32px;
    font-weight: 900;
    line-height: 37px;
    letter-spacing: 0em;
    color: #202020;
    width: 121px;
    height: 74px;
`;

const PricePlant = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0em;
    color: #202020;
    width: 73px;
    height: 20px;
    margin-top: 20px;
`;

const CointanerButton = styled.div`
    display: flex;

    img {
        width: 14px;
        height: 7.89px;
        border: 2px;
        margin-top: 25px;
        margin-left: 10px;
        cursor: pointer;
    }

    button {
        cursor: pointer;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0em;
        color: #FFCB47;
        width: 73px;
        height: 20px;
        border: none;
        background: none;
        margin: 20px 0 0 0;
        padding: 0;    
    }
`;

function Offers() {
    return (
        <MainContainerOffers>
            <SmallTitle>Conheça nossas</SmallTitle>
            <BigTittle>ofertas</BigTittle>
            <ContainerOffers>
                <SubcontainerOffer>
                    <img src={plantAjuga} alt="Planta Ajuda Reptans"></img>
                    <ContainerTextsPlant>
                        <TitlePlant>Ajuga Reptans</TitlePlant>
                        <PricePlant>R$ 20,00</PricePlant>
                        <CointanerButton>
                            <button>Comprar</button>
                            <img src={arrow} alt="Seta"></img>
                        </CointanerButton>
                    </ContainerTextsPlant>
                </SubcontainerOffer>
                <SubcontainerOffer>
                    <img src={plantCordyline} alt="Planta Cordyline fruticosa"></img>
                    <ContainerTextsPlant>
                        <TitlePlant>Cordyline fruticosa</TitlePlant>
                        <PricePlant>R$ 20,00</PricePlant>
                        <CointanerButton>
                            <button>Comprar</button>
                            <img src={arrow} alt="Seta"></img>
                        </CointanerButton>
                    </ContainerTextsPlant>
                </SubcontainerOffer>
                <SubcontainerOffer>
                    <img src={plantCrassula} alt="Planta Crassula ovata"></img>
                    <ContainerTextsPlant>
                        <TitlePlant>Crassula ovata</TitlePlant>
                        <PricePlant>R$ 20,00</PricePlant>
                        <CointanerButton>
                            <button>Comprar</button>
                            <img src={arrow} alt="Seta"></img>
                        </CointanerButton>
                    </ContainerTextsPlant>
                </SubcontainerOffer>
            </ContainerOffers>
        </MainContainerOffers>
    )
}

export default Offers;