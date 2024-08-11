function ExtraCard({ title, text }) {
  return (
    <li className="card card__extra">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
    </li>
  );
}

export default ExtraCard;
