import { Header } from "../../components/Header"

export const Contact = () => {
    return (
        <main className="min-h-dvh grid place-items-center bg-pink-200">
        <Header />
        
        <article className=" ">
           <img src="./fotomichelle.png" alt="Foto contato" /> 

          <p className= "text-slate-800 text-center text-lg" >
                 Michelle Silva
                (16)99999-9999
                </p>


        </article>
        </main>
    );
}