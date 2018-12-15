
export function randomWord(wordsList) {
    let words = new Map();
    let string = wordsList[Math.floor(Math.random() * wordsList.length)];
    for(let i = 0; i < string.length; i++){
        words.set(i, string[i]);
    }
    return words;
}