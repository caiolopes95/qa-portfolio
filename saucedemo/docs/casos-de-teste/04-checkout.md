# Casos de Teste - Checkout

## Objetivo

Este documento reúne os casos de teste da funcionalidade de checkout da loja Sauce Demo (Shopify). O objetivo é validar o fluxo de finalização da compra, garantindo que o usuário consiga acessar o checkout, preencher as informações obrigatórias e visualizar corretamente o resumo do pedido.

## Informações Gerais

| Campo | Valor |
|--------|--------|
| Módulo | Checkout |
| Sistema | Sauce Demo (Shopify) |
| Funcionalidade | Finalização da Compra |
| Ambiente | https://sauce-demo.myshopify.com/ |

---

# TC-CHECKOUT-001 - Acessar a página de checkout

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHECKOUT-001 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Possuir pelo menos um produto no carrinho. |

## Passos

- Adicionar um produto ao carrinho.
- Acessar o carrinho.
- Clicar em **Checkout**.

## Resultado esperado

- O sistema deve redirecionar o usuário para a página de checkout.

---

# TC-CHECKOUT-002 - Validar campos obrigatórios do checkout

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHECKOUT-002 |
| Prioridade | Alta |
| Tipo | Negativo |
| Pré-condição | Estar na página de checkout. |

## Passos

- Deixar um ou mais campos obrigatórios em branco.
- Tentar continuar o processo de compra.

## Resultado esperado

- O sistema deve impedir o avanço.
- Os campos obrigatórios devem ser destacados.
- Mensagens de validação devem ser exibidas ao usuário.

---

# TC-CHECKOUT-003 - Preencher os dados de entrega

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHECKOUT-003 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Estar na página de checkout. |

## Passos

- Informar nome.
- Informar sobrenome.
- Informar endereço.
- Informar cidade.
- Selecionar estado.
- Informar CEP.
- Informar telefone (quando aplicável).

## Resultado esperado

- Os dados devem ser aceitos pelo sistema.
- O usuário deve conseguir avançar para a próxima etapa do checkout.

---

# TC-CHECKOUT-004 - Validar resumo do pedido

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHECKOUT-004 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Estar na página de checkout com um produto no carrinho. |

## Passos

- Acessar a página de checkout.

## Resultado esperado

- O resumo da compra deve apresentar os produtos adicionados.
- Os preços devem estar corretos.
- O subtotal deve ser exibido.
- O valor do frete deve ser apresentado (quando aplicável).
- O valor total deve ser calculado corretamente.

---

# TC-CHECKOUT-005 - Informar um cartão inválido

| Campo | Descrição |
|--------|-----------|
| ID | TC-CHECKOUT-005 |
| Prioridade | Média |
| Tipo | Negativo |
| Pré-condição | Todos os dados obrigatórios preenchidos. |

## Passos

- Informar um número de cartão inválido.
- Tentar concluir o pagamento.

## Resultado esperado

- O pagamento não deve ser autorizado.
- O sistema deve exibir uma mensagem informando que o pagamento não foi aprovado.

---

## Observação

A loja utilizada para este projeto é uma instância pública do Shopify.

A etapa de pagamento depende da configuração do gateway disponibilizado pelo proprietário da loja. Como não há um ambiente de testes para cartões fictícios, a conclusão do pagamento não faz parte do escopo deste projeto.