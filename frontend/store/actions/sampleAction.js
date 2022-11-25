import { GET_BATTLE_STATE, BATTLE_ERROR } from "../types";

export const getBattleState = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SAMPLE,
      payload: {
        land: [
          { 
            name: "Desert", // offensive
            text: "At the beginning of your turn draw a {desert biome} card"
          },
          {
            name: "Tundra", // defensive
            text: "At the beginning of your turn draw a {tundra biome} card"
          },
          {
            name: "Steppe", // mix
            text: "At the beginning of your turn draw a {steppe biome} card"
          }
        ],
        hand: [
          
        ]
      },
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};