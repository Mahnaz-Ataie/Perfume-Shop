export default function Front({ perfumes }) {
  return (
    <div className="front" id="perf">
      <img src={perfumes.image} alt={perfumes.title} />
      <h2>{perfumes.title}</h2>
      <button>${perfumes.price}</button>
      <br />
      <br />
    </div>
  );
}
