declare module '*.svg' {
    const content: any;
    export default content;
  }
  
declare module '*.jpeg' {
    const content: any;
    export default content;
  }
  
declare module '*.css';

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}