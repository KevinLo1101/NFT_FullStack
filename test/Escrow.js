const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Escrow', () => {
    //where to put the test
    it("Save the address", async () => {   
        const realEstate= await ethers.deployContract("RealEstate")
        console.log(realEstate.address)
    })    
})
