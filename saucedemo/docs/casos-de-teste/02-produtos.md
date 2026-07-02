# Casos de Teste - Produtos

## Objetivo

Este documento reúne os casos de teste da funcionalidade de catálogo de produtos do Sauce Demo (Shopify). O objetivo é validar a exibição dos produtos, a navegação entre as páginas e a apresentação correta das informações dos itens disponíveis.

## Informações Gerais

| Campo | Valor |
|--------|--------|
| Módulo | Produtos |
| Sistema | Sauce Demo (Shopify) |
| Funcionalidade | Catálogo de Produtos   |
| Ambiente | https://www.saucedemo.com/ |

---

# TC-PROD-001 - Exibir lista de produtos após o login

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-001 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado no sistema. |

## Passos

- Realizar login com um usuário válido. 
- Aguardar o carregamento da página de produtos. 

## Resultado esperado

- A página de produtos deve ser exibida.
- A lista de produtos deve estar visível.
- Cada produto deve apresentar nome, descrição, preço e botão de ação.

---

# TC-PROD-002 - Visualizar detalhes de um produto

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-002 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado na página de produtos. |

## Passos

- Clicar sobre o nome de um produto. 

## Resultado esperado

- O sistema deve abrir a página de detalhes do produto.
- As informações do produto selecionado devem ser exibidas corretamente.

---


# TC-PROD-003 - Buscar um produto existente

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-003 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado na página de produtos. |

## Passos

- Na barra de pesquisa, digitar o nome de um produto existente no catalogo.
- Digitar "Black heels"

## Resultado esperado

- Produto ser exibido em tela.

---

# TC-PROD-004 - Retornar à lista de produtos após visualizar os detalhes

| Campo | Descrição |
|--------|-----------|
| ID | TC-PROD-004 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado na página de produtos. |

## Passos

- Abrir um produto
- Clicar em Back to products

## Resultado esperado

- O sistema deve retornar para a página de produtos.
-A lista de produtos deve ser exibida novamente.

---

