export type SlideType = 'intro' | 'content' | 'code' | 'quiz' | 'summary' | 'concept';

export interface LocalizedString {
  kh: string;
  en: string;
}

export interface Slide {
  id: string;
  title: string;
  titleEn?: string;
  type: SlideType;
  content?: string[];
  body?: (string | LocalizedString)[];
  code?: string;
  language?: string;
  insight?: string | LocalizedString;
  useCase?: string | LocalizedString; // Added
  bestPractices?: (string | LocalizedString)[]; // Added
  image?: string;
  isList?: boolean;
  options?: (string | LocalizedString)[];
  correctAnswer?: number;
  link?: string;
  linkText?: string;
  animation?: 'deployment' | 'security' | 'performance' | 'database' | 'inheritance' | 'class_object' | 'loops' | 'logic' | 'functions' | 'data_types' | 'io' | 'syntax' | 'sql_nosql' | 'sql_selection' | 'sql_manipulation' | 'database_keys' | 'normalization' | 'http' | 'web_server' | 'http_methods' | 'http_status' | 'laravel_ecosystem' | 'laravel_features';
  extra?: string | LocalizedString;
}

export interface Lesson {
  id: string;
  title: string;
  titleEn?: string;
  duration?: string; // Added (e.g. "15 mins")
  level?: 'Core' | 'Advanced' | 'Expert'; // Added
  slides: Slide[];
}

export interface Module {
  id: string;
  title: string;
  titleEn?: string;
  icon?: string;
  color?: string;
  lessons: Lesson[];
}

export interface Part {
  id: string;
  title: string;
  modules: Module[];
}
