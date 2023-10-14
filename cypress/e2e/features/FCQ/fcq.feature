@fcq

Feature: Home Facultad de Cs. Químicas

    Scenario: Verificar funcionamiento del botón scrollUp
        Given que un usuario está en la página de "FCQ"
        When hace scrolldown hasta el footer
        Then se hace visible el botón scrollUp
        When el usuario clickea el botón
        Then vuelve al header de la página

    Scenario: Verificar textos del footer
        Given que un usuario está en la página de "FCQ"
        When hace scrolldown hasta el footer
        Then el usuario visualiza el texto del footer

