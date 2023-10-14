@fcq

Feature: Home Facultad de Cs. Químicas

    Scenario: Funcionamiento del botón scrollUp
        Given que un usuario está en la página de "FCQ"
        When hace scrolldown hasta el footer
        Then se hace visible el botón scrollUp
        When el usuario clickea el botón
        Then vuelve al header de la página

    Scenario: Textos del footer
        Given que un usuario está en la página de "FCQ"
        When hace scrolldown hasta el footer
        Then el usuario visualiza el texto del footer

    Scenario: Verificar el color de fondo del logo de la FCQ
        Given que un usuario está en la página de "FCQ"
        Then el usuario debería ver la imagen del logo de la FCQ
        And el color de fondo del logo debería ser 'rgba(0, 0, 0, 0)'
