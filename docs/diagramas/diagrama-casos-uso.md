# Diagrama de Casos de Uso - Sistema de Marcenaria

​```mermaid
graph TB
    subgraph Sistema["Sistema de Gerenciamento de Marcenaria"]
        UC1[Visualizar Produtos]
        UC2[Cadastrar Produto]
        UC3[Editar Produto]
        UC4[Excluir Produto]
        UC5[Enviar Mensagem de Contato]
        UC6[Validar Dados do Formulário]
        UC7[Confirmar Exclusão]
    end
    
    Cliente([Cliente/Visitante])
    Admin([Administrador])
    
    Cliente --> UC1
    Cliente --> UC5
    
    Admin --> UC1
    Admin --> UC2
    Admin --> UC3
    Admin --> UC4
    
    UC2 -.-> UC6
    UC3 -.-> UC6
    UC5 -.-> UC6
    UC4 -.-> UC7
    
    style Sistema fill:#f0f8ff,stroke:#4682b4,stroke-width:3px
    style Cliente fill:#90EE90,stroke:#006400,stroke-width:2px
    style Admin fill:#FFB6C1,stroke:#8B0000,stroke-width:2px
    style UC1 fill:#FFE4B5,stroke:#FF8C00,stroke-width:2px
    style UC2 fill:#FFE4B5,stroke:#FF8C00,stroke-width:2px
    style UC3 fill:#FFE4B5,stroke:#FF8C00,stroke-width:2px
    style UC4 fill:#FFE4B5,stroke:#FF8C00,stroke-width:2px
    style UC5 fill:#FFE4B5,stroke:#FF8C00,stroke-width:2px
    style UC6 fill:#E6E6FA,stroke:#4B0082,stroke-width:1px,stroke-dasharray: 5 5
    style UC7 fill:#E6E6FA,stroke:#4B0082,stroke-width:1px,stroke-dasharray: 5 5
​```