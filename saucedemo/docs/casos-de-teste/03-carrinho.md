# Casos de Teste - Carrinho

## Objetivo

Este documento reúne os casos de teste da funcionalidade de carrinho de compras do Sauce Demo (Shopify). O objetivo é validar o gerenciamento dos produtos adicionados ao carrinho, garantindo que os itens sejam exibidos corretamente e que o usuário possa continuar ou cancelar o processo de compra.

## Informações Gerais

| Campo | Valor |
|--------|--------|
| Módulo | Carrinho |
| Sistema | Sauce Demo (Shopify) |
| Funcionalidade | Carrinho de Compras |
| Ambiente | https://www.saucedemo.com/ |

---

# TC-CART-001 - Adicionar um produto ao carrinho

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-001 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado na página de produtos. |

## Passos

- Selecionar um produto.
- Clicar no botão **Add to cart**.

## Resultado esperado

- O produto deve ser adicionado ao carrinho.
- O botão deve ser alterado para **Remove**.
- O contador do carrinho deve indicar um item.

---

# TC-CART-002 - Visualizar produtos adicionados ao carrinho

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-002 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Pelo menos um produto adicionado ao carrinho. |

## Passos

- Clicar no ícone do carrinho.

## Resultado esperado

- A página do carrinho deve ser exibida.
- O produto adicionado deve estar listado.
- Nome, descrição, quantidade e preço devem ser apresentados corretamente.

---

# TC-CART-003 - Remover um produto do carrinho

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-003 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Pelo menos um produto adicionado ao carrinho. |

## Passos

- Acessar o carrinho.
- Clicar no botão **Remove**.

## Resultado esperado

- O produto deve ser removido do carrinho.
- O carrinho deve ficar vazio.
- O contador do carrinho deve ser atualizado.

---

# TC-CART-004 - Adicionar um item sem estoque no carrinho

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-004 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Estar logado na plataforma. |

## Passos

- Acessar o catalogo.
- Localizar um item em "sold out"
- clicar no item
- tentar adicionar o item no carrinho

## Resultado esperado

- O sistema não deve adicionar o item ao carrinho
- O botão "add to cart" não estará ativo

---

# TC-CART-005 - Iniciar o processo de checkout

| Campo | Descrição |
|--------|-----------|
| ID | TC-CART-005 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Pelo menos um produto no carrinho. |

## Passos

- Acessar o carrinho.
- Clicar no botão **Checkout**.

## Resultado esperado

- O sistema deve redirecionar o usuário para a página de checkout.

---