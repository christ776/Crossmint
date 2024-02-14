import 'dotenv/config';
import throttle from '../../queue';
import { Direction } from '../../types/types';

const CANDIDATE_ID = process.env.CANDIDATE_ID;
const URL = process.env.MEGAVERSE_API_URL;

async function _setPolyanetAt(row: number, column: number, direction: Direction) {
  if (URL === undefined) {
    throw new Error('Missing Crossmint URL');
  }
  if (CANDIDATE_ID === undefined) {
    throw new Error('Missing Candidate ID');
  }
  const response = await fetch(`${URL}/comeths`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      row,
      column,
      candidateId: CANDIDATE_ID,
      direction,
    }),
  });
  console.log(`Set Cometh at [${row},${column}] with ${direction} direction | HTTP Status:`, response.status);
}

export default function setCometAt(row: number, column: number, direction: Direction) {
  return throttle(() => _setPolyanetAt(row, column, direction));
}
