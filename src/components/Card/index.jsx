export const Card = ({ img, title, price }) => {
    return (
        <section className="bg-pink-400 p-4 flex flex-col items-center justify-center rounded-2xl">
            <figure className="mb-2">
                <img src={img} alt={title} />
            </figure>

            <article className="space-y-1">
                <h4 className="text-2xl font-semibold">{title}</h4>
                <p className="text-lg font-black">{price}</p>
            </article>
        </section>
    )
}