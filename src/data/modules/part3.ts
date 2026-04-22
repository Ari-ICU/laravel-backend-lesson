import { Part } from '../types';

export const part3: Part = {
  id: 'part-3',
  title: 'Part 3: Building Features with Laravel',
  modules: [
    {
      id: 'module-6',
      title: 'Module 6: Working with Forms',
      lessons: [
        {
          id: '6.1',
          title: 'HTML Forms in Laravel',
          slides: [
            {
              id: '6.1.0',
              title: 'Handling User Input',
              type: 'intro',
              content: [
                'Forms are the primary way users send data to your application.',
                'However, they are also a major source of security vulnerabilities.',
                'Laravel provides built-in protection for every single form.'
              ],
              animation: 'security',
              insight: 'Security is not an "Add-on" in Laravel; it\'s built into the core.'
            },
            {
              id: '6.1.1',
              title: 'GET vs. POST',
              type: 'concept',
              content: [
                '**GET**: Used for searching or filtering. Data is visible in the URL.',
                '**POST**: Used for creating or updating data. Data is hidden in the body.',
                'Always use POST for actions that modify the state of your application.'
              ]
            },
            {
              id: '6.1.2',
              title: 'CSRF Protection',
              type: 'code',
              content: [
                'Every POST form **must** include a `@csrf` directive.',
                'This generates a hidden token to prevent Cross-Site Request Forgery.'
              ],
              code: '<form method="POST" action="/posts">\n    @csrf\n    \n    <input type="text" name="title">\n    <button type="submit">Submit</button>\n</form>',
              language: 'php'
            }
          ]
        },
        {
          id: '6.2',
          title: 'Request Validation',
          slides: [
            {
              id: '6.2.0',
              title: 'The Golden Rule',
              type: 'intro',
              content: [
                '**Never trust user input.**',
                'Validation ensures the data meets your requirements before it touches the database.',
                'Laravel makes complex validation rules simple to write.'
              ]
            },
            {
              id: '6.2.1',
              title: 'The validate() Method',
              type: 'code',
              content: [
                'The simplest way to validate data in a controller.',
                'Laravel handles the error redirection and session flash data automatically.'
              ],
              code: '$validated = $request->validate([\n    "title" => "required|unique:posts|max:255",\n    "body" => "required|min:10"\n]);',
              language: 'php'
            },
            {
              id: '6.2.2',
              title: 'Form Request Classes',
              type: 'code',
              content: [
                'For complex validation, move logic into a dedicated class.',
                'This keeps your controllers clean and reusable.'
              ],
              code: '// Create the class\nphp artisan make:request StorePostRequest\n\n// In your Controller\npublic function store(StorePostRequest $request) {\n    // The incoming request is already validated!\n    $data = $request->validated();\n}',
              language: 'php',
              insight: 'Use Form Requests whenever you have more than 5-6 validation rules.'
            },
            {
              id: '6.2.3',
              title: 'Displaying Errors',
              type: 'code',
              content: [
                'Access validation errors in your Blade templates.',
                'The `$errors` variable is available in every view.'
              ],
              code: '@error("title")\n    <div class="alert alert-danger">{{ $message }}</div>\n@enderror',
              language: 'php'
            }
          ]
        },
        {
          id: '6.3',
          title: 'File Uploads',
          slides: [
            {
              id: '6.3.0',
              title: 'Managing Media',
              type: 'intro',
              content: [
                'Handling profile pictures, documents, or videos is a common task.',
                'Laravel provides a powerful `UploadedFile` object to make this easy.',
                'You can store files locally or on cloud services like AWS S3.'
              ]
            },
            {
              id: '6.3.1',
              title: 'Uploading Files',
              type: 'code',
              content: [
                'Ensure your form has `enctype="multipart/form-data"`.',
                'Use the `store()` method to save the file.'
              ],
              code: 'public function upload(Request $request) {\n    if ($request->hasFile("avatar")) {\n        $path = $request->file("avatar")->store("avatars");\n        return "File saved at: " . $path;\n    }\n}',
              language: 'php'
            },
            {
              id: '6.3.2',
              title: 'The Filesystem Library',
              type: 'code',
              content: [
                'The `Storage` facade provides a unified API for managing files.',
                'You can switch from `local` to `s3` just by changing the config.'
              ],
              code: 'use Illuminate\\Support\\Facades\\Storage;\n\n// Check if file exists\nif (Storage::exists("file.jpg")) {\n    // Delete the file\n    Storage::delete("file.jpg");\n}',
              language: 'php',
              insight: 'Check `config/filesystems.php` to define your storage "disks".'
            }
          ]
        }
      ]
    },
    {
      id: 'module-7',
      title: 'Module 7: Authentication and Authorization',
      lessons: [
        {
          id: '7.1',
          title: 'Built-in Authentication',
          slides: [
            {
              id: '7.1.0',
              title: 'Don\'t Rebuild the Wheel',
              type: 'intro',
              content: [
                'Authentication is hard to get right and dangerous to get wrong.',
                'Laravel provides official "Starter Kits" that handle everything for you.',
                'Includes login, registration, password reset, and verification.'
              ],
              animation: 'security'
            },
            {
              id: '7.1.1',
              title: 'Scaffolding Options',
              type: 'concept',
              content: [
                '**Laravel Breeze**: Simple, minimal, Blade or Vue/React. Best for beginners.',
                '**Laravel Jetstream**: Advanced, includes teams, API tokens, 2FA. Uses Livewire or Inertia.',
                '**Laravel UI**: The legacy Bootstrap/Vue/React scaffolding (maintained for older apps).'
              ],
              insight: 'For most new projects, start with Laravel Breeze.'
            }
          ]
        },
        {
          id: '7.2',
          title: 'Middleware',
          slides: [
            {
              id: '7.2.0',
              title: 'Guarding Your Pages',
              type: 'intro',
              content: [
                'Middleware act as "filters" for incoming requests.',
                'They can check if a user is logged in, verify permissions, or log activity.',
                'You can use built-in middleware or create your own.'
              ]
            },
            {
              id: '7.2.1',
              title: 'The Auth Middleware',
              type: 'code',
              content: [
                'Apply the `auth` middleware to routes or controller constructors.',
                'If a guest tries to access a protected route, they are redirected to login.'
              ],
              code: '// In routes/web.php\nRoute::get("/dashboard", [DashboardController::class, "index"])->middleware("auth");',
              language: 'php'
            },
            {
              id: '7.2.2',
              title: 'Custom Middleware',
              type: 'code',
              content: [
                'Create your own logic to run before or after a request.',
                'Use Artisan to generate the class.'
              ],
              code: '// Generate class\nphp artisan make:middleware IsAdmin\n\n// In Middleware handle method\nif ($request->user() && $request->user()->role === "admin") {\n    return $next($request);\n}',
              language: 'php',
              insight: 'Register your custom middleware in `app/Http/Kernel.php` to use it in routes.'
            }
          ]
        },
        {
          id: '7.3',
          title: 'Gates and Policies',
          slides: [
            {
              id: '7.3.0',
              title: 'Granular Permissions',
              type: 'intro',
              content: [
                'Authentication is about "Who are you?".',
                'Authorization is about "What are you allowed to do?".',
                'Laravel provides **Gates** for simple actions and **Policies** for resources.'
              ]
            },
            {
              id: '7.3.1',
              title: 'Defining Gates',
              type: 'code',
              content: [
                'Gates are Closures that determine if a user is authorized for an action.',
                'They are usually defined in the `AuthServiceProvider`.'
              ],
              code: 'Gate::define("update-post", function (User $user, Post $post) {\n    return $user->id === $post->user_id;\n});',
              language: 'php'
            },
            {
              id: '7.3.2',
              title: 'Using Policies',
              type: 'code',
              content: [
                'Policies are classes that organize authorization logic for a specific model.',
                'This is the preferred way for large applications.'
              ],
              code: '// Generate Policy\nphp artisan make:policy PostPolicy --model=Post\n\n// Use in Controller\n$this->authorize("update", $post);',
              language: 'php'
            },
            {
              id: '7.3.3',
              title: 'Blade Directives',
              type: 'code',
              content: [
                'Show or hide parts of your UI based on permissions.',
                'Use `@can` and `@cannot` for clean template logic.'
              ],
              code: '@can("update", $post)\n    <a href="/post/{{ $post->id }}/edit">Edit Post</a>\n@else\n    <p>You do not have permission to edit this post.</p>\n@endcan',
              language: 'php',
              insight: 'Never rely on UI hiding alone; always verify authorization in the Controller as well.'
            }
          ]
        }
      ]
    },
    {
      id: 'module-8',
      title: 'Module 8: Relationships in Eloquent ORM',
      lessons: [
        {
          id: '8.1',
          title: 'Defining Relationships',
          slides: [
            {
              id: '8.1.0',
              title: 'Connecting Your Models',
              type: 'intro',
              content: [
                'Real-world data is connected (Users have Posts, Posts have Comments).',
                'Eloquent makes these connections feel like simple object properties.',
                'We will master the common and advanced relationship types.'
              ]
            },
            {
              id: '8.1.1',
              title: 'One-to-One & One-to-Many',
              type: 'code',
              content: [
                'The building blocks of every database.',
                'Use `hasOne` / `belongsTo` and `hasMany` / `belongsTo`.'
              ],
              code: '// 1:1 - User has one Profile\npublic function profile() { return $this->hasOne(Profile::class); }\n\n// 1:N - User has many Posts\npublic function posts() { return $this->hasMany(Post::class); }',
              language: 'php'
            },
            {
              id: '8.1.2',
              title: 'Many-to-Many',
              type: 'code',
              content: [
                'Users can have many Roles, and Roles can have many Users.',
                'This requires a "pivot" table (e.g., `role_user`).'
              ],
              code: '// User Model\npublic function roles() {\n    return $this->belongsToMany(Role::class);\n}',
              language: 'php',
              insight: 'Laravel assumes the pivot table name is the singular names of the two models in alphabetical order.'
            },
            {
              id: '8.1.3',
              title: 'Advanced Through Relations',
              type: 'code',
              content: [
                '**Has Many Through**: Access data through a middle table.',
                '**Has One Through**: Same, but for a single record.'
              ],
              code: '// Project -> Environment -> Deployment\npublic function deployments() {\n    return $this->hasManyThrough(Deployment::class, Environment::class);\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '8.2',
          title: 'Querying Relationships',
          slides: [
            {
              id: '8.2.0',
              title: 'Fetching Related Data',
              type: 'intro',
              content: [
                'Once defined, you can access relationships as if they were properties.',
                'However, you must be careful about performance.',
                'We will learn how to load data efficiently.'
              ]
            },
            {
              id: '8.2.1',
              title: 'Eager Loading (with())',
              type: 'code',
              content: [
                'Avoid the **N+1 query problem**.',
                'Load all related data in just 2 queries instead of 100.'
              ],
              code: '// Bad (N+1 queries)\n$posts = Post::all(); \n\n// Good (Eager Loaded)\n$posts = Post::with("user", "comments")->get();',
              language: 'php',
              insight: 'Always use eager loading when looping through a collection and accessing relations.'
            },
            {
              id: '8.2.2',
              title: 'Lazy Eager Loading',
              type: 'code',
              content: [
                'Sometimes you only want to load a relation if a condition is met.',
                'Use the `load()` method on an existing model instance.'
              ],
              code: '$user = User::first();\n\nif ($showPosts) {\n    $user->load("posts");\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '8.3',
          title: 'Relationship Methods',
          slides: [
            {
              id: '8.3.0',
              title: 'Managing Connections',
              type: 'intro',
              content: [
                'How do we actually save the connections between models?',
                'Eloquent provides specialized methods for creating and syncing data.',
                'This is much safer than manually setting foreign keys.'
              ]
            },
            {
              id: '8.3.1',
              title: 'Saving & Creating',
              type: 'code',
              content: [
                'Use `save()` or `create()` directly on the relationship.',
                'Laravel automatically sets the foreign key for you.'
              ],
              code: '$user = User::find(1);\n\n// Method 1: Save instance\n$user->posts()->save(new Post(["title" => "New"]));\n\n// Method 2: Create from array\n$user->posts()->create(["title" => "New"]);',
              language: 'php'
            },
            {
              id: '8.3.2',
              title: 'Attach, Sync & Detach',
              type: 'code',
              content: [
                'Exclusively for **Many-to-Many** relationships.',
                '`sync()` is the most powerful method for managing pivot tables.'
              ],
              code: '$user = User::find(1);\n\n// Add a role\n$user->roles()->attach($roleId);\n\n// Sync (Add missing, remove extras) - RECOMMENDED\n$user->roles()->sync([1, 2, 3]);\n\n// Remove a role\n$user->roles()->detach($roleId);',
              language: 'php',
              insight: 'Sync is perfect for update forms with checkboxes.'
            }
          ]
        }
      ]
    }
  ]
};
