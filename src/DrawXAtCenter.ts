import 'dotenv/config'
import setPolyanetAt from './API/Polyanets/POST';

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
    const URL = process.env.MEGAVERSE_API_URL;
    const CANDIDATE_ID = process.env.CANDIDATE_ID;
    if (URL === undefined) {
        throw new Error('Missing Crossmint URL');
    }
    if (CANDIDATE_ID === undefined) {
        throw new Error('Missing Candidate ID');
    }

    const promises: Array<Promise<Response>> = [];

    for (let i = offset; i < mat.length - offset;  i++ ) {
        mat[i][i] = 'X';
        mat[i][mat.length - i - 1] = 'X';
        promises.push(setPolyanetAt(URL, i, i, CANDIDATE_ID));
        promises.push(setPolyanetAt(URL, i, mat.length - i - 1, CANDIDATE_ID));
    }
    try {
        await Promise.all(promises);
    } catch(error) {
        console.error(error);
    }

    console.table(mat);
}

const mat = 
    [["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"],
    ["0","0","0","0","0","0","0","0","0","0","0"]];

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