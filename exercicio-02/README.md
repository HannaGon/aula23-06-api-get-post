Exercicio 02

-Crie a estrutura MvC e faça um API que
utilize o JSON da pasta data, o programa
deve ter 3 rotas:

1. get que mostra todos os resultados do json
2. get que busca no JSON um produto por nome
utilizando como input o params (busca/:busca)
3. post que cria novo produto

Nota: Não se esqueça de baixar o express (npm i express)
e adicionar o node_modules no .gitignore!

### Acessando as rotas

- Listar todos

```sh
GET http://localhost:8081/api/produto
```

- Consultar por ID
```sh
GET http://localhost:8081/api/produto/{id}
```

- Consultar por nome
```sh
GET http://localhost:8081/api/produto/nome/{nome}
```

- Salvar:
```sh
POST http://localhost:8081/api/produto
```
```json
{
   "produto": "Product",
   "tipo": "Type",
   "preco": 0.00
}
```

- Deletar:
```sh
DELETE http://localhost:8081/api/produto/{id}
```

- Atualizar - PUT:
```sh
PUT http://localhost:8081/api/produto/{id}
```
```json
{
   "produto": "Product",
   "tipo": "Type",
   "preco": 0.00
}
```

- Atualizar - PATCH:
```sh
PATCH http://localhost:8081/api/produto/{id}
```
```json
{
   "produto": "Product"
}
```
