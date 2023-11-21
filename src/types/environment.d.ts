declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_ACCESS_TOKEN_MAP: string;
    }
  }
}

export {};
