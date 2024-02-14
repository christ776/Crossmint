import setPolyanetAt from './api/Polyanets/POST';
import { Point } from './types/types';

/**
 * Call this function to Draw and X in given NxM elemnts Matrix
 * @param mat
 * @param height
 */
async function drawShapeAtCenter(mat: string[][], callback: (points: Point[]) => void): Promise<void> {
  //make sure matri0 has odd height
  if (mat.length % 2 === 0 || mat[0].length % 2 === 0) {
    throw new Error("Matrix doesn't have odd height, cant find a proper center");
  }

  const offset = 2;
  const points: Point[] = [];

  for (let i = offset; i < mat.length - offset; i++) {
    mat[i][i] = 'X';
    points.push({ row: i, column: i });
    // Handle center case, avoid duplicated request to the same spot
    if (i !== mat.length - i - 1) {
      mat[i][mat.length - i - 1] = 'X';
      points.push({ row: i, column: mat.length - i - 1 });
    }
  }
  callback(points);
  console.table(mat);
}

async function callback(points: Point[]) {
  try {
    await Promise.all(points.map((point) => setPolyanetAt(point.row, point.column)));
  } catch (error) {
    console.error(error);
  }
}

const mat = [
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
];

await drawShapeAtCenter(mat, callback);

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
