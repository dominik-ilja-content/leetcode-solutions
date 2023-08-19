/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const map = new Map();
    const punc = ["!", "?", "'", ",", ";", "."];
    let word = "";
    let max = 0;
    let maxWord = null;


    for (let i = 0; i < paragraph.length; i++) {
        const char = paragraph[i].toLowerCase();

        if (char === " " || punc.includes(char)) {
            if (!banned.includes(word) && word !== "") {
                if (map.has(word)) {
                    map.set(word, map.get(word) + 1);
                }
                else {
                    map.set(word, 1);
                }

                const count = map.get(word);
                if (count > max) {
                    max = count;
                    maxWord = word;
                }
            }
            word = "";
        }
        else {
            word += char;
        }
    }

    return maxWord === null ? word : maxWord;
};

module.exports = mostCommonWord;