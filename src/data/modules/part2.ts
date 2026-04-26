import { Table } from 'lucide-react';
import { Part } from '../types';

export const part2: Part = {
  id: 'part-2',
  title: 'Part 2: Core Laravel Concepts',
  modules: [
    {
      id: 'module-3',
      title: 'Module 3: Routing and Controllers',
      titleEn: 'Routing and Controllers',
      icon: 'Waypoints',
      color: '#f59e0b',
      lessons: [
        {
          id: '3.1',
          title: 'Understanding Routing',
          titleEn: 'Understanding Routing',
          duration: '30 mins',
          level: 'Core',
          slides: [
            {
              id: '3.1.0',
              title: 'The Entry Points',
              titleEn: 'The Entry Points',
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
              titleEn: 'Route Files',
              type: 'concept',
              content: [
                '**routes/web.php**: សម្រាប់ Web Interface ទូទៅ (រួមបញ្ចូលមុខងារការពារដូចជា Session និង CSRF protection ដើម្បីធានាសុវត្ថិភាពសម្រាប់អ្នកប្រើប្រាស់ទូទៅ)។',
                '**routes/api.php**: សម្រាប់ Stateless APIs (ប្រើសម្រាប់បញ្ជូនទិន្នន័យទៅកាន់ Mobile App ឬ Frontend Framework ផ្សេងៗដោយមិនចាំបាច់មាន Session)។',
                '**routes/console.php**: សម្រាប់បង្កើត Command ផ្ទាល់ខ្លួនក្នុង Artisan CLI (ជួយឱ្យអ្នកអាចបង្កើតការងារស្វ័យប្រវត្តិតាមរយៈ Command Line បានយ៉ាងងាយស្រួល)។'
              ],
              useCase: 'Organizing endpoints cleanly by their environment (Web vs API) to prevent a messy codebase.',
              animation: 'route_files'
            },
            {
              id: '3.1.2',
              title: 'HTTP Methods (ប្រភេទនៃ Requests)',
              titleEn: 'HTTP Methods',
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
              useCase: 'Building a RESTful CRUD application where GET fetches data, POST saves it, PUT updates it, and DELETE removes it.',
              insight: 'ការប្រើប្រាស់ HTTP Methods ឱ្យបានត្រឹមត្រូវតាមស្ដង់ដារ RESTful នឹងធ្វើឱ្យ API របស់អ្នកមានសណ្ដាប់ធ្នាប់ និងងាយស្រួលយល់។',
              animation: 'laravel_http_methods'
            },
            {
              id: '3.1.3',
              title: 'Route Parameters (ការបញ្ជូនទិន្នន័យតាម URL)',
              titleEn: 'Route Parameters',
              type: 'code',
              content: [
                '**Required Parameters**: `{id}` គឺដាច់ខាតត្រូវតែមានភ្ជាប់មកជាមួយ URL (បើមិនដូច្នោះទេ Laravel នឹងបង្ហាញកំហុស 404 ព្រោះវារកផ្លូវមិនឃើញ)។',
                '**Optional Parameters**: `{name?}` អាចមាន ឬមិនមានក៏បាន (ប្រើសញ្ញា "?" និងកំណត់តម្លៃ default ក្នុង Function ដើម្បីកុំឱ្យកម្មវិធីគាំងនៅពេលគ្មានទិន្នន័យបញ្ជូនមក)។',
                '**Regular Expression Constraints**: យើងអាចកំណត់លក្ខខណ្ឌឱ្យ Parameter ឱ្យកាន់តែច្បាស់លាស់ (ឧទាហរណ៍៖ កំណត់ឱ្យ `{id}` ត្រូវតែជាលេខប៉ុណ្ណោះ ដើម្បីការពារការបញ្ចូលទិន្នន័យខុសប្រភេទ)។'
              ],
              code: '<?php\n// ១. Required Parameter\nRoute::get("/user/{id}", function ($id) {\n    return "User ID: " . $id;\n});\n\n// ២. Optional Parameter ជាមួយ Default Value\nRoute::get("/search/{term?}", function ($term = "all") {\n    return "Searching for: " . $term;\n});\n\n// ៣. បន្ថែមលក្ខខណ្ឌ (Constraints)\nRoute::get("/profile/{username}", function ($username) {\n    return "Profile of: " . $username;\n})->where("username", "[A-Za-z]+"); // អនុញ្ញាតតែអក្សរប៉ុណ្ណោះ\n?>',
              language: 'php',
              useCase: 'Viewing a specific user profile by passing their ID (e.g., /users/5) or filtering search results (/search/shoes).',
              insight: 'Parameters គឺជាវិធីដែលសាមញ្ញបំផុតក្នុងការផ្ទេរអត្តសញ្ញាណ (ID) ពី URL ទៅកាន់ Backend ដើម្បីទាញយកទិន្នន័យមកបង្ហាញ។',
              animation: 'route_parameters'
            },
            {
              id: '3.1.4',
              title: 'Named Routes (ការដាក់ឈ្មោះផ្លូវ)',
              titleEn: 'Named Routes',
              type: 'code',
              content: [
                '**Semantic Naming**: ការដាក់ឈ្មោះឱ្យ Route ជួយឱ្យយើងហៅវាប្រើបានងាយស្រួលក្នុង Views ឬ Controllers (ឧទាហរណ៍៖ ប្រើ `route("profile")` ជំនួសឱ្យការសរសេរ URL វែងៗដោយដៃ)។',
                '**Flexibility**: ប្រសិនបើអ្នកចង់ប្តូរ URL ពី `/user/profile` ទៅ `/my-profile` អ្នកគ្រាន់តែប្តូរក្នុង Route file តែមួយកន្លែងប៉ុណ្ណោះ (កន្លែងផ្សេងទៀតដែលហៅតាមឈ្មោះ នឹងប្តូរតាមដោយស្វ័យប្រវត្តិ)។',
                '**Redirecting**: ការ Redirect ទៅកាន់ឈ្មោះ Route គឺមានសុវត្ថិភាពជាងការប្រើ URL ផ្ទាល់ (ជួយការពារបញ្ហាដាច់ Link នៅពេលដែលអ្នករៀបចំរចនាសម្ព័ន្ធ URL ឡើងវិញ)។'
              ],
              code: '<?php\n// ១. កំណត់ឈ្មោះ Route\nRoute::get("/user/settings", [SettingsController::class, "index"])->name("settings.edit");\n\n// ២. ការហៅប្រើក្នុង Blade View\n// <a href="{{ route("settings.edit") }}">កែប្រែការកំណត់</a>\n\n// ៣. ការហៅប្រើក្នុង Controller\nreturn redirect()->route("settings.edit");\n?>',
              language: 'php',
              useCase: 'Generating links dynamically so that if the URL changes from /user/settings to /account/settings, links won\'t break.',
              insight: 'Named Routes ជួយការពារបញ្ហា "Broken Links" នៅពេលដែល Structure របស់ URL ត្រូវបានផ្លាស់ប្តូរក្នុងពេលអភិវឌ្ឍ។',
              animation: 'named_routes'
            },
            {
              id: '3.1.5',
              title: 'Groups & Middleware (ការចាត់ក្រុម និងតម្រង)',
              titleEn: 'Groups & Middleware',
              type: 'code',
              content: [
                '**Middleware**: ដើរតួជា "អ្នកយាមទ្វារ" ដើម្បីត្រួតពិនិត្យ Request មុនចូលដល់កម្មវិធី (ឧទាហរណ៍៖ `auth` middleware នឹងឆែកមើលថា តើ User បាន Login រួចរាល់ហើយឬនៅ)។',
                '**Route Groups**: អនុញ្ញាតឱ្យយើងដាក់ Settings រួមគ្នាទៅលើ Routes ច្រើនក្នុងពេលតែមួយ (ជួយឱ្យកូដរបស់អ្នកខ្លី ស្អាត និងមិនចាំបាច់សរសេរការកំណត់ដដែលៗច្រើនដង)។',
                '**Prefixing**: បន្ថែមពាក្យនៅខាងមុខ URL ទាំងអស់ក្នុងក្រុម (ឧទាហរណ៍៖ បន្ថែម `admin` ទៅមុខ URL ដូចជា `/admin/users` និង `/admin/posts` ដើម្បីបែងចែកតំបន់គ្រប់គ្រងឱ្យច្បាស់លាស់)។'
              ],
              code: '<?php\n// ក្រុមដែលទាមទារការ Login (Auth Middleware)\nRoute::middleware(["auth"])->group(function () {\n    Route::get("/dashboard", [DashboardController::class, "index"]);\n    Route::get("/profile", [ProfileController::class, "edit"]);\n});\n\n// ក្រុមដែលមានពាក្យ "admin" នៅខាងមុខ URL\nRoute::prefix("admin")->group(function () {\n    Route::get("/users", [AdminController::class, "users"]);\n    Route::get("/reports", [AdminController::class, "reports"]);\n});\n?>',
              language: 'php',
              useCase: 'Securing an entire Admin dashboard area by applying the auth middleware and an /admin prefix at once.',
              insight: 'ការប្រើប្រាស់ Groups ជួយឱ្យ `web.php` របស់អ្នកមានសណ្ដាប់ធ្នាប់ ងាយស្រួលអាន និងមិនសរសេរកូដជាន់គ្នា។',
              animation: 'route_groups'
            },
            {
              id: '3.1.6',
              title: 'Route Model Binding',
              titleEn: 'Route Model Binding',
              type: 'code',
              content: [
                '**Implicit Binding**: ជាមុខងារពិសេសរបស់ Laravel ដែលទាញយក Model ពី Database ដោយស្វ័យប្រវត្តិ ផ្អែកលើ ID ក្នុង URL (ជួយសន្សំសំចៃការសរសេរកូដ `find()` ឬ `findOrFail()` ដោយដៃ)។',
                '**Custom Key**: យើងអាចប្រាប់ Laravel ឱ្យស្វែងរកតាម Column ផ្សេងក្រៅពី ID បាន (ឧទាហរណ៍៖ ស្វែងរកតាម `slug` សម្រាប់ URL ដែលងាយស្រួលអាន ដូចជា `/posts/my-first-post`)។',
                '**Automatic 404**: ប្រសិនបើវារកមិនឃើញ Model ដែលត្រូវនឹង ID នោះទេ វានឹងបង្ហាញទំព័រ 404 (Not Found) ដោយស្វ័យប្រវត្តិ។'
              ],
              code: '<?php\n// ១. Implicit Binding ធម្មតា (ស្វែងរកតាម ID)\nRoute::get("/users/{user}", function (User $user) {\n    return $user->email;\n});\n\n// ២. ស្វែងរកតាម Key ផ្សេង (Custom Key)\nRoute::get("/posts/{post:slug}", function (Post $post) {\n    return $post->title;\n});\n?>',
              language: 'php',
              useCase: 'Automatically fetching a Post model based on the slug in the URL so you don\'t have to write the fetch query manually.',
              insight: 'Route Model Binding ធ្វើឱ្យ Controller របស់អ្នកកាន់តែខ្លី និងស្រឡះ។'
            },
            {
              id: '3.1.7',
              title: 'Fallback Routes',
              titleEn: 'Fallback Routes',
              type: 'code',
              content: [
                '**Catch-All**: Route::fallback() នឹងត្រូវបានដំណើរការនៅពេលដែលគ្មាន Route ណាផ្សេងទៀតត្រូវនឹង URL ដែលបានស្នើសុំ (វាជាអ្នកទទួលខុសត្រូវចុងក្រោយនៅពេលអ្នកប្រើប្រាស់វាយ URL ខុស)។',
                '**Custom 404**: វាត្រូវបានប្រើជាទូទៅដើម្បីបង្កើតទំព័រ 404 Not Found ដែលមានរចនាបថផ្ទាល់ខ្លួន ឬដើម្បីបញ្ជូនអ្នកប្រើប្រាស់ទៅកាន់ទំព័រដើមវិញដោយស្វ័យប្រវត្តិ។'
              ],
              code: 'Route::fallback(function () {\n    return response()->view("errors.custom-404", [], 404);\n});',
              language: 'php',
              insight: 'Fallback route គួរតែត្រូវបានសរសេរនៅចុងបញ្ចប់គេបង្អស់នៃឯកសារ routes/web.php របស់អ្នក។'
            },
            {
              id: '3.1.8',
              title: 'Real-world Demo: Admin Panel Routes',
              titleEn: 'Admin Panel Routes Demo',
              type: 'code',
              content: [
                '**Structured Routes**: ឧទាហរណ៍នៃការរៀបចំ Route សម្រាប់ប្រព័ន្ធគ្រប់គ្រង (Admin Panel) ដែលមានការការពារ និង Prefix។',
                '**Clean Organization**: ប្រើ Route Groups ដើម្បីបែងចែកតំបន់ Admin ឱ្យដាច់ពី User ធម្មតា។'
              ],
              code: 'Route::middleware(["auth", "admin"])->prefix("admin")->name("admin.")->group(function () {\n    // URL: /admin/dashboard, Name: admin.dashboard\n    Route::get("/dashboard", [AdminController::class, "index"])->name("dashboard");\n\n    // URL: /admin/users, Name: admin.users.index\n    Route::get("/users", [UserController::class, "index"])->name("users.index");\n});',
              language: 'php'
            },
            {
              id: '3.1.9',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Named Routes**: ប្រើឈ្មោះ Route ជានិច្ច ដើម្បីងាយស្រួលប្ដូរ URL នៅពេលក្រោយ។',
                '**Route Grouping**: ចាត់ក្រុម Routes ដែលមាន Middleware ឬ Prefix ដូចគ្នាឱ្យមានរបៀប។',
                '**Model Binding**: ប្រើ Route Model Binding ដើម្បីកាត់បន្ថយការសរសេរកូដទាញទិន្នន័យ។'
              ],
              insight: 'Route ដែលរៀបចំបានល្អ ធ្វើឱ្យ App របស់អ្នកងាយស្រួលថែទាំ និងពង្រីក។'
            }
          ]
        },
        {
          id: '3.2',
          title: 'Controllers',
          titleEn: 'Controllers',
          duration: '35 mins',
          level: 'Core',
          slides: [
            {
              id: '3.2.0',
              title: 'Organizing Your Logic',
              titleEn: 'Organizing Logic',
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
              titleEn: 'Creating Controllers',
              type: 'code',
              content: [
                '**Artisan Command**: យើងប្រើ `php artisan make:controller` ដើម្បីបង្កើត Controller file ថ្មីភ្លាមៗ (ជួយសន្សំសំចៃពេលវេលា និងធានាថា File ត្រូវបានបង្កើតឡើងតាមស្ដង់ដាររបស់ Laravel)។',
                '**Standard Controller**: ជា Controller ទទេ ដែលយើងត្រូវសរសេរ Methods ដោយខ្លួនឯង (ស័ក្តិសមសម្រាប់កិច្ចការងារទូទៅដែលមិនមែនជាការងារ CRUD)។',
                '**Resource Controller**: បង្កើតមកជាមួយ Methods ស្ដង់ដារចំនួន ៧ សម្រាប់ធ្វើ CRUD (ជួយឱ្យអ្នកអាចបង្កើតមុខងារ បង្កើត, អាន, កែប្រែ និងលុបទិន្នន័យ បានយ៉ាងរហ័សបំផុត)។'
              ],
              code: '# ១. បង្កើត Controller ធម្មតា\nphp artisan make:controller UserController\n\n# ២. បង្កើត Resource Controller (លឿនបំផុតសម្រាប់ CRUD)\nphp artisan make:controller PostController --resource\n\n# ៣. បង្កើត Controller ក្នុង Folder ជាក់លាក់\nphp artisan make:controller Admin/DashboardController',
              language: 'bash',
              useCase: 'Generating a skeleton class for managing Products, complete with standard index/create/store/show/edit/update/destroy methods.',
              insight: 'ការប្រើ `--resource` ជួយសន្សំសំចៃពេលវេលាច្រើន ព្រោះវាបង្កើត Structure សម្រាប់ CRUD ឱ្យយើងស្រាប់។'
            },
            {
              id: '3.2.2',
              title: 'The Request Object (ការគ្រប់គ្រងទិន្នន័យបញ្ជូន)',
              titleEn: 'The Request Object',
              type: 'code',
              content: [
                '**Dependency Injection**: Laravel នឹងបញ្ជូន Request instance មកឱ្យយើងដោយស្វ័យប្រវត្តិក្នុង Controller methods (ជួយឱ្យអ្នកអាចចូលប្រើព័ត៌មានគ្រប់យ៉ាងដែល User បានផ្ញើមកបានភ្លាមៗ)។',
                '**Input Retrieval**: យើងប្រើ `$request->input()` ឬ `$request->all()` ដើម្បីទាញយកទិន្នន័យដែល User ផ្ញើមក (ដូចជាអត្ថបទក្នុង Form ឬតម្លៃដែលបានជ្រើសរើសផ្សេងៗ)។',
                '**Validation Ready**: Request object នេះក៏ត្រូវបានប្រើសម្រាប់ធ្វើការ Validate ទិន្នន័យមុននឹងរក្សាទុកផងដែរ (ធានាថាទិន្នន័យដែលចូលមកមានភាពត្រឹមត្រូវ និងសុវត្ថិភាព)។'
              ],
              code: '<?php\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\n\nclass PostController extends Controller {\n    public function store(Request $request) {\n        // ទាញយកទិន្នន័យតាមឈ្មោះ Key\n        $title = $request->input("title");\n        \n        // ទាញយកទិន្នន័យទាំងអស់ជា Array\n        $allData = $request->all();\n        \n        return "ទទួបានទិន្នន័យ: " . $title;\n    }\n}\n?>',
              language: 'php',
              useCase: 'Extracting user input from a submitted registration form (like email and password) before saving to the database.',
              insight: 'Request object ផ្ទុកព័ត៌មានគ្រប់យ៉ាងអំពី HTTP request រួមមាន៖ Inputs, Files, Cookies, និង Headers។',
              animation: 'laravel_request_object'
            },
            {
              id: '3.2.3',
              title: 'Single Action Controllers',
              titleEn: 'Single Action Controllers',
              type: 'code',
              content: [
                '**__invoke Method**: ប្រសិនបើ Controller មួយមានតួនាទីតែមួយគត់ យើងអាចប្រើ Magic Method `__invoke` បាន (ធ្វើឱ្យកូដ Route កាន់តែខ្លី ដោយមិនបាច់បញ្ជាក់ឈ្មោះ Method)។',
                '**Focused Logic**: វាស័ក្តិសមបំផុតសម្រាប់សកម្មភាពដែលស្មុគស្មាញ ប៉ុន្តែឈរឯករាជ្យ ដូចជាការដំណើរការការទូទាត់ប្រាក់ (Payment Processing) ឬការនាំចេញទិន្នន័យ (Data Export)។'
              ],
              code: '<?php\n// ក្នុង Controller\nclass ProcessPaymentController extends Controller {\n    public function __invoke(Request $request) {\n        // កូដដំណើរការការទូទាត់ប្រាក់\n    }\n}\n\n// ក្នុង routes/web.php\nRoute::post("/pay", ProcessPaymentController::class);\n?>',
              language: 'php',
              insight: 'Single Action Controllers ជួយរក្សាគោលការណ៍ Single Responsibility Principle (SRP) បានយ៉ាងល្អ។'
            },
            {
              id: '3.2.4',
              title: 'The Response Object',
              titleEn: 'The Response Object',
              type: 'code',
              content: [
                'ក្រៅពីការបញ្ជូនទិន្នន័យទៅ View យើងក៏អាចផ្ញើលទ្ធផល (Response) ជាទម្រង់ផ្សេងៗបានយ៉ាងងាយស្រួល (ជាពិសេសនៅពេលយើងបង្កើត API)។',
                '**JSON Responses**: បម្លែង Array ឬ Object ទៅជា JSON ដោយស្វ័យប្រវត្តិជាមួយ `response()->json()`។',
                '**Redirects**: បញ្ជូនអ្នកប្រើប្រាស់ទៅកាន់ទំព័រផ្សេងទៀតជាមួយ `redirect()` ឬត្រឡប់ទៅទំព័រមុនជាមួយ `back()`។'
              ],
              code: 'public function store(Request $request) {\n    // ១. ត្រឡប់ជា JSON សម្រាប់ API\n    return response()->json(["message" => "ជោគជ័យ!"], 201);\n\n    // ២. បញ្ជូនទៅកាន់ Route ផ្សេង\n    return redirect()->route("home");\n\n    // ៣. ត្រឡប់ទៅទំព័រមុនជាមួយសារកំហុស\n    return back()->withErrors(["email" => "អ៊ីមែលមិនត្រឹមត្រូវ"]);\n}',
              language: 'php'
            },
            {
              id: '3.2.5',
              title: 'Real-world Demo: User Management Controller',
              titleEn: 'User Management Controller Demo',
              type: 'code',
              content: [
                '**Complete Logic**: ឧទាហរណ៍នៃ Controller ដែលមានមុខងារបង្ហាញបញ្ជីឈ្មោះ និងស្វែងរក User។',
                '**Dependency Injection**: បង្ហាញពីរបៀបប្រើ Request ដើម្បីទាញយកពាក្យគន្លឹះស្វែងរក។'
              ],
              code: 'class UserController extends Controller {\n    public function index(Request $request) {\n        $search = $request->query("search");\n\n        $users = User::when($search, function ($query, $search) {\n            return $query->where("name", "like", "%{$search}%");\n        })->paginate(10);\n\n        return view("admin.users.index", compact("users", "search"));\n    }\n}',
              language: 'php'
            },
            {
              id: '3.2.6',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Thin Controllers**: រក្សា Controller ឱ្យខ្លី និងស្រឡះ ដោយផ្ទេរ Logic ទៅកាន់ Models ឬ Services។',
                '**Resource Controllers**: ប្រើ "--resource" សម្រាប់មុខងារ CRUD ដើម្បីអនុវត្តតាមស្ដង់ដារ Laravel។',
                '**Dependency Injection**: ប្រើ Type Hinting ក្នុង Method ដើម្បីឱ្យ Laravel បញ្ជូន Objects មកឱ្យស្វ័យប្រវត្តិ។'
              ],
              insight: 'Controller គួរតែធ្វើការងារជាអ្នកសម្របសម្រួល ជាជាងអ្នកធ្វើការងារធ្ងន់ៗទាំងអស់។'
            }
          ]
        }
      ]
    },
    {
      id: 'module-4',
      title: 'Module 4: Views and Blade Engine',
      titleEn: 'Views and Blade Engine',
      icon: 'Layout',
      color: '#3b82f6',
      lessons: [
        {
          id: '4.1',
          title: 'Introduction to Blade',
          titleEn: 'Introduction to Blade',
          duration: '25 mins',
          level: 'Core',
          slides: [
            {
              id: '4.1.0',
              title: 'Welcome to Blade',
              titleEn: 'Welcome to Blade',
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
              titleEn: 'Creating Views via CLI',
              type: 'code',
              content: [
                'ក្នុង Laravel សម័យថ្មី យើងអាចបង្កើត View ដោយប្រើ Artisan Command បានយ៉ាងរហ័ស។ (ជួយកាត់បន្ថយការបង្កើត File និង Folder ដោយដៃដែលនាំឱ្យចំណាយពេលច្រើន)',
                'វានឹងបង្កើត File នៅក្នុង Folder ត្រឹមត្រូវឱ្យយើងដោយស្វ័យប្រវត្តិ។ (ធានាថា File ស្ថិតនៅទីតាំងត្រឹមត្រូវតាមស្ដង់ដាររបស់ Laravel)'
              ],
              code: '# បង្កើត View ឈ្មោះ welcome\nphp artisan make:view welcome\n\n# បង្កើតក្នុង Subfolder (users/index.blade.php)\nphp artisan make:view users.index',
              language: 'bash',
              useCase: 'Rapidly creating the HTML skeleton for a new dashboard page without manually clicking through folders.',
              insight: 'ប្រើ Command នេះដើម្បីជៀសវាងការបង្កើត File និង Folder ដោយដៃដែលនាំឱ្យខាតពេល។'
            },
            {
              id: '4.1.2',
              title: 'Basic Syntax & Directives (វាក្យសព្ទមូលដ្ឋាន)',
              titleEn: 'Basic Syntax & Directives',
              type: 'code',
              content: [
                '**Double Braces**: `{{ $data }}` ប្រើសម្រាប់បង្ហាញតម្លៃ Variables (ស្មើនឹងការប្រើ `echo` ក្នុង PHP ប៉ុន្តែវាមានសុវត្ថិភាពជាងព្រោះវាជួយការពារការលួចបញ្ចូលកូដអាក្រក់)។',
                '**Conditional Directives**: `@if`, `@elseif`, `@else`, `@endif` សម្រាប់ឆែកលក្ខខណ្ឌបង្ហាញ UI (ជួយឱ្យអ្នកអាចកំណត់បានថា តើ User ណាខ្លះដែលគួរឃើញប៊ូតុង ឬព័ត៌មានជាក់លាក់ណាមួយ)។',
                '**Loop Directives**: `@foreach`, `@for`, `@while` សម្រាប់បង្ហាញទិន្នន័យជាបញ្ជី (ស័ក្តិសមបំផុតសម្រាប់ការបង្ហាញតារាងទិន្នន័យ ឬបញ្ជីឈ្មោះផលិតផលចេញពី Database)។',
                '**Empty State**: `@forelse` គឺជារង្វិលជុំដែលជួយបង្ហាញសារ "មិនមានទិន្នន័យ" បើ Array ទទេ (ជួយឱ្យ Website របស់អ្នកមើលទៅមានអាជីព ទោះបីជាគ្មានទិន្នន័យបង្ហាញក៏ដោយ)។'
              ],
              code: '<h1>សួស្តី, {{ $user->name }}</h1>\n\n@if($isAdmin)\n    <span class="badge">Admin</span>\n@endif\n\n<ul>\n    @forelse($tasks as $task)\n        <li>{{ $task->title }}</li>\n    @empty\n        <li>មិនមានកិច្ចការឡើយ</li>\n    @endforelse\n</ul>',
              language: 'php',
              useCase: 'Displaying a table of users, showing an "Edit" button only if the current user is an admin.',
              insight: 'Blade Directives ជួយឱ្យកូដ HTML របស់អ្នកស្អាត និងងាយស្រួលអានជាងការសរសេរ PHP បុរាណ។'
            },
            {
              id: '4.1.3',
              title: 'Escaping Data (សុវត្ថិភាពទិន្នន័យ)',
              titleEn: 'Escaping Data',
              type: 'concept',
              content: [
                '**Safe Display**: `{{ $data }}` នឹងបម្លែងតួអក្សរពិសេសទៅជាអក្សរសុវត្ថិភាព ដើម្បីទប់ស្កាត់ការវាយប្រហារ **XSS** (វាជាខែលការពារដ៏សំខាន់បំផុត ដើម្បីកុំឱ្យ Hacker បញ្ចូលកូដ JavaScript អាក្រក់មកក្នុង App របស់អ្នក)។',
                '**Raw Display**: `{!! $data !!}` ប្រើសម្រាប់បង្ហាញ HTML ដោយផ្ទាល់ (ប្រើតែនៅពេលអ្នកទុកចិត្តប្រភពទិន្នន័យប៉ុណ្ណោះ ដូចជាទិន្នន័យដែលចេញពី Admin Editor ផ្ទាល់ខ្លួន)។',
                '**Comment**: `{{-- នេះជា Comment --}}` នឹងមិនបង្ហាញនៅក្នុង HTML source code ដែល User ឃើញឡើយ (ជួយឱ្យអ្នកអាចកត់ចំណាំក្នុងកូដបានយ៉ាងមានសុវត្ថិភាព)។'
              ],
              useCase: 'Rendering blog post content formatted with HTML (using raw display), while safely displaying user comments (using escaped display).',
              insight: 'ច្បាប់មាស៖ កុំប្រើ `{!! !!}` ជាមួយទិន្នន័យដែលបញ្ចូលដោយ Users ជាដាច់ខាត!'
            },
            {
              id: '4.1.4',
              title: 'The $loop Variable (គ្រប់គ្រងរង្វិលជុំ)',
              titleEn: 'The $loop Variable',
              type: 'code',
              content: [
                '**Loop Context**: នៅពេលអ្នកប្រើ `@foreach` Blade នឹងបង្កើតអថេរ `$loop` ដោយស្វ័យប្រវត្តិ ដែលមានផ្ទុកព័ត៌មានមានប្រយោជន៍ជាច្រើនអំពីស្ថានភាពនៃរង្វិលជុំ។',
                '**Properties**: វាមាន Properties ដូចជា `$loop->first`, `$loop->last`, `$loop->iteration` (លេខរៀង), និង `$loop->count` ជាដើម។',
                '**Styling**: ជួយសម្រួលដល់ការដាក់ Style ខុសៗគ្នាសម្រាប់ធាតុដំបូង ធាតុចុងក្រោយ ឬលេខរៀងសេសគូដោយមិនបាច់សរសេរ Logic រាប់ដោយខ្លួនឯង។'
              ],
              code: '@foreach ($users as $user)\n    <div class="{{ $loop->first ? "bg-blue-100" : "bg-white" }}">\n        <span>ល.រ: {{ $loop->iteration }} / {{ $loop->count }}</span>\n        <h3>{{ $user->name }}</h3>\n        @if ($loop->last)\n            <p>នេះជាអ្នកប្រើប្រាស់ចុងក្រោយគេក្នុងបញ្ជី!</p>\n        @endif\n    </div>\n@endforeach',
              language: 'php',
              insight: 'អថេរ $loop ជួយសន្សំសំចៃពេលវេលាសរសេរកូដ Counter variables ដោយដៃ។'
            },
            {
              id: '4.1.5',
              title: 'Real-world Demo: Product Card Loop',
              titleEn: 'Product Card Loop Demo',
              type: 'code',
              content: [
                '**Practical Loop**: របៀបប្រើ `@forelse` ដើម្បីបង្ហាញបញ្ជីផលិតផល និងបង្ហាញសារព្រមានបើគ្មានទិន្នន័យ។',
                '**Currency Formatting**: ការប្រើ PHP function ក្នុង Blade ដើម្បីបង្ហាញតម្លៃលុយឱ្យស្អាត។'
              ],
              code: '<div class="grid grid-cols-3 gap-4">\n    @forelse($products as $product)\n        <div class="card">\n            <h3>{{ $product->name }}</h3>\n            <p>តម្លៃ: ${{ number_format($product->price, 2) }}</p>\n            <button>ទិញឥឡូវនេះ</button>\n        </div>\n    @empty\n        <p class="text-gray-500">សុំទោស មិនមានផលិតផលសម្រាប់បង្ហាញទេ។</p>\n    @endforelse\n</div>',
              language: 'php'
            },
            {
              id: '4.1.6',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Escaping**: ប្រើ "{{ }}" ជានិច្ចដើម្បីសុវត្ថិភាព និងប្រើ "{!! !!}" តែនៅពេលចាំបាច់បំផុត។',
                '**Directives**: ប្រើ "@forelse" ជំនួសឱ្យ "@foreach" ដើម្បីបង្ហាញសារនៅពេលគ្មានទិន្នន័យ។',
                '**Clean Views**: កុំសរសេរ SQL Query ក្នុង Blade View ជាដាច់ខាត។'
              ],
              insight: 'Blade ជួយឱ្យ UI Logic របស់អ្នកស្អាត និងងាយស្រួលអានសម្រាប់គ្រប់គ្នា។'
            }
          ]
        },
        {
          id: '4.2',
          title: 'Layouts and Components',
          titleEn: 'Layouts and Components',
          duration: '35 mins',
          level: 'Core',
          slides: [
            {
              id: '4.2.0',
              title: 'Layout Architecture',
              titleEn: 'Layout Architecture',
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
              titleEn: 'The Main Layout',
              type: 'code',
              content: [
                '**Centralization**: បង្កើត File តែមួយសម្រាប់រក្សាទុក HTML Structure រួម (ដូចជា Navbar, Footer, និងរាល់ការហៅ CSS/JS ផ្សេងៗដែលប្រើក្នុង App ទាំងមូល)។',
                '**Dynamic Areas**: ប្រើ `@yield("content")` ដើម្បីប្រាប់ Blade ថា "កន្លែងនេះនឹងត្រូវប្តូរ Content ទៅតាម Page" (ជួយឱ្យអ្នកអាចប្តូរតែផ្នែកកណ្តាលនៃ Website ដោយរក្សាទុកប្លង់មេឱ្យនៅដដែល)។',
                '**Titles**: យើងក៏អាចប្រើ `@yield("title")` ដើម្បីដាក់ចំណងជើង Page ឱ្យខុសៗគ្នា (ជួយឱ្យ Website របស់អ្នកមាន SEO ល្អ និងងាយស្រួលសម្គាល់នៅលើ Browser Tab)។'
              ],
              code: '<!-- resources/views/layouts/app.blade.php -->\n<html>\n<head>\n    <title>My App - @yield("title")</title>\n</head>\n<body>\n    <nav>Navigation Bar</nav>\n\n    <main>\n        @yield("content")\n    </main>\n\n    <footer>Footer 2024</footer>\n</body>\n</html>',
              language: 'php',
              useCase: 'Creating a master template that includes the site header, navigation menu, and footer so you don\'t have to copy-paste them on every page.'
            },
            {
              id: '4.2.2',
              title: 'Extending a Layout (ការប្រើប្រាស់ Layout មេ)',
              titleEn: 'Extending a Layout',
              type: 'code',
              content: [
                '**Involvement**: ប្រើ `@extends` ដើម្បីប្រាប់ថា Page នេះនឹងប្រើប្រាស់ Layout មេមួយណា (វាជាការភ្ជាប់ទំនាក់ទំនងរវាងទំព័រមាតិកា និងប្លង់មេនៃកម្មវិធី)។',
                '**Filling Content**: ប្រើ `@section` និង `@endsection` ដើម្បីបញ្ជូន Content ទៅដាក់ក្នុង `@yield` (ជួយឱ្យអ្នកអាចកំណត់ទីតាំងបង្ហាញព័ត៌មានឱ្យបានត្រឹមត្រូវតាមប្លង់ដែលបានគ្រោងទុក)។',
                '**Override**: យើងអាចបំពេញ Title ឬ SEO Tags តាមរយៈ `@section` ក្នុង Page នីមួយៗបានយ៉ាងងាយ (ជួយឱ្យទំព័រនីមួយៗមានលក្ខណៈពិសេសផ្ទាល់ខ្លួន ប៉ុន្តែនៅតែស្ថិតក្នុងប្លង់រួមតែមួយ)។'
              ],
              code: '<!-- resources/views/home.blade.php -->\n@extends("layouts.app")\n\n@section("title", "ទំព័រដើម")\n\n@section("content")\n    <h2>ស្វាគមន៍មកកាន់ទំព័រដើម!</h2>\n    <p>កូដត្រង់នេះនឹងត្រូវបង្ហាញក្នុង @yield("content") នៃ Layout មេ។</p>\n@endsection',
              language: 'php',
              useCase: 'Building a specific page like "About Us" or "Contact", injecting its unique content into the center of the master layout.',
              animation: 'blade_layout'
            },
            {
              id: '4.2.3',
              title: 'Including & Components (ការបំបែក UI តូចៗ)',
              titleEn: 'Including & Components',
              type: 'code',
              content: [
                '**@include**: ប្រើសម្រាប់ទាញយក File តូចៗមកដាក់បញ្ចូល (ឧទាហរណ៍៖ ការបំបែក Sidebar ឬ Navbar ឱ្យដាច់ដោយឡែក ដើម្បីឱ្យកូដក្នុង Layout មាមមិនមានភាពស្មុគស្មាញ)។',
                '**Blade Components**: ជាវិធីសាស្ត្រទំនើបសម្រាប់បង្កើត UI Elements ដែលអាចប្រើឡើងវិញបាន (Reusable) (ស័ក្តិសមបំផុតសម្រាប់បង្កើត ប៊ូតុង, Alert Box, ឬ Card ដែលអ្នកត្រូវប្រើច្រើនដងក្នុង Project)។',
                '**Slots**: Components អាចទទួល Content តាមរយៈ `$slot` ដែលធ្វើឱ្យវាមានភាពបត់បែនខ្ពស់ (អនុញ្ញាតឱ្យអ្នកបញ្ចូល Content ផ្សេងៗគ្នាទៅក្នុង Component តែមួយបានយ៉ាងងាយស្រួល)។'
              ],
              code: '<?php\n// ១. ការប្រើ @include\n@include("partials.navbar")\n\n// ២. ការប្រើ Blade Component (x-component-name)\n// បង្កើតដោយ: php artisan make:component Alert\n<x-alert type="error">\n    មានកំហុសក្នុងការរក្សាទុកទិន្នន័យ!\n</x-alert>\n?>',
              language: 'php',
              useCase: 'Reusing a designed "Save Button" or "Error Alert" across 50 different pages without rewriting the HTML classes.',
              insight: 'ប្រើ Components ជំនួស @include សម្រាប់ UI Elements ដែលមាន Logic ឬស្ទីលស្មុគស្មាញ។',
              animation: 'blade_components'
            },
            {
              id: '4.2.4',
              title: 'Real-world Demo: Admin Layout with Sidebar',
              titleEn: 'Admin Layout Demo',
              type: 'code',
              content: [
                '**Advanced Layout**: ការរៀបចំ Layout ស្មុគស្មាញដែលមានបែងចែក Sidebar និង Topbar។',
                '**Stack & Push**: ប្រើ `@stack` ដើម្បីអនុញ្ញាតឱ្យ Page នីមួយៗបន្ថែម Custom JS ឬ CSS ទៅក្នុង Header/Footer។'
              ],
              code: '<!-- main layout -->\n<div class="flex">\n    <aside> @include("layouts.sidebar") </aside>\n    <main>\n        <header> @include("layouts.topbar") </header>\n        <div class="p-6"> @yield("content") </div>\n    </main>\n</div>\n\n@stack("scripts") <!-- កន្លែងសម្រាប់ដាក់ JS បន្ថែមពី Page ផ្សេងៗ -->',
              language: 'php'
            },
            {
              id: '4.2.5',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Layout Inheritance**: ប្រើ "@extends" ដើម្បីកាត់បន្ថយការសរសេរ HTML គ្រោងដដែលៗ។',
                '**Blade Components**: បង្កើត Components សម្រាប់ UI elements ដែលប្រើច្រើនដង (Buttons, Cards)។',
                '**Stacks**: ប្រើ "@stack" និង "@push" ដើម្បីគ្រប់គ្រង Scripts និង Styles តាមទំព័រនីមួយៗ។'
              ],
              insight: 'រចនាសម្ព័ន្ធ Layout ល្អ ជួយឱ្យអ្នកកែសម្រួល Design របស់ App ទាំងមូលបានយ៉ាងលឿន។'
            }
          ]
        },
        {
          id: '4.3',
          title: 'Passing Data to Views',
          titleEn: 'Passing Data to Views',
          duration: '20 mins',
          level: 'Core',
          slides: [
            {
              id: '4.3.0',
              title: 'Communicating with Views',
              titleEn: 'Communicating with Views',
              type: 'intro',
              content: [
                'បន្ទាប់ពីទាញទិន្នន័យបានពី Controller យើងត្រូវបញ្ជូនវាទៅបង្ហាញនៅលើ Frontend (View)។ (ដើម្បីឱ្យ User អាចមើលឃើញព័ត៌មានដែលពួកគេត្រូវការ ដូចជាបញ្ជីឈ្មោះ ឬព័ត៌មានផ្ទាល់ខ្លួន)',
                'Laravel ផ្ដល់វិធីសាស្រ្តងាយៗសម្រាប់បញ្ជូន Variables ទៅកាន់ View ដើម្បីអាចប្រើបង្ហាញទិន្នន័យបានភ្លាមៗ។ (ជួយឱ្យការបង្ហាញទិន្នន័យមានភាពរលូន និងមានសុវត្ថិភាពបំផុត)'
              ]
            },
            {
              id: '4.3.1',
              title: 'The view() Helper',
              titleEn: 'The view() Helper',
              type: 'code',
              content: [
                'វិធីសាមញ្ញបំផុតគឺបញ្ជូន Data ជា Associative Array ក្នុង Parameter ទីពីរនៃ `view()`។ (វាអនុញ្ញាតឱ្យយើងផ្ទេរទិន្នន័យពី Controller ទៅកាន់ View បានយ៉ាងច្បាស់លាស់ និងងាយស្រួលប្រើក្នុង Blade Template)។'
              ],
              code: 'public function index() {\n    return view("profile", [\n        "username" => "Sokha",\n        "status" => "Active"\n    ]);\n}',
              language: 'php',
              useCase: 'Passing an explicit array of calculated statistics (e.g. total_sales, active_users) to a dashboard view.'
            },
            {
              id: '4.3.2',
              title: 'The compact() Helper',
              titleEn: 'The compact() Helper',
              type: 'code',
              content: [
                'ជាវិធីដែលពេញនិយមបំផុត ព្រោះវាខ្លី ងាយស្រួលអាន និងស្អាតជាងការសរសេរ Array ដោយដៃ។ (ជួយកាត់បន្ថយការសរសេរកូដដដែលៗ និងធ្វើឱ្យ Controller របស់អ្នកមើលទៅមានរបៀបរៀបរយ)',
                'Laravel នឹងបង្កើត Associative Array ដោយស្វ័យប្រវត្តិ ដោយយកឈ្មោះ Variable ជា Key ហើយ Value ជាទិន្នន័យដែលបានកំណត់។ (វាជួយការពារការសរសេរឈ្មោះ Variable ខុសនៅពេលបញ្ជូនទៅកាន់ View)'
              ],
              code: 'public function show($id) {\n    $user = User::findOrFail($id);\n    $posts = $user->posts;\n\n    // ស្មើនឹង ["user" => $user, "posts" => $posts]\n    return view("user.show", compact("user", "posts"));\n}',
              language: 'php',
              useCase: 'Passing multiple queried models directly to the view without manually typing out an associative array.',
              insight: 'ប្រើ `compact()` នឹងជួយឱ្យកូដរបស់អ្នកមើលទៅមានលក្ខណៈអាជីព និងស្អាតជាងមុន។'
            },
            {
              id: '4.3.3',
              title: 'View Composers (ចែករំលែកទិន្នន័យគ្រប់ទំព័រ)',
              titleEn: 'View Composers',
              type: 'code',
              content: [
                '**Global Data**: ជួនកាលយើងមានទិន្នន័យដែលត្រូវបង្ហាញនៅលើគ្រប់ទំព័រទាំងអស់ (ឧទាហរណ៍៖ បញ្ជី Category នៅក្នុង Sidebar ឬចំនួនសារមិនទាន់អាននៅក្នុង Navbar)។',
                '**View::share()**: អនុញ្ញាតឱ្យអ្នកបញ្ជូនអថេរទៅកាន់ Views ទាំងអស់ដោយស្វ័យប្រវត្តិ (ច្រើនតែសរសេរក្នុង `AppServiceProvider`)។',
                '**Cleaner Controllers**: ជួយកុំឱ្យយើងត្រូវសរសេរកូដទាញទិន្នន័យដដែលៗនៅក្នុង Controllers គ្រប់កន្លែងទាំងអស់។'
              ],
              code: '<?php\nnamespace App\\Providers;\n\nuse Illuminate\\Support\\Facades\\View;\nuse Illuminate\\Support\\ServiceProvider;\n\nclass AppServiceProvider extends ServiceProvider {\n    public function boot(): void {\n        // ចែករំលែកអថេរ "settings" ទៅកាន់គ្រប់ View ទាំងអស់\n        View::share("settings", Setting::all());\n        \n        // ចែករំលែកអថេរតែទៅកាន់ View ជាក់លាក់\n        View::composer("layouts.sidebar", function ($view) {\n            $view->with("categories", Category::all());\n        });\n    }\n}\n?>',
              language: 'php',
              insight: 'ប្រើ View Composers ដើម្បីចៀសវាងការសរសេរកូដ query ដដែលៗនៅក្នុង Controllers ច្រើន។'
            },
            {
              id: '4.3.4',
              title: 'Real-world Demo: Dynamic Profile Page',
              titleEn: 'Dynamic Profile Page Demo',
              type: 'code',
              content: [
                '**Data Passing**: ឧទាហរណ៍នៃការបញ្ជូន Model Instance ទៅកាន់ View ដើម្បីបង្ហាញព័ត៌មាន Profile។',
                '**Display Logic**: ការបង្ហាញរូបភាព Default បើ User មិនទាន់មានរូបភាព Profile។'
              ],
              code: '<!-- ក្នុង Controller -->\npublic function profile() {\n    $user = auth()->user();\n    return view("profile.show", compact("user"));\n}\n\n<!-- ក្នុង Blade -->\n<div class="profile-header">\n    <img src="{{ $user->avatar_url ?? "/images/default-avatar.png" }}">\n    <h2>{{ $user->full_name }}</h2>\n    <p>សមាជិកតាំងពី: {{ $user->created_at->format("M Y") }}</p>\n</div>',
              language: 'php'
            },
            {
              id: '4.3.5',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Compact Helper**: ប្រើ "compact()" ដើម្បីបញ្ជូនអថេរទៅ View ឱ្យមានរបៀប និងស្អាត។',
                '**View Composers**: ប្រើ Composers សម្រាប់ទិន្នន័យដែលត្រូវបង្ហាញគ្រប់ទំព័រ (Global Data)។',
                '**Security**: ផ្ទៀងផ្ទាត់ទិន្នន័យក្នុង Controller មុននឹងបញ្ជូនទៅបង្ហាញលើ View។'
              ],
              insight: 'ការបញ្ជូនទិន្នន័យបានត្រឹមត្រូវ គឺជាស្ពានចម្លងរវាង Backend Logic និង Frontend Display។'
            }
          ]
        }
      ]
    },
    {
      id: 'module-5',
      title: 'Module 5: Databases and Eloquent ORM',
      titleEn: 'Databases and Eloquent ORM',
      icon: 'Database',
      color: '#8b5cf6',
      lessons: [
        {
          id: '5.1',
          title: 'Database Configuration',
          titleEn: 'Database Configuration',
          duration: '20 mins',
          level: 'Core',
          slides: [
            {
              id: '5.1.0',
              title: 'Connecting Your App',
              titleEn: 'Connecting Your App',
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
              titleEn: 'The .env File',
              type: 'code',
              content: [
                'គ្រាន់តែកែតម្លៃទាំងនេះឱ្យត្រឹមត្រូវស្របតាម Database ដែលអ្នកបានបង្កើតនៅក្នុង Local Environment របស់អ្នក។ (ដូចជាឈ្មោះ Database, Username និង Password ដើម្បីធានាថាការភ្ជាប់រវាង App និង Database ដំណើរការបានត្រឹមត្រូវ)'
              ],
              code: 'DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=my_app_db\nDB_USERNAME=root\nDB_PASSWORD=secret',
              language: 'bash',
              useCase: 'Configuring a local MySQL database for development while allowing production servers to use different credentials safely.'
            },
            {
              id: '5.1.2',
              title: 'Real-world Setup Demo',
              titleEn: 'Setup Demo',
              type: 'code',
              code: '# ជំហានដំឡើងសម្រាប់អ្នកទើបចូលថ្មី\ncp .env.example .env\nphp artisan key:generate\n\n# បន្ទាប់មកកែឈ្មោះ Database ក្នុង .env\nDB_DATABASE=laravel_course_demo',
              language: 'bash'
            },
            {
              id: '5.1.3',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Environment Safety**: រក្សាទុកព័ត៌មានសម្ងាត់ក្នុង ".env" និងកុំឱ្យវាចូលទៅក្នុង Version Control។',
                '**Driver Selection**: ប្រើ MySQL ឬ PostgreSQL សម្រាប់ Production និង SQLite សម្រាប់ Testing លឿនៗ។',
                '**Connection Testing**: ប្រើ "artisan migrate:status" ដើម្បីផ្ទៀងផ្ទាត់ការតភ្ជាប់ Database។'
              ],
              insight: 'ការរៀបចំ Configuration បានត្រឹមត្រូវ ធានាថាកម្មវិធីរបស់អ្នករត់បានរលូនគ្រប់បរិស្ថាន។'
            }
          ]
        },
        {
          id: '5.2',
          title: 'Database Migrations',
          titleEn: 'Database Migrations',
          duration: '40 mins',
          level: 'Core',
          slides: [
            {
              id: '5.2.0',
              title: 'Version Control for Data',
              titleEn: 'Version Control for Data',
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
              titleEn: 'Creating Migrations',
              type: 'code',
              content: [
                '**Artisan Command**: ប្រើ `make:migration` ដើម្បីបង្កើត File សម្រាប់កំណត់រចនាសម្ព័ន្ធ Table ថ្មី (ជួយឱ្យអ្នកចាប់ផ្ដើមរៀបចំ Database បានយ៉ាងរហ័ស និងមានរបៀបរៀបរយ)។',
                '**Naming Convention**: គួរដាក់ឈ្មោះដែលបញ្ជាក់ពីសកម្មភាព (ឧទាហរណ៍៖ `create_users_table` សម្រាប់បង្កើតថ្មី ឬ `add_phone_to_users_table` សម្រាប់បន្ថែម Column ថ្មី)។',
                '**Timestamping**: រាល់ Migration File នឹងមានកាលបរិច្ឆេទនៅខាងមុខ ដើម្បីធានាថាវាដំណើរការតាមលំដាប់លំដោយ (ការពារកុំឱ្យមានការជាន់គ្នា ឬការបង្កបង្កើត Table ខុសលំដាប់លំដោយ)។'
              ],
              code: '# ១. បង្កើតតារាងថ្មី\nphp artisan make:migration create_products_table\n\n# ២. បន្ថែម Column ទៅតារាងដែលមានស្រាប់\nphp artisan make:migration add_price_to_products_table\n\n# ៣. បង្កើតតារាងជាមួយ Schema ខ្លះៗស្រាប់\nphp artisan make:migration create_orders_table --create=orders',
              language: 'bash',
              useCase: 'Initializing the structure of a new feature (like adding an Orders table) so teammates can pull the code and create the exact same table.',
              animation: 'migration_naming'
            },
            {
              id: '5.2.2',
              title: 'Migration Structure',
              titleEn: 'Migration Structure',
              type: 'code',
              content: [
                '**up() Method**: ជាកន្លែងដែលយើងសរសេរកូដដើម្បីបង្កើត Table ឬបន្ថែម Column ថ្មី (វាត្រូវបាន Run នៅពេលយើងវាយពាក្យ `php artisan migrate`)។',
                '**down() Method**: ប្រើសម្រាប់លុប Table ឬ Undo អ្វីដែលយើងបានធ្វើក្នុង `up()` (វាត្រូវបាន Run នៅពេលយើង rollback ដើម្បីការពារកុំឱ្យ Database មានកំហុស)។',
                '**Reversibility**: ការបំបែកជា ២ ផ្នែកបែបនេះ ជួយឱ្យយើងអាច "ត្រឡប់ក្រោយ" (Undo) បានជានិច្ចប្រសិនបើមានកំហុស (ធ្វើឱ្យ Database Structure របស់អ្នកមានភាពបត់បែន និងសុវត្ថិភាព)។'
              ],
              code: 'public function up(): void {\n    Schema::create("products", function (Blueprint $table) {\n        $table->id();\n        $table->string("name");\n        $table->timestamps();\n    });\n}\n\npublic function down(): void {\n    Schema::dropIfExists("products");\n}',
              language: 'php',
              useCase: 'Defining how to safely add a new column in `up()` and exactly how to remove that specific column safely in `down()`.',
              animation: 'migration_up_down'
            },
            {
              id: '5.2.3',
              title: 'The Schema Builder (ការកំណត់រចនាសម្ព័ន្ធ Table)',
              titleEn: 'Schema Builder',
              type: 'code',
              content: [
                '**Blueprint**: យើងប្រើ `$table` Object ដើម្បីកំណត់ប្រភេទទិន្នន័យ (Data Types) របស់ Column (វាផ្ដល់នូវភាពងាយស្រួលក្នុងការកំណត់លក្ខណៈសម្បត្តិរបស់ទិន្នន័យនីមួយៗ)។',
                '**Common Types**: `id()` (Primary Key), `string()` (អក្សរខ្លី), `text()` (អក្សរវែង), `decimal()` (លេខក្បៀស), `timestamps()` (បង្កើត created_at/updated_at ដោយស្វ័យប្រវត្តិ)។',
                '**Modifiers**: `nullable()` (អាចទុកទទេបាន), `default()` (កំណត់តម្លៃដើម), `unique()` (មិនឱ្យជាន់គ្នា) (ជួយឱ្យអ្នកអាចគ្រប់គ្រងគុណភាពទិន្នន័យបានតាំងពីកម្រិត Database)។'
              ],
              code: 'use Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nSchema::create("products", function (Blueprint $table) {\n    $table->id();\n    $table->string("name")->unique();\n    $table->decimal("price", 10, 2)->default(0);\n    $table->text("description")->nullable();\n    $table->timestamps();\n});',
              language: 'php',
              useCase: 'Designing a precise database table for products with strict data types like decimals for currency to prevent data corruption.',
              animation: 'schema_builder'
            },
            {
              id: '5.2.4',
              title: 'Running Migrations (ការដំណើរការ Migration)',
              titleEn: 'Running Migrations',
              type: 'code',
              content: [
                '**php artisan migrate**: ដំណើរការរាល់ Migrations ដែលមិនទាន់បាន Run ដើម្បីបង្កើត Tables ក្នុង Database (វាជាជំហានចុងក្រោយដើម្បីយក Structure ដែលអ្នកបានសរសេរទៅបង្កើតជា Table ពិតប្រាកដ)។',
                '**Rollback**: ប្រើ `migrate:rollback` ដើម្បីត្រឡប់ក្រោយ (Undo) ការផ្លាស់ប្តូរចុងក្រោយបំផុត (ជួយឱ្យអ្នកអាចកែសម្រួលកំហុសឆ្គងដែលបានបង្កើតក្នុង Migration ចុងក្រោយបាន)។',
                '**Fresh Start**: `migrate:fresh` នឹងលុប Tables ទាំងអស់ចោល រួចបង្កើតឡើងវិញទាំងអស់ (ប្រើក្នុងពេលអភិវឌ្ឍដើម្បីសម្អាត Database ឱ្យស្អាតដូចដើមវិញ)។'
              ],
              code: '# ១. បង្កើតតារាងតាម Migration\nphp artisan migrate\n\n# ២. ត្រឡប់ក្រោយ ១ ជំហាន\nphp artisan migrate:rollback\n\n# ៣. បង្ហាញស្ថានភាព Migrations ទាំងអស់\nphp artisan migrate:status',
              language: 'bash',
              useCase: 'Deploying your latest changes to the database server safely, applying only the newly created tables.',
              insight: 'ប្រើ `php artisan migrate:status` ដើម្បីឆែកមើលថា តើមាន File ណាខ្លះដែលមិនទាន់បាន Run ចូល Database។',
              animation: 'artisan_migrate'
            },
            {
              id: '5.2.5',
              title: 'Rolling Back Migrations (ការដកថយ Migration)',
              titleEn: 'Rolling Back Migrations',
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
              useCase: 'Undoing a mistakenly created table in local development using migrate:rollback to rewrite the column definitions.'
            },
            {
              id: '5.2.6',
              title: 'Modifying Columns (ការកែប្រែ Column)',
              titleEn: 'Modifying Columns',
              type: 'code',
              content: [
                '**Changing Column Type**: យើងអាចផ្លាស់ប្តូរប្រភេទទិន្នន័យរបស់ Column ឬបន្ថែមលក្ខខណ្ឌថ្មីបានដោយប្រើ Method `change()` នៅក្នុង Migration ថ្មី (ជំនួសឱ្យការលុប Table ទាំងមូលចោល)។',
                '**Renaming Columns**: យើងអាចប្តូរឈ្មោះ Column បានយ៉ាងងាយស្រួលដោយប្រើ `renameColumn()`។',
                '**Dropping Columns**: ប្រើ `dropColumn()` ដើម្បីលុប Column ដែលយើងលែងត្រូវការចេញពី Table។'
              ],
              code: 'public function up(): void {\n    Schema::table("users", function (Blueprint $table) {\n        // កែប្រែប្រវែងអក្សរពី ២៥៥ ទៅ ៥០\n        $table->string("name", 50)->change();\n        \n        // ប្តូរឈ្មោះ Column\n        $table->renameColumn("from", "to");\n        \n        // លុប Column ចោល\n        $table->dropColumn("votes");\n    });\n}',
              language: 'php',
              insight: 'ចំណាំ៖ ការប្រើប្រាស់ change() តម្រូវឱ្យមានកញ្ចប់ (package) "doctrine/dbal" ដំឡើងនៅក្នុង Project របស់អ្នក។'
            },
            {
              id: '5.2.7',
              title: 'Foreign Key Constraints',
              titleEn: 'Foreign Key Constraints',
              type: 'code',
              content: [
                '**Data Integrity**: Foreign Keys ជួយរក្សាភាពត្រឹមត្រូវនៃទិន្នន័យដោយធានាថាទំនាក់ទំនងរវាង Tables មិនត្រូវបានបំបែក (ឧទាហរណ៍៖ មិនអនុញ្ញាតឱ្យលុប User ប្រសិនបើគាត់នៅមាន Post)។',
                '**Cascade Actions**: យើងអាចកំណត់ឱ្យ Database លុប ឬអាប់ដេតទិន្នន័យដែលពាក់ព័ន្ធដោយស្វ័យប្រវត្តិ នៅពេលដែលប្រភពដើមត្រូវបានលុប ឬផ្លាស់ប្តូរ (`onDelete("cascade")`)។'
              ],
              code: 'Schema::create("posts", function (Blueprint $table) {\n    $table->id();\n    // បង្កើត Foreign Key ទៅកាន់ Table users\n    $table->foreignId("user_id")\n          ->constrained("users")\n          ->onUpdate("cascade")\n          ->onDelete("cascade");\n    $table->string("title");\n});',
              language: 'php'
            },
            {
              id: '5.2.8',
              title: 'Real-world Demo: Posts Table Schema',
              titleEn: 'Posts Table Demo',
              type: 'code',
              code: 'Schema::create("posts", function (Blueprint $table) {\n    $table->id();\n    $table->foreignId("user_id")->constrained()->onDelete("cascade");\n    $table->string("title");\n    $table->string("slug")->unique();\n    $table->text("body");\n    $table->string("image")->nullable();\n    $table->boolean("is_published")->default(false);\n    $table->timestamps();\n});',
              language: 'php'
            },
            {
              id: '5.2.9',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Atomic Changes**: បង្កើត Migration មួយសម្រាប់តែការងារមួយ (ឧទាហរណ៍៖ បង្កើត Table មួយ ឬបន្ថែម Column មួយ)។',
                '**Rollback Test**: តែងតែតេស្ត "down()" method ដើម្បីធានាថាអ្នកអាច Undo ការផ្លាស់ប្តូរបាន។',
                '**Foreign Keys**: ប្រើ Foreign Key constraints ដើម្បីធានាបាននូវ Data Integrity កម្រិត Database។'
              ],
              insight: 'Migrations គឺជាសៀវភៅកំណត់ហេតុនៃរចនាសម្ព័ន្ធ Database របស់អ្នក។'
            }
          ]
        },
        {
          id: '5.3',
          title: 'Eloquent ORM - Models',
          titleEn: 'Eloquent ORM - Models',
          duration: '35 mins',
          level: 'Core',
          slides: [
            {
              id: '5.3.0',
              title: 'The Active Record Pattern',
              titleEn: 'Active Record Pattern',
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
              titleEn: 'Creating Models',
              type: 'code',
              content: [
                'Models ស្ថិតនៅក្នុង Folder `app/Models` ដែលប្រើសម្រាប់តំណាងឱ្យ Tables ក្នុង Database (វាជាចំណុចកណ្ដាលនៃការទាក់ទងទិន្នន័យរវាង Code របស់អ្នក និង Database)។',
                'តាមគោលការណ៍ Laravel: Table ប្រើពហុវចនៈ (ឧទាហរណ៍ `posts`) ខណៈ Model ប្រើឯកវចនៈ (ឧទាហរណ៍ `Post`) (ការគោរពតាមគោលការណ៍នេះ ជួយឱ្យ Laravel ស្គាល់ទំនាក់ទំនងរវាងគ្នាដោយស្វ័យប្រវត្តិ)។'
              ],
              code: '# បង្កើត Model តែមួយ\nphp artisan make:model Product\n\n# បង្កើត Model ព្រមទាំង Migration និង Controller ក្នុងពេលតែមួយ\nphp artisan make:model Product -mc',
              language: 'bash',
              useCase: 'Generating a User model to represent the "users" table, allowing you to use User::create() instead of writing manual INSERT statements.',
              animation: 'model_creation'
            },
            {
              id: '5.3.2',
              title: 'Mass Assignment',
              titleEn: 'Mass Assignment',
              type: 'code',
              content: [
                'ដើម្បីធានាសុវត្ថិភាព Laravel តម្រូវឱ្យយើងកំណត់ជាមុនថា Column ណាខ្លះអាចអនុញ្ញាតឱ្យបញ្ចូលទិន្នន័យបាន។ (ដើម្បីការពារ Hacker មិនឱ្យបញ្ចូលទិន្នន័យទៅកាន់ Column សំខាន់ៗដែលយើងមិនចង់ឱ្យប៉ះពាល់)',
                'យើងប្រើ `$fillable` ដើម្បីកំណត់ Fields ដែលអាច Mass Assign បាន និងការពារការបញ្ចូលទិន្នន័យខុសប្រភេទ (វាជាខែលការពារសុវត្ថិភាពកម្រិត Model ដ៏មានប្រសិទ្ធភាពបំផុត)។'
              ],
              code: 'namespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Product extends Model {\n    // កំណត់ Column ដែលអនុញ្ញាត\n    protected $fillable = ["name", "price", "description"];\n}',
              language: 'php',
              useCase: 'Protecting user registration so that hackers cannot inject an "is_admin" field in their signup form request to become administrators.',
              insight: 'ការប្រើ `$fillable` ជួយការពារពី "Mass Assignment Vulnerability" ដែលជាបញ្ហាសុវត្ថិភាពចម្បង។',
              animation: 'mass_assignment'
            },
            {
              id: '5.3.3',
              title: 'Eloquent Relationships (ទំនាក់ទំនងរវាង Model)',
              titleEn: 'Eloquent Relationships',
              type: 'code',
              content: [
                '**Table Relations**: ជាធម្មតាក្នុង Database តារាងតែងតែមានទំនាក់ទំនងជាមួយគ្នា (ឧទាហរណ៍៖ អ្នកនិពន្ធម្នាក់មានអត្ថបទច្រើន `One-to-Many`)។',
                '**Model Methods**: Eloquent អនុញ្ញាតឱ្យយើងកំណត់ទំនាក់ទំនងទាំងនេះជា Methods នៅក្នុង Model ធ្វើឱ្យការទាញទិន្នន័យពាក់ព័ន្ធងាយស្រួលដូចការហៅ Property មួយអញ្ចឹង។',
                '**Relationship Types**: មានប្រភេទដូចជា `hasOne`, `hasMany`, `belongsTo`, `belongsToMany`, នឹងជាច្រើនទៀត។'
              ],
              code: 'class User extends Model {\n    // User ម្នាក់អាចមាន Post ច្រើន (One-to-Many)\n    public function posts() {\n        return $this->hasMany(Post::class);\n    }\n}\n\nclass Post extends Model {\n    // Post មួយជារបស់ User តែម្នាក់ (Inverse)\n    public function user() {\n        return $this->belongsTo(User::class);\n    }\n}',
              language: 'php',
              useCase: 'Retrieving all posts written by a specific user cleanly via `$user->posts`.',
              animation: 'relationship_types'
            },
            {
              id: '5.3.4',
              title: 'Soft Deleting (ការលុបដោយមិនបាត់ទិន្នន័យ)',
              titleEn: 'Soft Deleting',
              type: 'code',
              content: [
                '**Safe Deletion**: នៅពេលប្រើ Soft Deletes ទិន្នន័យនឹងមិនត្រូវបានលុបចេញពី Database ពិតប្រាកដទេ ប៉ុន្តែវានឹងកត់ត្រាកាលបរិច្ឆេទក្នុង Column `deleted_at` ជំនួសវិញ។',
                '**Trait Usage**: យើងគ្រាន់តែថែម Trait `SoftDeletes` ទៅក្នុង Model និងបន្ថែម `$table->softDeletes()` ទៅក្នុង Migration។',
                '**Restoration**: អនុញ្ញាតឱ្យអ្នកស្ដារទិន្នន័យ (Restore) មកវិញនៅពេលក្រោយប្រសិនបើមានការលុបដោយអចេតនា។'
              ],
              code: 'use Illuminate\\Database\\Eloquent\\SoftDeletes;\n\nclass Post extends Model {\n    use SoftDeletes;\n}\n\n// ការប្រើប្រាស់\n$post->delete(); // ទិន្នន័យមិនបាត់ទេ តែមានជាប់ deleted_at\n\n$post->restore(); // ស្ដារទិន្នន័យមកវិញ\n\n$post->forceDelete(); // លុបចេញពី Database ពិតប្រាកដ',
              language: 'php',
              insight: 'Query ទូទៅរបស់ Eloquent នឹងលាក់ទិន្នន័យដែលបាន Soft Delete ដោយស្វ័យប្រវត្តិ។'
            },
            {
              id: '5.3.5',
              title: 'Real-world Demo: Product Model with Attributes',
              titleEn: 'Product Model Demo',
              type: 'code',
              content: [
                '**Advanced Model**: ការប្រើប្រាស់ `$casts` ដើម្បីបម្លែងប្រភេទទិន្នន័យដោយស្វ័យប្រវត្តិ (ឧទាហរណ៍៖ បម្លែង string ទៅជា JSON array)។',
                '**Safety**: ការពារ Column សំខាន់ៗមិនឱ្យបញ្ចូលតាមរយៈ Mass Assignment។'
              ],
              code: 'class Product extends Model {\n    protected $fillable = ["name", "price", "specs"];\n\n    // បម្លែង JSON string ក្នុង DB មកជា Array ក្នុង PHP ស្វ័យប្រវត្តិ\n    protected $casts = [\n        "specs" => "array",\n        "price" => "decimal:2",\n        "is_active" => "boolean"\n    ];\n}',
              language: 'php'
            },
            {
              id: '5.3.6',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Naming Convention**: ប្រើឈ្មោះ Model ជាឯកវចនៈ និង Table ជាពហុវចនៈតាមស្ដង់ដារ Laravel។',
                '**Mass Assignment**: ប្រើ "$fillable" ជានិច្ចដើម្បីការពារសុវត្ថិភាពទិន្នន័យ។',
                '**Relationships**: កំណត់ទំនាក់ទំនងរវាង Models ឱ្យបានច្បាស់លាស់ដើម្បីងាយស្រួលទាញទិន្នន័យ។'
              ],
              insight: 'Eloquent Model គឺជាបេះដូងនៃរាល់ការងារទាក់ទងនឹងទិន្នន័យក្នុង Laravel។'
            }
          ]
        },
        {
          id: '5.4',
          title: 'CRUD Operations',
          titleEn: 'CRUD Operations',
          duration: '40 mins',
          level: 'Core',
          slides: [
            {
              id: '5.4.0',
              title: 'Basic Operations',
              titleEn: 'Basic Operations',
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
              titleEn: 'Create & Read',
              type: 'code',
              content: [
                '**Create**: ការបន្ថែមទិន្នន័យថ្មី ដូចជាការចុះឈ្មោះសមាជិក ឬការដាក់លក់ផលិតផលថ្មី។ (ជួយឱ្យអ្នកអាចរក្សាទុកព័ត៌មានដែលអ្នកប្រើប្រាស់បញ្ជូនមកពី Frontend បានយ៉ាងរលូន)',
                '**Read**: ការទាញយកទិន្នន័យមកបង្ហាញ គឺជាការស្វែងរក និងបង្ហាញព័ត៌មានទៅកាន់ User។ (ជួយឱ្យកម្មវិធីរបស់អ្នកបង្ហាញទិន្នន័យពិតចេញពី Database ដូចជា បញ្ជីអត្ថបទ ឬព័ត៌មានផ្ទាល់ខ្លួន)',
                'យើងអាចប្រើ Methods ដូចជា `all()`, `find()` ឬ `where()` អាស្រ័យទៅតាមតម្រូវការជាក់ស្តែង (ជួយឱ្យការស្វែងរកទិន្នន័យចំគោលដៅធ្វើឡើងបានយ៉ាងងាយស្រួល និងមានប្រសិទ្ធភាពបំផុត)។'
              ],
              code: '// បង្កើតថ្មី\nProduct::create(["name" => "Laptop", "price" => 999]);\n\n// ទាញយកទាំងអស់\n$products = Product::all();\n\n// ស្វែងរកតាម ID\n$item = Product::find(1);\n\n// ទាញយកតាមលក្ខខណ្ឌ\n$cheapItems = Product::where("price", "<", 500)->get();',
              language: 'php',
              useCase: 'Saving a new article from a dashboard form (Create) and then displaying all articles on the homepage (Read).',
              insight: 'Eloquent នឹងបម្លែងលទ្ធផលពី Database ឱ្យទៅជា Objects ឬ Collections ដែលងាយស្រួលប្រើប្រាស់បំផុត។'
            },
            {
              id: '5.4.2',
              title: 'Update & Delete',
              titleEn: 'Update & Delete',
              type: 'code',
              content: [
                '**Update**: ការកែប្រែព័ត៌មានដែលមានស្រាប់ ដូចជាការប្តូរតម្លៃផលិតផល ឬការកែព័ត៌មានសមាជិក។ (ជួយឱ្យទិន្នន័យក្នុង Database របស់អ្នកមានភាពទាន់សម័យ និងត្រឹមត្រូវជានិច្ចទៅតាមការផ្លាស់ប្តូរជាក់ស្តែង)',
                '**Delete**: ការលុបទិន្នន័យដែលលែងត្រូវការ ឬទិន្នន័យដែលបានបញ្ចូលខុសចេញពីប្រព័ន្ធ។ (ជួយឱ្យ Database របស់អ្នកមានរបៀបរៀបរយ និងមិនមានទិន្នន័យឥតប្រយោជន៍ដែលនាំឱ្យកម្មវិធីដើរយឺត)',
                'រាល់ការកែប្រែ ឬលុប ត្រូវតែធ្វើឡើងលើ Record ជាក់លាក់ណាមួយដែលយើងបានស្វែងរកឃើញ (ធានាថាមិនមានការប៉ះពាល់ដល់ទិន្នន័យផ្សេងទៀតដែលមិនពាក់ព័ន្ធ)។'
              ],
              code: '// ការកែប្រែ (Update)\n$item = Product::find(1);\n$item->update(["price" => 899]);\n\n// ការលុប (Delete)\n$item->delete();\n\n// លុបតាមរយៈ ID ផ្ទាល់\nProduct::destroy(2);',
              language: 'php',
              useCase: 'Marking a user\'s order as "shipped" (Update) or safely removing a spam comment from a blog post (Delete).',
              insight: 'ចងចាំ៖ រាល់ពេលប្រើ update() ឬ delete() ត្រូវប្រាកដថាអ្នកបានហៅ find() ឬ where() ឱ្យបានត្រឹមត្រូវដើម្បីកុំឱ្យប៉ះពាល់ទិន្នន័យខុសជួរ។'
            },
            {
              id: '5.4.3',
              title: 'First or Create / Update or Create',
              titleEn: 'First or Create / Update or Create',
              type: 'code',
              content: [
                '**firstOrCreate**: ប្រើសម្រាប់ស្វែងរក Record តាមលក្ខខណ្ឌដែលបានផ្ដល់ឱ្យ។ បើរកមិនឃើញ វានឹងបង្កើត Record ថ្មីមួយដោយស្វ័យប្រវត្តិ និងរក្សាទុកទៅក្នុង Database។',
                '**updateOrCreate**: ប្រើសម្រាប់ស្វែងរក Record តាមលក្ខខណ្ឌដែលបានផ្ដល់ឱ្យ។ បើរកឃើញ វានឹង Update ទិន្នន័យនោះ បើរកមិនឃើញ វានឹងបង្កើត Record ថ្មីមួយ។',
                'ជួយកាត់បន្ថយការសរសេរកូដ `if/else` ស្មុគស្មាញ និងធ្វើឱ្យ Controller របស់អ្នកកាន់តែខ្លី។'
              ],
              code: '// ស្វែងរកជើងហោះហើរ បើគ្មាននឹងបង្កើតថ្មី\n$flight = Flight::firstOrCreate(\n    ["name" => "Flight 10"],\n    ["delayed" => 1, "arrival_time" => "11:30"]\n);\n\n// ស្វែងរកជើងហោះហើរ បើមានធ្វើការ Update, បើគ្មាននឹងបង្កើតថ្មី\n$flight = Flight::updateOrCreate(\n    ["departure" => "Oakland", "destination" => "San Diego"],\n    ["price" => 99, "discounted" => 1]\n);',
              language: 'php',
              insight: 'Methods ទាំងនេះជួយឱ្យការធ្វើសមកាលកម្មទិន្នន័យ (Data Synchronization) កាន់តែងាយស្រួល។'
            },
            {
              id: '5.4.4',
              title: 'Real-world Demo: Complete CRUD Workflow',
              titleEn: 'CRUD Workflow Demo',
              type: 'code',
              content: [
                '**Full CRUD**: បង្ហាញពីរបៀបប្រើ Eloquent ដើម្បីបង្កើតមុខងារគ្រប់គ្រង Inventory សាមញ្ញមួយ។',
                '**Logic Chain**: ស្វែងរក record ជាមុនសិន រួចទើបធ្វើការ Update ឬ Delete។'
              ],
              code: '// 1. បង្កើតផលិតផលថ្មី\n$product = Product::create($request->all());\n\n// 2. កែប្រែតម្លៃផលិតផលដែលថ្លៃជាង $1000\nProduct::where("price", ">", 1000)\n       ->update(["category" => "Premium"]);\n\n// 3. លុបផលិតផលដែលឈប់លក់\nProduct::where("stock", 0)->delete();',
              language: 'php'
            },
            {
              id: '5.4.5',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Validation**: តែងតែផ្ទៀងផ្ទាត់ទិន្នន័យមុននឹងធ្វើការ Create ឬ Update ចូល Database។',
                '**Error Handling**: ប្រើ "findOrFail()" ដើម្បីបង្ហាញទំព័រ 404 ដោយស្វ័យប្រវត្តិបើរកទិន្នន័យមិនឃើញ។',
                '**Clean Logic**: ប្រើ "updateOrCreate()" ដើម្បីកាត់បន្ថយការសរសេរកូដ if/else ស្មុគស្មាញ។'
              ],
              insight: 'ការអនុវត្ត CRUD បានស្ទាត់ជំនាញ គឺជាគ្រឹះសម្រាប់សាងសង់ App ដ៏អស្ចារ្យ។'
            }
          ]
        },
        {
          id: '5.5',
          title: 'The Query Builder',
          titleEn: 'The Query Builder',
          duration: '30 mins',
          level: 'Advanced',
          slides: [
            {
              id: '5.5.0',
              title: 'When to go "Lower Level"',
              titleEn: 'When to go "Lower Level"',
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
              titleEn: 'Basic Query Builder',
              type: 'code',
              content: [
                'ប្រើ `DB` Facade ដើម្បីគ្រប់គ្រង និងប្រតិបត្តិ SQL Queries ដោយផ្ទាល់ (វាជាវិធីដែលផ្ដល់នូវថាមពលខ្លាំងបំផុតក្នុងការបញ្ជា Database ឱ្យធ្វើការងារតាមចិត្តរបស់អ្នក)។',
                'លទ្ធផលដែលបានមកវិញនឹងជា Array នៃ Plain Objects (StdClass) ដែលងាយស្រួលក្នុងការចូលប្រើទិន្នន័យ។ (វាមានល្បឿនលឿនព្រោះវាមិនចាំបាច់បង្កើតជា Model Instance ស្មុគស្មាញដូច Eloquent)'
              ],
              code: 'use Illuminate\\Support\\Facades\\DB;\n\n// ទាញយកទិន្នន័យផ្ទាល់\n$users = DB::table("users")->get();\n\n// Query បែបស្មុគស្មាញ\n$activeUsers = DB::table("users")\n            ->where("active", true)\n            ->orderBy("last_login", "desc")\n            ->limit(5)\n            ->get();',
              language: 'php',
              useCase: 'Exporting a CSV of 100,000 sales records where using Eloquent Models would consume too much memory and cause the server to crash.',
              insight: 'ចំណេះដឹងបន្ថែម៖ តាមពិតទៅ Eloquent គឺគ្រាន់តែជា "សំបក" ដែលស្រោបពីលើ Query Builder នេះប៉ុណ្ណោះ។'
            },
            {
              id: '5.5.2',
              title: 'Real-world Demo: Complex Report Query',
              titleEn: 'Complex Report Query Demo',
              type: 'code',
              content: [
                '**Raw Power**: ការប្រើ Query Builder ដើម្បីទាញយកទិន្នន័យសម្រាប់ធ្វើរបាយការណ៍លក់ប្រចាំខែ។',
                '**Optimization**: ការប្រើ `join()` ដើម្បីភ្ជាប់តារាង និង `selectRaw()` ដើម្បីគណនាតម្លៃសរុប។'
              ],
              code: '$salesReport = DB::table("orders")\n    ->join("users", "orders.user_id", "=", "users.id")\n    ->selectRaw("users.name, SUM(orders.total) as total_spent")\n    ->whereMonth("orders.created_at", now()->month)\n    ->groupBy("users.id", "users.name")\n    ->orderBy("total_spent", "desc")\n    ->get();',
              language: 'php'
            },
            {
              id: '5.5.3',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Best Practices',
              type: 'summary',
              content: [
                '**Performance Focus**: ប្រើ Query Builder សម្រាប់ទិន្នន័យធំៗ ឬរបាយការណ៍ស្មុគស្មាញ។',
                '**Memory Safety**: ប្រើ "chunk()" ឬ "cursor()" នៅពេលទាញទិន្នន័យរាប់ម៉ឺនជួរក្នុងពេលតែមួយ។',
                '**Balance**: ប្រើ Eloquent សម្រាប់ភាពងាយស្រួល និង Query Builder សម្រាប់ល្បឿន។'
              ],
              insight: 'ជ្រើសរើសឧបករណ៍ឱ្យចំគោលដៅ ដើម្បីឱ្យ App របស់អ្នកដើរបានលឿន និងចំណាយ RAM តិច។'
            }
          ]
        }
      ]
    }
  ]
};