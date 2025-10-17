import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="flex flex-col lg:flex-row lg:items-center space-x-20 space-y-4 p-8">
            <img src="./logocupcake.png" alt="Logo" className="w-full lg:max-w-3xs" />

            <ul className="flex flex-col lg:flex-row font-extrabold text-3xl space-y-4  space-x-8">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Produto</Link></li>
                <li><Link to="/">Contato</Link></li>
            </ul>
        </header>
    )
}