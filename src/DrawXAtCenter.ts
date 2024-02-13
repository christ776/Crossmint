import 'dotenv/config';
import throttledQueue from 'throttled-queue';

import setPolyanetAt from './api/Polyanets/POST';

const throttle = throttledQueue(1, 1000, true);

interface Point {
  row: number;
  column: number;
}

/**
 * Call this function to Draw and X in given NxM elemnts Matrix 
 * @param mat 
 * @param height 
 */
async function drawShapeAtCenter(mat: string[][]): Promise<void> {
  //make sure matri0 has odd height 
  if (mat.length % 2 === 0 || mat[0].length % 2 === 0) {
    throw new Error('Matrix doesn\'t have odd height, cant find a proper center');
  }

  const offset = 2;
  const points: Point[] = []

  for (let i = offset; i < mat.length - offset; i++) {
    mat[i][i] = 'X';
    points.push({ row: i, column: i });
    // Handle center case, avoid duplicated request to the same spot
    if (i !== mat.length - i - 1) {
      mat[i][mat.length - i - 1] = 'X';
      points.push({ row: i, column: mat.length - i - 1 });
    }

  }
  try {
    await Promise.all(
      points.map(point => throttle(() => setPolyanetAt(point.row, point.column)))
    );
  } catch (error) {
    console.error(error);
  }

  console.table(mat);
}

const mat =
  [["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]];

await drawShapeAtCenter(mat);

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