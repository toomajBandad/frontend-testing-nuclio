describe("Register Form", () => {
  const randomEmail = `user${Date.now()}@example.com`;

  it("should register a new user successfully", () => {
    // TODO 03

    // Visitar la ruta /register
    cy.visit("/register");

    // Rellenar el formulario con un nombre, apellido, email y contraseña
    // Utilizando el email aleatorio definido arriba
    cy.get("input.firstName").type("toomaj");
    cy.get("input.lastName").type("bandad");
    cy.get("input.email").type(randomEmail);
    cy.get("input.password").type("Password123456");

    // Hacer clic en el botón de enviar
    cy.contains("Registrar").click();

    // Comprobar que la URL contiene /profile
    cy.url().should("include", "/profile");
  });

  it("should show an error message if the user is already registered", () => {
    // TODO 04

    // Visitar la ruta /register
    cy.visit("/register");

    // Rellenar el formulario con un nombre, apellido, email y contraseña
    // Utilizando el email aleatorio definido arriba OTRA VEZ
    cy.get("input.firstName").type("jack");
    cy.get("input.lastName").type("tailwind");
    cy.get("input.email").type(randomEmail);
    cy.get("input.password").type("Psaport123456");

    // Para registrar ese mismo usuario por segunda vez
    // Hacer clic en el botón de enviar
    cy.contains("Registrar").click();

    // Comprobar que se muestra el mensaje de error 'El usuario ya está registrado'
    cy.get("p.errorText").contains("El usuario ya está registrado");
  });
});
