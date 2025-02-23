interface Config {
  googleApiKey: string;
}

// For Vite, environment variables need to be prefixed with VITE_
export const config: Config = {
  googleApiKey: import.meta.env.VITE_GEMINI_API_KEY
}; 