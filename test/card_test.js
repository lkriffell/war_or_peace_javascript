import Card from '../lib/card.js'
import assert from 'assert'

describe('Card', function() {
  it('can exist', function() { 
    var myCard = new Card('Hearts', 'King', 13)
    assert(myCard instanceof Card)
    assert(myCard.suit, 'Hearts')
    assert(myCard.value, 'King')
    assert(myCard.rank, 13)
  });
});