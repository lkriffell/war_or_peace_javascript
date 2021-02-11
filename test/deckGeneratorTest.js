import DeckGenerator from '../src/deckGenerator.js'
import Deck from '../src/deck.js'
import assert from 'assert'

describe('DeckGenerator', function() {
  const deckGen = new DeckGenerator()

  it('can exist', function() { 
    assert(deckGen instanceof DeckGenerator)
  })

  it('holds a shuffled deck split in half', function() {
    assert.equal(deckGen.deck1.cards.length, 26)
    assert.equal(deckGen.deck2.cards.length, 26)
    assert(deckGen.deck1 instanceof Deck)
    assert(deckGen.deck2 instanceof Deck)
  })
})