const { expect } = require('chai');
const { ethers } = require('hardhat');
const { isNamespaceExport } = require('typescript');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe('Escrow', () => {
    let buyer, seller, inspector, lender
    let realEstate, escrow
    it("Save the address", async () => {   
        
        [buyer, seller, inspector, lender] = await ethers.getSigners()
        //Deploy test
        const RealEstate= await ethers.deployContract("RealEstate")
        realEstate = RealEstate
        

        //Test mint
        let transaction = await realEstate.connect(seller).mint("https://ipfs.io/ipfs/QmQVcpsjrA6crliJjZAodYwmPekYgbnXGo4DFubJiLc2EB/1.json")
        await transaction.wait()
        const Escrow = await ethers.deployContract("Escrow", [realEstate.address, seller.address, inspector.address, lender.address])
        
        const result = await Escrow.nftAddress()
        console.log(result)
        console.log(realEstate.address)
        expect(result).to.be.equal(realEstate.address)
    })    


})
