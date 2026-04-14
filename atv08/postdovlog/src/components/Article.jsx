function Article({ titulo, autor, data, dataFormatada, conteudo, imagem }) {
    return (
    <article className="article">
        <h2>{titulo}</h2>
        <p className="article-autor">Por: {autor}</p>
        <time dateTime={data}>{dataFormatada}</time>

        {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
        ))}

        {imagem && (
        <>
            <figure>
            <img src={imagem.src} alt={imagem.alt} />
            </figure>
            <figcaption>{imagem.caption}</figcaption>
        </>
        )}
    </article>
    )
}

export default Article
