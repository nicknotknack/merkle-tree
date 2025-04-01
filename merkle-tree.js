import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";

const values = [
  ["0x1234567890abcdef1234567890abcdef12345678", "11"],
  ["0xabcdefabcdefabcdefabcdefabcdefabcdefabcd", "22"]
];

const tree = StandardMerkleTree.of(values, ["address", "uint256"]);
fs.writeFileSync("tree.json", JSON.stringify(tree.dump(), null, 2));
console.log("Merkle Root:", tree.root);

const args = process.argv.slice(2);
if (args[0] === "proofValue" && args.length === 3) {
  const [_, address, amount] = args;
  const entry = [...tree.entries()].find(([_, v]) =>
    v[0].toLowerCase() === address.toLowerCase() && v[1] === amount
  );
  if (entry) {
    const proof = tree.getProof(entry[0]);
    console.log(`\n✅ Proof for ${address} (${amount}):\n\n${JSON.stringify(proof, null, 2)}`);
  } else {
    console.log(`\n❌ Entry not found for ${address} (${amount})`);
  }
}