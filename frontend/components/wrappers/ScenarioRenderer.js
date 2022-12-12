import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import Logger from "./Logger";
import DialogWindow from "../scenario-templates/DialogWindow";

export default function ScenarioRenderer() {
  const user = useUser();

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

  return (
    <div className="ScenarioRenderer">
      {renderScenario(user)}
    </div>
  )
}