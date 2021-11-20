import  CryptoBlock  from "./CryptoBlock.js";

/**
 * For maintain the operations of the blockchain using helper methods that accomplish different tasks,
 * such as creating new blocks and adding them to the chain.
 */
export default class CryptoBlockchain {
  constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty = 4;
  }

  /**
   * Creates first block in the blockchain
   * @returns {CryptoBlock::class} - hash of the block
   */
  startGenesisBlock() {
    return new CryptoBlock(0, "30/12/2021", "Initial Block in the Chain", "0");
  }

  /**
   * Get the latest block in the blockchain
   * @returns {CryptoBlock} - hash of the block
   */
  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  /**
   * Push new block in the blockchain
   * @returns {CryptoBlock} - hash of the block
   */
  addNewBlock(newBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    // newBlock.hash = newBlock.computeHash();
    newBlock.proofOfWork(this.difficulty); 
    this.blockchain.push(newBlock);
  }

 /**
   * Validate the blockchain
   * @returns {True|False} - is chain valid
   */
  checkChainValidity(){
    for(let i = 1; i < this.blockchain.length; i++){
        const currentBlock = this.blockchain[i];
        const precedingBlock= this.blockchain[i-1];

      if(currentBlock.hash !== currentBlock.computeHash()){
          return false;
      }
      if(currentBlock.precedingHash !== precedingBlock.hash)
        return false;
    }
    return true;
}
}
