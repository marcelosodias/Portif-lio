function Home() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
        {/* Menu de navegação */}
        <nav>
            <ul>
                <li><button onClick={() => scrollToSection("header")}>Home</button></li>
                <li><button onClick={() => scrollToSection("container")}>Projetos</button></li>
                <li><button onClick={() => scrollToSection("about")}>Sobre mim</button></li>
                <li><button onClick={() => scrollToSection("contact")}>Contato</button></li>
            </ul>
        </nav>

        <header id ="header">
            <div className="text">
                <h1>Portifolio</h1>
                <p>Seja bem vindo ao meu portifolio</p>
                <p>Em breve</p>
            </div>
        </header>

        <section id="container">
            <h2>Projetos</h2>
            <p>Em breve</p>
        </section>

        <section id="about">
            <h2>Sobre mim</h2>
            <p>Em breve</p>
        </section>

        <section id="contact">
            <h2>Contato</h2>
            <p>Em breve</p>
        </section>
        </>
    );
}

export default Home;