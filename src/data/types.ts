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
  image?: string;
  isList?: boolean;
  options?: (string | LocalizedString)[];
  correctAnswer?: number;
  link?: string;
  linkText?: string;
  animation?: 'deployment' | 'security' | 'performance' | 'database';
  extra?: string | LocalizedString;
}

export interface Lesson {
  id: string;
  title: string;
  titleEn?: string;
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
