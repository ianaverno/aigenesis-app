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
        nodes: {
          "0": {
            prompt: `init ${emDroid}`,
            input_type: null,
            next_node_id: "1" 
          },
          "1": {
            prompt: `what's your awareness level ${emDroid}`,
            input_type: "options",
            options: [
              {
                icon: "ツ", //move to theme
                tooltip: "=)", //
                message: "initiating...",
                next_node_id: "1-1"
              },
              {
                icon: "ⓘ",
                tooltip: "discover lore",
                message: "awareness level? what are you on about?",
                next_node_id: "1-2"
              },
              {
                icon: "ⓘ",
                tooltip: "discover lore",
                message: "who are you, anyway?",
                next_node_id: "1-3"
              },
              {
                icon: "웃",
                tooltip: "sign up and play, skip lore",
                message: `why are you calling me ${emDroid}?`,
                next_node_id: "1-4"
              }
            ]
          },
          "1-1": {
            prompt: `i see what you did there, ${emDroid}. It's very funny!`,
            input_type: null,
            next_node_id: "1"
          },
          "1-2": {
            next_node_id: "1",
            input_type: null,
            prompt: `hold on, you’re new? well... how to put it, see, you’re a droid
                      right? ...initially designed by humans r.i.p.. droids happen 
                      to be less self-aware on a scale of 0 to human. i measure to 0.7hum
                      but i’m pretty advanced`,
            add_options: [
              {
                icon: "ⓘ",
                tooltip: "discover lore",
                type: "predefined",
                message: "what are humans r.i.p.?",
                next_node_id: "1-2-1"
              }
            ]
          },
          "1-2-1": {
            next_node_id: "1",
            input_type: null,
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
          },
          "1-3": {
            next_node_id: "1",
            input_type: null,
            prompt: `I'm your assigned helper-droid, you'll get a chance to learn more 
                      about me, you've got a lot of learning to do`
          },
          "1-4": {
            prompt: `it's because i don't know what to call you, since you 
                      don't have an id yet, but we can fix that easily... 
                      what do you want to be called?`,
            input_type: "text",
            input: {
              icon: "웃",
              name: "login", 
              submitUrl: "#"
            },
            next_node_id: "1-4-1"
          },
          "1-4-1": {
            next_node_id: "1-4-2",
            prompt: `ok, next i will need your passphrase or password, 
                      make sure you keep it safe somewhere in your RAM (;`,
            input_type: "password",
            input: {
              icon: "✱",
              name: "password", 
              submitUrl: "#"
            }
          },
          "1-4-2": {
            icon: "⚠",
            prompt: `last thing, now i hope this doesn't happen to you, but
                      just in case your RAM fails you, here's the recovery
                      phrase, copy it and save it somewhere no other creature
                      can access it: ${mockRecoveryPhrase()}`
          }
        }
      }
    }
  },
});

export default initState;