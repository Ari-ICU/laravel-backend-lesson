import { Part } from '../types';

export const part2: Part = {
  id: 'part-2',
  title: 'Part 2: Core Laravel Concepts',
  modules: [
    {
      id: 'module-3',
      title: 'Module 3: Routing and Controllers',
      lessons: [
        {
          id: '3.1',
          title: 'Understanding Routing',
          slides: [
            {
              id: '3.1.0',
              title: 'The Entry Points',
              type: 'intro',
              content: [
                '**Routing** is how Laravel handles incoming requests.',
                'It directs a URL to a specific piece of logic (a Closure or a Controller).',
                'In this lesson, we will learn how to map URLs to actions.'
              ],
              insight: 'Think of routes as the "Traffic Controller" of your application.'
            },
            {
              id: '3.1.1',
              title: 'Route Files',
              type: 'concept',
              content: [
                '**routes/web.php**: For web interfaces (supports sessions, CSRF).',
                '**routes/api.php**: For stateless APIs (uses the `api` middleware group).',
                '**routes/console.php**: For CLI-based commands.'
              ]
            },
            {
              id: '3.1.2',
              title: 'HTTP Methods',
              type: 'code',
              content: [
                'Register routes for different HTTP verbs.',
                'Common methods: **GET, POST, PUT, PATCH, DELETE**.'
              ],
              code: 'Route::get("/posts", [PostController::class, "index"]);\nRoute::post("/posts", [PostController::class, "store"]);\nRoute::put("/posts/{id}", [PostController::class, "update"]);\nRoute::delete("/posts/{id}", [PostController::class, "destroy"]);',
              language: 'php'
            },
            {
              id: '3.1.3',
              title: 'Route Parameters',
              type: 'code',
              content: [
                '**Required**: `{id}` must be present in the URL.',
                '**Optional**: `{name?}` can be omitted.',
                'Parameters are passed directly to your controller methods.'
              ],
              code: '// Required\nRoute::get("/user/{id}", function ($id) {\n    return "User " . $id;\n});\n\n// Optional\nRoute::get("/search/{term?}", function ($term = "all") {\n    return "Searching for " . $term;\n});',
              language: 'php'
            },
            {
              id: '3.1.4',
              title: 'Named Routes',
              type: 'code',
              content: [
                'Allow you to refer to a route by name instead of the URL.',
                'This makes changing URLs easier in the future.'
              ],
              code: 'Route::get("/user/profile", [ProfileController::class, "show"])->name("profile");\n\n// Generating a URL in a view or controller\n$url = route("profile");',
              language: 'php',
              insight: 'Always name your routes to avoid "Hardcoding" URLs in your application.'
            },
            {
              id: '3.1.5',
              title: 'Groups & Middleware',
              type: 'code',
              content: [
                '**Middleware**: Filters that run before/after a request (e.g., Auth).',
                '**Groups**: Apply shared settings to multiple routes at once.'
              ],
              code: 'Route::middleware(["auth"])->group(function () {\n    Route::get("/dashboard", [DashboardController::class, "index"]);\n    Route::get("/settings", [SettingsController::class, "edit"]);\n});',
              language: 'php'
            }
          ]
        },
        {
          id: '3.2',
          title: 'Controllers',
          slides: [
            {
              id: '3.2.0',
              title: 'Organizing Your Logic',
              type: 'intro',
              content: [
                'Instead of writing logic in route files, we use **Controllers**.',
                'Controllers group related request handling logic into a single class.',
                'This makes your code clean, testable, and organized.'
              ]
            },
            {
              id: '3.2.1',
              title: 'Creating Controllers',
              type: 'code',
              content: [
                'Use Artisan to generate your controller classes.',
                'Controllers are stored in `app/Http/Controllers`.'
              ],
              code: '// Basic Controller\nphp artisan make:controller UserController\n\n// Resource Controller (Pre-filled methods)\nphp artisan make:controller PostController --resource',
              language: 'bash'
            },
            {
              id: '3.2.2',
              title: 'The Request Object',
              type: 'code',
              content: [
                'Access input, files, and headers from the incoming request.',
                'Laravel automatically injects the `Request` instance.'
              ],
              code: 'public function store(Request $request) {\n    $name = $request->input("name");\n    $email = $request->input("email");\n    \n    return "Saved user: " . $name;\n}',
              language: 'php'
            },
            {
              id: '3.2.3',
              title: 'Dependency Injection',
              type: 'code',
              content: [
                'The Laravel Service Container automatically provides class instances.',
                'Just type-hint the class you need in your method.'
              ],
              code: 'use App\\Services\\PaymentService;\n\npublic function pay(PaymentService $payment) {\n    $payment->process();\n}',
              language: 'php',
              insight: 'This is one of Laravel\'s most powerful features for building decoupled code.'
            }
          ]
        }
      ]
    },
    {
      id: 'module-4',
      title: 'Module 4: Views and Blade Engine',
      lessons: [
        {
          id: '4.1',
          title: 'Introduction to Blade',
          slides: [
            {
              id: '4.1.0',
              title: 'Welcome to Blade',
              type: 'intro',
              content: [
                '**Blade** is the powerful, logic-free templating engine for Laravel.',
                'It allows you to write plain PHP in your templates without the ugly syntax.',
                'Blade files use the `.blade.php` extension and are stored in `resources/views`.'
              ],
              insight: 'Blade is compiled into plain PHP code and cached for maximum performance.'
            },
            {
              id: '4.1.1',
              title: 'Creating Views via CLI',
              type: 'code',
              content: [
                'In modern Laravel, you can generate views using Artisan.',
                'This automatically creates the file in the `resources/views` folder.'
              ],
              code: '// Create a simple view\nphp artisan make:view welcome\n\n// Create a view in a subfolder\nphp artisan make:view users.profile',
              language: 'bash',
              insight: 'This is a newer Artisan command that saves you from manually creating files in the file explorer.'
            },
            {
              id: '4.1.2',
              title: 'Basic Syntax & Directives',
              type: 'code',
              content: [
                'Use `{{ }}` for echoing data and `@` for directives.',
                'Directives are shortcuts for common PHP control structures.'
              ],
              code: '<h1>Hello, {{ $name }}</h1>\n\n@if(count($users) > 0)\n    @foreach($users as $user)\n        <li>{{ $user->name }}</li>\n    @endforeach\n@else\n    <p>No users found.</p>\n@endif',
              language: 'php'
            },
            {
              id: '4.1.3',
              title: 'Escaping Data',
              type: 'concept',
              content: [
                '**{{ $data }}**: Automatically escapes HTML (Prevents XSS attacks).',
                '**{!! $data !!}**: Does NOT escape HTML (Use only for trusted content).',
                'Always use the double braces unless you specifically need to render HTML.'
              ],
              insight: 'Security first: Never use {!! !!} with user-provided input.'
            }
          ]
        },
        {
          id: '4.2',
          title: 'Layouts and Components',
          slides: [
            {
              id: '4.2.0',
              title: 'Layout Architecture',
              type: 'intro',
              content: [
                'Don\'t repeat your HTML header and footer on every page.',
                'Use **Layout Inheritance** to define a main structure once.',
                'We will learn about `@extends`, `@yield`, and `@section`.'
              ]
            },
            {
              id: '4.2.1',
              title: 'The Main Layout',
              type: 'code',
              content: [
                'Define a `layout.blade.php` with placeholders using `@yield`.',
                'This serves as the skeleton for your entire site.'
              ],
              code: '<!-- resources/views/layouts/app.blade.php -->\n<html>\n    <body>\n        <nav>Navbar</nav>\n        \n        <div class="content">\n            @yield("content")\n        </div>\n    </body>\n</html>',
              language: 'php'
            },
            {
              id: '4.2.2',
              title: 'Extending a Layout',
              type: 'code',
              content: [
                'Child views "extend" the main layout and fill the sections.',
                'Use `@section` to provide content for the `@yield` placeholders.'
              ],
              code: '@extends("layouts.app")\n\n@section("content")\n    <h1>Welcome to my Homepage!</h1>\n    <p>This content is injected into the main layout.</p>\n@endsection',
              language: 'php'
            },
            {
              id: '4.2.3',
              title: 'Including & Components',
              type: 'code',
              content: [
                '**@include**: For simple reusable snippets (e.g., partials).',
                '**Components**: For advanced, reusable UI elements with logic.'
              ],
              code: '// Including a partial\n@include("partials.footer")\n\n// Using a component\n<x-alert type="error">\n    Something went wrong!\n</x-alert>',
              language: 'php'
            }
          ]
        },
        {
          id: '4.3',
          title: 'Passing Data to Views',
          slides: [
            {
              id: '4.3.0',
              title: 'Communicating with Views',
              type: 'intro',
              content: [
                'Controllers need a way to send data to the frontend.',
                'Laravel provides several elegant ways to pass variables.',
                'We will look at `view()`, `with()`, and the `compact()` helper.'
              ]
            },
            {
              id: '4.3.1',
              title: 'The view() Helper',
              type: 'code',
              content: [
                'The most common way to return a view with data.',
                'Data is passed as an associative array in the second argument.'
              ],
              code: 'public function index() {\n    return view("users.profile", [\n        "name" => "Ratha",\n        "role" => "Developer"\n    ]);\n}',
              language: 'php'
            },
            {
              id: '4.3.2',
              title: 'The compact() Helper',
              type: 'code',
              content: [
                'A PHP shortcut that makes code cleaner.',
                'It creates an array from existing variable names.'
              ],
              code: 'public function show($id) {\n    $user = User::find($id);\n    $posts = $user->posts;\n\n    return view("user.show", compact("user", "posts"));\n}',
              language: 'php',
              insight: 'Most Laravel developers prefer compact() for its brevity and readability.'
            }
          ]
        }
      ]
    },
    {
      id: 'module-5',
      title: 'Module 5: Databases and Eloquent ORM',
      lessons: [
        {
          id: '5.1',
          title: 'Database Configuration',
          slides: [
            {
              id: '5.1.0',
              title: 'Connecting Your App',
              type: 'intro',
              content: [
                'Before saving data, we must connect Laravel to a database.',
                'Laravel supports MySQL, PostgreSQL, SQLite, and SQL Server out of the box.',
                'The **.env** file is where we store our credentials securely.'
              ],
              animation: 'database',
              insight: 'Never commit your .env file to version control (Git).'
            },
            {
              id: '5.1.1',
              title: 'The .env File',
              type: 'code',
              content: [
                'Change these values to match your local database settings.',
                'Laravel uses these variables to establish a connection.'
              ],
              code: 'DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=my_laravel_app\nDB_USERNAME=root\nDB_PASSWORD=',
              language: 'bash'
            }
          ]
        },
        {
          id: '5.2',
          title: 'Database Migrations',
          slides: [
            {
              id: '5.2.0',
              title: 'Version Control for Data',
              type: 'intro',
              content: [
                '**Migrations** allow you to define your database schema in PHP code.',
                'This means your whole team can have the exact same database structure.',
                'Think of it as "Git for your database".'
              ]
            },
            {
              id: '5.2.1',
              title: 'Creating Migrations',
              type: 'code',
              content: [
                'Use Artisan to generate a migration file.',
                'Files are stored in `database/migrations`.'
              ],
              code: '// Create a new table\nphp artisan make:migration create_posts_table\n\n// Update an existing table\nphp artisan make:migration add_votes_to_posts_table',
              language: 'bash'
            },
            {
              id: '5.2.2',
              title: 'The Schema Builder',
              type: 'code',
              content: [
                'Define your columns using the `Blueprint` object.',
                'Common types: `string`, `text`, `integer`, `boolean`, `timestamps`.'
              ],
              code: 'Schema::create("posts", function (Blueprint $table) {\n    $table->id();\n    $table->string("title");\n    $table->text("body");\n    $table->boolean("is_published")->default(false);\n    $table->timestamps();\n});',
              language: 'php'
            },
            {
              id: '5.2.3',
              title: 'Running Migrations',
              type: 'code',
              content: [
                'Apply your changes to the database.',
                'You can also rollback if you made a mistake.'
              ],
              code: '// Run all pending migrations\nphp artisan migrate\n\n// Undo the last migration\nphp artisan migrate:rollback\n\n// Reset and re-run everything (DANGER: Deletes data)\nphp artisan migrate:fresh',
              language: 'bash',
              insight: 'Use migrate:fresh during development, but NEVER in production!'
            }
          ]
        },
        {
          id: '5.3',
          title: 'Eloquent ORM - Models',
          slides: [
            {
              id: '5.3.0',
              title: 'The Active Record Pattern',
              type: 'intro',
              content: [
                '**Eloquent** is Laravel\'s Object-Relational Mapper (ORM).',
                'Each database table has a corresponding "Model" to interact with it.',
                'Models allow you to query data using PHP instead of writing SQL.'
              ]
            },
            {
              id: '5.3.1',
              title: 'Creating Models',
              type: 'code',
              content: [
                'Models are stored in `app/Models`.',
                'Convention: Table is `posts` (plural), Model is `Post` (singular).'
              ],
              code: '// Basic Model\nphp artisan make:model Post\n\n// Model + Migration + Controller (The "Power" command)\nphp artisan make:model Post -mc',
              language: 'bash'
            },
            {
              id: '5.3.2',
              title: 'Mass Assignment',
              type: 'code',
              content: [
                'For security, you must define which fields can be filled automatically.',
                'Use the `$fillable` property to protect your model.'
              ],
              code: 'class Post extends Model {\n    protected $fillable = ["title", "body"];\n}',
              language: 'php',
              insight: 'This prevents "Overposting" attacks where a user could inject extra data into your database.'
            }
          ]
        },
        {
          id: '5.4',
          title: 'CRUD Operations',
          slides: [
            {
              id: '5.4.0',
              title: 'CRUD Operations',
              type: 'intro',
              content: [
                '**CRUD**: Create, Read, Update, Delete.',
                'These are the four basic functions of persistent storage.',
                'Eloquent makes these operations incredibly simple and readable.'
              ]
            },
            {
              id: '5.4.1',
              title: 'Create & Read',
              type: 'code',
              content: [
                'Creating a new record vs. Fetching existing ones.',
                'Use `all()`, `find()`, or `where()` to retrieve data.'
              ],
              code: '// Create\nPost::create(["title" => "My First Post", "body" => "Hello!"]);\n\n// Read All\n$posts = Post::all();\n\n// Find by ID\n$post = Post::find(1);',
              language: 'php'
            },
            {
              id: '5.4.2',
              title: 'Update & Delete',
              type: 'code',
              content: [
                'Modify existing records or remove them entirely.',
                'You can delete by instance or by ID.'
              ],
              code: '// Update\n$post = Post::find(1);\n$post->update(["title" => "Updated Title"]);\n\n// Delete by instance\n$post->delete();\n\n// Delete by ID\nPost::destroy(1);',
              language: 'php'
            }
          ]
        },
        {
          id: '5.5',
          title: 'The Query Builder',
          slides: [
            {
              id: '5.5.0',
              title: 'When to go "Lower Level"',
              type: 'intro',
              content: [
                'Sometimes Eloquent is too heavy for complex or bulk queries.',
                'The **Query Builder** provides a more direct way to write SQL.',
                'It is faster for huge datasets but less "magical" than Eloquent.'
              ]
            },
            {
              id: '5.5.1',
              title: 'Basic Query Builder',
              type: 'code',
              content: [
                'Use the `DB` facade to build your queries.',
                'This returns plain PHP objects, not Eloquent models.'
              ],
              code: 'use Illuminate\\Support\\Facades\\DB;\n\n// Fetching data\n$users = DB::table("users")->get();\n\n// Complex query\n$users = DB::table("users")\n            ->where("votes", ">", 100)\n            ->orderBy("name")\n            ->get();',
              language: 'php',
              insight: 'Eloquent actually uses the Query Builder under the hood!'
            }
          ]
        }
      ]
    }
  ]
};
