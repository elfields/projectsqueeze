// set up test the run 'npm run test:e2e' in the terminal

describe("Podcast Journey", () => {
  it("should complete the podcast journey and go to the listen page", () => {
    cy.viewport(1200, 1000);
    cy.visit("/");

    cy.contains("Squeeze");
    cy.contains("FIND YOUR PODCAST").click();

    //Genre modal actions
    cy.contains("Next").click();

    //Length modal actions
    cy.contains("Submit").click();

    //Recommendation modal

    cy.get("#recommendation-listen").click();

    cy.url().should("include", "/listen");
  });

  it("should go to the skip page after skipping all recommendations", () => {
    cy.viewport(1200, 1000);
    cy.visit("/");

    cy.contains("Squeeze");
    cy.contains("FIND YOUR PODCAST").click();

    //Genre modal actions
    cy.contains("Next").click();

    //Length modal actions
    cy.contains("Submit").click();

    //Recommendation modal
    cy.get("#recommendation-skip").click();
    cy.get("#recommendation-skip").click();
    cy.get("#recommendation-skip").click();

    cy.contains("You've squeezed all our recommendations out of this search:");
  });

  it("should select 3 genre buttons, toggle to any length and go to the listen page on first recommendation", () => {
    cy.viewport(1200, 1000);
    cy.visit("/");

    cy.contains("Squeeze");
    cy.contains("FIND YOUR PODCAST").click();

    //Genre modal actions
    cy.contains("Health").click();
    cy.contains("Music").click();
    cy.contains("Education").click();
    cy.contains("Next").click();

    //Length modal actions
    cy.contains("Any length").click();
    cy.contains("Submit").click();

    //Recommendation modal
    cy.get("#recommendation-skip").click();
    cy.get("#recommendation-listen").click();

    // Goes to listen page
    cy.url().should("include", "/listen");
  });
});

