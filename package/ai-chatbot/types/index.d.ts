import * as react_jsx_runtime from 'react/jsx-runtime';

declare function Chat(): react_jsx_runtime.JSX.Element;

declare class ChatbotElement extends HTMLElement {
    private root;
    connectedCallback(): void;
    disconnectedCallback(): void;
}

export { Chat, ChatbotElement };
