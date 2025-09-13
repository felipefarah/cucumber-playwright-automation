
Feature: Login e Logout

    Scenario: Login válido
        Given que o usuário está na página de Login
        When ele insere usuário "felipe" e senha "12345678"
        And clica em "Login"
        Then ele deve ver a mensagem "You logged into a secure area!"

    Scenario: Logout
        Given que o usuário está logado 
        When ele clica em "Logout"
        Then ele deve ver a mensagem "You logged out of the secure area!"