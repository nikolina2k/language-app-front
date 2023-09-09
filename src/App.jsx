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
import { ProgressContext } from "./components/context";
import { useState } from "react";

function App() {
  const [level, setLevel] = useState(8);
  const [progress, setProgress] = useState(35);
  const [maxProgress, setMaxProgress] = useState(100);


    return (
        <ProgressContext.Provider
            value={{
                level,
                setLevel,
                progress,
                setProgress,
                maxProgress,
                setMaxProgress
            }}
        >
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
        </ProgressContext.Provider>
    );
}

export default App;
