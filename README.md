# Projeto Completo de Qualidade de Software (QA)

Projeto de **Quality Assurance (QA)** desenvolvido utilizando a aplicação **SauceDemo** como sistema sob teste.

O projeto tem como objetivo demonstrar, de forma prática, a aplicação de diferentes atividades e boas práticas de QA, desde o planejamento e documentação dos testes até a automação, geração de relatórios e execução de testes de regressão End-to-End (E2E).

---

## Objetivo do projeto

O objetivo deste projeto é simular um processo de QA aplicado a uma aplicação de e-commerce, contemplando diferentes etapas do ciclo de testes.

O projeto foi desenvolvido para praticar e demonstrar conhecimentos em:

- Planejamento de testes;
- Elaboração de casos de teste;
- BDD (Behavior Driven Development);
- Testes funcionais;
- Testes End-to-End;
- Testes de regressão;
- Testes exploratórios;
- Identificação e documentação de bugs;
- Identificação e documentação de melhorias;
- Automação de testes com Cypress;
- Page Object Model (POM);
- Utilização de Fixtures;
- Geração de relatórios;
- Organização de evidências;
- Estruturação de uma suíte de regressão E2E.

---

## Sistema sob teste

**Aplicação:** SauceDemo

A aplicação utilizada simula um e-commerce, permitindo validar diferentes etapas de uma jornada de compra, desde o login até a finalização do pedido.

---

## Planejamento de Testes

Antes da implementação da automação, foi elaborado um **Plano de Testes**, contendo a estratégia utilizada para direcionar os testes da aplicação.

O planejamento contempla a definição do escopo, objetivos, abordagem e demais informações relevantes para a execução dos testes.

Documento:

```text
docs/
└── plano-de-testes.md
```

---

## Casos de Teste

Foram elaborados casos de teste para os principais módulos da aplicação.

Módulos cobertos
- Login
- Produtos
- Carrinho
- Checkout

```markdown
| Módulo | Casos de Teste |
|---|---:|
| Login | 7 |
| Produtos | 7 |
| Carrinho | 7 |
| Checkout | 10 |
| **Total** | **31** |
```

Os casos de teste foram documentados em arquivos Markdown.

```text
docs/
└── casos-de-teste/
    ├── 01-login.md
    ├── 02-produtos.md
    ├── 03-carrinho.md
    └── 04-checkout.md
```
---

## BDD

Foram criados cenários utilizando a abordagem BDD (Behavior Driven Development), buscando representar o comportamento esperado da aplicação de maneira estruturada e próxima da linguagem de negócio.

Os cenários foram organizados utilizando arquivos .feature.

```text
docs/
└── bdd/
    ├── login.feature
    ├── produtos.feature
    ├── carrinho.feature
    ├── checkout.feature
    └── menu.feature
```    

Os cenários contemplam os principais comportamentos da aplicação, incluindo autenticação, catálogo, carrinho, checkout e navegação pelo menu.    

---

## Bugs Identificados

Durante a análise e execução dos testes foram identificados comportamentos que não estavam de acordo com o resultado esperado.

Os bugs foram documentados individualmente, contendo informações como:

- ID;
- Módulo;
- Severidade;
- Prioridade;
- Ambiente;
- Descrição;
- Passos para reprodução;
- Resultado esperado;
- Resultado obtido;
- Evidências.

Exemplo de organização:

```text
docs/
└── relatorio-de-bugs/
    ├── BUG-001.md
    └── BUG-002.md
```

As evidências dos problemas encontrados são armazenadas separadamente para facilitar a rastreabilidade.

```text
docs/
└── evidencias/
    └── Bugs/
        ├── BUG-001/
        │   └── bug001.png
        │
        └── BUG-002/
            └── bug002.png
```

---

## Sugestões de Melhoria

Além da identificação de bugs, foram analisadas oportunidades de melhoria na experiência de utilização da aplicação.

As melhorias são documentadas separadamente dos bugs, diferenciando:

-Comportamentos incorretos que devem ser corrigidos;
-Oportunidades de evolução ou melhoria da experiência do usuário.

```text
docs/
└── melhorias/
    └── MELHORIA-001.md
```

---

## Automação de Testes

A automação dos testes foi desenvolvida utilizando Cypress, com foco na validação dos principais fluxos funcionais da aplicação.

Os testes automatizados foram organizados por módulo:

```text
cypress/
└── e2e/
    ├── carrinho.cy.js
    ├── catalogo.cy.js
    ├── checkout.cy.js
    └── login.cy.js
```

A estrutura permite que os testes sejam executados individualmente por funcionalidade, facilitando a manutenção e a identificação de falhas.

---

## Page Object Model

A automação utiliza o padrão Page Object Model (POM) para separar os elementos e ações das páginas da lógica dos testes.

Os Page Objects estão organizados em:

```text
cypress/
└── pages/
    ├── CarrinhoPage.js
    ├── CatalogoPage.js
    ├── CheckoutPage.js
    └── LoginPage.js
```

Essa abordagem contribui para:

-Reutilização de código;
-Redução de duplicidade;
-Melhor organização;    
-Maior facilidade de manutenção;
-Separação entre lógica de teste e interação com a aplicação.    

---

## Fixtures

Os dados utilizados pelos testes são organizados utilizando Fixtures, evitando a necessidade de manter dados diretamente dentro dos testes.

```text
cypress/
└── fixtures/
    ├── checkoutData.json
    └── loginData.json
```

Essa abordagem facilita a manutenção e reutilização dos dados utilizados na automação.

---

## Regressão E2E

Foi criada uma suíte específica para execução de regressão End-to-End, com o objetivo de validar o fluxo completo da aplicação.

A suíte de regressão busca representar uma jornada completa do usuário, passando pelas principais etapas do processo de compra:

```text
Login
  ↓
Catálogo
  ↓
Seleção do produto
  ↓
Carrinho
  ↓
Checkout
  ↓
Finalização da compra
```

Os testes de regressão estão organizados em:

```text
cypress/
└── e2e/
    └── regressão/
```

Essa suíte permite validar se os principais fluxos continuam funcionando corretamente após alterações na aplicação.    

---

## Relatórios

A execução dos testes automatizados conta com geração de relatórios em diferentes formatos.

```text
cypress/
└── reports/
    ├── html/
    └── junit/
```

### HTML

Relatório destinado à visualização dos resultados da execução dos testes de maneira mais amigável.

### JUnit / XML

Formato estruturado utilizado para armazenar os resultados da execução dos testes e que também pode ser integrado a ferramentas de CI/CD.

---

## CI/CD

#### GitHub Actions - Continuous Integration

Pipeline configurada para executar automaticamente os testes automatizados
em eventos de push e pull request.

- Execução dos testes E2E com Cypress
- Geração de relatórios
- Armazenamento de artifacts
- Visualização dos logs e status da execução

[GitHub Actions - Workflows](https://github.com/caiolopes95/qa-portfolio/actions/runs/31644966530)

#### GitLab CI/CD - Continuous Integration

Pipeline configurada para executar os testes automatizados através de jobs.

- Execução dos testes E2E com Cypress
- Logs detalhados por job
- Visualização do status da pipeline
- Armazenamento e acesso aos artifacts
- Resultados das execuções

[GitLab CI/CD - Pipelines](https://gitlab.com/caioclp95/qa-portfolio/-/jobs/15879166540)

---

## Tecnologias e Ferramentas

### Automação

- Cypress
- JavaScript
- Node.js
- npm

### CI/CD

- GitHub Actions
- GitLab CI/CD

### Qualidade

- Testes Funcionais
- Testes E2E
- Testes de Regressão
- Testes Exploratórios
- BDD
- Page Object Model
- Fixtures
- 
### Documentação

- Markdown
- Gherkin

### Versionamento

- Git
- GitHub

### Relatórios

- Mochawesome
- HTML
- JUnit / XML

---

# Como executar o projeto

## Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

- Node.js
- npm
- Git

## Instalação

Clone o repositório
```markdown
```bash
git clone <https://github.com/caiolopes95/qa-portfolio>
```

Acesse a pasta do projeto:
```markdown
```bash
cd qa-portfolio
```

Instale as dependências:
```markdown
```bash
npm install
```

## Abrir o Cypress

Para abrir o Cypress em modo interativo:
```markdown
```bash
npx cypress open
```
Selecione E2E Testing e escolha o navegador desejado.

## Executar os testes em modo headless

Para executar os testes diretamente pelo terminal:
```markdown
```bash
npx cypress run
```

---

## Resultados do Projeto

O projeto atualmente contempla:

- Plano de Testes
- 34 Casos de Teste
- BDD
- Evidências
- Levantamento de Bugs
- Sugestões de Melhoria
- Automação E2E
- Page Object Model
- Fixtures
- Relatórios HTML
- Relatórios JUnit/XML
- Regressão E2E

---

## Próximos Passos

O projeto continuará sendo evoluído com o objetivo de ampliar a cobertura e demonstrar outras competências relacionadas à área de QA Automation.


Possíveis evoluções:

- Ampliar a cobertura da automação;
- Implementar execução em CI/CD;
- Configurar pipeline automatizado;
- Implementar execução paralela dos testes;
- Evoluir a automação para TypeScript;
- Implementar novos cenários de testes;
- Adicionar testes de API;
- Avaliar utilização do Playwright;
- Avaliar possibilidades de utilização de IA no projeto.

--- 

## Considerações

Este projeto foi desenvolvido com finalidade de estudo, prática e construção de portfólio profissional, buscando representar um fluxo de trabalho próximo ao encontrado em projetos reais de Quality Assurance.

A proposta não se limita à criação de testes automatizados, mas contempla diferentes etapas do processo de qualidade:

```text
Planejamento
     ↓
Casos de Teste
     ↓
BDD
     ↓
Execução
     ↓
Análise dos Resultados
     ↓
Bugs / Melhorias
     ↓
Evidências
     ↓
Automação
     ↓
Regressão E2E
     ↓
Relatórios
```

---

# Autor

Caio Lopes Pereira

QA / Quality Assurance

Projeto desenvolvido para demonstrar conhecimentos práticos em Quality Assurance, Testes de Software e Automação de Testes.

LinkedIn: https://www.linkedin.com/in/caiolopespereira/

---
