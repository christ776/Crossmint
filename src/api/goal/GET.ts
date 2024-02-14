import 'dotenv/config';
import { MegaverseKey } from '../../types/types';

const CANDIDATE_ID = process.env.CANDIDATE_ID;
const URL = process.env.MEGAVERSE_API_URL;

type JSONResponse = {
  goal: MegaverseKey[][];
};

export default async function getGoalMap(): Promise<MegaverseKey[][]> {
  const response = await fetch(`${URL}/map/${CANDIDATE_ID}/goal`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const { goal }: JSONResponse = await response.json();
    return goal;
  }
  throw new Error('There was an error when fetching the Megaverse goal');
}
