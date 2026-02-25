describe('Coop_Chone', () => {
    //Direccion de la pagina 
    const url = 'https://chone-frontend-dev.coopchoneonline.com/'

    //Credenciales
    const user = ''
    const password = ''

    //Modulo de trasferencias
    const cuentaOrigen = '118727111'
    const valor = '1'
    const observaciones = 'test'
    const alias = 'test'
    const cuentaNueva = '1234567890'
    //Opcion de prueba modulo transferencia - interna 
    const opcion1 = 'RICKY TEST -'
    //Opcion de prueba modulo Transferencia - interbancarias 
    const opcion2 = 'TARJETA DIRECTO'
    const institucion1 = 'BANCO BOLIVARIANO'
    const tipoCuenta = 'CTA. CORRIENTE'
    const identificacion = 'CÉDULA'
    const cedula = '0958684755'
    //Modulo de recarga
    const celular = '0998090335'
    const servicio = 'MOVISTAR'

it('Automatizacion modulos', () => {

    Cypress.on('uncaught:exception', () => false)

    cy.visit(url)//Direccion de la pagina 
    
    cy.get('[name="identificacion"]').type(user)//Usuario

    cy.get('[name="password"]').type(password, { log: false })//contraseña
    
    cy.get('#btn-login').click()//Boton de iniciar sesion 

    cy.pause()//Pausa para ingresar el token 

                                //Modulo de trasferencias 

    //transferencias internas - cuenta registrada 
    cy.contains('Transferencias').click()
    cy.get('#dropdownTransferencia > ul > :nth-child(1) > a > .title').click()
    cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
    cy.get('[name="tranNumCuentaDestino"]').select(opcion1)
    cy.get('[name="tranValor"]').type(valor)
    cy.get('[name="tranObservaciones"]').type(observaciones)
    cy.get('.col-12.text-center > #btn-transferencia').click()
    cy.pause()

    //Transferencias internas - nueva cuenta 
    cy.contains('Transferencias').click()
    cy.get('#dropdownTransferencia > ul > :nth-child(1) > a > .title').click()
    cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
    cy.get('.nuevaCuentaBtn').click()
    cy.get('[name="cueAlias"]').type(alias)
    cy.get('[name="cueNumero"]').type(cuentaNueva)
    cy.get('[name="tranValor"]').type(valor)
    cy.get('[name="tranObservaciones"]').type(observaciones)
    cy.get('.col-12.text-center > #btn-transferencia').click()
    cy.pause()


    //Transferencia interbancarias - cuenta registrada
    cy.contains('Transferencias').click()
    cy.get('#dropdownTransferencia > ul > :nth-child(2) > a > .title').click()
    cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
    cy.get('[name="tranNumCuentaDestino"]').select(opcion2)
    cy.get('[name="tranValor"]').type(valor)
    cy.get('[name="tranObservaciones"]').type(observaciones)
    cy.get('.col-12.text-center > #btn-transferencia').click()
    cy.pause()


    //Transferencia interbancarias - nueva cuenta
    cy.contains('Transferencias').click()
    cy.get('#dropdownTransferencia > ul > :nth-child(2) > a > .title').click()
    cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
    cy.get('.nuevaCuentaBtn').click()
    cy.get('[name="cueAlias"]').type(alias)
    cy.get('.select2-selection--single').click()
    cy.get('.select2-results__option').contains(institucion1).click()
    cy.get('[name="cueTipo"]').select(tipoCuenta)
    cy.get('[name="cueNumero"]').type(cuentaNueva)
    cy.get('#tipoIdentificacionSelect').select(identificacion)
    cy.get('[name="cueIdentificacion"]').type(cedula)
    cy.get('[name="tranValor"]').type(valor)
    cy.get('[name="tranObservaciones"]').type(observaciones)
    cy.get('#btn-transferencia').click()
    cy.pause()



/*
    //Modulo de pagos - No funciona el modulo 

    cy.contains('Pagos').click()


        //Agua
        cy.contains('Agua').click()


        //Luz
        cy.contains('Pagos').click()
        cy.contains('Luz').click()
    

        //Telefono
        cy.contains('Pagos').click()
        cy.contains('Teléfono').click()
        

        //SRI
        cy.contains('Pagos').click()
        cy.contains('Sri').click()


        //IESS
        cy.contains('Pagos').click()
        cy.get('#dropdownPagos > ul > :nth-child(5) > a > .title').click()
        


        //Catalogo
        cy.contains('Pagos').click()
        cy.contains('Catálogo').click()
        

        //compras 
        cy.contains('Pagos').click()
        cy.contains('Compras').click()
    

        //municipio 
        cy.contains('Pagos').click()
        cy.contains('Municipio').click()
        

        //planes
        cy.contains('Pagos').click()
        cy.contains('Planes').click()
    


        //transito
        cy.contains('Pagos').click()
        cy.contains('Tránsito').click()
        

        //tarjeta
        cy.contains('Pagos').click()
        cy.contains('Tarjeta').click()//No tiene opciones

        //servicios varios
        cy.contains('Pagos').click()
        cy.get('#dropdownPagos > ul > :nth-child(12) > a > .title').click()
*/


    //Modulo de recargas  -No funciona el modulo, no permite hacer el pago 
    cy.get('.cont-sidebar > :nth-child(1) > :nth-child(4) > a > .title').click()
    cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
    cy.get('#select2-serCodigo-container').click()
    cy.get('.select2-search__field').type(`${servicio}{enter}`)
    cy.get('.nuevaCuentaBtn').click()
    cy.get('[name="cueAlias"]').type(alias)
    cy.get('[name="cueNumero"]').type(celular)
    cy.get('[name="inputValorRecarga"]').type(valor)
    cy.get('#btn-transferencia').click()
    cy.pause()


    //Modulo de pago de creditos - No funciona el modulo 
    cy.get('.cont-sidebar > :nth-child(1) > :nth-child(5) > a > .title').click()

    //Modulo de perfil 
    cy.get('.cont-sidebar > :nth-child(1) > :nth-child(7) > a > .title').click()

    //Modulo de dispositivos autorizados
    cy.get('.cont-sidebar > :nth-child(1) > :nth-child(8) > a > .title').click()

    //Modulo de Manejo de cupos - No funciona el modulo 
    cy.get('.cont-sidebar > :nth-child(1) > :nth-child(9) > a > .title').click()

    //Modulo de cuentas favoritas 
    cy.get('.cont-sidebar > :nth-child(1) > :nth-child(10) > a > .title').click()


    //boton de cerrar sesion
    //cy.get('.cont-sidebar > :nth-child(1) > :nth-child(12) > a > .title').click()

})

})
