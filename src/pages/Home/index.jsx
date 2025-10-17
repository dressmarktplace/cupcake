import { Header } from "../../components/Header";

export const Home = () => {
    return (
        <main className="bg-pink-200 min-h-screen">
            <Header />

            <article className="lg:max-w-md mx-auto flex flex-col items-center text-center py-12 px-8">
                <img src="./pagina1foto.png" alt="Foto principal do cupcake" className="lg:max-w-3xs mb-10" />

                <p className="text-slate-800 text-lg">
                    Olá, amantes de coisas boas!
                    Você está tendo aquele dia que precisa de um pequeno boost de felicidade? Ou talvez esteja planejando uma reunião especial e quer impressionar sem esforço?
                    Apresentamos a solução perfeita: nossos Cupcakes Artesanais!
                    Cada um é feito com ingredientes de primeira, muito carinho e uma pitada extra de magia. Não são só bolinhos; são momentos em forma de doce.
                    Imagine a massa fofinha, a cobertura cremosa que derrete na boca e o sabor inesquecível que te transporta para um lugar feliz.
                </p>
            </article>
        </main>
    );
}