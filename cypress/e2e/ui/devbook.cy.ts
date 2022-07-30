import { api } from "./../../../src/services/api";

describe("Devbook application", () => {
  before(async () => {
    return await api
      .delete("books?_cleanup=true")
      .catch((err: any) => err);
  });

  beforeEach(async () => {
    const books = [
      { id: 1, name: "Refactoring" },
      { id: 2, name: "Domain-driven design" },
      { id: 3, name: "Test-driven design" },
    ];

    return Promise.all(
      books.map((book) =>
        api.post("books", book, {
          headers: { "content-type": "application/json" },
        })
      )
    );
  });

  afterEach(async () => {
    return await api
      .delete("books?_cleanup=true")
      .catch((err: any) => err);
  });

  it("Visits the DevBook page", () => {
    const baseUrl = "http://localhost:3000/";
    cy.visit(baseUrl);

    //? Pega o valor de um componente
    cy.get('h2[data-test="heading"]').contains("DevBook!");
  });

  it("Show's a book list", () => {
    const baseUrl = "http://localhost:3000/";
    cy.visit(baseUrl);

    //? Verificar se existe algo renderizado
    cy.get('div[data-test="book-list"]').should("exist");

    cy.get("div.book-item").should((books) => {
      //? Ao menos 2 divs com a classe book-item
      expect(books).to.have.length(3);

      //? Pega os títulos dos livros
      const titles = [...books].map(
        (book) => book.querySelector("h5.titles").innerHTML
      );

      //? Espera que os títulos sejam iguais aos valores passados
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Test-driven design",
      ]);
    });
  });
});
