const crypto = require('crypto');

function hashingFunction(prefix) {
    if (typeof prefix === 'undefined') {
        throw new Error('Prefix is required');
    }

    let nonce = 0;
    while (true) {
        let inputStr = prefix.toString() + nonce.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

        // Check if the hash starts with '00000'
        if (hash.startsWith('00000')) {
            return { input: inputStr, hash: hash };
        }
        nonce++;
    }
}
try {
    const result = hashingFunction("test");
    console.log(result.input);  // The input string that produced the hash
    console.log(result.hash);   // The hash that starts with '00000'
} catch (error) {
    console.error(error.message);
}