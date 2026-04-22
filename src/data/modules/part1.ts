import { Part } from '../types';

export const part1: Part = {
  id: 'part-1',
  title: 'Part 1: Foundations of Backend Development & Laravel Setup',
  modules: [
    {
      id: 'intro',
      title: 'Course Introduction',
      lessons: [
        {
          id: '0.1',
          title: 'Welcome to Backend Mastery',
          slides: [
            {
              id: '0.1.1',
              title: 'Course Objective',
              type: 'intro',
              content: [
                'Welcome to the **Laravel Backend Masterclass**.',
                'The goal of this course is to take you from a beginner to a **Production-Ready Backend Developer**.',
                'We will focus on logic, security, and professional architecture.'
              ],
              insight: 'Learning the "Why" is just as important as learning the "How".'
            },
            {
              id: '0.1.2',
              title: 'What You Will Learn',
              type: 'concept',
              content: [
                '**PHP Fundamentals**: The foundation of modern web apps.',
                '**Database Design**: How to store and relate data professionally.',
                '**Laravel Framework**: The world\'s most popular PHP ecosystem.',
                '**REST APIs**: Building backends for mobile and web apps.'
              ]
            },
            {
              id: '0.1.3',
              title: 'Course Roadmap',
              type: 'concept',
              content: [
                '**Part 1**: Foundations & PHP Deep Dive.',
                '**Part 2**: Core Laravel Concepts.',
                '**Part 3**: Advanced Features & Deployment.'
              ],
              insight: 'Each part builds on the last. Don\'t skip the foundations!'
            }
          ]
        }
      ]
    },
    {
      id: 'module-1',
      title: 'Module 1: Introduction to Backend Development',
      lessons: [
        {
          id: '1.0',
          title: 'Essential Development Tools',
          slides: [
            {
              id: '1.0.1',
              title: 'The Developer\'s Toolkit',
              type: 'concept',
              content: [
                'Before we build, we need the right tools.',
                'A powerful IDE, an AI assistant, and the PHP runtime.',
                'These tools will make your coding life **10x faster**.'
              ],
              insight: 'A craftsman is only as good as their tools.'
            },
            {
              id: '1.0.2',
              title: 'VS Code: The Best IDE',
              type: 'concept',
              content: [
                '**Visual Studio Code** is the industry standard.',
                'Fast, customizable, and has massive plugin support.',
                'We will use it for all our Laravel projects.'
              ],
              link: 'https://code.visualstudio.com/download',
              linkText: 'Download VS Code',
              insight: 'Install the "Laravel Extension Pack" for the best experience.'
            },
            {
              id: '1.0.3',
              title: 'Antigravity AI',
              type: 'concept',
              content: [
                'Your **Agentic AI Coding Assistant**.',
                'Helps you debug, write boilerplate, and learn faster.',
                'Integrates directly into your workflow.'
              ],
              link: 'https://antigravity.ai',
              linkText: 'Get Antigravity AI',
              insight: 'AI doesn\'t replace developers; it gives them superpowers.'
            },
            {
              id: '1.0.4',
              title: 'Composer: PHP Packages',
              type: 'concept',
              content: [
                'The mandatory tool for any PHP developer.',
                'Handles all your Laravel dependencies automatically.'
              ],
              link: 'https://getcomposer.org/download/',
              linkText: 'Download Composer',
              insight: 'Always keep your Composer updated with "composer self-update".'
            }
          ]
        },
        {
          id: '1.1',
          title: 'What is Backend Development?',
          slides: [
            {
              id: '1.1.0',
              title: 'Introduction to Backend',
              type: 'intro',
              content: [
                'Backend Development refers to the **Server-Side** of an application.',
                'It is everything that happens behind the scenes that users **don\'t see**.',
                'While Frontend is about **How it looks**, Backend is about **How it works**.'
              ],
              insight: 'A beautiful frontend is useless without a powerful, secure backend.'
            },
            {
              id: '1.1.1',
              title: 'The Role of the Backend',
              type: 'concept',
              content: [
                'Backend is the **hidden engine** that powers the web.',
                '**Data Management**: Storing and retrieving user information.',
                '**Business Logic**: Calculating prices, validating logins, processing orders.',
                '**Security**: Ensuring only authorized users can access specific data.'
              ],
              insight: 'If the frontend is the body of a car, the backend is the engine.'
            },
            {
              id: '1.1.2',
              title: 'Client-Server Architecture',
              type: 'concept',
              content: [
                '**Client**: Requests a resource (e.g., "Give me my profile").',
                '**Server**: Processes the request and sends a response.',
                '**Request-Response Cycle**: The core loop of how the internet works.',
                'Communication happens over **HTTP/HTTPS** protocols.'
              ],
              insight: 'The server never does anything unless a client asks for it first.'
            },
            {
              id: '1.1.3',
              title: 'Web Servers: The Gatekeepers',
              type: 'content',
              content: [
                'Software like **Nginx** or **Apache** listen for incoming requests.',
                'They decide which PHP script should handle the request.',
                'They serve static files (images, CSS) instantly without using PHP.'
              ],
              insight: 'Nginx is the world leader in performance for high-traffic websites.'
            },
            {
              id: '1.1.4',
              title: 'Databases: The Memory',
              type: 'content',
              content: [
                'Permanent storage for application data.',
                '**Relational (SQL)**: Organized into strict tables (MySQL).',
                '**Performance**: Use indexes to find data in milliseconds.',
                '**Integrity**: Ensure data remains consistent and accurate.'
              ]
            },
            {
              id: '1.1.5',
              title: 'APIs: The Waiter',
              type: 'concept',
              content: [
                '**Application Programming Interface**.',
                'Connects two different pieces of software.',
                'Allows your backend to talk to Google Maps, PayPal, or Mobile Apps.',
                'Usually communicates using **JSON** data format.'
              ],
              insight: 'Think of an API as a waiter: you order (request), they tell the kitchen (backend), and bring back food (response).'
            },
            {
              id: '1.1.6',
              title: 'Backend Languages',
              type: 'content',
              content: [
                '**PHP**: Powers 75% of the web (WordPress, Laravel).',
                '**Node.js**: Great for real-time apps (Chat, Notifications).',
                '**Python**: Excellent for AI and data processing (Django).',
                '**Go**: Built for high-concurrency systems at Google scale.'
              ]
            },
            {
              id: '1.1.7',
              title: 'Module 1.1 Quiz',
              type: 'quiz',
              content: [
                'Which of the following is primarily responsible for **Business Logic** and **Security**?'
              ],
              options: [
                'Frontend',
                'Backend',
                'Web Browser',
                'UI/UX Design'
              ],
              correctAnswer: 1,
              insight: 'The backend acts as the secure brain of the application.'
            }
          ]
        },
        {
          id: '1.2',
          title: 'Introduction to PHP',
          slides: [
            {
              id: '1.2.0',
              title: 'Getting Started with PHP',
              type: 'intro',
              content: [
                '**PHP** stands for "Hypertext Preprocessor".',
                'It is the language that powers over **75% of the web**.',
                'Designed specifically for web development, PHP is fast, flexible, and pragmatic.'
              ],
              insight: 'PHP is the foundation of Laravel. Master the language, master the framework.'
            },
            {
              id: '1.2.1',
              title: 'PHP Syntax & Variables',
              type: 'code',
              content: [
                'PHP code is executed on the server.',
                'Variables start with the **$** sign.',
                'Statements must end with a **semicolon (;)**.'
              ],
              code: '<?php\n// Variable declaration\n$greeting = "Hello World";\n$count = 10;\n\necho $greeting; // Outputs: Hello World\n?>',
              language: 'php',
              insight: 'Variable names are case-sensitive ($age is different from $Age).'
            },
            {
              id: '1.2.2',
              title: 'Core Data Types',
              type: 'code',
              content: [
                '**String**: "Hello World"',
                '**Integer**: 100, -5',
                '**Float**: 10.5, 3.14',
                '**Boolean**: true, false',
                '**Array**: Collection of values.'
              ],
              code: '$name = "Laravel"; // String\n$isReady = true;  // Boolean\n$price = 19.99;   // Float\n$tags = ["web", "api"]; // Array',
              language: 'php'
            },
            {
              id: '1.2.3',
              title: 'Control Structures: Logic',
              type: 'code',
              content: [
                'Control the flow of execution based on conditions.',
                '**if / elseif / else**: Check multiple states.',
                '**Logical Operators**: **&&** (And), **||** (Or), **!** (Not).',
                '**Comparison**: **==** (Equal), **===** (Identical), **!=** (Not Equal).'
              ],
              code: '$score = 85;\n\nif ($score >= 90) {\n    echo "A - Excellent";\n} elseif ($score >= 80) {\n    echo "B - Good";\n} elseif ($score >= 50) {\n    echo "C - Pass";\n} else {\n    echo "F - Fail";\n}',
              language: 'php',
              insight: 'Always use === (Identical) to check both value and data type for better security.'
            },
            {
              id: '1.2.4',
              title: 'Control Structures: Loops',
              type: 'code',
              content: [
                'Used to run the same block of code multiple times.',
                '**for**: Best for known iteration counts.',
                '**foreach**: Best for arrays and objects.'
              ],
              code: '// For Loop\nfor ($i = 0; $i < 5; $i++) {\n    echo $i;\n}\n\n// Foreach Loop\n$colors = ["Red", "Green"];\nforeach ($colors as $color) {\n    echo $color;\n}',
              language: 'php'
            },
            {
              id: '1.2.5',
              title: 'Functions',
              type: 'code',
              content: [
                'A block of code that can be reused.',
                'Can take parameters and return values.',
                'Helps keep code **DRY** (Don\'t Repeat Yourself).'
              ],
              code: 'function add($a, $b) {\n    return $a + $b;\n}\n\n$result = add(5, 10);\necho $result; // 15',
              language: 'php'
            },
            {
              id: '1.2.6',
              title: 'OOP: Classes & Objects',
              type: 'code',
              content: [
                '**Class**: A blueprint for objects.',
                '**Object**: An instance of a class.',
                '**Properties**: Variables inside a class.',
                '**Methods**: Functions inside a class.'
              ],
              code: 'class User {\n    public $name;\n\n    public function sayHi() {\n        return "Hi, " . $this->name;\n    }\n}\n\n$user = new User();\n$user->name = "Ratha";\necho $user->sayHi();',
              language: 'php'
            },
            {
              id: '1.2.7',
              title: 'OOP: Inheritance',
              type: 'code',
              content: [
                'Allows a class to inherit properties/methods from another class.',
                'Use the **extends** keyword.',
                'Promotes code reusability.'
              ],
              code: 'class Admin extends User {\n    public function deleteUser() {\n        return "User deleted";\n    }\n}',
              language: 'php',
              insight: 'Laravel Controllers inherit from a base Controller class.'
            },
            {
              id: '1.2.8',
              title: 'Composer & Packages',
              type: 'code',
              content: [
                'Composer is the **Dependency Manager** for PHP.',
                'Allows you to install libraries created by others.',
                'Used to install Laravel itself!'
              ],
              code: '// Install a package\ncomposer require nesbot/carbon\n\n// Autoload packages\nrequire "vendor/autoload.php";',
              language: 'bash'
            },
            {
              id: '1.2.9',
              title: 'Practice Lab: Simple Math',
              type: 'concept',
              isList: false,
              content: [
                '1. Create a function called `calculateArea($width, $height)`.',
                '2. Use an `if` statement to check if dimensions are positive.',
                '3. Output the result using `echo`.',
                '4. Bonus: Use an array to calculate areas for multiple rectangles.'
              ],
              insight: 'Practice is the only way to master programming logic.'
            },
            {
              id: '1.2.10',
              title: 'Module 1.2 Quiz',
              type: 'quiz',
              content: [
                'In PHP, which character is used to start a **variable** name?'
              ],
              options: [
                '#',
                '@',
                '$',
                '&'
              ],
              correctAnswer: 2,
              insight: 'All PHP variables must start with the dollar sign ($).'
            }
          ]
        },
        {
          id: '1.3',
          title: 'Introduction to Databases',
          slides: [
            {
              id: '1.3.0',
              title: 'Understanding Data Persistence',
              type: 'intro',
              content: [
                'Apps are useless if they forget user data when the server restarts.',
                '**Databases** provide a permanent home for your application\'s information.',
                'We will learn how to structure, store, and retrieve data efficiently.'
              ],
              insight: 'A database is the "long-term memory" of your backend system.'
            },
            {
              id: '1.3.1',
              title: 'SQL vs NoSQL',
              type: 'concept',
              content: [
                '**Relational (SQL)**: Structured data in tables with strict schemas (MySQL, PostgreSQL).',
                '**NoSQL**: Flexible, document-based data (MongoDB, Redis).',
                '**Choosing**: Use SQL for complex relationships; NoSQL for high-speed, unstructured data.'
              ],
              insight: 'Laravel is optimized for SQL databases, making data relationships easy to manage.'
            },
            {
              id: '1.3.2',
              title: 'SQL: Data Selection',
              type: 'code',
              content: [
                'The **SELECT** statement is used to fetch data.',
                'Use **WHERE** to filter results.',
                'Use **ORDER BY** to sort data.'
              ],
              code: '-- Get all users from Cambodia\nSELECT * FROM users\nWHERE country = "Cambodia"\nORDER BY created_at DESC;',
              language: 'sql'
            },
            {
              id: '1.3.3',
              title: 'SQL: Data Manipulation',
              type: 'code',
              content: [
                '**INSERT**: Add new records.',
                '**UPDATE**: Modify existing data.',
                '**DELETE**: Remove records.'
              ],
              code: '-- Insert new user\nINSERT INTO users (name, email) \nVALUES ("Ratha", "ratha@example.com");\n\n-- Update existing record\nUPDATE users SET status = "active" \nWHERE id = 1;',
              language: 'sql',
              insight: 'Always use a WHERE clause with UPDATE and DELETE to avoid data loss!'
            },
            {
              id: '1.3.4',
              title: 'Database Design: Keys',
              type: 'concept',
              content: [
                '**Primary Key**: A unique ID for every row (e.g., `id`).',
                '**Foreign Key**: A link between two tables.',
                '**Relationships**: One-to-One, One-to-Many, Many-to-Many.'
              ],
              insight: 'Foreign keys are the "glue" that holds your application data together.'
            },
            {
              id: '1.3.5',
              title: 'Database Normalization',
              type: 'concept',
              content: [
                'The process of organizing data to reduce **redundancy**.',
                '**1NF**: No multi-valued attributes.',
                '**2NF**: No partial dependencies on the primary key.',
                '**3NF**: No transitive dependencies.'
              ],
              insight: 'Think of normalization as "A place for everything, and everything in its place."'
            },
            {
              id: '1.3.6',
              title: 'Module 1.3 Quiz',
              type: 'quiz',
              content: [
                'Which SQL command is used to **modify** existing data in a table?'
              ],
              options: [
                'MODIFY',
                'CHANGE',
                'UPDATE',
                'EDIT'
              ],
              correctAnswer: 2,
              insight: 'The UPDATE command is standard SQL for changing existing records.'
            }
          ]
        },
        {
          id: '1.4',
          title: 'Web Servers & HTTP',
          slides: [
            {
              id: '1.4.0',
              title: 'The Language of the Web',
              type: 'intro',
              content: [
                'Web Servers and **HTTP** are the communication systems of the internet.',
                'They define how data travels from your server to the student\'s browser.',
                'Understanding these protocols is key to debugging backend issues.'
              ],
              insight: 'HTTP is the standard "contract" that all web applications follow.'
            },
            {
              id: '1.4.1',
              title: 'How Web Servers Work',
              type: 'content',
              content: [
                '**Apache/Nginx**: Act as the "front door".',
                'Receive HTTP requests and pass them to PHP-FPM.',
                'Serve static files (images, CSS) directly.'
              ]
            },
            {
              id: '1.4.2',
              title: 'HTTP Methods',
              type: 'content',
              content: [
                '**GET**: Retrieve data.',
                '**POST**: Create data.',
                '**PUT/PATCH**: Update data.',
                '**DELETE**: Remove data.'
              ]
            },
            {
              id: '1.4.3',
              title: 'HTTP Status Codes',
              type: 'content',
              content: [
                '**200 OK**: Success.',
                '**201 Created**: Resource created.',
                '**404 Not Found**: Missing resource.',
                '**500 Server Error**: Code crashed.'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Module 2: Setting Up Your Laravel Environment',
      lessons: [
        {
          id: '2.1',
          title: 'Why Laravel?',
          slides: [
            {
              id: '2.1.0',
              title: 'Welcome to the Laravel Ecosystem',
              type: 'intro',
              content: [
                '**Laravel** is more than just a framework; it\'s a productivity tool.',
                'It was built to make developers happy by providing elegant tools for common tasks.',
                'We are moving from "Raw PHP" to a high-performance framework.'
              ],
              insight: 'Laravel is "The PHP Framework for Web Artisans."'
            },
            {
              id: '2.1.1',
              title: 'Key Benefits & Features',
              type: 'concept',
              content: [
                '**Eloquent ORM**: Interact with your database using PHP, not SQL.',
                '**Blade Templating**: Powerful, logic-free HTML templates.',
                '**Security**: Built-in protection against SQL injection, CSRF, and XSS.',
                '**Ecosystem**: Tools like Forge, Vapor, and Nova for deployment and management.'
              ]
            },
            {
              id: '2.1.2',
              title: 'Framework Comparison',
              type: 'concept',
              content: [
                '**Laravel**: Elegant, feature-rich, "batteries included".',
                '**Symfony**: Robust, modular, often used for enterprise apps.',
                '**CodeIgniter**: Lightweight, very fast, but lacks modern features.',
                '**Slim**: A micro-framework for very simple APIs.'
              ],
              insight: 'Laravel uses many Symfony components under the hood, giving it enterprise-grade stability.'
            }
          ]
        },
        {
          id: '2.2',
          title: 'Installing Laravel',
          slides: [
            {
              id: '2.2.0',
              title: 'The Installation Process',
              type: 'intro',
              content: [
                'We will now set up your first professional Laravel project.',
                'There are a few prerequisites we need to verify first.',
                'Step-by-step: From empty folder to working website.'
              ]
            },
            {
              id: '2.2.1',
              title: 'Prerequisites',
              type: 'concept',
              content: [
                '**PHP**: Minimum version 8.2+ required.',
                '**Composer**: The package manager we installed earlier.',
                '**Database**: MySQL, PostgreSQL, or SQLite.',
                '**Extensions**: OpenSSL, PDO, Mbstring, and Tokenizer must be enabled.'
              ],
              insight: 'Most local stacks like XAMPP or Laragon handle these extensions automatically.'
            },
            {
              id: '2.2.2',
              title: 'Create Your Project',
              type: 'code',
              content: [
                'Use Composer to download the Laravel boilerplate.',
                'Replace `my-app` with your desired project name.'
              ],
              code: '// Method 1: Via Composer\ncomposer create-project laravel/laravel my-app\n\n// Method 2: Via Laravel Installer\nlaravel new my-app',
              language: 'bash'
            },
            {
              id: '2.2.3',
              title: 'Project Structure',
              type: 'concept',
              content: [
                '**app/**: Contains your core business logic (Models, Controllers).',
                '**routes/**: Where you define your URL entry points.',
                '**resources/**: Your frontend views and CSS/JS.',
                '**database/**: Your migrations and seeders.',
                '**.env**: Your environment-specific configuration (Database credentials).'
              ],
              insight: 'Focus on "app/" and "routes/" — that\'s where 80% of your work happens.'
            }
          ]
        },
        {
          id: '2.3',
          title: 'Environment Tools',
          slides: [
            {
              id: '2.3.0',
              title: 'Local Development Stacks',
              type: 'intro',
              content: [
                'To run PHP and MySQL, you need a local server environment.',
                'There are many options depending on your OS and experience level.'
              ]
            },
            {
              id: '2.3.1',
              title: 'All-in-One Stacks',
              type: 'concept',
              content: [
                '**XAMPP/WAMP**: Traditional, cross-platform, good for basics.',
                '**Laragon (Windows)**: The favorite for Windows users. Fast and easy.',
                '**DBngin**: A lightweight tool for managing multiple databases.'
              ]
            },
            {
              id: '2.3.2',
              title: 'Advanced Environments',
              type: 'concept',
              content: [
                '**Laravel Valet (macOS)**: Zero-config, lighting fast for Mac.',
                '**Laravel Herd**: One-click PHP development environment (Mac/Windows).',
                '**Docker (Sail)**: Containerized environments for team consistency.'
              ],
              insight: 'Start with Laragon or Herd for the smoothest learning curve.'
            }
          ]
        },
        {
          id: '2.4',
          title: 'The Artisan Console',
          slides: [
            {
              id: '2.4.0',
              title: 'Automating with Artisan',
              type: 'intro',
              content: [
                '**Artisan** is the command-line companion for your Laravel projects.',
                'It allows you to generate code, manage databases, and run tests instantly.',
                'Mastering Artisan will cut your development time in half.'
              ],
              insight: 'The best developers use CLI tools to automate repetitive tasks.'
            },
            {
              id: '2.4.1',
              title: 'Listing Commands',
              type: 'code',
              content: [
                'Use `list` to see every available command.',
                'Use `--help` to learn how to use a specific command.'
              ],
              code: '// See all commands\nphp artisan list\n\n// Get help for a command\nphp artisan help make:controller',
              language: 'bash'
            },
            {
              id: '2.4.2',
              title: 'Generating Code',
              type: 'code',
              content: [
                'Avoid manual file creation. Use `make` commands.',
                'This ensures proper naming conventions and boilerplate.'
              ],
              code: '// Create a Controller\nphp artisan make:controller PostController\n\n// Create a Model + Migration\nphp artisan make:model Post -m',
              language: 'bash'
            },
            {
              id: '2.4.3',
              title: 'Serving Your App',
              type: 'code',
              content: [
                'Start a local PHP development server.',
                'Your app will be available at `http://127.0.0.1:8000`.'
              ],
              code: 'php artisan serve',
              language: 'bash'
            }
          ]
        }
      ]
    }
  ]
};
