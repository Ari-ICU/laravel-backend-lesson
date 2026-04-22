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
    }
  ]
};
