import imagePlant from '../assets/image-plant.png';


function AssinaturaNewsletter() {
    return (
        <main className="container-newsletter">
            <section>
                <section className="container-text-newsletter">
                    <span className="text-plants">Sua casa com as</span>
                    <span className="text-best-plants">melhores plantas</span>
                    <span className="text-plants bigger-text-plants">Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</span>
                </section>
                <section className="container-email">
                    <input type="email" placeholder="Insira seu email"></input>
                    <button type="button">Assinar newsletter</button>
                </section>
            </section>
            <section className="container-plant-newsletter">
                <img alt="Planta" src={imagePlant}></img>
            </section>
        </main>
    )
}

export default AssinaturaNewsletter;