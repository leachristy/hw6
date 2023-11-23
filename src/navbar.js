export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="#!home">
        Home
      </a>
      <ul>
        <li>
          <a href="/#Game">Game</a>
        </li>
        <li>
          <a href="/#API">Trivia Questions</a>
        </li>
      </ul>
    </nav>
  );
}
