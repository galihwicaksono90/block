import type { Block } from "@/types";
import { ref, toRef } from "vue";
import crypto from "crypto-js";

export const startsWith = "00";

function getHash(block: Block) {
    const str = JSON.stringify(block);
    const hash = crypto.SHA256(str);
    return hash.toString();
}

const genesisBlock: Block = {
    prevHash: "0000000000000000000000000000000000000000000000000000000000000000",
    nonce: "3780",
    data: "genesis",
};

const nextBlock: Block = {
    nonce: "49202",
    data: "two",
};

const blockThree: Block = {
    nonce: "28278",
    data: "three",
};

const blockFour: Block = {
    nonce: "576",
    data: "four",
};

const blockFive: Block = {
    nonce: "232",
    data: "five",
};

const blockSix: Block = {
    nonce: "119",
    data: "six",
};

async function counter(block: Block) {
    let cond = !getHash(block).startsWith(startsWith);
    let nonce = 0;
    let hash = "";
    while (cond) {
        await new Promise((resolve) => {
            nonce++;
            block.nonce = nonce.toString();
            hash = getHash(block);
            cond = !hash.startsWith(startsWith);
            setTimeout(resolve, 1);
        });
    }
    return nonce;
}

export function useChain() {
    const chain = ref<Block[]>([genesisBlock, nextBlock, blockThree, blockFour, blockFive, blockSix]);
    const isLoading = ref<boolean>(false);

    function addBlock(data: string) {
        const newBlock: Block = {
            prevHash: getHash(chain.value[chain.value.length - 1]),
            data,
        };
        chain.value.push(newBlock);
    }

    async function mine(index: number) {
        isLoading.value = true;
        const nonce = await counter(chain.value[index]);
        console.log("done" + nonce);
        isLoading.value = false;
    }

    return {
        chain,
        addBlock,
        isLoading,
        mine,
    };
}
