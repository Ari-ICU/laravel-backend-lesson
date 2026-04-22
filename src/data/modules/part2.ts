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
                '**Routing** គឺជាឆ្អឹងខ្នងនៃប្រព័ន្ធគ្រប់គ្រង Requests ក្នុង Laravel។',
                'វាមានតួនាទីតម្រង់ទិស URL នីមួយៗឱ្យទៅកាន់ Logic ជាក់លាក់ (Closure ឬ Controller)។',
                'ក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបបង្កើតផ្លូវសម្រាប់ URL ទៅកាន់សកម្មភាពផ្សេងៗក្នុង App។'
              ],
              insight: 'សាកស្រមៃថា Routes គឺជា "ភ្នាក់ងារសម្របសម្រួលចរាចរណ៍" ដែលនាំភ្ញៀវ (Users) ទៅកាន់បន្ទប់ដែលត្រឹមត្រូវ។'
            },
            {
              id: '3.1.1',
              title: 'Route Files',
              type: 'concept',
              content: [
                '**routes/web.php**: សម្រាប់ Web Interface ទូទៅ (supports Session និង CSRF(Cross-site request forgery) protection)។',
                '**routes/api.php**: សម្រាប់ Stateless APIs (uses api middleware group by default)។',
                '**routes/console.php**: សម្រាប់បង្កើត Command ផ្ទាល់ខ្លួនក្នុង Artisan CLI។'
              ]
            },
            {
              id: '3.1.2',
              title: 'HTTP Methods',
              type: 'code',
              content: [
                'យើងកំណត់ Route ដោយផ្អែកលើប្រភេទសកម្មភាពរបស់ HTTP methods។',
                'Methods ដែលប្រើញឹកញាប់មាន៖ GET, POST, PUT, PATCH, DELETE។'
              ],
              code: 'use App\\Http\\Controllers\\PostController;\n\nRoute::get("/posts", [PostController::class, "index"]);\nRoute::post("/posts", [PostController::class, "store"]);\nRoute::put("/posts/{id}", [PostController::class, "update"]);\nRoute::delete("/posts/{id}", [PostController::class, "destroy"]);',
              language: 'php'
            },
            {
              id: '3.1.3',
              title: 'Route Parameters',
              type: 'code',
              content: [
                '**Required**: `{id}` គឺដាច់ខាតត្រូវតែមានភ្ជាប់មកជាមួយ URL។',
                '**Optional**: `{name?}` អាចមាន ឬមិនមានក៏បាន ដោយប្រើសញ្ញា "?"។',
                'តម្លៃ Parameters ទាំងនេះនឹងត្រូវបញ្ជូនទៅ Controller Method ដោយស្វ័យប្រវត្តិ។'
              ],
              code: '// បង្កការទាមទារ ID\nRoute::get("/user/{id}", function ($id) {\n    return "User ID: " . $id;\n});\n\n// មិនទាមទារ Term (មានតម្លៃ default)\nRoute::get("/search/{term?}", function ($term = "all") {\n    return "Searching for: " . $term;\n});',
              language: 'php'
            },
            {
              id: '3.1.4',
              title: 'Named Routes',
              type: 'code',
              content: [
                'ការដាក់ឈ្មោះ Route ធ្វើឱ្យយើងអាចហៅវាប្រើបានងាយស្រួល ជំនួសការប្រើ URL ដោយផ្ទាល់។',
                'វាធ្វើឱ្យការផ្លាស់ប្តូរ URL នៅពេលក្រោយកាន់តែងាយ ដោយមិនចាំបាច់ទៅកែគ្រប់កន្លែងក្នុង Project។'
              ],
              code: 'Route::get("/user/profile", [ProfileController::class, "show"])->name("profile");\n\n// ការហៅប្រើក្នុង View ឬ Controller\n$url = route("profile");\nreturn redirect()->route("profile");',
              language: 'php',
              insight: 'ទម្លាប់ប្រើ Named Routes នឹងជួយការពារកំហុស "Hardcoding" ដែលធ្វើឱ្យពិបាក Maintenance។'
            },
            {
              id: '3.1.5',
              title: 'Groups & Middleware',
              type: 'code',
              content: [
                '**Middleware**: ជា Filter សម្រាប់ត្រួតពិនិត្យ Request មុននឹងចូលទៅក្នុង application (ឧទាហរណ៍៖ ពិនិត្យថា user បាន login ឬនៅ)។',
                '**Groups**: ប្រើសម្រាប់ដាក់ Route ជាក្រុម ដើម្បីអនុវត្ត setting ដូចគ្នា (ឧទាហរណ៍៖ prefix ឬ middleware)។'
              ],
              code: 'Route::middleware(["auth"])->group(function () {\n    Route::get("/dashboard", [DashboardController::class, "index"]);\n    Route::get("/settings", [SettingsController::class, "edit"]);\n});\nRoute::prefix("admin")->group(function () {\n    Route::get("/dashboard", [AdminController::class, "index"]);\n    Route::get("/settings", [AdminController::class, "edit"]);\n});',
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
                'ជំនួសឱ្យសរសេរ logic ក្នុង Route file យើងគួរផ្ទេរវាទៅដាក់ក្នុង Controllers។',
                'Controllers ជួយរៀបចំ និងប្រមូល Request ដែលពាក់ព័ន្ធគ្នា ទៅក្នុង Class តែមួយ។',
                'រចនាសម្ព័ន្ធបែបនេះធ្វើឱ្យ code ស្អាត ងាយស្រួលធ្វើ test និងងាយគ្រប់គ្រង។'
              ]
            },
            {
              id: '3.2.1',
              title: 'Creating Controllers',
              type: 'code',
              content: [
                'ប្រើ Artisan command ដើម្បីបង្កើត Controller ថ្មីបានយ៉ាងងាយស្រួល។',
                'បន្ទាប់ពីបង្កើត រួច file នឹងត្រូវរក្សាទុកនៅក្នុង folder app/Http/Controllers។'
              ],
              code: '// បង្កើត Controller ធម្មតា\nphp artisan make:controller UserController\n\n// បង្កើត Resource Controller (មាន methods សម្រាប់ CRUD ស្រាប់)\nphp artisan make:controller PostController --resource',
              language: 'bash'
            },
            {
              id: '3.2.2',
              title: 'The Request Object',
              type: 'code',
              content: [
                'ប្រើសម្រាប់ទាញយកទិន្នន័យ (input), files ឬព័ត៌មានផ្សេងៗពី user request។',
                'Laravel ផ្ដល់ Request instance មកឱ្យយើងប្រើដោយស្វ័យប្រវត្តិ តាមរយៈ method injection។'
              ],
              code: 'use Illuminate\\Http\\Request;\n\npublic function store(Request $request) {\n    $title = $request->input("title");\n    $content = $request->input("content");\n    \n    return "Post created: " . $title;\n}',
              language: 'php'
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
                'Blade គឺជា templating engine របស់ Laravel ដែលងាយស្រួល និងមានប្រសិទ្ធភាព។',
                'វាអនុញ្ញាតឱ្យយើងសរសេរ PHP ក្នុង HTML ដោយប្រើ syntax ខ្លីៗ និងស្អាត។',
                'Blade មាន extension .blade.php ហើយស្ថិតនៅក្នុង resources/views។'
              ],
              insight: 'Blade នឹងត្រូវបម្លែងទៅជា PHP សុទ្ធ និងធ្វើការ Cached ទុកដើម្បីឱ្យដំណើរការបានលឿនបំផុត។'
            },
            {
              id: '4.1.1',
              title: 'Creating Views via CLI',
              type: 'code',
              content: [
                'ក្នុង Laravel សម័យថ្មី យើងអាចបង្កើត View ដោយប្រើ Artisan command បានយ៉ាងរហ័ស។',
                'វានឹងបង្កើត file នៅក្នុង folder ត្រឹមត្រូវឱ្យយើងដោយស្វ័យប្រវត្តិ។'
              ],
              code: '// បង្កើត View ឈ្មោះ welcome\nphp artisan make:view welcome\n\n// បង្កើតក្នុង Subfolder (users/index.blade.php)\nphp artisan make:view users.index',
              language: 'bash',
              insight: 'ប្រើ Command នេះដើម្បីជៀសវាងការបង្កើត File និង Folder ដោយដៃដែលនាំឱ្យខាតពេល។'
            },
            {
              id: '4.1.2',
              title: 'Basic Syntax & Directives',
              type: 'code',
              content: [
                'ប្រើ {{ }} សម្រាប់បង្ហាញទិន្នន័យ (output) ទៅក្នុង view និង @ សម្រាប់ប្រើ Blade directives។',
                'Blade directives គឺជា syntax ខ្លីៗ ដែលជំនួសការសរសេរ PHP បែបបុរាណ ដូចជា <?php if... ?>, foreach ជាដើម ដើម្បីធ្វើឱ្យ code ស្អាត និងងាយអាន។'
              ],
              code: '<h1>សួស្តី, {{ $user->name }}</h1>\n\n@if($posts->count() > 0)\n    @foreach($posts as $post)\n        <p>{{ $post->title }}</p>\n    @endforeach\n@else\n    <p>មិនមានអត្ថបទឡើយ។</p>\n@endif',
              language: 'php'
            },
            {
              id: '4.1.3',
              title: 'Escaping Data',
              type: 'concept',
              content: [
                '{{ $data }}: បង្ហាញទិន្នន័យដោយមានការការពារ HTML ស្វ័យប្រវត្តិ (ជួយទប់ស្កាត់ XSS Attack)។',
                '{!! $data !!}: បង្ហាញ HTML ដោយផ្ទាល់ ដោយមិនមានការការពារ ដូច្នេះគួរប្រើតែទិន្នន័យដែលទុកចិត្តប៉ុណ្ណោះ។',
                'ជាទូទៅគួរប្រើ double braces ({{ }}) ជានិច្ច លើកលែងតែមានហេតុផលច្បាស់លាស់ក្នុងការបង្ហាញ HTML ពី database។'
              ],
              insight: 'ចងចាំថា៖ កុំប្រើ {!! !!} ជាមួយទិន្នន័យដែលបញ្ចូលដោយ Users ឱ្យសោះ ដើម្បីសុវត្ថិភាព។'
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
                'កុំចំណាយពេលសរសេរ Header ឬ Footer ដដែលៗក្នុងគ្រប់ page។',
                'ប្រើប្រាស់ **Layout Inheritance** ដើម្បីបង្កើត main layout តែមួយ ហើយអាចប្រើរួមគ្នាបានទាំង project។',
                'យើងនឹងប្រើ `@extends`, `@yield`, និង `@section` ដើម្បីរៀបចំ structure របស់ page ឲ្យមានរបៀបរៀបរយ។'
              ]
            },
            {
              id: '4.2.1',
              title: 'The Main Layout',
              type: 'code',
              content: [
                'បង្កើត main layout មួយ រួចដាក់ `@yield` នៅកន្លែងណាដែលអ្នកចង់ឱ្យ Content ប្តូរទៅតាម Page។'
              ],
              code: '\n<html>\n    <body>\n        <header>Header រួម</header>\n        \n        <main>\n            @yield("content")\n        </main>\n    </body>\n</html>',
              language: 'php'
            },
            {
              id: '4.2.2',
              title: 'Extending a Layout',
              type: 'code',
              content: [
                'រាល់ page ផ្សេងៗនឹង "extend" ពី main layout ហើយបំពេញ content តាម section ដែលបានកំណត់ជាមុន។ វាធ្វើឱ្យយើងអាចប្រើ structure ដូចគ្នា (header, footer, navigation) នៅគ្រប់ page ដោយមិនចាំបាច់សរសេរឡើងវិញ។'
              ],
              code: '@extends("layouts.app")\n\n@section("content")\n    <h2>ទំព័រដើម</h2>\n    <p>ខ្លឹមសារនេះនឹងត្រូវបានបញ្ចូលទៅក្នុង @yield("content") នៃ Layout មេ។</p>\n@endsection',
              language: 'php'
            },
            {
              id: '4.2.3',
              title: 'Including & Components',
              type: 'code',
              content: [
                '**@include**: ប្រើសម្រាប់ដាក់បញ្ចូល view តូចៗ (partial views) ដូចជា sidebar, navbar ឬ footer ដើម្បីកុំឲ្យសរសេរដដែលៗ។',
                '**Components**: ប្រើសម្រាប់បង្កើត UI elements ដែលអាចប្រើឡើងវិញបាន និងមានភាព flexible ខ្ពស់ ជាពិសេសសម្រាប់ logic ឬ data ដែលស្មុគស្មាញជាង។'
              ],
              code: '// ហៅប្រើ partial\n@include("partials.nav")\n\n// ប្រើ Blade Component\n<x-button color="blue">\n    ចុះឈ្មោះឥឡូវនេះ\n</x-button>',
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
                'បន្ទាប់ពីទាញទិន្នន័យបានពី Controller យើងត្រូវបញ្ជូនវាទៅបង្ហាញនៅលើ Frontend (View)។',
                'Laravel ផ្ដល់វិធីសាស្រ្តងាយៗសម្រាប់បញ្ជូន variables ទៅកាន់ view ដើម្បីអាចប្រើបង្ហាញទិន្នន័យបានភ្លាមៗ។'
              ]
            },
            {
              id: '4.3.1',
              title: 'The view() Helper',
              type: 'code',
              content: [
                'វិធីសាមញ្ញបំផុតគឺបញ្ជូន data ជា associative array ក្នុង parameter ទីពីរនៃ `view()`។ វាអនុញ្ញាតឱ្យយើងផ្ទេរទិន្នន័យពី controller ទៅកាន់ view បានយ៉ាងច្បាស់លាស់ និងងាយស្រួលប្រើក្នុង Blade template។'
              ],
              code: 'public function index() {\n    return view("profile", [\n        "username" => "Sokha",\n        "status" => "Active"\n    ]);\n}',
              language: 'php'
            },
            {
              id: '4.3.2',
              title: 'The compact() Helper',
              type: 'code',
              content: [
                'ជាវិធីដែលពេញនិយមបំផុត ព្រោះវាខ្លី ងាយស្រួលអាន និងស្អាតជាងការសរសេរ array ដោយដៃ។',
                'Laravel នឹងបង្កើត associative array ដោយស្វ័យប្រវត្តិ ដោយយកឈ្មោះ variable ជា key ហើយ value ជាទិន្នន័យដែលបានកំណត់។'
              ],
              code: 'public function show($id) {\n    $user = User::findOrFail($id);\n    $posts = $user->posts;\n\n    // ស្មើនឹង ["user" => $user, "posts" => $posts]\n    return view("user.show", compact("user", "posts"));\n}',
              language: 'php',
              insight: 'ប្រើ `compact()` នឹងជួយឱ្យកូដរបស់អ្នកមើលទៅមានលក្ខណៈអាជីព និងស្អាតជាងមុន។'
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
                'មុននឹងចាប់ផ្តើមធ្វើការជាមួយទិន្នន័យ យើងត្រូវភ្ជាប់ application ទៅកាន់ database ជាមុនសិន។',
                'Laravel supports database ជាច្រើនដូចជា MySQL, PostgreSQL, SQLite និង SQL Server ដែលអាចជ្រើសប្រើតាមតម្រូវការ។',
                'ព័ត៌មានសំខាន់ៗទាំងអស់ដូចជា username, password និង configuration ត្រូវរក្សាទុកក្នុងឯកសារ **.env** ដើម្បីធានាសុវត្ថិភាព។'
              ],
              // animation: 'database',
              insight: 'ចងចាំ៖ កុំយក file .env ទៅ Commit ក្នុង Git ដើម្បីការពារសុវត្ថិភាពទិន្នន័យរបស់អ្នក។'
            },
            {
              id: '5.1.1',
              title: 'The .env File',
              type: 'code',
              content: [
                'គ្រាន់តែកែតម្លៃទាំងនេះឱ្យត្រឹមត្រូវស្របតាម database ដែលអ្នកបានបង្កើតនៅក្នុង local environment របស់អ្នក ដូចជា database name, username និង password ដើម្បីធានាថាការភ្ជាប់ដំណើរការបានត្រឹមត្រូវ។'
              ],
              code: 'DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=my_app_db\nDB_USERNAME=root\nDB_PASSWORD=secret',
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
                '**Migrations** គឺជាប្រព័ន្ធសម្រាប់គ្រប់គ្រងរចនាសម្ព័ន្ធ database ដោយប្រើកូដ PHP ជំនួសការបង្កើតតារាងដោយដៃ។',
                'វាជួយឱ្យក្រុមទាំងមូលមាន database structure ដូចគ្នា ដោយគ្រាន់តែ run command មួយតែប៉ុណ្ណោះ។',
                'វាអាចប្រៀបធៀបបានថា ដូចជា “Git សម្រាប់ database” ដែលអាច track និងគ្រប់គ្រងការផ្លាស់ប្តូរបានយ៉ាងមានប្រសិទ្ធភាព។'
              ]
            },
            {
              id: '5.2.1',
              title: 'Creating Migrations',
              type: 'code',
              content: [
                'ប្រើ Artisan command ដើម្បីបង្កើតឯកសារ migration ថ្មីបានយ៉ាងងាយស្រួល ដែលជួយឱ្យយើងកំណត់រចនាសម្ព័ន្ធ database ដោយមិនចាំបាច់សរសេរ SQL ដោយដៃ។',
                'រាល់ migration file ដែលបានបង្កើត នឹងត្រូវរក្សាទុកនៅក្នុង folder `database/migrations` ហើយអាច run ឬ rollback បានគ្រប់ពេល។'
              ],
              code: '// បង្កើតតារាងថ្មី\nphp artisan make:migration create_products_table\n\n// បន្ថែម Column ទៅតារាងដែលមានស្រាប់\nphp artisan make:migration add_price_to_products_table',
              language: 'bash'
            },
            {
              id: '5.2.2',
              title: 'The Schema Builder',
              type: 'code',
              content: [
                'យើងកំណត់ប្រភេទ Column នីមួយៗដោយប្រើ `Blueprint` object។',
                'ប្រភេទដែលប្រើច្រើនមាន: `string`, `text`, `integer`, `boolean`, `timestamps`។'
              ],
              code: 'use Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nSchema::create("products", function (Blueprint $table) {\n    $table->id();\n    $table->string("name");\n    $table->decimal("price", 8, 2);\n    $table->text("description")->nullable();\n    $table->timestamps();\n});',
              language: 'php'
            },
            {
              id: '5.2.3',
              title: 'Running Migrations',
              type: 'code',
              content: [
                'នៅពេលដែលយើងបានរៀបចំ column រួចរាល់ហើយ យើងត្រូវ run migration ដើម្បីបង្កើត table និង structure ចូលទៅក្នុង database។ វាជួយឲ្យ schema ត្រូវបានបង្កើតដោយស្វ័យប្រវត្តិ និងមានភាពត្រឹមត្រូវតាម code ដែលបានកំណត់។',
                'បើមានកំហុស ឬចង់ត្រឡប់ក្រោយវិញ យើងក៏អាច rollback migration បានយ៉ាងងាយស្រួល ដើម្បីលុបការផ្លាស់ប្តូរចុងក្រោយ ឬកែសម្រួលឡើងវិញ។'
              ],
              code: '// បញ្ជូនការផ្លាស់ប្តូរទៅ Database\nphp artisan migrate\n\n// ត្រឡប់ក្រោយ (Rollback) ១ ជំហាន\nphp artisan migrate:rollback\n\n// លុបតារាងទាំងអស់ រួចបង្កើតថ្មី (ប្រយ័ត្ន៖ វានឹងលុបទិន្នន័យចោលទាំងអស់)\nphp artisan migrate:fresh',
              language: 'bash',
              insight: 'ប្រើ `migrate:fresh` តែក្នុងពេលកំពុង Develop ប៉ុណ្ណោះ ហាមប្រើលើ Live Server!'
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
                '**Eloquent** គឺជា ORM (Object-Relational Mapping) របស់ Laravel ដែលធ្វើឱ្យការធ្វើការជាមួយ database កាន់តែងាយស្រួល។',
                'រាល់ table ក្នុង database នឹងមាន Model តំណាងមួយ ដែលអនុញ្ញាតឱ្យយើងទាញ និងគ្រប់គ្រងទិន្នន័យបានយ៉ាងមានរចនាសម្ព័ន្ធ។',
                'អ្នកអាចប្រើ PHP code ដើម្បី query database ដោយផ្ទាល់ តាមរយៈ Eloquent ដោយមិនចាំបាច់សរសេរ SQL វែងៗ។'
              ],
              insight: 'Laravel កំណត់ឱ្យយើងដាក់ Model ក្នុង folder `app/Models` តាមស្តង់ដារ។'
            },
            {
              id: '5.3.1',
              title: 'Creating Models',
              type: 'code',
              content: [
                'Models ស្ថិតនៅក្នុង folder `app/Models` ដែលប្រើសម្រាប់តំណាងឱ្យ tables ក្នុង database។',
                'តាមគោលការណ៍ Laravel: table ប្រើពហុវចនៈ (ឧទាហរណ៍ `posts`) ខណៈ model ប្រើឯកវចនៈ (ឧទាហរណ៍ `Post`) ដើម្បីឲ្យមានរចនាសម្ព័ន្ធច្បាស់លាស់ និងងាយយល់។'
              ],
              code: '// បង្កើត Model តែមួយ\nphp artisan make:model Product\n\n// បង្កើត Model ព្រមទាំង Migration និង Controller ក្នុងពេលតែមួយ\nphp artisan make:model Product -mc',
              language: 'bash'
            },
            {
              id: '5.3.2',
              title: 'Mass Assignment',
              type: 'code',
              content: [
                'ដើម្បីធានាសុវត្ថិភាព Laravel តម្រូវឱ្យយើងកំណត់ជាមុនថា column ណាខ្លះអាចអនុញ្ញាតឱ្យបញ្ចូលទិន្នន័យបាន។',
                'យើងប្រើ `$fillable` ដើម្បីកំណត់ fields ដែលអាច mass assign បាន និងការពារការបញ្ចូលទិន្នន័យខុសប្រភេទ ឬមិនអនុញ្ញាត។'
              ],
              code: 'namespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Product extends Model {\n    // កំណត់ Column ដែលអនុញ្ញាត\n    protected $fillable = ["name", "price", "description"];\n}',
              language: 'php',
              insight: 'ការប្រើ `$fillable` ជួយការពារពី "Mass Assignment Vulnerability" ដែលជាបញ្ហាសុវត្ថិភាពចម្បង។'
            }
          ]
        },
        {
          id: '5.4',
          title: 'CRUD Operations',
          slides: [
            {
              id: '5.4.0',
              title: 'Basic Operations',
              type: 'intro',
              content: [
                '**CRUD** តំណាងឱ្យសកម្មភាពគ្រឹះក្នុងការគ្រប់គ្រងទិន្នន័យ៖ Create (បង្កើត), Read (អាន/មើល), Update (កែប្រែ) និង Delete (លុប)។ វាជាមូលដ្ឋានសំខាន់សម្រាប់គ្រប់ប្រព័ន្ធដែលធ្វើការជាមួយ database។',
                '**Eloquent** ធ្វើឱ្យការអនុវត្ត CRUD កាន់តែងាយស្រួល និងរហ័ស ដោយអាចធ្វើការជាមួយ database តាមរយៈ PHP code ដោយមិនចាំបាច់សរសេរ SQL ស្មុគស្មាញ។'
              ],
              insight: 'ការយល់ដឹងអំពី CRUD គឺចាំបាច់សម្រាប់អ្នកអភិវឌ្ឍន៍ backend គ្រប់រូប។'
            },
            {
              id: '5.4.1',
              title: 'Create & Read',
              type: 'code',
              content: [
                'ការបន្ថែមទិន្នន័យថ្មី (Create) និងការទាញយកទិន្នន័យមកបង្ហាញ (Read) គឺជាសកម្មភាពសំខាន់ក្នុង CRUD។',
                'យើងអាចប្រើ methods ដូចជា `all()`, `find()` ឬ `where()` អាស្រ័យទៅតាមតម្រូវការនៃការទាញយកទិន្នន័យ។'
              ],
              code: '// បង្កើតថ្មី\nProduct::create(["name" => "Laptop", "price" => 999]);\n\n// ទាញយកទាំងអស់\n$products = Product::all();\n\n// ស្វែងរកតាម ID\n$item = Product::find(1);\n\n// ទាញយកតាមលក្ខខណ្ឌ\n$cheapItems = Product::where("price", "<", 500)->get();',
              language: 'php'
            },
            {
              id: '5.4.2',
              title: 'Update & Delete',
              type: 'code',
              content: [
                'កែប្រែព័ត៌មានដែលមានស្រាប់ (Update) ឬលុបវាចោល (Delete) នៅពេលដែលមិនចាំបាច់ប្រើប្រាស់ទៀត។ វាជួយឲ្យទិន្នន័យក្នុង database មានភាពទាន់សម័យ និងត្រឹមត្រូវ។'
              ],
              code: '// ការកែប្រែ (Update)\n$item = Product::find(1);\n$item->update(["price" => 899]);\n\n// ការលុប (Delete)\n$item->delete();\n\n// លុបតាមរយៈ ID ផ្ទាល់\nProduct::destroy(2);',
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
                'ជួនកាល Eloquent អាចដំណើរការយឺតបន្តិច នៅពេលដែល Query មានភាពស្មុគស្មាញ ឬទិន្នន័យមានបរិមាណធំខ្លាំង។',
                '**Query Builder** ផ្ដល់ល្បឿនលឿនជាង និងអនុញ្ញាតឱ្យគ្រប់គ្រង SQL បានកាន់តែជិតស្និទ្ធ និងមានភាពបត់បែនខ្ពស់។',
                'វាស័ក្តិសមសម្រាប់ការធ្វើ report ស្មុគស្មាញ ឬការដំណើរការទិន្នន័យធំៗរាប់លានជួរ។'
              ],
            },
            {
              id: '5.5.1',
              title: 'Basic Query Builder',
              type: 'code',
              content: [
                'ប្រើ `DB` facade ដើម្បីគ្រប់គ្រង និងប្រតិបត្តិ SQL queries ដោយផ្ទាល់។',
                'លទ្ធផលដែលបានមកវិញនឹងជា array នៃ plain objects (StdClass) ដែលងាយស្រួលក្នុងការចូលប្រើទិន្នន័យ។'
              ],
              code: 'use Illuminate\\Support\\Facades\\DB;\n\n// ទាញយកទិន្នន័យផ្ទាល់\n$users = DB::table("users")->get();\n\n// Query បែបស្មុគស្មាញ\n$activeUsers = DB::table("users")\n            ->where("active", true)\n            ->orderBy("last_login", "desc")\n            ->limit(5)\n            ->get();',
              language: 'php',
              insight: 'ចំណេះដឹងបន្ថែម៖ តាមពិតទៅ Eloquent គឺគ្រាន់តែជា "សំបក" ដែលស្រោបពីលើ Query Builder នេះប៉ុណ្ណោះ។'
            }
          ]
        }
      ]
    }
  ]
};