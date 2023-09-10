import { useContext } from "react";
import streakIcon from "../assets/streak_icon.svg";
import ProfileCard from "./Profile/ProfileCard";
import ProgressBar from "./Profile/ProgressBar";
import { ProgressContext } from "./context";

const Home = () => {
    const level = localStorage.getItem("level");
    const progress = localStorage.getItem("progress");
    const maxProgress = localStorage.getItem("maxProgress");

    return (
        <div className="h-screen py-10 px-8 text-sm text-black">
            <div className="flex justify-between">
                <span className="text-5xl">Максим Матанцев</span>
                <div
                    className="flex items-center justify-center"
                >
                    <img src={streakIcon} alt="streak icon" />
                    <span className="text-4xl">1</span>
                </div>
            </div>
            <div className="flex flex-col items-start mt-8">
                <p className="text-3xl">Уровень {level}</p>
                <ProgressBar maxValue={maxProgress} currentValue={progress} barHeight="h-1" />
                <p className="text-lg">
                    {progress}/{maxProgress} XP до следующего уровня
                </p>
            </div>
            <div className="flex flex-col mt-10 space-y-6">
                <ProfileCard link={"/dialogs-end"} title={"Завершеные диалоги"} />
                <ProfileCard link={"#"} title={"Созданные диалоги"} />
                <ProfileCard link={"#"} title={"Выученные слова"} />
            </div>
        </div>
    );
};

export default Home;
