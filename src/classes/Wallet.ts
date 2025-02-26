import crypto from "crypto";
import { Transaction, Chain } from "@/classes";

export class Wallet {
    public publicKey: string;
    public privateKey: string;

    constructor() {
        const keypair = crypto.generateKeyPairSync("rsa", {
            modulusLength: 2048,
            publicKeyEncoding: { type: "spki", format: "pem" },
            privateKeyEncoding: { type: "pkcs8", format: "pem" },
        });

        this.publicKey = keypair.publicKey;
        this.privateKey = keypair.privateKey;
    }

    sendMoney(amount: number, payeePublicKey: string) {
        const transaction = new Transaction(amount, this.publicKey, payeePublicKey);

        const sign = crypto.createSign("SHA256");

        sign.update(transaction.toString()).end();

        //const signature = sign.sign(this.privateKey);

        //Chain.instance.addBlock(transaction, this.publicKey, signature);
    }
}
