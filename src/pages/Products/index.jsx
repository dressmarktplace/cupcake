import { Header } from "../../components/Header";

export const Products = () => {
    return (
        <main className="bg-pink-200 min-h-screen">
            <Header />

         <article className="px-4 mx-auto flex inline-grid grid-cols-3 items-center py-15 px-60">

                <img src="./foto1.png" alt="Foto 1" className="lg:max-w-3xs mb-10" />
                <img src="./foto2.png" alt="Foto 2" className="lg:max-w-3xs mb-10" />
                <img src="./foto3.png" alt="Foto 3" className="lg:max-w-3xs mb-10" />
                <img src="./foto4.png" alt="Foto 4" className="lg:max-w-3xs mb-10" />
                <img src="./foto5.png" alt="Foto 5" className="lg:max-w-3xs mb-10" />
                <img src="./foto6.png" alt="Foto 6" className="lg:max-w-3xs mb-10" />

                <p className="text-slate-800 text-center">
                      Baunilha
                  15,00
                 Baunilha com cereja
                  19,00
                  Morango
                  15,00
                 Chocolate com morango
                   15,00
                  Chocolate
                   15,00
                 Doce de leite com Chocolate
                   15,00
                </p>
            </article>
        </main>
    );
}