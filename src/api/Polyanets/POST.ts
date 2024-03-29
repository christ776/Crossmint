import 'dotenv/config';
import throttle from '../../queue';

const CANDIDATE_ID = process.env.CANDIDATE_ID;
const URL = process.env.MEGAVERSE_API_URL;

async function _setPolyanetAt(row: number, column: number) {
  if (URL === undefined) {
    throw new Error('Missing Crossmint URL');
  }
  if (CANDIDATE_ID === undefined) {
    throw new Error('Missing Candidate ID');
  }
  const response = await fetch(`${URL}/polyanets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      row,
      column,
      candidateId: CANDIDATE_ID,
    }),
  });
  console.log(`Set Polyanet at [${row},${column}] | HTTP Status:`, response.status);
}

export default function setPolyanetAt(row: number, column: number) {
  return throttle(() => _setPolyanetAt(row, column));
}
