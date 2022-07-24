// import cy from "cypress";
describe("Devbook application", () => {
  it("Visits the DevBook", () => {
    //? Acessar uma rota
    cy.visit("http://localhost:3000/");

    //? Pega o valor de um componente
    cy.get('h2[data-test="heading"]').contains("DevBook!");
  });
});
