export type SlideType = 'intro' | 'content' | 'code' | 'quiz' | 'summary' | 'concept';

export interface Slide {
  id: string;
  title: string;
  type: SlideType;
  content: string[];
  code?: string;
  language?: string;
  insight?: string;
  image?: string;
  isList?: boolean;
  options?: string[];
  correctAnswer?: number;
  link?: string;
  linkText?: string;
}

export interface Lesson {
  id: string;
  title: string;
  slides: Slide[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Part {
  id: string;
  title: string;
  modules: Module[];
}
