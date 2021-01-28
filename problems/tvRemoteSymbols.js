function tvRemoteSymbols(word) {

    let start = "a";
    let char = word[0];
    let output = 0;
    let mode = 'lower';

    if(word.length === 0) {
        return 0;
    }

    if(isCapitalized(char)) { 
       output = output + pressesBetweenChars(start, 'mode') + pressesBetweenChars('mode', char.toLowerCase()) + 2;
       mode = 'upper';
    } else if(isAdditionalSymbol(char)) {
       output = output + pressesBetweenChars(start, 'mode') + pressesBetweenChars('mode', char) + 3;  
       mode = 'symbol'
    } else {
       output = output + pressesBetweenChars(start, char) + 1; 
    };

    for(let i = 1; i < word.length; i++) {
       char = word[i];
       let prevChar = word[i-1];

       if(isNumberOrSymbol(char)) {
          output = output + pressesBetweenChars(prevChar.toLowerCase(), char) + 1;
          continue;
       }

       if(isCapitalized(char)) {
          if(capLock) {
             output = output + pressesBetweenChars(prevChar.toLowerCase(), char.toLowerCase()) + 1
          } else {  
             output = output + pressesBetweenChars(prevChar.toLowerCase(), 'cap') + 1;
             capLock = true;
             output = output + pressesBetweenChars('cap', char.toLowerCase()) + 1; 
          }
       } else {
          if(capLock) {
            output = output + pressesBetweenChars(prevChar.toLowerCase(), 'cap') + 1;
            capLock = false;
            output = output + pressesBetweenChars('cap', char.toLowerCase()) + 1;  
          } else { 
            output = output + pressesBetweenChars(prevChar.toLowerCase(), char.toLowerCase()) + 1  
          }
       }
    }
    
    return output;
}

function isCapitalized(char) {
    const capLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'W', 'X', 'Y', 'Z'];

    return capLetters.includes(char);
};

function isNumberOrSymbol(char) {
    const numberSymbol = ['0', '1', '2', '3', '4', '5', '6', '7', 
    '8', '9', '.', '@', '_', '/', ' '];

    return numberSymbol.includes(char);
};

function isAdditionalSymbol(char) {
    const symbol = ['^', '~', '?', '!', "'", '"', '(', ')', '-', ':', ';', '+', '&', '%', '*', '=' 
    '<', '>', '\u20ac', '\u00a3', '$', '\u00a5', '\u00a4', '\\', '[', ']', '{', '}', ',', '\u00a7', '#',
    '\u00bf', '\u00a1'];

    return symbol.includes(char);
};


function pressesBetweenChars(char1, char2) {
    const position = {
        "a": [0, 0],
        "b": [0, 1],
        "c": [0, 2],
        "d": [0, 3],
        "e": [0, 4],
        "1": [0, 5],
        "2": [0, 6],
        "3": [0, 7],
        "f": [1, 0],
        "g": [1, 1],
        "h": [1, 2],
        "i": [1, 3],
        "j": [1, 4],
        "4": [1, 5],
        "5": [1, 6],
        "6": [1, 7],
        "k": [2, 0],
        "l": [2, 1],
        "m": [2, 2],
        "n": [2, 3],
        "o": [2, 4],
        "7": [2, 5],
        "8": [2, 6],
        "9": [2, 7],
        "p": [3, 0],
        "q": [3, 1],
        "r": [3, 2],
        "s": [3, 3],
        "t": [3, 4],
        ".": [3, 5],
        "@": [3, 6],
        "0": [3, 7],
        "u": [4, 0],
        "v": [4, 1],
        "w": [4, 2],
        "x": [4, 3],
        "y": [4, 4],
        "z": [4, 5],
        "_": [4, 6],
        "/": [4, 7],
        "^": [0, 0],
        "~": [0, 1],
        "?": [0, 2],
        "!": [0, 3],
        "'": [0, 4],
        '"': [0, 5],
        "(": [0, 6],
        ")": [0, 7],
        "-": [1, 0],
        ":": [1, 1],
        ";": [1, 2],
        "+": [1, 3],
        "&": [1, 4],
        "%": [1, 5],
        "*": [1, 6],
        "=": [1, 7],
        "<": [2, 0],
        ">": [2, 1],
        "\u20ac": [2, 2],
        "\u00a3": [2, 3],
        "$": [2, 4],
        "\u00a5": [2, 5],
        "\u00a4": [2, 6],
        "\\": [2, 7],
        "[": [3, 0],
        "]": [3, 1],
        "{": [3, 2],
        "}": [3, 3],
        ",": [3, 4],
        "\u00a7": [3, 7],
        "#": [4, 0],
        "\u00bf": [4, 1],
        "\u00a1": [4, 2],
        "mode": [5, 0],
        " ": [5, 1],
    };
 
    let pos1 = position[char1];
    let pos2 = position[char2];

    let rows = 6;
    let vertDist = Math.abs(pos2[0] - pos1[0]);

    let cols = 8;
    let horizDist = Math.abs(pos2[1] - pos1[1]);

    return Math.min(vertDist, rows - vertDist) + Math.min(horizDist, cols - horizDist);
}

module.exports = {
   tvRemoteSymbols, 
}