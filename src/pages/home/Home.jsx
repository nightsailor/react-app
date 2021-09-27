import Topbar from "../../components/topbar/Topbar";
import "./home.css"
import bot from "./chat-bot.png"
import travel from "./tour-buddy.jpg"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <div className="homeWrapper">
            <div className="homeIcon">
                <img
                    className="imgIcon"
                    src={bot}
                    alt=""
                    width={400}
                />
            </div>
            <div className="homeText">
                A Chat Bot that recommends playlist based on the journey.
            </div>
        </div>
        <div className="homeWrapper">
            <div className="homeText">
                A Travel Buddy that recommmends sustainable journey. 
            </div>
            <div className="homeIcon">
                <img
                    className="imgIcon"
                    src={travel}
                    alt=""
                    width={400}
                />
            </div>
        </div>
      </div>
    </>
  );
}
