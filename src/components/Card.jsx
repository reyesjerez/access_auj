function Card({ title, text }) {
  return (
    <li className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </li>
  );
}

export default Card;
