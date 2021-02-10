export default class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  rankOfCardAt(index) {
    return this.cards[index].rank
  }
}