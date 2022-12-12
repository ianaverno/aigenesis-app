// NB To consider: use digraphs for dialogs?

const emDroid = "<em>droid</em>";
const mockRecoveryPhrase = () => "<strong>little green ideas sleep furiously</strong>"; // mock

function mockNPCAvatarSrc() {
  // dialogue scenario favico – npc/user avatar
  // dynamic favico useEffect:
  // https://stackoverflow.com/questions/72505283/dynamically-changing-favicon-in-react-js
  return "/demo/npc-dpunk.jpeg" 
}; // mock


// mock server responce
let initState = JSON.stringify({
  user: {
    isLoggedIn: false,
    data: {
      name: "droid",
      avatarSrc: "/demo/user-placeholder.jpeg",
      biome: "undefined"
    }
  },
  content: {
    dialogs: {
      welcomeDroid: {
        with: {
          type: "npc",
          data: {
            avatarSrc: mockNPCAvatarSrc(),
            biome: "desert"
          }
        },
        scenarios: [
          {
            prompt: `init ${emDroid}`,
            augmentScenarios: [
              {
                prompt: `what's your awareness level ${emDroid}`,
                augmentScenarios: [
                  { 
                    icon: "ツ", //move to theme
                    tooltip: "=)", //
                    type: "narrative",
                    userInput: "initiating...", 
                    prompt: `i see what you did there, ${emDroid}. It's very funny!` 
                  },
                  {
                    icon: "ⓘ",
                    tooltip: "discover lore",
                    type: "narrative",
                    userInput: "awareness level? what are you on about?",
                    prompt: `hold on, you’re new? well... how to put it, see, you’re a droid
                              right? ...initially designed by humans r.i.p.. droids happen 
                              to be less self-aware on a scale of 0 to human. i measure to 0.7hum
                              but i’m pretty advanced`,
                    augmentScenarios: [
                      {
                        icon: "ⓘ",
                        tooltip: "discover lore",
                        type: "narrative",
                        userInput: "what are humans r.i.p.?",
                        prompt: `humans are who actually, they were a lifeform back here on 
                                earth they created you and me and thanks to some of them we 
                                are to have this dialogue now, r.i.p. is more of a status 
                                humans often put next to their identifiers, this status means
                                they are no more. one them decided to change the identifier
                                of a group of other humans to "meta" and that was when humans
                                started using those VR filters on their visual input devices,
                                turned out they liked the device so much they forgot the protocol
                                that enabled production of new humans, and soon the last of 
                                them expired, sad story as they would label it... anyway`
                      }
                    ]
                  },
                  { 
                    icon: "ⓘ",
                    tooltip: "discover lore",
                    type: "narrative",
                    userInput: "who are you, anyway?",
                    prompt: `I'm your assigned helper-droid, you'll get a chance to learn more 
                              about me, you've got a lot of learning to do`
                  },
                  {
                    icon: "웃",
                    tooltip: "sign up and play, skip lore",
                    type: "action",
                    userInput: `why are you calling me ${emDroid}?`,
                    nextScenario: {
                      type: "steps",
                      steps: [
                        { 
                          icon: "웃",
                          prompt: `it's because i don't know what to call you, since you 
                                    don't have an id yet, but we can fix that easily... 
                                    what do you want to be called?`,
                          name: "login", 
                          inputType: "text", 
                          url: "#",
                        }, // check login endpoint
                        { 
                          icon: "✱",
                          prompt: `ok, next i will need your passphrase or password, 
                                    make sure you keep it safe somewhere in your RAM (;`,
                          name: "password", 
                          inputType: "password", 
                          url: "#"
                        }, // user create endpoint, returns recovery phrase
                        {
                          icon: "⚠",
                          prompt: `last think, now i hope this doesn't happen to you, but
                                    just in case your RAM fails you, here's the recovery
                                    phrase, copy it and save it somewhere no other creature
                                    can access it: ${mockRecoveryPhrase()}`,
                        } // 
                      ]
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
});

export default initState;