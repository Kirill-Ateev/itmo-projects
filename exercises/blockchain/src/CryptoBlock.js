import sha256 from "crypto-js/sha256.js";

/**
 * Block
 * @param {Number} index - It’s a unique number that tracks the position of every block in the entire blockchain.
 * @param {Date} timestamp - It keeps a record of the time of occurrence of each completed transaction.
 * @param {Object} data - It provides data about the completed transactions, such as the sender details, recipient’s details, and quantity transacted.
 * @param {String} precedingHash - It points to the hash of the preceding block in the blockchain, something important in maintaining the blockchain’s integrity.
 */
export default class CryptoBlock {
  constructor(index, timestamp, data, precedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  /**
   * Returns calculated hash of the block based on its properties
   * @returns {String} - hash of the block
   */
  computeHash() {
    return sha256(
      this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data) + this.nonce,
    ).toString();
  }

  /**
   * Applied to increase the difficulty entailed in mining or adding new blocks to the blockchain
   */
  proofOfWork(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}
