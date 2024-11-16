
import { Chat } from 'ai-chatbot';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div>
      <h1>React Component Usage:</h1>
      <Chat />
      
      <h1>Web Component Usage:</h1>
      <ai-chatbot></ai-chatbot>
    </div>
  );
}

export default App; 