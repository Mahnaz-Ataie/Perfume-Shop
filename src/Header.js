export default function Header(props) {
  return (
    <div>
      <nav>
        <div>
          <span>Perfumes</span>
        </div>
        <div className="lists">
          <ul>
            <li>
              <a href="#filterInput">Search</a>
            </li>
            <li>
              <a href="#perf">Products</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <header className="header">
          <img src={props.coverImage} alt="Floral perfume" />
          <h1>Fragrance Collection</h1>
          <p>Discover the art of perfumery and find your signature scent</p>
        </header>
      </div>
    </div>
  );
}
