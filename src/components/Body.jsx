import Card from "./card";
import ExtraCard from "./ExtraCard";

function Body({ reasonsData, extraData }) {
  const reasonHTML = reasonsData.map((reason) => {
    return <Card title={reason.title} text={reason.text}></Card>;
  });
  const extraHTML = extraData.map((extra) => {
    return <ExtraCard title={extra.title} text={extra.text}></ExtraCard>;
  });
  return (
    <body className="body">
      <section className="main__container">
        <article className="article">
          <h2 className="article__title">Sobre mí</h2>
          <p className="article__text">
            Mi nombre es <b>Reyes Jerez</b>, tengo 31 años y hace uno que decidí
            adentrarme más profundamente en el <b>mundo tech</b>.
          </p>
          <p className="article__text">
            Soy <b>diseñadora gráfica</b> desde hace 8 años, por lo que no vengo
            de tan lejos, sin embargo llevaba tiempo sintiendo que estaba
            estancada profesionalmente. Por esta razón decidí estudiar un
            bootcamp en <b>Programación Web FullStack</b>.
          </p>
          <p className="article__text">
            Siempre me ha gustado estudiar y aprender, por lo que es algo que
            hago feliz y entusiasmada, de hecho dedico unas{" "}
            <b>3-4 horas diarias a estudiar</b> sobre distintos temas.
          </p>
          <p className="article__text">
            Todo con el objetivo de crear una unión fuerte entre mi perfil de
            <b>diseño</b> gráfico y desarrollo Frontend, pasando también por el{" "}
            <b>diseño UX/UI</b>.
          </p>
          <p className="article__text">
            Pero a parte de todo esto, te cuento que soy una tía{" "}
            <b>divertida</b>,<b>creativa</b> por excelencia, igual te pinto un
            cuadro que te hago la reforma de la casa. Suelo conseguir lo que me
            propongo, y además hago del camino lo más <b>divertido</b> posible.
          </p>
          <p className="article__text">
            Vaya, un <b>culo inquieto y parlanchín</b>.
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
          <h2 className="article__title">Más sobre mi web</h2>
          <ul className="cards">{extraHTML}</ul>
        </article>
      </section>
    </body>
  );
}

export default Body;
