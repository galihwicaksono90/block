import type { Transaction } from "@/classes";
import * as crypto from "crypto";

export class Block {
    constructor(
        public prevHash: string | null,
        public transaction: Transaction,
        public ts = Date.now()
    ) { }

    get hash() {
        const str = JSON.stringify(this);
        const hash = crypto.createHash("SHA256");
        hash.update(str).end();
        return hash.digest("hex");
    }
}