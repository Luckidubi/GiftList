const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
const randomIndex = Math.floor(Math.random() * niceList.length)
const randomName = niceList[randomIndex]
const merkleTree = new MerkleTree(niceList)
const proof = merkleTree.getProof(randomIndex)

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof,
    name: randomName,
  });

  console.log(`Hey!!! ${randomName}`, { gift });
}

main();