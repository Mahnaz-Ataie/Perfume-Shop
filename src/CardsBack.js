export default function Back({ perfumes }) {
  return (
    <div className="back">
      <h2>{perfumes.tittle}</h2>
      <p>{perfumes.description}</p>
      <div className="container">
        <button>Buy</button>
      </div>
    </div>
  );
}
