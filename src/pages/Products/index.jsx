import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

export const Products = () => {
    return (
        <main className="bg-pink-200 min-h-screen">
            <Header />


            <div className="text-center p-4 gap-8 grid md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                <Card img="./foto1.png" title="Baunilha" price="R$ 15,00" />
                <Card img="./foto2.png" title="Baunilha com cereja" price="R$ 19,00" />
                <Card img="./foto3.png" title="Morango" price="R$ 13,00" />
                <Card img="./foto4.png" title="Chocolate com morango" price="R$ 15,00" />
                <Card img="./foto5.png" title="Chocolate" price="R$ 15,00" />
                <Card img="./foto6.png" title="Doce de leite com chocolate" price="R$ 15,00" />

            
            </div>
        </main>
    );
}