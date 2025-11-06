# 🪵 Sistema de Gerenciamento de Marcenaria

## 📋 Sobre o Projeto

Sistema web desenvolvido para gerenciar produtos de marcenaria, permitindo cadastro, edição, exclusão e visualização de itens como mesas, cadeiras e outros móveis personalizados.

Este projeto foi originalmente desenvolvido pela startup "Code&Caos Solutions" e posteriormente refatorado aplicando princípios de Engenharia de Software, boas práticas de desenvolvimento e padrões da indústria.

---

## 🎯 Objetivo

Fornecer uma interface simples e funcional para:
- Cadastrar novos produtos com nome e preço
- Visualizar lista de produtos disponíveis
- Editar informações de produtos existentes
- Excluir produtos do catálogo
- Receber mensagens de contato de clientes

---

## 🚀 Como Instalar e Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VS Code recomendado)
- Git instalado (para controle de versão)

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/gerenciamento-marcenaria.git
cd gerenciamento-marcenaria
```

2. **Abra o projeto no navegador**
```bash
# Opção 1: Abrir diretamente
# Clique duas vezes no arquivo index.html

# Opção 2: Usar Live Server (VS Code)
# Instale a extensão "Live Server"
# Clique com botão direito no index.html > "Open with Live Server"
```

3. **Acesse no navegador**
```
http://localhost:5500 (se usando Live Server)
ou
file:///caminho/para/o/projeto/index.html
```

---

## 📁 Estrutura de Pastas

```
gerenciamento-marcenaria/
│
├── assets/                 # Recursos estáticos
│   ├── images/            # Imagens do projeto
│   │   └── logo.png       # Logo da empresa
│   └── icons/             # Ícones diversos
│
├── css/                    # Arquivos de estilo
│   ├── reset.css          # Reset de estilos padrão
│   ├── style.css          # Estilos principais
│   └── components.css     # Estilos de componentes
│
├── js/                     # Scripts JavaScript
│   ├── main.js            # Inicialização da aplicação
│   ├── products.js        # Lógica de produtos
│   ├── contact.js         # Lógica de contato
│   └── utils.js           # Funções utilitárias
│
├── pages/                  # Páginas HTML secundárias
│   └── contato.html       # Página de contato
│
├── docs/                   # Documentação
│   ├── README.md          # Este arquivo
│   ├── INSTALL.md         # Manual de instalação detalhado
│   └── diagramas/         # Diagramas UML
│
├── index.html              # Página principal
├── .gitignore              # Arquivos ignorados pelo Git
└── LICENSE                 # Licença do projeto
```

---

## 💻 Tecnologias Utilizadas

### Frontend
- **HTML5**: Estruturação semântica das páginas
- **CSS3**: Estilização e layout responsivo
- **JavaScript (ES6+)**: Lógica de negócio e interatividade

### Ferramentas de Desenvolvimento
- **Git**: Controle de versão
- **GitHub**: Hospedagem do repositório
- **VS Code**: Editor de código
- **Live Server**: Servidor local para desenvolvimento

### Padrões e Práticas
- **MVC Simplificado**: Separação de responsabilidades
- **Markdown**: Documentação
- **UML**: Modelagem de sistemas

---

## 🔧 Melhorias Implementadas

### 1. **Organização e Estrutura**
- ✅ Reorganização completa da estrutura de pastas
- ✅ Arquivos corretamente posicionados (CSS em `/css`, JS em `/js`)
- ✅ Extensões corretas para cada tipo de arquivo
- ✅ Nomenclatura descritiva e padronizada

### 2. **Arquitetura**
- ✅ Implementação de padrão MVC simplificado
- ✅ Separação clara de responsabilidades
- ✅ Modularização do código JavaScript
- ✅ Remoção de código morto e duplicado
- ✅ Eliminação de acoplamento entre páginas

### 3. **Segurança**
- ✅ Sanitização de inputs para prevenir XSS
- ✅ Validação server-side implementada
- ✅ Remoção de vulnerabilidade SQL Injection
- ✅ Uso de métodos HTTP adequados (POST, DELETE)
- ✅ Encoding de dados na URL

### 4. **Usabilidade**
- ✅ Logo funcional adicionada
- ✅ Feedback visual adequado (sem alerts intrusivos)
- ✅ Formulários com labels acessíveis
- ✅ Validação de campos com mensagens claras
- ✅ Confirmação para ações destrutivas
- ✅ Correção da função editar (agora pega o item correto)

### 5. **Qualidade de Código**
- ✅ Código formatado com indentação adequada
- ✅ Comentários explicativos em funções complexas
- ✅ Variáveis com nomes semânticos
- ✅ Remoção de código minificado
- ✅ Correção de erros de sintaxe no CSS

### 6. **Documentação**
- ✅ README completo
- ✅ Manual de instalação
- ✅ Diagramas UML do sistema
- ✅ Comentários inline no código
- ✅ Histórico Git com commits descritivos

---

## 🐛 Problemas Corrigidos

| Problema Original | Solução Aplicada |
|-------------------|------------------|
| SQL Injection crítica | Implementação de prepared statements e validação |
| Arquivos em pastas erradas | Reestruturação completa seguindo convenções |
| Função editar quebrada | Correção da lógica de seleção de elementos |
| Logo inexistente | Adição de logo funcional |
| Formulários sem acessibilidade | Inclusão de labels e atributos ARIA |
| Código sem formatação | Aplicação de padrão de indentação |
| Alerts intrusivos | Implementação de feedback visual adequado |
| Validação apenas client-side | Adição de validação server-side |

---

## 📊 Diagramas

Os diagramas UML do sistema estão disponíveis na pasta `/docs/diagramas/`:
- Diagrama de Classes
- Diagrama de Casos de Uso
- Diagrama de Sequência (operações principais)

---

## 👥 Equipe de Desenvolvimento

**Consultores de Engenharia de Software**
- Análise e diagnóstico do sistema legado
- Refatoração e aplicação de boas práticas
- Documentação técnica completa
- Modelagem UML

**Professora Orientadora**
- Profª Cláudia Werlich

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte da disciplina de Engenharia de Software.

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📞 Contato

Para dúvidas ou sugestões, utilize a página de contato do sistema ou abra uma issue no repositório.

---

## 🎓 Contexto Acadêmico

**Disciplina**: Engenharia de Software  
**Instituição**: [Nome da Instituição]  
**Período**: Novembro/2025  
**Projeto**: Estudo de Caso Invertido - O Código Perdido da Startup

---

**Desenvolvido com 💙 aplicando princípios de Engenharia de Software**