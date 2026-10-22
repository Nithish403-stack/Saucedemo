module.exports = {
 
verifyStatusCode: (actual, expected) => {
if (actual !== expected) {
throw new Error(`Expected Status Code ${expected}, but got ${actual}`);
}
},
verifyTextContains: (actual, expected) => {
if (!actual.includes(expected)) {
throw new Error(`Expected '${actual}' to contain '${expected}'`);
}
},
verifyEquals: (actual, expected) => {
if (actual !== expected) {
throw new Error(`Expected '${expected}', but got '${actual}'`);
}
},
printResponse: async (response) => {
console.log("Status:", response.status());
console.log("Status Text:", response.statusText());

const body = await response.text();
console.log("Response Body:", body);
return body;
}
};