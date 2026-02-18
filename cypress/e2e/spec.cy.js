// describe() → Agrupa pruebas relacionadas (por ejemplo: módulo Login)
describe('Login', () => {
  it('Iniciar sesión', () => {  // it()Es un caso de prueba individual
    
    cy.visit('https://webfrontend80-dev.pastaza.nuvem.cloud/cacpeonline/login')// cy.visit() → Abre la página web que vamos a probar
    
    cy.get('#usuario').type('mi_nombre')// cy.get()Busca un elemento en la página (por id en este caso) .type()Escribe texto dentro del campo

    cy.get('#password').type('12345')// Escribe la contraseña en el campo correspondiente  

    cy.get('#btn-login').click()//.click()Hace clic en el botón de iniciar sesión      

    // cy.contains()Busca un texto en la página
    // .should()Valida que algo sea verdadero
    // Aquí verificamos que aparezca "Bienvenido"
    cy.contains('Bienvenido').should('be.visible') 
    // Si el texto aparece, el test pasa.
    // Si no aparece, el test falla automáticamente.

    // .select(2); Se utiliza para elegir elementos de una lista desplegable, el numero en parentesis es la opcion de la lista.
    //Tambien se puede usar con el nombre exacto de la opcion: .select('+ Ingresar nuevo número a recargar');
  })
})
