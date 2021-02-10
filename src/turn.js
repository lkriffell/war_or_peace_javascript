export default class Turn {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.cardPile = [];
  }

  turnType() {
    if (this.player1.deck.rankOfCardAt(0) != this.player2.deck.rankOfCardAt(0)) {
      return 'basic'
    } else if (this.player1.deck.cards.length > 2 && this.player2.deck.cards.length > 2 && this.player1.deck.rankOfCardAt(0) == this.player2.deck.rankOfCardAt(0) && this.player1.deck.rankOfCardAt(2) == this.player2.deck.rankOfCardAt(2)) {
      return 'MAD'
    } else if (this.player1.deck.rankOfCardAt(0) == this.player2.deck.rankOfCardAt(0)) {
      return 'war'
    }
  }

  winner() {
    let winner = this.player1
    if (this.turnType() == 'basic') {
      if (this.player2.deck.rankOfCardAt(0) > this.player1.deck.rankOfCardAt(0)) {
        winner = this.player2
      }
    } else if (this.turnType() == 'war') {
      if (this.player2.deck.rankOfCardAt(2) > this.player1.deck.rankOfCardAt(2)) {
        winner = this.player2
      }
    } else if (this.turnType() == 'MAD') {
      winner = 'No Winner X('
    }
    return winner
  }

  pileCards() {
    let turn = this
    if (turn.turnType() == 'basic') {
      turn.cardPile.push(turn.player1.deck.cards[0])
      turn.cardPile.push(turn.player2.deck.cards[0])
      turn.player1.deck.removeCard()
      turn.player2.deck.removeCard()
    } else if (turn.turnType() == 'war') {
      [0,1,2].forEach(function(i) {
        if (turn.player1.deck.cards[i]) {
          turn.cardPile.push(turn.player1.deck.cards[i])
        }
        if (turn.player1.deck.cards[i]) {
          turn.cardPile.push(turn.player2.deck.cards[i])
        }
      });
      [0,1,2].forEach(function(i) {
        turn.player1.deck.removeCard()
        turn.player2.deck.removeCard()
      });
    } else if (turn.turnType() == 'MAD') {
      [0,1,2].forEach(function(i) {
        turn.player1.deck.removeCard()
        turn.player2.deck.removeCard()
      });
    }
  }

  awardSpoils(winner) {
    let turn = this
    turn.cardPile.forEach(function(card) {
      winner.deck.addCard(card)
    });
  }
}