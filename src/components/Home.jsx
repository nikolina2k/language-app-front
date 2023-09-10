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
    <div className="h-3xl flex flex-col items-center justify-center bg-gray-100 p-8 mt-10">
      <div className="text-4xl font-bold mb-6">Максим Матанцев</div>
      <div className="flex items-center space-x-2 mb-8">
        <img src={streakIcon} alt="streak icon" className="w-8 h-8" />
        <span className="text-2xl font-semibold">34</span>
      </div>
      <div className="text-2xl font-semibold mb-2">Уровень {level}</div>
      <ProgressBar
        maxValue={maxProgress}
        currentValue={progress}
        barHeight="h-2"
      />
      <div className="text-lg mt-2">
        {progress}/{maxProgress} XP до следующего уровня
      </div>
      <div className="mt-8">
        <ProfileCard link={"/dialogs-end"} title={"Завершенные диалоги"} />
        <ProfileCard link={"#"} title={"Созданные диалоги"} />
        <ProfileCard link={"#"} title={"Выученные слова"} />
      </div>
    </div>
  );
};

export default Home;
