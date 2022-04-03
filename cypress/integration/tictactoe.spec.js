/// <reference types="cypress" />

const Player1Name = "Hello";
const Player2Name = "World";
const XEmoji = "❌"
const OEmoji = "⭕"
const WinEmoji = "🎉"

describe("#️⃣ Tic Tac Toe", () => {
  before(() => {
    cy.exec("npm run prisma:reset");
  })

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('should not have any games in games list', () => {
    cy.get('[data-testid=homeGrid] > a').should('have.attr', 'href')
    cy.get('[data-testid=homeGrid] > a').click()
    cy.intercept("POST", "/api/list").as("gameList");
    cy.get('[data-testid=gameRow]').should('not.exist');
  })

  it('should play a game where Player 1 wins', () => {
    cy.get('[data-testid=yourNameInput]').type(`${Player1Name}`);
    cy.get('[data-testid=opponentNameInput]').type(`${Player2Name}`);
    cy.get('[data-testid=newGameButton]').click()
    cy.intercept("POST", "/api/new").as("newGame");
    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(0).click()
    cy.get('[data-testid=ticCell]').eq(0).should('have.text', XEmoji)
    
    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(1).click()
    cy.get('[data-testid=ticCell]').eq(1).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(2).click()
    cy.get('[data-testid=ticCell]').eq(2).should('have.text', XEmoji)

    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(3).click()
    cy.get('[data-testid=ticCell]').eq(3).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(4).click()
    cy.get('[data-testid=ticCell]').eq(4).should('have.text', XEmoji)

    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(5).click()
    cy.get('[data-testid=ticCell]').eq(5).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(7).click()
    cy.get('[data-testid=ticCell]').eq(7).should('have.text', XEmoji)

    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(6).click()
    cy.get('[data-testid=ticCell]').eq(6).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(8).click()
    cy.get('[data-testid=ticCell]').eq(8).should('have.text', XEmoji)

    cy.get('[data-testid=playerName]').should('not.exist')
    // cy.get('[data-testid=winnerAnnouncement]').should('have.text', XEmoji + " " + Player1Name + " Won")
  })

  it('should play a game where Player 2 wins', () => {
    cy.get('[data-testid=yourNameInput]').type(`${Player1Name}`);
    cy.get('[data-testid=opponentNameInput]').type(`${Player2Name}`);
    cy.get('[data-testid=newGameButton]').click()
    cy.intercept("POST", "/api/new").as("newGame");
    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(1).click()
    cy.get('[data-testid=ticCell]').eq(1).should('have.text', XEmoji)
    
    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(0).click()
    cy.get('[data-testid=ticCell]').eq(0).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(3).click()
    cy.get('[data-testid=ticCell]').eq(3).should('have.text', XEmoji)

    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(2).click()
    cy.get('[data-testid=ticCell]').eq(2).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(5).click()
    cy.get('[data-testid=ticCell]').eq(5).should('have.text', XEmoji)

    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(4).click()
    cy.get('[data-testid=ticCell]').eq(4).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(6).click()
    cy.get('[data-testid=ticCell]').eq(6).should('have.text', XEmoji)

    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(8).click()
    cy.get('[data-testid=ticCell]').eq(8).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('not.exist')
    // cy.get('[data-testid=winnerAnnouncement]').should('have.text', XEmoji + " " + Player1Name + " Won")
  })
  
  it('should play a game where Players draw', () => {
    cy.get('[data-testid=yourNameInput]').type(`${Player1Name}`);
    cy.get('[data-testid=opponentNameInput]').type(`${Player2Name}`);
    cy.get('[data-testid=newGameButton]').click()
    cy.intercept("POST", "/api/new").as("newGame");
    
    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(6).click()
    cy.get('[data-testid=ticCell]').eq(6).should('have.text', XEmoji)
    
    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(0).click()
    cy.get('[data-testid=ticCell]').eq(0).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(3).click()
    cy.get('[data-testid=ticCell]').eq(3).should('have.text', XEmoji)

    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(2).click()
    cy.get('[data-testid=ticCell]').eq(2).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(1).click()
    cy.get('[data-testid=ticCell]').eq(1).should('have.text', XEmoji)

    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(4).click()
    cy.get('[data-testid=ticCell]').eq(4).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(5).click()
    cy.get('[data-testid=ticCell]').eq(5).should('have.text', XEmoji)

    cy.get('[data-testid=playerName]').should('have.text', OEmoji + " " + Player2Name + " ")
    cy.get('[data-testid=ticCell]').eq(7).click()
    cy.get('[data-testid=ticCell]').eq(7).should('have.text', OEmoji)

    cy.get('[data-testid=playerName]').should('have.text', XEmoji + " " + Player1Name + " ")
    cy.get('[data-testid=ticCell]').eq(8).click()
    cy.get('[data-testid=ticCell]').eq(8).should('have.text', XEmoji)

    // cy.get('[data-testid=playerName]').should('not.exist')
    // cy.get('[data-testid=winnerAnnouncement]').should('have.text', "🤝 Draw")
  })

  it('should display games in games list', () => {
    cy.get('[data-testid=homeGrid] > a').should('have.attr', 'href')
    cy.get('[data-testid=homeGrid] > a').click()
    cy.intercept("POST", "/api/list").as("gameList");

    cy.get('[data-testid=gameRow]').eq(0).should('exist');
    cy.get('[data-testid=gameRow]').eq(1).should('exist');
    cy.get('[data-testid=gameRow]').eq(2).should('exist');

    cy.get('[data-testid=player1Info]').eq(0).should('have.text', XEmoji + " " + Player1Name + " " + WinEmoji);
    cy.get('[data-testid=player2Info]').eq(0).should('have.text', OEmoji + " " + Player2Name + " ");

    cy.get('[data-testid=player1Info]').eq(1).should('have.text', XEmoji + " " + Player1Name + " ");
    cy.get('[data-testid=player2Info]').eq(1).should('have.text', OEmoji + " " + Player2Name + " " + WinEmoji);

    cy.get('[data-testid=player1Info]').eq(2).should('have.text', XEmoji + " " + Player1Name + " ");
    cy.get('[data-testid=player2Info]').eq(2).should('have.text', OEmoji + " " + Player2Name + " ");

    // cy.get('[data-testid=boardContainer]').eq(0).get('[data-testid=ticCell]').eq(0).should('have.text', XEmoji)
    // cy.get('[data-testid=boardContainer]').eq(0).get('[data-testid=ticCell]').eq(1).should('have.text', OEmoji)
    // cy.get('[data-testid=boardContainer]').eq(0).get('[data-testid=ticCell]').eq(2).should('have.text', XEmoji)
    // cy.get('[data-testid=boardContainer]').eq(0).get('[data-testid=ticCell]').eq(3).should('have.text', OEmoji)
    // cy.get('[data-testid=boardContainer]').eq(0).get('[data-testid=ticCell]').eq(4).should('have.text', XEmoji)
    // cy.get('[data-testid=boardContainer]').eq(0).get('[data-testid=ticCell]').eq(5).should('have.text', OEmoji)
    // cy.get('[data-testid=boardContainer]').eq(0).get('[data-testid=ticCell]').eq(6).should('have.text', OEmoji)
    // cy.get('[data-testid=boardContainer]').eq(0).get('[data-testid=ticCell]').eq(7).should('have.text', XEmoji)
    // cy.get('[data-testid=boardContainer]').eq(0).get('[data-testid=ticCell]').eq(8).should('have.text', XEmoji)

    // cy.get('[data-testid=boardContainer]').eq(1).get('[data-testid=ticCell]').eq(0).should('have.text', OEmoji)
    // cy.get('[data-testid=boardContainer]').eq(1).get('[data-testid=ticCell]').eq(1).should('have.text', XEmoji)
    // cy.get('[data-testid=boardContainer]').eq(1).get('[data-testid=ticCell]').eq(2).should('have.text', OEmoji)
    // cy.get('[data-testid=boardContainer]').eq(1).get('[data-testid=ticCell]').eq(3).should('have.text', XEmoji)
    // cy.get('[data-testid=boardContainer]').eq(1).get('[data-testid=ticCell]').eq(4).should('have.text', OEmoji)
    // cy.get('[data-testid=boardContainer]').eq(1).get('[data-testid=ticCell]').eq(5).should('have.text', XEmoji)
    // cy.get('[data-testid=boardContainer]').eq(1).get('[data-testid=ticCell]').eq(6).should('have.text', XEmoji)
    // cy.get('[data-testid=boardContainer]').eq(1).get('[data-testid=ticCell]').eq(7).should('have.text', "")
    // cy.get('[data-testid=boardContainer]').eq(1).get('[data-testid=ticCell]').eq(8).should('have.text', OEmoji)

  })
});
