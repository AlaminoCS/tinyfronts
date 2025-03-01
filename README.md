
# **TinyFronts**

**TinyFronts** é um monorepo para gerenciar microfrontends usando React e TypeScript. Ele foi projetado para facilitar o desenvolvimento modular e escalável de aplicações frontend para diferentes clientes ou funcionalidades.

## **Índice**

1. [Visão Geral](#visão-geral)
2. [Estrutura do Monorepo](#estrutura-do-monorepo)
3. [Pré-requisitos](#pré-requisitos)
4. [Como Usar](#como-usar)
   - [Instalação](#instalação)
   - [Executar um Projeto Específico](#executar-um-projeto-específico)
   - [Build de Todos os Projetos](#build-de-todos-os-projetos)
5. [Projetos Atuais](#projetos-atuais)
6. [Contribuição](#contribuição)
7. [Licença](#licença)

---

## **Visão Geral**

O objetivo deste monorepo é organizar múltiplos microfrontends em uma única base de código, permitindo:

- Desenvolvimento independente de cada microfrontend.
- Compartilhamento de dependências entre projetos.
- Facilidade de manutenção e escalabilidade.

Cada microfrontend é criado usando **React** com **TypeScript**, garantindo tipagem segura e modernidade no desenvolvimento.

---

## **Estrutura do Monorepo**

A estrutura do monorepo segue o padrão abaixo:

```
tinyfronts/
├── packages/               # Pasta para todos os microfrontends
│   ├── pizza-party/        # Microfrontend 1: Pizza Party
│   ├── rancho-cambara/     # Microfrontend 2: Rancho Cambará
│   ├── park-and-co/        # Microfrontend 3: Park&Co Estacionamentos
├── package.json            # Configuração principal do monorepo
└── README.md               # Documentação geral do monorepo
```

Cada pasta dentro de `packages/` representa um microfrontend independente.

---

## **Pré-requisitos**

Para trabalhar com este monorepo, você precisará ter instalado:

- **Node.js** (versão 16 ou superior recomendada)
- **npm** (versão 7 ou superior, pois suporta workspaces)
- **Git**

---

## **Como Usar**

### **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/AlaminoCS/tinyfronts.git
   cd tinyfronts
   ```

2. Instale as dependências globais e dos workspaces:
   ```bash
   npm install
   ```

### **Executar um Projeto Específico**

Para iniciar o servidor de desenvolvimento de um microfrontend específico, use o comando:

```bash
npm start --workspace=<nome-do-projeto>
```

Exemplos:
- Para o projeto `pizza-party`:
  ```bash
  npm start --workspace=pizza-party
  ```
- Para o projeto `rancho-cambara`:
  ```bash
  npm start --workspace=rancho-cambara
  ```

### **Build de Todos os Projetos**

Para gerar builds de produção para todos os microfrontends, execute:

```bash
npm run build
```

---

## **Projetos Atuais**

Atualmente, o monorepo contém os seguintes microfrontends:

1. **Pizza Party**
   - Descrição: Exemplo inicial de microfrontend.
   - Tecnologias: React, TypeScript.
   - Porta de desenvolvimento: `3001`.

2. **Rancho Cambará**
   - Descrição: Microfrontend dedicado ao cliente Rancho Cambará.
   - Tecnologias: React, TypeScript.
   - Porta de desenvolvimento: `3002`.

3. **Park&Co Estacionamentos**
   - Descrição: Microfrontend dedicado ao cliente Park&Co Estacionamentos.
   - Tecnologias: React, TypeScript.
   - Porta de desenvolvimento: `3003`.

---

## **Licença**

Este projeto está licenciado sob a **ISC License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

