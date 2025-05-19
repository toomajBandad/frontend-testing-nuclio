describe("Login Form", () => {
  before(() => {
    cy.registerUser("john@example.com", "password123");
  });

  it("should navigate to profile after successful login", () => {
    // TODO 01

    // Visitar la ruta /login
    cy.visit("/login");

    // Rellenar el formulario con un email y contraseña
    cy.get("input.userEmail").type("john@example.com");
    cy.get("input.userPassword").type("password123");

    // Hacer clic en el botón de enviar
    cy.contains("Iniciar sesión").click();

    // Comprobar que la URL contiene /profile
    cy.url().should("include", "/profile");
  });

  it("should show an error message on login failure", () => {
    // TODO 02

    // Visitar la ruta /login
    cy.visit("/login");

    // Rellenar el formulario con un email y contraseña INCORRECTOS
    cy.get("input.userEmail").type("john@example.com");
    cy.get("input.userPassword").type("password123456");

    // Hacer clic en el botón de enviar
    cy.contains("Iniciar sesión").click();

    // Comprobar que se muestra el mensaje de error 'Credenciales inválidas'
    cy.get("p.errorText").contains("Credenciales inválidas");
  });
});
