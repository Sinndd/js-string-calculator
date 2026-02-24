function caesar(str, key) {


    let result = '';

    for (let i = 0; i < str.length; i++) {

        let currentChar = str.charCodeAt(i);

        // Case: lowercase
        if (currentChar >= 97 && currentChar <= 122) {
            if ((currentChar + key) > 122)
                result += String.fromCharCode(97 + ((currentChar + key) - 123));
            else
                result += String.fromCharCode(currentChar + key);

            continue;
        }

        // Case: uppercase
        if (currentChar >= 65 && currentChar <= 90) {
            if ((currentChar + key) > 90)
                result += String.fromCharCode(65 + ((currentChar + key) - 91));
            else
                result += String.fromCharCode(currentChar + key);

            continue;
        }

        // Others
        result += String.fromCharCode(currentChar);
    }

    return result;
}

let cypherBtn = document.querySelector('#cypher-btn')
cypherBtn.addEventListener('click', () => {
    let cypherKey = parseInt(document.querySelector('#cypher-key').value)
    let cypherMessage = document.querySelector('#cypher-message').value
    let result = document.querySelector('#result')
    let cypheredMessage = caesar(cypherMessage, cypherKey)
    result.textContent = cypheredMessage
})