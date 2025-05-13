import { Question } from "@/types/Question";

export const Questions: Question[] = [
    {
        question: 'O que é o React?',
        options: [
            'Uma biblioteca JavaScript para construção de interfaces de usuário',
            'Um framework CSS',
            'Uma linguagem de programação',
            'Um banco de dados',
        ],
        answer: 0
    },
    {
        question: 'Qual comando é usado para criar um novo projeto React?',
        options: [
            'npm create-react-app',
            'npx create-react-app',
            'react new project',
            'npm init react',
        ],
        answer: 1
    },
    {
        question: 'Qual hook é usado para gerenciar estado em um componente funcional?',
        options: [
            'useEffect',
            'useState',
            'useReducer',
            'useContext',
        ],
        answer: 1
    },
    {
        question: 'Qual diretiva deve ser usada para ativar o modo cliente em um componente no Next.js?',
        options: [
            '"use strict"',
            '"use client"',
            '"use server"',
            '"enable client"',
        ],
        answer: 1
    },
    {
        question: 'O que é JSX?',
        options: [
            'Uma extensão de sintaxe para JavaScript',
            'Uma biblioteca para roteamento no React',
            'Um arquivo de configuração do React',
            'Uma API para trabalhar com estados',
        ],
        answer: 0
    },
    {
        question: 'Qual método é usado para renderizar um componente React na DOM?',
        options: [
            'React.mount()',
            'React.render()',
            'ReactDOM.render()',
            'document.render()',
        ],
        answer: 2
    },
    {
        question: 'Como você aplica um estilo inline em um elemento React?',
        options: [
            'Com um atributo `className`',
            'Com uma string no atributo `style`',
            'Passando um objeto para o atributo `style`',
            'Usando o método `setStyle` do React',
        ],
        answer: 2
    },
    {
        question: 'Qual é o propósito do hook `useEffect`?',
        options: [
            'Gerenciar estados no componente',
            'Executar efeitos colaterais no componente',
            'Criar contextos globais',
            'Manipular eventos de clique',
        ],
        answer: 1
    },
    {
        question: 'Qual é o principal benefício do Virtual DOM no React?',
        options: [
            'Ele permite uma renderização mais rápida',
            'Ele é obrigatório para o uso de hooks',
            'Ele substitui completamente o DOM real',
            'Ele é usado para armazenar estados',
        ],
        answer: 0
    },
    {
        question: 'Como você passa dados de um componente pai para um componente filho no React?',
        options: [
            'Usando hooks',
            'Através de props',
            'Usando o Virtual DOM',
            'Através de eventos customizados',
        ],
        answer: 1
    }
];
