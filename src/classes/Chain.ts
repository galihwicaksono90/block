import { Block, Transaction } from "@/classes";

export class Chain {
    public static instance = new Chain();

    chain: Block[];

    constructor() {
        let genesis = new Block(null, new Transaction(100, "me", "her"));
        this.chain = [genesis];
    }

    get lastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(
        transaction: Transaction,
        senderPublicKey: string,
        signature: string
    ) {
        const newBlock = new Block(this.lastBlock.hash, transaction);
        this.chain.push(newBlock);
    }
}
