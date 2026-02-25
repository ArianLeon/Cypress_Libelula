describe('AIG', () => {

    //variables 
    const url ='https://uat-aigecu-frontend-estatico.portalaig.com/principal'//Enlace de la pagina
    const email =''//email
    const password =''//Contraseña
    const polizas = ['152897']//Numeros de poliza  153189, 152982, 152967, 153458

    //correo para enviar Resumen de Cotización  
    const emailCotizacion = 'testlibelulasoft@gmail.com' 

    //Datos del contratante
    const emailContratante ='testlibelulasoft@gmail.com'
    const direccionContratante = 'VÍA A MARIANAS 0 Y QUITUS 955 CONJUNTO LA FLORENCIA CASA 15 MZ'
    const celularContratante ='0992574062'
    // wait = son los tiempos de espera, estan para esperar que la interfaz cargue correctamente antes de hacer la ejecucion
    //pause = son pausas que se hacen para verificacion manual 

    it('Flujo de renovaciones', () => {

        // Evita que el test falle por errores internos de la aplicación web
        Cypress.on('uncaught:exception', () => false) 

        //Enlace de la pagina 
        cy.visit(url)


        //Email
        cy.get('[name="Inputcorreo"]')
            .should('exist')
            .should('be.visible')
            .type(email)

        //Boton de ingresar 
        cy.get('.bg-gradient-theme-left')
            .should('exist') 
            .should('be.visible')
            .click()

            cy.wait(4000) //Espera

        // Contraseña
        cy.get('[name="Inputcontrasena"]')
            .should('exist')
            .should('be.visible')
            .type(password, { log: false })

        //boton de ingresar
        cy.get('.bg-gradient-theme-left')
            .should('exist')
            .click()

        cy.wait(5000)

        
            
        //Ingresa al apartado de ver renovaciones
        cy.contains('Ver Renovaciones')
            .should('be.visible')
            .click()


        cy.wait(5000)

        // Ingresa el numero de poliza 
        polizas.forEach((poliza) => {
        cy.get(':nth-child(12) > .p-inputtext')
        .should('exist')
        .scrollIntoView()
        .clear()
        .type(`${poliza}{enter}`, { force: true })

        cy.wait(5000)

        

        //Boton gestionar renovaciones/ continuar con la renovacion 
        cy.contains(/Gestionar renovación|Continuar/i)
        .should('be.visible')
        .click()

            
        cy.wait(12000) // espera de 12 segundo, para que cargue bien la interfaz 

        // Boton Gestionar revocion dentro de resumen de renovacio. si existe da click si no existe sigue el flujo
        cy.get('body').then(($body) => {
        if ($body.find(':nth-child(6) > .col-12 > .btn').length > 0) {
        cy.get(':nth-child(6) > .col-12 > .btn')
        .should('be.visible')
        .click()

        cy.wait(2000)


        //Preciona confirmar en el modal  
        cy.get('.modal-footer > .btn-primary')
        .should('be.visible')
        .click()
    }
})
        //Boton editar en coberturas adicionales 
        cy.wait(9000) 
        cy.get('.div-align-rigth > .btn')
            .should('exist')
            .scrollIntoView()
            .click()

        cy.wait(7000)


    //Agrega las coverturas adicionales, si ya estan agregadas sigue a la siguiente instruccion
    cy.contains('Coberturas adicionales').scrollIntoView();
    cy.get(':nth-child(4) > [style*="width: 450px"]').then(($parent) => {
    const btn = $parent.find('span:contains("AGREGAR")');
    if (btn.length > 0) {
        cy.wrap(btn).click({ force: true });
        cy.wait(3000);
        cy.contains('button', 'ACTUALIZAR')
            .should('be.visible')
            .click();
            
            cy.wait(7000);
        }
        });

        cy.get(':nth-child(5) > [style*="width: 450px"] > div > span')
        .should('exist')
        .click({ force: true });

        cy.wait(6000);

        //Boton  Actualizar
        cy.get(':nth-child(2) > .btn')
            .should('be.visible')
            .click()

        cy.wait(6000)

        //Boton continuar
        cy.get(':nth-child(2) > .btn')
            .should('be.visible')
            .click()

        cy.wait(9000)
        
        // Descarga el pdf de la cotizacion 
        cy.contains('DESCARGAR COTIZACIÓN', { matchCase: false })
            .should('exist')
            .scrollIntoView()
            .click({ force: true })

            cy.wait(9000)

            //cy.pause() // --> pausa el proceso para visualizar el pdf 
        

        //Ingresa el correo para enviar la cotizacion
        cy.get('[name="correo"]')
            .should('be.visible')
            .type(emailCotizacion)
            cy.wait(3000)

        //Boton para enviar
        cy.get('.col-lg-4 > .btn') 
            .should('be.visible')
            .click()

        cy.wait(3000)

        //Boton Iniciar emision
        cy.get(':nth-child(2) > :nth-child(1) > .btn')
            .should('be.visible')
            .click()

        cy.wait(5000)
        
        // Remplazo de los datos del contratante
        cy.get('[name="correo"]')//Remplaza el correo del contratante
        .should('be.visible')
        .focus()
        .clear({ force: true }) 
        .type(emailContratante);
        cy.wait(3000)


        cy.get('[name="direccion1"]')//Remplaza la direccion del contratante
        .should('be.visible')
        .clear()
        .type(direccionContratante);
        cy.wait(3000)
    
        cy.get('[name="celular"]')//Remplaza el celular del contratante
        .should('be.visible')
        .clear()
        .type(celularContratante);

        cy.wait(7000)

        //Presiona checkbox 
        cy.get('input[type="checkbox"]')
        .check({ force: true }) 
        .should('be.checked');
        cy.wait(5000)

        //Boton continuar
        cy.contains('button', 'CONTINUAR')
        .click({ force: true });

        cy.wait(6000)
        
        

        
        //Boton de pago en linea
        cy.contains('button', 'Pago en línea')
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true });

        cy.wait(6000)
        //cy.pause()

    //paso del formulario se llena manualmente 

                                            //Se repite el flujo, pasa la siguiente poliza
        //Boton inicio 
        cy.contains('Inicio')
        .should('be.visible')
        .click()

        cy.wait(12000)

        // Boton ver renovaciones
        cy.contains('Ver Renovaciones')
        .should('be.visible')
        .click()

        cy.wait(9000)

    })

    })

})