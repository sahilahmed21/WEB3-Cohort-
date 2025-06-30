// function bytesToAscii(byteArray) {
//     return byteArray.map(byte => String.fromCharCode(byte)).join('');
// }

// // Example usage:
// const bytes = [72, 101, 108, 108, 111]; // Corresponds to "Hello"
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString); // Output: "Hello"




// function asciiToBytes(asciiString) {
//     const byteArray = [];
//     for (let i = 0; i < asciiString.length; i++) {
//         byteArray.push(asciiString.charCodeAt(i));
//     }
//     return byteArray;
// }

// // Example usage:
// const ascii = "Hello";
// const byteArray = asciiToBytes(ascii);
// console.log(byteArray); // Output: [72, 101, 108, 108, 111]




// function bytesToAscii(byteArray) {
//     return new TextDecoder().decode(byteArray);
// }

// // Example usage:
// const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
// const asciiString = bytesToAscii(bytes);
// console.log(asciiString); // Output: "Hello"




 
// function asciiToBytes(asciiString) {
//     return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
// }

// // Example usage:
// const ascii = "Hello";
// const byteArray = asciiToBytes(ascii);
// console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
