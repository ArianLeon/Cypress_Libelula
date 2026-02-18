describe('Pastaza', () => {
it('Automatizacion', () => {

    //variables 
    const numeroCuenta = '651025';//Se usa en todos los campos de cuenta de origen 
    const url ='https://webfrontend80-dev.pastaza.nuvem.cloud/cacpeonline/login'//enlace web
    //credenciales
    const user ='USRPRUEBA206589'//usuario
    const password ='Libelula.2000'//contraseña
    // para pruebas
    const alias1 = 'test'//Todos los campos de alias
    const alias2 ='prueba'//segundo alias 
    const observaciones = 'test'//todos los campos de observaciones
    const celular = '0998090335'//Todos los campos de celular 
    const cedula = '0958684755'//Todos los campos de cedula
    const valor = '1'//Todos los campos que requieran un valor monetario

    //Modulo de trasferencia - transferencia a otra entidad 
    const cuentaCreada = '1234567890'//Cuenta creada, se utiliza tambien en los campos que requieran crear un numero de cuenta
    const bancoTrans = 'BANCO PRODUBANCO'//opcion de banco elegida
    const tipoCuenta = 'CTA. AHORROS'//Opcion de tipo de cuenta elegida 

    //modulo de trasferencia - transferencias entre socios 
    const cuentaDestino1 = 'PRUEBAS QA'//opcion elegida 

    //Modulo pago tarjeta
    const bancoTarjeta = 'BANCO PRODUBANCO'
    
    //Modulo de servicios --opciones nuevas creadas  
    const servicioAgua = 'ETAPA-AGUA'//Agua
    const referenciaAgua = '1234567'
    const servicioLuz = 'CENTRO SUR - CONEXION DIRECTA'//Luz
    const cuentaLuz = '1234567'
    const servicioTelefono = 'ETAPA'//Telefono
    const servicioIess = 'IESS (DIVPREHI)-PAGO CREDITOS HIPOTECARIOS (Empleador)'//IEss
    const cuentaIess = '987654321'
    const servicioSri = 'MATRICULACION AJUSTE'//SRI
    const placaSri = 'ABC1234'
    const servicioCatalogo = 'AVON'//Catalogo
    const servicioCompras = 'AMAZON PRIME'//Compras
    const servicioMunicipio = 'AMBATO'//Municipio
    const servicioPlanes = 'ETAPA PLANES'//Planes
    const cuentaPlanes = '123123'
    const servicioTransito = 'ANT - CITACIONES'//Transito
    const servicioTarjeta = 'ETAFASHION PLANETA'//Tarjeta
    const servicioConsejo = 'PENSION ALIMENTICIA - PERSONA'//Consejo
    const cuentaConsejo ='1701-12345'
    const cuotaConsejo = '0'
    const serviciosVarios ='PAGOEFECTIVO'//Servicios varios

    //Modulo de recargas 
    const servicioNuevo = 'MOVISTAR'
    const valorRecarga = '5.00'
    const opcionRecarga = '+ Ingresar nuevo número a recargar'
    //Opcion de servicio con numero ya registrado
    const servicioRegistrado = 'MOVISTAR'

    //Modulo de cuentas favoritas

    const institucionF = 'BANCO PRODUBANCO RUC: 1790368718001'//trasferencias internas
    const servicioCFR = 'MOVISTAR'//opcion para recargas de celulares
    //opciones para pagos de servicios 
    const ServicioPagoServicios1 = 'PLANES' 
    const ServicioPagoServicios2 = 'MOVISTAR'

    //Modulo de manejo de montos 
    const cupo1 = '16000'
    const cupo2 = '40000'
    const cupo3 = '1'
    const cupo4 = '1'

     // Evita que el test falle por errores internos de la aplicación web
    Cypress.on('uncaught:exception', () => false)

    cy.visit(url) // url del sitio

    //Usuario
    cy.get('[name="identificacion"]')
    .should('be.visible')
    .type(user)

    //Contraseña
    cy.get('[name="password"]')
    .should('be.visible')
    .type(password)

    //Da click al boton de login
    cy.get('#btn-login').click()

    //Hace una pausa para enviar el token 
    cy.pause()

    //Modulo de trasferencia
    cy.get('#mm-1 > .mm-navbar > .mm-title').click({force: true})
    cy.wait(2000)
    
    //transferencias entre socios --Cuenta creada
    cy.get('#button_transfinternas > a').click({force: true})
    cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranNumCuentaDestino"]').select(cuentaDestino1)
        cy.get('[name="tranValor"]').type(valor)
        cy.get('[name="tranObservaciones"]').type(observaciones)
        cy.get('.col-12.text-center > #btn-transferencia').click()
        cy.pause()
        

    //transferencia a otra entidad -- crear nueva cuenta
    cy.get('#button_transfexternas > a').click({force: true})
    cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranNumCuentaDestino"]').select('+ Ingresar nueva cuenta destino')
        cy.get('[name="cueAlias"]').type(alias1)
        cy.get('#select2-insCodigo-container').click()
        cy.get('.select2-search__field').type(`${bancoTrans}{enter}`)
        cy.get('[name="cueNombre"]').type(alias1)
        cy.get('#tipoIdentificacionSelect').select('CÉDULA')
        cy.get('[name="cueIdentificacion"]').type(cedula)
        cy.get('[name="cueNumero"]').type(cuentaCreada)
        cy.get('[name="cueTipo"]').select(tipoCuenta)
        cy.get('[name="tranValor"]').type(valor)
        cy.get('[name="tranObservaciones"]').type(observaciones)
        cy.get('#btn-transferencia-modal').click()
        cy.pause()      


    //Modulo pago tarjeta   --Ingresar nueva tarjeta 
    cy.get('#mm-1 > .mm-listview > #button_pagotarjeta > a').click({force: true})
    cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranNumCuentaDestino"]').select('+ Ingresar nueva tarjeta')
        cy.get('[name="cueAlias"]').type('test')
        cy.get('#select2-insCodigo-container').click()
        cy.get('.select2-search__field').type(`${bancoTarjeta}{enter}`)
        cy.get('[name="cueNumero"]').type(cuentaCreada)
        cy.get('[name="cueNombre"]').type(alias1)
        cy.get('#tipoIdentificacionSelect').select('CÉDULA')
        cy.get('[name="cueIdentificacion"]').type(cedula)
        cy.get('[name="tranValor"]').type(valor)
        cy.get('[name="tranObservaciones"]').type(observaciones)
        cy.get('#btn-transferencia').click()
        cy.pause()

    
                        //Modulo de servicios
        cy.get('#mm-2 > .mm-navbar > .mm-title').click({force: true})
        cy.wait(2000)
        
        //Agua -Cuenta registrada
        cy.get('#mm-2 > .mm-listview > :nth-child(1) > a').click({force: true}) 
        cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranReferenciaConsultar"]').select(2)//Selecciona la opcion(2)
        cy.get('#btn-consultar-valor').click()
        cy.pause()      

        //Agua -Nueva cuenta
        cy.get('#mm-2 > .mm-listview > :nth-child(1) > a').click({force: true}) 
        cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranReferenciaConsultar"]').select(1)//selecciona la opcion (1)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-search__field').type(`${servicioAgua}{enter}`)
        cy.get('[name="cueAliasReferencia"]').type(alias2)
        cy.get('[name="cueNumeroReferencia"]').type(referenciaAgua)
        cy.get('#btn-consultar-valor').click()
        cy.pause()      


    //Luz - cuenta nueva 
    cy.get('#mm-2 > .mm-listview > :nth-child(2) > a').click({force: true})
    cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranReferenciaConsultar"]').select(1)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-search__field').type(`${servicioLuz}{enter}`)
        cy.get('[name="cueAliasReferencia"]').type(alias1)
        cy.get('[name="cueNumeroReferencia"]').type(cuentaLuz)
        cy.get('#btn-consultar-valor').click()
        cy.pause()


    //Telefono - cuenta nueva
    cy.get('#mm-2 > .mm-listview > :nth-child(3) > a').click({force: true})
    cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranReferenciaConsultar"]').select(1)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-search__field').type(`${servicioTelefono}{enter}`)
        cy.get('[name="cueAliasReferencia"]').type(alias1)
        cy.get('[name="cueNumeroReferencia"]').type(celular)
        cy.get('#btn-consultar-valor').click()
        cy.pause()


    //IESS - Cuenta nueva 
    cy.get('#mm-2 > .mm-listview > :nth-child(4) > a').click({force: true})
    cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranReferenciaConsultar"]').select(1)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-search__field').type(`${servicioIess}{enter}`)
        cy.get('[name="cueAliasReferencia"]').type(alias1)
        cy.get('[name="cueNumeroReferencia"]').type(cuentaIess)
        cy.get('#btn-consultar-valor').click()
        cy.pause()


    //SRI - Cuenta nueva
    cy.get('#mm-2 > .mm-listview > :nth-child(5) > a').click({force: true})
    cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranReferenciaConsultar"]').select(1)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-search__field').type(`${servicioSri}{enter}`)
        cy.get('[name="cueAliasReferencia"]').type(alias1)
        cy.get('[name="cueNumeroReferencia"]').type(placaSri)
        cy.get('#btn-consultar-valor').click()
        cy.pause()


    //Catalogo - Cuenta nueva 
    cy.get('#mm-2 > .mm-listview > :nth-child(6) > a').click({force: true})
    cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranReferenciaConsultar"]').select(1)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-search__field').type(`${servicioCatalogo}{enter}`)
        cy.get('[name="cueAliasReferencia"]').type(alias1)
        cy.get('[name="cueNumeroReferencia"]').type(cedula)
        cy.get('#btn-consultar-valor').click()
        cy.pause()


    //Compras - cuneta nueva 
    cy.get('#mm-2 > .mm-listview > :nth-child(7) > a').click({force: true})
    cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('[name="tranReferenciaConsultar"]').select(1)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-search__field').type(`${servicioCompras}{enter}`)
        cy.get('[name="cueAliasReferencia"]').type(alias1)
        cy.get('[name="cueNumeroReferencia"]').type(celular)
        cy.get('#btn-consultar-valor').click()
        cy.pause()


    //Municipio - cuenta nueva 
    cy.get('#mm-2 > .mm-listview > :nth-child(8) > a').click({force: true})
    cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
    cy.get('[name="tranReferenciaConsultar"]').select(1)
    cy.get('#select2-serCodigo-container').click()
    cy.get('.select2-search__field').type(`${servicioMunicipio}{enter}`)
    cy.get('[name="cueAliasReferencia"]').type(alias1)
    cy.get('[name="cueNumeroReferencia"]').type(alias2)
    cy.get('#btn-consultar-valor').click()
    cy.pause()


    //Planes - cuenta nueva 
    cy.get('#mm-2 > .mm-listview > :nth-child(9) > a').click({force: true})
    cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
    cy.get('[name="tranReferenciaConsultar"]').select(1)
    cy.get('#select2-serCodigo-container').click()
    cy.get('.select2-search__field').type(`${servicioPlanes}{enter}`)
    cy.get('[name="cueAliasReferencia"]').type(alias1)
    cy.get('[name="cueNumeroReferencia"]').type(cuentaPlanes)
    cy.get('#btn-consultar-valor').click()
    cy.pause()


    //Transito - Cuenta nueva 
    cy.get('#mm-2 > .mm-listview > :nth-child(10) > a').click({force: true})
    cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
    cy.get('[name="tranReferenciaConsultar"]').select(1)
    cy.get('#select2-serCodigo-container').click()
    cy.get('.select2-search__field').type(`${servicioTransito}{enter}`)
    cy.get('[name="cueAliasReferencia"]').type(alias1)
    cy.get('[name="cueNumeroReferencia"]').type(cedula)
    cy.get('#btn-consultar-valor').click()
    cy.pause()


    //Tarjeta - Cuenta nueva 
    cy.get(':nth-child(11) > a').click({force: true})
    cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
    cy.get('[name="tranReferenciaConsultar"]').select(1)
    cy.get('#select2-serCodigo-container').click()
    cy.get('.select2-search__field').type(`${servicioTarjeta}{enter}`)
    cy.get('[name="cueAliasReferencia"]').type(alias1)
    cy.get('[name="cueNumeroReferencia"]').type(cedula)
    cy.get('#btn-consultar-valor').click()
    cy.pause()

    
    //Consejo - judicatura - Cuenta nuueva
    cy.get(':nth-child(12) > a').click({force: true})
    cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
    cy.get('[name="tranReferenciaConsultar"]').select(1)
    cy.get('#select2-serCodigo-container').click()
    cy.get('.select2-search__field').type(`${servicioConsejo}{enter}`)
    cy.get('[name="cueAliasReferencia"]').type(alias1)
    cy.get('[name="referencia"]').type(cuentaConsejo)
    cy.get('[name="num_cuotas"]').type(cuotaConsejo)
    cy.get('#btn-consultar-valor').click()
    cy.pause()

    //Servicios-varios - cuenta nueva 
    cy.contains('SERVICIOS-VARIOS').click({force: true})
    cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
    cy.get('[name="tranReferenciaConsultar"]').select(1)
    cy.get('#select2-serCodigo-container').click()
    cy.get('.select2-search__field').type(`${serviciosVarios}{enter}`)
    cy.get('[name="cueAliasReferencia"]').type(alias1)
    cy.get('[name="cueNumeroReferencia"]').type(cedula)
    cy.get('#btn-consultar-valor').click()
    cy.pause()

    //Modulo de recargas - Nuevo
        cy.get('#button_recargas > a > :nth-child(1) > .centrado-textos-menu').click({force: true})
        cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-search__field').type(`${servicioNuevo}{enter}`)
        cy.get('[name="tranNumCuentaDestino"]').select(opcionRecarga);
        cy.get('[name="cueAlias"]').type(alias2)
        cy.get('[name="cueNumero"]').type(celular)
        cy.get('[name="ddTranValor"]').select(valorRecarga);
        cy.get('#btn-transferencia').click()
        cy.pause()
        
        //Modulo de recargas - numero registrado 
        cy.get('#button_recargas > a > :nth-child(1) > .centrado-textos-menu').click({force: true})
        cy.wait(2000)
        cy.get('[name="tranNumCuentaOrigen"]').select(numeroCuenta)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-search__field').type(`${servicioRegistrado}{enter}`)
        cy.get('[name="tranNumCuentaDestino"]').select(2);
        cy.get('[name="ddTranValor"]').select(valorRecarga);
        cy.get('#btn-transferencia').click()
        cy.pause()

                                //Modulo de cuentas favoritas -Registrar nuevas cuentas 

        //transferecias internas 
        cy.get('#mm-0 > .mm-listview > :nth-child(6) > a').click();
        cy.wait(2000);
        cy.get('select').first().select('Beneficiario de transferencias internas');
        cy.wait(5000);
        cy.get('.div-campo > [name="cueAlias"]').clear().type(alias2);
        cy.get('[name="cueNumero"]').clear().type(cuentaCreada);
        cy.get('#btn-guardar-cuenta').click();
        cy.pause();

        // transferencias interbancarias 
        cy.get('#mm-0 > .mm-listview > :nth-child(6) > a').click();
        cy.wait(2000);
        cy.get('[name="nuevaCuentaFav"]').select('Beneficiario de transferencias interbancarias');
        cy.wait(5000);
        cy.get('.div-campo > [name="cueAlias"]').clear().type(alias2);
        cy.get('#select2-insCodigo-container').click();
        cy.get('.select2-search__field').type(`${institucionF}{enter}`)
        cy.get('[name="cueNombre"]').clear().type(alias1);
        cy.get('#tipoIdentificacionSelect').select('CÉDULA');
        cy.get('[name="cueIdentificacion"]').clear().type(cedula);
        cy.get('[name="cueTipo"]').select(tipoCuenta);
        cy.get('[name="cueNumero"]').clear().type(cuentaCreada);
        cy.get('#btn-guardar-cuenta').click();
        cy.pause();

        
        // para recargas
        cy.get('#mm-0 > .mm-listview > :nth-child(6) > a').click();
        cy.wait(2000);
        cy.get('[name="nuevaCuentaFav"]').select('Beneficiario para recarga a celulares');
        cy.wait(5000);
        cy.get('#select2-serCodigo-container').click();
        cy.get('.select2-search__field').type(`${servicioCFR}{enter}`)
        cy.get('.div-campo > [name="cueAlias"]').clear().type(alias2);
        cy.get('[name="cueNumero"]').clear().type(celular);
        cy.get('#btn-guardar-cuenta').click();
        cy.pause();

        //Planes
        cy.get('#mm-0 > .mm-listview > :nth-child(6) > a').click();
        cy.wait(2000);
        cy.get('[name="nuevaCuentaFav"]').select('Beneficiario para pago de servicios');
        cy.wait(5000)
        cy.get('#select2-serTipoCodigo-container').click();
        cy.get('.select2-search__field').type(`${ServicioPagoServicios1}{enter}`)
        cy.wait(3000);
        cy.get('#select2-serCodigo-container').click();
        cy.get('.select2-search__field').type(`${ServicioPagoServicios2}{enter}`)
        cy.get('[name="cueAliasReferencia"]').clear().type(alias2);
        cy.get('[name="cueNumeroReferencia"]').clear().type(celular);
        cy.get('#btn-consultar-valor').click();
        cy.pause();

        //Modulo de Dispositivos autorizados   -solo observa 
        cy.get('#mm-0 > .mm-listview > :nth-child(7) > a').click()

        //Modulo de Ver datos socio  - solo observa
        cy.get('#button_verusuario > a').click()   


        //Modulo de  Manejo de cupos 
        cy.get('#button_activacion > a').click();
        cy.wait(2000);
        cy.get('[name="tranconsultacupos"]').select(numeroCuenta);
        cy.get('[name="cupMontoAutorizado2"]').clear().type(cupo1);
        cy.get('#btn-guardar-cupos').click();
        cy.wait(3000);
        cy.get('[name="cupMontoAutorizado3"]').clear().type(cupo2);
        cy.get('#btn-guardar-cupos').click();
        cy.wait(3000);
        cy.get('[name="cupMontoAutorizado2"]').clear().type(cupo3);
        cy.get('[name="cupMontoAutorizado3"]').clear().type(cupo4);
        cy.get('#btn-guardar-cupos').click();
        cy.pause() // pausa

        //Boton de cerrar sesion 
        cy.wait(5000)
        cy.get('#mm-0 > .mm-listview > :nth-child(10) > a').click()  
    })
})
