import elliptic from "elliptic";
import eccrypto from "eccrypto";

const EC = elliptic.ec;

const curve = new EC('secp256k1');

const keyPair = curve.genKeyPair();

const privateKey = keyPair.getPrivate('hex');
const publicKey = keyPair.getPublic('hex');

const message = 'Hello world!';
const message1 = 'Hello world!';

// encrypt using private key
const signature = curve.keyFromPrivate(privateKey, 'hex').sign(message);

const isValid = curve.keyFromPublic(publicKey, 'hex').verify(message1, signature);

console.log('Is the signature valid?', isValid);



// ecrypt using public key

const recipientPrivateKey = eccrypto.generatePrivate();
const recipientPublicKey = eccrypto.getPublic(recipientPrivateKey);

// Encrypt the message using the recipient's public key
eccrypto.encrypt(recipientPublicKey, Buffer.from(message)).then((encryptedData) => {
  // Decrypt the message using the recipient's private key
  eccrypto.decrypt(recipientPrivateKey, encryptedData).then((decryptedData) => {
    const decryptedMessage = decryptedData.toString('utf-8');
    console.log('Decrypted Message:', decryptedMessage);
  });
});
