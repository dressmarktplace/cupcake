import { Header } from "../../components/Header";

export const Products = () => {
    return (
        <main className="bg-pink-200 min-h-screen">
            <Header />

          
          <article className="text-center p-4 gap-8 grid gride-cols-3 max-w-4xl mx-auto">  
            
               <figure>
                
                    <img src="./foto1.png" alt="Foto 1" className="max-w-4xl mx-auto" />
                     <figcaption className="mt-2 text-center text-sm text-black-800"/>
                        Baunilha
                        15,00                   
                    <img src="./foto2.png" alt="Foto 2" className="max-w-4xl mx-auto" />
                     <figcaption className="mt-2 text-center text-sm text-black-800"/>
                    Baunilha com cereja
                     19,00
                    <img src="./foto3.png" alt="Foto 3" className="max-w-4xl mx-auto" />
                     <figcaption className="mt-2 text-center text-sm text-black-800"/>
                    Morango 
                    15,00
                    <img src="./foto4.png" alt="Foto 4" className="max-w-4xl mx-auto" />
                     <figcaption className="mt-2 text-center text-sm text-black-800"/>
                    Chocolate com morango 
                    20,00
                    <img src="./foto5.png" alt="Foto 5" className="max-w-4xl mx-auto" />
                     <figcaption className="mt-2 text-center text-sm text-black-800"/>
                    Chocolate
                     15,00
                    <img src="./foto6.png" alt="Foto 6" className="max-w-4xl mx-auto" />
                     <figcaption className="mt-2 text-center text-sm text-black-800"/>
                    Doce de leite com Chocolate
                     20,00
                
                </figure>
            </article>
        </main>
    );
}