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
  animation?: 'deployment' | 'security' | 'performance' | 'database' | 'inheritance' | 'class_object' | 'loops' | 'logic' | 'functions' | 'data_types' | 'io' | 'syntax' | 'sql_nosql' | 'sql_selection' | 'sql_manipulation' | 'database_keys' | 'normalization' | 'http' | 'web_server' | 'http_methods' | 'http_status' | 'laravel_ecosystem' | 'laravel_features' | 'framework_comparison' | 'laravel_install' | 'laravel_prerequisites' | 'laravel_creation_ways' | 'laravel_structure' | 'local_stack' | 'all_in_one_stacks' | 'advanced_environments' | 'artisan_console' | 'artisan_list' | 'artisan_make' | 'artisan_serve' | 'routing_entry' | 'route_files' | 'laravel_http_methods' | 'route_parameters' | 'named_routes' | 'route_groups' | 'controller_logic' | 'laravel_request_object' | 'blade_layout' | 'database_connection' | 'database_migrations' | 'schema_builder' | 'eloquent_orm' | 'artisan_migrate' | 'mass_assignment' | 'blade_components' | 'model_creation' | 'migration_naming' | 'migration_up_down' | 'validation_flow' | 'validation_inline' | 'form_request' | 'error_display' | 'file_upload' | 'auth_overview' | 'middleware_guard' | 'gates_policies' | 'relationship_types' | 'eager_loading' | 'sync_attach';
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
  titleEn?: string;
  modules: Module[];
}
