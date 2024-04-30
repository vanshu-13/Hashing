import crypto from "crypto";
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
});
let text = "Hii It's me VANSHU!!!"
let data = Buffer.from("Hii It's me VANSHU!!!");
console.log(text);

//encrypy with private
let sign = crypto.sign('SHA256', data, privateKey);
let Verify = crypto.verify('SHA256', data, publicKey, sign);
console.log('Encrypt data with private key', sign);
console.log(`Is signature verified? ${Verify}`);


// encrypt with public
let sign2 = crypto.publicEncrypt(publicKey,data);
let verify =crypto.privateDecrypt(privateKey, sign2);
console.log('Encrypt data with public key', sign);
console.log(`Is signature verified? ${verify}`);