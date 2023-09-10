import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryList from "./components/Words/Categories.jsx";
import DialogsList from "./components/Dialogs/DialogsList";
import ChatRoom from "./components/Dialogs/Chat";
import Words from "./components/Words/Words.jsx";
import DialogsListFinished from "./components/Dialogs/DialogsListFinished";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        if (localStorage.getItem("level") === null) {
          localStorage.setItem("level", 1);
        }
        if (localStorage.getItem("progress") === null) {
          localStorage.setItem("progress", 0);
        }
        if (localStorage.getItem("maxProgress") === null) {
          localStorage.setItem("maxProgress", 100);
        }
    }, []);

    return (
        <Router>
            <div className="mx-auto max-w-screen-md">
                <Navbar />
                <Routes>
                    <Route path="/" exact Component={Home} />
                    <Route path="/dialogs" Component={DialogsList} />
                    <Route
                        path="/dialogs-end"
                        Component={DialogsListFinished}
                    />
                    <Route path="/chat/:id" Component={ChatRoom} />
                    <Route path="/create" Component={Create} />
                    <Route path="/word" Component={CategoryList} />
                    <Route path="/word/:categoryId" Component={Words} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
