import Logo from '../assets/logo.svg';
import "../styles/header.css";
import "../styles/utility.css";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
import Button from '../components/Button.tsx';
import { useState, useEffect } from 'react';
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Champion from "../assets/champion.svg";
import "../styles/hero.css";
import "../styles/solution.css";
import ProfileImageOne from "../assets/ElonMusk.svg";
import ProfileImageTwo from "../assets/Ryan.svg";
import TestimonialCard from '../components/TestimonialCard.tsx';
import Check from "../assets/check.svg";
import { IconBrandInstagram, IconBrandFacebook, IconBrandYoutube } from '@tabler/icons-react';

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");

        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="PositionX" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a onClick={() => setShowMobileMenu(false)} href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)} href="#testimonials">
                                    Depoimentos
                                </a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)} href="#pricing">
                                    Preços
                                </a>
                            </li>
                            <li>
                                <a onClick={() => setShowMobileMenu(false)} href="#contact">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <li>
                                        <a onClick={() => setShowMobileMenu(false)} className="reverse-color" href="#">Login</a>
                                    </li>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Comida de mãe direto no seu apê, é só pedir que entregamos para você!</h1>
                    <p>Já pensou em matar a saudade daquela comida caseira? O melhor de tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Sob medida para você
                            </h2>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>PositionX </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>

                <div className="even-columns">
                    <div className="card">
                        <span>
                            <img src={Champion} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Produto Vencedor</h3>
                            <p>
                                Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Champion} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Produto Vencedor</h3>
                            <p>
                                Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Champion} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>Produto Vencedor</h3>
                            <p>
                                Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard
                            name="Ellon Ma"
                            role="CEO BING CHILLING"
                            text="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
                            image={ProfileImageOne}
                            stars={4}
                        />
                        <TestimonialCard
                            name="Ryan Gosling"
                            role="Agronomo"
                            text="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
                            image={ProfileImageTwo}
                            stars={4}
                        />
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma prova das comidas PositionX.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Retire na loja</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Apenas 1 por CPF</p>
                        </span>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Entregas</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>5 Refeições por semana</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>2 Sucos por semana</p>
                        </span>
                    </div>
                </section>
            </section>

            <section id="contact" className="container">
                <header>
                    <p className="desktop-only">Estamos aqui disponíveis</p>
                    <h2>Entre em contato</h2>
                </header>
                <p>
                    Entre em contato, estamos dispostos a tirar qualquer dúvida,
                    seja ela simplesmente uma dúvida técnica ou algum de nossos produtos.
                    Estamos à disposição para responder.
                </p>
                <form className="contact-form">
                    <input type="email" placeholder="Seu melhor Email" />
                    <textarea placeholder="Mensagem de contato. Eu darei a melhor resposta que eu puder dar em breve!" />
                    <Button text="Enviar" />
                </form>
            </section>

            <footer className="container">
                <div className="footer-brand">
                    <img src={Logo} alt="LogoMarca" width={160} height={60} />
                    <div className="footer-socials">
                        <a href="#"><IconBrandInstagram size={24} /></a>
                        <a href="#"><IconBrandFacebook size={24} /></a>
                        <a href="#"><IconBrandYoutube size={24} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Faça parte do time</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Funcionalidades</h4>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Análise de dados</a></li>
                            <li><a href="#">Boot discord</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Recursos</h4>
                        <ul>
                            <li><a href="#">Intro Android</a></li>
                            <li><a href="#">Torne a Ganhar</a></li>
                            <li><a href="#">Clientes</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Feito com amor na aula de Programação Web🤍 ©2024 NeblasTech - Todos os direitos reservados.</p>
                </div>
            </footer>

        </>
    )
}