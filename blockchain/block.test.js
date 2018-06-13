const Block = require('./block');

describe('Block', ()=> {
    let data, lastBlock, block;
    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    })
    it('It sets the `data` to match input', () => {
        expect(block.data).toEqual(data);
    });
    
    it('sets the `lastHash` to mastch hash of last block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash);
    })
})