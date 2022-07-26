describe("Devbook application", () => {
  beforeEach(() => {
    const baseUrl = "http://localhost:3000/";
    cy.visit(baseUrl);
  });

  it("Visits the DevBook page", () => {
    //? Pega o valor de um componente
    cy.get('h2[data-test="heading"]').contains("DevBook!");
  });

  it("Show's a book list", () => {
    //? Verificar se existe algo renderizado
    cy.get('div[data-test="book-list"]').should("exist");

    cy.get("div.book-item").should((books) => {
      //? Ao menos 2 divs com a classe book-item
      expect(books).to.have.length(2);

      //? Pega os títulos dos livros
      const titles = [...books].map(
        (book) => book.querySelector("h5.titles").innerHTML
      );

      //? Espera que os títulos sejam iguais aos valores passados
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
      ]);
    });
  });
});
