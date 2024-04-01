import logo from './smiley.svg';
import './App.css';

// book array (data structure)
const books = [
  { id: 1, title: 'Things We Never Got Over', read: true},
  { id: 2, title: 'Caraval', read: true},
  { id: 3, title: 'The Kiss Deception', read: false},
  { id: 4, title: 'Shatter Me', read: false},
  { id: 5, title: 'Book Lovers', read: true}
]

// title (component)
function Title() {
  return (
    <p>
    Welcome to my library!
  </p>
  );
}

// inventory key (component)
function Key() {
  return (
    <div>
      <p>Bookshelf Key</p>
      <div className="Key">
        <p className="Read">Read</p>
        <p className="NotRead">Not Read</p>
      </div>
    </div>
  );
}

// inventory display (component) (conditional in here)
function Bookshelf() {
  const listBooks = books.map(book =>
    <li key={book.id}
      style={{
        color: book.read ? '#f28482' : '#f6bd60' 
      }}
    >
      {book.title}
    </li>);

    return (
      <>
        <h3>Bookshelf</h3>
        <ul>{listBooks}</ul>
      </>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <Key />
        <Bookshelf />
      </header>
    </div>
  );
}

export default App;
