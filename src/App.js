import ContactContextProvider from './contexts/ContactContext';
import Routes from './Routes';
import './App.css'
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>CONTACT BOOK+</h1>
        <ContactContextProvider>
          <Routes />
        </ContactContextProvider>
      </div>
    </div>
  );
}

export default App;
