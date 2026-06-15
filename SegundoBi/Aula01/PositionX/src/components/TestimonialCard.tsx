import Star from "../assets/icn bx-star.svg";
import StarOuter from "../assets/icn bxs-star.svg";

interface Props {
    name: string;
    role: string;
    text: string;
    image: string;
    stars: number;
}

export default function TestimonialCard({ name, role, text, image, stars }: Props) {
    return (
        <div className="carousel-card">
            <img src={image} alt={`Imagem perfil ${name}`} />
            <span className="testimony">
                <p>{text}</p>
            </span>
            <span className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                    i < stars
                        ? <img key={i} src={StarOuter} alt="ícone estrela" width={22} height={20} />
                        : <img key={i} src={Star} alt="ícone estrela sem fundo" width={20} height={22} />
                ))}
            </span>
            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    )
}