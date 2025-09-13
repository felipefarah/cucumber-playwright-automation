
Feature: Busca no site

    Scenario: Busca válida
        Given que o usuário está na página de busca 
        When ele pesquisa por "exeple"
        Then os resultados deve conter "exemple"