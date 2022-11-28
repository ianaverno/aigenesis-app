function renderScenario(state) {
  switch (state.user) {
    case null:
      const [dialogue, setDialogue] = useState({});
      return(
        <WelcomeDialogue dialogue={state.welcomeDialogue} />
      )
  
    default:
      break;
  }
}

export default function ScenarioRenderer() {
  scenario = renderScenario(initState);

  return (
    <div className="ScenarioRenderer">
      {scenario}
    </div>
  )
}