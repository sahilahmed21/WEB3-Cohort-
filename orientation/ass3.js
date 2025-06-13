const crypto = require('crypto');
function findhashwithprefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = 'harkirat => Raman | Rs 100 </br> Ram => Ankit | Rs 10' + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;  // tries next nonce

    }
}