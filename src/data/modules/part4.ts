import { Part } from '../types';

export const part4: Part = {
  id: 'part-4',
  title: 'Part 4: Advanced Topics (ប្រធានបទកម្រិតខ្ពស់)',
  modules: [
    {
      id: 'module-9',
      title: 'Module 9: Working with APIs (ការធ្វើការជាមួយ API)',
      titleEn: 'Working with APIs',
      icon: 'Globe',
      color: '#10b981',
      lessons: [
        {
          id: '9.1',
          title: 'API Fundamentals (មូលដ្ឋានគ្រឹះនៃ API)',
          titleEn: 'API Fundamentals',
          duration: '25 mins',
          level: 'Advanced',
          slides: [
            {
              id: '9.1.0',
              title: 'Laravel as a Backend',
              titleEn: 'Laravel as a Backend',
              type: 'intro',
              content: [
                '**Backend Strategy**: Laravel គឺជា framework ដ៏មានប្រសិទ្ធភាពមួយសម្រាប់បង្កើត API ដែលមានសុវត្ថិភាព និងរចនាសម្ព័ន្ធរឹងមាំ។ (ជួយឱ្យអ្នកអាចបង្កើត Backend តែមួយ ប៉ុន្តែអាចប្រើប្រាស់បានជាមួយកម្មវិធីច្រើនប្រភេទក្នុងពេលតែមួយ)',
                '**Connectivity**: API អនុញ្ញាតឲ្យ application របស់អ្នកទំនាក់ទំនងជាមួយ mobile apps ឬ modern frontend frameworks ដូចជា Vue ឬ React បានយ៉ាងរលូន។ (ជាស្ពានចម្លងទិន្នន័យរវាង Server និងឧបករណ៍របស់អ្នកប្រើប្រាស់មិនថាជាទូរស័ព្ទ ឬកុំព្យូទ័រ)',
                '**Data Standardization**: Laravel នឹងបម្លែង និង serialize ទិន្នន័យទៅជា JSON format ដោយស្វ័យប្រវត្តិ។ (ដើម្បីធានាថាគ្រប់ប្រព័ន្ធទាំងអស់អាចយល់ និងយកទិន្នន័យទៅបង្ហាញបានយ៉ាងងាយស្រួល និងមានស្ដង់ដារតែមួយ)'
              ],
              useCase: 'Building a headless backend for a React/Next.js dashboard or a mobile application.',
              bestPractices: [
                'Always use versioning in your API URLs (e.g., /api/v1/...)',
                'Return appropriate HTTP status codes (200, 201, 404, 500)',
                'Use JSON as the primary communication format'
              ]
            },
            {
              id: '9.1.1',
              title: 'API Routes',
              titleEn: 'API Routes',
              type: 'code',
              content: [
                '**Dedicated File**: API routes ត្រូវបានកំណត់នៅក្នុង file `routes/api.php` ដែលជាកន្លែងសម្រាប់រៀបចំ API endpoints ទាំងអស់។ (ជួយឱ្យអ្នកបែងចែកដាច់ពីគ្នា រវាង Route សម្រាប់បង្ហាញ Website និង Route សម្រាប់បញ្ជូនទិន្នន័យ API)',
                '**Stateless Design**: រាល់ routes នៅទីនេះនឹងមាន prefix `/api` ដោយស្វ័យប្រវត្តិ ហើយវាដំណើរការ stateless។ (មានន័យថាវាមិនប្រើ session ដូច web routes ទេ ដែលធ្វើឱ្យវាដើរលឿន និងស័ក្តិសមសម្រាប់ Mobile Apps)'
              ],
              code: '// routes/api.php\nRoute::middleware("auth:sanctum")->get("/user", function (Request $request) {\n    return $request->user();\n});\n\n// Basic GET resource\nRoute::get("/products", [ProductController::class, "index"]);',
              language: 'php',
              useCase: 'Creating endpoints that don\'t require session persistence, optimized for high-concurrency stateless requests.',
              bestPractices: [
                'Keep routes clean by using Controllers instead of Closures',
                'Group routes that share common middleware like authentication'
              ]
            },
            {
              id: '9.1.2',
              title: 'API Resources',
              titleEn: 'API Resources',
              type: 'code',
              content: [
                '**Data Transformation**: Resources អនុញ្ញាតឱ្យអ្នកបំប្លែង (Transform) Models ទៅជា JSON Format ដែលអ្នកចង់បានយ៉ាងច្បាស់លាស់។ (ជួយឱ្យអ្នកអាចជ្រើសរើសបានថា តើព័ត៌មានណាខ្លះដែលគួរបង្ហាញឱ្យ User ឃើញ និងព័ត៌មានណាខ្លះដែលគួរលាក់ទុក)',
                '**API Stability**: វាជួយឱ្យ API របស់អ្នកមានរបៀបរៀបរយ ទោះបីជា structure ក្នុង database ផ្លាស់ប្តូរក៏ដោយ។ (ជួយឱ្យអ្នកអាចប្តូរឈ្មោះ Column ក្នុង Database បានដោយមិនប៉ះពាល់ដល់កម្មវិធី Mobile ឬ Web ដែលកំពុងប្រើ API របស់អ្នក)'
              ],
              code: '// Transform model to professional API response\npublic function toArray($request)\n{\n    return [\n        "id" => $this->id,\n        "full_name" => $this->name,\n        "email" => $this->email,\n        "created_at" => $this->created_at->diffForHumans(),\n    ];\n}',
              language: 'php',
              insight: 'Resources ប្រៀបដូចជា "Views" សម្រាប់ API របស់អ្នកអញ្ចឹង។',
              useCase: 'Obfuscating database column names and providing extra computed attributes to front-end developers.',
              bestPractices: [
                'Never return the raw model; always wrap it in a Resource',
                'Conditionally load relationships using $this->whenLoaded()'
              ]
            },
            {
              id: '9.1.3',
              title: 'Real-world Demo: Mobile App API Response',
              titleEn: 'API Response Demo',
              type: 'code',
              content: [
                '**Advanced Resource**: ការប្រើប្រាស់ Resource ដើម្បីប្ដូរឈ្មោះ Column និងរៀបចំទម្រង់ទិន្នន័យឱ្យសមស្របសម្រាប់ Mobile App។',
                '**Data Consistency**: ធានាថាទិន្នន័យដែលបញ្ជូនទៅកាន់ User មានលក្ខណៈដូចគ្នាជានិច្ច ទោះបីជា Database ផ្លាស់ប្តូរក៏ដោយ។'
              ],
              code: 'public function toArray($request) {\n    return [\n        "id" => $this->id,\n        "product_name" => $this->name,\n        "price_usd" => (float) $this->price,\n        "is_available" => $this->stock > 0,\n        "thumbnail" => url($this->image_path),\n    ];\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '9.2',
          title: 'API Authentication (ការផ្ទៀងផ្ទាត់សិទ្ធិ API)',
          titleEn: 'API Authentication',
          duration: '35 mins',
          level: 'Advanced',
          slides: [
            {
              id: '9.2.0',
              title: 'Securing Your API',
              titleEn: 'Securing Your API',
              type: 'intro',
              content: [
                '**Token-Based**: ដោយសារ API ជាប្រភេទ Stateless (មិនរក្សា session), យើងប្រើប្រាស់ **Tokens** ដើម្បីសម្គាល់ User ម្នាក់ៗ។ (វាដូចជាកាតសម្គាល់ខ្លួនដែល User ត្រូវបង្ហាញមកកាន់ Server រាល់ពេលផ្ញើ Request ម្តងៗ)',
                '**Official Packages**: Laravel ផ្ដល់ជូននូវ packages ផ្លូវការចំនួនពីរគឺ៖ **Sanctum** និង **Passport**។ (ជួយឱ្យអ្នកមានប្រព័ន្ធការពារសុវត្ថិភាពកម្រិតខ្ពស់ ដោយមិនចាំបាច់សរសេរកូដការពារដោយដៃតាំងពីសូន្យ)',
                '**Right Choice**: ការជ្រើសរើសមួយណាគឺអាស្រ័យលើទំហំ និងតម្រូវការនៃ project របស់អ្នក។ (យើងនឹងសិក្សាពីចំណុចខ្លាំងរបស់ package នីមួយៗ ដើម្បីឱ្យអ្នកអាចសម្រេចចិត្តបានត្រឹមត្រូវ)'
              ]
            },
            {
              id: '9.2.1',
              title: 'Sanctum vs. Passport',
              titleEn: 'Sanctum vs. Passport',
              type: 'concept',
              content: [
                '**Laravel Sanctum**: ជាប្រភេទ Lightweight និងប្រើ tokens ងាយៗ។ (ស័ក្តិសមបំផុតសម្រាប់ SPAs និង mobile apps ដែលត្រូវការភាពសាមញ្ញ និងល្បឿនលឿន)',
                '**Laravel Passport**: ជាការប្រើប្រាស់ Full OAuth2 server។ (ប្រើវាប្រសិនបើអ្នកចង់ឱ្យ 3rd party developers ប្រើ API របស់អ្នក ដូចជា Facebook Login ជាដើម)',
                '**Modern Choice**: ភាគច្រើននៃ App សម័យថ្មីគឺត្រូវការត្រឹមតែ Sanctum ប៉ុណ្ណោះ។ (ព្រោះវាងាយស្រួលគ្រប់គ្រង និងមិនត្រូវការការរៀបចំច្រើនស្មុគស្មាញ)'
              ],
              insight: 'Sanctum ងាយស្រួលដំឡើង និងថែទាំជាងសម្រាប់ 90% នៃគម្រោងទូទៅ។'
            },
            {
              id: '9.2.2',
              title: 'Issuing Tokens (Sanctum)',
              titleEn: 'Issuing Tokens',
              type: 'code',
              content: [
                '**Simple Generation**: ការចេញ Token គឺសាមញ្ញបំផុតដោយគ្រាន់តែប្រើ method `createToken()`។ (វានឹងបង្កើតកូដសម្ងាត់វែងមួយ ដែល User អាចយកទៅប្រើប្រាស់សម្រាប់ការចូលប្រើ API នៅពេលក្រោយ)',
                '**Header Passing**: Token នេះនឹងត្រូវផ្ញើត្រឡប់ទៅវិញតាមរយៈ `Authorization` header ពេល request ម្តងៗ។ (ដើម្បីឱ្យ Server អាចដឹងថា តើអ្នកណាជាម្ចាស់ Request នេះ និងមានសិទ្ធិធ្វើការងារនេះឬក៏អត់)'
              ],
              code: '$user = User::where("email", $request->email)->first();\n\n$token = $user->createToken("my-app-token")->plainTextToken;\n\nreturn response()->json(["token" => $token]);',
              language: 'php'
            },
            {
              id: '9.2.3',
              title: 'Real-world Demo: Sanctum Token Exchange',
              titleEn: 'Token Exchange Demo',
              type: 'code',
              content: [
                '**Auth Workflow**: ឧទាហរណ៍នៃ Controller ដែលផ្ទៀងផ្ទាត់ Password និងបញ្ជូន Token ត្រឡប់ទៅឱ្យ User។',
                '**Security**: បង្ហាញពីរបៀបការពារ Route ដោយប្រើ Middleware `auth:sanctum`។'
              ],
              code: '// Login និងបញ្ជូន Token\npublic function login(Request $request) {\n    $user = User::where("email", $request->email)->first();\n    if (!$user || !Hash::check($request->password, $user->password)) {\n        return response(["message" => "ខុស"], 401);\n    }\n    return ["token" => $user->createToken("web")->plainTextToken];\n}\n\n// ប្រើ Token ដើម្បីទាញទិន្នន័យ (ក្នុង Header: Authorization: Bearer {token})\nRoute::middleware("auth:sanctum")->get("/me", fn() => auth()->user());',
              language: 'php'
            }
          ]
        }
      ]
    },
    {
      id: 'module-10',
      title: 'Module 10: Error Handling and Logging (ការគ្រប់គ្រងកំហុស និងការកត់ត្រា)',
      titleEn: 'Error Handling and Logging',
      icon: 'AlertTriangle',
      color: '#ef4444',
      lessons: [
        {
          id: '10.1',
          title: 'The Exception Handler (អ្នកចាត់ចែងកំហុស)',
          titleEn: 'The Exception Handler',
          duration: '20 mins',
          level: 'Advanced',
          slides: [
            {
              id: '10.1.0',
              title: 'Managing Failures',
              titleEn: 'Managing Failures',
              type: 'intro',
              content: [
                'រាល់ Application ទាំងអស់នឹងជួបប្រទះបញ្ហា ឬកំហុស (Errors) នៅពេលណាមួយមិនខាន។',
                'Laravel មាន Exception Handler កណ្តាលមួយដើម្បីចាប់រាល់កំហុសទាំងនោះ។',
                'អ្នកអាចកំណត់បានថា កំហុសណាខ្លះគួរ Report និងបង្ហាញចេញ (Render) ទៅកាន់ User បែបណា។'
              ]
            },
            {
              id: '10.1.1',
              title: 'Debug Mode (APP_DEBUG)',
              titleEn: 'Debug Mode',
              type: 'concept',
              content: [
                '**Developer Tool**: នៅក្នុង `.env`, កំណត់ `APP_DEBUG=true` សម្រាប់ការសរសេរកូដនៅក្នុង local (Development)។ (វានឹងបង្ហាញព័ត៌មានលម្អិតនៃកំហុស រួមទាំងបន្ទាត់កូដដែលមានបញ្ហា ដើម្បីឱ្យអ្នកដោះស្រាយបានរហ័ស)',
                '**Production Safety**: **សំខាន់បំផុត**: ត្រូវប្តូរទៅ `false` ជានិច្ចពេលដាក់ឱ្យប្រើប្រាស់ពិតប្រាកដ។ (ដើម្បីការពារការលេចធ្លាយព័ត៌មានសម្ងាត់របស់ Server ទៅកាន់មនុស្សខាងក្រៅ ឬ Hacker)'
              ],
              insight: 'ព័ត៌មានលម្អិតនៃកំហុសគឺជា "រតនសម្បត្តិ" សម្រាប់ពួក Hacker។ កុំបង្ហាញវានៅលើ Production ឱ្យសោះ!'
            },
            {
              id: '10.1.2',
              title: 'Real-world Demo: Custom Exception Handler',
              titleEn: 'Custom Exception Handler Demo',
              type: 'code',
              content: [
                '**Friendly Errors**: របៀបបង្ហាញផ្ទាំង Error ដែលមានរូបរាងស្អាត និងមិនបង្កការភ័យខ្លាចដល់ User (ដូចជា Page 404 Custom)។',
                '**API Error Formatting**: ប្ដូរ Error ស្មុគស្មាញឱ្យទៅជាសារ JSON សាមញ្ញដែល Frontend ងាយស្រួលយល់។'
              ],
              code: '// ក្នុង bootstrap/app.php (Laravel 11)\n->withExceptions(function (Exceptions $exceptions) {\n    $exceptions->render(function (NotFoundHttpException $e, Request $request) {\n        if ($request->is("api/*")) {\n            return response()->json(["error" => "រកមិនឃើញទិន្នន័យ"], 404);\n        }\n    });\n})',
              language: 'php'
            }
          ]
        },
        {
          id: '10.2',
          title: 'Logging (ការកត់ត្រាសកម្មភាព)',
          titleEn: 'Logging',
          duration: '25 mins',
          level: 'Advanced',
          slides: [
            {
              id: '10.2.0',
              title: 'Keeping a Paper Trail',
              titleEn: 'Keeping a Paper Trail',
              type: 'intro',
              content: [
                '**System Monitoring**: Logging គឺសំខាន់ណាស់សម្រាប់ការតាមដានបញ្ហានៅលើ Production។ (វាដូចជាការកត់កំណត់ហេតុប្រចាំថ្ងៃរបស់ App ដើម្បីឱ្យអ្នកដឹងថាមានអ្វីកើតឡើងខ្លះនៅពេលអ្នកមិននៅមើល)',
                '**Monolog Integration**: Laravel ប្រើប្រាស់ Monolog ដែលអនុញ្ញាតឱ្យយើងកត់ត្រាទុកនូវរាល់សកម្មភាពផ្សេងៗ។ (ជាស្ដង់ដារកម្រិតខ្ពស់ក្នុងការកត់ត្រាទិន្នន័យ ដែលមានភាពបត់បែន និងអាចទុកចិត្តបាន)',
                '**Flexible Storage**: អ្នកអាច log ចូលទៅក្នុង files, system logs, Slack ឬសេវាកម្មដទៃទៀត។ (ជួយឱ្យអ្នកអាចទទួលបានដំណឹងភ្លាមៗតាមទូរស័ព្ទ នៅពេលមានបញ្ហាសំខាន់កើតឡើង)'
              ]
            },
            {
              id: '10.2.1',
              title: 'The Log Facade',
              titleEn: 'The Log Facade',
              type: 'code',
              content: [
                '**Direct Recording**: ប្រើប្រាស់ `Log` facade ដើម្បីកត់ត្រាព័ត៌មាន។ (អ្នកអាចហៅវាប្រើនៅគ្រប់ទីកន្លែងក្នុងកូដរបស់អ្នក ដើម្បីកត់ត្រាទុកនូវចំណុចដែលអ្នកចង់ដឹង)',
                '**Severity Levels**: កម្រិតនៃ Log រួមមាន: debug, info, warning, error, critical... (ជួយឱ្យអ្នកអាចបែងចែកបានថា តើវាគ្រាន់តែជាព័ត៌មានធម្មតា ឬជាបញ្ហាបន្ទាន់ដែលត្រូវដោះស្រាយភ្លាមៗ)'
              ],
              code: 'use Illuminate\\Support\\Facades\\Log;\n\nLog::info("User logged in", ["id" => $user->id]);\n\nLog::error("Payment failed", ["order" => $order->id]);',
              language: 'php'
            },
            {
              id: '10.2.2',
              title: 'Log Channels',
              titleEn: 'Log Channels',
              type: 'code',
              content: [
                '**Configuration**: អ្នកអាចកំណត់ទីតាំងសម្រាប់រក្សាទុក logs នៅក្នុង `config/logging.php`។ (អ្នកអាចកំណត់ឱ្យវាបង្កើត File ថ្មីរាល់ថ្ងៃ ដើម្បីកុំឱ្យ File មួយមានទំហំធំពេកពិបាកបើកមើល)',
                '**Multi-Channel Stacks**: អ្នកក៏អាចប្រើ "stacks" ដើម្បី log ទៅកាន់កន្លែងច្រើនក្នុងពេលតែមួយផងដែរ។ (ឧទាហរណ៍៖ រក្សាទុកក្នុង File ផង និងផ្ញើសារទៅកាន់ Telegram ឬ Slack របស់ក្រុមការងារផង)'
              ],
              code: '// ឧទាហរណ៍៖ Log ទៅក្នុង file ផង និងផ្ញើទៅ Slack ផង\n"stack" => [\n    "channels" => ["single", "slack"],\n],',
              language: 'php',
              insight: 'ការទទួលបានដំណឹងពីកំហុសកម្រិត Critical តាមរយៈ Slack ភ្លាមៗ ជួយឱ្យ developer ដោះស្រាយទាន់ពេល។'
            },
            {
              id: '10.2.3',
              title: 'Real-world Demo: Critical Error Notification',
              titleEn: 'Error Notification Demo',
              type: 'code',
              content: [
                '**Instant Alerts**: របៀបកំណត់ឱ្យ Laravel ផ្ញើសារទៅកាន់ Telegram ឬ Slack ភ្លាមៗនៅពេលមានកំហុសធ្ងន់ធ្ងរ (ដូចជា Database គាំង)។',
                '**Log Context**: បញ្ជូនព័ត៌មានបន្ថែម (ដូចជា ID របស់ User) ទៅក្នុង Log ដើម្បីងាយស្រួលរកមូលហេតុ។'
              ],
              code: 'try {\n    // កូដដែលងាយនឹងមានបញ្ហា\n    $payment->process();\n} catch (\\Exception $e) {\n    Log::critical("ការទូទាត់ប្រាក់បរាជ័យ!", [\n        "user_id" => auth()->id(),\n        "error" => $e->getMessage(),\n        "trace" => $e->getTraceAsString()\n    ]);\n    // បន្ទាប់មក Laravel នឹងផ្ញើ log នេះទៅ Slack តាមការកំណត់\n}',
              language: 'php'
            }
          ]
        }
      ]
    },
    {
      id: 'module-11',
      title: 'Module 11: Testing in Laravel (ការធ្វើតេស្តក្នុង Laravel)',
      titleEn: 'Testing in Laravel',
      icon: 'ClipboardCheck',
      color: '#3b82f6',
      lessons: [
        {
          id: '11.1',
          title: 'Introduction to Testing (ការណែនាំអំពីការធ្វើតេស្ត)',
          titleEn: 'Introduction to Testing',
          duration: '30 mins',
          level: 'Advanced',
          slides: [
            {
              id: '11.1.0',
              title: 'Building with Confidence',
              titleEn: 'Building with Confidence',
              type: 'intro',
              content: [
                'ការធ្វើតេស្តដោយដៃ (Manual testing) គឺយឺត និងងាយនឹងមានការចន្លោះប្រហោង។',
                'Automated tests ជួយឱ្យអ្នកប្រាកដថា App របស់អ្នកនៅតែដំណើរការល្អ បើទោះបីជាអ្នកកែកូដថ្មីក៏ដោយ។',
                'Laravel ប្រើ **PHPUnit** ជា default ប៉ុន្តែក៏គាំទ្រ **Pest** ដែលមានភាពសាមញ្ញជាង។'
              ]
            },
            {
              id: '11.1.1',
              title: 'Unit vs. Feature Testing',
              titleEn: 'Unit vs. Feature Testing',
              type: 'concept',
              content: [
                '**Unit Tests**: តេស្តផ្នែកតូចៗនៃកូដ (ដូចជា function មួយ) ដាច់ដោយឡែកពីគេ។ វាលឿនបំផុត។',
                '**Feature Tests**: តេស្តផ្នែកធំនៃ App ដូចជាការសាកល្បង HTTP Request។ វាពិនិត្យមើល URL និង response ជាក់ស្តែង។'
              ],
              insight: 'Developer ភាគច្រើនចំណាយពេល 80% ទៅលើការសរសេរ Feature Tests។'
            },
            {
              id: '11.1.2',
              title: 'Real-world Demo: Test Suite Execution',
              titleEn: 'Test Execution Demo',
              type: 'code',
              content: [
                '**Running Tests**: បង្ហាញពីរបៀបដំណើរការរាល់ការធ្វើតេស្តទាំងអស់ក្នុង Project និងការមើលលទ្ធផល (Pass/Fail)។',
                '**Parallel Testing**: ប្រើប្រាស់ `--parallel` ដើម្បីឱ្យការតេស្តរត់បានលឿនជាងមុនខ្លាំងនៅលើម៉ាស៊ីនដែលមាន CPU ច្រើន។'
              ],
              code: '# ដំណើរការតេស្តទាំងអស់\nphp artisan test\n\n# ដំណើរការតែ Unit tests\nphp artisan test --testsuite=Unit\n\n# ដំណើរការតេស្តឱ្យលឿនបំផុត (Parallel)\nphp artisan test --parallel',
              language: 'bash'
            }
          ]
        },
        {
          id: '11.2',
          title: 'Writing Unit Tests (ការសរសេរ Unit Tests)',
          titleEn: 'Writing Unit Tests',
          duration: '30 mins',
          level: 'Advanced',
          slides: [
            {
              id: '11.2.0',
              title: 'Testing Logic',
              titleEn: 'Testing Logic',
              type: 'intro',
              content: [
                'Unit tests មិនដំណើរការ Framework Laravel ទាំងមូលនោះទេ (No booting)។',
                'ចំណុចនេះធ្វើឱ្យវាលឿនខ្លាំង (អាចតេស្តរាប់ពាន់ដងក្នុងរយៈពេលប៉ុន្មានវិនាទី)។',
                'វាស័ក្តិសមបំផុតសម្រាប់តេស្តការគណនាស្មុគស្មាញ ឬការច្នៃ String ផ្សេងៗ។'
              ]
            },
            {
              id: '11.2.1',
              title: 'A Basic Unit Test',
              titleEn: 'A Basic Unit Test',
              type: 'code',
              content: [
                'ប្រើប្រាស់ folder `tests/Unit`។',
                'ផ្ដោតលើ Input និង Output ដោយមិនចាំបាច់ប៉ះពាល់ដល់ Database។'
              ],
              code: 'public function test_can_format_price() {\n    $order = new Order(["total" => 1000]);\n    \n    $this->assertEquals("$10.00", $order->formattedPrice());\n}',
              language: 'php'
            },
            {
              id: '11.2.2',
              title: 'Real-world Demo: Mocking External APIs',
              titleEn: 'Mocking APIs Demo',
              type: 'code',
              content: [
                '**Isolation**: របៀបធ្វើតេស្តកូដរបស់អ្នកដោយមិនចាំបាច់ហៅទៅកាន់ API ពិតប្រាកដ (ដូចជា PayPal ឬ Google Maps) ដែលអាចចំណាយលុយ ឬយឺត។',
                '**Http Fake**: ប្រើប្រាស់ `Http::fake()` ដើម្បីត្រាប់តាមចម្លើយ (Response) ពី Server ខាងក្រៅ។'
              ],
              code: 'public function test_it_can_fetch_exchange_rate() {\n    Http::fake([\n        "api.exchangerate.com/*" => Http::response(["rate" => 4100], 200)\n    ]);\n\n    $result = CurrencyService::getKhmerRate();\n    $this->assertEquals(4100, $result);\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '11.3',
          title: 'Writing Feature Tests (ការសរសេរ Feature Tests)',
          titleEn: 'Writing Feature Tests',
          duration: '40 mins',
          level: 'Advanced',
          slides: [
            {
              id: '11.3.0',
              title: 'Simulating the User',
              titleEn: 'Simulating the User',
              type: 'intro',
              content: [
                'Feature tests គឺជាការតេស្តបែប "ពិភពពិត"។',
                'វាត្រាប់តាមសកម្មភាពអ្នកប្រើប្រាស់ ដូចជាការចុច button និងការបំពេញ form។',
                'វាផ្ទៀងផ្ទាត់ថា Routes, Controllers, និង Database ធ្វើការជាមួយគ្នាបានត្រឹមត្រូវ។'
              ]
            },
            {
              id: '11.3.1',
              title: 'HTTP Feature Test',
              titleEn: 'HTTP Feature Test',
              type: 'code',
              content: [
                'ប្រើ method `actingAs()` ដើម្បីក្លែងធ្វើជា user ដែលបាន login។',
                'ផ្ទៀងផ្ទាត់ status code និងទិន្នន័យចុងក្រោយដែលមាននៅក្នុង database។'
              ],
              code: 'public function test_user_can_create_post() {\n    $user = User::factory()->create();\n\n    $response = $this->actingAs($user)->post("/posts", [\n        "title" => "My First Test",\n        "body" => "Testing is fun!"\n    ]);\n\n    $response->assertStatus(302);\n    $this->assertDatabaseHas("posts", ["title" => "My First Test"]);\n}',
              language: 'php',
              insight: 'ប្រើ `php artisan make:test PostTest` ដើម្បីបង្កើត class សម្រាប់ធ្វើ feature test ថ្មី។'
            },
            {
              id: '11.3.2',
              title: 'Real-world Demo: User Registration Test',
              titleEn: 'Registration Test Demo',
              type: 'code',
              content: [
                '**Full Flow Test**: ធ្វើតេស្តលើដំណើរការចុះឈ្មោះ User ថ្មី តាំងពីការបំពេញ Form រហូតដល់ការរក្សាទុកក្នុង Database។',
                '**Redirection Check**: បញ្ជាក់ថាបន្ទាប់ពីចុះឈ្មោះជោគជ័យ User ត្រូវបានបញ្ជូនទៅកាន់ Dashboard ត្រឹមត្រូវ។'
              ],
              code: 'public function test_new_user_can_register() {\n    $response = $this->post("/register", [\n        "name" => "Sokha",\n        "email" => "sokha@test.com",\n        "password" => "password",\n        "password_confirmation" => "password"\n    ]);\n\n    $response->assertRedirect("/dashboard");\n    $this->assertDatabaseHas("users", ["email" => "sokha@test.com"]);\n}',
              language: 'php'
            }
          ]
        }
      ]
    },
    {
      id: 'module-12',
      title: 'Module 12: Deployment and Best Practices (ការដាក់ឱ្យដំណើរការ និងការអនុវត្តល្អបំផុត)',
      titleEn: 'Deployment and Best Practices',
      icon: 'Rocket',
      color: '#8b5cf6',
      lessons: [
        {
          id: '12.1',
          title: 'Preparing for Deployment (ការរៀបចំដាក់ឱ្យដំណើរការ)',
          titleEn: 'Preparing for Deployment',
          duration: '35 mins',
          level: 'Advanced',
          slides: [
            {
              id: '12.1.0',
              title: 'The Production Mindset',
              titleEn: 'The Production Mindset',
              type: 'intro',
              content: [
                'បរិស្ថាន Production គឺខុសគ្នាស្រឡះពី Local របស់អ្នក (វាគឺជាសមរភូមិពិតប្រាកដដែលមានអ្នកប្រើប្រាស់រាប់ពាន់នាក់ចូលមកក្នុងពេលតែមួយ)។',
                'សុវត្ថិភាព ល្បឿន និងស្ថិរភាព គឺជាអាទិភាពចម្បងដែលអ្នកត្រូវយកចិត្តទុកដាក់បំផុត (ការធ្វេសប្រហែសបន្តិចបន្តួចអាចនាំឱ្យបាត់បង់ទិន្នន័យ ឬ App គាំងដំណើរការ)។',
                'Laravel ផ្ដល់ឧបករណ៍មកស្រាប់ ដើម្បីជួយឱ្យការផ្លាស់ប្តូរពីការសរសេរកូដ ទៅកាន់ការដាក់ឱ្យប្រើប្រាស់ពិតប្រាកដប្រព្រឹត្តទៅដោយរលូន និងមានវិជ្ជាជីវៈ។'
              ],
              animation: 'deployment',
              insight: 'កុំសាកល្បងកូដថ្មីនៅលើ production ផ្ទាល់។ ត្រូវប្រើ Staging environment ជាមុនសិន។'
            },
            {
              id: '12.1.1',
              title: 'Environment Config (.env)',
              titleEn: 'Environment Config',
              type: 'code',
              content: [
                'នៅលើ production, អ្នកត្រូវតែផ្លាស់ប្តូរការកំណត់ក្នុង `.env`។',
                'សំខាន់បំផុត: កំណត់ `APP_DEBUG=false` និង `APP_ENV=production`។',
                'បង្កើត `APP_KEY` ថ្មីដើម្បីធានាសុវត្ថិភាព sessions។'
              ],
              code: 'APP_NAME=Laravel\nAPP_ENV=production\nAPP_DEBUG=false\nAPP_URL=https://yourdomain.com\n\nAPP_KEY=base64:random_generated_key...',
              language: 'bash',
              insight: 'ការទុក APP_DEBUG=true លើ production នឹងបង្ហាញ password របស់ database និង API keys របស់អ្នកទៅកាន់សាធារណៈ។'
            },
            {
              id: '12.1.2',
              title: 'Application Optimization',
              titleEn: 'Application Optimization',
              type: 'code',
              content: [
                'Laravel ដើរលឿនស្រាប់ហើយ ប៉ុន្តែយើងអាចធ្វើឱ្យវាកាន់តែលឿន។',
                'ការធ្វើ Caching លើ configuration និង routes ជួយកាត់បន្ថយការអាន file ច្រើនដង។',
                'ប្រើ command `optimize` ដើម្បីប្រមូលផ្ដុំរាល់ cache commands ទាំងអស់។'
              ],
              code: '# ធ្វើ Optimization គ្រប់យ៉ាងសម្រាប់ production\nphp artisan optimize\n\n# សម្រាប់សម្អាត cache ពេលអ្នកកែប្រែកូដ\nphp artisan optimize:clear',
              language: 'bash',
              insight: 'ត្រូវដាក់ "php artisan optimize" នៅក្នុងរាល់ deployment script របស់អ្នក។'
            },
            {
              id: '12.1.3',
              title: 'Real-world Demo: Deployment Script',
              titleEn: 'Deployment Script Demo',
              type: 'code',
              content: [
                '**Automation**: ឧទាហរណ៍នៃ Bash Script ដែលជួយឱ្យអ្នកដាក់ App ដំណើរការបានយ៉ាងលឿន និងគ្មានកំហុស (Zero-downtime mindset)។',
                '**Cleanup**: ការសម្អាត Cache ចាស់ៗ និងការរៀបចំ Cache ថ្មីសម្រាប់ Production។'
              ],
              code: '#!/bin/bash\ngit pull origin main\ncomposer install --no-dev --optimize-autoloader\nphp artisan migrate --force\nphp artisan optimize\nphp artisan view:cache\nphp artisan icons:cache # បើមានប្រើ icons package',
              language: 'bash'
            }
          ]
        },
        {
          id: '12.2',
          title: 'Deployment Strategies (យុទ្ធសាស្ត្រនៃការដាក់ឱ្យដំណើរការ)',
          titleEn: 'Deployment Strategies',
          duration: '30 mins',
          level: 'Advanced',
          slides: [
            {
              id: '12.2.0',
              title: 'Deployment Workflows',
              titleEn: 'Deployment Workflows',
              type: 'concept',
              content: [
                '**Manual**: ការប្រើ FTP/SSH (មិនត្រូវបានណែនាំសម្រាប់កម្រិតអាជីពទេ)។',
                '**PaaS**: ប្រើ Laravel Forge ឬ Vapor (ស្វ័យប្រវត្តិ និងងាយស្រួលគ្រប់គ្រង)។',
                '**Self-Managed**: រៀបចំ Nginx + PHP-FPM លើ VPS ដោយខ្លួនឯង (DigitalOcean, AWS)។'
              ],
              insight: 'Laravel Forge គឺជាជម្រើសដ៏ល្អបំផុត (Gold Standard) សម្រាប់ដាក់ App ដំណើរការដោយងាយស្រួល។'
            },
            {
              id: '12.2.1',
              title: 'Nginx Configuration',
              titleEn: 'Nginx Configuration',
              type: 'code',
              content: [
                'Nginx ត្រូវចង្អុលទៅកាន់ directory `public/` មិនមែន root នៃ project ទេ។',
                'រាល់ requests ទាំងអស់ត្រូវតែឆ្លងកាត់ `index.php`។'
              ],
              code: 'server {\n    listen 80;\n    server_name example.com;\n    root /var/www/my-app/public;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n}',
              language: 'nginx'
            },
            {
              id: '12.2.2',
              title: 'Real-world Demo: CI/CD Pipeline',
              titleEn: 'CI/CD Pipeline Demo',
              type: 'code',
              content: [
                '**Continuous Integration**: បង្ហាញពីរបៀបប្រើ GitHub Actions ដើម្បីដំណើរការតេស្ត (Tests) ដោយស្វ័យប្រវត្តិរាល់ពេលអ្នក Push កូដថ្មី។',
                '**Safety Gate**: បញ្ឈប់ការ Deploy ប្រសិនបើមានការធ្វើតេស្តណាមួយមិនជាប់ (Failed)។'
              ],
              code: '# .github/workflows/tests.yml\nname: Run Tests\non: [push]\njobs:\n  laravel-tests:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Run Tests\n        run: php artisan test',
              language: 'yaml'
            }
          ]
        },
        {
          id: '12.3',
          title: 'Security Best Practices (ការអនុវត្តល្អបំផុតផ្នែកសន្តិសុខ)',
          titleEn: 'Security Best Practices',
          duration: '45 mins',
          level: 'Advanced',
          slides: [
            {
              id: '12.3.0',
              title: 'Security by Default',
              titleEn: 'Security by Default',
              type: 'intro',
              content: [
                'Laravel ការពារអ្នកពីការវាយប្រហារទូទៅជាច្រើនតាំងពីដំបូង។',
                'ទោះជាយ៉ាងណា អ្នកនៅតែត្រូវអនុវត្តតាមគោលការណ៍សុវត្ថិភាព។',
                'យើងនឹងសិក្សាអំពី XSS, CSRF, និង SQL Injection។'
              ],
              animation: 'security'
            },
            {
              id: '12.3.1',
              title: 'Preventing XSS & CSRF',
              titleEn: 'Preventing XSS & CSRF',
              type: 'concept',
              content: [
                '**XSS (Cross-Site Scripting)**: Laravel ប្រើ `{{ $var }}` ដើម្បីសម្អាត HTML ដោយស្វ័យប្រវត្តិ។',
                '**CSRF (Cross-Site Request Forgery)**: ត្រូវប្រើ `@csrf` ជានិច្ចនៅក្នុង forms។',
                '**Mass Assignment**: ត្រូវកំណត់ `$fillable` ឬ `$guarded` នៅក្នុង Models ជានិច្ច។'
              ],
              insight: 'ប្រើ `{!! $var !!}` តែក្នុងករណីដែលអ្នកទុកចិត្តប្រភពទិន្នន័យនោះ 100% ប៉ុណ្ណោះ។'
            },
            {
              id: '12.3.2',
              title: 'SQL Injection Protection',
              titleEn: 'SQL Injection Protection',
              type: 'code',
              content: [
                'មិនត្រូវបញ្ចូល input ពីអ្នកប្រើប្រាស់ទៅក្នុង raw SQL queries ដោយផ្ទាល់ឡើយ។',
                'Eloquent និង Query Builder ប្រើប្រាស់ **PDO Parameter Binding** ដោយស្វ័យប្រវត្តិដើម្បីការពារបញ្ហានេះ។'
              ],
              code: '// មានសុវត្ថិភាព (ប្រើ Binding ស្វ័យប្រវត្តិ)\n$users = DB::table("users")->where("name", $request->input("name"))->get();\n\n// មិនមានសុវត្ថិភាព (ហាមធ្វើបែបនេះដាច់ខាត!)\n$users = DB::select("SELECT * FROM users WHERE name = \'" . $name . "\'");',
              language: 'php'
            },
            {
              id: '12.3.3',
              title: 'Real-world Demo: Production Security Audit',
              titleEn: 'Security Audit Demo',
              type: 'code',
              content: [
                '**Security Check**: របៀបប្រើ Command `about` ដើម្បីពិនិត្យមើលស្ថានភាពសុវត្ថិភាព និងការកំណត់ (Config) របស់ App នៅលើ Production។',
                '**Vulnerability Scanning**: ប្រើប្រាស់ `composer audit` ដើម្បីឆែកមើលថាតើបណ្ណាល័យ (Packages) ដែលអ្នកប្រើមានចន្លោះប្រហោងសុវត្ថិភាពឬអត់។'
              ],
              code: '# ឆែកមើលស្ថានភាពទូទៅ និង Security\nphp artisan about\n\n# ឆែកមើលចន្លោះប្រហោងក្នុង Packages\ncomposer audit',
              language: 'bash'
            }
          ]
        },
        {
          id: '12.4',
          title: 'Performance Optimization (ការបង្កើនប្រសិទ្ធភាព)',
          titleEn: 'Performance Optimization',
          duration: '40 mins',
          level: 'Advanced',
          slides: [
            {
              id: '12.4.0',
              title: 'Scaling Your Application',
              titleEn: 'Scaling Your Application',
              type: 'intro',
              content: [
                'នៅពេល App របស់អ្នករីកធំ ការងារសាមញ្ញៗអាចនឹងប្រែជាយឺត។',
                'យើងប្រើប្រាស់ Caching, Queues, និងការរៀបចំ Database ដើម្បីឱ្យវាដើរលឿន។',
                'App ដែលដើរលឿន នឹងធ្វើឱ្យអ្នកប្រើប្រាស់សប្បាយចិត្ត។'
              ],
              animation: 'performance'
            },
            {
              id: '12.4.1',
              title: 'Caching Strategies',
              titleEn: 'Caching Strategies',
              type: 'code',
              content: [
                'រក្សាទុកទិន្នន័យដែលពិបាកទាញ (Expensive data) នៅក្នុង Redis ឬ Memcached។',
                'ទាញទិន្នន័យពី Database តែនៅពេលដែល cache អស់សុពលភាពប៉ុណ្ណោះ។'
              ],
              code: '$users = Cache::remember("users.active", 3600, function () {\n    return User::where("active", true)->get();\n});',
              language: 'php',
              insight: 'Caching គឺជាវិធីងាយស្រួលបំផុតដើម្បីបង្កើនល្បឿន App ឱ្យលឿនជាងមុនគួរឱ្យកត់សម្គាល់។'
            },
            {
              id: '12.4.2',
              title: 'Background Jobs (Queues)',
              titleEn: 'Background Jobs',
              type: 'code',
              content: [
                'កុំឱ្យអ្នកប្រើប្រាស់រង់ចាំការងារដែលយឺតៗ ដូចជាការផ្ញើ Email ជាដើម។',
                'បោះការងារទាំងនោះទៅក្នុង "Queue" ដើម្បីឱ្យវាដំណើរការនៅខាងក្រោយ (Background)។'
              ],
              code: '// នៅក្នុង Controller\nSendWelcomeEmail::dispatch($user);\n\n// Laravel នឹងចាត់ចែងផ្ញើវា ខណៈពេល user បន្តប្រើប្រាស់បានធម្មតា។',
              language: 'php',
              insight: 'ប្រើ "php artisan queue:work" ដើម្បីចាប់ផ្តើមដំណើរការ background worker របស់អ្នក។'
            },
            {
              id: '12.4.3',
              title: 'Real-world Demo: High-traffic Cache Optimization',
              titleEn: 'Cache Optimization Demo',
              type: 'code',
              content: [
                '**Atomic Locks**: របៀបប្រើប្រាស់ Cache Lock ដើម្បីការពារកុំឱ្យមានការទាញទិន្នន័យពី Database ច្រើនដងក្នុងពេលតែមួយ (ជួយសន្សំសំចៃ Resource របស់ Server)។',
                '**Taggabale Cache**: ការប្រើ Tags ដើម្បីងាយស្រួលសម្អាត Cache តាមប្រភេទ (ឧទាហរណ៍៖ សម្អាតតែ Cache របស់ផលិតផល ដោយមិនប៉ះពាល់ Cache របស់ User)។'
              ],
              code: '// Cache ជាមួយ Tags (សម្រាប់ Redis/Memcached)\nCache::tags(["products", "active"])->remember("list", 3600, function() {\n    return Product::where("active", true)->get();\n});\n\n// សម្អាតតែ Cache ក្នុង Tag "products"\nCache::tags("products")->flush();',
              language: 'php'
            }
          ]
        }
      ]
    },
    {
      id: 'module-13',
      title: 'Module 13: The Laravel Ecosystem (ប្រព័ន្ធអេកូឡូស៊ី Laravel)',
      titleEn: 'The Laravel Ecosystem',
      icon: 'Share2',
      color: '#f59e0b',
      lessons: [
        {
          id: '13.1',
          title: 'Real-time Applications (កម្មវិធី Real-time)',
          titleEn: 'Real-time Applications',
          duration: '35 mins',
          level: 'Advanced',
          slides: [
            {
              id: '13.1.0',
              title: 'Beyond Request-Response',
              titleEn: 'Beyond Request-Response',
              type: 'intro',
              content: [
                'Modern apps ត្រូវការការ update ទិន្នន័យភ្លាមៗ (Real-time)។',
                'ឧទាហរណ៍ដូចជា៖ ការជូនដំណឹង (Notifications), ការឆាត (Chat), និង live dashboards។',
                'Laravel ធ្វើឱ្យរឿងនេះអាចទៅរួចតាមរយៈ **Broadcasting**។'
              ]
            },
            {
              id: '13.1.1',
              title: 'Broadcasting Tools',
              titleEn: 'Broadcasting Tools',
              type: 'concept',
              content: [
                '**Laravel Reverb**: ជា WebSocket server ជំនាន់ថ្មី និងផ្លូវការរបស់ Laravel។',
                '**Pusher**: ជាសេវាកម្ម (Hosted service) សម្រាប់ផ្ញើសារ real-time។',
                '**Laravel Echo**: ជា JavaScript library សម្រាប់ស្តាប់រាល់ events ដែលកើតឡើង។'
              ],
              insight: 'Reverb មានល្បឿនលឿនខ្លាំង និងងាយស្រួលពង្រីក (Scale) ព្រោះវាត្រូវបានបង្កើតឡើងមកជាមួយ Laravel តែម្តង។'
            },
            {
              id: '13.1.2',
              title: 'Dispatching Events',
              titleEn: 'Dispatching Events',
              type: 'code',
              content: [
                'បង្កើត Event ដែលប្រើប្រាស់ interface `ShouldBroadcast`។',
                'Laravel នឹងចាត់ចែងការងារដែលនៅសេសសល់ដោយស្វ័យប្រវត្តិ។'
              ],
              code: 'class OrderStatusUpdated implements ShouldBroadcast {\n    public function broadcastOn() {\n        return new Channel("orders");\n    }\n}',
              language: 'php'
            },
            {
              id: '13.1.3',
              title: 'Real-world Demo: Real-time Live Chat',
              titleEn: 'Live Chat Demo',
              type: 'code',
              content: [
                '**Live Interaction**: ឧទាហរណ៍នៃកូដសម្រាប់បញ្ជូនសារឆាត (Message) ទៅកាន់ User ផ្សេងទៀតភ្លាមៗដោយមិនចាំបាច់ Reload Page។',
                '**Private Channels**: ការការពារបន្ទប់ឆាតឱ្យចូលបានតែសមាជិកដែលមានសិទ្ធិប៉ុណ្ណោះ។'
              ],
              code: '// ផ្ញើសារ (Server-side)\nMessageSent::dispatch($user, $message);\n\n// ស្ដាប់សារ (Client-side ជាមួយ Echo)\nEcho.private(`chat.${roomId}`)\n    .listen("MessageSent", (e) => {\n        console.log("សារថ្មី:", e.message);\n    });',
              language: 'javascript'
            }
          ]
        },
        {
          id: '13.2',
          title: 'Monitoring and Debugging (ការតាមដាន និងដោះស្រាយបញ្ហា)',
          titleEn: 'Monitoring and Debugging',
          duration: '30 mins',
          level: 'Advanced',
          slides: [
            {
              id: '13.2.0',
              title: 'Watching Your App',
              titleEn: 'Watching Your App',
              type: 'intro',
              content: [
                'នៅពេល App ដាក់ឱ្យប្រើប្រាស់ អ្នកត្រូវដឹងថាវាដំណើរការយ៉ាងដូចម្តេច។',
                'តើវាដើរយឺតទេ? តើមានកំហុសដែលយើងមើលមិនឃើញទេ? តើ Database ដើរយ៉ាងម៉េចដែរ?',
                'Laravel មានឧបករណ៍សង្កេតការណ៍ (Observability) ល្អបំផុតក្នុងចំណោម framework ដទៃ។'
              ]
            },
            {
              id: '13.2.1',
              title: 'Essential Tools',
              titleEn: 'Essential Tools',
              type: 'concept',
              content: [
                '**Laravel Pulse**: Dashboard បង្ហាញពីស្ថានភាពសុខភាពរបស់ server និង App ក្នុងពេលបច្ចុប្បន្ន។',
                '**Laravel Telescope**: ជំនួយការដ៏ខ្លាំងពូកែសម្រាប់ debug ក្នុង local។',
                '**Laravel Horizon**: Dashboard សម្រាប់មើល និងគ្រប់គ្រង Redis queues របស់អ្នក។'
              ],
              insight: 'Pulse គឺជាឧបករណ៍ដែលត្រូវតែមាននៅលើ production ដើម្បីមើលថា route ណាដែលដើរយឺតជាងគេ។'
            },
            {
              id: '13.2.2',
              title: 'Real-world Demo: Pulse Dashboard Monitoring',
              titleEn: 'Pulse Dashboard Demo',
              type: 'code',
              content: [
                '**Health Check**: របៀបប្រើ Laravel Pulse ដើម្បីតាមដានមើលថា តើ Controller ណាដែលស៊ី RAM ខ្លាំង ឬរត់យឺតជាងគេបំផុត។',
                '**DB Performance**: មើល Query ណាដែលរត់យឺត (Slow Queries) ដើម្បីធ្វើការ Optimize Database ឱ្យទាន់ពេល។'
              ],
              code: '# ដំឡើង Laravel Pulse\ncomposer require laravel/pulse\nphp artisan vendor:publish --provider="Laravel\\Pulse\\PulseServiceProvider"\n\n# បន្ទាប់មកចូលមើលតាមរយៈ URL: /pulse',
              language: 'bash'
            }
          ]
        },
        {
          id: '13.3',
          title: 'Course Wrap-up (ការបញ្ចប់វគ្គសិក្សា)',
          titleEn: 'Course Wrap-up',
          duration: '15 mins',
          level: 'Core',
          slides: [
            {
              id: '13.3.0',
              title: 'Congratulations!',
              titleEn: 'Congratulations!',
              type: 'summary',
              content: [
                'អ្នកបានបញ្ចប់វគ្គសិក្សា **Laravel Backend Expert Course** នេះហើយ។',
                'ចាប់តាំងពីមូលដ្ឋានគ្រឹះ PHP រហូតដល់ការដាក់ឱ្យប្រើប្រាស់ជាផ្លូវការ (Production)។',
                'ពេលនេះអ្នកមានជំនាញគ្រប់គ្រាន់ដើម្បីបង្កើត Application កម្រិតអាជីព មានសុវត្ថិភាព និងល្បឿនលឿន។'
              ],
              insight: 'ការរៀនសូត្រគឺមិនមានទីបញ្ចប់ឡើយ។ បន្តស្វែងយល់ និងអនុវត្តបង្កើតអ្វីដែលថ្មីជានិច្ច!'
            },
            {
              id: '13.3.1',
              title: 'Your Next Steps',
              titleEn: 'Your Next Steps',
              type: 'concept',
              content: [
                '**Build a Portfolio**: បង្កើត App ជាក់ស្តែង ២-៣ (ដូចជា Blog, E-commerce, SaaS)។',
                '**Learn a Frontend**: បន្សំចំណេះដឹង Backend ជាមួយ Vue (Inertia) ឬ React។',
                '**Contribute**: ការចូលរួមក្នុង Open source គឺជាវិធីដ៏ល្អដើម្បីរៀន និងឱ្យគេស្គាល់សមត្ថភាព។'
              ]
            }
          ]
        },
        {
          id: '13.4',
          title: 'Final Project: The Capstone (គម្រោងបញ្ចប់ការសិក្សា)',
          titleEn: 'Final Project: The Capstone',
          duration: '60 mins',
          level: 'Expert',
          slides: [
            {
              id: '13.4.0',
              title: 'Putting it All Together',
              titleEn: 'Putting it All Together',
              type: 'intro',
              content: [
                'ដល់ពេលត្រូវយកអ្វីដែលបានរៀនទាំងអស់មកអនុវត្តហើយ។',
                'អ្នកនឹងត្រូវបង្កើត **Production-Ready REST API** សម្រាប់ scenario ជាក់ស្តែងមួយ។',
                'ផ្ដោតសំខាន់លើ: សុវត្ថិភាព, ការឌីហ្សាញ Database, និងប្រសិទ្ធភាពការងារ។'
              ]
            },
            {
              id: '13.4.1',
              title: 'Project Requirements',
              titleEn: 'Project Requirements',
              type: 'concept',
              content: [
                '**Authentication**: ប្រើប្រាស់ Laravel Sanctum សម្រាប់ API tokens។',
                '**Relationships**: យ៉ាងហោចណាស់មាន ៣ models ទាក់ទងគ្នា (ឧទាហរណ៍: User -> Order -> Item)។',
                '**Validation**: ប្រើ Custom Form Requests សម្រាប់គ្រប់ endpoints។',
                '**Testing**: សរសេរ Feature Tests សម្រាប់ business logic សំខាន់ៗ។',
                '**Optimization**: ប្រើប្រាស់ Caching សម្រាប់ endpoints ណាដែលទាញទិន្នន័យយឺត។'
              ],
              insight: 'គិតដូច Senior Developer៖ ត្រូវចេះរៀបចំដោះស្រាយករណីពិសេសៗ (Edge cases) និង errors ឱ្យបានល្អ។'
            },
            {
              id: '13.4.2',
              title: 'Submission Guidelines',
              titleEn: 'Submission Guidelines',
              type: 'concept',
              content: [
                '១. បង្ហោះកូដរបស់អ្នកនៅលើ **GitHub**។',
                '២. រៀបចំ file **README.md** ឱ្យមានរបៀបរៀបរយ រួមទាំងរបៀបដំឡើងផង។',
                '៣. ធ្វើ Documentation សម្រាប់ API endpoints ដោយប្រើ **Swagger/OpenAPI** ឬ Postman។',
                '៤. (Bonus) សាកល្បងដាក់ App របស់អ្នកឱ្យដំណើរការលើ server ផ្ទាល់។'
              ]
            },
            {
              id: '13.4.3',
              title: 'Real-world Demo: Capstone API Structure',
              titleEn: 'Capstone API Demo',
              type: 'code',
              content: [
                '**Standard Project Structure**: ឧទាហរណ៍នៃរចនាសម្ព័ន្ធ API សម្រាប់គម្រោងបញ្ចប់ការសិក្សាដែលមានលក្ខណៈអាជីព។',
                '**Clean Controller**: បង្ហាញពីរបៀបសរសេរ Controller ឱ្យខ្លី និងស្អាតដោយប្រើ FormRequest និង Resource។'
              ],
              code: 'public function store(StoreProductRequest $request) {\n    $product = Product::create($request->validated());\n    \n    return new ProductResource($product);\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '13.5',
          title: 'Final Knowledge Check (ការត្រួតពិនិត្យចំណេះដឹង)',
          titleEn: 'Final Knowledge Check',
          duration: '20 mins',
          level: 'Expert',
          slides: [
            {
              id: '13.5.0',
              title: 'Security Quiz',
              titleEn: 'Security Quiz',
              type: 'quiz',
              content: [
                'តើមុខងារមួយណាខាងក្រោមដែលជួយការពារអ្នកពីការវាយប្រហារ CSRF ដោយស្វ័យប្រវត្តិ?'
              ],
              options: [
                'Eloquent ORM',
                'The @csrf directive',
                'API Resources',
                'Middleware'
              ],
              correctAnswer: 1,
              insight: 'ត្រូវដាក់ @csrf ជានិច្ចក្នុង POST forms ដើម្បីការពារការលួចផ្ញើ request ពី site ផ្សេងដែលមិនមានការអនុញ្ញាត។'
            },
            {
              id: '13.5.1',
              title: 'Deployment Quiz',
              titleEn: 'Deployment Quiz',
              type: 'quiz',
              content: [
                'តើ command មួយណាដែលអ្នកគួរ run នៅលើ production ដើម្បីបង្កើនប្រសិទ្ធភាព App?'
              ],
              options: [
                'php artisan serve',
                'php artisan migrate:fresh',
                'php artisan optimize',
                'php artisan make:controller'
              ],
              correctAnswer: 2,
              insight: 'Command "optimize" នឹងធ្វើការ cache លើ config និង routes ដែលជួយឱ្យ App ដើរលឿនជាងមុនខ្លាំង។'
            },
            {
              id: '13.5.2',
              title: 'Performance Quiz',
              titleEn: 'Performance Quiz',
              type: 'quiz',
              content: [
                'តើវិធីណាដែលល្អបំផុតក្នុងការចាត់ចែងការងារដែលយឺតៗ ដូចជាការផ្ញើ emails?'
              ],
              options: [
                'Run ពួកវានៅក្នុង Controller',
                'ប្រើប្រាស់ Background Queue',
                'បង្កើន Server RAM',
                'ប្រើ Raw SQL Query'
              ],
              correctAnswer: 1,
              insight: 'Queues ជួយឱ្យ App របស់អ្នកនៅតែមានភាពរហ័សរហួន (Responsive) ដោយបោះការងារយឺតៗទៅធ្វើនៅ background។'
            }
          ]
        }
      ]
    }
  ]
};