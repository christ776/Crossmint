import setCometAt from './api/Comeths/POST';
import setPolyanetAt from './api/Polyanets/POST';
import setSoloonAt from './api/Soloon/POST';
import getGoalMap from './api/goal/GET';
import { isMegaverse } from './types/types';

async function drawCrossMintLogoAt() {
  const goalMap = await getGoalMap();
  for (let row = 0; row < goalMap.length; row++) {
    for (let column = 0; column < goalMap[row].length; column++) {
      const obj = goalMap[row][column];
      if (isMegaverse(obj)) {
        switch (obj) {
          case 'POLYANET': {
            setPolyanetAt(row, column);
            break;
          }
          case 'BLUE_SOLOON':
            setSoloonAt(row, column, 'blue');
            break;
          case 'WHITE_SOLOON':
            setSoloonAt(row, column, 'white');
            break;
          case 'RED_SOLOON':
            setSoloonAt(row, column, 'red');
            break;
          case 'PURPLE_SOLOON':
            setSoloonAt(row, column, 'purple');
            break;
          case 'UP_COMETH':
            setCometAt(row, column, 'up');
            break;
          case 'DOWN_COMETH':
            setCometAt(row, column, 'down');
            break;
          case 'LEFT_COMETH':
            setCometAt(row, column, 'left');
            break;
          case 'RIGHT_COMETH':
            setCometAt(row, column, 'right');
            break;

          default:
            break;
        }
      }
    }
  }
  // console.table(mapCopy);
}

drawCrossMintLogoAt();

/**
 * {"goal":
 * [["0","0","0","0","0","0","0","0","0","0","0"],
 * ["0","0","0","0","0","0","0","0","0","0","0"],
 * ["0","0","0","0","0","0","0","0","0","0","0"],
 * ["0","0","0","0","0","0","0","0","0","0","0"],
 * ["0","0","0","0","0","0","0","0","0","0","0"],
 * ["0","0","0","0","0","0","0","0","0","0","0"],
 * ["0","0","0","0","0","0","0","0","0","0","0"],
 * ["0","0","0","0","0","0","0","0","0","0","0"],
 * ["0","0","0","0","0","0","0","0","0","0","0"],
 * ["0","0","0","0","0","0","0","0","0","0","0"],
 * ["0","0","0","0","0","0","0","0","0","0","0"]]}
 */
