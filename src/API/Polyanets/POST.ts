export default function setPolyanetAt(URL: string, row: number, column: number, candidateId: string) {
    return fetch(`${URL}/polyanets`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            row,
            column,
            candidateId
        }),
    });
}