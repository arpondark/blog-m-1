declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    MONGODB_URI: string;
    
    // ...add more variables as needed
  }
}
