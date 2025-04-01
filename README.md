# Merkle Tree Generator (OpenZeppelin)

This script creates a Merkle Tree using the [OpenZeppelin Merkle Tree](https://github.com/OpenZeppelin/merkle-tree) library and allows you to generate a Merkle proof for a given address and amount.

## 📦 Requirements

- Node.js
- Install dependencies:
  ```bash
  npm install @openzeppelin/merkle-tree
  ```

## 🚀 Usage

### 1. Create a Merkle Tree

Run the script:

```bash
node index.js
```

This will generate a `tree.json` file and print the Merkle Root.

### 2. Generate Proof for a Value

You can get the Merkle proof for a specific address and amount:

```bash
node index.js proofValue <address> <amount>
```

**Example:**

```bash
node index.js proofValue 0x1234567890abcdef1234567890abcdef12345678 11
```

If the value exists in the tree, it will print the proof.

## 🧪 Example Data

The default data in the script is:

```js
[
  ["0x1234567890abcdef1234567890abcdef12345678", "11"],
  ["0xabcdefabcdefabcdefabcdefabcdefabcdefabcd", "22"]
]
```

You can modify this `values` array to suit your needs.

## 📝 Output

- `tree.json`: contains the full Merkle Tree structure
- `console.log`: shows the Merkle Root or proof result
