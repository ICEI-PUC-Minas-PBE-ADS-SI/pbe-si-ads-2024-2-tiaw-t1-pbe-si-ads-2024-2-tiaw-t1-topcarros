TopCarros

Informações básicas do projeto.

Projeto: Top Carros.
Repositório GitHub: https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/pbe-si-ads-2024-2-tiaw-t1-pbe-si-ads-2024-2-tiaw-t1-topcarros
        Membros da equipe:

Anneliz https://github.com/Annelizzz
Italo https://github.com/Talozinn67
Lucca https://github.com/Lucca-Moreira14

1. Introdução
2. Contexto
3. Product Discovery
4. Product Design
5. Metodologia
6. Solução




# Contexto
O trabalho tem como objetivo ajudar pessoas em suas buscas com carros,e poder por meio dessas buscas encontrar dicas de diversas pessoas com experiencia similar,igual ou ate maior.
Na nossa aplicaçao temos espaço para login,criaçao de conta e redefiniçao de senha.Contamos com uma interaçao entre usuarios que os permite consultar valores de detalhes de carros,podendo tambem fazer seu proprio post e comentando em outros conteudos postados.

## Problema
Quando pensamos sobre carros é algo muito comum e visto no dia a dia, muitas pessoas nao possuem,e muitas possuem curiosidades e desejos de algum dia ter,e muitas pessoas tem ha muitos anos ou adquiriu recentemente,independente da pessoa ou do quao ela sabe,muitas vezes surgem duvidas de como um carro funciona,o que ele tem de bom,ou uma das partes mais importantes,o preço;.Entretanto algumas pessoas nao fazem ideia de onde começar a buscar,e muitas vezes encontram plataformas complicadas e complexas demais.

## Justificativa
Buscamos ajudar pessoas que querem praticidade na hora de escolher um carro,ou ate mesmo sanar curiosidades,portanto temos uma interface simples e que em casos de pessoas leigas na tecnologia iram ter facilidade no momento de fazer as consultas.


## Público-Alvo
Nosso publico sao todas as pessoas que possuem interesse em saber mais sobre carros!!! 
Ate mesmo criaças,pois nossa plataforma conta com um bloqueio de comentarios maldosos ou indevidos,portanto segura.

## Vídeo do Projeto

O vídeo a seguir traz uma apresentação do problema que a equipe está tratando e a proposta de solução.
video:
Vídeo da apresentação do nosso projeto
https://drive.google.com/file/d/1yJnoiFvd_5bFJJ0IYG1MkPwWGEDavb_5/view?usp=sharing





#Dados Json
```json'''
{
  "usuarios": [
    {
      "id": 1,
      "nome": "João Silva",
      "email": "joao.silva@gmail.com",
      "senha": "123456",
      "carrosAdicionados": [
        {
          "id": 101,
          "nome": "Honda Civic",
          "ano": 2020
        },
        {
          "id": 102,
          "nome": "Toyota Corolla",
          "ano": 2022
        }
      ],
      "comentarios": [
        {
          "id": 201,
          "mensagem": "Carro incrível, recomendo para quem gosta de conforto!",
          "data": "2024-12-07"
        }
      ]
    },
    {
      "id": 2,
      "nome": "Maria Souza",
      "email": "maria.souza@gmail.com",
      "senha": "654321",
      "carrosAdicionados": [],
      "comentarios": [
        {
          "id": 202,
          "mensagem": "Ótimo custo-benefício!",
          "data": "2024-12-06"
        }
      ]
    }
  ],
  "login": {
    "usuario": "joao.silva@gmail.com",
    "senha": "123456",
    "status": "sucesso"
  },
  "registro": {
    "nome": "Carlos Andrade",
    "email": "carlos.andrade@gmail.com",
    "senha": "senha123",
    "status": "sucesso"
  },
  "carros": [
    {
      "id": 101,
      "nome": "Honda Civic",
      "ano": 2020,
      "adicionadoPor": "João Silva"
    },
    {
      "id": 102,
      "nome": "Toyota Corolla",
      "ano": 2022,
      "adicionadoPor": "João Silva"
    }
  ],
  "comentarios": [
    {
      "id": 201,
      "usuario": "João Silva",
      "mensagem": "Carro incrível, recomendo para quem gosta de conforto!",
      "aprovado": true
    },
    {
      "id": 202,
      "usuario": "Maria Souza",
      "mensagem": "Ótimo custo-benefício!",
      "aprovado": true
    },
    {
      "id": 203,
      "usuario": "Carlos Andrade",
      "mensagem": "Esse carro é uma merda !!",
      "aprovado": false,
      "motivoRejeicao": "O comentário contém linguagem inadequada."
    }
  ]
}

  

