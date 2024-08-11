import Card from "./card";

function Body({ reasonsData }) {
  const reasonHTML = reasonsData.map((reason) => {
    return <Card title={reason.title} text={reason.text}></Card>;
  });
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
            <ul className="cards">{reasonHTML}</ul>
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
