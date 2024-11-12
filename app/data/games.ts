import { GameType } from "../types/global";

import anacondaWild2 from "../../public/fun88/images/games/anaconda-wild-2.png"
import aztecBonusLines from "../../public/fun88/images/games/aztec-bonus-lines.png"
import beachLife from "../../public/fun88/images/games/beach-life.png"

const DUMMY_GAMES_DATA: GameType[] = [
  {
    id: "1",
    name: "Anaconda Wild 2",
    providerId: "16",
    category: "jackpots",
    image: anacondaWild2,
  },
  {
    id: "2",
    name: "Aztec Bonus Lines",
    providerId: "1",
    category: "jackpots",
    image: aztecBonusLines,
  },
  {
    id: "3",
    name: "Beach Life",
    providerId: "2",
    category: "jackpots",
    image: beachLife,
  },
];

export default DUMMY_GAMES_DATA;
