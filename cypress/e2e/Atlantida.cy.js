describe('Atlantida', () => {

    //Variable
    const url ='https://pruebas.bdmvirtual.com/dmiroonline/login'
    //Credenciales
    const user =''
    const password= ''
    //Pruebas
    const cuentaOrigen ='60092376'// cuenta con la que se hacen los pagos 
    const celular = '0998090335' // En todos los campos donde se requiera la celular
    const cedula = '0958684755' // En todos los campos donde se requiera cedula
    const alias = 'test' //En todos los campos de alisa u observaciones
    const servicios = '+ Ingresar nueva referencia/suministro a Consultar' // Campos de servicios 
    const cuenta1 = '1234567890' //Campos que requieran cuenta 
    const transferecia = '+ Ingresar nueva cuenta destino' // Modulo de trasferencia 
    const valor = '1.00'// En todos los campos que requieran un valor 
    const placaAuto = 'ABC1234' //En todos los campos de placa de auto 
    const tipoCuenta = 'CTA. AHORROS' //En todos los campos de tipo de cuenta

    //Transferencia entre clientes - cuenta ya registrada 
    const cuenta2 = 'Cuenta de dam'

    // transferencia interbancarias - Cuenta ya registrada 
    const cuenta3 = 'Juan'

    //Modulo de pagos - opciones
    const agua = '12345 - henry Duchi - AGUA LATACUNGA - (AGUA)'

    const luz = 'CENTRO SUR'
    const codigoLuz = '1234567'

    const telefono = 'ETAPA'
    const iess = 'IESS'
    const sri = 'MATRICULACION VEHICULAR'

    const catalogo = 'YANBAL'
    const codigoCatalogo ='1234'

    const compras = 'AMAZON PRIME'
    const municipio = 'MUNICIPIO CUENCA - PATENTES'
    const planes = 'MOVISTAR'
    const transito = 'CTE'
    const serviciosVarios = 'ECUABET RECARGA'
    // Modulo de recargas
    const recarga = 'MOVISTAR'
    const opcionRecarga = '+ Ingresar nuevo número a recargar'
    //Modulo de inverciones
    const opcioni = 'MENSUAL (PAGO PERIODICO)'
    const monto = '200'
    const plazo = '31'
    const monto1 = '1'
    const plazo1 = '1'
    //Modulo cuentas favoritas - nueva cuenta para transferencias interbancarias
    const favorita1 = 'Beneficiario de transferencias internas'

    //Modulo cuentas favoritas - transferencias interbancarias
    const favorita2 ='Beneficiario de transferencias interbancarias'
    const favoritaInter ='BANCO PRODUBANCO'

    //Modulo cuentas favoritas - recarga a celulares
    const favorita3 = 'Beneficiario para recarga a celulares'
    const favoritaCelulares = 'MOVISTAR'


    it('validaciones y modulos', () => {

        // Evita que el test falle por errores internos de la aplicación web
        Cypress.on('uncaught:exception', () => false)

        cy.visit(url)//Enlace de la pagina

        //Usuario
        cy.get('[name="identificacion"]')
            .should('be.visible')
            .type(user)

        //Contraseña
        cy.get('[name="password"]')
            .should('be.visible')
            .type(password, { log: false })//Para que no muestre la contraseña 


        cy.get('#btn-login').click()
        cy.pause()//Pausa para esperar el token
        
                                                            //Modulo transferencia

        //Transferencia entre clientes - cuenta ya registrada 
        cy.contains('Transferencias').click()
        cy.contains('Transferencias entre clientes').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranNumCuentaDestino"]').select(cuenta2)
        cy.get('[name="tranValor"]').type(valor)
        cy.get('[name="tranObservaciones"]').type(alias)
        cy.contains('Realizar Transferencia').click()
        cy.pause()


        //Transferencia entre clientes - nueva cuenta
        cy.contains('Transferencias').click()
        cy.contains('Transferencias entre clientes').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranNumCuentaDestino"]').select(transferecia)
        cy.get('[name="cueAlias"]').type('test') 
        cy.get('[name="cueNumero"]').type(cuenta1)      
        cy.get('[name="cueEmail"]').should('be.visible')     
        cy.get('[name="cueTelefono"]').should('be.visible')  
        cy.get('[name="tranValor"]').type(valor)
        cy.get('[name="tranObservaciones"]').type(alias)
        cy.contains('Realizar Transferencia').click()
        cy.pause()


        // transferencia interbancarias - Cuenta ya registrada 
        cy.contains('Transferencias').click()
        cy.contains('Transferencias interbancarias').click()
        cy.get('[name="tranNumCuentaOrigen"]').should('exist').select(cuentaOrigen)
        cy.get('[name="tranNumCuentaDestino"]').should('exist').select(cuenta3)
        cy.get('[name="tranValor"]').should('exist').type(valor)
        cy.get('[name="tranObservaciones"]').should('exist').type(alias)
        cy.get('.col-12.text-center > #btn-transferencia').should('exist').click()
        cy.pause()


        // transferencia interbancaria - nueva cuenta
        cy.contains('Transferencias').click()
        cy.contains('Transferencias interbancarias').click()
        cy.get('[name="tranNumCuentaOrigen"]').should('exist').select(cuentaOrigen)
        cy.get('[name="tranNumCuentaDestino"]').should('exist').select(transferecia)
        cy.get('[name="cueAlias"]').should('exist').type(alias)
        cy.get('[name="cueNombre"]').should('exist').type(cuenta3)
        cy.get('.select2-selection__placeholder').click({ force: true })
        cy.contains('C.PEQ.EMPRESA DE PASTAZA').click({ force: true })
        

        cy.get('#tipoIdentificacionSelect').should('exist').select('CÉDULA')
        cy.get('[name="cueIdentificacion"]').should('exist').type(cedula)
        cy.get('[name="cueTipo"]').should('exist').select(tipoCuenta)
        cy.get('[name="cueNumero"]').should('exist').type(cuenta1)
        cy.get('[name="cueEmail"]').should('exist')
        cy.get('[name="tranValor"]').should('exist').type(valor) 
        cy.get('[name="tranObservaciones"]').should('exist').type(alias)
        cy.get('.col-12.text-center > #btn-transferencia').should('exist').click()
        cy.pause()

                                                                        //MODULO DE PAGOS
        cy.contains('Pagos').click()


        //Agua
        cy.contains('Agua').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(agua)
        cy.get('#btn-consultar-valor').click()
        cy.pause()


        //Luz
        cy.contains('Pagos').click()
        cy.contains('Luz').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(servicios)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(luz).click()
        cy.get('[name="cueAliasReferencia"]').type(alias)
        cy.get('[name="cueNumeroReferencia"]').type(codigoLuz)
        cy.get('#btn-consultar-valor').click()
        cy.pause()

        //Telefono
        cy.contains('Pagos').click()
        cy.contains('Telefono').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(servicios)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(telefono).click()
        cy.get('[name="cueAliasReferencia"]').type(alias)
        cy.get('[name="cueNumeroReferencia"]').type(celular)
        cy.get('#btn-consultar-valor').click()
        cy.pause()

        //IESS
        cy.contains('Pagos').click()
        cy.contains('(iess)-obligaciones-patronales').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(servicios)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(iess).click()
        cy.get('[name="cueAliasReferencia"]').type(alias)
        cy.get('[name="cueNumeroReferencia"]').type(cedula)
        cy.get('#btn-consultar-valor').click()
        cy.pause()

        //SRI
        cy.contains('Pagos').click()
        cy.contains('Sri').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(servicios)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(sri).click()
        cy.get('[name="cueAliasReferencia"]').type(alias)
        cy.get('[name="cueNumeroReferencia"]').type(placaAuto)
        cy.get('#btn-consultar-valor').click()
        cy.pause()

        //Catalogo
        cy.contains('Pagos').click()
        cy.contains('Catalogo').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(servicios)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(catalogo).click()
        cy.get('[name="cueAliasReferencia"]').type(alias)
        cy.get('[name="cueNumeroReferencia"]').type(codigoCatalogo)
        cy.get('#btn-consultar-valor').click()
        cy.pause()

        //compras 
        cy.contains('Pagos').click()
        cy.contains('Compras').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(servicios)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(compras).click()
        cy.get('[name="cueAliasReferencia"]').type(alias)
        cy.get('[name="cueNumeroReferencia"]').type(celular)
        cy.get('#btn-consultar-valor').click()
        cy.pause()

        //municipio 
        cy.contains('Pagos').click()
        cy.contains('Municipio').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(servicios)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(municipio).click()
        cy.get('[name="cueAliasReferencia"]').type(alias)
        cy.get('[name="cueNumeroReferencia"]').type(cedula)
        cy.get('#btn-consultar-valor').click()
        cy.pause()

        //planes
        cy.contains('Pagos').click()
        cy.contains('Planes').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(servicios)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(planes).click()
        cy.get('[name="cueAliasReferencia"]').type(alias)
        cy.get('[name="cueNumeroReferencia"]').type(celular)
        cy.get('#btn-consultar-valor').click()
        cy.pause()

        //transito
        cy.contains('Pagos').click()
        cy.contains('Transito').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(servicios)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(transito).click()
        cy.get('[name="cueAliasReferencia"]').type(alias)
        cy.get('[name="cueNumeroReferencia"]').type(cedula)
        cy.get('#btn-consultar-valor').click()
        cy.pause()

        //tarjeta
        cy.contains('Pagos').click()
        cy.contains('Tarjeta').click()//No tiene opciones

        //servicios varios
        cy.contains('Pagos').click()
        cy.contains('Servicios-varios').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('[name="tranReferenciaConsultar"]').select(servicios)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(serviciosVarios).click()
        cy.get('[name="cueAliasReferencia"]').type(alias)
        cy.get('[name="cueNumeroReferencia"]').type(cedula)
        cy.get('#btn-consultar-valor').click()
        cy.pause()


        //Modulo de recargas
        cy.contains('Recargas').click()
        cy.get('[name="tranNumCuentaOrigen"]').select(cuentaOrigen)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(recarga).click()
        cy.get('[name="tranNumCuentaDestino"]').select(opcionRecarga)
        cy.get('[name="cueAlias"]').type(alias)
        cy.get('[name="cueNumero"]').type(celular)
        cy.get('[name="ddTranValor"]').type(valor)
        cy.get('#btn-transferencia').click()
        cy.pause()

        //Modulo de inversiones
        cy.contains('Inversiones').click();
        cy.get('[name="monto"]').clear().type(monto1);
        cy.get('[name="plazo"]').clear().type(plazo1);
        cy.get('[name="invTipoInteres"]').select(opcioni);
        cy.get('#btn-inversion').click();
        cy.wait(8000);
        cy.get('[name="monto"]').clear().type(monto);
        cy.get('[name="plazo"]').clear().type(plazo);
        cy.get('#btn-inversion').click();
        cy.pause();

        //Modulo de configuracion de montos
        cy.contains('Configuración de Montos').click()

        //Modulo de perfil
        cy.contains('Mi perfil').click()

        //Modulo de dispositivos autorizados 
        cy.contains('Dispositivos autorizados').should('exist')// tiene error 

                                            //Modulo de cuentas favoritas - ultima opcion no funciona

        //Agrega un cuenta nueva para transferencias internas
        cy.contains('Cuentas Favoritas').click()
        cy.get('[name="nuevaCuentaFav"]').select(favorita1)
        cy.get('[name="cueAlias"]').type(alias)
        cy.get('[name="cueNumero"]').type(cuenta1)
        cy.get('#btn-guardar-cuenta').click()
        cy.pause()

        //agrega una cuenta nueva para transferencias interbancarias
        cy.contains('Cuentas Favoritas').click()
        cy.get('[name="nuevaCuentaFav"]').select(favorita2)
        cy.get('[name="cueAlias"]').type(alias)
        cy.get('#select2-insCodigo-container').click()
        cy.get('.select2-results__option').contains(favoritaInter).click()
        cy.get('[name="cueNombre"]').type(alias)
        cy.get('#tipoIdentificacionSelect').select('CÉDULA')
        cy.get('[name="cueIdentificacion"]').type(cedula)
        cy.get('[name="cueTipo"]').select(tipoCuenta)
        cy.get('[name="cueNumero"]').type(cuenta1)
        cy.get('#btn-guardar-cuenta').click()
        cy.pause()


        //Argega una cuenta nueva para recarga a celulares
        cy.contains('Cuentas Favoritas').click()
        cy.get('[name="nuevaCuentaFav"]').select(favorita3)
        cy.get('#select2-serCodigo-container').click()
        cy.get('.select2-results__option').contains(favoritaCelulares).click()
        cy.wait(3000)
        cy.get('[name="cueAlias"]').type(alias)
        cy.get('[name="cueNumero"]').type(celular)
        cy.get('#btn-guardar-cuenta').click()
        cy.pause()

        //Cerrar sesion
        cy.contains('Cerrar Sesión').click()
    })

})