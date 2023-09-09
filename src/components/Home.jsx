import streakIcon from "../assets/streak_icon.svg";
import ProfileCard from "./Profile/ProfileCard";
import ProgressBar from "./Profile/ProgressBar";

const Home = () => {
    return (
        <div
            className="h-screen py-10 px-8"
            style={{ backgroundColor: "#87786D", color: "white" }}
        >
            <div className="flex justify-between">
                <span style={{ fontSize: "64px" }}>Максим Матанцев</span>
                <div
                    className="flex items-center justify-center"
                    style={{ display: "flex" }}
                >
                    <img src={streakIcon} alt="streak icon" />
                    <span style={{ fontSize: "36px" }}>28</span>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <p style={{ fontSize: "36px" }}>Lvl 54</p>
                <ProgressBar maxValue={250} currentValue={120}/>
                <p style={{ fontSize: "18px" }}>
                    120/250 XP until the next level
                </p>
            </div>
            <div className="flex flex-col mt-20" style={{gap:'25px'}}>
              <ProfileCard link={'#'} title={'Завершеные диалоги'}/>
              <ProfileCard link={'#'} title={'Созданные диалоги'}/>
              <ProfileCard link={'#'} title={'Выученные слова'}/>
            </div>
        </div>
    );
};

export default Home;
