import { useState, useEffect } from 'react';
import arrow from '../assets/arrow.png';
import plantAjuga from '../assets/plant-ajuga.png';
import plantCordyline from '../assets/plant-cordyline.png';
import plantCrassula from '../assets/plant-crassula.png';
import axios from 'axios';

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

const ContainerFilters = styled.section`
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    width: 50%;

    button {
        cursor: pointer;
        width: 194px;
        height: 45px;
        border: none;
        background: #FFCB47;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        line-height: 20px;
    }
`;

function Offers() {
    const [listOffers, setListOffers] = useState([]);
    const URL_GITHUB = "https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw";

    const getListOffers = () => {
        axios.get(URL_GITHUB)
        .then(response => setListOffers(response.data))
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getListOffers();
    }, []);

    const sortListByName = () => {
        let listOrderName = [...listOffers];
        listOrderName.sort((a, b) => (a.name > b.name) ? 1 : -1);
        setListOffers(listOrderName);
        console.log("Lista nome:");
        console.log(listOffers);
    }
    
    const sortListByPrice = () => {
        let listOrderPrice = [...listOffers];
        listOrderPrice.sort((a, b) => (a.preco > b.preco) ? 1 : -1);
        setListOffers(listOrderPrice);
        console.log("Lista preço:");
        console.log(listOffers);
    }

    return (
        <MainContainerOffers>
            <SmallTitle>Conheça nossas</SmallTitle>
            <BigTittle>ofertas</BigTittle>
            <ContainerOffers>
                {listOffers.length > 0 && listOffers.map((offer, index) => {
                    // se nao tiver estoque
                    if (offer.ordem <= 0) return <></>;

                    let pathPlantImage = "";

                    if (offer.name.includes("Reptans")) {
                        pathPlantImage = plantAjuga;
                    } else if (offer.name.includes("Cordyline")) {
                        pathPlantImage = plantCordyline;
                    } else if (offer.name.includes("Crassula")) {
                        pathPlantImage = plantCrassula;
                    }

                    let formatPrice = offer.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

                    return (<SubcontainerOffer key={index}>
                        <img src={pathPlantImage} alt={offer.name}></img>
                        <ContainerTextsPlant>
                            <TitlePlant>{offer.name}</TitlePlant>
                            <PricePlant>{formatPrice}</PricePlant>
                            <CointanerButton>
                                <button>Comprar</button>
                                <img src={arrow} alt="Seta"></img>
                            </CointanerButton>
                        </ContainerTextsPlant>
                    </SubcontainerOffer>)                 
                })}
            </ContainerOffers>
            <ContainerFilters>
                <button onClick={sortListByName}>Ordenar por nome</button>
                <button onClick={sortListByPrice}>Ordenar por preço</button>
            </ContainerFilters>
        </MainContainerOffers>
    )
}

export default Offers;