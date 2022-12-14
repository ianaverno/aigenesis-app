import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import Logger from "./Logger";
import DialogWindow from "../scenario-templates/DialogWindow";

function renderScenario(user) {
  if (user.isLoggedIn) {
    // not implemented
  } else {
    return(
      <Logger>
        <DialogWindow dialogId={"welcomeDroid"} />
      </Logger>
    );
  }
}

export default function ScenarioRenderer() {
  // console.log("ScenarioRenderer");
  const user = useUser();

  const scenario = renderScenario(user);

  return (
    <div className="ScenarioRenderer">
      {scenario}
    </div>
  )
}