import { ChatRequestOptions } from 'ai/react';

declare module 'ai/react' {
  interface ChatRequestOptions {
    experimental_attachments?: FileList;
  }
} 