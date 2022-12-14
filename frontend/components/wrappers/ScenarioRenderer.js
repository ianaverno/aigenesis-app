import { useUser } from "../../contexts/UserContext";
import Logger from "./Logger";
import DialogWindow from "../scenario-templates/DialogWindow";

export default function ScenarioRenderer() {
  // console.log("ScenarioRenderer");
  function renderScenario(user) {
    console.log("render scenario");
  
    if (user.isLoggedIn) {
      // console.log("user.isLoggedIn == true");
      // not implemented
    } else {
      return(
        <Logger>
          <DialogWindow dialogId={"welcomeDroid"} />
        </Logger>
      );
    }
  }
  
  const user = useUser();
  console.log({user});

  return (
    <div className="ScenarioRenderer">
      {renderScenario(user)}
    </div>
  )
}