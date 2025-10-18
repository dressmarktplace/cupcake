import { useState } from "react";
import { Header } from "../../components/Header"

export const Contact = () => {

    const [name, setName] = useState("")
    const [suggest, setSuggest] = useState("")

    const handleSubmit = event => {
        event.preventDefault()

        console.log({ name, suggest })
        setName("")
        setSuggest("")

    }
    return (
        <main className="min-h-dvh grid place-items-center bg-pink-200">
            <Header />

            <article className=" ">
                <img src="./fotomichelle.png" alt="Foto contato" />

                <p className="text-slate-800 text-center text-lg" >
                    Michelle Silva
                    (16)99999-9999
                </p>

                <form onSubmit={handleSubmit}>
                    <fieldset className="flex flex-col space-y mb-2">
                        <label htmlFor="name" className="font-medium">
                            Digite seu nome
                        </label>

                        <input
                            id="name"
                            name="name"
                            placeholder="Nome completo"
                            className="py-2 px-4 border rounded-2xl w-full"
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                    </fieldset>

                    <fieldset className="flex flex-col space-y mb-2">
                        <label htmlFor="suggest" className="font-medium">
                            Digite sua sugestão
                        </label>

                        <input
                            id="suggest"
                            name="suggest"
                            placeholder="Sugestão"
                            className="py-2 px-4 border rounded-2xl w-full"
                            value={suggest}
                            onChange={event => setSuggest(event.target.value)}
                        />
                    </fieldset>
                    <button
                        type="submit"
                        className="inline-block px-4 py-2 rounded-lg border houver:bg-slate-300 transition-all focus:ring-2 focus:ring-blue-500">
                        Enviar
                    </button>
                </form>
            </article>
        </main>
    );
}