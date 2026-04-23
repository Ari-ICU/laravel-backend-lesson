import { Part } from '../types';

export const part3: Part = {
  id: 'part-3',
  title: 'Part 3: ការបង្កើត Features ជាមួយ Laravel (Building Features with Laravel)',
  modules: [
    {
      id: 'module-6',
      title: 'Module 6: ការប្រើប្រាស់ Forms (Working with Forms)',
      lessons: [
        {
          id: '6.1',
          title: 'HTML Forms ក្នុង Laravel',
          slides: [
            {
              id: '6.1.0',
              title: 'ការគ្រប់គ្រង User Input',
              type: 'intro',
              content: [
                'Forms គឺជាវិធីសំខាន់បំផុតដែល user ប្រើដើម្បីផ្ញើទិន្នន័យ (input) មកកាន់ application របស់អ្នក ដូចជា form ចុះឈ្មោះ, login ឬបញ្ចូលព័ត៌មានផ្សេងៗ។',
                'ប៉ុន្តែ forms ក៏អាចជាប្រភពនៃបញ្ហាសុវត្ថិភាព ដូចជា XSS ឬ CSRF ប្រសិនបើយើងមិនគ្រប់គ្រងឲ្យបានត្រឹមត្រូវ។',
                'Laravel ផ្តល់នូវការការពារស្រាប់ (built-in protection) ដូចជា CSRF protection, validation និង escaping data ដើម្បីជួយការពារ application របស់អ្នកពីការវាយប្រហារ។'
              ],
              animation: 'security',
              insight: 'Security មិនមែនជា "Add-on" បន្ថែមក្រៅនោះទេ ក្នុង Laravel វាត្រូវបានបង្កើតមកជាមួយ Core តែម្តង។'
            },
            {
              id: '6.1.1',
              title: 'GET vs. POST',
              type: 'concept',
              content: [
                '**GET**: ប្រើសម្រាប់ស្វែងរក (search) ឬចម្រាញ់ទិន្នន័យ (filter) ដែលមិនប៉ះពាល់ដល់ data; parameters នឹងបង្ហាញនៅលើ URL ហើយអាច bookmark ឬ share បាន។',
                '**POST**: ប្រើសម្រាប់បង្កើត (create) ឬផ្ញើទិន្នន័យដែលបម្លែង state; data ត្រូវបានផ្ញើនៅក្នុង request body ហើយមិនបង្ហាញនៅលើ URL។',
                'សម្រាប់សកម្មភាពដែលបង្កើត ឬផ្លាស់ប្តូរ data (create/update/delete) គួរប្រើ POST (ឬ methods ពាក់ព័ន្ធដូចជា PUT/PATCH/DELETE ក្នុង Laravel) ដើម្បីរក្សាសុវត្ថិភាព និងភាពត្រឹមត្រូវនៃ application។'
              ]
            },
            {
              id: '6.1.2',
              title: 'ការការពារ CSRF',
              type: 'code',
              content: [
                'រាល់ POST form ទាំងអស់ **ត្រូវតែ** រួមបញ្ចូល `@csrf` directive ដើម្បីធានាសុវត្ថិភាព។',
                'វានឹងបង្កើត hidden token ដោយស្វ័យប្រវត្តិ ដែល Laravel ប្រើសម្រាប់ verify request និងការពារ Cross-Site Request Forgery (CSRF) attack។'
              ],
              code: '<form method="POST" action="/posts">\n    @csrf\n    \n    <input type="text" name="title">\n    <button type="submit">Submit</button>\n</form>',
              language: 'php'
            }
          ]
        },
        {
          id: '6.2',
          title: 'ការធ្វើ Request Validation',
          slides: [
            {
              id: '6.2.0',
              title: 'ច្បាប់មាស (The Golden Rule)',
              type: 'intro',
              content: [
                '**កុំទុកចិត្ត user input ជាដាច់ខាត។** ព្រោះវាអាចមានទិន្នន័យមិនត្រឹមត្រូវ ឬមានគោលបំណងអាក្រក់។',
                'Validation ជួយពិនិត្យ និងធានាថាទិន្នន័យបំពេញតាមលក្ខខណ្ឌដែលបានកំណត់ មុននឹងរក្សាទុកចូល database។',
                'Laravel ផ្ដល់ validation rules ដែលងាយស្រួលប្រើ ធ្វើឱ្យការកំណត់លក្ខខណ្ឌស្មុគស្មាញ ក្លាយទៅជាការសរសេរងាយ និងច្បាស់លាស់។'
              ]
            },
            {
              id: '6.2.1',
              title: 'ការប្រើប្រាស់ validate() Method',
              type: 'code',
              content: [
                'ជាវិធីសាមញ្ញបំផុតសម្រាប់ validate ទិន្នន័យដោយផ្ទាល់នៅក្នុង Controller ដោយប្រើ\n`$request->validate()`។',
                'Laravel នឹងគ្រប់គ្រង error handling ដោយស្វ័យប្រវត្តិ ដូចជា redirect ត្រឡប់ក្រោយ និងរក្សាទុក error messages និង old input ជា flash data ក្នុង session។'
              ],
              code: '$validated = $request->validate([\n    "title" => "required|unique:posts|max:255",\n    "body" => "required|min:10"\n]);',
              language: 'php'
            },
            {
              id: '6.2.2',
              title: 'Form Request Classes',
              type: 'code',
              content: [
                'សម្រាប់ validation ដែលស្មុគស្មាញ ឬមាន rules ច្រើន គួរផ្ទេរ logic ទៅក្នុង class ដាច់ដោយឡែក (Form Request) ដើម្បីរៀបចំឲ្យច្បាស់លាស់។',
                'វិធីនេះជួយឲ្យ controller ស្អាត ងាយអាន និងអាចប្រើ validation logic នោះឡើងវិញបាន (reusable) នៅកន្លែងផ្សេងៗ។'
              ],
              code: '// បង្កើត Class តាមរយៈ Artisan\nphp artisan make:request StorePostRequest\n\n// ប្រើក្នុង Controller របស់អ្នក\npublic function store(StorePostRequest $request) {\n    // Request ដែលចូលមកត្រូវបាន Validate រួចរាល់!\n    $data = $request->validated();\n}',
              language: 'php',
              insight: 'ប្រើ Form Requests នៅពេលណាដែលអ្នកមានលក្ខខណ្ឌ Validation ចាប់ពី ៥ ទៅ ៦ ឡើងទៅ។'
            },
            {
              id: '6.2.3',
              title: 'ការបង្ហាញ Error',
              type: 'code',
              content: [
                'អ្នកអាចទាញយក validation errors មកបង្ហាញក្នុង Blade template បានយ៉ាងងាយស្រួល ដើម្បីជួយឲ្យ user ដឹងថាមានកំហុសអ្វីខ្លះ។',
                'Laravel ផ្ដល់ `$errors` variable ជាស្រាប់នៅក្នុងរាល់ view ដែលអាចប្រើដើម្បីបង្ហាញ error message តាម field នីមួយៗ។'
              ],
              code: '@error("title")\n    <div class="alert alert-danger">{{ $message }}</div>\n@enderror',
              language: 'php'
            }
          ]
        },
        {
          id: '6.3',
          title: 'ការ Upload ឯកសារ (File Uploads)',
          slides: [
            {
              id: '6.3.0',
              title: 'ការគ្រប់គ្រង Media',
              type: 'intro',
              content: [
                'ការគ្រប់គ្រងការ Upload ឯកសារ ដូចជា profile image, documents ឬ video គឺជាកិច្ចការដែលជួបជាញឹកញាប់ក្នុង application។',
                'Laravel ផ្ដល់ `UploadedFile` object ដែលមាន functions ស្រាប់ ដើម្បី validate, store និងគ្រប់គ្រង files បានយ៉ាងងាយស្រួល។',
                'អ្នកអាចរក្សាទុកឯកសារនៅក្នុង local storage ឬប្រើ cloud services ដូចជា AWS S3 ដោយប្រើ filesystem configuration របស់ Laravel។'
              ]
            },
            {
              id: '6.3.1',
              title: 'របៀប Upload ឯកសារ',
              type: 'code',
              content: [
                'ត្រូវប្រាកដថា form របស់អ្នកមាន attribute `enctype="multipart/form-data"` ដើម្បីអនុញ្ញាតឲ្យ upload files បានត្រឹមត្រូវ។',
                'បន្ទាប់មក អ្នកអាចប្រើ `store()` method ដើម្បីរក្សាទុកឯកសារ ទៅក្នុង storage ដោយស្វ័យប្រវត្តិ និងទទួលបាន file path ត្រឡប់មកវិញ។'
              ],
              code: 'public function upload(Request $request) {\n    if ($request->hasFile("avatar")) {\n        $path = $request->file("avatar")->store("avatars");\n        return "File saved at: " . $path;\n    }\n}',
              language: 'php'
            },
            {
              id: '6.3.2',
              title: 'Filesystem Library',
              type: 'code',
              content: [
                '**Storage** facade ផ្តល់ API តែមួយ (unified API) សម្រាប់គ្រប់គ្រងឯកសារ ដូចជា save, delete និង retrieve files។',
                'អ្នកអាចប្តូរពី `local` ទៅ `s3` ឬ cloud storage ផ្សេងៗបានយ៉ាងងាយស្រួល ដោយគ្រាន់តែផ្លាស់ប្តូរ configuration ក្នុង `.env` ឬ config files។'
              ],
              code: 'use Illuminate\\Support\\Facades\\Storage;\n\n// ពិនិត្យមើលថាតើ File មានពិតមែនឬអត់\nif (Storage::exists("file.jpg")) {\n    // លុប File នោះចោល\n    Storage::delete("file.jpg");\n}',
              language: 'php',
              insight: 'ចូលទៅពិនិត្យ `config/filesystems.php` ដើម្បីកំណត់ "disks" សម្រាប់ផ្ទុកឯកសាររបស់អ្នក។'
            }
          ]
        }
      ]
    },
    {
      id: 'module-7',
      title: 'Module 7: ការបញ្ជាក់អត្តសញ្ញាណ និងការផ្ដល់សិទ្ធិ (Authentication & Authorization)',
      lessons: [
        {
          id: '7.1',
          title: 'Built-in Authentication',
          slides: [
            {
              id: '7.1.0',
              title: 'កុំចំណាយពេលបង្កើតអ្វីដែលមានស្រាប់ (Don\'t Rebuild the Wheel)',
              type: 'intro',
              content: [
                'Authentication ជាផ្នែកសំខាន់មួយដែលពិបាកធ្វើឲ្យត្រឹមត្រូវ និងអាចបង្កហានិភ័យខ្ពស់ ប្រសិនបើ implement ខុស។',
                'Laravel ផ្តល់នូវ “Starter Kits” ផ្លូវការ ដែលបានរៀបចំប្រព័ន្ធ authentication ស្រាប់ ដើម្បីជួយឲ្យអ្នកចាប់ផ្តើមបានលឿន និងមានសុវត្ថិភាព។',
                'វារួមមានមុខងារសំខាន់ៗដូចជា login, register, password reset និង email verification ដែលអាចប្រើបានភ្លាមៗ។'
              ],
              animation: 'security'
            },
            {
              id: '7.1.1',
              title: 'ជម្រើសនៃ Scaffolding',
              type: 'concept',
              content: [
                '**Laravel Breeze**: ជា starter kit សាមញ្ញបំផុត ផ្តោតលើមូលដ្ឋាន authentication ហើយប្រើ Blade, Vue ឬ React។ សមស្របសម្រាប់អ្នកចាប់ផ្តើមដំបូង។',
                '**Laravel Jetstream**: ជា starter kit កម្រិតខ្ពស់ ដែលមានមុខងារពេញលេញ ដូចជា teams, API tokens និង two-factor authentication (2FA) ប្រើ Livewire ឬ Inertia។',
                '**Laravel UI**: ជា scaffolding បែប legacy ដែលប្រើ Bootstrap, Vue ឬ React សម្រាប់គម្រោងចាស់ៗ ឬ project ដែលត្រូវការសាមញ្ញ។'
              ],
              insight: 'សម្រាប់ Project ថ្មីភាគច្រើន គួរចាប់ផ្តើមជាមួយ Laravel Breeze។'
            }
          ]
        },
        {
          id: '7.2',
          title: 'Middleware',
          slides: [
            {
              id: '7.2.0',
              title: 'ការការពារទំព័ររបស់អ្នក (Guarding Your Pages)',
              type: 'intro',
              content: [
                'Middleware ដើរតួជា “តម្រង (filters)” សម្រាប់រាល់ request ដែលចូលមកក្នុង application។',
                'វាអាចត្រួតពិនិត្យថា user បាន login ឬអត់, មាន permission គ្រប់គ្រាន់ដែរឬទេ ឬក៏កត់ត្រាសកម្មភាពផ្សេងៗមុននឹងឲ្យ request បន្តទៅ controller។',
                'អ្នកអាចប្រើ middleware ដែល Laravel ផ្ដល់មកស្រាប់ ឬបង្កើត custom middleware ដោយខ្លួនឯងតាមតម្រូវការ។'
              ]
            },
            {
              id: '7.2.1',
              title: 'The Auth Middleware',
              type: 'code',
              content: [
                'ដាក់ `auth` middleware លើ routes ឬ controller constructors ដើម្បីការពារទំព័រដែលត្រូវការការចូលប្រើដោយ user ដែលបាន login តែប៉ុណ្ណោះ។',
                'បើ guest ព្យាយាមចូលទៅកាន់ route ដែលបានការពារ ពួកគេនឹងត្រូវ redirect ទៅកាន់ទំព័រ login ដោយស្វ័យប្រវត្តិ។'
              ],
              code: '// ក្នុង routes/web.php\nRoute::get("/dashboard", [DashboardController::class, "index"])->middleware("auth");',
              language: 'php'
            },
            {
              id: '7.2.2',
              title: 'Custom Middleware',
              type: 'code',
              content: [
                'បង្កើត logic ផ្ទាល់ខ្លួន ដើម្បីដំណើរការមុន ឬក្រោយ request ចូលទៅកាន់ application (ឧទាហរណ៍៖ logging, checking permissions ឬ modifying request data)។',
                'ប្រើ Artisan command ដើម្បីបង្កើត class ថ្មីបានយ៉ាងរហ័ស និងមានរចនាសម្ព័ន្ធត្រឹមត្រូវស្រាប់។'
              ],
              code: '// បង្កើត Middleware Class\nphp artisan make:middleware IsAdmin\n\n// ក្នុង handle method នៃ Middleware\nif ($request->user() && $request->user()->role === "admin") {\n    return $next($request);\n}',
              language: 'php',
              insight: 'កុំភ្លេចចុះឈ្មោះ Custom Middleware របស់អ្នកក្នុង `app/Http/Kernel.php` ទើបអាចប្រើក្នុង routes បាន។'
            }
          ]
        },
        {
          id: '7.3',
          title: 'Gates និង Policies',
          slides: [
            {
              id: '7.3.0',
              title: 'ការកំណត់សិទ្ធិលម្អិត (Granular Permissions)',
              type: 'intro',
              content: [
                'Authentication ផ្ដោតលើសំណួរថា “តើអ្នកជាអ្នកណា?” ដើម្បីបញ្ជាក់អត្តសញ្ញាណរបស់ user។',
                'Authorization ផ្ដោតលើសំណួរថា “តើអ្នកមានសិទ្ធិធ្វើអ្វីខ្លះ?” ដើម្បីគ្រប់គ្រងសិទ្ធិប្រើប្រាស់មុខងារផ្សេងៗក្នុង application។',
                'Laravel ផ្ដល់ **Gates** សម្រាប់គ្រប់គ្រងសកម្មភាពសាមញ្ញៗ និង **Policies** សម្រាប់គ្រប់គ្រងសិទ្ធិលើ resource ឬ model ជាក់លាក់។'
              ]
            },
            {
              id: '7.3.1',
              title: 'ការកំណត់ Gates',
              type: 'code',
              content: [
                'Gates គឺជា closures ដែលប្រើសម្រាប់កំណត់ថា user ម្នាក់មានសិទ្ធិធ្វើសកម្មភាពណាមួយ ឬអត់។',
                'ជាទូទៅ gates ត្រូវបានកំណត់នៅក្នុង `AuthServiceProvider` ដើម្បីគ្រប់គ្រង authorization logic នៅកម្រិតសាមញ្ញៗ។'
              ],
              code: 'Gate::define("update-post", function (User $user, Post $post) {\n    return $user->id === $post->user_id;\n});',
              language: 'php'
            },
            {
              id: '7.3.2',
              title: 'ការប្រើប្រាស់ Policies',
              type: 'code',
              content: [
                'Policies គឺជា classes ដែលប្រើសម្រាប់រៀបចំ authorization logic សម្រាប់ model ជាក់លាក់មួយ ដូចជា Post, User ឬ Product។',
                'នេះជាវិធីសាស្ត្រដែលត្រូវបានណែនាំ (preferred way) សម្រាប់ applications ធំៗ ព្រោះវាជួយឲ្យ code មានរបៀបរៀបរយ និងងាយគ្រប់គ្រង។'
              ],
              code: '// បង្កើត Policy\nphp artisan make:policy PostPolicy --model=Post\n\n// ប្រើក្នុង Controller\n$this->authorize("update", $post);',
              language: 'php'
            },
            {
              id: '7.3.3',
              title: 'Blade Directives',
              type: 'code',
              content: [
                'បង្ហាញ ឬលាក់ផ្នែកខ្លះនៃ UI ដោយផ្អែកលើសិទ្ធិរបស់ user ដែលកំពុង login។',
                'ប្រើ `@can` និង `@cannot` ក្នុង Blade ដើម្បីធ្វើឲ្យ template ស្អាត ងាយអាន និងគ្រប់គ្រង authorization logic បានងាយស្រួល។'
              ],
              code: '@can("update", $post)\n    <a href="/post/{{ $post->id }}/edit">Edit Post</a>\n@else\n    <p>អ្នកមិនមានសិទ្ធិកែប្រែ Post នេះទេ។</p>\n@endcan',
              language: 'php',
              insight: 'កុំសង្ឃឹមលើការលាក់ UI តែមួយមុខ ត្រូវតែ Verify សិទ្ធិនៅក្នុង Controller ម្ដងទៀតជានិច្ច។'
            }
          ]
        }
      ]
    },
    {
      id: 'module-8',
      title: 'Module 8: ទំនាក់ទំនងក្នុង Eloquent ORM (Relationships)',
      lessons: [
        {
          id: '8.1',
          title: 'ការកំណត់ទំនាក់ទំនង (Defining Relationships)',
          slides: [
            {
              id: '8.1.0',
              title: 'ការភ្ជាប់ Model របស់អ្នកចូលគ្នា',
              type: 'intro',
              content: [
                'ទិន្នន័យក្នុងពិភពពិតតែងមានទំនាក់ទំនងគ្នា ដូចជា User ម្នាក់អាចមាន Posts ច្រើន ឬ Post មួយអាចមាន Comments ជាច្រើន។',
                'Eloquent ធ្វើឱ្យទំនាក់ទំនងទាំងនេះងាយស្រួលប្រើ ដូចជាការចូលប្រើ object properties ធម្មតា មិនចាំាច់សរសេរ SQL ស្មុគស្មាញ។',
                'យើងនឹងរៀនអំពីប្រភេទ relationships ទូទៅ និងកម្រិតខ្ពស់ ដើម្បីគ្រប់គ្រង data ឲ្យមានប្រសិទ្ធភាព។'
              ],
            },
            {
              id: '8.1.1',
              title: 'One-to-One & One-to-Many',
              type: 'code',
              content: [
                'ជាគ្រឹះសំខាន់នៃគ្រប់ប្រព័ន្ធ database ដែលប្រើសម្រាប់កំណត់ទំនាក់ទំនងរវាងតារាង។',
                'ប្រើ `hasOne`, `belongsTo`, `hasMany` និង `belongsTo` ដើម្បីបង្កើត relationship រវាង models ឲ្យមានរចនាសម្ព័ន្ធច្បាស់លាស់។'
              ],
              code: '// 1:1 - User ម្នាក់មាន Profile មួយ\npublic function profile() { return $this->hasOne(Profile::class); }\n\n// 1:N - User ម្នាក់មាន Posts ច្រើន\npublic function posts() { return $this->hasMany(Post::class); }',
              language: 'php'
            },
            {
              id: '8.1.2',
              title: 'Many-to-Many',
              type: 'code',
              content: [
                'User ម្នាក់អាចមាន roles ច្រើន ហើយ role មួយក៏អាចត្រូវបានប្រើដោយ users ច្រើននាក់ដែរ។',
                'ទំនាក់ទំនងបែបនេះត្រូវការប្រើ pivot table (ឧទាហរណ៍ `role_user`) ដើម្បីភ្ជាប់ទំនាក់ទំនងរវាងទាំងពីរ។'
              ],
              code: '// ក្នុង User Model\npublic function roles() {\n    return $this->belongsToMany(Role::class);\n}',
              language: 'php',
              insight: 'Laravel សន្មតថាឈ្មោះ pivot table គឺជាឈ្មោះ Model ទាំងពីរឯកវចនៈ (singular) រៀបតាមលំដាប់អក្ខរក្រម។'
            },
            {
              id: '8.1.3',
              title: 'Advanced Through Relations',
              type: 'code',
              content: [
                '**Has Many Through**: ប្រើសម្រាប់ទាញយកទិន្នន័យឆ្លងកាត់ table កណ្តាលមួយ ដើម្បីចូលទៅកាន់ table ចុងក្រោយបានដោយផ្ទាល់ (ឧទាហរណ៍ Country → Users តាមរយៈ States)។',
                '**Has One Through**: ដំណើរការដូចគ្នា ប៉ុន្តែប្រើសម្រាប់ទាញយក record តែមួយគត់តាមរយៈ table កណ្តាល។'
              ],
              code: '// Project -> Environment -> Deployment\n\n// Has Many Through\npublic function deployments() {\n    return $this->hasManyThrough(Deployment::class, Environment::class);\n}\n\n// Has One Through\npublic function deployment() {\n    return $this->hasOneThrough(Deployment::class, Environment::class);\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '8.2',
          title: 'ការទាញទិន្នន័យដែលមានទំនាក់ទំនង (Querying Relationships)',
          slides: [
            {
              id: '8.2.0',
              title: 'Fetching Related Data',
              type: 'intro',
              content: [
                'នៅពេលកំណត់ relationship រួចហើយ អ្នកអាចប្រើវាបានដូចជា properties ធម្មតាក្នុង model ដើម្បីចូលប្រើទិន្នន័យបានយ៉ាងងាយស្រួល។',
                'ទោះជាយ៉ាងណា ត្រូវប្រុងប្រយ័ត្នចំពោះ performance ព្រោះការទាញទិន្នន័យច្រើនអាចធ្វើឲ្យ application ដំណើរការយឺតបាន។',
                'យើងនឹងរៀនពីវិធី load ទិន្នន័យឲ្យមានប្រសិទ្ធភាព ដើម្បីបង្កើនល្បឿន និងកាត់បន្ថយ query ច្រើន។'
              ]
            },
            {
              id: '8.2.1',
              title: 'Eager Loading (with())',
              type: 'code',
              content: [
                'ជៀសវាងបញ្ហា **N+1 query problem** ដែលកើតឡើងពេលយើងទាញទិន្នន័យ relationship ក្នុង loop ដោយមិនបាន optimize។',
                'ប្រើ eager loading ដើម្បីទាញទិន្នន័យដែលពាក់ព័ន្ធទាំងអស់ក្នុងតែ 2 queries ឬតិចជាងនេះ ជំនួសឱ្យការបង្កើត queries រាប់សិបឬរាប់រយ។'
              ],
              code: '// បែបនេះមិនល្អ (N+1 queries)\n$posts = Post::all(); \n\n// បែបនេះល្អ (Eager Loaded)\n$posts = Post::with("user", "comments")->get();',
              language: 'php',
              insight: 'ប្រើ Eager Loading ជានិច្ចនៅពេលអ្នក loop លើ collection ហើយទាញយកទំនាក់ទំនង (relations) របស់វា។'
            },
            {
              id: '8.2.2',
              title: 'Lazy Eager Loading',
              type: 'code',
              content: [
                'ជួនកាលអ្នកចង់ load relationship តែពេលមានលក្ខខណ្ឌជាក់លាក់ណាមួយប៉ុណ្ណោះ ដើម្បីជៀសវាងការទាញទិន្នន័យមិនចាំបាច់។',
                'ប្រើ `load()` method លើ model instance ដែលមានស្រាប់ ដើម្បី load relation បន្ថែមតាមតម្រូវការ។'
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
              title: 'ការគ្រប់គ្រងការភ្ជាប់ទំនាក់ទំនង (Managing Connections)',
              type: 'intro',
              content: [
                'តើយើងគ្រប់គ្រង និងរក្សាទុកទំនាក់ទំនងរវាង models នីមួយៗដោយរបៀបណា?',
                'Eloquent ផ្តល់ methods ពិសេសៗសម្រាប់បង្កើត និង sync ទំនាក់ទំនងទិន្នន័យបានយ៉ាងងាយស្រួល និងមានរចនាសម្ព័ន្ធច្បាស់លាស់។',
                'វាមានសុវត្ថិភាព និងងាយប្រើជាងការកំណត់ foreign keys ដោយដៃ ព្រោះ Laravel គ្រប់គ្រង logic ទាំងអស់ឲ្យស្រាប់។'
              ]

            },
            {
              id: '8.3.1',
              title: 'ការ Save និង Create',
              type: 'code',
              content: [
                'ប្រើ `save()` ឬ `create()` ដោយផ្ទាល់លើ relationship នោះ ដើម្បីបង្កើត និងភ្ជាប់ទិន្នន័យថ្មីជាមួយគ្នា។',
                'Laravel នឹងកំណត់ foreign key ឱ្យស្វ័យប្រវត្តិ ដោយផ្អែកលើ relationship ដែលបានកំណត់រួចហើយ។'
              ],
              code: '$user = User::find(1);\n\n// វិធីទី១៖ Save instance\n$user->posts()->save(new Post(["title" => "New"]));\n\n// វិធីទី២៖ Create ពី array\n$user->posts()->create(["title" => "New"]);',
              language: 'php'
            },
            {
              id: '8.3.2',
              title: 'Attach, Sync និង Detach',
              type: 'code',
              content: [
                'ប្រើសម្រាប់តែទំនាក់ទំនងប្រភេទ **Many-to-Many** ប៉ុណ្ណោះ ដើម្បីគ្រប់គ្រងទិន្នន័យនៅក្នុង pivot table។',
                'មាន methods សំខាន់ៗដូចជា `attach()` សម្រាប់បន្ថែមទំនាក់ទំនងថ្មី, `sync()` សម្រាប់ធ្វើឲ្យទិន្នន័យនៅក្នុង pivot table ស្របតាម list ដែលផ្ដល់, និង `detach()` សម្រាប់ដកទំនាក់ទំនងចេញ។'
              ],
              code: '$user = User::find(1);\n\n// បន្ថែម Role ថ្មី\n$user->roles()->attach($roleId);\n\n// Sync (បន្ថែមដែលខ្វះ, លុបដែលលើស) - ណែនាំឱ្យប្រើ\n$user->roles()->sync([1, 2, 3]);\n\n// ដក Role ចេញវិញ\n$user->roles()->detach($roleId);',
              language: 'php',
              insight: 'Sync គឺស័ក្តិសមបំផុតសម្រាប់ Form កែប្រែ (Update forms) ដែលមាន Checkboxes។'
            }
          ]
        }
      ]
    }
  ]
};