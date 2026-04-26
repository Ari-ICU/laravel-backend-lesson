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
              title: 'ស្វែងយល់អំពី API (Understanding API)',
              titleEn: 'Understanding API',
              type: 'intro',
              content: [
                '**The Messenger**: API ប្រៀបដូចជា "អ្នករត់តុ" ក្នុងហាងអាហារ ដែលទទួលកម្ម៉ង់ពីអ្នក (Frontend) ទៅកាន់ចុងភៅ (Backend) ហើយនាំយកអាហារមកឱ្យអ្នកវិញ។',
                '**Universal Bridge**: វាអនុញ្ញាតឱ្យកម្មវិធីផ្សេងគ្នា (ដូចជា Mobile App និង Website) ទំនាក់ទំនងគ្នាបាន ទោះបីជាពួកគេប្រើភាសា Programming ខុសគ្នាក៏ដោយ។',
                '**Data Focused**: មិនដូច Web ធម្មតាដែលផ្ញើជា HTML, API ផ្ដោតលើការផ្ញើតែ "ទិន្នន័យ" (Data) សុទ្ធសាធដើម្បីឱ្យកម្មវិធីផ្សេងយកទៅបង្ហាញតាមចិត្ត។'
              ],
              animation: 'api_concept_flow'
            },
            {
              id: '9.1.1',
              title: 'JSON - ភាសារបស់ API (JSON Language)',
              titleEn: 'JSON Language',
              type: 'concept',
              content: [
                '**What is JSON?**: JSON (JavaScript Object Notation) គឺជាទម្រង់ទិន្នន័យដែលសាមញ្ញ និងពេញនិយមបំផុតសម្រាប់ API។',
                '**Structure**: វាប្រើប្រាស់ "Key" និង "Value" (ស្រដៀងនឹង PHP Array) ដើម្បីរក្សាទុកព័ត៌មាន។',
                '**Readable**: វាស្រាល និងងាយស្រួលអានទាំងមនុស្ស និងម៉ាស៊ីន (Lightweight & Human-readable)។'
              ],
              code: '{\n    "id": 1,\n    "name": "Cambodia News",\n    "active": true,\n    "tags": ["news", "tech"]\n}',
              language: 'json'
            },
            {
              id: '9.1.2',
              title: 'ការដំឡើង API Routes (Installing API)',
              titleEn: 'Installing API',
              type: 'code',
              content: [
                '**Laravel 11 Change**: ក្នុង Laravel 11, ឯកសារ `api.php` មិនមានមកស្រាប់ក្នុង Folder `routes` ឡើយ។',
                '**Install Command**: អ្នកត្រូវប្រើ Command `php artisan install:api` ដើម្បីបង្កើតវា។',
                '**What it does**: Command នេះនឹងបង្កើត file `routes/api.php`, បង្កើត migration សម្រាប់ personal access tokens (Sanctum), និងរៀបចំ API configuration ឱ្យអ្នកដោយស្វ័យប្រវត្តិ។'
              ],
              code: '// បើក Terminal រួចវាយ Command ខាងក្រោម៖\nphp artisan install:api',
              language: 'bash'
            },
            {
              id: '9.1.3',
              title: 'API Routes ក្នុង Laravel',
              titleEn: 'API Routes in Laravel',
              type: 'code',
              content: [
                '**api.php**: រាល់ API Endpoints ទាំងអស់ត្រូវកំណត់នៅក្នុងឯកសារ `routes/api.php`។',
                '**URL Prefix**: រាល់ Route ក្នុង file នេះនឹងមានពាក្យ `/api/` នៅខាងមុខជាស្វ័យប្រវត្តិ (ឧទាហរណ៍៖ `your-web.com/api/posts`)។',
                '**Stateless**: Routes ទាំងនេះមិនប្រើ Session ទេ ដូច្នេះវាដើរលឿន និងស័ក្តិសមសម្រាប់កម្មវិធីខ្នាតធំ។'
              ],
              code: '// routes/api.php\nuse App\\Http\\Controllers\\PostController;\n\n// ទទួលបាន URL: /api/posts\nRoute::get("/posts", [PostController::class, "index"]);',
              language: 'php'
            },
            {
              id: '9.1.4',
              title: 'ការបង្កើត API Controller',
              titleEn: 'Creating API Controller',
              type: 'code',
              content: [
                '**API Flag**: ប្រើ `--api` ពេលបង្កើត Controller ដើម្បីឱ្យ Laravel បង្កើតតែ Method ដែលចាំបាច់សម្រាប់ API (មិនមាន create/edit views)។',
                '**Direct Array Return**: អ្នកអាច return array ចេញពី Controller ហើយ Laravel នឹងបម្លែងវាទៅជា JSON ដោយស្វ័យប្រវត្តិ។'
              ],
              code: '// បង្កើត Controller សម្រាប់ API\nphp artisan make:controller Api/PostController --api\n\n// ក្នុង Controller\npublic function index() {\n    return [\n        "status" => "success",\n        "data" => Post::all()\n    ];\n}',
              language: 'php'
            },
            {
              id: '9.1.5',
              title: 'API Resources (Data Transformation)',
              titleEn: 'API Resources',
              type: 'concept',
              content: [
                '**The Filter**: API Resource ដើរតួជា "តម្រង" ដើម្បីរៀបចំទិន្នន័យពី Database មុននឹងផ្ញើទៅកាន់ User។',
                '**Data Security**: វាជួយឱ្យយើងលាក់ Column សម្ងាត់ៗ (ដូចជា password ឬ admin_notes) កុំឱ្យបង្ហាញទៅក្រៅ។',
                '**Consistency**: វាធានាថាទិន្នន័យដែលផ្ញើទៅ Frontend គឺមានទម្រង់ត្រឹមត្រូវ និងស្អាតជានិច្ច។'
              ],
              insight: 'Resources ជួយឱ្យ API របស់អ្នកមានលក្ខណៈអាជីព និងងាយស្រួលគ្រប់គ្រង។'
            },
            {
              id: '9.1.6',
              title: 'ការប្រើប្រាស់ API Resource',
              titleEn: 'Using API Resources',
              type: 'code',
              content: [
                '**Creation**: បង្កើត Resource សម្រាប់ Model ជាក់លាក់មួយ។',
                '**Usage**: ប្រើ `new Resource($model)` សម្រាប់ទិន្នន័យមួយ ឬ `Resource::collection($models)` សម្រាប់ទិន្នន័យច្រើន។'
              ],
              code: '// ១. បង្កើត Resource\nphp artisan make:resource UserResource\n\n// ២. ក្នុង Controller\npublic function show(User $user) {\n    return new UserResource($user);\n}',
              language: 'php'
            },
            {
              id: '9.1.7',
              title: 'Customizing the Response',
              titleEn: 'Customizing the Response',
              type: 'code',
              content: [
                '**Field Mapping**: អ្នកអាចប្តូរឈ្មោះ column ពី database ឱ្យទៅជាឈ្មោះដែល Frontend ងាយស្រួលប្រើ។',
                '**Extra Fields**: អ្នកអាចបន្ថែមទិន្នន័យថ្មីៗដែលមិនមានក្នុង Database (ដូចជា URL ពេញនៃរូបភាព)។'
              ],
              code: 'public function toArray($request) {\n    return [\n        "user_id" => $this->id,\n        "full_name" => $this->name,\n        "email_address" => $this->email,\n        "joined_date" => $this->created_at->format("Y-m-d"),\n    ];\n}',
              language: 'php'
            },
            {
              id: '9.1.8',
              title: 'Real-world Demo: Simple News API',
              titleEn: 'Simple News API Demo',
              type: 'code',
              content: [
                '**Full Setup**: ឧទាហរណ៍ពេញលេញនៃការបង្កើត News API ដែលមានសណ្តាប់ធ្នាប់។',
                '**Clean Code**: ការប្រើប្រាស់ Resource ដើម្បីគ្រប់គ្រងការបង្ហាញព័ត៌មាន។'
              ],
              code: '// Route\nRoute::get("/news", [NewsController::class, "index"]);\n\n// Controller\npublic function index() {\n    $news = News::latest()->paginate(10);\n    return NewsResource::collection($news);\n}',
              language: 'php'
            },
            {
              id: '9.1.9',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Use API Resources**: ជានិច្ចកាល ត្រូវប្រើ Resources ដើម្បីបម្លែងទិន្នន័យ កុំ return Model ផ្ទាល់។',
                '**Naming Convention**: ប្រើ camelCase សម្រាប់ Key ក្នុង JSON (ប្រសិនបើ Frontend ប្រើ JavaScript)។',
                '**Plural Endpoints**: ប្រើឈ្មោះ Route ជាពហុវចនៈ (ឧទាហរណ៍៖ `/posts` ជំនួសឱ្យ `/post`)។'
              ],
              insight: 'ការរៀបចំ API ឱ្យបានល្អតាំងពីដំបូង នឹងសន្សំពេលវេលាអ្នកយ៉ាងច្រើននៅពេលកម្មវិធីរីកធំ។'
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
              title: 'ហេតុអ្វីបានជា API ត្រូវការការការពារ?',
              titleEn: 'Why Secure API?',
              type: 'intro',
              content: [
                '**Stateless Nature**: API មិនប្រើ Cookies ឬ Session ដូច Web ធម្មតាទេ ដូច្នេះវា "ភ្លេច" ជានិច្ចថាតើអ្នកណាជាអ្នកផ្ញើ Request។',
                '**The Token Solution**: យើងប្រើ Token (កូដសម្ងាត់) ដើម្បីប្រាប់ Server ថា "ខ្ញុំជាអ្នកណា" ក្នុងរាល់ Request នីមួយៗ។',
                '**Data Security**: បើគ្មានការការពារទេ នរណាក៏អាចមកលួចទិន្នន័យ ឬកែប្រែព័ត៌មានក្នុង Database របស់អ្នកបានដែរ។'
              ],
              animation: 'token_auth_flow'
            },
            {
              id: '9.2.1',
              title: 'តើ Token ដំណើរការយ៉ាងដូចម្តេច?',
              titleEn: 'How Tokens Work',
              type: 'concept',
              content: [
                '**The Digital Key**: Token ប្រៀបដូចជា "សោរឌីជីថល" ដែល Server ប្រគល់ឱ្យអ្នកបន្ទាប់ពីអ្នក Login ត្រឹមត្រូវ។',
                '**Bearer Token**: អ្នកត្រូវផ្ញើ "សោរ" នេះមកជាមួយរាល់ពេលចង់ចូលប្រើបន្ទប់ (Endpoints) ដែលមានការការពារ។',
                '**Storage**: ជាទូទៅ Frontend (Mobile App ឬ React) នឹងរក្សាទុក Token នេះក្នុង Local Storage ឬ Secure Store។'
              ]
            },
            {
              id: '9.2.2',
              title: 'ការប្រើប្រាស់ Laravel Sanctum',
              titleEn: 'Using Laravel Sanctum',
              type: 'concept',
              content: [
                '**Lightweight Auth**: Sanctum គឺជាប្រព័ន្ធ Authentication ដែលស្រាល និងសាមញ្ញបំផុតសម្រាប់ API ក្នុង Laravel។',
                '**Perfect for Beginners**: វាងាយស្រួលដំឡើង និងប្រើប្រាស់ជាង Passport សម្រាប់កម្មវិធីទូទៅ។',
                '**Built-in**: ក្នុង Laravel 11, Sanctum ត្រូវបានរៀបចំមកឱ្យស្រាប់ពេលអ្នក run "php artisan install:api"។'
              ],
              insight: 'Sanctum គឺជាជម្រើសដ៏ល្អបំផុតសម្រាប់ Mobile App និង SPA (Single Page Application)។'
            },
            {
              id: '9.2.3',
              title: 'ការរៀបចំ Model ឱ្យប្រើ Token',
              titleEn: 'Preparing Model for Tokens',
              type: 'code',
              content: [
                '**HasApiTokens**: ដើម្បីឱ្យ Model (ដូចជា User) អាចបង្កើត Token បាន យើងត្រូវប្រើ Trait "HasApiTokens"។',
                '**Standard Setup**: ជាទូទៅ Laravel រៀបចំ Trait នេះឱ្យរួចជាស្រេចក្នុង "User" model។'
              ],
              code: '// App\\Models\\User.php\nuse Laravel\\Sanctum\\HasApiTokens;\n\nclass User extends Authenticatable {\n    use HasApiTokens, HasFactory, Notifiable;\n}',
              language: 'php'
            },
            {
              id: '9.2.4',
              title: 'ការចេញ Token (Issuing Tokens)',
              titleEn: 'Issuing Tokens',
              type: 'code',
              content: [
                '**Token Creation**: ប្រើ Method "createToken()" ដើម្បីបង្កើត Token ថ្មី។',
                '**Plain Text Token**: យើងត្រូវផ្ញើ "plainTextToken" ត្រឡប់ទៅឱ្យ User ព្រោះវាបង្ហាញតែម្ដងគត់ពេលបង្កើតដំបូង។'
              ],
              code: '// ក្នុង Controller បន្ទាប់ពី Check Password រួច\n$token = $user->createToken("auth_token")->plainTextToken;\n\nreturn response()->json([\n    "access_token" => $token,\n    "token_type" => "Bearer",\n]);',
              language: 'php'
            },
            {
              id: '9.2.5',
              title: 'ការការពារ Route (Protecting Routes)',
              titleEn: 'Protecting Routes',
              type: 'code',
              content: [
                '**Sanctum Middleware**: ប្រើ Middleware "auth:sanctum" ដើម្បីការពារ Route ណាដែលចង់ឱ្យតែ User ដែលមាន Token ចូលប្រើបាន។',
                '**Accessing User**: ក្នុង Route ដែលការពារ អ្នកអាចប្រើ "auth()->user()" ដើម្បីដឹងថា User ណាដែលកំពុងប្រើប្រាស់។'
              ],
              code: '// routes/api.php\nRoute::middleware("auth:sanctum")->get("/user", function (Request $request) {\n    return $request->user();\n});',
              language: 'php'
            },
            {
              id: '9.2.6',
              title: 'របៀបផ្ញើ Token ពី Frontend',
              titleEn: 'Sending Token from Frontend',
              type: 'concept',
              content: [
                '**Authorization Header**: Token ត្រូវផ្ញើតាមរយៈ HTTP Header ឈ្មោះថា "Authorization"។',
                '**Bearer Prefix**: តម្លៃរបស់វាត្រូវតែមានពាក្យ "Bearer " នៅខាងមុខ (ឧទាហរណ៍៖ "Bearer 1|abcde...")។'
              ],
              insight: 'Frontend ត្រូវតែបញ្ជូន Header នេះមកជាមួយរាល់ពេលចង់ទាញទិន្នន័យផ្ទាល់ខ្លួនរបស់ User។'
            },
            {
              id: '9.2.7',
              title: 'Real-world Demo: Full Auth Flow',
              titleEn: 'Full Auth Flow Demo',
              type: 'code',
              content: [
                '**Complete Logic**: បង្ហាញតាំងពីការផ្ទៀងផ្ទាត់ Email/Password រហូតដល់ការបញ្ជូន Token និងការចូលប្រើ Route ដែលមានការការពារ។'
              ],
              code: '// Login Method\npublic function login(Request $request) {\n    $user = User::where("email", $request->email)->first();\n\n    if (!$user || !Hash::check($request->password, $user->password)) {\n        return response(["message" => "ព័ត៌មានមិនត្រឹមត្រូវ"], 401);\n    }\n\n    return [\n        "user" => $user,\n        "token" => $user->createToken("my-app")->plainTextToken\n    ];\n}',
              language: 'php'
            },
            {
              id: '9.2.8',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Sanctum for SPAs**: ប្រើ Sanctum សម្រាប់កម្មវិធីទូទៅ ព្រោះវាងាយស្រួល និងស្រាល។',
                '**Token Protection**: កុំបង្ហាញ Token ជាសាធារណៈ និងត្រូវប្រើ "Plain Text Token" តែម្ដងគត់ពេលបញ្ជូនឱ្យ User។',
                '**Abilities**: ប្រើប្រាស់ "Token Abilities" ដើម្បីកំណត់សិទ្ធិឱ្យ Token នីមួយៗ (ឧទាហរណ៍៖ មើលបានតែអាន មិនអាចលុប)។'
              ],
              insight: 'សុវត្ថិភាព API ផ្ដើមចេញពីការគ្រប់គ្រង Token ឱ្យបានហ្មត់ចត់បំផុត។'
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
              title: 'ស្វែងយល់អំពី Exception',
              titleEn: 'Understanding Exceptions',
              type: 'intro',
              content: [
                '**Natural Failures**: កំហុស (Errors) គឺជាផ្នែកមួយនៃការសរសេរកម្មវិធី។ វាអាចកើតឡើងដោយសារ User វាយបញ្ចូលព័ត៌មានខុស ឬ Server មានបញ្ហា។',
                '**The Safety Net**: Laravel មាន "សំណាញ់សុវត្ថិភាព" (Exception Handler) ដើម្បីចាប់រាល់កំហុសទាំងអស់ កុំឱ្យ App របស់អ្នក "ងាប់" ទាំងស្រុង។',
                '**Graceful Handling**: គោលដៅរបស់យើងគឺ បង្ហាញសារដែលងាយយល់ដល់ User ជំនួសឱ្យការបង្ហាញកូដដែលគួរឱ្យខ្លាច។'
              ],
              animation: 'error_handling_flow'
            },
            {
              id: '10.1.1',
              title: 'Debug Mode និង សុវត្ថិភាព',
              titleEn: 'Debug Mode & Safety',
              type: 'concept',
              content: [
                '**APP_DEBUG**: ក្នុង ".env", បើដាក់ "true" អ្នកនឹងឃើញកំហុសលម្អិត (ល្អសម្រាប់អ្នកអភិវឌ្ឍន៍ដើម្បីដោះស្រាយកូដ)។',
                '**Security Risk**: ហាមបើក "true" នៅលើ Server ពិតប្រាកដ (Production) ព្រោះវាអាចបង្ហាញព័ត៌មានសម្ងាត់ដូចជា Database Password។',
                '**Production View**: ពេលបិទ Debug, User នឹងឃើញត្រឹមតែពាក្យ "500 | Server Error" ដែលមានលក្ខណៈអាជីព និងសុវត្ថិភាព។'
              ],
              insight: 'ព័ត៌មានលម្អិតនៃកំហុសគឺជា "រតនសម្បត្តិ" សម្រាប់ពួក Hacker។ កុំបង្ហាញវានៅលើ Production ឱ្យសោះ!'
            },
            {
              id: '10.1.2',
              title: 'ការប្រើប្រាស់ Try-Catch',
              titleEn: 'Using Try-Catch',
              type: 'code',
              content: [
                '**Manual Catching**: ជួនកាលយើងចង់ "ចាប់" កំហុសដោយខ្លួនឯងក្នុងកូដ ដើម្បីកុំឱ្យវាប៉ះពាល់ដល់ដំណើរការផ្សេងទៀត។',
                '**The Workflow**: សរសេរកូដក្នុង "try", បើមានបញ្ហាវានឹងលោតទៅ "catch" ដើម្បីឱ្យយើងដោះស្រាយតាមក្រោយ។'
              ],
              code: 'try {\n    $result = $x / 0; // កូដដែលនឹងបង្កកំហុស\n} catch (Exception $e) {\n    Log::error("មានបញ្ហាគណនា: " . $e->getMessage());\n    return "សុំទោស មានបញ្ហាបច្ចេកទេស។";\n}',
              language: 'php'
            },
            {
              id: '10.1.3',
              title: 'Centralized Exception Handling',
              titleEn: 'Centralized Handling',
              type: 'code',
              content: [
                '**Laravel 11 Style**: ក្នុង Laravel 11, ការគ្រប់គ្រងកំហុសទូទាំង App គឺធ្វើឡើងនៅក្នុងឯកសារ "bootstrap/app.php"។',
                '**Custom Mapping**: អ្នកអាចកំណត់ថា បើជួប Error ប្រភេទណា ត្រូវបង្ហាញទិន្នន័យបែបណាសម្រាប់ API ឬ Web។'
              ],
              code: '// bootstrap/app.php\n->withExceptions(function (Exceptions $exceptions) {\n    $exceptions->render(function (NotFoundHttpException $e) {\n        return response()->json(["message" => "រកមិនឃើញទិន្នន័យ"], 404);\n    });\n})',
              language: 'php'
            },
            {
              id: '10.1.4',
              title: 'ការបង្កើត Custom Error Pages',
              titleEn: 'Custom Error Pages',
              type: 'concept',
              content: [
                '**Blade Views**: Laravel នឹងឆែកមើលក្នុង Folder "resources/views/errors/" ជាស្វ័យប្រវត្តិ។',
                '**Simple Setup**: បង្កើត file ដូចជា "404.blade.php" ឬ "500.blade.php" ដើម្បីបង្ហាញរូបរាងស្អាតៗដែលអ្នកចង់បាន។'
              ],
              insight: 'ការរចនាទំព័រ 404 ឱ្យបានស្អាត ជួយឱ្យ User មិនសូវធុញទ្រាន់ពេលចូលខុស Link។'
            },
            {
              id: '10.1.5',
              title: 'Real-world Demo: API Error Formatting',
              titleEn: 'API Error Formatting Demo',
              type: 'code',
              content: [
                '**Standardized Response**: របៀបរៀបចំសារកំហុសឱ្យមានស្ដង់ដារសម្រាប់ Frontend (React/Vue/Mobile)។',
                '**Clear Messages**: បញ្ជូនសារដែលងាយស្រួលយល់ និង Code សម្គាល់កំហុស។'
              ],
              code: 'public function show($id) {\n    $product = Product::find($id);\n\n    if (!$product) {\n        return response()->json([\n            "status" => "error",\n            "message" => "រកមិនឃើញទំនិញដែលអ្នកកំពុងស្វែងរកទេ"\n        ], 404);\n    }\n\n    return new ProductResource($product);\n}',
              language: 'php'
            },
            {
              id: '10.1.6',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Close Debug on Production**: បិទ APP_DEBUG=false ជានិច្ចពេល App ដើរពិតប្រាកដ។',
                '**User Friendly Messages**: កុំបង្ហាញកូដបច្ចេកទេសទៅកាន់ User, បង្ហាញសារដែលពួកគាត់យល់។',
                '**Use Logging**: ប្រើ Log ជានិច្ចពេលមាន Exception ដើម្បីងាយស្រួលឆែកមើលបញ្ហាតាមក្រោយ។'
              ],
              insight: 'ការគ្រប់គ្រងកំហុសបានល្អ គឺជាសញ្ញានៃកម្មវិធីដែលមានគុណភាព និងវិជ្ជាជីវៈ។'
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
              title: 'ការយល់ដឹងអំពី Logging',
              titleEn: 'Understanding Logging',
              type: 'intro',
              content: [
                '**The Application Diary**: Logging គឺជាការកត់ត្រារាល់សកម្មភាព ឬព្រឹត្តិការណ៍ដែលកើតឡើងក្នុង App របស់អ្នក ដូចជាការសរសេរកំណត់ហេតុប្រចាំថ្ងៃ។',
                '**Production Eyes**: នៅលើ Server ពិតប្រាកដ អ្នកមិនអាចឃើញ Error លោតលើអេក្រង់ទេ ដូច្នេះ Log គឺជា "ភ្នែក" តែមួយគត់របស់អ្នក។',
                '**Evidence Based**: វាជួយឱ្យអ្នកមាន "ភស្តុតាង" ដើម្បីដឹងថា តើបញ្ហាកើតឡើងនៅពេលណា និងមានមូលហេតុអ្វី។'
              ],
              animation: 'logging_flow'
            },
            {
              id: '10.2.1',
              title: 'ហេតុអ្វីបានជាយើងត្រូវការ Log?',
              titleEn: 'Why Logging?',
              type: 'concept',
              content: [
                '**Invisible Errors**: នៅពេល App ដើរខុសធម្មតានៅពេល App ដើរពិតប្រាកដ អ្នកនឹងមិនដឹងទេថាមានអ្វីកើតឡើង បើគ្មានការកត់ត្រាទុក។',
                '**Audit Trail**: វាជួយឱ្យអ្នកតាមដានសកម្មភាពសំខាន់ៗ (ឧទាហរណ៍៖ ការលុបទិន្នន័យ ឬការប្តូរ Password)។',
                '**Performance Monitoring**: អ្នកអាចដឹងថាតើផ្នែកណាខ្លះនៃ App ដែលដើរយឺត ឬមានបញ្ហាជាមួយ Server ខាងក្រៅ។'
              ]
            },
            {
              id: '10.2.2',
              title: 'កម្រិតផ្សេងៗនៃ Log',
              titleEn: 'Log Severity Levels',
              type: 'concept',
              content: [
                '**Info & Debug**: សម្រាប់កត់ត្រាព័ត៌មានទូទៅ (ឧទាហរណ៍៖ "User បានចុះឈ្មោះជោគជ័យ")។',
                '**Warning & Error**: សម្រាប់កត់ត្រាបញ្ហាមិនប្រក្រតី ឬកំហុសដែលមិនទាន់ធ្វើឱ្យ App ងាប់ទាំងស្រុង។',
                '**Critical & Emergency**: សម្រាប់បញ្ហាធ្ងន់ធ្ងរខ្លាំង (ឧទាហរណ៍៖ "Database គាំង" ឬ "Hacker កំពុងវាយប្រហារ")។'
              ],
              insight: 'ប្រើកម្រិតឱ្យបានត្រឹមត្រូវ ដើម្បីងាយស្រួល Filter មើលតែបញ្ហាសំខាន់ៗ។'
            },
            {
              id: '10.2.3',
              title: 'ការប្រើប្រាស់ Log Facade',
              titleEn: 'Using Log Facade',
              type: 'code',
              content: [
                '**Simple Logging**: ប្រើ "Log" Facade ដើម្បីសរសេរព័ត៌មានចូលទៅក្នុង file។',
                '**Storage Location**: ជាស្ដង់ដារ Laravel រក្សាទុកវាក្នុង "storage/logs/laravel.log"។'
              ],
              code: 'use Illuminate\\Support\\Facades\\Log;\n\nLog::info("មាន User ថ្មីបានចុះឈ្មោះ");\nLog::warning("User វាយ Password ខុសលើសពី ៣ ដង");\nLog::error("មិនអាចផ្ញើ Email ទៅកាន់ User បានទេ");',
              language: 'php'
            },
            {
              id: '10.2.4',
              title: 'ការបន្ថែម Context (ព័ត៌មានបន្ថែម)',
              titleEn: 'Logging with Context',
              type: 'code',
              content: [
                '**Beyond Strings**: កុំកត់ត្រាត្រឹមតែសារជាអក្សរ ត្រូវបញ្ជូនទិន្នន័យជា Array ទៅជាមួយផង។',
                '**Easier Debugging**: វានឹងជួយឱ្យអ្នកដឹងថា តើ User ម្នាក់ណាដែលមានបញ្ហា និងមានទិន្នន័យអ្វីខ្លះនៅពេលនោះ។'
              ],
              code: 'Log::info("User ប្តូរ Password ជោគជ័យ", [\n    "user_id" => $user->id,\n    "ip_address" => request()->ip(),\n    "browser" => request()->header("User-Agent")\n]);',
              language: 'php'
            },
            {
              id: '10.2.5',
              title: 'Log Channels និង Configuration',
              titleEn: 'Log Channels',
              type: 'concept',
              content: [
                '**Daily Logs**: អ្នកអាចកំណត់ឱ្យ Laravel បង្កើត file ថ្មីរាល់ថ្ងៃ (daily) ដើម្បីកុំឱ្យ file ធំពេកពិបាកបើកមើល។',
                '**Slack/Telegram**: អ្នកអាចកំណត់ឱ្យ Laravel ផ្ញើសារ Log ទៅកាន់ Slack ឬ Telegram របស់ក្រុមការងារភ្លាមៗបាន។'
              ],
              insight: 'ក្នុង Config "logging.php", អ្នកអាចកំណត់ Channel ជាច្រើនតាមតម្រូវការ។'
            },
            {
              id: '10.2.6',
              title: 'Real-world Demo: Tracking Important Actions',
              titleEn: 'Activity Tracking Demo',
              type: 'code',
              content: [
                '**Security Audit**: បង្ហាញរបៀបកត់ត្រាទុកនៅពេលមានសកម្មភាពសំខាន់ៗដែលប៉ះពាល់ដល់ប្រព័ន្ធ។',
                '**Troubleshooting**: ប្រើ Log ដើម្បីតាមដានដំណើរការ API ជាមួយក្រុមហ៊ុនខាងក្រៅ។'
              ],
              code: 'public function processPayment(Request $request) {\n    Log::info("ចាប់ផ្ដើមដំណើរការទូទាត់ប្រាក់", ["order_id" => $request->order_id]);\n\n    try {\n        // កូដទូទាត់ប្រាក់...\n    } catch (\\Exception $e) {\n        Log::critical("ការទូទាត់ប្រាក់មានបញ្ហាធ្ងន់ធ្ងរ!", [\n            "order_id" => $request->order_id,\n            "error" => $e->getMessage()\n        ]);\n    }\n}',
              language: 'php'
            },
            {
              id: '10.2.7',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Don\'t Log Passwords**: ហាមដាច់ខាតកុំកត់ត្រា Password ឬព័ត៌មានកាតធនាគារចូលក្នុង Log។',
                '**Use Daily Logs**: កំណត់ឱ្យវាបង្កើត file ថ្មីតាមថ្ងៃ ដើម្បីងាយស្រួលគ្រប់គ្រងទំហំ។',
                '**External Alerts**: កំណត់ឱ្យផ្ញើសារទៅ Slack/Telegram តែសម្រាប់កំហុសកម្រិត "Critical" ប៉ុណ្ណោះ។'
              ],
              insight: 'Log គឺជាភ្នែកច្រមុះរបស់អ្នក នៅពេលកម្មវិធីកំពុងដំណើរការនៅលើ Server។'
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
              title: 'មូលដ្ឋានគ្រឹះនៃការធ្វើតេស្ត',
              titleEn: 'Foundations of Testing',
              type: 'intro',
              content: [
                '**The Robot Inspector**: ការធ្វើតេស្ត (Testing) គឺដូចជាការជួល "រ៉ូបូត" ឱ្យមកជួយពិនិត្យកូដរបស់អ្នករាល់ពេលអ្នកកែប្រែអ្វីមួយ។',
                '**Confidence to Build**: វាផ្តល់ឱ្យអ្នកនូវទំនុកចិត្តថា កូដចាស់ៗរបស់អ្នកនៅតែដើរត្រឹមត្រូវ បើទោះបីជាអ្នកថែម Feature ថ្មីក៏ដោយ។',
                '**Saving Time**: ទោះបីជាវាចំណាយពេលសរសេរបន្តិចមែន ប៉ុន្តែវាជួយសន្សំពេលវេលា "ជួសជុល" បញ្ហានៅថ្ងៃអនាគតបានរាប់ម៉ោង។'
              ],
              animation: 'testing_overview_flow'
            },
            {
              id: '11.1.1',
              title: 'Manual vs. Automated Testing',
              titleEn: 'Manual vs. Automated',
              type: 'concept',
              content: [
                '**Manual Testing**: អ្នកចុះឈ្មោះ (Register) ដោយដៃផ្ទាល់លើ Browser រាល់ពេលកូដកែ (យឺត និងងាយនឹងភ្លេច)។',
                '**Automated Testing**: អ្នកសរសេរកូដឱ្យវា Register ជំនួសអ្នកក្នុងរយៈពេល ០.១ វិនាទី (លឿន និងច្បាស់លាស់)។'
              ],
              insight: 'Automated Testing ជួយឱ្យអ្នកអាចលក់ App របស់អ្នកបានដោយមិនចាំបាច់បារម្ភពី Bug ចាស់ៗលោតមកវិញ។'
            },
            {
              id: '11.1.2',
              title: 'Unit vs. Feature Testing',
              titleEn: 'Unit vs. Feature Testing',
              type: 'concept',
              content: [
                '**Unit Tests**: តេស្តផ្នែកតូចបំផុតនៃកូដ (ដូចជា Function គណនាលេខ)។ វាលឿនបំផុតព្រោះវាមិនបើក Framework ទាំងមូលទេ។',
                '**Feature Tests**: តេស្តផ្នែកធំនៃ App (ដូចជាការសាកល្បងចូល Login និងឆែកមើល Page បន្ទាប់)។ វាពិនិត្យមើល URL និង Response ពិតប្រាកដ។'
              ]
            },
            {
              id: '11.1.3',
              title: 'ឧបករណ៍សម្រាប់ធ្វើតេស្ត',
              titleEn: 'Testing Tools',
              type: 'concept',
              content: [
                '**PHPUnit**: ជាស្ដង់ដារតាំងពីដើមមករបស់ PHP និង Laravel (ប្រើប្រាស់ Class)។',
                '**Pest**: ជាឧបករណ៍ថ្មីដែលកំពុងពេញនិយមខ្លាំង ព្រោះវាមាន Syntax ងាយស្រួលអាន និងស្រដៀងនឹងភាសាមនុស្ស។'
              ],
              insight: 'Laravel 11 ផ្ដល់ជម្រើសឱ្យអ្នកជ្រើសរើសមួយណាដែលអ្នកចង់ប្រើពេលបង្កើត Project ថ្មី។'
            },
            {
              id: '11.1.4',
              title: 'ការប្រើប្រាស់ "php artisan test"',
              titleEn: 'Running Tests',
              type: 'code',
              content: [
                '**The Command Center**: ប្រើ Command នេះដើម្បីឱ្យ Laravel រត់រាល់ការតេស្តទាំងអស់ដែលអ្នកមាន។',
                '**Green vs Red**: បើឃើញពណ៌បៃតង (PASS) មានន័យថាកូដអ្នកល្អ បើឃើញពណ៌ក្រហម (FAIL) មានន័យថាកូដអ្នកមានបញ្ហាហើយ!'
              ],
              code: '# រត់តេស្តទាំងអស់\nphp artisan test\n\n# រត់តែ Unit tests\nphp artisan test --testsuite=Unit\n\n# រត់តេស្តដោយប្រើប្រាស់ Parallel (លឿនខ្លាំង)\nphp artisan test --parallel',
              language: 'bash'
            },
            {
              id: '11.1.5',
              title: 'Real-world Demo: Reading Test Results',
              titleEn: 'Reading Test Results Demo',
              type: 'code',
              content: [
                '**Failure Analysis**: បង្ហាញពីរបៀបដែល Laravel ប្រាប់យើងថាមានកំហុសនៅត្រង់ណា ក្នុង file ណា និងបន្ទាត់ទីប៉ុន្មាន។',
                '**Detailed Summary**: របាយការណ៍សង្ខេបអំពីចំនួនតេស្តដែលជោគជ័យ និងបរាជ័យ។'
              ],
              code: 'FAIL  Tests\\Feature\\ExampleTest\n  ⨯ the application returns a successful response\n\n  --- \n  Expected response status code [200] but received [404].\n  At tests/Feature/ExampleTest.php:19',
              language: 'bash'
            },
            {
              id: '11.1.6',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Test Early & Often**: រត់តេស្តជានិច្ចមុននឹងបញ្ជូនកូដ (Push) ទៅកាន់ Server។',
                '**Descriptive Names**: ដាក់ឈ្មោះតេស្តឱ្យច្បាស់លាស់ ដើម្បីឱ្យអ្នកដឹងភ្លាមថាវាជាតេស្តអំពីអ្វី។',
                '**80/20 Rule**: ព្យាយាមឱ្យ Feature Tests គ្របដណ្ដប់លើមុខងារសំខាន់ៗបំផុតរបស់ App របស់អ្នក។'
              ],
              insight: 'ការសរសេរ Test មិនមែនជាការខាតពេលទេ ប៉ុន្តែវាជាការសន្សំពេលវេលានៅថ្ងៃអនាគត។'
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
                '**Lightweight & Fast**: Unit tests មិនដំណើរការ Framework Laravel ទាំងមូលនោះទេ (No booting) ដែលធ្វើឱ្យវាលឿនបំផុត។',
                '**Isolation**: វាផ្ដោតតែលើ Logic តូចមួយប៉ុណ្ណោះ ដោយមិនប៉ះពាល់ដល់ Database, Filesystem ឬ Network ឡើយ។',
                '**Pure Functions**: វាស័ក្តិសមបំផុតសម្រាប់តេស្តការគណនាស្មុគស្មាញ ការកែច្នៃ String ឬ Business Logic សុទ្ធសាធ។'
              ],
              animation: 'unit_testing_flow',
              insight: 'Unit Test ដែលល្អ គួរតែរត់បានរាប់ពាន់ដងក្នុងរយៈពេលត្រឹមតែប៉ុន្មានវិនាទីប៉ុណ្ណោះ។'
            },
            {
              id: '11.2.1',
              title: 'A Basic Unit Test',
              titleEn: 'A Basic Unit Test',
              type: 'code',
              content: [
                '**Test Location**: ប្រើប្រាស់ folder `tests/Unit` និងបន្តពូជពី `PHPUnit\\Framework\\TestCase`។',
                '**Assertion**: ប្រើប្រាស់ Method ដូចជា `assertEquals` ដើម្បីផ្ទៀងផ្ទាត់លទ្ធផល។'
              ],
              code: 'use PHPUnit\\Framework\\TestCase;\n\nclass OrderTest extends TestCase {\n    public function test_can_format_price() {\n        $order = new Order(["total" => 1000]);\n        \n        // ផ្ទៀងផ្ទាត់ថា 1000 cents ក្លាយជា $10.00\n        $this->assertEquals("$10.00", $order->formattedPrice());\n    }\n}',
              language: 'php'
            },
            {
              id: '11.2.2',
              title: 'Data Providers (ការតេស្តករណីច្រើន)',
              titleEn: 'Data Providers',
              type: 'code',
              content: [
                '**Efficiency**: កុំសរសេរតេស្តដដែលៗសម្រាប់ទិន្នន័យខុសគ្នា ត្រូវប្រើ Data Provider ជំនួសវិញ។',
                '**Scenarios**: ជួយឱ្យយើងអាចតេស្តករណីជាច្រើន (Multiple scenarios) ក្នុង Method តែមួយ។'
              ],
              code: '/** @test @dataProvider priceProvider */\npublic function it_formats_price_correctly($input, $expected) {\n    $order = new Order(["total" => $input]);\n    $this->assertEquals($expected, $order->formattedPrice());\n}\n\npublic static function priceProvider() {\n    return [\n        "តំលៃធម្មតា" => [1000, "$10.00"],\n        "តំលៃសូន្យ" => [0, "$0.00"],\n        "តំលៃធំ" => [50000, "$500.00"],\n    ];\n}',
              language: 'php',
              insight: 'ការប្រើ Data Providers ធ្វើឱ្យរបាយការណ៍តេស្តរបស់អ្នកងាយស្រួលអាន និងយល់ពីចំណុចដែលខុស។'
            },
            {
              id: '11.2.3',
              title: 'Mocking Dependencies',
              titleEn: 'Mocking Dependencies',
              type: 'concept',
              content: [
                '**Mocking**: គឺជាការបង្កើត "តួអង្គក្លែងក្លាយ" ដើម្បីជំនួសឱ្យ Class ផ្សេងទៀតដែល Logic របស់យើងត្រូវការពឹងផ្អែក។',
                '**Controlled Behavior**: យើងអាចកំណត់ឱ្យតួអង្គក្លែងក្លាយនោះ បញ្ជូនលទ្ធផលអ្វីមកក៏បានតាមតែយើងចង់បាន។',
                '**Isolation**: ជួយឱ្យយើងតេស្តតែ Logic ក្នុង Class បច្ចុប្បន្ន ដោយមិនចាំបាច់បារម្ភពីកំហុសរបស់ Class ផ្សេង។'
              ],
              animation: 'mocking_flow',
              insight: 'Mocking ជួយឱ្យ Unit Test នៅតែលឿន ទោះបីជាកូដដើមត្រូវទាក់ទងទៅ Database ក៏ដោយ។'
            },
            {
              id: '11.2.4',
              title: 'Real-world Demo: Mocking External APIs',
              titleEn: 'Mocking APIs Demo',
              type: 'code',
              content: [
                '**Http Fake**: ប្រើប្រាស់ `Http::fake()` ដើម្បីត្រាប់តាមចម្លើយ (Response) ពី Server ខាងក្រៅ (ដូចជា PayPal ឬ Telegram)។',
                '**No Cost**: យើងមិនចាំបាច់បារម្ភពីការចំណាយលុយលើ API ឬភាពយឺតយ៉ាវនៃ Network ឡើយ។'
              ],
              code: 'public function test_it_can_fetch_exchange_rate() {\n    // ត្រាប់តាម API ខាងក្រៅ\n    Http::fake([\n        "api.exchangerate.com/*" => Http::response(["rate" => 4100], 200)\n    ]);\n\n    $result = CurrencyService::getKhmerRate();\n    \n    $this->assertEquals(4100, $result);\n    Http::assertSentCount(1); // ផ្ទៀងផ្ទាត់ថាវាត្រូវបានហៅពិតមែន\n}',
              language: 'php'
            },
            {
              id: '11.2.5',
              title: 'Test Driven Development (TDD)',
              titleEn: 'TDD Workflow',
              type: 'concept',
              content: [
                '**Red**: សរសេរតេស្តដែលរំពឹងទុកជាមុន (តេស្តនឹងធ្លាក់ព្រោះមិនទាន់មានកូដ)។',
                '**Green**: សរសេរកូដឱ្យតែ "ជាប់" តេស្តនោះប៉ុណ្ណោះ (កុំទាន់បារម្ភពីរឿងស្អាត)។',
                '**Refactor**: រៀបចំកូដឱ្យស្អាត និងមានរបៀបរៀបរយឡើងវិញ ខណៈពេលតេស្តនៅតែបៃតង។'
              ],
              insight: 'TDD មិនមែនគ្រាន់តែជាការតេស្តទេ ប៉ុន្តែវាគឺជា "វិធីសាស្ត្ររចនាកូដ" (Design Pattern)។'
            },
            {
              id: '11.2.6',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**One Assertion**: ព្យាយាមឱ្យតេស្តមួយ ផ្ដោតលើការផ្ទៀងផ្ទាត់រឿងតែមួយ (Single Responsibility)។',
                '**No Database**: ហាមប៉ះពាល់ Database ក្នុង Unit Test (ប្រើ Feature Test សម្រាប់រឿងនោះ)។',
                '**Descriptive Names**: ដាក់ឈ្មោះ Method តេស្តឱ្យដូចជាប្រយោគភាសាអង់គ្លេស (ឧទាហរណ៍៖ `test_user_cannot_order_out_of_stock_item`)។'
              ],
              insight: 'Unit Test ដែលល្អ គឺជាឯកសារ (Documentation) ដ៏ល្អបំផុតសម្រាប់កូដរបស់អ្នក។'
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
                '**Real-world Scenarios**: Feature tests គឺជាការតេស្តបែប "ពិភពពិត" ដែលត្រាប់តាមសកម្មភាពអ្នកប្រើប្រាស់ពិតៗ។',
                '**Full Application Stack**: វាដំណើរការ Laravel ទាំងមូល (Booting) រាប់តាំងពី Routes, Middleware រហូតដល់ Database។',
                '**Confidence**: វាផ្ដល់ទំនុកចិត្តខ្ពស់បំផុតថា Feature នីមួយៗរបស់អ្នកដើរត្រូវគ្នា (Integration) 100%។'
              ],
              animation: 'feature_testing_flow',
              insight: 'Feature Test ផ្ដោតលើលទ្ធផលចុងក្រោយ (Result) ជាជាងការខ្វល់ខ្វាយពីរបៀបដែលកូដសរសេរនៅខាងក្នុង។'
            },
            {
              id: '11.3.1',
              title: 'Testing Authentication',
              titleEn: 'Testing Authentication',
              type: 'code',
              content: [
                '**ActingAs**: ប្រើ Method `actingAs($user)` ដើម្បីក្លែងធ្វើជា User ដែលបាន Login រួចជាស្រេច។',
                '**Protected Routes**: ផ្ទៀងផ្ទាត់ថា Route ដែលមានការការពារ (Middleware) មិនអាចចូលបានដោយគ្មានសិទ្ធិ។'
              ],
              code: 'public function test_protected_route_access() {\n    // 1. មិនអាចចូលបានបើមិនទាន់ Login\n    $this->get("/dashboard")->assertRedirect("/login");\n\n    // 2. អាចចូលបានក្រោយ Login\n    $user = User::factory()->create();\n    $response = $this->actingAs($user)->get("/dashboard");\n    \n    $response->assertStatus(200);\n}',
              language: 'php',
              insight: 'ការតេស្តទាំងករណី "Success" និង "Failure" គឺសំខាន់ដូចគ្នាសម្រាប់សុវត្ថិភាព។'
            },
            {
              id: '11.3.2',
              title: 'HTTP JSON API Testing',
              titleEn: 'JSON API Testing',
              type: 'code',
              content: [
                '**API Verification**: ប្រើ `getJson()`, `postJson()` សម្រាប់ការតេស្ត REST API ដែលបញ្ជូនទិន្នន័យជា JSON។',
                '**Structure Check**: ផ្ទៀងផ្ទាត់ថា API បញ្ជូនទិន្នន័យមកមានទម្រង់ (Structure) ត្រឹមត្រូវតាមស្ដង់ដារ។'
              ],
              code: 'public function test_api_returns_correct_format() {\n    $product = Product::factory()->create(["name" => "Laptop"]);\n\n    $response = $this->getJson("/api/products/" . $product->id);\n\n    $response->assertStatus(200)\n             ->assertJson([\n                 "data" => ["name" => "Laptop"]\n             ])\n             ->assertJsonStructure([\n                 "data" => ["id", "name", "price"]\n             ]);\n}',
              language: 'php'
            },
            {
              id: '11.3.3',
              title: 'Database Assertions',
              titleEn: 'Database Assertions',
              type: 'concept',
              content: [
                '**RefreshDatabase**: ប្រើ Trait នេះដើម្បីសម្អាត Database ឱ្យនៅស្អាតជានិច្ចមុនពេលរត់តេស្តនីមួយៗ។',
                '**State Verification**: ឆែកមើលទិន្នន័យក្នុង Table ផ្ទាល់ ដើម្បីប្រាកដថា Logic របស់អ្នកបានរក្សាទុកវាត្រឹមត្រូវ។'
              ],
              insight: 'assertDatabaseHas() គឺជា "ភ្នែក" របស់អ្នកដើម្បីមើលទៅក្នុង Database ក្នុងអំឡុងពេលតេស្ត។'
            },
            {
              id: '11.3.4',
              title: 'Testing Validation Failures',
              titleEn: 'Testing Validation',
              type: 'code',
              content: [
                '**Negative Testing**: ត្រូវតេស្តឱ្យប្រាកដថា App របស់អ្នកនឹង "បដិសេធ" ទិន្នន័យដែលមិនត្រឹមត្រូវ។',
                '**Error Reporting**: ផ្ទៀងផ្ទាត់ថាសារកំហុស (Validation Errors) ត្រូវបានបញ្ជូនទៅកាន់ User វិញត្រឹមត្រូវ។'
              ],
              code: 'public function test_title_is_required_to_create_post() {\n    $user = User::factory()->create();\n\n    $response = $this->actingAs($user)->post("/posts", [\n        "body" => "Missing title field"\n    ]);\n\n    $response->assertSessionHasErrors(["title"]);\n    $this->assertDatabaseCount("posts", 0);\n}',
              language: 'php'
            },
            {
              id: '11.3.5',
              title: 'Real-world Demo: User Registration Test',
              titleEn: 'Registration Test Demo',
              type: 'code',
              content: [
                '**Full Flow Test**: ធ្វើតេស្តលើដំណើរការចុះឈ្មោះ User ថ្មី តាំងពីការបំពេញ Form រហូតដល់ការរក្សាទុកក្នុង Database និងការបញ្ជូនទៅកាន់ Dashboard។'
              ],
              code: 'public function test_new_user_can_register() {\n    $response = $this->post("/register", [\n        "name" => "Sokha",\n        "email" => "sokha@test.com",\n        "password" => "password",\n        "password_confirmation" => "password"\n    ]);\n\n    $response->assertRedirect("/dashboard");\n    $this->assertDatabaseHas("users", ["email" => "sokha@test.com"]);\n    $this->assertTrue(Hash::check("password", User::first()->password));\n}',
              language: 'php'
            },
            {
              id: '11.3.6',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Real Scenarios**: តេស្តឱ្យដូចសកម្មភាពដែល User នឹងធ្វើពិតប្រាកដ (Happy path និង Edge cases)។',
                '**Clean State**: ប្រើ "RefreshDatabase" trait ជានិច្ចដើម្បីការពារការរំខានទិន្នន័យរវាងតេស្ត។',
                '**Avoid Over-Testing**: កុំតេស្ត Feature របស់ Laravel (ដូចជា Route ដើរឬអត់) តែត្រូវតេស្ត Logic របស់អ្នក។'
              ],
              insight: 'Feature Test ល្អ គឺ Feature Test ដែលប្រាប់អ្នកភ្លាមថា App របស់អ្នក "ខូច" នៅកន្លែងណា ពេលមានការផ្លាស់ប្តូរ។'
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
                '**Battlefield Environment**: បរិស្ថាន Production គឺខុសគ្នាស្រឡះពី Local (វាគឺជាសមរភូមិពិតប្រាកដដែលមាន User ច្រើន)។',
                '**Priorities**: សុវត្ថិភាព (Security), ល្បឿន (Speed) និងស្ថិរភាព (Stability) គឺជាអាទិភាពចម្បងបំផុត។',
                '**Zero Downtime**: គោលដៅគឺធ្វើការ Update App ដោយមិនឱ្យអ្នកប្រើប្រាស់ជួបបញ្ហា ឬឃើញ Error កូដឡើយ។'
              ],
              animation: 'deployment',
              insight: 'ការធ្វេសប្រហែសបន្តិចបន្តួចលើ Production អាចនាំឱ្យបាត់បង់ទិន្នន័យ ឬបែកធ្លាយព័ត៌មានសម្ងាត់។'
            },
            {
              id: '12.1.1',
              title: 'Environment Config (.env)',
              titleEn: 'Environment Config',
              type: 'code',
              content: [
                '**Security First**: កំណត់ `APP_DEBUG=false` ជាដាច់ខាតដើម្បីកុំឱ្យបែកធ្លាយ Password និង Keys ពេលមាន Error។',
                '**Environment**: កំណត់ `APP_ENV=production` ដើម្បីឱ្យ Laravel ដឹងថាត្រូវដើរក្នុងរបៀបល្បឿនលឿន។'
              ],
              code: 'APP_NAME=Laravel\nAPP_ENV=production\nAPP_DEBUG=false\nAPP_URL=https://yourdomain.com\n\n# បង្កើត Key ថ្មីសម្រាប់ Production\nphp artisan key:generate',
              language: 'bash',
              insight: 'ហាមដាក់ឯកសារ .env ចូលក្នុង Git (Version Control) ជាដាច់ខាត!'
            },
            {
              id: '12.1.2',
              title: 'Maintenance Mode',
              titleEn: 'Maintenance Mode',
              type: 'code',
              content: [
                '**Graceful Updates**: ប្រើប្រាស់ Maintenance Mode ដើម្បីបិទ App ជាបណ្ដោះអាសន្នពេលកំពុងធ្វើការងារសំខាន់ៗ។',
                '**Secret Access**: អ្នកអាចកំណត់ "Secret Token" ដើម្បីអាចចូលមើល App បានតែម្នាក់ឯងក្នុងពេលកំពុងបិទ។'
              ],
              code: '# បិទ App និងដាក់សារឱ្យ User\nphp artisan down --secret="my-secret-token"\n\n# ចូលមើល App តាមរយៈ URL: yourdomain.com/my-secret-token\n\n# បើក App វិញ\nphp artisan up',
              language: 'bash'
            },
            {
              id: '12.1.3',
              title: 'Optimization Commands',
              titleEn: 'Optimization',
              type: 'code',
              content: [
                '**Caching Configuration**: បង្រួម File Config ទាំងអស់ឱ្យទៅជា File តែមួយដើម្បីឱ្យ Laravel អានបានលឿន។',
                '**Route Caching**: ធ្វើឱ្យការស្វែងរក Route កាន់តែរហ័ស (ល្អសម្រាប់ App ដែលមាន Route ច្រើន)។'
              ],
              code: '# ធ្វើ Optimization គ្រប់យ៉ាងក្នុងពេលតែមួយ\nphp artisan optimize\n\n# សម្រាប់សម្អាត Cache វិញ\nphp artisan optimize:clear',
              language: 'bash',
              insight: 'រាល់ពេលអ្នកកែប្រែ .env ឬ Route អ្នកត្រូវតែ run "optimize" ម្ដងទៀត។'
            },
            {
              id: '12.1.4',
              title: 'Directory Permissions',
              titleEn: 'Directory Permissions',
              type: 'concept',
              content: [
                '**Writable Folders**: Folder `storage` និង `bootstrap/cache` ត្រូវតែមានសិទ្ធិអាចឱ្យ Web Server សរសេរចូលបាន (Write permission)។',
                '**Ownership**: ជាទូទៅត្រូវកំណត់ Owner ឱ្យទៅអ្នកប្រើប្រាស់របស់ Web Server (ឧទាហរណ៍៖ www-data)។'
              ],
              insight: 'កំហុស "Permission Denied" គឺជាបញ្ហាទូទៅបំផុតដែលអ្នកនឹងជួបពេល Deploy ដំបូង។'
            },
            {
              id: '12.1.5',
              title: 'Compiling Assets (Vite)',
              titleEn: 'Compiling Assets',
              type: 'code',
              content: [
                '**Frontend Optimization**: កុំភ្លេច Build JS និង CSS របស់អ្នកសម្រាប់ Production។',
                '**Performance**: វានឹងជួយបង្រួមទំហំ File ឱ្យតូចបំផុត និងលុបកូដដែលមិនប្រើចេញ។'
              ],
              code: '# សម្រាប់ Laravel ជំនាន់ថ្មី\nnpm run build',
              language: 'bash'
            },
            {
              id: '12.1.6',
              title: 'Real-world Demo: Deployment Script',
              titleEn: 'Deployment Script Demo',
              type: 'code',
              content: [
                '**Automation**: ឧទាហរណ៍នៃ Bash Script ដែលជួយឱ្យអ្នកដាក់ App ដំណើរការបានយ៉ាងលឿន និងគ្មានកំហុស។'
              ],
              code: '#!/bin/bash\ngit pull origin main\ncomposer install --no-dev --optimize-autoloader\nphp artisan migrate --force\nphp artisan optimize\nnpm run build\nphp artisan up',
              language: 'bash'
            },
            {
              id: '12.1.7',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Security**: បិទ Debug mode ជានិច្ចលើ Production។',
                '**Optimization**: ប្រើ "php artisan optimize" ដើម្បីបង្កើនល្បឿន។',
                '**Automation**: បង្កើត Script សម្រាប់ Deploy ដើម្បីកាត់បន្ថយកំហុសដោយដៃ។'
              ],
              insight: 'ការរៀបចំបានល្អនៅថ្ងៃ Deploy នឹងជួយឱ្យអ្នកគេងលក់ស្រួលនៅពេលយប់។'
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
              title: 'Choosing Your Strategy',
              titleEn: 'Deployment Strategies',
              type: 'intro',
              content: [
                '**Scaling Options**: មានវិធីសាស្ត្រច្រើនយ៉ាងដើម្បីដាក់ App របស់អ្នកឱ្យដើរលើ Internet (ពីតម្លៃថោកបំផុត ទៅដល់ស្ដង់ដារសហគ្រាស)។',
                '**Ease vs Control**: ជម្រើសនីមួយៗមានតុល្យភាពរវាង "ភាពងាយស្រួល" និង "ការគ្រប់គ្រងដោយខ្លួនឯង"។',
                '**Automation**: មិនថាក្រុមតូច ឬធំ ការប្រើប្រាស់ស្វ័យប្រវត្តិកម្ម (CI/CD) គឺជាគន្លឹះនៃភាពជោគជ័យ។'
              ],
              animation: 'deployment',
              insight: 'ជម្រើសដ៏ល្អបំផុតមិនមែនជាជម្រើសដែលថ្លៃបំផុតទេ ប៉ុន្តែជាជម្រើសដែលសមស្របនឹងទំហំ App និងចំណេះដឹងរបស់ក្រុមការងារ។'
            },
            {
              id: '12.2.1',
              title: 'Deployment Workflows',
              titleEn: 'Hosting Types',
              type: 'concept',
              content: [
                '**Shared Hosting**: តម្លៃថោក ប៉ុន្តែពិបាកគ្រប់គ្រង (មិនត្រូវបានណែនាំសម្រាប់ Laravel ទេ)។',
                '**VPS (Virtual Private Server)**: ដូចជា DigitalOcean ឬ AWS (អ្នកគ្រប់គ្រង Nginx + PHP ដោយខ្លួនឯង)។',
                '**PaaS (Platform as a Service)**: ដូចជា Laravel Forge ឬ Vapor (ស្វ័យប្រវត្តិ និងងាយស្រួលគ្រប់គ្រងបំផុត)។'
              ],
              insight: 'Laravel Forge គឺជាជម្រើស "Gold Standard" សម្រាប់ Developer អាជីព។'
            },
            {
              id: '12.2.2',
              title: 'Nginx Configuration',
              titleEn: 'Nginx Configuration',
              type: 'code',
              content: [
                '**The Entry Point**: Nginx ត្រូវចង្អុលទៅកាន់ Directory `public/` មិនមែន Root នៃ Project ទេ។',
                '**Request Handling**: រាល់ Requests ទាំងអស់ត្រូវតែឆ្លងកាត់ `index.php` ដើម្បីឱ្យ Laravel ចាត់ចែង។'
              ],
              code: 'server {\n    listen 80;\n    server_name example.com;\n    root /var/www/my-app/public;\n\n    index index.php;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        include snippets/fastcgi-php.conf;\n        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;\n    }\n}',
              language: 'nginx'
            },
            {
              id: '12.2.3',
              title: 'SSL / HTTPS (Security)',
              titleEn: 'SSL / HTTPS',
              type: 'code',
              content: [
                '**Data Privacy**: ការប្រើប្រាស់ HTTPS គឺជាកាតព្វកិច្ចសម្រាប់ App ទំនើប ដើម្បីការពារទិន្នន័យអ្នកប្រើប្រាស់។',
                '**Let\'s Encrypt**: ជាសេវាកម្មផ្ដល់ SSL Free ដែលអ្នកអាចតម្លើងបានយ៉ាងងាយស្រួលជាមួយ Certbot។'
              ],
              code: '# តម្លើង Certbot សម្រាប់ Nginx\nsudo apt install certbot python3-certbot-nginx\n\n# បង្កើត SSL ស្វ័យប្រវត្តិ\nsudo certbot --nginx -d yourdomain.com',
              language: 'bash',
              insight: 'App ដែលគ្មាន HTTPS នឹងត្រូវ Browser បង្ហាញព្រមានថា "Not Secure" ដែលធ្វើឱ្យ User ខ្លាចមិនហ៊ានប្រើ។'
            },
            {
              id: '12.2.4',
              title: 'CI/CD with GitHub Actions',
              titleEn: 'CI/CD Pipeline',
              type: 'code',
              content: [
                '**Automation**: រត់តេស្ត (Tests) និងដាក់ឱ្យដំណើរការ (Deploy) ដោយស្វ័យប្រវត្តិរាល់ពេលអ្នក Push កូដថ្មី។',
                '**Safety**: បញ្ឈប់ការ Deploy ភ្លាមៗ ប្រសិនបើការធ្វើតេស្តណាមួយមិនជាប់ (Failed)។'
              ],
              code: '# .github/workflows/deploy.yml\nname: Deploy to Production\non: [push]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Run Tests\n        run: php artisan test\n      - name: Deploy\n        run: ssh production-server "cd /app && ./deploy.sh"',
              language: 'yaml',
              animation: 'cicd_flow'
            },
            {
              id: '12.2.5',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Automation**: កុំ Deploy ដោយប្រើដៃ (FTP/SSH Manual) ត្រូវប្រើ Script ឬ CI/CD។',
                '**HTTPS**: ប្រើប្រាស់ SSL ជានិច្ច ទោះបីជា App តូចក៏ដោយ។',
                '**Zero-Downtime**: ប្រើប្រាស់វិធីសាស្ត្រដែលមិនឱ្យ App គាំងក្នុងពេលកំពុង Deploy។'
              ],
              insight: 'ការប្រើប្រាស់ Tool ត្រឹមត្រូវ ជួយឱ្យអ្នកមានពេលវេលាផ្ដោតលើការសរសេរកូដ ច្រើនជាងការជួសជុល Server។'
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
                '**Proactive Defense**: Laravel ការពារអ្នកពីការវាយប្រហារទូទៅជាច្រើនតាំងពីដំបូងបំផុត។',
                '**Best Practices**: ទោះជាយ៉ាងណា អ្នកនៅតែត្រូវអនុវត្តតាមគោលការណ៍សុវត្ថិភាពដើម្បីការពារ User របស់អ្នក។',
                '**The Core Trio**: យើងនឹងសិក្សាអំពីការការពារ XSS, CSRF, និង SQL Injection។'
              ],
              animation: 'security_flow',
              insight: 'សុវត្ថិភាពមិនមែនជារឿង "បន្ថែម" ទេ ប៉ុន្តែវាជាគ្រឹះនៃរាល់កូដដែលអ្នកសរសេរ។'
            },
            {
              id: '12.3.1',
              title: 'Preventing XSS',
              titleEn: 'XSS Protection',
              type: 'concept',
              content: [
                '**Cross-Site Scripting (XSS)**: ជាការលួចបញ្ចូលកូដ JS ដែលមានគ្រោះថ្នាក់ទៅក្នុងគេហទំព័ររបស់អ្នក។',
                '**Auto-Escaping**: Laravel ប្រើ `{{ $var }}` ដើម្បីសម្អាត HTML ដោយស្វ័យប្រវត្តិ (Blade)។',
                '**Trust Level**: ប្រើ `{!! $var !!}` តែក្នុងករណីដែលអ្នកទុកចិត្តប្រភពទិន្នន័យនោះ 100% ប៉ុណ្ណោះ។'
              ],
              insight: 'ការប្រើ {{ }} ជួយបំប្លែង <script> ឱ្យទៅជាអត្ថបទធម្មតាដែលមិនអាចដំណើរការបាន។'
            },
            {
              id: '12.3.2',
              title: 'CSRF Protection',
              titleEn: 'CSRF Protection',
              type: 'code',
              content: [
                '**Cross-Site Request Forgery**: ជាការក្លែងបន្លំសំណើ (Request) ពីគេហទំព័រផ្សេងមកកាន់ App របស់អ្នក។',
                '**CSRF Token**: Laravel ប្រើ Token តែមួយគត់សម្រាប់រាល់ Session ដើម្បីផ្ទៀងផ្ទាត់ថាសំណើនោះមកពី User ពិតប្រាកដ។'
              ],
              code: '<!-- ប្រើ @csrf ក្នុងគ្រប់ HTML Forms -->\n<form method="POST" action="/profile">\n    @csrf\n    <input type="text" name="name">\n    <button type="submit">Update</button>\n</form>',
              language: 'php'
            },
            {
              id: '12.3.3',
              title: 'SQL Injection Protection',
              titleEn: 'SQL Injection',
              type: 'code',
              content: [
                '**The Risk**: ជាការបញ្ជូនកូដ SQL តាមរយៈ Input ដើម្បីលួចមើល ឬលុបទិន្នន័យក្នុង Database។',
                '**PDO Binding**: Eloquent និង Query Builder ប្រើប្រាស់ Parameter Binding ដើម្បីការពារបញ្ហានេះដោយស្វ័យប្រវត្តិ។'
              ],
              code: '// ✅ សុវត្ថិភាព (Eloquent នឹង Clean ទិន្នន័យឱ្យ)\n$user = User::where("email", $request->email)->first();\n\n// ❌ គ្រោះថ្នាក់ (ហាមសរសេរ Raw SQL បែបនេះ)\n$user = DB::select("SELECT * FROM users WHERE email = \'$email\'");',
              language: 'php'
            },
            {
              id: '12.3.4',
              title: 'Password Hashing',
              titleEn: 'Secure Passwords',
              type: 'code',
              content: [
                '**Hashing vs Encryption**: Password ត្រូវតែធ្វើ "Hash" (មិនអាចបកស្រាយវិញបាន) មិនមែន "Encrypt" ទេ។',
                '**Bcrypt / Argon2**: Laravel ប្រើប្រាស់ Algorithm ដែលខ្លាំងបំផុតដើម្បីការពារ Password របស់ User។'
              ],
              code: 'use Illuminate\\Support\\Facades\\Hash;\n\n// ការបង្កើត Hash\n$hashedPassword = Hash::make($request->password);\n\n// ការផ្ទៀងផ្ទាត់\nif (Hash::check("plain-password", $hashedPassword)) {\n    // Password ត្រឹមត្រូវ\n}',
              language: 'php'
            },
            {
              id: '12.3.5',
              title: 'Rate Limiting (Throttle)',
              titleEn: 'Rate Limiting',
              type: 'code',
              content: [
                '**Brute Force Defense**: ការពារការលួចទាយ Password ឬការបុក Request ច្រើនពេកមកកាន់ Server។',
                '**Throttle**: កំណត់ចំនួនដងដែល User ម្នាក់អាចចូលប្រើប្រាស់ Route ណាមួយក្នុងរយៈពេលជាក់លាក់។'
              ],
              code: '// កំណត់ក្នុង routes/api.php\nRoute::middleware("throttle:60,1")->group(function () {\n    Route::get("/user", function () {\n        // ...\n    });\n});',
              language: 'php',
              insight: '60,1 មានន័យថាអនុញ្ញាតឱ្យហៅបាន 60 ដងក្នុងរយៈពេល 1 នាទី។'
            },
            {
              id: '12.3.6',
              title: 'Real-world Demo: Security Audit',
              titleEn: 'Security Audit Demo',
              type: 'code',
              content: [
                '**Vulnerability Scanning**: ប្រើប្រាស់ `composer audit` ដើម្បីឆែកមើលថាបណ្ណាល័យដែលអ្នកប្រើមានចន្លោះប្រហោងសុវត្ថិភាពឬអត់។',
                '**Config Check**: ប្រើ `php artisan about` ដើម្បីពិនិត្យមើលស្ថានភាព Security ទូទៅ។'
              ],
              code: '# ឆែកមើលចន្លោះប្រហោងក្នុង Packages\ncomposer audit\n\n# ពិនិត្យមើល Config និង Security status\nphp artisan about',
              language: 'bash'
            },
            {
              id: '12.3.7',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Always Escape**: ប្រើ "{{ }}" និងចៀសវាង "{!! !!}" ជាដាច់ខាត។',
                '**CSRF Everywhere**: ប្រើ @csrf ក្នុងគ្រប់ POST Forms។',
                '**Update Regularly**: Run "composer update" និង "audit" ឱ្យបានទៀងទាត់។',
                '**Mass Assignment**: កំណត់ $fillable ឱ្យបានត្រឹមត្រូវក្នុង Models។'
              ],
              insight: 'ការការពារដែលល្អបំផុត គឺការមិនទុកចិត្តលើ Input របស់អ្នកប្រើប្រាស់ (Never trust user input)។'
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
                '**Performance First**: នៅពេល App របស់អ្នករីកធំ ការងារសាមញ្ញៗអាចនឹងប្រែជាយឺត ប្រសិនបើមិនមានការរៀបចំត្រឹមត្រូវ។',
                '**Tools for Speed**: យើងនឹងសិក្សាអំពីការប្រើប្រាស់ Database Indexing, Caching, និង Queues ដើម្បីបង្កើនល្បឿន។',
                '**User Experience**: App ដែលដើរលឿន នឹងធ្វើឱ្យអ្នកប្រើប្រាស់សប្បាយចិត្ត និងបង្កើនទំនុកចិត្តលើផលិតផល។'
              ],
              animation: 'performance',
              insight: 'App ដែលមានល្បឿនលឿន មិនត្រឹមតែល្អសម្រាប់ User ទេ ប៉ុន្តែថែមទាំងជួយឱ្យ Server មិនសូវធ្វើការធ្ងន់ (Low Resource Usage)។'
            },
            {
              id: '12.4.1',
              title: 'Database Indexing',
              titleEn: 'Database Indexing',
              type: 'concept',
              content: [
                '**The Librarian**: Indexing ប្រៀបដូចជា "បញ្ជីមាតិកា" ក្នុងសៀវភៅ ដែលជួយឱ្យ Database ស្វែងរកទិន្នន័យបានភ្លាមៗ។',
                '**Impact**: ការបន្ថែម Index លើ Column ដែលអ្នកប្រើសម្រាប់ "where" ឬ "order by" អាចធ្វើឱ្យ Query លឿនជាងមុនរាប់រយដង។'
              ],
              insight: 'ហាមដាក់ Index លើគ្រប់ Column ទាំងអស់ ព្រោះវាអាចធ្វើឱ្យការ Insert/Update យឺតវិញ។'
            },
            {
              id: '12.4.2',
              title: 'Caching Strategies',
              titleEn: 'Caching Strategies',
              type: 'code',
              content: [
                '**Cache Aside**: រក្សាទុកទិន្នន័យដែលពិបាកទាញ (Expensive data) នៅក្នុង Cache និងទាញវាចេញមកប្រើវិញដោយមិនបាច់ទៅ Database។',
                '**Redis**: ជាជម្រើសដ៏ល្អបំផុតសម្រាប់ធ្វើ Caching លើ Production ព្រោះវាមានល្បឿនលឿនបំផុត (In-memory storage)។'
              ],
              code: '// រក្សាទុកក្នុង Cache រយៈពេល 1 ម៉ោង (3600 វិនាទី)\n$stats = Cache::remember("dashboard.stats", 3600, function () {\n    return Order::calculateYearlyStats();\n});',
              language: 'php',
              insight: 'Caching គឺជាវិធីដែលចំណាយកម្លាំងតិចបំផុត ប៉ុន្តែទទួលបានផលចំណេញល្បឿនច្រើនបំផុត។'
            },
            {
              id: '12.4.3',
              title: 'Background Jobs (Queues)',
              titleEn: 'Background Jobs',
              type: 'code',
              content: [
                '**Don\'t Wait**: កុំឱ្យអ្នកប្រើប្រាស់រង់ចាំការងារដែលយឺតៗ ដូចជាការផ្ញើ Email, ការ Generate PDF, ឬការទាក់ទងទៅ API ខាងក្រៅ។',
                '**Asynchronous**: បោះការងារទាំងនោះទៅក្នុង "Queue" ដើម្បីឱ្យវាដំណើរការនៅខាងក្រោយ (Background)។'
              ],
              code: '// នៅក្នុង Controller\nProcessVideo::dispatch($videoVideo);\n\n// បញ្ជូន Response ទៅ User ភ្លាមៗ\nreturn response()->json(["message" => "Processing started"]);',
              language: 'php',
              insight: 'ប្រើ "php artisan queue:work" ដើម្បីឱ្យ Laravel ចាប់ផ្ដើមធ្វើការងារដែលនៅក្នុងជួរ (Queue)។'
            },
            {
              id: '12.4.4',
              title: 'Monitoring & Analysis',
              titleEn: 'Monitoring Performance',
              type: 'code',
              content: [
                '**Know Your Bottlenecks**: អ្នកមិនអាចកែលម្អអ្វីដែលអ្នកមិនបានវាស់វែង (Measure) នោះទេ។',
                '**Laravel Horizon**: ផ្តល់ Dashboard ដ៏ស្រស់ស្អាតសម្រាប់ពិនិត្យមើលស្ថានភាព Queues និងការងារដែលខូច (Failed jobs)។'
              ],
              code: '# តម្លើង Laravel Horizon សម្រាប់គ្រប់គ្រង Redis Queues\ncomposer require laravel/horizon\nphp artisan horizon:install\n\n# ដំណើរការ Horizon\nphp artisan horizon',
              language: 'bash'
            },
            {
              id: '12.4.5',
              title: 'Real-world Demo: Cache Taggability',
              titleEn: 'Advanced Caching',
              type: 'code',
              content: [
                '**Atomic Locks**: ការពារកុំឱ្យមានការទាញទិន្នន័យពី Database ច្រើនដងក្នុងពេលតែមួយ (Race condition)។',
                '**Taggabale Cache**: ការប្រើ Tags ដើម្បីងាយស្រួលសម្អាត Cache តាមក្រុម (ឧទាហរណ៍៖ សម្អាតតែ Cache របស់ផលិតផល)។'
              ],
              code: '// Cache ជាមួយ Tags (សម្រាប់ Redis)\nCache::tags(["products", "active"])->remember("list", 3600, function() {\n    return Product::active()->get();\n});\n\n// សម្អាតតែ Cache ក្នុង Tag "products"\nCache::tags("products")->flush();',
              language: 'php'
            },
            {
              id: '12.4.6',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Queues**: ប្រើ Background Jobs សម្រាប់រាល់ការងារដែលចំណាយពេលលើសពី ១ វិនាទី។',
                '**N+1 Queries**: ប្រើ Eager Loading ("with()") ជានិច្ចដើម្បីកាត់បន្ថយ Query ទៅកាន់ Database។',
                '**Cache Smartly**: កុំ Cache គ្រប់យ៉ាង តែត្រូវ Cache អ្វីដែលយឺត និងមិនសូវផ្លាស់ប្ដូរ។'
              ],
              insight: 'Performance ល្អ គឺកើតចេញពីការផ្សំគ្នារវាង Code ដែលស្អាត និង Tool ដែលត្រឹមត្រូវ។'
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
            },
            {
              id: '13.1.4',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Reverb/Pusher**: ជ្រើសរើស Tool ណាដែលស័ក្តិសមនឹង Infrastructure របស់អ្នក។',
                '**Client-side Echo**: ប្រើ Laravel Echo ដើម្បីសម្រួលដល់ការស្ដាប់ Events ក្នុង JavaScript។',
                '**Private Channels**: តែងតែការពារ Channels ដែលមានទិន្នន័យឯកជនរបស់ User។'
              ],
              insight: 'Real-time features ធ្វើឱ្យ App របស់អ្នកមានភាពរស់រវើក និងទំនើប។'
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
            },
            {
              id: '13.2.3',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Laravel Pulse**: ប្រើសម្រាប់តាមដានស្ថានភាពទូទៅនៅលើ production។',
                '**Telescope**: ប្រើសម្រាប់តែក្នុង Local Development ប៉ុណ្ណោះ (ហាមប្រើលើ production)។',
                '**Monitoring**: ត្រូវដឹងពីបញ្ហាមុនពេល User ផ្ដល់ដំណឹងមកកាន់អ្នក។'
              ],
              insight: 'ការមានឧបករណ៍សង្កេតការណ៍ល្អ ជួយឱ្យអ្នកដោះស្រាយបញ្ហាបានលឿនដូចផ្លេកបន្ទោរ។'
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
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
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
            },
            {
              id: '13.4.4',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Full Stack Integration**: ធានាថារាល់ចំណេះដឹងទាំងអស់ត្រូវបានបញ្ចូលគ្នាបានយ៉ាងល្អ។',
                '**Code Review**: ពិនិត្យមើលកូដឡើងវិញដើម្បីធានាភាពស្អាត និងសុវត្ថិភាព។',
                '**Final Polish**: ផ្ទៀងផ្ទាត់រាល់ Error messages និង UI ឱ្យបានហ្មត់ចត់បំផុត។'
              ],
              insight: 'គម្រោងបញ្ចប់ការសិក្សា គឺជាសក្ខីភាពនៃសមត្ថភាពពិតប្រាកដរបស់អ្នក។'
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
            },
            {
              id: '13.5.3',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Continuous Learning**: បន្តអាន Documentation របស់ Laravel ជានិច្ចព្រោះវាមានការ Update ថ្មីៗរហូត។',
                '**Community**: ចូលរួមក្នុងសហគមន៍ Laravel ដើម្បីរៀនពីបច្ចេកទេសថ្មីៗពី Developer ដទៃ។',
                '**Practice**: គ្មានអ្វីល្អជាងការអនុវត្តផ្ទាល់នោះទេ។ បន្តបង្កើត Projects ថ្មីៗឱ្យបានច្រើន!'
              ],
              insight: 'ជោគជ័យរបស់អ្នកក្នុងនាមជា Backend Developer ទើបតែចាប់ផ្ដើមប៉ុណ្ណោះ!'
            }
          ]
        }
      ]
    }
  ]
};