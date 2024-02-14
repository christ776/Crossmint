import 'dotenv/config';
import throttle from '../../queue';

const CANDIDATE_ID = process.env.CANDIDATE_ID;
const URL = process.env.MEGAVERSE_API_URL;

async function _setSoloonAt(row: number, column: number, color: string) {
  if (URL === undefined) {
    throw new Error('Missing Crossmint URL');
  }
  if (CANDIDATE_ID === undefined) {
    throw new Error('Missing Candidate ID');
  }
  const response = await fetch(`${URL}/soloons`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      row,
      column,
      color,
      candidateId: CANDIDATE_ID,
    }),
  });
  console.log(`Set Soloon at [${row},${column}] with color:${color} | HTTP Status:`, response.status);
}

export default function setSoloonAt(row: number, column: number, color: string) {
  return throttle(() => _setSoloonAt(row, column, color));
}
