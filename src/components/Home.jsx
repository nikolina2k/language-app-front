import streakIcon from "../assets/streak_icon.svg";

const Home = () => {
    return (
        <div>
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
                    <div className="progres"></div>
                    <p style={{ fontSize: "18px" }}>120/250 XP until the next level</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
