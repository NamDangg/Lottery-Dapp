const Lottery = artifacts.require("Lottery");

module.exports = function (deployer) {
  //let supply = web3.utils.toWei('1000000', 'ether')
  //let fee = web3.utils.toWei('0.1', 'ether')
  deployer.deploy(Lottery,'0xD29e369722BfF52f7150d0f65032d6C348E76237');
};
