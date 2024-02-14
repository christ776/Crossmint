import getGoalMap from './api/goal/GET';
import { isMegaverse } from './types/types';

const mapCopy = Array.from(new Array(30), () => new Array(30).fill('SPACE'));

test('Test Crossming logo creation', async () => {
  const goalMap = await getGoalMap();
  for (let row = 0; row < goalMap.length; row++) {
    for (let column = 0; column < goalMap[row].length; column++) {
      const obj = goalMap[row][column];
      if (isMegaverse(obj)) {
        switch (obj) {
          case 'POLYANET': {
            mapCopy[row][column] = 'POLYANET';
            break;
          }
          case 'BLUE_SOLOON':
            mapCopy[row][column] = 'BLUE_SOLOON';
            break;
          case 'WHITE_SOLOON':
            mapCopy[row][column] = 'WHITE_SOLOON';
            break;
          case 'RED_SOLOON':
            mapCopy[row][column] = 'RED_SOLOON';
            break;
          case 'PURPLE_SOLOON':
            mapCopy[row][column] = 'PURPLE_SOLOON';
            break;
          case 'UP_COMETH':
            mapCopy[row][column] = 'UP_COMETH';
            break;
          case 'DOWN_COMETH':
            mapCopy[row][column] = 'DOWN_COMETH';
            break;
          case 'LEFT_COMETH':
            mapCopy[row][column] = 'LEFT_COMETH';
            break;
          case 'RIGHT_COMETH':
            mapCopy[row][column] = 'RIGHT_COMETH';
            break;

          default:
            mapCopy[row][column] = 'SPACE';
            break;
        }
      }
    }
  }
  expect(mapCopy).toEqual(goalMap);
});

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
