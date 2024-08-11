function Body() {
  return (
    <body className="body">
      <section className="main__container">
        <article className="article">
          <h2 className="article__title">Sobre mi</h2>
          <p className="article__text">
            Soy Reyes Jerez, diseñadora gráfica y nueva Front End.
          </p>
        </article>
        <article className="article">
          <h2 className="article__title">Por qué Adopta un Junior</h2>
          <p className="article__text">
            Estas son las razones por las que quiero participar en los grupos de
            trabajo:
            <div className="cards">
              <div className="card">
                <h3 className="card__title">Seguir aprendiendo</h3>
                <p className="card__text">
                  Tras estudiar el bootcamp, te quedas desamparado.
                </p>
              </div>
            </div>
          </p>
        </article>
      </section>

      <section className="main__container">
        <article className="article">
          <h2 className="article__title">Más cosas sobre mi página</h2>
          <p className="article__text">He usado React para repasar.</p>
        </article>
      </section>
    </body>
  );
}

export default Body;
