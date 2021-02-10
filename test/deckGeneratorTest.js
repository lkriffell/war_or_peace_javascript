import DeckGenerator from '../src/deckGenerator.js'
import assert from 'assert'

describe('DeckGenerator', function() {
  const deckGen = new DeckGenerator()

  it('can exist', function() { 
    assert(deckGen instanceof DeckGenerator)
  });

  it('holds a shuffled deck split in half', function() {
    assert.equal(deckGen.deck1.length, 26)
    assert.equal(deckGen.deck2.length, 26)
  });
});