# Casos de Teste - Menu

## Objetivo

Este documento reúne os casos de teste relacionados ao menu de navegação da aplicação. O objetivo é validar o acesso às funcionalidades disponíveis no menu e garantir que a navegação entre as páginas ocorra corretamente.

## Informações Gerais

| Campo | Valor |
|--------|--------|
| Módulo | Menu |
| Sistema | Sauce Demo (Shopify) |
| Funcionalidade | Navegação |
| Ambiente | https://sauce-demo.myshopify.com/ |

---

# TC-MENU-001 - Acessar o menu principal

| Campo | Descrição |
|--------|-----------|
| ID | TC-MENU-001 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário na página inicial da loja. |

## Passos

- Localizar o menu principal.
- Clicar no menu.

## Resultado esperado

- O menu deve ser exibido corretamente.
- Todas as opções disponíveis devem estar visíveis.

---

# TC-MENU-002 - Navegar entre as opções do menu

| Campo | Descrição |
|--------|-----------|
| ID | TC-MENU-002 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Menu aberto. |

## Passos

- Selecionar uma das opções disponíveis no menu.

## Resultado esperado

- O sistema deve direcionar o usuário para a página correspondente.
- A página deve ser carregada sem erros.

---

# TC-MENU-003 - Acessar a página inicial pelo menu

| Campo | Descrição |
|--------|-----------|
| ID | TC-MENU-003 |
| Prioridade | Média |
| Tipo | Positivo |
| Pré-condição | Usuário em qualquer página da loja. |

## Passos

- Clicar na opção **Home** (ou equivalente).

## Resultado esperado

- O usuário deve ser redirecionado para a página inicial da loja.

---

# TC-MENU-004 - Encerrar a sessão (Logout)

| Campo | Descrição |
|--------|-----------|
| ID | TC-MENU-004 |
| Prioridade | Alta |
| Tipo | Positivo |
| Pré-condição | Usuário autenticado. |

## Passos

- Abrir o menu.
- Clicar em **Logout**.

## Resultado esperado

- A sessão do usuário deve ser encerrada.
- O usuário deve ser redirecionado para a página de login ou página inicial.
- Áreas restritas não devem mais estar acessíveis sem nova autenticação