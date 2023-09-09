import { useContext } from "react";
import streakIcon from "../assets/streak_icon.svg";
import ProfileCard from "./Profile/ProfileCard";
import ProgressBar from "./Profile/ProgressBar";
import { ProgressContext } from "./context";

const Home = () => {

    const {level, progress, maxProgress} = useContext(ProgressContext);
    return (
        <div
            className="h-screen py-10 px-8"
            style={{ color: "black" }}
        >
            <div className="flex justify-between">
                <span style={{ fontSize: "52px" }}>Максим Матанцев</span>
                <div
                    className="flex items-center justify-center"
                    style={{ display: "flex" }}
                >
                    <img src={streakIcon} alt="streak icon" />
                    <span style={{ fontSize: "36px" }}>28</span>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <p style={{ fontSize: "36px" }}>Уровень {level}</p>
                <ProgressBar maxValue={maxProgress} currentValue={progress}/>
                <p style={{ fontSize: "18px" }}>
                    {progress}/{maxProgress} XP до следующего уровня
                </p>
            </div>
            <div className="flex flex-col mt-20" style={{gap:'25px'}}>
              <ProfileCard link={"/dialogs-end"} title={'Завершеные диалоги'}/>
              <ProfileCard link={'#'} title={'Созданные диалоги'}/>
              <ProfileCard link={'#'} title={'Выученные слова'}/>
            </div>
        </div>
    );
};

export default Home;
