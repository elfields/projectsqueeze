// set up test the run 'npm run test:e2e' in the terminal

describe("Login Journey", () => {
  it("should complete the reset password journey", () => {
    cy.viewport(1200, 1000);
    cy.visit("/");

    cy.contains("Login").click();

    //Account Login Screen
    cy.contains("Reset Password").click();

    //Password Reset Screen
    cy.contains("Send Email").click();

    // Email Sent Screen
    cy.contains("Close").click();

    //Reset Password Screen
    cy.contains("Reset").click();

    //Account Login Screen to close
    cy.get(".close-icon").click();
  });
});

