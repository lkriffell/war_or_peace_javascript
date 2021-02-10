import Card from '../src/card.js'
import assert from 'assert'

describe('Card', function() {
  it('can exist', function() { 
    var myCard = new Card('Hearts', 'King', 13)
    assert(myCard instanceof Card)
    assert.equal(myCard.suit, 'Hearts')
    assert.equal(myCard.value, 'King')
    assert.equal(myCard.rank, 13)
  });
});