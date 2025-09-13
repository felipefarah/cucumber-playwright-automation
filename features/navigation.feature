
Feature: Navegação entre páginas

    Scenario: Ir para relatórios e detalhes
        Given que o usuário está na página inicial
        When ele navega até "Relatórios"
        And acessa "Detalhes"
        Then o título da página deve ser "Detalhes"