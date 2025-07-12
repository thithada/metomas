// src/types/index.ts
export interface Skill {
  name: string;
  logo: string;
  category: string;
  description: string;
}

export interface Interest {
  name: string;
  emoji: string;
  description: string;
  theme: {
    background: string;
    accent: string;
    border: string;
    hover: string;
  };
}

export interface Project {
  title: string;
  type: string;
  role: string;
  tech: string;
  description: string;
  learned: string;
  category: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
