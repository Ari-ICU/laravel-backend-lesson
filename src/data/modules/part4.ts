import { Part } from '../types';

export const part4: Part = {
  id: 'part-4',
  title: 'Part 4: Advanced Topics',
  modules: [
    {
      id: 'module-9',
      title: 'Module 9: Working with APIs',
      lessons: [
        {
          id: '9.1',
          title: 'API Fundamentals',
          slides: [
            {
              id: '9.1.0',
              title: 'Laravel as a Backend',
              type: 'intro',
              content: [
                'Laravel is one of the best frameworks for building robust APIs.',
                'APIs allow your app to talk to mobile apps or modern JS frontends (Vue/React).',
                'Laravel automatically handles JSON serialization for you.'
              ]
            },
            {
              id: '9.1.1',
              title: 'API Routes',
              type: 'code',
              content: [
                'API routes are defined in `routes/api.php`.',
                'They are automatically prefixed with `/api` and have no session state.'
              ],
              code: '// In routes/api.php\nRoute::get("/users", function () {\n    return User::all(); // Returns JSON automatically\n});',
              language: 'php'
            },
            {
              id: '9.1.2',
              title: 'API Resources',
              type: 'code',
              content: [
                'Resources allow you to transform your models into the exact JSON format you want.',
                'This keeps your API consistent even if the database changes.'
              ],
              code: '// Generate Resource\nphp artisan make:resource UserResource\n\n// In UserResource toArray\nreturn [\n    "id" => $this->id,\n    "full_name" => $this->name,\n    "email" => $this->email\n];',
              language: 'php',
              insight: 'Resources are the "Views" for your API.'
            }
          ]
        },
        {
          id: '9.2',
          title: 'API Authentication',
          slides: [
            {
              id: '9.2.0',
              title: 'Securing Your API',
              type: 'intro',
              content: [
                'Since APIs are stateless (no sessions), we use **Tokens** to identify users.',
                'Laravel provides two official packages for this: **Sanctum** and **Passport**.',
                'Choosing the right one depends on your project needs.'
              ]
            },
            {
              id: '9.2.1',
              title: 'Sanctum vs. Passport',
              type: 'concept',
              content: [
                '**Laravel Sanctum**: Lightweight, uses simple tokens. Perfect for SPAs and mobile apps.',
                '**Laravel Passport**: Full OAuth2 server implementation. Use this if you need to issue tokens to 3rd party developers.',
                'Most modern apps only need Sanctum.'
              ],
              insight: 'Sanctum is easier to set up and maintain for 90% of use cases.'
            },
            {
              id: '9.2.2',
              title: 'Issuing Tokens (Sanctum)',
              type: 'code',
              content: [
                'Issuing tokens is as simple as calling `createToken()`.',
                'The token is then sent in the `Authorization` header.'
              ],
              code: '$user = User::where("email", $request->email)->first();\n\n$token = $user->createToken("my-app-token")->plainTextToken;\n\nreturn response()->json(["token" => $token]);',
              language: 'php'
            }
          ]
        }
      ]
    },
    {
      id: 'module-10',
      title: 'Module 10: Error Handling and Logging',
      lessons: [
        {
          id: '10.1',
          title: 'The Exception Handler',
          slides: [
            {
              id: '10.1.0',
              title: 'Managing Failures',
              type: 'intro',
              content: [
                'Every application will eventually encounter errors.',
                'Laravel provides a centralized Exception Handler to catch these errors.',
                'You can decide how to report and render these failures.'
              ]
            },
            {
              id: '10.1.1',
              title: 'Debug Mode (APP_DEBUG)',
              type: 'concept',
              content: [
                'In `.env`, set `APP_DEBUG=true` for local development.',
                'This shows detailed stack traces and error messages.',
                '**IMPORTANT**: Always set to `false` in production to hide secrets.'
              ],
              insight: 'Detailed error messages are a goldmine for hackers. Never leak them in production!'
            }
          ]
        },
        {
          id: '10.2',
          title: 'Logging',
          slides: [
            {
              id: '10.2.0',
              title: 'Keeping a Paper Trail',
              type: 'intro',
              content: [
                'Logging is crucial for debugging production issues.',
                'Laravel provides a robust Logging API built on top of Monolog.',
                'You can log to files, system logs, Slack, or dedicated services.'
              ]
            },
            {
              id: '10.2.1',
              title: 'The Log Facade',
              type: 'code',
              content: [
                'Use the `Log` facade to record information.',
                'Levels: debug, info, notice, warning, error, critical, alert, emergency.'
              ],
              code: 'use Illuminate\\Support\\Facades\\Log;\n\nLog::info("User logged in", ["id" => $user->id]);\n\nLog::error("Payment failed", ["order" => $order->id]);',
              language: 'php'
            },
            {
              id: '10.2.2',
              title: 'Log Channels',
              type: 'code',
              content: [
                'Configure where your logs go in `config/logging.php`.',
                'You can use "stacks" to log to multiple places at once.'
              ],
              code: '// Example: Log to file AND Slack\n"stack" => [\n    "channels" => ["single", "slack"],\n],',
              language: 'php',
              insight: 'Slack notifications for critical errors are a lifesaver for developers.'
            }
          ]
        }
      ]
    },
    {
      id: 'module-11',
      title: 'Module 11: Testing in Laravel',
      lessons: [
        {
          id: '11.1',
          title: 'Introduction to Testing',
          slides: [
            {
              id: '11.1.0',
              title: 'Building with Confidence',
              type: 'intro',
              content: [
                'Manual testing is slow and prone to errors.',
                'Automated tests ensure your app still works after you make changes.',
                'Laravel uses **PHPUnit** by default but also supports **Pest**.'
              ]
            },
            {
              id: '11.1.1',
              title: 'Unit vs. Feature Testing',
              type: 'concept',
              content: [
                '**Unit Tests**: Test a single small piece of logic (a method) in isolation. Very fast.',
                '**Feature Tests**: Test a larger portion of your code, like a full HTTP request. They visit URLs and check responses.'
              ],
              insight: 'Most Laravel developers spend 80% of their time writing Feature Tests.'
            }
          ]
        },
        {
          id: '11.2',
          title: 'Writing Unit Tests',
          slides: [
            {
              id: '11.2.0',
              title: 'Testing Logic',
              type: 'intro',
              content: [
                'Unit tests do not boot the Laravel framework.',
                'This makes them incredibly fast (thousands of tests in seconds).',
                'They are perfect for testing complex calculations or string manipulation.'
              ]
            },
            {
              id: '11.2.1',
              title: 'A Basic Unit Test',
              type: 'code',
              content: [
                'Use the `Unit` folder in the `tests` directory.',
                'Focus on input/output without touching the database.'
              ],
              code: 'public function test_can_format_price() {\n    $order = new Order(["total" => 1000]);\n    \n    $this->assertEquals("$10.00", $order->formattedPrice());\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '11.3',
          title: 'Writing Feature Tests',
          slides: [
            {
              id: '11.3.0',
              title: 'Simulating the User',
              type: 'intro',
              content: [
                'Feature tests are the "Real World" tests.',
                'They simulate a user clicking buttons and filling forms.',
                'They verify that your Routes, Controllers, and Database all work together.'
              ]
            },
            {
              id: '11.3.1',
              title: 'HTTP Feature Test',
              type: 'code',
              content: [
                'Use the `actingAs()` method to log in as a user.',
                'Assert the status code and the final data in the database.'
              ],
              code: 'public function test_user_can_create_post() {\n    $user = User::factory()->create();\n\n    $response = $this->actingAs($user)->post("/posts", [\n        "title" => "My First Test",\n        "body" => "Testing is fun!"\n    ]);\n\n    $response->assertStatus(302);\n    $this->assertDatabaseHas("posts", ["title" => "My First Test"]);\n}',
              language: 'php',
              insight: 'Use `php artisan make:test PostTest` to create a new feature test class.'
            }
          ]
        }
      ]
    },
    {
      id: 'module-12',
      title: 'Module 12: Deployment and Best Practices (ការដាក់ឱ្យដំណើរការ)',
      lessons: [
        {
          id: '12.1',
          title: 'Preparing for Deployment (ការរៀបចំដាក់ឱ្យដំណើរការ)',
          slides: [
            {
              id: '12.1.0',
              title: 'The Production Mindset',
              type: 'intro',
              content: [
                'Production is a different environment from Local.',
                'Security, speed, and stability are the top priorities.',
                'Laravel provides several built-in tools to help you switch smoothly.'
              ],
              insight: 'Never "test in production". Always use a staging environment first.'
            },
            {
              id: '12.1.1',
              title: 'Environment Config (.env)',
              type: 'code',
              content: [
                'In production, you must change your `.env` settings.',
                'Critical: Set `APP_DEBUG=false` and `APP_ENV=production`.',
                'Generate a fresh `APP_KEY` to secure sessions.'
              ],
              code: 'APP_NAME=Laravel\nAPP_ENV=production\nAPP_DEBUG=false\nAPP_URL=https://yourdomain.com\n\nAPP_KEY=base64:random_generated_key...',
              language: 'bash',
              insight: 'Leaking APP_DEBUG=true in production reveals your database passwords and API keys.'
            },
            {
              id: '12.1.2',
              title: 'Application Optimization',
              type: 'code',
              content: [
                'Laravel is fast, but it can be faster.',
                'Caching your configuration and routes reduces filesystem hits.',
                'Use the `optimize` command to bundle all cache commands.'
              ],
              code: '// Optimize everything for production\nphp artisan optimize\n\n// To clear cache if you make changes\nphp artisan optimize:clear',
              language: 'bash',
              insight: 'Run "php artisan optimize" as part of every deployment script.'
            }
          ]
        },
        {
          id: '12.2',
          title: 'Deployment Strategies (យុទ្ធសាស្ត្រនៃការដាក់ឱ្យដំណើរការ)',
          slides: [
            {
              id: '12.2.0',
              title: 'Deployment Workflows',
              type: 'concept',
              content: [
                '**Manual**: FTP/SSH (Not recommended for professional work).',
                '**PaaS**: Laravel Forge, Vapor (Automated and managed).',
                '**Self-Managed**: Nginx + PHP-FPM on a VPS (DigitalOcean, AWS).'
              ],
              insight: 'Laravel Forge is the gold standard for deploying Laravel apps easily.'
            },
            {
              id: '12.2.1',
              title: 'Nginx Configuration',
              type: 'code',
              content: [
                'Nginx should point to the `public/` directory, not the root.',
                'All requests should be routed through `index.php`.'
              ],
              code: 'server {\n    listen 80;\n    server_name example.com;\n    root /var/www/my-app/public;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n}',
              language: 'nginx'
            }
          ]
        },
        {
          id: '12.3',
          title: 'Security Best Practices (ការអនុវត្តល្អបំផុតផ្នែកសន្តិសុខ)',
          slides: [
            {
              id: '12.3.0',
              title: 'Security by Default',
              type: 'intro',
              content: [
                'Laravel protects you from most common attacks out of the box.',
                'However, you still need to follow best practices.',
                'We will cover XSS, CSRF, and SQL Injection.'
              ]
            },
            {
              id: '12.3.1',
              title: 'Preventing XSS & CSRF',
              type: 'concept',
              content: [
                '**XSS (Cross-Site Scripting)**: Laravel\'s `{{ $var }}` automatically escapes HTML.',
                '**CSRF (Cross-Site Request Forgery)**: Always use the `@csrf` directive in forms.',
                '**Mass Assignment**: Always define `$fillable` or `$guarded` in Models.'
              ],
              insight: 'Use `{!! $var !!}` ONLY when you trust the source completely.'
            },
            {
              id: '12.3.2',
              title: 'SQL Injection Protection',
              type: 'code',
              content: [
                'Never pass user input directly into raw SQL queries.',
                'Eloquent and Query Builder use **PDO Parameter Binding** automatically.'
              ],
              code: '// SECURE (Automatic binding)\n$users = DB::table("users")->where("name", $request->input("name"))->get();\n\n// INSECURE (Never do this!)\n$users = DB::select("SELECT * FROM users WHERE name = \'" . $name . "\'");',
              language: 'php'
            }
          ]
        },
        {
          id: '12.4',
          title: 'Performance Optimization (ការបង្កើនប្រសិទ្ធភាព)',
          slides: [
            {
              id: '12.4.0',
              title: 'Scaling Your Application',
              type: 'intro',
              content: [
                'As your app grows, simple tasks can become slow.',
                'We use Caching, Queues, and Database tuning to keep it fast.',
                'A fast app is a happy user.'
              ]
            },
            {
              id: '12.4.1',
              title: 'Caching Strategies',
              type: 'code',
              content: [
                'Store expensive data in Redis or Memcached.',
                'Only fetch from the database when the cache expires.'
              ],
              code: '$users = Cache::remember("users.active", 3600, function () {\n    return User::where("active", true)->get();\n});',
              language: 'php',
              insight: 'Caching is the easiest way to improve performance significantly.'
            },
            {
              id: '12.4.2',
              title: 'Background Jobs (Queues)',
              type: 'code',
              content: [
                'Don\'t make users wait for slow tasks like sending emails.',
                'Push these tasks to a "Queue" to be processed in the background.'
              ],
              code: '// In your Controller\nSendWelcomeEmail::dispatch($user);\n\n// Laravel processes this while the user continues browsing.',
              language: 'php',
              insight: 'Use "php artisan queue:work" to start your background worker.'
            }
          ]
        }
      ]
    },
    {
      id: 'module-13',
      title: 'Module 13: The Laravel Ecosystem (ប្រព័ន្ធអេកូឡូស៊ី Laravel)',
      lessons: [
        {
          id: '13.1',
          title: 'Real-time Applications (កម្មវិធី Real-time)',
          slides: [
            {
              id: '13.1.0',
              title: 'Beyond Request-Response',
              type: 'intro',
              content: [
                'Modern apps need to be alive with real-time updates.',
                'Notifications, chat messages, and live dashboards.',
                'Laravel makes this possible through **Broadcasting**.'
              ]
            },
            {
              id: '13.1.1',
              title: 'Broadcasting Tools',
              type: 'concept',
              content: [
                '**Laravel Reverb**: The new, first-party WebSocket server.',
                '**Pusher**: A hosted service for real-time messages.',
                '**Laravel Echo**: The JavaScript library to listen for events.'
              ],
              insight: 'Reverb is incredibly fast and easy to scale since it\'s built into the core.'
            },
            {
              id: '13.1.2',
              title: 'Dispatching Events',
              type: 'code',
              content: [
                'Create an Event that implements `ShouldBroadcast`.',
                'Laravel handles the rest automatically.'
              ],
              code: 'class OrderStatusUpdated implements ShouldBroadcast {\n    public function broadcastOn() {\n        return new Channel("orders");\n    }\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '13.2',
          title: 'Monitoring and Debugging (ការតាមដាន និងដោះស្រាយបញ្ហា)',
          slides: [
            {
              id: '13.2.0',
              title: 'Watching Your App',
              type: 'intro',
              content: [
                'Once your app is live, you need to know how it\'s performing.',
                'Is it slow? Are there hidden errors? How is the database doing?',
                'Laravel has the best observability tools in the industry.'
              ]
            },
            {
              id: '13.2.1',
              title: 'Essential Tools',
              type: 'concept',
              content: [
                '**Laravel Pulse**: A real-time health dashboard for your server.',
                '**Laravel Telescope**: A powerful local debugging assistant.',
                '**Laravel Horizon**: A beautiful dashboard for your Redis queues.'
              ],
              insight: 'Pulse is a must-have for production to see which routes are the slowest.'
            }
          ]
        },
        {
          id: '13.3',
          title: 'Course Wrap-up (ការបញ្ចប់វគ្គសិក្សា)',
          slides: [
            {
              id: '13.3.0',
              title: 'Congratulations!',
              type: 'summary',
              content: [
                'You have completed the **Laravel Backend Masterclass**.',
                'From PHP basics to production-ready deployment.',
                'You now have the skills to build professional, secure, and fast applications.'
              ],
              insight: 'The learning never stops. Stay curious and keep building!'
            },
            {
              id: '13.3.1',
              title: 'Your Next Steps',
              type: 'concept',
              content: [
                '**Build a Portfolio**: Create 2-3 real-world apps (e.g., Blog, E-commerce, SaaS).',
                '**Learn a Frontend**: Combine your backend with Vue (Inertia) or React.',
                '**Contribute**: Open source is a great way to learn and get noticed.'
              ]
            }
          ]
        },
        {
          id: '13.4',
          title: 'Final Project: The Capstone (គម្រោងបញ្ចប់ការសិក្សា)',
          slides: [
            {
              id: '13.4.0',
              title: 'Putting it All Together',
              type: 'intro',
              content: [
                'It\'s time to apply everything you\'ve learned.',
                'You will build a **Production-Ready REST API** for a real-world scenario.',
                'Focus on: Security, Database Design, and Performance.'
              ]
            },
            {
              id: '13.4.1',
              title: 'Project Requirements',
              type: 'concept',
              content: [
                '**Authentication**: Use Laravel Sanctum for API tokens.',
                '**Relationships**: At least 3 connected models (e.g., User -> Order -> Item).',
                '**Validation**: Custom Form Requests for all endpoints.',
                '**Testing**: Write Feature Tests for the core business logic.',
                '**Optimization**: Implement Caching for slow endpoints.'
              ],
              insight: 'Think like a Senior Developer: handle edge cases and errors gracefully.'
            },
            {
              id: '13.4.2',
              title: 'Submission Guidelines',
              type: 'concept',
              content: [
                '1. Host your code on **GitHub**.',
                '2. Include a professional **README.md** with setup instructions.',
                '3. Document your API endpoints using **Swagger/OpenAPI** or Postman.',
                '4. (Bonus) Deploy your app to a live server.'
              ]
            }
          ]
        },
        {
          id: '13.5',
          title: 'Final Knowledge Check (ការត្រួតពិនិត្យចំណេះដឹង)',
          slides: [
            {
              id: '13.5.0',
              title: 'Security Quiz',
              type: 'quiz',
              content: [
                'Which Laravel feature automatically protects you from CSRF attacks?'
              ],
              options: [
                'Eloquent ORM',
                'The @csrf directive',
                'API Resources',
                'Middleware'
              ],
              correctAnswer: 1,
              insight: 'Always include @csrf in your POST forms to prevent malicious cross-site requests.'
            },
            {
              id: '13.5.1',
              title: 'Deployment Quiz',
              type: 'quiz',
              content: [
                'Which command should you run in production to optimize performance?'
              ],
              options: [
                'php artisan serve',
                'php artisan migrate:fresh',
                'php artisan optimize',
                'php artisan make:controller'
              ],
              correctAnswer: 2,
              insight: 'Optimize caches your config and routes, significantly speeding up the app.'
            },
            {
              id: '13.5.2',
              title: 'Performance Quiz',
              type: 'quiz',
              content: [
                'What is the best way to handle slow tasks like sending emails?'
              ],
              options: [
                'Run them in the Controller',
                'Use a Background Queue',
                'Increase Server RAM',
                'Use a Raw SQL Query'
              ],
              correctAnswer: 1,
              insight: 'Queues keep your application responsive by offloading slow tasks.'
            }
          ]
        }
      ]
    }
  ]
};




