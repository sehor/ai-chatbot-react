import React from 'react';
import ReactDOM from 'react-dom/client';
import Chat from '../components/Chatbot';

class ChatbotElement extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(React.createElement(Chat));
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }
}

customElements.define('ai-chatbot', ChatbotElement);

export default ChatbotElement;
