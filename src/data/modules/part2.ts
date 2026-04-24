import { Table } from 'lucide-react';
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
                '**Routing** គឺជាឆ្អឹងខ្នងនៃប្រព័ន្ធគ្រប់គ្រង Requests ក្នុង Laravel។ (វាប្រៀបដូចជាផ្លូវថ្នល់ដែលដឹកនាំអ្នកប្រើប្រាស់ទៅកាន់គោលដៅត្រឹមត្រូវនៅក្នុង Website របស់អ្នក)',
                'វាមានតួនាទីតម្រង់ទិស URL នីមួយៗឱ្យទៅកាន់ Logic ជាក់លាក់ (Closure ឬ Controller)។ (ដើម្បីឱ្យកម្មវិធីដឹងថា តើត្រូវបង្ហាញ Page ណា ឬត្រូវធ្វើការងារអ្វីនៅពេលមានគេចុចលើ Link ណាមួយ)',
                'ក្នុងមេរៀននេះ យើងនឹងរៀនពីរបៀបបង្កើតផ្លូវសម្រាប់ URL ទៅកាន់សកម្មភាពផ្សេងៗក្នុង App។ (ជួយឱ្យអ្នកអាចគ្រប់គ្រងរចនាសម្ព័ន្ធរបស់ Website ឱ្យមានសណ្ដាប់ធ្នាប់ និងងាយស្រួលប្រើប្រាស់)'
              ],
              insight: 'សាកស្រមៃថា Routes គឺជា "ភ្នាក់ងារសម្របសម្រួលចរាចរណ៍" ដែលនាំភ្ញៀវ (Users) ទៅកាន់បន្ទប់ដែលត្រឹមត្រូវ។',
              animation: 'routing_entry'
            },
            {
              id: '3.1.1',
              title: 'Route Files',
              type: 'concept',
              content: [
                '**routes/web.php**: សម្រាប់ Web Interface ទូទៅ (រួមបញ្ចូលមុខងារការពារដូចជា Session និង CSRF protection ដើម្បីធានាសុវត្ថិភាពសម្រាប់អ្នកប្រើប្រាស់ទូទៅ)។',
                '**routes/api.php**: សម្រាប់ Stateless APIs (ប្រើសម្រាប់បញ្ជូនទិន្នន័យទៅកាន់ Mobile App ឬ Frontend Framework ផ្សេងៗដោយមិនចាំបាច់មាន Session)។',
                '**routes/console.php**: សម្រាប់បង្កើត Command ផ្ទាល់ខ្លួនក្នុង Artisan CLI (ជួយឱ្យអ្នកអាចបង្កើតការងារស្វ័យប្រវត្តិតាមរយៈ Command Line បានយ៉ាងងាយស្រួល)។'
              ],
              animation: 'route_files'
            },
            {
              id: '3.1.2',
              title: 'HTTP Methods (ប្រភេទនៃ Requests)',
              type: 'code',
              content: [
                '**GET**: ប្រើសម្រាប់ទាញយកទិន្នន័យមកបង្ហាញ (ឧទាហរណ៍៖ មើលបញ្ជីអត្ថបទ ឬចូលមើលទំព័រព័ត៌មានផ្សេងៗ)។',
                '**POST**: ប្រើសម្រាប់បញ្ជូនទិន្នន័យថ្មីទៅកាន់ Server (ឧទាហរណ៍៖ ការចុះឈ្មោះសមាជិក ឬការ Comment លើអត្ថបទណាមួយ)។',
                '**PUT/PATCH**: ប្រើសម្រាប់កែប្រែទិន្នន័យដែលមានស្រាប់ (Update) (ឧទាហរណ៍៖ ការប្តូរលេខទូរស័ព្ទ ឬកែសម្រួលព័ត៌មានផ្ទាល់ខ្លួន)។',
                '**DELETE**: ប្រើសម្រាប់លុបទិន្នន័យចេញពី Database (ឧទាហរណ៍៖ ការលុប Post ដែលសរសេរខុស ឬលុបគណនីចោល)។',
                '**Route::any()**: អនុញ្ញាតឱ្យរាល់ HTTP methods ទាំងអស់ចូលប្រើបាន (ប្រើក្នុងករណីពិសេសដែលអ្នកចង់ឱ្យ URL មួយអាចទទួលយក Requests គ្រប់ប្រភេទ)។'
              ],
              code: 'use App\\Http\\Controllers\\PostController;\n\n// ឧទាហរណ៍នៃការប្រើប្រាស់ Methods ផ្សេងៗ\nRoute::get("/posts", [PostController::class, "index"]);\nRoute::post("/posts", [PostController::class, "store"]);\nRoute::put("/posts/{id}", [PostController::class, "update"]);\nRoute::delete("/posts/{id}", [PostController::class, "destroy"]);\n\n// ប្រើសម្រាប់ចាប់រាល់ Methods\nRoute::any("/search", [SearchController::class, "handle"]);',
              language: 'php',
              insight: 'ការប្រើប្រាស់ HTTP Methods ឱ្យបានត្រឹមត្រូវតាមស្ដង់ដារ RESTful នឹងធ្វើឱ្យ API របស់អ្នកមានសណ្ដាប់ធ្នាប់ និងងាយស្រួលយល់។',
              animation: 'laravel_http_methods'
            },
            {
              id: '3.1.3',
              title: 'Route Parameters (ការបញ្ជូនទិន្នន័យតាម URL)',
              type: 'code',
              content: [
                '**Required Parameters**: `{id}` គឺដាច់ខាតត្រូវតែមានភ្ជាប់មកជាមួយ URL (បើមិនដូច្នោះទេ Laravel នឹងបង្ហាញកំហុស 404 ព្រោះវារកផ្លូវមិនឃើញ)។',
                '**Optional Parameters**: `{name?}` អាចមាន ឬមិនមានក៏បាន (ប្រើសញ្ញា "?" និងកំណត់តម្លៃ default ក្នុង Function ដើម្បីកុំឱ្យកម្មវិធីគាំងនៅពេលគ្មានទិន្នន័យបញ្ជូនមក)។',
                '**Regular Expression Constraints**: យើងអាចកំណត់លក្ខខណ្ឌឱ្យ Parameter ឱ្យកាន់តែច្បាស់លាស់ (ឧទាហរណ៍៖ កំណត់ឱ្យ `{id}` ត្រូវតែជាលេខប៉ុណ្ណោះ ដើម្បីការពារការបញ្ចូលទិន្នន័យខុសប្រភេទ)។'
              ],
              code: '<?php\n// ១. Required Parameter\nRoute::get("/user/{id}", function ($id) {\n    return "User ID: " . $id;\n});\n\n// ២. Optional Parameter ជាមួយ Default Value\nRoute::get("/search/{term?}", function ($term = "all") {\n    return "Searching for: " . $term;\n});\n\n// ៣. បន្ថែមលក្ខខណ្ឌ (Constraints)\nRoute::get("/profile/{username}", function ($username) {\n    return "Profile of: " . $username;\n})->where("username", "[A-Za-z]+"); // អនុញ្ញាតតែអក្សរប៉ុណ្ណោះ\n?>',
              language: 'php',
              insight: 'Parameters គឺជាវិធីដែលសាមញ្ញបំផុតក្នុងការផ្ទេរអត្តសញ្ញាណ (ID) ពី URL ទៅកាន់ Backend ដើម្បីទាញយកទិន្នន័យមកបង្ហាញ។',
              animation: 'route_parameters'
            },
            {
              id: '3.1.4',
              title: 'Named Routes (ការដាក់ឈ្មោះផ្លូវ)',
              type: 'code',
              content: [
                '**Semantic Naming**: ការដាក់ឈ្មោះឱ្យ Route ជួយឱ្យយើងហៅវាប្រើបានងាយស្រួលក្នុង Views ឬ Controllers (ឧទាហរណ៍៖ ប្រើ `route("profile")` ជំនួសឱ្យការសរសេរ URL វែងៗដោយដៃ)។',
                '**Flexibility**: ប្រសិនបើអ្នកចង់ប្តូរ URL ពី `/user/profile` ទៅ `/my-profile` អ្នកគ្រាន់តែប្តូរក្នុង Route file តែមួយកន្លែងប៉ុណ្ណោះ (កន្លែងផ្សេងទៀតដែលហៅតាមឈ្មោះ នឹងប្តូរតាមដោយស្វ័យប្រវត្តិ)។',
                '**Redirecting**: ការ Redirect ទៅកាន់ឈ្មោះ Route គឺមានសុវត្ថិភាពជាងការប្រើ URL ផ្ទាល់ (ជួយការពារបញ្ហាដាច់ Link នៅពេលដែលអ្នករៀបចំរចនាសម្ព័ន្ធ URL ឡើងវិញ)។'
              ],
              code: '<?php\n// ១. កំណត់ឈ្មោះ Route\nRoute::get("/user/settings", [SettingsController::class, "index"])->name("settings.edit");\n\n// ២. ការហៅប្រើក្នុង Blade View\n// <a href="{{ route("settings.edit") }}">កែប្រែការកំណត់</a>\n\n// ៣. ការហៅប្រើក្នុង Controller\nreturn redirect()->route("settings.edit");\n?>',
              language: 'php',
              insight: 'Named Routes ជួយការពារបញ្ហា "Broken Links" នៅពេលដែល Structure របស់ URL ត្រូវបានផ្លាស់ប្តូរក្នុងពេលអភិវឌ្ឍ។',
              animation: 'named_routes'
            },
            {
              id: '3.1.5',
              title: 'Groups & Middleware (ការចាត់ក្រុម និងតម្រង)',
              type: 'code',
              content: [
                '**Middleware**: ដើរតួជា "អ្នកយាមទ្វារ" ដើម្បីត្រួតពិនិត្យ Request មុនចូលដល់កម្មវិធី (ឧទាហរណ៍៖ `auth` middleware នឹងឆែកមើលថា តើ User បាន Login រួចរាល់ហើយឬនៅ)។',
                '**Route Groups**: អនុញ្ញាតឱ្យយើងដាក់ Settings រួមគ្នាទៅលើ Routes ច្រើនក្នុងពេលតែមួយ (ជួយឱ្យកូដរបស់អ្នកខ្លី ស្អាត និងមិនចាំបាច់សរសេរការកំណត់ដដែលៗច្រើនដង)។',
                '**Prefixing**: បន្ថែមពាក្យនៅខាងមុខ URL ទាំងអស់ក្នុងក្រុម (ឧទាហរណ៍៖ បន្ថែម `admin` ទៅមុខ URL ដូចជា `/admin/users` និង `/admin/posts` ដើម្បីបែងចែកតំបន់គ្រប់គ្រងឱ្យច្បាស់លាស់)។'
              ],
              code: '<?php\n// ក្រុមដែលទាមទារការ Login (Auth Middleware)\nRoute::middleware(["auth"])->group(function () {\n    Route::get("/dashboard", [DashboardController::class, "index"]);\n    Route::get("/profile", [ProfileController::class, "edit"]);\n});\n\n// ក្រុមដែលមានពាក្យ "admin" នៅខាងមុខ URL\nRoute::prefix("admin")->group(function () {\n    Route::get("/users", [AdminController::class, "users"]);\n    Route::get("/reports", [AdminController::class, "reports"]);\n});\n?>',
              language: 'php',
              insight: 'ការប្រើប្រាស់ Groups ជួយឱ្យ `web.php` របស់អ្នកមានសណ្ដាប់ធ្នាប់ ងាយស្រួលអាន និងមិនសរសេរកូដជាន់គ្នា។',
              animation: 'route_groups'
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
                '**Separation of Concerns**: ជំនួសឱ្យសរសេរ Logic ក្នុង Route file យើងគួរផ្ទេរវាទៅដាក់ក្នុង Controllers (ដើម្បីឱ្យ `web.php` ផ្ដោតតែលើការកំណត់ផ្លូវ URL ហើយ Controller ផ្ដោតលើការងារពិតប្រាកដ)។',
                '**Organization**: Controllers ជួយរៀបចំ និងប្រមូល Request ដែលពាក់ព័ន្ធគ្នា ទៅក្នុង Class តែមួយ (ឧទាហរណ៍៖ `UserController` ផ្ទុកនូវរាល់ការងារដែលទាក់ទងនឹង User ទាំងអស់)។',
                '**Maintainability**: រចនាសម្ព័ន្ធបែបនេះធ្វើឱ្យ Code ស្អាត ងាយស្រួលធ្វើ Test និងងាយគ្រប់គ្រង (ជួយឱ្យអ្នក និងក្រុមការងារងាយស្រួលក្នុងការកែសម្រួលកូដទៅថ្ងៃក្រោយ)។'
              ],
              animation: 'controller_logic'
            },
            {
              id: '3.2.1',
              title: 'Creating Controllers (ការបង្កើត Controller)',
              type: 'code',
              content: [
                '**Artisan Command**: យើងប្រើ `php artisan make:controller` ដើម្បីបង្កើត Controller file ថ្មីភ្លាមៗ (ជួយសន្សំសំចៃពេលវេលា និងធានាថា File ត្រូវបានបង្កើតឡើងតាមស្ដង់ដាររបស់ Laravel)។',
                '**Standard Controller**: ជា Controller ទទេ ដែលយើងត្រូវសរសេរ Methods ដោយខ្លួនឯង (ស័ក្តិសមសម្រាប់កិច្ចការងារទូទៅដែលមិនមែនជាការងារ CRUD)។',
                '**Resource Controller**: បង្កើតមកជាមួយ Methods ស្ដង់ដារចំនួន ៧ សម្រាប់ធ្វើ CRUD (ជួយឱ្យអ្នកអាចបង្កើតមុខងារ បង្កើត, អាន, កែប្រែ និងលុបទិន្នន័យ បានយ៉ាងរហ័សបំផុត)។'
              ],
              code: '# ១. បង្កើត Controller ធម្មតា\nphp artisan make:controller UserController\n\n# ២. បង្កើត Resource Controller (លឿនបំផុតសម្រាប់ CRUD)\nphp artisan make:controller PostController --resource\n\n# ៣. បង្កើត Controller ក្នុង Folder ជាក់លាក់\nphp artisan make:controller Admin/DashboardController',
              language: 'bash',
              insight: 'ការប្រើ `--resource` ជួយសន្សំសំចៃពេលវេលាច្រើន ព្រោះវាបង្កើត Structure សម្រាប់ CRUD ឱ្យយើងស្រាប់។'
            },
            {
              id: '3.2.2',
              title: 'The Request Object (ការគ្រប់គ្រងទិន្នន័យបញ្ជូន)',
              type: 'code',
              content: [
                '**Dependency Injection**: Laravel នឹងបញ្ជូន Request instance មកឱ្យយើងដោយស្វ័យប្រវត្តិក្នុង Controller methods (ជួយឱ្យអ្នកអាចចូលប្រើព័ត៌មានគ្រប់យ៉ាងដែល User បានផ្ញើមកបានភ្លាមៗ)។',
                '**Input Retrieval**: យើងប្រើ `$request->input()` ឬ `$request->all()` ដើម្បីទាញយកទិន្នន័យដែល User ផ្ញើមក (ដូចជាអត្ថបទក្នុង Form ឬតម្លៃដែលបានជ្រើសរើសផ្សេងៗ)។',
                '**Validation Ready**: Request object នេះក៏ត្រូវបានប្រើសម្រាប់ធ្វើការ Validate ទិន្នន័យមុននឹងរក្សាទុកផងដែរ (ធានាថាទិន្នន័យដែលចូលមកមានភាពត្រឹមត្រូវ និងសុវត្ថិភាព)។'
              ],
              code: '<?php\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\n\nclass PostController extends Controller {\n    public function store(Request $request) {\n        // ទាញយកទិន្នន័យតាមឈ្មោះ Key\n        $title = $request->input("title");\n        \n        // ទាញយកទិន្នន័យទាំងអស់ជា Array\n        $allData = $request->all();\n        \n        return "ទទួបានទិន្នន័យ: " . $title;\n    }\n}\n?>',
              language: 'php',
              insight: 'Request object ផ្ទុកព័ត៌មានគ្រប់យ៉ាងអំពី HTTP request រួមមាន៖ Inputs, Files, Cookies, និង Headers។',
              animation: 'laravel_request_object'
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
                'Blade គឺជា Templating Engine របស់ Laravel ដែលងាយស្រួល និងមានប្រសិទ្ធភាព។ (វាជួយឱ្យអ្នកអាចបង្កើត Layout ស្អាតៗដោយមិនបាច់សរសេរកូដ PHP ស្មុគស្មាញលាយជាមួយ HTML)',
                'វាអនុញ្ញាតឱ្យយើងសរសេរ PHP ក្នុង HTML ដោយប្រើ Syntax ខ្លីៗ និងស្អាត។ (ធ្វើឱ្យកូដរបស់អ្នកមើលទៅមានរបៀបរៀបរយ និងងាយស្រួលក្នុងការអានសម្រាប់អ្នកអភិវឌ្ឍន៍ផ្សេងទៀត)',
                'Blade មាន Extension `.blade.php` ហើយស្ថិតនៅក្នុង `resources/views`។ (រាល់ File ដែលមានកន្ទុយនេះ នឹងត្រូវបាន Laravel បម្លែងទៅជាកូដ PHP សុទ្ធដោយស្វ័យប្រវត្តិ)'
              ],
              insight: 'Blade នឹងត្រូវបម្លែងទៅជា PHP សុទ្ធ និងធ្វើការ Cached ទុកដើម្បីឱ្យដំណើរការបានលឿនបំផុត។'
            },
            {
              id: '4.1.1',
              title: 'Creating Views via CLI',
              type: 'code',
              content: [
                'ក្នុង Laravel សម័យថ្មី យើងអាចបង្កើត View ដោយប្រើ Artisan Command បានយ៉ាងរហ័ស។ (ជួយកាត់បន្ថយការបង្កើត File និង Folder ដោយដៃដែលនាំឱ្យចំណាយពេលច្រើន)',
                'វានឹងបង្កើត File នៅក្នុង Folder ត្រឹមត្រូវឱ្យយើងដោយស្វ័យប្រវត្តិ។ (ធានាថា File ស្ថិតនៅទីតាំងត្រឹមត្រូវតាមស្ដង់ដាររបស់ Laravel)'
              ],
              code: '# បង្កើត View ឈ្មោះ welcome\nphp artisan make:view welcome\n\n# បង្កើតក្នុង Subfolder (users/index.blade.php)\nphp artisan make:view users.index',
              language: 'bash',
              insight: 'ប្រើ Command នេះដើម្បីជៀសវាងការបង្កើត File និង Folder ដោយដៃដែលនាំឱ្យខាតពេល។'
            },
            {
              id: '4.1.2',
              title: 'Basic Syntax & Directives (វាក្យសព្ទមូលដ្ឋាន)',
              type: 'code',
              content: [
                '**Double Braces**: `{{ $data }}` ប្រើសម្រាប់បង្ហាញតម្លៃ Variables (ស្មើនឹងការប្រើ `echo` ក្នុង PHP ប៉ុន្តែវាមានសុវត្ថិភាពជាងព្រោះវាជួយការពារការលួចបញ្ចូលកូដអាក្រក់)។',
                '**Conditional Directives**: `@if`, `@elseif`, `@else`, `@endif` សម្រាប់ឆែកលក្ខខណ្ឌបង្ហាញ UI (ជួយឱ្យអ្នកអាចកំណត់បានថា តើ User ណាខ្លះដែលគួរឃើញប៊ូតុង ឬព័ត៌មានជាក់លាក់ណាមួយ)។',
                '**Loop Directives**: `@foreach`, `@for`, `@while` សម្រាប់បង្ហាញទិន្នន័យជាបញ្ជី (ស័ក្តិសមបំផុតសម្រាប់ការបង្ហាញតារាងទិន្នន័យ ឬបញ្ជីឈ្មោះផលិតផលចេញពី Database)។',
                '**Empty State**: `@forelse` គឺជារង្វិលជុំដែលជួយបង្ហាញសារ "មិនមានទិន្នន័យ" បើ Array ទទេ (ជួយឱ្យ Website របស់អ្នកមើលទៅមានអាជីព ទោះបីជាគ្មានទិន្នន័យបង្ហាញក៏ដោយ)។'
              ],
              code: '<h1>សួស្តី, {{ $user->name }}</h1>\n\n@if($isAdmin)\n    <span class="badge">Admin</span>\n@endif\n\n<ul>\n    @forelse($tasks as $task)\n        <li>{{ $task->title }}</li>\n    @empty\n        <li>មិនមានកិច្ចការឡើយ</li>\n    @endforelse\n</ul>',
              language: 'php',
              insight: 'Blade Directives ជួយឱ្យកូដ HTML របស់អ្នកស្អាត និងងាយស្រួលអានជាងការសរសេរ PHP បុរាណ។'
            },
            {
              id: '4.1.3',
              title: 'Escaping Data (សុវត្ថិភាពទិន្នន័យ)',
              type: 'concept',
              content: [
                '**Safe Display**: `{{ $data }}` នឹងបម្លែងតួអក្សរពិសេសទៅជាអក្សរសុវត្ថិភាព ដើម្បីទប់ស្កាត់ការវាយប្រហារ **XSS** (វាជាខែលការពារដ៏សំខាន់បំផុត ដើម្បីកុំឱ្យ Hacker បញ្ចូលកូដ JavaScript អាក្រក់មកក្នុង App របស់អ្នក)។',
                '**Raw Display**: `{!! $data !!}` ប្រើសម្រាប់បង្ហាញ HTML ដោយផ្ទាល់ (ប្រើតែនៅពេលអ្នកទុកចិត្តប្រភពទិន្នន័យប៉ុណ្ណោះ ដូចជាទិន្នន័យដែលចេញពី Admin Editor ផ្ទាល់ខ្លួន)។',
                '**Comment**: `{{-- នេះជា Comment --}}` នឹងមិនបង្ហាញនៅក្នុង HTML source code ដែល User ឃើញឡើយ (ជួយឱ្យអ្នកអាចកត់ចំណាំក្នុងកូដបានយ៉ាងមានសុវត្ថិភាព)។'
              ],
              insight: 'ច្បាប់មាស៖ កុំប្រើ `{!! !!}` ជាមួយទិន្នន័យដែលបញ្ចូលដោយ Users ជាដាច់ខាត!'
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
                'កុំចំណាយពេលសរសេរ Header ឬ Footer ដដែលៗក្នុងគ្រប់ Page។ (ការធ្វើបែបនេះនាំឱ្យពិបាកកែសម្រួល និងចំណាយពេលច្រើនឥតប្រយោជន៍)',
                'ប្រើប្រាស់ **Layout Inheritance** ដើម្បីបង្កើត Main Layout តែមួយ ហើយអាចប្រើរួមគ្នាបានទាំង Project (ជួយឱ្យការផ្លាស់ប្តូរ Layout ទាំងមូលធ្វើឡើងបានយ៉ាងរហ័សតាមរយៈ File តែមួយគត់)។',
                'យើងនឹងប្រើ `@extends`, `@yield`, និង `@section` ដើម្បីរៀបចំ Structure របស់ Page ឱ្យមានរបៀបរៀបរយ (ធ្វើឱ្យកូដរបស់អ្នកងាយស្រួលថែទាំ និងពង្រីកទៅថ្ងៃក្រោយ)។'
              ],
              animation: 'blade_layout'
            },
            {
              id: '4.2.1',
              title: 'The Main Layout (ប្លង់មេនៃ Layout)',
              type: 'code',
              content: [
                '**Centralization**: បង្កើត File តែមួយសម្រាប់រក្សាទុក HTML Structure រួម (ដូចជា Navbar, Footer, និងរាល់ការហៅ CSS/JS ផ្សេងៗដែលប្រើក្នុង App ទាំងមូល)។',
                '**Dynamic Areas**: ប្រើ `@yield("content")` ដើម្បីប្រាប់ Blade ថា "កន្លែងនេះនឹងត្រូវប្តូរ Content ទៅតាម Page" (ជួយឱ្យអ្នកអាចប្តូរតែផ្នែកកណ្តាលនៃ Website ដោយរក្សាទុកប្លង់មេឱ្យនៅដដែល)។',
                '**Titles**: យើងក៏អាចប្រើ `@yield("title")` ដើម្បីដាក់ចំណងជើង Page ឱ្យខុសៗគ្នា (ជួយឱ្យ Website របស់អ្នកមាន SEO ល្អ និងងាយស្រួលសម្គាល់នៅលើ Browser Tab)។'
              ],
              code: '<!-- resources/views/layouts/app.blade.php -->\n<html>\n<head>\n    <title>My App - @yield("title")</title>\n</head>\n<body>\n    <nav>Navigation Bar</nav>\n\n    <main>\n        @yield("content")\n    </main>\n\n    <footer>Footer 2024</footer>\n</body>\n</html>',
              language: 'php'
            },
            {
              id: '4.2.2',
              title: 'Extending a Layout (ការប្រើប្រាស់ Layout មេ)',
              type: 'code',
              content: [
                '**Involvement**: ប្រើ `@extends` ដើម្បីប្រាប់ថា Page នេះនឹងប្រើប្រាស់ Layout មេមួយណា (វាជាការភ្ជាប់ទំនាក់ទំនងរវាងទំព័រមាតិកា និងប្លង់មេនៃកម្មវិធី)។',
                '**Filling Content**: ប្រើ `@section` និង `@endsection` ដើម្បីបញ្ជូន Content ទៅដាក់ក្នុង `@yield` (ជួយឱ្យអ្នកអាចកំណត់ទីតាំងបង្ហាញព័ត៌មានឱ្យបានត្រឹមត្រូវតាមប្លង់ដែលបានគ្រោងទុក)។',
                '**Override**: យើងអាចបំពេញ Title ឬ SEO Tags តាមរយៈ `@section` ក្នុង Page នីមួយៗបានយ៉ាងងាយ (ជួយឱ្យទំព័រនីមួយៗមានលក្ខណៈពិសេសផ្ទាល់ខ្លួន ប៉ុន្តែនៅតែស្ថិតក្នុងប្លង់រួមតែមួយ)។'
              ],
              code: '<!-- resources/views/home.blade.php -->\n@extends("layouts.app")\n\n@section("title", "ទំព័រដើម")\n\n@section("content")\n    <h2>ស្វាគមន៍មកកាន់ទំព័រដើម!</h2>\n    <p>កូដត្រង់នេះនឹងត្រូវបង្ហាញក្នុង @yield("content") នៃ Layout មេ។</p>\n@endsection',
              language: 'php',
              animation: 'blade_layout'
            },
            {
              id: '4.2.3',
              title: 'Including & Components (ការបំបែក UI តូចៗ)',
              type: 'code',
              content: [
                '**@include**: ប្រើសម្រាប់ទាញយក File តូចៗមកដាក់បញ្ចូល (ឧទាហរណ៍៖ ការបំបែក Sidebar ឬ Navbar ឱ្យដាច់ដោយឡែក ដើម្បីឱ្យកូដក្នុង Layout មាមមិនមានភាពស្មុគស្មាញ)។',
                '**Blade Components**: ជាវិធីសាស្ត្រទំនើបសម្រាប់បង្កើត UI Elements ដែលអាចប្រើឡើងវិញបាន (Reusable) (ស័ក្តិសមបំផុតសម្រាប់បង្កើត ប៊ូតុង, Alert Box, ឬ Card ដែលអ្នកត្រូវប្រើច្រើនដងក្នុង Project)។',
                '**Slots**: Components អាចទទួល Content តាមរយៈ `$slot` ដែលធ្វើឱ្យវាមានភាពបត់បែនខ្ពស់ (អនុញ្ញាតឱ្យអ្នកបញ្ចូល Content ផ្សេងៗគ្នាទៅក្នុង Component តែមួយបានយ៉ាងងាយស្រួល)។'
              ],
              code: '<?php\n// ១. ការប្រើ @include\n@include("partials.navbar")\n\n// ២. ការប្រើ Blade Component (x-component-name)\n// បង្កើតដោយ: php artisan make:component Alert\n<x-alert type="error">\n    មានកំហុសក្នុងការរក្សាទុកទិន្នន័យ!\n</x-alert>\n?>',
              language: 'php',
              insight: 'ប្រើ Components ជំនួស @include សម្រាប់ UI Elements ដែលមាន Logic ឬស្ទីលស្មុគស្មាញ។',
              animation: 'blade_components'
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
                'បន្ទាប់ពីទាញទិន្នន័យបានពី Controller យើងត្រូវបញ្ជូនវាទៅបង្ហាញនៅលើ Frontend (View)។ (ដើម្បីឱ្យ User អាចមើលឃើញព័ត៌មានដែលពួកគេត្រូវការ ដូចជាបញ្ជីឈ្មោះ ឬព័ត៌មានផ្ទាល់ខ្លួន)',
                'Laravel ផ្ដល់វិធីសាស្រ្តងាយៗសម្រាប់បញ្ជូន Variables ទៅកាន់ View ដើម្បីអាចប្រើបង្ហាញទិន្នន័យបានភ្លាមៗ។ (ជួយឱ្យការបង្ហាញទិន្នន័យមានភាពរលូន និងមានសុវត្ថិភាពបំផុត)'
              ]
            },
            {
              id: '4.3.1',
              title: 'The view() Helper',
              type: 'code',
              content: [
                'វិធីសាមញ្ញបំផុតគឺបញ្ជូន Data ជា Associative Array ក្នុង Parameter ទីពីរនៃ `view()`។ (វាអនុញ្ញាតឱ្យយើងផ្ទេរទិន្នន័យពី Controller ទៅកាន់ View បានយ៉ាងច្បាស់លាស់ និងងាយស្រួលប្រើក្នុង Blade Template)។'
              ],
              code: 'public function index() {\n    return view("profile", [\n        "username" => "Sokha",\n        "status" => "Active"\n    ]);\n}',
              language: 'php'
            },
            {
              id: '4.3.2',
              title: 'The compact() Helper',
              type: 'code',
              content: [
                'ជាវិធីដែលពេញនិយមបំផុត ព្រោះវាខ្លី ងាយស្រួលអាន និងស្អាតជាងការសរសេរ Array ដោយដៃ។ (ជួយកាត់បន្ថយការសរសេរកូដដដែលៗ និងធ្វើឱ្យ Controller របស់អ្នកមើលទៅមានរបៀបរៀបរយ)',
                'Laravel នឹងបង្កើត Associative Array ដោយស្វ័យប្រវត្តិ ដោយយកឈ្មោះ Variable ជា Key ហើយ Value ជាទិន្នន័យដែលបានកំណត់។ (វាជួយការពារការសរសេរឈ្មោះ Variable ខុសនៅពេលបញ្ជូនទៅកាន់ View)'
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
                'មុននឹងចាប់ផ្តើមធ្វើការជាមួយទិន្នន័យ យើងត្រូវភ្ជាប់ Application ទៅកាន់ Database ជាមុនសិន។ (វាប្រៀបដូចជាការភ្ជាប់បំពង់ទឹកទៅកាន់ធុងស្តុក ដើម្បីឱ្យយើងអាចទាញយក ឬរក្សាទុកទិន្នន័យបាន)',
                'Laravel supports Database ជាច្រើនដូចជា MySQL, PostgreSQL, SQLite និង SQL Server ដែលអាចជ្រើសប្រើតាមតម្រូវការ។ (ជួយឱ្យអ្នកមានភាពបត់បែនក្នុងការជ្រើសរើសបច្ចេកវិទ្យាដែលស័ក្តិសមសម្រាប់ Project របស់អ្នក)',
                'ព័ត៌មានសំខាន់ៗទាំងអស់ដូចជា Username, Password និង Configuration ត្រូវរក្សាទុកក្នុងឯកសារ **.env** ដើម្បីធានាសុវត្ថិភាព។ (ការទុកព័ត៌មានសម្ងាត់ដាច់ដោយឡែក ជួយការពារកុំឱ្យមានការលេចធ្លាយទិន្នន័យនៅពេលអ្នកចែករំលែកកូដ)'
              ],
              animation: 'database_connection',
              insight: 'ចងចាំ៖ កុំយក file .env ទៅ Commit ក្នុង Git ដើម្បីការពារសុវត្ថិភាពទិន្នន័យរបស់អ្នក។'
            },
            {
              id: '5.1.1',
              title: 'The .env File',
              type: 'code',
              content: [
                'គ្រាន់តែកែតម្លៃទាំងនេះឱ្យត្រឹមត្រូវស្របតាម Database ដែលអ្នកបានបង្កើតនៅក្នុង Local Environment របស់អ្នក។ (ដូចជាឈ្មោះ Database, Username និង Password ដើម្បីធានាថាការភ្ជាប់រវាង App និង Database ដំណើរការបានត្រឹមត្រូវ)'
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
                '**Migrations** គឺជាប្រព័ន្ធសម្រាប់គ្រប់គ្រងរចនាសម្ព័ន្ធ Database ដោយប្រើកូដ PHP ជំនួសការបង្កើតតារាងដោយដៃ។ (វាជួយឱ្យអ្នក និងក្រុមការងារមាន Database Structure ដូចគ្នាជានិច្ច ដោយមិនចាំបាច់ផ្ញើ File SQL ឱ្យគ្នាទៅវិញទៅមក)',
                'វាជួយឱ្យក្រុមទាំងមូលមាន Database Structure ដូចគ្នា ដោយគ្រាន់តែ Run Command មួយតែប៉ុណ្ណោះ។ (ជួយកាត់បន្ថយការភ័ន្តច្រឡំ និងកំហុសឆ្គងដែលកើតឡើងពីការបង្កើត Table ខុសគ្នា)',
                'វាអាចប្រៀបធៀបបានថា ដូចជា “Git សម្រាប់ Database” ដែលអាច Track និងគ្រប់គ្រងការផ្លាស់ប្តូរបានយ៉ាងមានប្រសិទ្ធភាព (អនុញ្ញាតឱ្យអ្នកត្រឡប់ទៅរក Structure ចាស់វិញបានយ៉ាងងាយស្រួលប្រសិនបើមានបញ្ហា)។'
              ],
              animation: 'database_migrations'
            },
            {
              id: '5.2.1',
              title: 'Creating Migrations (ការបង្កើត Migration)',
              type: 'code',
              content: [
                '**Artisan Command**: ប្រើ `make:migration` ដើម្បីបង្កើត File សម្រាប់កំណត់រចនាសម្ព័ន្ធ Table ថ្មី (ជួយឱ្យអ្នកចាប់ផ្ដើមរៀបចំ Database បានយ៉ាងរហ័ស និងមានរបៀបរៀបរយ)។',
                '**Naming Convention**: គួរដាក់ឈ្មោះដែលបញ្ជាក់ពីសកម្មភាព (ឧទាហរណ៍៖ `create_users_table` សម្រាប់បង្កើតថ្មី ឬ `add_phone_to_users_table` សម្រាប់បន្ថែម Column ថ្មី)។',
                '**Timestamping**: រាល់ Migration File នឹងមានកាលបរិច្ឆេទនៅខាងមុខ ដើម្បីធានាថាវាដំណើរការតាមលំដាប់លំដោយ (ការពារកុំឱ្យមានការជាន់គ្នា ឬការបង្កបង្កើត Table ខុសលំដាប់លំដោយ)។'
              ],
              code: '# ១. បង្កើតតារាងថ្មី\nphp artisan make:migration create_products_table\n\n# ២. បន្ថែម Column ទៅតារាងដែលមានស្រាប់\nphp artisan make:migration add_price_to_products_table\n\n# ៣. បង្កើតតារាងជាមួយ Schema ខ្លះៗស្រាប់\nphp artisan make:migration create_orders_table --create=orders',
              language: 'bash',
              animation: 'migration_naming'
            },
            {
              id: '5.2.2',
              title: 'Migration Structure',
              type: 'code',
              content: [
                '**up() Method**: ជាកន្លែងដែលយើងសរសេរកូដដើម្បីបង្កើត Table ឬបន្ថែម Column ថ្មី (វាត្រូវបាន Run នៅពេលយើងវាយពាក្យ `php artisan migrate`)។',
                '**down() Method**: ប្រើសម្រាប់លុប Table ឬ Undo អ្វីដែលយើងបានធ្វើក្នុង `up()` (វាត្រូវបាន Run នៅពេលយើង rollback ដើម្បីការពារកុំឱ្យ Database មានកំហុស)។',
                '**Reversibility**: ការបំបែកជា ២ ផ្នែកបែបនេះ ជួយឱ្យយើងអាច "ត្រឡប់ក្រោយ" (Undo) បានជានិច្ចប្រសិនបើមានកំហុស (ធ្វើឱ្យ Database Structure របស់អ្នកមានភាពបត់បែន និងសុវត្ថិភាព)។'
              ],
              code: 'public function up(): void {\n    Schema::create("products", function (Blueprint $table) {\n        $table->id();\n        $table->string("name");\n        $table->timestamps();\n    });\n}\n\npublic function down(): void {\n    Schema::dropIfExists("products");\n}',
              language: 'php',
              animation: 'migration_up_down'
            },
            {
              id: '5.2.3',
              title: 'The Schema Builder (ការកំណត់រចនាសម្ព័ន្ធ Table)',
              type: 'code',
              content: [
                '**Blueprint**: យើងប្រើ `$table` Object ដើម្បីកំណត់ប្រភេទទិន្នន័យ (Data Types) របស់ Column (វាផ្ដល់នូវភាពងាយស្រួលក្នុងការកំណត់លក្ខណៈសម្បត្តិរបស់ទិន្នន័យនីមួយៗ)។',
                '**Common Types**: `id()` (Primary Key), `string()` (អក្សរខ្លី), `text()` (អក្សរវែង), `decimal()` (លេខក្បៀស), `timestamps()` (បង្កើត created_at/updated_at ដោយស្វ័យប្រវត្តិ)។',
                '**Modifiers**: `nullable()` (អាចទុកទទេបាន), `default()` (កំណត់តម្លៃដើម), `unique()` (មិនឱ្យជាន់គ្នា) (ជួយឱ្យអ្នកអាចគ្រប់គ្រងគុណភាពទិន្នន័យបានតាំងពីកម្រិត Database)។'
              ],
              code: 'use Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nSchema::create("products", function (Blueprint $table) {\n    $table->id();\n    $table->string("name")->unique();\n    $table->decimal("price", 10, 2)->default(0);\n    $table->text("description")->nullable();\n    $table->timestamps();\n});',
              language: 'php',
              animation: 'schema_builder'
            },
            {
              id: '5.2.4',
              title: 'Running Migrations (ការដំណើរការ Migration)',
              type: 'code',
              content: [
                '**php artisan migrate**: ដំណើរការរាល់ Migrations ដែលមិនទាន់បាន Run ដើម្បីបង្កើត Tables ក្នុង Database (វាជាជំហានចុងក្រោយដើម្បីយក Structure ដែលអ្នកបានសរសេរទៅបង្កើតជា Table ពិតប្រាកដ)។',
                '**Rollback**: ប្រើ `migrate:rollback` ដើម្បីត្រឡប់ក្រោយ (Undo) ការផ្លាស់ប្តូរចុងក្រោយបំផុត (ជួយឱ្យអ្នកអាចកែសម្រួលកំហុសឆ្គងដែលបានបង្កើតក្នុង Migration ចុងក្រោយបាន)។',
                '**Fresh Start**: `migrate:fresh` នឹងលុប Tables ទាំងអស់ចោល រួចបង្កើតឡើងវិញទាំងអស់ (ប្រើក្នុងពេលអភិវឌ្ឍដើម្បីសម្អាត Database ឱ្យស្អាតដូចដើមវិញ)។'
              ],
              code: '# ១. បង្កើតតារាងតាម Migration\nphp artisan migrate\n\n# ២. ត្រឡប់ក្រោយ ១ ជំហាន\nphp artisan migrate:rollback\n\n# ៣. បង្ហាញស្ថានភាព Migrations ទាំងអស់\nphp artisan migrate:status',
              language: 'bash',
              insight: 'ប្រើ `php artisan migrate:status` ដើម្បីឆែកមើលថា តើមាន File ណាខ្លះដែលមិនទាន់បាន Run ចូល Database។',
              animation: 'artisan_migrate'
            },
            {
              id: '5.2.5',
              title: 'Rolling Back Migrations (ការដកថយ Migration)',
              type: 'code',
              content: [
                '**php artisan migrate:rollback**: បោះជំហានថយក្រោយ 1 ជំហាន (Undo) ដោយលុប Table ដែលបានបង្កើតចុងក្រោយ (វាមានប្រយោជន៍ណាស់នៅពេលអ្នកចង់កែប្រែ Structure បន្ទាប់ពី Run រួច)។',
                '**php artisan migrate:rollback --step=5**: បោះជំហានថយក្រោយចំនួន 5 ជំហាន (ឧទាហរណ៍៖ ប្រសិនបើអ្នកទើប Run 5 Migrations ចុងក្រោយ វានឹងលុបទាំងអស់)។',
                '**php artisan migrate:reset**: លុប Table ចេញទាំងអស់ រួច Run ឡើងវិញទាំងអស់ (មានប្រយោជន៍នៅពេលចង់ចាប់ផ្ដើម Database ឡើងវិញ)។',
                '**php artisan migrate:fresh**: លុប Table ចេញទាំងអស់ រួច Run ឡើងវិញទាំងអស់ (ដូចនឹង reset ដែរ ប៉ុន្តែអាចប្រើជាមួយ `--seed` ដើម្បីបញ្ចូលទិន្នន័យដើមបាន)។'
              ],
              code: `# ១. ដកថយ 1 ជំហាន (Undo last batch)
php artisan migrate:rollback

# ២. ដកថយ 5 ជំហាន (Undo specific number of batches)
php artisan migrate:rollback --step=5

# ៣. លុប Table ទាំងអស់ រួច Run ឡើងវិញទាំងអស់
php artisan migrate:reset

# ៤. លុប Table ទាំងអស់ រួច Run ឡើងវិញ ព្រមទាំង Seed Data
php artisan migrate:fresh --seed`,
              language: 'bash',
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
                '**Eloquent** គឺជា ORM (Object-Relational Mapping) របស់ Laravel ដែលធ្វើឱ្យការធ្វើការជាមួយ Database កាន់តែងាយស្រួល។ (វាបម្លែងទិន្នន័យពី Database ឱ្យទៅជា PHP Objects ដែលយើងអាចប្រើប្រាស់បានយ៉ាងសាមញ្ញ)',
                'រាល់ Table ក្នុង Database នឹងមាន Model តំណាងមួយ ដែលអនុញ្ញាតឱ្យយើងទាញ និងគ្រប់គ្រងទិន្នន័យបានយ៉ាងមានរចនាសម្ព័ន្ធ (ជួយឱ្យអ្នកមិនចាំបាច់សរសេរ Query វែងៗដែលពិបាកអាន)។',
                'អ្នកអាចប្រើ PHP Code ដើម្បី Query Database ដោយផ្ទាល់តាមរយៈ Eloquent (ធ្វើឱ្យកូដរបស់អ្នកមើលទៅស្អាត ងាយយល់ និងមានសុវត្ថិភាពខ្ពស់)។'
              ],
              animation: 'eloquent_orm',
              insight: 'Laravel កំណត់ឱ្យយើងដាក់ Model ក្នុង folder `app/Models` តាមស្តង់ដារ។'
            },
            {
              id: '5.3.1',
              title: 'Creating Models',
              type: 'code',
              content: [
                'Models ស្ថិតនៅក្នុង Folder `app/Models` ដែលប្រើសម្រាប់តំណាងឱ្យ Tables ក្នុង Database (វាជាចំណុចកណ្ដាលនៃការទាក់ទងទិន្នន័យរវាង Code របស់អ្នក និង Database)។',
                'តាមគោលការណ៍ Laravel: Table ប្រើពហុវចនៈ (ឧទាហរណ៍ `posts`) ខណៈ Model ប្រើឯកវចនៈ (ឧទាហរណ៍ `Post`) (ការគោរពតាមគោលការណ៍នេះ ជួយឱ្យ Laravel ស្គាល់ទំនាក់ទំនងរវាងគ្នាដោយស្វ័យប្រវត្តិ)។'
              ],
              code: '# បង្កើត Model តែមួយ\nphp artisan make:model Product\n\n# បង្កើត Model ព្រមទាំង Migration និង Controller ក្នុងពេលតែមួយ\nphp artisan make:model Product -mc',
              language: 'bash',
              animation: 'model_creation'
            },
            {
              id: '5.3.2',
              title: 'Mass Assignment',
              type: 'code',
              content: [
                'ដើម្បីធានាសុវត្ថិភាព Laravel តម្រូវឱ្យយើងកំណត់ជាមុនថា Column ណាខ្លះអាចអនុញ្ញាតឱ្យបញ្ចូលទិន្នន័យបាន។ (ដើម្បីការពារ Hacker មិនឱ្យបញ្ចូលទិន្នន័យទៅកាន់ Column សំខាន់ៗដែលយើងមិនចង់ឱ្យប៉ះពាល់)',
                'យើងប្រើ `$fillable` ដើម្បីកំណត់ Fields ដែលអាច Mass Assign បាន និងការពារការបញ្ចូលទិន្នន័យខុសប្រភេទ (វាជាខែលការពារសុវត្ថិភាពកម្រិត Model ដ៏មានប្រសិទ្ធភាពបំផុត)។'
              ],
              code: 'namespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Product extends Model {\n    // កំណត់ Column ដែលអនុញ្ញាត\n    protected $fillable = ["name", "price", "description"];\n}',
              language: 'php',
              insight: 'ការប្រើ `$fillable` ជួយការពារពី "Mass Assignment Vulnerability" ដែលជាបញ្ហាសុវត្ថិភាពចម្បង។',
              animation: 'mass_assignment'
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
                '**CRUD** តំណាងឱ្យសកម្មភាពគ្រឹះក្នុងការគ្រប់គ្រងទិន្នន័យ៖ Create (បង្កើត), Read (អាន/មើល), Update (កែប្រែ) និង Delete (លុប)។ (វាជាមូលដ្ឋានគ្រឹះនៃរាល់ Application ទាំងអស់នៅលើពិភពលោក)',
                '**Eloquent** ធ្វើឱ្យការអនុវត្ត CRUD កាន់តែងាយស្រួល និងរហ័ស ដោយអាចធ្វើការជាមួយ Database តាមរយៈ PHP Code (ជួយឱ្យអ្នកអាចបង្កើតមុខងារគ្រប់គ្រងទិន្នន័យបានដោយប្រើកូដត្រឹមតែប៉ុន្មានជួរប៉ុណ្ណោះ)។'
              ],
              insight: 'ការយល់ដឹងអំពី CRUD គឺចាំបាច់សម្រាប់អ្នកអភិវឌ្ឍន៍ backend គ្រប់រូប។'
            },
            {
              id: '5.4.1',
              title: 'Create & Read',
              type: 'code',
              content: [
                '**Create**: ការបន្ថែមទិន្នន័យថ្មី ដូចជាការចុះឈ្មោះសមាជិក ឬការដាក់លក់ផលិតផលថ្មី។ (ជួយឱ្យអ្នកអាចរក្សាទុកព័ត៌មានដែលអ្នកប្រើប្រាស់បញ្ជូនមកពី Frontend បានយ៉ាងរលូន)',
                '**Read**: ការទាញយកទិន្នន័យមកបង្ហាញ គឺជាការស្វែងរក និងបង្ហាញព័ត៌មានទៅកាន់ User។ (ជួយឱ្យកម្មវិធីរបស់អ្នកបង្ហាញទិន្នន័យពិតចេញពី Database ដូចជា បញ្ជីអត្ថបទ ឬព័ត៌មានផ្ទាល់ខ្លួន)',
                'យើងអាចប្រើ Methods ដូចជា `all()`, `find()` ឬ `where()` អាស្រ័យទៅតាមតម្រូវការជាក់ស្តែង (ជួយឱ្យការស្វែងរកទិន្នន័យចំគោលដៅធ្វើឡើងបានយ៉ាងងាយស្រួល និងមានប្រសិទ្ធភាពបំផុត)។'
              ],
              code: '// បង្កើតថ្មី\nProduct::create(["name" => "Laptop", "price" => 999]);\n\n// ទាញយកទាំងអស់\n$products = Product::all();\n\n// ស្វែងរកតាម ID\n$item = Product::find(1);\n\n// ទាញយកតាមលក្ខខណ្ឌ\n$cheapItems = Product::where("price", "<", 500)->get();',
              language: 'php',
              insight: 'Eloquent នឹងបម្លែងលទ្ធផលពី Database ឱ្យទៅជា Objects ឬ Collections ដែលងាយស្រួលប្រើប្រាស់បំផុត។'
            },
            {
              id: '5.4.2',
              title: 'Update & Delete',
              type: 'code',
              content: [
                '**Update**: ការកែប្រែព័ត៌មានដែលមានស្រាប់ ដូចជាការប្តូរតម្លៃផលិតផល ឬការកែព័ត៌មានសមាជិក។ (ជួយឱ្យទិន្នន័យក្នុង Database របស់អ្នកមានភាពទាន់សម័យ និងត្រឹមត្រូវជានិច្ចទៅតាមការផ្លាស់ប្តូរជាក់ស្តែង)',
                '**Delete**: ការលុបទិន្នន័យដែលលែងត្រូវការ ឬទិន្នន័យដែលបានបញ្ចូលខុសចេញពីប្រព័ន្ធ។ (ជួយឱ្យ Database របស់អ្នកមានរបៀបរៀបរយ និងមិនមានទិន្នន័យឥតប្រយោជន៍ដែលនាំឱ្យកម្មវិធីដើរយឺត)',
                'រាល់ការកែប្រែ ឬលុប ត្រូវតែធ្វើឡើងលើ Record ជាក់លាក់ណាមួយដែលយើងបានស្វែងរកឃើញ (ធានាថាមិនមានការប៉ះពាល់ដល់ទិន្នន័យផ្សេងទៀតដែលមិនពាក់ព័ន្ធ)។'
              ],
              code: '// ការកែប្រែ (Update)\n$item = Product::find(1);\n$item->update(["price" => 899]);\n\n// ការលុប (Delete)\n$item->delete();\n\n// លុបតាមរយៈ ID ផ្ទាល់\nProduct::destroy(2);',
              language: 'php',
              insight: 'ចងចាំ៖ រាល់ពេលប្រើ update() ឬ delete() ត្រូវប្រាកដថាអ្នកបានហៅ find() ឬ where() ឱ្យបានត្រឹមត្រូវដើម្បីកុំឱ្យប៉ះពាល់ទិន្នន័យខុសជួរ។'
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
                'ជួនកាល Eloquent អាចដំណើរការយឺតបន្តិច នៅពេលដែល Query មានភាពស្មុគស្មាញ ឬទិន្នន័យមានបរិមាណធំខ្លាំង។ (ក្នុងករណីបែបនេះ យើងត្រូវការឧបករណ៍ដែលរត់លឿនជាងមុនដើម្បីរក្សាល្បឿនរបស់ App)',
                '**Query Builder** ផ្ដល់ល្បឿនលឿនជាង និងអនុញ្ញាតឱ្យគ្រប់គ្រង SQL បានកាន់តែជិតស្និទ្ធ (ស័ក្តិសមបំផុតសម្រាប់កិច្ចការងារដែលត្រូវការល្បឿនខ្ពស់បំផុត និងការគ្រប់គ្រងទិន្នន័យធំៗ)។',
                'វាស័ក្តិសមសម្រាប់ការធ្វើ Report ស្មុគស្មាញ ឬការដំណើរការទិន្នន័យធំៗរាប់លានជួរ (ជួយឱ្យ Server មិនគាំងនៅពេលត្រូវដោះស្រាយទិន្នន័យច្រើនក្នុងពេលតែមួយ)។'
              ],
            },
            {
              id: '5.5.1',
              title: 'Basic Query Builder',
              type: 'code',
              content: [
                'ប្រើ `DB` Facade ដើម្បីគ្រប់គ្រង និងប្រតិបត្តិ SQL Queries ដោយផ្ទាល់ (វាជាវិធីដែលផ្ដល់នូវថាមពលខ្លាំងបំផុតក្នុងការបញ្ជា Database ឱ្យធ្វើការងារតាមចិត្តរបស់អ្នក)។',
                'លទ្ធផលដែលបានមកវិញនឹងជា Array នៃ Plain Objects (StdClass) ដែលងាយស្រួលក្នុងការចូលប្រើទិន្នន័យ។ (វាមានល្បឿនលឿនព្រោះវាមិនចាំបាច់បង្កើតជា Model Instance ស្មុគស្មាញដូច Eloquent)'
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