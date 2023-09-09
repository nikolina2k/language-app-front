import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategoryList from "./components/Words/Categories.jsx";
import DialogsList from "./components/Dialogs/DialogsList";
import Chat from "./components/Dialogs/Chat";

function App() {
  return (
    <Router>
      <div className="mx-auto max-w-screen-lg">
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/dialogs" Component={DialogsList} />
          <Route path="/chat/:id" Component={Chat} />
          <Route path="/create" Component={Create} />
          <Route path="/word" Component={CategoryList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
