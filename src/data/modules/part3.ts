import { Part } from '../types';

export const part3: Part = {
  id: 'part-3',
  title: 'Part 3: ការបង្កើត Features ជាមួយ Laravel (Building Features with Laravel)',
  modules: [
    {
      id: 'module-6',
      title: 'Module 6: ការប្រើប្រាស់ Forms (Working with Forms)',
      titleEn: 'Working with Forms',
      icon: 'Layout',
      color: '#3b82f6',
      lessons: [
        {
          id: '6.1',
          title: 'HTML Forms ក្នុង Laravel',
          titleEn: 'HTML Forms in Laravel',
          duration: '20 mins',
          level: 'Core',
          slides: [
            {
              id: '6.1.0',
              title: 'ការគ្រប់គ្រង User Input',
              titleEn: 'Managing User Input',
              type: 'intro',
              content: [
                '**User Interaction**: Forms គឺជាវិធីសំខាន់បំផុតដែល user ប្រើដើម្បីផ្ញើទិន្នន័យ (input) មកកាន់ application របស់អ្នក។ (ដូចជា form ចុះឈ្មោះ, login ឬបញ្ចូលព័ត៌មានផ្សេងៗ ដើម្បីឱ្យកម្មវិធីអាចដំណើរការបន្តបាន)',
                '**Security Risk**: ប៉ុន្តែ forms ក៏អាចជាប្រភពនៃបញ្ហាសុវត្ថិភាព ដូចជា XSS ឬ CSRF ប្រសិនបើយើងមិនគ្រប់គ្រងឲ្យបានត្រឹមត្រូវ។ (ទាមទារឱ្យយើងមានការត្រួតពិនិត្យ និងការពារឱ្យបានហ្មត់ចត់បំផុតដើម្បីការពារទិន្នន័យ)',
                '**Built-in Shield**: Laravel ផ្តល់នូវការការពារស្រាប់ (built-in protection) ដូចជា CSRF protection, validation និង escaping data។ (ជួយការពារ application របស់អ្នកពីការវាយប្រហារផ្សេងៗដោយមិនចាំបាច់សរសេរកូដការពារដោយដៃ)'
              ],
              animation: 'security',
              insight: 'Security មិនមែនជា "Add-on" បន្ថែមក្រៅនោះទេ ក្នុង Laravel វាត្រូវបានបង្កើតមកជាមួយ Core តែម្តង។'
            },
            {
              id: '6.1.1',
              title: 'GET vs. POST',
              titleEn: 'GET vs. POST',
              type: 'concept',
              content: [
                '**GET Method**: ប្រើសម្រាប់ស្វែងរក (search) ឬចម្រាញ់ទិន្នន័យ (filter) ដែលមិនប៉ះពាល់ដល់ data។ (parameters នឹងបង្ហាញនៅលើ URL ហើយអាច bookmark ឬ share ទៅកាន់អ្នកដទៃបានយ៉ាងងាយ)',
                '**POST Method**: ប្រើសម្រាប់បង្កើត (create) ឬផ្ញើទិន្នន័យដែលបម្លែង state នៃកម្មវិធី។ (data ត្រូវបានផ្ញើនៅក្នុង request body ហើយមិនបង្ហាញនៅលើ URL នាំឱ្យមានសុវត្ថិភាពជាង)',
                '**Best Practice**: សម្រាប់សកម្មភាពដែលបង្កើត ឬផ្លាស់ប្តូរ data (create/update/delete) ត្រូវប្រើ POST ជានិច្ច។ (ដើម្បីរក្សាសុវត្ថិភាព និងការពារការផ្ញើ Request ច្រើនដងដោយអចេតនា)'
              ]
            },
            {
              id: '6.1.2',
              title: 'ការការពារ CSRF',
              titleEn: 'CSRF Protection',
              type: 'code',
              content: [
                '**CSRF Protection**: រាល់ POST form ទាំងអស់ **ត្រូវតែ** រួមបញ្ចូល `@csrf` directive ដើម្បីធានាសុវត្ថិភាព។ (បើគ្មានវាទេ Laravel នឹងបដិសេធ Request នោះភ្លាមៗដើម្បីការពារការលួចផ្ញើទិន្នន័យពីក្រៅ)',
                '**Token Verification**: វានឹងបង្កើត hidden token ដោយស្វ័យប្រវត្តិ ដែល Laravel ប្រើសម្រាប់ verify request។ (ដើម្បីបញ្ជាក់ថាអ្នកដែលកំពុងបំពេញ Form ពិតជាកំពុងនៅលើ Website របស់អ្នកមែន)'
              ],
              code: '<form method="POST" action="/posts">\n    @csrf\n    \n    <input type="text" name="title">\n    <button type="submit">Submit</button>\n</form>',
              language: 'php'
            },
            {
              id: '6.1.3',
              title: 'Form Method Spoofing (ការបន្លំ Method)',
              titleEn: 'Form Method Spoofing',
              type: 'code',
              content: [
                '**HTML Limitation**: ជាទូទៅ HTML forms គាំទ្រតែ GET និង POST ប៉ុណ្ណោះ។ (វាមិនអាចផ្ញើ PUT, PATCH ឬ DELETE ដោយផ្ទាល់បានទេ)',
                '**The Solution**: Laravel ផ្តល់ `@method` directive ដើម្បីជួយបំពេញចន្លោះប្រហោងនេះ។ (វាបង្កើត hidden input មួយឈ្មោះ `_method` ដែល Laravel នឹងអានដើម្បីដឹងពី Method ពិតប្រាកដដែលយើងចង់ប្រើ)'
              ],
              code: '<form action="/posts/1" method="POST">\n    @csrf\n    @method("PUT")\n    \n    <input type="text" name="title">\n    <button type="submit">Update</button>\n</form>',
              language: 'php',
              insight: 'ទោះបីប្រើ @method("PUT") ក៏ដោយ ក៏ attribute method របស់ form នៅតែជា "POST" ដដែល។'
            },
            {
              id: '6.1.4',
              title: 'Repopulating Forms (ការរក្សាទិន្នន័យចាស់)',
              titleEn: 'Repopulating Forms',
              type: 'code',
              content: [
                '**User Frustration**: វាជារឿងគួរឱ្យធុញទ្រាន់បំផុត ពេលបំពេញ Form ខុសបន្តិច ហើយត្រូវសរសេរអ្វីៗឡើងវិញទាំងអស់។',
                '**The old() Helper**: Laravel ផ្តល់មុខងារ `old()` ដើម្បីទាញយកតម្លៃដែល User បានវាយបញ្ចូលកាលពី Request មុន។ (ជួយឱ្យទិន្នន័យនៅរក្សាដដែលពេលមាន Validation Error)'
              ],
              code: '<input type="text" name="username" value="{{ old("username") }}">\n\n<select name="country">\n    <option value="kh" {{ old("country") == "kh" ? "selected" : "" }}>Cambodia</option>\n</select>',
              language: 'php'
            },
            {
              id: '6.1.5',
              title: 'Real-world Demo: បង្កើត Registration Form',
              titleEn: 'Registration Form Demo',
              type: 'code',
              content: [
                '**Complete Implementation**: នេះគឺជាឧទាហរណ៍នៃ Form ចុះឈ្មោះដែលមានការការពារ CSRF និងការប្រើប្រាស់ POST Method ពេញលេញ។',
                '**Old Input**: ប្រើ `old()` helper ដើម្បីរក្សាទុកតម្លៃដែល user បានបំពេញ ប្រសិនបើមាន error កើតឡើង។'
              ],
              code: '<form action="{{ route("register") }}" method="POST" class="space-y-4">\n    @csrf\n\n    <div>\n        <label>ឈ្មោះពេញ:</label>\n        <input type="text" name="name" value="{{ old("name") }}" class="form-input">\n    </div>\n\n    <div>\n        <label>អ៊ីមែល:</label>\n        <input type="email" name="email" value="{{ old("email") }}" class="form-input">\n    </div>\n\n    <div>\n        <label>ពាក្យសម្ងាត់:</label>\n        <input type="password" name="password" class="form-input">\n    </div>\n\n    <button type="submit" class="btn-primary">ចុះឈ្មោះឥឡូវនេះ</button>\n</form>',
              language: 'php'
            }
          ]
        },
        {
          id: '6.2',
          title: 'ការធ្វើ Request Validation',
          titleEn: 'Request Validation',
          duration: '25 mins',
          level: 'Core',
          slides: [
            {
              id: '6.2.0',
              title: 'ច្បាប់មាស (The Golden Rule)',
              titleEn: 'The Golden Rule',
              type: 'intro',
              content: [
                '**Trust Issues (កុំទុកចិត្ត User Input)**: ជាគោលការណ៍គ្រឹះនៃ Security អ្នកត្រូវចាត់ទុកគ្រប់ទិន្នន័យដែលផ្ញើមកពី User ថាជាទិន្នន័យមិនមានសុវត្ថិភាព ឬអាចមានកូដដែលមានបំណងអាក្រក់ (Malicious code)។',
                '**Data Integrity (ការធានានូវគុណភាពទិន្នន័យ)**: Validation មិនត្រឹមតែការពារ Security ប៉ុណ្ណោះទេ ប៉ុន្តែវាជួយធានាថាទិន្នន័យក្នុង Database របស់អ្នកមានភាពត្រឹមត្រូវតាមទម្រង់ (Format) និងលក្ខខណ្ឌដែលអ្នកចង់បាន។',
                '**Developer Experience (ភាពងាយស្រួលសម្រាប់ Developer)**: Laravel ផ្ដល់ជូននូវ Validation Engine ដ៏មានអានុភាព ដែលអនុញ្ញាតឱ្យអ្នកកំណត់លក្ខខណ្ឌស្មុគស្មាញដោយប្រើប្រាស់ Syntax សាមញ្ញ និងខ្លីបំផុត។'
              ],
              animation: 'validation_flow'
            },
            {
              id: '6.2.1',
              title: 'ការប្រើប្រាស់ validate() Method',
              titleEn: 'Using validate() Method',
              type: 'code',
              content: [
                '**Inline Validation (ការពិនិត្យក្នុង Controller)**: ប្រើប្រាស់ `$request->validate()` ដើម្បីកំណត់ Rules ភ្លាមៗ។ ប្រសិនបើ Validation មិនជាប់ (Fail) Laravel នឹងបញ្ឈប់ការងារបន្ត ហើយ Redirect ទៅកាន់ទំព័រមុនដោយស្វ័យប្រវត្តិ។',
                '**Automatic Error Handling**: អ្នកមិនចាំបាច់សរសេរ Logic ដើម្បីឆែកមើល Error ម្ដងមួយៗឡើយ។ Laravel នឹងចាត់ចែងការផ្ញើសារព្រមាន (Error messages) និងការរក្សាទុកទិន្នន័យចាស់ (Old input) ឱ្យអ្នកដោយស្វ័យប្រវត្តិ។',
                '**Comprehensive Rules**: អ្នកអាចប្រើ Rules ជាច្រើនក្នុងពេលតែមួយដូចជា `required`, `email`, `unique`, `min`, `max` និង `confirmed` (សម្រាប់ Password) ជាដើម។'
              ],
              code: '$validated = $request->validate([\n    "title" => "required|unique:posts|max:255",\n    "body" => "required|min:10"\n]);',
              language: 'php',
              animation: 'validation_inline'
            },
            {
              id: '6.2.2',
              title: 'Form Request Classes',
              titleEn: 'Form Request Classes',
              type: 'code',
              content: [
                '**Separation of Concerns (ការបែងចែកការងារ)**: នៅពេល Validation Rules កើនឡើងច្រើន គួរប្រើ Form Request ដើម្បីបំបែក Logic ចេញពី Controller។ នេះធ្វើឱ្យ Controller របស់អ្នកមានភាពស្អាត (Clean) និងងាយស្រួលថែទាំ។',
                '**Reusability & Clean Code**: Form Request អាចប្រើឡើងវិញបានក្នុង Controller Actions ផ្សេងៗគ្នា (ឧទាហរណ៍៖ `store` និង `update`) ដែលជួយកាត់បន្ថយកូដដែលសរសេរជាន់គ្នា (DRY Principle)។',
                '**Authorization Integrated**: ក្នុង Form Request អ្នកក៏អាចឆែកមើលសិទ្ធិរបស់ User (Authorize) ថាតើពួកគេមានសិទ្ធិធ្វើសកម្មភាពនេះដែរឬទេ មុនពេលឈានដល់ការ Validation។'
              ],
              code: '// បង្កើត Class តាមរយៈ Artisan\nphp artisan make:request StorePostRequest\n\n// ប្រើក្នុង Controller របស់អ្នក\npublic function store(StorePostRequest $request) {\n    // Request ដែលចូលមកត្រូវបាន Validate រួចរាល់!\n    $data = $request->validated();\n}',
              language: 'php',
              insight: 'ប្រើ Form Requests នៅពេលណាដែលអ្នកមានលក្ខខណ្ឌ Validation ចាប់ពី ៥ ទៅ ៦ ឡើងទៅ។',
              animation: 'form_request'
            },
            {
              id: '6.2.3',
              title: 'ការបង្ហាញ Error',
              titleEn: 'Displaying Errors',
              type: 'code',
              content: [
                '**User Experience (បទពិសោធន៍អ្នកប្រើប្រាស់)**: ការបង្ហាញ Error ឱ្យបានច្បាស់លាស់ និងចំគោលដៅ ជួយឱ្យអ្នកប្រើប្រាស់ដឹងពីកំហុសរបស់ពួកគេ និងងាយស្រួលក្នុងការកែតម្រូវទិន្នន័យឡើងវិញ។',
                '**Blade Directives**: ប្រើប្រាស់ `@error` directive ដើម្បីឆែកមើល Error នៃ Field ជាក់លាក់ណាមួយ និងបង្ហាញសារព្រមានភ្លាមៗនៅខាងក្រោម Input នោះ។',
                '**Global $errors Object**: Laravel ផ្ដល់ជូននូវ Variable `$errors` ជាសកលក្នុងរាល់ Views ដែលអនុញ្ញាតឱ្យអ្នកបង្ហាញរាល់ Error messages ទាំងអស់ក្នុងពេលតែមួយបានយ៉ាងងាយស្រួល។'
              ],
              code: '@error("title")\n    <div class="alert alert-danger">{{ $message }}</div>\n@enderror',
              language: 'php',
              animation: 'error_display'
            },
            {
              id: '6.2.4',
              title: 'Form Request Authorization',
              titleEn: 'Form Request Authorization',
              type: 'code',
              content: [
                '**Security Gate**: Form Requests មិនត្រឹមតែមាន Validation rules ប៉ុណ្ណោះទេ តែវាក៏មាន `authorize()` method ផងដែរ។',
                '**Permission Checking**: អ្នកអាចឆែកមើលថា តើ User បច្ចុប្បន្នមានសិទ្ធិកែប្រែទិន្នន័យនេះដែរឬទេ។ (បើត្រឡប់មក false នោះ Laravel នឹងបិទ Request នេះចោលដោយស្វ័យប្រវត្តិជាមួយលេខកូដ 403 Forbidden)'
              ],
              code: 'public function authorize(): bool {\n    $post = $this->route("post");\n    // អនុញ្ញាតឲ្យតែម្ចាស់ Post ប៉ុណ្ណោះអាចធ្វើការ Update បាន\n    return $post && $this->user()->id === $post->user_id;\n}',
              language: 'php',
              insight: 'ជាទូទៅបើអ្នកមាន Policy ដាច់ដោយឡែក អ្នកអាច return true ក្នុង method នេះបាន។'
            },
            {
              id: '6.2.5',
              title: 'Real-world Demo: Profile Update Validation',
              titleEn: 'Profile Update Demo',
              type: 'code',
              content: [
                '**Logic Overview**: ឧទាហរណ៍នៃការ Validate ទិន្នន័យសម្រាប់ Update Profile ដែលរួមមានការឆែក Email ស្ទួន (លើកលែងតែ Email ខ្លួនឯង)។',
                '**Clean Controller**: រាល់ Validation logic ត្រូវបានដាក់ក្នុង `StoreProfileRequest` ដើម្បីឱ្យ Controller ងាយស្រួលអាន។'
              ],
              code: '// ក្នុង StoreProfileRequest.php\npublic function rules() {\n    return [\n        "name" => "required|string|max:100",\n        "email" => "required|email|unique:users,email," . auth()->id(),\n        "bio" => "nullable|min:50|max:500",\n        "birthdate" => "required|date|before:today",\n    ];\n}\n\n// ក្នុង ProfileController.php\npublic function update(StoreProfileRequest $request) {\n    $user = auth()->user();\n    $user->update($request->validated());\n    \n    return back()->with("success", "Profile updated successfully!");\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '6.3',
          title: 'ការ Upload ឯកសារ (File Uploads)',
          titleEn: 'File Uploads',
          duration: '30 mins',
          level: 'Advanced',
          slides: [
            {
              id: '6.3.0',
              title: 'ការគ្រប់គ្រង Media',
              titleEn: 'Managing Media',
              type: 'intro',
              content: [
                '**Media Management**: ការគ្រប់គ្រងការ Upload ឯកសារ ដូចជា profile image, documents ឬ video។ (ជាកិច្ចការចាំបាច់សម្រាប់ Application សម័យថ្មីដែលអនុញ្ញាតឱ្យ User រក្សាទុកឯកសារផ្ទាល់ខ្លួន)',
                '**UploadedFile Object**: Laravel ផ្ដល់ Object ដែលមាន functions ស្រាប់ ដើម្បីគ្រប់គ្រង files បានយ៉ាងងាយ។ (ជួយឱ្យអ្នកអាចឆែកទំហំ file, ប្រភេទ file និងរក្សាទុកវាដោយប្រើកូដតែមួយជួរ)',
                '**Storage Flexibility**: អ្នកអាចរក្សាទុកឯកសារក្នុងម៉ាស៊ីនផ្ទាល់ ឬប្រើ Cloud ដូចជា AWS S3។ (ជួយឱ្យអ្នកអាចពង្រីកទំហំផ្ទុកទិន្នន័យបានយ៉ាងងាយស្រួលនៅពេល App មានអ្នកប្រើប្រាស់ច្រើន)'
              ],
              animation: 'file_upload'
            },
            {
              id: '6.3.1',
              title: 'ការរៀបចំ Form និងការ Upload',
              titleEn: 'Form Setup & Upload',
              type: 'code',
              content: [
                '**Form Configuration**: ត្រូវប្រាកដថា form របស់អ្នកមាន attribute `enctype="multipart/form-data"`។ (បើមិនដាក់ទេ Browser នឹងមិនបញ្ជូន file មកឱ្យ Server ឡើយ)',
                '**Request Methods**: ប្រើ `$request->file("name")` ដើម្បីទាញយក file object ឬ `$request->hasFile("name")` ដើម្បីពិនិត្យថាតើមាន file ផ្ញើមកឬអត់។',
                '**Automatic Storage**: ប្រើ `store("folder_name")` ដើម្បីរក្សាទុកឯកសារដោយស្វ័យប្រវត្តិ។ (វានឹងបង្កើតឈ្មោះ file ថ្មីដែលមានសុវត្ថិភាពឱ្យអ្នកភ្លាមៗ)'
              ],
              code: '// ក្នុង Blade\n<form action="/upload" method="POST" enctype="multipart/form-data">\n    @csrf\n    <input type="file" name="avatar">\n    <button type="submit">Upload</button>\n</form>\n\n// ក្នុង Controller\npublic function upload(Request $request) {\n    if ($request->hasFile("avatar")) {\n        $path = $request->file("avatar")->store("avatars");\n        return "File saved at: " . $path;\n    }\n}',
              language: 'php'
            },
            {
              id: '6.3.2',
              title: 'ការធ្វើ Validation លើឯកសារ',
              titleEn: 'File Validation',
              type: 'code',
              content: [
                '**Size & Type Restriction**: អ្នកត្រូវតែ Validate គ្រប់ឯកសារដែល Upload មក ដើម្បីការពារ Security និងទំហំ Disk។',
                '**Mimes Rule**: កំណត់ប្រភេទឯកសារដែលអនុញ្ញាត (ឧទាហរណ៍៖ `jpg, png, pdf`)។',
                '**Max Rule**: កំណត់ទំហំអតិបរមារបស់ឯកសារ (គិតជា Kilobytes)។'
              ],
              code: '$request->validate([\n    "avatar" => "required|image|mimes:jpeg,png,jpg|max:2048",\n    "document" => "required|mimes:pdf,docx|max:10240"\n]);',
              language: 'php',
              insight: '`max:2048` មានន័យថាទំហំអតិបរមាគឺ 2MB (2048 KB)។'
            },
            {
              id: '6.3.3',
              title: 'Storage Link & Public Access',
              titleEn: 'Storage Link',
              type: 'concept',
              content: [
                '**Private by Default**: ជាធម្មតាឯកសារក្នុង `storage/app` មិនអាចចូលមើលតាម URL បានទេ ដើម្បីសុវត្ថិភាព។',
                '**The Symbolic Link**: ប្រើ Command `php artisan storage:link` ដើម្បីបង្កើតផ្លូវកាត់ពី `public/storage` ទៅកាន់ `storage/app/public`។',
                '**Retrieving URLs**: ប្រើ `Storage::url($path)` ដើម្បីទទួលបាន URL សម្រាប់បង្ហាញរូបភាពនៅលើ Website របស់អ្នក។'
              ],
              code: '// បង្កើត Link (ធ្វើតែម្ដងគត់ក្នុងមួយ Project)\nphp artisan storage:link\n\n// បង្ហាញរូបភាពក្នុង Blade\n<img src="{{ Storage::url($user->avatar_path) }}">',
              language: 'php',
              insight: 'កុំភ្លេចកំណត់ `FILESYSTEM_DISK=public` ក្នុងឯកសារ `.env` ប្រសិនបើអ្នកចង់ឱ្យរូបភាពបង្ហាញជាសាធារណៈ។'
            },
            {
              id: '6.3.4',
              title: 'ការគ្រប់គ្រង Files កម្រិតខ្ពស់',
              titleEn: 'Advanced File Management',
              type: 'code',
              content: [
                '**Manual Naming**: ប្រើ `storeAs()` ប្រសិនបើអ្នកចង់កំណត់ឈ្មោះឯកសារដោយខ្លួនឯង។',
                '**File Operations**: Storage Facade ផ្ដល់មុខងារសម្រាប់ Check វត្តមានឯកសារ, ទាញយក (Download), និងលុប (Delete)។',
                '**Cloud Ready**: អ្នកអាចប្ដូរទៅរក្សាទុកលើ AWS S3 បានយ៉ាងងាយស្រួលដោយគ្រាន់តែប្ដូរការកំណត់ក្នុង Config។'
              ],
              code: 'use Illuminate\\Support\\Facades\\Storage;\n\n// រក្សាទុកជាមួយឈ្មោះជាក់លាក់\n$request->file("avatar")->storeAs("avatars", "user_1.jpg");\n\n// លុបឯកសារចាស់ចោល\nif (Storage::exists("avatars/old_image.jpg")) {\n    Storage::delete("avatars/old_image.jpg");\n}\n\n// ទាញយកឯកសារ\nreturn Storage::download("documents/report.pdf");',
              language: 'php'
            },
            {
              id: '6.3.5',
              title: 'ការ Upload ឯកសារច្រើន (Multiple Files)',
              titleEn: 'Multiple File Uploads',
              type: 'code',
              content: [
                '**Array Inputs**: ប្រើប្រាស់សញ្ញា `[]` នៅក្នុងឈ្មោះ Input ដើម្បីបញ្ជូនឯកសារជាទម្រង់ Array មកកាន់ Backend។ (ឧទាហរណ៍៖ ការ Upload រូបភាពច្រើនសន្លឹកសម្រាប់ផលិតផលមួយ)',
                '**Looping**: ក្នុង Controller អ្នកគ្រាន់តែ Loop លើ Array ដែលទទួលពី Request ដើម្បីរក្សាទុកឯកសារម្ដងមួយៗបានយ៉ាងងាយ។'
              ],
              code: '// Blade HTML\n<input type="file" name="photos[]" multiple>\n\n// Controller Logic\nif ($request->hasFile("photos")) {\n    foreach ($request->file("photos") as $photo) {\n        $path = $photo->store("gallery", "public");\n        // រក្សាទុក $path ចូលក្នុង Database\n    }\n}',
              language: 'php'
            },
            {
              id: '6.3.6',
              title: 'Real-world Demo: Avatar Upload System',
              titleEn: 'Avatar Upload Demo',
              type: 'code',
              content: [
                '**Full Workflow**: នេះគឺជាកូដពេញលេញសម្រាប់ Upload Avatar, លុបរូបភាពចាស់, និងរក្សាទុកឈ្មោះរូបភាពថ្មីចូលក្នុង Database។',
                '**Security**: ប្រើ `extension()` ជំនួសឱ្យការទុកចិត្តឈ្មោះ file ដើមរបស់ User។'
              ],
              code: 'public function updateAvatar(Request $request) {\n    $request->validate([\n        "avatar" => "required|image|max:1024", // 1MB Max\n    ]);\n\n    $user = auth()->user();\n\n    if ($request->hasFile("avatar")) {\n        // 1. លុបរូបចាស់ (បើមាន)\n        if ($user->avatar) {\n            Storage::delete($user->avatar);\n        }\n\n        // 2. Upload រូបថ្មី\n        $path = $request->file("avatar")->store("avatars", "public");\n\n        // 3. Update ក្នុង DB\n        $user->update(["avatar" => $path]);\n    }\n\n    return back()->with("status", "Avatar updated!");\n}',
              language: 'php'
            }
          ]
        }
      ]
    },
    {
      id: 'module-7',
      title: 'Module 7: ការបញ្ជាក់អត្តសញ្ញាណ និងការផ្ដល់សិទ្ធិ (Authentication & Authorization)',
      titleEn: 'Authentication & Authorization',
      icon: 'ShieldCheck',
      color: '#ef4444',
      lessons: [
        {
          id: '7.1',
          title: 'Built-in Authentication',
          titleEn: 'Built-in Authentication',
          duration: '35 mins',
          level: 'Core',
          slides: [
            {
              id: '7.1.0',
              title: 'កុំចំណាយពេលបង្កើតអ្វីដែលមានស្រាប់ (Don\'t Rebuild the Wheel)',
              titleEn: 'Don\'t Rebuild the Wheel',
              type: 'intro',
              content: [
                '**Security First**: Authentication ជាផ្នែកសំខាន់ដែលពិបាកធ្វើឲ្យត្រឹមត្រូវ និងមានហានិភ័យខ្ពស់។ (ប្រសិនបើធ្វើខុស អាចនាំឱ្យ Hacker លួចចូលប្រើគណនីរបស់អ្នកដទៃបាន)',
                '**Starter Kits**: Laravel ផ្តល់នូវ "Starter Kits" ផ្លូវការដែលបានរៀបចំប្រព័ន្ធស្រាប់។ (ជួយឱ្យអ្នកចាប់ផ្តើម Project ជាមួយប្រព័ន្ធ Login ដែលមានសុវត្ថិភាពបំផុតក្នុងរយៈពេលប៉ុន្មាននាទី)',
                '**Full Features**: វារួមមានមុខងារសំខាន់ៗដូចជា login, register, និង password reset។ (អ្នកមិនចាំបាច់ចំណាយពេលសរសេរកូដមូលដ្ឋានទាំងនេះឡើងវិញដោយខ្លួនឯងឡើយ)'
              ],
              animation: 'auth_overview'
            },
            {
              id: '7.1.1',
              title: 'ជម្រើសនៃ Scaffolding',
              titleEn: 'Scaffolding Options',
              type: 'concept',
              content: [
                '**Laravel Breeze**: ជា starter kit សាមញ្ញបំផុត ផ្តោតលើមូលដ្ឋាន authentication។ (ស័ក្តិសមបំផុតសម្រាប់អ្នកចាប់ផ្តើមដំបូងដែលចង់បានប្រព័ន្ធ Login បែបសាមញ្ញ និងងាយស្រួលកែប្រែ)',
                '**Laravel Jetstream**: ជា starter kit កម្រិតខ្ពស់ ដែលមានមុខងារពេញលេញដូចជា Teams និង 2FA។ (ល្អបំផុតសម្រាប់ Application ខ្នាតធំដែលត្រូវការសុវត្ថិភាពខ្ពស់ និងការគ្រប់គ្រងសមាជិកជាក្រុម)',
                '**Laravel UI**: ជា scaffolding បែប Legacy ដែលប្រើ Bootstrap ឬ Vue។ (ប្រើសម្រាប់តែគម្រោងចាស់ៗ ឬអ្នកដែលចង់ប្រើ Bootstrap ជាមូលដ្ឋានសម្រាប់ UI)'
              ],
              insight: 'សម្រាប់ Project ថ្មីភាគច្រើន គួរចាប់ផ្តើមជាមួយ Laravel Breeze។'
            },
            {
              id: '7.1.2',
              title: 'ការ Login ដោយដៃ (Manual Authentication)',
              titleEn: 'Manual Authentication',
              type: 'code',
              content: [
                '**Custom Login**: ទោះបីជា Starter Kits ល្អក៏ដោយ ជួនកាលអ្នកត្រូវការសរសេរកូដ Login ដោយខ្លួនឯង (ឧទាហរណ៍៖ សម្រាប់ API ឬការបញ្ជាក់អត្តសញ្ញាណតាមរបៀបផ្សេង)។',
                '**Auth::attempt()**: មុខងារនេះទទួលយក Array នៃ Credentials (ដូចជា email និង password) ហើយវានឹងឆែកមើលក្នុង Database ដោយស្វ័យប្រវត្តិ។ (វានឹង Hash password ឲ្យដោយស្វ័យប្រវត្តិដើម្បីយកទៅប្រៀបធៀប)'
              ],
              code: 'use Illuminate\\Support\\Facades\\Auth;\n\n$credentials = $request->only("email", "password");\n\nif (Auth::attempt($credentials)) {\n    // បង្កើត Session ថ្មីការពារការវាយប្រហារ Session Fixation\n    $request->session()->regenerate();\n    return redirect()->intended("dashboard");\n}\n\nreturn back()->withErrors(["email" => "អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវ"]);',
              language: 'php'
            },
            {
              id: '7.1.3',
              title: 'ការត្រួតពិនិត្យអត្តសញ្ញាណ (Checking Auth State)',
              titleEn: 'Checking Auth State',
              type: 'code',
              content: [
                '**Auth Status**: អ្នកតែងតែត្រូវឆែកមើលថា តើ User នោះបាន Login រួចឬនៅ? និងចង់ដឹងថាគាត់ជានរណា។',
                '**Global Helpers**: Laravel ផ្ដល់ `auth()->check()` ដើម្បីមើលស្ថានភាព Login និង `auth()->user()` ដើម្បីទាញយក Model របស់អ្នកប្រើប្រាស់នោះភ្លាមៗ។'
              ],
              code: '// ក្នុង Controller ផ្តាច់ការភ្ជាប់\nAuth::logout();\n$request->session()->invalidate();\n$request->session()->regenerateToken();\n\n// ក្នុង Blade View\n@auth\n    <p>សួស្តី {{ auth()->user()->name }}!</p>\n@else\n    <p>សូមចុះឈ្មោះ ឬចូលគណនី</p>\n@endauth',
              language: 'php'
            },
            {
              id: '7.1.4',
              title: 'Real-world Demo: Starter Kit Installation',
              titleEn: 'Starter Kit Demo',
              type: 'code',
              content: [
                '**Quick Setup**: របៀបដំឡើង Laravel Breeze ដើម្បីទទួលបានប្រព័ន្ធ Authentication ពេញលេញក្នុងរយៈពេលប៉ុន្មានវិនាទី។',
                '**Frontend Options**: អ្នកអាចជ្រើសរើសរវាង Blade, Vue (Inertia), ឬ React (Inertia)។'
              ],
              code: '// 1. ដំឡើងតាមរយៈ Composer\ncomposer require laravel/breeze --dev\n\n// 2. ដំឡើង Starter Kit (Blade version)\nphp artisan breeze:install blade\n\n// 3. Migrate Database និងដំឡើង Assets\nphp artisan migrate\nnpm install && npm run dev',
              language: 'php'
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
              titleEn: 'Guarding Your Pages',
              type: 'intro',
              content: [
                '**Request Filtering**: Middleware ដើរតួជា "តម្រង" សម្រាប់រាល់ Request ដែលចូលមក។ (ជួយត្រួតពិនិត្យ និងសម្អាត Request មុននឹងវាទៅដល់កន្លែងធ្វើការងារពិតប្រាកដ)',
                '**Access Control**: វាអាចត្រួតពិនិត្យថា User បាន Login ឬមានសិទ្ធិគ្រប់គ្រាន់ដែរឬទេ។ (បើមិនមានសិទ្ធិទេ វានឹងរារាំងមិនឱ្យចូលមើលទំព័រនោះភ្លាមៗ ដើម្បីរក្សាសុវត្ថិភាព)',
                '**Custom Logic**: អ្នកអាចបង្កើត Middleware ផ្ទាល់ខ្លួនសម្រាប់កិច្ចការជាក់លាក់។ (ឧទាហរណ៍៖ ការកត់ត្រាសកម្មភាពរបស់ User ឬការប្តូរភាសារបស់ Website តាមតម្រូវការ)'
              ],
              animation: 'middleware_guard'
            },
            {
              id: '7.2.1',
              title: 'The Auth Middleware',
              titleEn: 'The Auth Middleware',
              type: 'code',
              content: [
                '**Route Protection**: ដាក់ `auth` middleware លើ routes ដើម្បីការពារទំព័រសំខាន់ៗ។ (ធានាថាមានតែអ្នកដែលបាន Login ហើយប៉ុណ្ណោះ ទើបអាចចូលមើលព័ត៌មានទាំងនោះបាន)',
                '**Automatic Redirect**: បើ Guest ព្យាយាមចូល ពួកគេនឹងត្រូវបញ្ជូនទៅទំព័រ Login ស្វ័យប្រវត្តិ។ (ជួយសម្រួលដល់បទពិសោធន៍អ្នកប្រើប្រាស់ និងមិនចាំបាច់សរសេរកូដ Redirect ដោយដៃ)'
              ],
              code: '// ក្នុង routes/web.php\nRoute::get("/dashboard", [DashboardController::class, "index"])->middleware("auth");',
              language: 'php'
            },
            {
              id: '7.2.2',
              title: 'Custom Middleware',
              titleEn: 'Custom Middleware',
              type: 'code',
              content: [
                '**Custom Logic**: បង្កើត Logic ផ្ទាល់ខ្លួន ដើម្បីដំណើរការមុន ឬក្រោយ Request។ (ឧទាហរណ៍៖ ការឆែកមើលថាតើ User ម្នាក់នោះមានតួនាទីជា Admin ឬគ្រាន់តែជា User ធម្មតា)',
                '**Scaffolding**: ប្រើ Artisan command ដើម្បីបង្កើត Class ថ្មីបានយ៉ាងរហ័ស។ (ជួយបង្កើតគ្រោងកូដដែលត្រឹមត្រូវតាមស្ដង់ដារ និងងាយស្រួលក្នុងការសរសេរ Logic បន្ថែម)'
              ],
              code: '// បង្កើត Middleware Class\nphp artisan make:middleware IsAdmin\n\n// ក្នុង handle method នៃ Middleware\nif ($request->user() && $request->user()->role === "admin") {\n    return $next($request);\n}',
              language: 'php',
              insight: 'កុំភ្លេចចុះឈ្មោះ Custom Middleware របស់អ្នកក្នុង `app/Http/Kernel.php` ទើបអាចប្រើក្នុង routes បាន។'
            },
            {
              id: '7.2.3',
              title: 'Middleware Parameters',
              titleEn: 'Middleware Parameters',
              type: 'code',
              content: [
                '**Flexibility**: ជួនកាល Middleware តែមួយអាចត្រូវបានប្រើសម្រាប់គោលបំណងច្រើន ដោយគ្រាន់តែផ្លាស់ប្តូរ Parameter របស់វា។ (ឧទាហរណ៍៖ ការឆែក Role អាចទទួលយកឈ្មោះ Role ជា Parameter បាន)',
                '**Syntax**: ការបញ្ជូន Parameter ត្រូវបានសរសេរជាមួយសញ្ញា `:` ដូចជា `role:admin` ឬ `role:editor`។'
              ],
              code: '// ក្នុង Middleware\npublic function handle($request, $next, $role) {\n    if ($request->user()->role !== $role) {\n        abort(403);\n    }\n    return $next($request);\n}\n\n// ក្នុង Route\nRoute::get("/admin", [Controller::class, "index"])->middleware("role:admin");\nRoute::get("/editor", [Controller::class, "index"])->middleware("role:editor");',
              language: 'php'
            },
            {
              id: '7.2.4',
              title: 'Real-world Demo: Role-based Protection',
              titleEn: 'Role-based Protection Demo',
              type: 'code',
              content: [
                '**Custom Guarding**: ការប្រើប្រាស់ Middleware ដើម្បីការពារ Route សម្រាប់តែ Admin ប៉ុណ្ណោះ។',
                '**Reusability**: អ្នកអាចដាក់ Middleware នេះលើ Route ណាមួយដែលចង់បាន។'
              ],
              code: '// ក្នុង routes/web.php\nRoute::middleware(["auth", "admin"])->group(function () {\n    Route::get("/admin/settings", [AdminController::class, "settings"]);\n    Route::delete("/users/{user}", [AdminController::class, "destroy"]);\n});\n\n// ក្នុង EnsureUserIsAdmin Middleware\npublic function handle($request, $next) {\n    if ($request->user()->role !== "admin") {\n        abort(403, "សុំទោស អ្នកមិនមានសិទ្ធិចូលមើលទំព័រនេះទេ។");\n    }\n    return $next($request);\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '7.3',
          title: 'Gates និង Policies',
          titleEn: 'Gates and Policies',
          duration: '35 mins',
          level: 'Expert',
          slides: [
            {
              id: '7.3.0',
              title: 'ការកំណត់សិទ្ធិលម្អិត (Granular Permissions)',
              titleEn: 'Granular Permissions',
              type: 'intro',
              content: [
                '**Who are you?**: Authentication ផ្ដោតលើការបញ្ជាក់អត្តសញ្ញាណរបស់ user។ (ដើម្បីដឹងថា តើអ្នកដែលកំពុងចូលប្រើប្រាស់នេះជាសមាជិកពិតប្រាកដមែនឬទេ)',
                '**What can you do?**: Authorization ផ្ដោតលើការគ្រប់គ្រងសិទ្ធិប្រើប្រាស់មុខងារផ្សេងៗ។ (ដើម្បីកំណត់ថា តើ User ម្នាក់នេះមានសិទ្ធិលុបអត្ថបទ ឬគ្រាន់តែអាចមើលបានតែប៉ុណ្ណោះ)',
                '**Tools**: Laravel ផ្ដល់ Gates សម្រាប់សកម្មភាពសាមញ្ញ និង Policies សម្រាប់ Resource ជាក់លាក់។ (ជួយឱ្យការគ្រប់គ្រងសិទ្ធិកាន់តែមានរបៀបរៀបរយ និងងាយស្រួលកែប្រែ)'
              ],
              animation: 'gates_policies'
            },
            {
              id: '7.3.1',
              title: 'ការកំណត់ Gates',
              titleEn: 'Defining Gates',
              type: 'code',
              content: [
                '**Simple Authorization**: Gates គឺជា Closures ដែលប្រើសម្រាប់កំណត់សិទ្ធិបែបសាមញ្ញ។ (ដូចជាការឆែកមើលថា តើ User ម្នាក់អាចមើល Report នេះបានឬអត់ ដោយមិនចាំបាច់បង្កើត Class ថ្មី)',
                '**Centralized Rules**: ជាទូទៅវាត្រូវបានកំណត់ក្នុង `AuthServiceProvider`។ (ជួយឱ្យអ្នកងាយស្រួលគ្រប់គ្រងរាល់ច្បាប់នៃការអនុញ្ញាតទាំងអស់ក្នុងកន្លែងតែមួយ)'
              ],
              code: 'Gate::define("update-post", function (User $user, Post $post) {\n    return $user->id === $post->user_id;\n});',
              language: 'php'
            },
            {
              id: '7.3.2',
              title: 'ការប្រើប្រាស់ Policies',
              titleEn: 'Using Policies',
              type: 'code',
              content: [
                '**Resource Based**: Policies គឺជា Classes សម្រាប់រៀបចំសិទ្ធិលើ Model ជាក់លាក់។ (ឧទាហរណ៍៖ បង្កើត PostPolicy ដើម្បីកំណត់ថាអ្នកណាអាច Create, Edit ឬ Delete អត្ថបទបាន)',
                '**Scalability**: ជាវិធីសាស្ត្រដែលល្អបំផុតសម្រាប់ Application ធំៗ។ (ជួយឱ្យកូដរបស់អ្នកមានរបៀបរៀបរយ និងងាយស្រួលថែទាំនៅពេលចំនួន Model កើនឡើងច្រើន)'
              ],
              code: '// បង្កើត Policy\nphp artisan make:policy PostPolicy --model=Post\n\n// ប្រើក្នុង Controller\n$this->authorize("update", $post);',
              language: 'php'
            },
            {
              id: '7.3.3',
              title: 'Blade Directives',
              titleEn: 'Blade Directives',
              type: 'code',
              content: [
                '**UI Control**: បង្ហាញ ឬលាក់ផ្នែកខ្លះនៃ UI ដោយផ្អែកលើសិទ្ធិរបស់ User។ (ជួយឱ្យ User មើលឃើញតែប៊ូតុង ឬព័ត៌មានណាដែលពួកគេត្រូវបានអនុញ្ញាតឱ្យប៉ះពាល់ប៉ុណ្ណោះ)',
                '**Clean Templates**: ប្រើ `@can` និង `@cannot` ក្នុង Blade ដើម្បីឱ្យកូដមើលទៅមានរបៀប។ (ជួយកាត់បន្ថយការសរសេរកូដ PHP ស្មុគស្មាញនៅក្នុង HTML ដែលនាំឱ្យពិបាកអាន)'
              ],
              code: '@can("update", $post)\n    <a href="/post/{{ $post->id }}/edit">Edit Post</a>\n@else\n    <p>អ្នកមិនមានសិទ្ធិកែប្រែ Post នេះទេ។</p>\n@endcan',
              language: 'php',
              insight: 'កុំសង្ឃឹមលើការលាក់ UI តែមួយមុខ ត្រូវតែ Verify សិទ្ធិនៅក្នុង Controller ម្ដងទៀតជានិច្ច។'
            },
            {
              id: '7.3.4',
              title: 'Real-world Demo: Post Ownership Policy',
              titleEn: 'Post Ownership Demo',
              type: 'code',
              content: [
                '**Resource Safety**: ការប្រើប្រាស់ Policy ដើម្បីធានាថាមានតែម្ចាស់ Post ប៉ុណ្ណោះ ទើបអាចកែប្រែ ឬលុប Post របស់ខ្លួនបាន។',
                '**Automatic Binding**: Laravel នឹងឆែកមើល Model ស្វ័យប្រវត្តិ។'
              ],
              code: '// ក្នុង PostPolicy.php\npublic function update(User $user, Post $post) {\n    return $user->id === $post->user_id;\n}\n\n// ក្នុង Controller\npublic function edit(Post $post) {\n    $this->authorize("update", $post);\n    return view("posts.edit", compact("post"));\n}\n\n// ក្នុង Blade\n@can("update", $post)\n    <button>Edit</button>\n@endcan',
              language: 'php'
            }
          ]
        }
      ]
    },
    {
      id: 'module-8',
      title: 'Module 8: ទំនាក់ទំនងក្នុង Eloquent ORM (Relationships)',
      titleEn: 'Eloquent Relationships',
      icon: 'Database',
      color: '#8b5cf6',
      lessons: [
        {
          id: '8.1',
          title: 'ការកំណត់ទំនាក់ទំនង (Defining Relationships)',
          titleEn: 'Defining Relationships',
          duration: '40 mins',
          level: 'Advanced',
          slides: [
            {
              id: '8.1.0',
              title: 'ការភ្ជាប់ Model របស់អ្នកចូលគ្នា',
              titleEn: 'Connecting Your Models',
              type: 'intro',
              content: [
                '**Data Linkage**: ទិន្នន័យក្នុងពិភពពិតតែងមានទំនាក់ទំនងគ្នា។ (ឧទាហរណ៍៖ User ម្នាក់អាចមានអត្ថបទច្រើន ហើយអត្ថបទនីមួយៗអាចមានមតិយោបល់ច្រើន)',
                '**Eloquent Ease**: Eloquent ធ្វើឱ្យទំនាក់ទំនងទាំងនេះងាយស្រួលប្រើដូចជា property ធម្មតា។ (អ្នកមិនចាំបាច់សរសេរ SQL JOIN វែងៗដែលពិបាកអាន និងងាយមានកំហុសនោះទេ)',
                '**Efficiency**: យើងនឹងរៀនពីរបៀបគ្រប់គ្រង data ឱ្យមានប្រសិទ្ធភាពបំផុត។ (ជួយឱ្យកម្មវិធីរបស់អ្នកដើរលឿន ទោះបីជាមានទិន្នន័យរាប់ម៉ឺនជួរទាក់ទងគ្នាក៏ដោយ)'
              ],
              animation: 'relationship_types'
            },
            {
              id: '8.1.1',
              title: 'One-to-One Relationship',
              titleEn: 'One-to-One Relationship',
              type: 'code',
              content: [
                '**Direct Link**: ទំនាក់ទំនងមួយទល់នឹងមួយ កើតឡើងនៅពេលដែល Record មួយក្នុង Table A មានទំនាក់ទំនងតែមួយគត់ជាមួយ Record មួយក្នុង Table B។',
                '**Example**: ឧទាហរណ៍ User ម្នាក់មាន Profile តែមួយគត់។',
                '**Defining Methods**: ប្រើ `hasOne()` លើ User model និង `belongsTo()` លើ Profile model (បញ្ច្រាសមកវិញ)។'
              ],
              code: '// User.php\npublic function profile() {\n    return $this->hasOne(Profile::class);\n}\n\n// Profile.php\npublic function user() {\n    return $this->belongsTo(User::class);\n}',
              language: 'php',
              insight: 'ប្រើ belongsTo() នៅលើ Model ណាដែលមាន Foreign Key (ឧ. user_id) នៅក្នុង Table របស់វា។',
              animation: 'one_to_one'
            },
            {
              id: '8.1.2',
              title: 'One-to-Many Relationship',
              titleEn: 'One-to-Many Relationship',
              type: 'code',
              content: [
                '**Common Link**: ជាទំនាក់ទំនងដែលជួបញឹកញាប់បំផុត ដែល Record មួយអាចមានទំនាក់ទំនងជាមួយ Record ច្រើននៅម្ខាងទៀត។',
                '**Example**: អ្នកសរសេរអត្ថបទម្នាក់ (User) អាចមានអត្ថបទច្រើន (Posts)។',
                '**Defining Methods**: ប្រើ `hasMany()` សម្រាប់ម្ចាស់ និង `belongsTo()` សម្រាប់កូន (Child)។'
              ],
              code: '// User.php\npublic function posts() {\n    return $this->hasMany(Post::class);\n}\n\n// Post.php\npublic function user() {\n    return $this->belongsTo(User::class);\n}',
              language: 'php',
              animation: 'one_to_many'
            },
            {
              id: '8.1.3',
              title: 'Many-to-Many Relationship',
              titleEn: 'Many-to-Many',
              type: 'code',
              content: [
                '**Complex Relations**: ប្រើនៅពេលដែល Item ម្ខាងអាចមាន Item ច្រើននៅម្ខាងទៀត។ (ឧទាហរណ៍៖ សិស្សម្នាក់អាចរៀនបានច្រើនមុខវិជ្ជា ហើយមុខវិជ្ជាមួយក៏មានសិស្សរៀនច្រើននាក់ដែរ)',
                '**Pivot Tables**: ទំនាក់ទំនងបែបនេះត្រូវការតារាងកណ្តាល (Pivot Table) ដើម្បីភ្ជាប់គ្នា។ (ជាអ្នករក្សាទុកព័ត៌មានថា តើ ID ពីតារាង A មួយណា ត្រូវនឹង ID ពីតារាង B មួយណា)'
              ],
              code: '// User Model\npublic function roles() {\n    return $this->belongsToMany(Role::class);\n}\n\n// Role Model\npublic function users() {\n    return $this->belongsToMany(User::class);\n}',
              language: 'php',
              insight: 'Laravel សន្មតថាឈ្មោះ pivot table គឺជាឈ្មោះ Model ទាំងពីរឯកវចនៈ (singular) រៀបតាមលំដាប់អក្ខរក្រម ឧទាហរណ៍: role_user។',
              animation: 'many_to_many'
            },
            {
              id: '8.1.4',
              title: 'Polymorphic Relationships',
              titleEn: 'Polymorphic Relationships',
              type: 'code',
              content: [
                '**Ultimate Flexibility**: អនុញ្ញាតឱ្យ Model មួយអាចជាកម្មសិទ្ធិរបស់ Model ច្រើនផ្សេងទៀត ដោយប្រើតែ Table មួយប៉ុណ្ណោះ។',
                '**Example**: Table `comments` តែមួយ អាចផ្ទុកទាំង Comment សម្រាប់ `Post` និង Comment សម្រាប់ `Video`។',
                '**Structure**: វាតម្រូវឱ្យមាន Column ពីរគឺ `commentable_id` និង `commentable_type`។'
              ],
              code: '// Comment.php\npublic function commentable() {\n    return $this->morphTo();\n}\n\n// Post.php\npublic function comments() {\n    return $this->morphMany(Comment::class, "commentable");\n}',
              language: 'php',
              insight: 'Polymorphic relations ជួយកាត់បន្ថយការបង្កើត Tables ស្ទួនៗគ្នាសម្រាប់ប្រភេទ Relationships ដូចគ្នា (ដូចជា Comments, Tags, ឬ Images)។',
              animation: 'polymorphic'
            },
            {
              id: '8.1.5',
              title: 'Advanced Through Relations',
              titleEn: 'Advanced Through Relations',
              type: 'code',
              content: [
                '**Has Many Through**: ប្រើសម្រាប់ទាញយកទិន្នន័យឆ្លងកាត់ table កណ្តាលមួយ ដើម្បីចូលទៅកាន់ table ចុងក្រោយបានដោយផ្ទាល់។ (ឧទាហរណ៍៖ ទាញយក Users ទាំងអស់ក្នុងប្រទេសមួយ តាមរយៈតារាង States ដែលនៅកណ្ដាល)',
                '**Has One Through**: ដំណើរការដូចគ្នា ប៉ុន្តែប្រើសម្រាប់ទាញយក record តែមួយគត់តាមរយៈ table កណ្តាល។'
              ],
              code: '// Project -> Environment -> Deployment\n\n// Has Many Through\npublic function deployments() {\n    return $this->hasManyThrough(Deployment::class, Environment::class);\n}\n\n// Has One Through\npublic function deployment() {\n    return $this->hasOneThrough(Deployment::class, Environment::class);\n}',
              language: 'php',
              animation: 'through_relations'
            },
            {
              id: '8.1.6',
              title: 'Real-world Demo: Blog System Relationships',
              titleEn: 'Blog System Demo',
              type: 'code',
              content: [
                '**Full Schema**: ឧទាហរណ៍នៃការរៀបចំ Model សម្រាប់ Blog ដែលមាន Post, Category, និង Tags។',
                '**Versatility**: បង្ហាញពីការប្រើប្រាស់ One-to-Many និង Many-to-Many ក្នុងពេលតែមួយ។'
              ],
              code: '// Post.php\npublic function category() {\n    return $this->belongsTo(Category::class);\n}\n\npublic function tags() {\n    return $this->belongsToMany(Tag::class);\n}\n\n// Category.php\npublic function posts() {\n    return $this->hasMany(Post::class);\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '8.2',
          title: 'ការទាញទិន្នន័យដែលមានទំនាក់ទំនង (Querying Relationships)',
          titleEn: 'Querying Relationships',
          duration: '35 mins',
          level: 'Advanced',
          slides: [
            {
              id: '8.2.0',
              title: 'Fetching Related Data',
              titleEn: 'Fetching Related Data',
              type: 'intro',
              content: [
                '**Dynamic Access**: នៅពេលកំណត់ relationship រួច អ្នកអាចចូលប្រើទិន្នន័យបានយ៉ាងងាយ។ (គ្រាន់តែហៅតាមឈ្មោះ Method វានឹងទាញទិន្នន័យមកឱ្យអ្នកភ្លាមៗ)',
                '**Performance Warning**: ត្រូវប្រុងប្រយ័ត្នចំពោះការទាញទិន្នន័យច្រើនក្នុងពេលតែមួយ។ (បើមិនប្រយ័ត្នទេ កម្មវិធីរបស់អ្នកអាចនឹងយឺតខ្លាំងដោយសារតែការ Query ជាន់គ្នាច្រើនពេក)',
                '**Optimization**: យើងនឹងរៀនពីវិធី load ទិន្នន័យឱ្យមានប្រសិទ្ធភាពដើម្បីបង្កើនល្បឿន។ (ជួយឱ្យ Server ធ្វើការតិចជាងមុន ប៉ុន្តែផ្ដល់លទ្ធផលបានលឿនជាងមុន)'
              ]
            },
            {
              id: '8.2.1',
              title: 'Eager Loading (with())',
              titleEn: 'Eager Loading',
              type: 'code',
              content: [
                '**Query Optimization**: ជៀសវាងបញ្ហា **N+1 query problem** ដែលនាំឱ្យ App ដើរយឺត។ (កើតឡើងនៅពេលយើងទាញទិន្នន័យក្នុង Loop ហើយវារត់ទៅ Query Database ច្រើនដងពេក)',
                '**Batch Fetching**: ប្រើ Eager Loading ដើម្បីទាញទិន្នន័យទាំងអស់ក្នុងពេលតែមួយ។ (កាត់បន្ថយការទាក់ទងជាមួយ Database មកត្រឹម ១ ឬ ២ ដងប៉ុណ្ណោះ ដែលធ្វើឱ្យ App ដើរលឿនជាងមុនខ្លាំង)'
              ],
              code: '// បែបនេះមិនល្អ (N+1 queries)\n$posts = Post::all(); \n\n// បែបនេះល្អ (Eager Loaded)\n$posts = Post::with("user", "comments")->get();',
              language: 'php',
              insight: 'ប្រើ Eager Loading ជានិច្ចនៅពេលអ្នក loop លើ collection ហើយទាញយកទំនាក់ទំនង (relations) របស់វា។',
              animation: 'eager_loading'
            },
            {
              id: '8.2.2',
              title: 'Lazy Eager Loading',
              titleEn: 'Lazy Eager Loading',
              type: 'code',
              content: [
                '**Conditional Loading**: Load ទំនាក់ទំនងតែនៅពេលណាដែលចាំបាច់ប៉ុណ្ណោះ។ (ជួយសន្សំសំចៃ Resource របស់ Server ដោយមិនទាញទិន្នន័យដែល User មិនទាន់ត្រូវការមើល)',
                '**Dynamic Loading**: ប្រើ `load()` method លើ Model ដែលមានស្រាប់។ (អនុញ្ញាតឱ្យអ្នកសម្រេចចិត្តនៅពាក់កណ្តាលផ្លូវថា តើគួរទាញទិន្នន័យបន្ថែមមកបង្ហាញឬក៏អត់)',
                '**Nested Lazy Loading**: អ្នកក៏អាច load ទំនាក់ទំនងជាន់គ្នាបានដែរ ឧទាហរណ៍៖ `$user->load("posts.comments")`។'
              ],
              code: '$user = User::first();\n\nif ($showPosts) {\n    // Load posts តែនៅពេល User ចង់មើលប៉ុណ្ណោះ\n    $user->load("posts");\n}',
              language: 'php',
              animation: 'lazy_eager_loading'
            },
            {
              id: '8.2.3',
              title: 'Real-world Demo: Dashboard Query',
              titleEn: 'Dashboard Query Demo',
              type: 'code',
              content: [
                '**Optimization**: ការទាញយកទិន្នន័យសម្រាប់ Dashboard ដោយប្រើ Eager Loading និង Counting។',
                '**Performance**: កាត់បន្ថយចំនួន Query ពី រាប់សិបមកត្រឹម ២ ឬ ៣ ប៉ុណ្ណោះ។',
                '**Nested Eager Loading**: ប្រើ "dot notation" ដើម្បី load ទំនាក់ទំនងបន្តគ្នា (ឧទាហរណ៍៖ Posts -> Comments -> Authors)។'
              ],
              code: '// ទាញយក Categories ជាមួយ Post ចុងក្រោយ និងម្ចាស់ Post នោះ\n$categories = Category::with(["latestPost.user"])\n    ->withCount("posts") // បន្ថែម posts_count column\n    ->get();\n\n// ក្នុង Blade\n@foreach($categories as $category)\n    <li>{{ $category->name }} ({{ $category->posts_count }} posts)</li>\n@endforeach',
              language: 'php',
              animation: 'dashboard_query'
            }
          ]
        },
        {
          id: '8.3',
          title: 'Relationship Methods',
          titleEn: 'Relationship Methods',
          duration: '40 mins',
          level: 'Expert',
          slides: [
            {
              id: '8.3.0',
              title: 'ការគ្រប់គ្រងការភ្ជាប់ទំនាក់ទំនង (Managing Connections)',
              titleEn: 'Managing Connections',
              type: 'intro',
              content: [
                '**Persistence**: តើយើងគ្រប់គ្រង និងរក្សាទុកទំនាក់ទំនងរវាង models នីមួយៗដោយរបៀបណា? (ជាការធានាថាទិន្នន័យដែលទាក់ទងគ្នា នឹងត្រូវរក្សាទុកចូលក្នុង Database យ៉ាងត្រឹមត្រូវ)',
                '**Native Methods**: Eloquent ផ្តល់ methods ពិសេសៗសម្រាប់បង្កើត និង sync ទំនាក់ទំនង។ (ជួយឱ្យអ្នកមិនចាំបាច់បញ្ចូល ID ដោយដៃនាំឱ្យខុសលំដាប់លំដោយ)',
                '**Safety**: វាមានសុវត្ថិភាព និងងាយប្រើជាងការកំណត់ foreign keys ដោយដៃ។ (Laravel នឹងជួយផ្ទៀងផ្ទាត់ និងចាត់ចែងរាល់ logic ទាំងអស់ឱ្យស្រាប់តែម្ដង)'
              ]

            },
            {
              id: '8.3.1',
              title: 'ការ Save និង Create',
              titleEn: 'Save and Create',
              type: 'code',
              content: [
                '**Data Storage**: ប្រើ `save()` ឬ `create()` ដើម្បីរក្សាទុក និងភ្ជាប់ទិន្នន័យជាមួយគ្នា។ (ជួយធានាថា រាល់ Item ថ្មីដែលបង្កើតឡើង នឹងត្រូវបានភ្ជាប់ទៅកាន់ម្ចាស់របស់វាដោយស្វ័យប្រវត្តិ)',
                '**Automatic Foreign Keys**: Laravel នឹងកំណត់ Foreign Key ឱ្យដោយស្វ័យប្រវត្តិ។ (អ្នកមិនចាំបាច់បារម្ភពីរឿងដាក់ ID ខុស ឬភ្លេចដាក់ ID នាំឱ្យទិន្នន័យបាត់បង់ទំនាក់ទំនងឡើយ)'
              ],
              code: '$user = User::find(1);\n\n// វិធីទី១៖ Save instance\n$user->posts()->save(new Post(["title" => "New"]));\n\n// វិធីទី២៖ Create ពី array\n$user->posts()->create(["title" => "New"]);',
              language: 'php'
            },
            {
              id: '8.3.2',
              title: 'Attach, Sync និង Detach',
              titleEn: 'Attach, Sync and Detach',
              type: 'code',
              content: [
                '**attach()** — បន្ថែម Record ថ្មីចូល Pivot Table ដោយមិនប៉ះពាល់ Record ចាស់ (ហានិភ័យ: បើ attach ម្ដងទៀត នឹង duplicate row ក្នុង Pivot)។',
                '**detach()** — លុប Record ចេញពី Pivot Table ។ អាច detach ID មួយ, IDs ច្រើន, ឬ detach ទាំងអស់ (ប្រសិនមិនបញ្ជូន argument)។',
                '**sync()** — ធ្វើ Pivot ឱ្យ match ពិតប្រាកដជាមួយ List ដែលផ្ដល់ (លុបអ្វីដែលលើស, បន្ថែមអ្វីដែលខ្វះ)។ ណែនាំឱ្យប្រើក្នុង Update Forms។',
                '**syncWithoutDetaching()** — ដូច sync() ប៉ុន្តែ **មិនលុប** Record ចាស់ — គ្រាន់បន្ថែមអ្វីដែលខ្វះប៉ុណ្ណោះ។',
                '**toggle()** — បន្ថែម ប្រសិនវាមិនទាន់មាន, លុប ប្រសិនវាមានរួចហើយ (ដូច Checkbox ចុចបើក/បិទ)។',
                '**updateExistingPivot()** — Update column ក្នុង Pivot Row ដែលមានស្រាប់ (ដូចជា update expires_at) ដោយមិនចាំបាច់ detach+attach ទៀត។'
              ],
              code: '$user = User::find(1);\n\n// ══════════════════════════════════════\n// 1) ATTACH — បន្ថែម Role ចូល Pivot\n// ══════════════════════════════════════\n\n// attach ID មួយ\n$user->roles()->attach(3);\n\n// attach IDs ច្រើនក្នុងពេលតែមួយ\n$user->roles()->attach([1, 2, 3]);\n\n// attach ជាមួយ extra pivot data\n$user->roles()->attach(3, [\'expires_at\' => now()->addYear()]);\n\n// ══════════════════════════════════════\n// 2) DETACH — ដក Role ចេញពី Pivot\n// ══════════════════════════════════════\n\n// detach ID មួយ\n$user->roles()->detach(3);\n\n// detach IDs ច្រើន\n$user->roles()->detach([1, 2]);\n\n// detach ទាំងអស់ (លុបទំនាក់ទំនងចោលទាំងស្រុង)\n$user->roles()->detach();\n\n// ══════════════════════════════════════\n// 3) SYNC — ធ្វើ Pivot ឱ្យ match List\n// ══════════════════════════════════════\n\n// User នេះ ត្រូវមានត្រឹម Role 1,2,3 — ដែលលើសនឹងត្រូវលុប\n$user->roles()->sync([1, 2, 3]);\n\n// Sync ដោយមិនលុបចាស់ (append only)\n$user->roles()->syncWithoutDetaching([4, 5]);\n\n// ══════════════════════════════════════\n// 4) TOGGLE — flip Role (មាន→លុប, គ្មាន→បន្ថែម)\n// ══════════════════════════════════════\n$user->roles()->toggle([1, 3]);\n\n// ══════════════════════════════════════\n// 5) UPDATE EXISTING PIVOT ROW\n// ══════════════════════════════════════\n// Update expires_at សម្រាប់ Role ដែល attach ហើយ\n$user->roles()->updateExistingPivot(3, [\'expires_at\' => now()->addMonths(6)]);',
              language: 'php',
              insight: '⚠️ attach() មិន check duplicate — ប្រសិន Role 3  មានក្នុង Pivot ហើយ ហើយ attach(3) ម្ដងទៀត → នឹងមាន 2 rows! ប្រើ sync() ឬ syncWithoutDetaching() ជំនួស ព្រោះវា safe និង idempotent (ដំណើរការច្រើនដង លទ្ធផលដូចគ្នា)។',
              animation: 'sync_attach'
            },

            {
              id: '8.3.3',
              title: 'Pivot Table ជាមួយ Extra Data',
              titleEn: 'Pivot with Extra Data',
              type: 'code',
              content: [
                '**Rich Pivots**: Pivot Table មិនត្រឹមតែទុក ID ទាំងពីរប៉ុណ្ណោះទេ — វាអាចទុក data បន្ថែមដូចជា `expires_at` ឬ `assigned_by` ផងដែរ។ (ឧទាហរណ៍: User ត្រូវបាន assign Role នៅថ្ងៃណា? ឬ Role នោះ expire ថ្ងៃណា?)',
                '**withPivot()**: ប្រើ `withPivot()` ក្នុង Model ដើម្បីប្រាប់ Eloquent ឱ្យ load column បន្ថែមពី Pivot Table មកផងដែរ។ (បើមិនដាក់ withPivot() ទេ columns ទាំងនោះនឹងមិន load ឡើយ)',
                '**syncWithPivotValues()**: ប្រើ `syncWithPivotValues()` ដើម្បី sync ព្រមជាមួយ extra data ក្នុង Pivot ក្នុងពេលតែមួយ។'
              ],
              code: '// ១. ក្នុង User Model — ប្រកាសថាត្រូវ load "expires_at" ពី pivot ផងដែរ\npublic function roles() {\n    return $this->belongsToMany(Role::class)\n                ->withPivot("expires_at", "assigned_by")\n                ->withTimestamps();\n}\n\n// ២. Attach ជាមួយ extra data\n$user->roles()->attach($roleId, [\n    "expires_at"  => now()->addYear(),\n    "assigned_by" => auth()->id(),\n]);\n\n// ៣. Sync ជាមួយ extra data ដូចគ្នាសម្រាប់ IDs ទាំងអស់\n$user->roles()->syncWithPivotValues([1, 2, 3], [\n    "expires_at" => now()->addYear(),\n]);\n\n// ៤. អានទិន្នន័យពី pivot\nforeach ($user->roles as $role) {\n    echo $role->pivot->expires_at;\n}',
              language: 'php',
              insight: '`withTimestamps()` នឹងបន្ថែម `created_at` / `updated_at` ក្នុង Pivot Table ដោយស្វ័យប្រវត្តិ — ល្អបំផុតសម្រាប់ Audit Logs។'
            },
            {
              id: '8.3.4',
              title: 'Associate និង Dissociate',
              titleEn: 'Associate and Dissociate',
              type: 'code',
              content: [
                '**BelongsTo Relations**: `associate()` និង `dissociate()` ប្រើជាពិសេសសម្រាប់ `belongsTo` relationship ដូចជា Comment belongs to Post។ (ផ្ទុយពី attach/detach ដែលប្រើជាមួយ Many-to-Many)',
                '**associate()**: ភ្ជាប់ Model ដោយកំណត់ Foreign Key ឱ្យស្វ័យប្រវត្តិ ហើយ save ភ្លាម។ (មានន័យថា `comment->post_id = $post->id; comment->save();` ក្នុងបន្ទាត់តែមួយ)',
                '**dissociate()**: ដក Foreign Key ចោល (ដាក់ null) ហើយ save ភ្លាម — ដូច "ផ្ដាច់" ទំនាក់ទំនង។ (Comment នៅតែមានក្នុង DB ប៉ុន្តែ post_id ក្លាយជា null)'
              ],
              code: '// ---- associate() ----\n$comment = Comment::find(5);\n$post    = Post::find(10);\n\n// ភ្ជាប់ Comment ទៅ Post (កំណត់ post_id = 10 ហើយ save)\n$comment->post()->associate($post);\n$comment->save();\n\n// ---- dissociate() ----\n// ផ្ដាច់ Comment ចេញពី Post (post_id = null)\n$comment->post()->dissociate();\n$comment->save();\n\n// ---- ប្រៀបធៀប ----\n// ❌ ធ្វើដោយដៃ (ងាយខុស)\n$comment->post_id = $post->id;\n$comment->save();\n\n// ✅ ធ្វើដោយ associate (ត្រឹមត្រូវ)\n$comment->post()->associate($post)->save();',
              language: 'php',
              insight: '`associate()` ស័ក្តិសមជាងការ assign FK ដោយដៃ ព្រោះវាក៏ set relation cache ផ្ទៃក្នុង Eloquent ផងដែរ ធ្វើឱ្យ `$comment->post` accessible ភ្លាមដោយមិនចាំបាច់ query ទៀត។'
            },
            {
              id: '8.3.5',
              title: 'SaveMany និង CreateMany',
              titleEn: 'SaveMany and CreateMany',
              type: 'code',
              content: [
                '**Bulk Insert**: `saveMany()` និង `createMany()` ដូចជា `save()` / `create()` ប៉ុន្តែអាច insert Records ច្រើនក្នុងពេលតែមួយ។ (ជៀសវាងការ loop ច្រើននិង query ច្រើន)',
                '**saveMany()**: ទទួលយក Array នៃ Model instances ដែលបង្កើតជាស្រេច ហើយ save ទាំងអស់ + ភ្ជាប់ FK ឱ្យ។',
                '**createMany()**: ទទួលយក Array នៃ attribute arrays ហើយ create + ភ្ជាប់ FK ឱ្យ — កូដខ្លីជាង saveMany()។'
              ],
              code: '// ---- saveMany() ----\n// ប្រើ Model instances ដែលបង្កើតមុន\n$post = Post::find(1);\n\n$post->comments()->saveMany([\n    new Comment(["body" => "Comment A"]),\n    new Comment(["body" => "Comment B"]),\n    new Comment(["body" => "Comment C"]),\n]);\n\n// ---- createMany() ----\n// ប្រើ arrays ដោយផ្ទាល់ (ខ្លីជាង)\n$post->comments()->createMany([\n    ["body" => "Comment A"],\n    ["body" => "Comment B"],\n    ["body" => "Comment C"],\n]);\n// → Laravel នឹង insert 3 rows ជាមួយ post_id = 1 ស្វ័យប្រវត្តិ',
              language: 'php',
              insight: 'ប្រើ `createMany()` ជំនួស loop + `create()` ម្ដងៗ ដើម្បីសន្សំចំនួន Query និងធ្វើឱ្យ Code មើលស្អាត និងអានកាន់តែងាយ។'
            },
            {
              id: '8.3.6',
              title: 'សង្ខេប: Best Practices',
              titleEn: 'Relationship Methods Summary',
              type: 'summary',
              content: [
                '**save() / create()**: ប្រើជាមួយ `hasMany` / `hasOne` — បង្កើត Record ថ្មីមួយ ហើយ auto-set FK។',
                '**saveMany() / createMany()**: ប្រើបង្កើត Records ច្រើន ក្នុង Loop តែមួយ — ជៀសវាង N+1 Writes។',
                '**attach() / detach()**: ប្រើជាមួយ `belongsToMany` (Pivot) — បន្ថែម ឬដក connection ក្នុង pivot table។',
                '**sync()**: ដ្ឋានល្អបំផុតក្នុង Update Forms — auto-add ដែលខ្វះ, auto-remove ដែលលើស។',
                '**syncWithPivotValues()**: sync + extra pivot data (ឧ. expires_at) ក្នុង call តែមួយ។',
                '**associate() / dissociate()**: ប្រើជាមួយ `belongsTo` — ផ្លាស់ប្ដូរ FK ដោយមានសុវត្ថិភាព + update relation cache។',
                '**withPivot()**: ប្រកាសក្នុង Model ដើម្បី load extra columns ពី Pivot Table។'
              ],
              insight: 'ច្បាប់ចំណាំ: ប្រើ Eloquent relationship methods ជានិច្ច — ហាមមាន hardcoded FK assignments ដោយដៃ ព្រោះវានឹងនាំឱ្យ bugs ពិបាករកនៅពេលក្រោយ។'
            },
            {
              id: '8.3.7',
              title: 'Real-world Demo: User Roles Sync',
              titleEn: 'User Roles Sync',
              type: 'code',
              content: [
                '**Practical Syncing**: របៀប Update តួនាទីរបស់ User (Roles) តាមរយៈ Sync method ក្នុង Form កែប្រែ។',
                '**Efficiency**: វានឹងលុប Role ចាស់ដែលមិនបានជ្រើសរើស និងបន្ថែម Role ថ្មីដែលបានជ្រើសរើសដោយស្វ័យប្រវត្តិ។'
              ],
              code: 'public function update(Request $request, User $user) {\n    $request->validate([\n        "roles" => "required|array|min:1",\n        "roles.*" => "exists:roles,id"\n    ]);\n\n    // ធ្វើឱ្យ Roles ក្នុង DB ដូចទៅនឹង input ពី form\n    $user->roles()->sync($request->roles);\n\n    return back()->with("status", "User roles updated!");\n}',
              language: 'php'
            }
          ]
        }
      ]
    },
    {
      id: 'module-9',
      title: 'Module 9: ការបង្កើត API (Building APIs)',
      titleEn: 'Building APIs',
      icon: 'Server',
      color: '#f59e0b',
      lessons: [
        {
          id: '9.1',
          title: 'ការបង្កើត RESTful APIs',
          titleEn: 'RESTful API Development',
          duration: '30 mins',
          level: 'Core',
          slides: [
            {
              id: '9.1.0',
              title: 'តើអ្វីទៅជា API?',
              titleEn: 'What is an API?',
              type: 'intro',
              content: [
                '**Bridge of Communication**: API (Application Programming Interface) គឺជាស្ពានភ្ជាប់ទំនាក់ទំនងរវាងកម្មវិធីមួយទៅកម្មវិធីមួយទៀត។',
                '**Data Formatting**: ខុសពី Web Routes ដែល return ជា HTML មកកាន់ Browser ផ្ទាល់, API Routes ជាទូទៅ return ទិន្នន័យជាទម្រង់ JSON ដែលងាយស្រួលសម្រាប់ Frontend (React, Vue) ឬ Mobile App អានយកទៅប្រើ។',
                '**Statelessness**: API ភាគច្រើនត្រូវបានរចនាឡើងជាទម្រង់ Stateless មានន័យថា Server មិនចាំ Session របស់ User ទេ (តម្រូវឲ្យបញ្ជូន Token រាល់ពេល Request)។'
              ],
              animation: 'http'
            },
            {
              id: '9.1.1',
              title: 'API Routes និង api.php',
              titleEn: 'API Routes',
              type: 'code',
              content: [
                '**Dedicated File**: ក្នុង Laravel យើងសរសេរ Route សម្រាប់ API នៅក្នុង `routes/api.php` ជំនួសឲ្យ `routes/web.php`។',
                '**Automatic Prefix**: រាល់ Route ទាំងអស់ក្នុង `api.php` នឹងត្រូវថែម prefix `/api` ពីមុខដោយស្វ័យប្រវត្តិ (ឧទាហរណ៍៖ `/api/users`)។',
                '**No CSRF**: API routes មិនត្រូវការការពារ CSRF ទេ ព្រោះវាជា Stateless និងប្រើ Token ជំនួសវិញ។'
              ],
              code: '// ក្នុង routes/api.php\nRoute::get("/products", [ProductController::class, "index"]);\nRoute::post("/products", [ProductController::class, "store"]);\n\n// ប្រើ API Resource Route ដើម្បីបានស្តង់ដារ RESTful ភ្លាមៗ\nRoute::apiResource("posts", PostController::class);',
              language: 'php'
            },
            {
              id: '9.1.2',
              title: 'ការ Return ទិន្នន័យជា JSON',
              titleEn: 'Returning JSON',
              type: 'code',
              content: [
                '**Automatic Conversion**: ភាពអស្ចារ្យរបស់ Laravel គឺអ្នកគ្រាន់តែ return Array ឬ Eloquent Collection វានឹងបំប្លែងទៅជា JSON ដោយស្វ័យប្រវត្តិ។',
                '**Custom Responses**: ប្រើ `response()->json()` ដើម្បីមានការគ្រប់គ្រងពេញលេញទៅលើ HTTP Status Codes និង Headers ផ្សេងៗ។'
              ],
              code: 'public function index() {\n    // Laravel នឹងបំប្លែងទៅជា JSON ដោយខ្លួនឯង\n    return User::all(); \n}\n\npublic function store(Request $request) {\n    $product = Product::create($request->all());\n    // កំណត់ Status Code 201 (Created)\n    return response()->json([\n        "message" => "Product created successfully",\n        "data" => $product\n    ], 201);\n}',
              language: 'php'
            },
            {
              id: '9.1.3',
              title: 'Real-world Demo: បង្កើត CRUD API សាមញ្ញ',
              titleEn: 'Simple CRUD API Demo',
              type: 'code',
              content: [
                '**Complete Flow**: ការបង្កើត Controller សម្រាប់ API គឺស្រដៀងទៅនឹង Web ដែរ គ្រាន់តែយើងប្តូរពីការ return View មក return JSON វិញ។',
                '**Error Handling**: Laravel ក៏នឹងបំប្លែង Validation Errors ទៅជា JSON ដោយស្វ័យប្រវត្តិប្រសិនបើ Request នោះមកពី API (មាន Accept: application/json header)។'
              ],
              code: 'public function destroy(Post $post) {\n    $post->delete();\n    \n    // Return 204 No Content ឬ Message\n    return response()->json([\n        "message" => "Post deleted successfully"\n    ], 200);\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '9.2',
          title: 'Eloquent API Resources',
          titleEn: 'API Resources',
          duration: '25 mins',
          level: 'Advanced',
          slides: [
            {
              id: '9.2.0',
              title: 'បញ្ហានៃការបង្ហាញទិន្នន័យ (The Transformation Problem)',
              titleEn: 'Data Transformation Problem',
              type: 'intro',
              content: [
                '**Direct Return is Bad**: ការបញ្ចេញ Model (Return $user) ទៅកាន់ API ត្រង់ៗអាចនឹងបង្ហាញទិន្នន័យសម្ងាត់ (ដូចជា password hash, រឺ hidden ID) និងធ្វើឱ្យទម្រង់ទិន្នន័យមិនមានស្តង់ដារ។',
                '**The Middleman**: API Resources គឺជាអ្នកនៅកណ្តាលរវាង Eloquent Models និង JSON response របស់អ្នក ដែលអនុញ្ញាតឱ្យអ្នករៀបចំទម្រង់ទិន្នន័យបានតាមចិត្តមុននឹងបញ្ចេញទៅ។'
              ],
              animation: 'data_types'
            },
            {
              id: '9.2.1',
              title: 'ការបង្កើត និងប្រើប្រាស់ Resource',
              titleEn: 'Creating Resources',
              type: 'code',
              content: [
                '**Artisan Command**: ប្រើ `php artisan make:resource UserResource` ដើម្បីបង្កើត។',
                '**Formatting**: ក្នុង method `toArray()` អ្នកអាចជ្រើសរើសបានថាតើ Column ណាខ្លះដែលគួរបង្ហាញ និងអាចបំប្លែងប្រភេទ Data ឱ្យបានត្រឹមត្រូវ។'
              ],
              code: 'public function toArray($request) {\n    return [\n        "id" => $this->id,\n        "name" => $this->name,\n        "email" => $this->email,\n        // ផ្លាស់ប្តូរទម្រង់កាលបរិច្ឆេទ\n        "joined_at" => $this->created_at->format("Y-m-d"),\n    ];\n}\n\n// របៀបប្រើក្នុង Controller\nreturn new UserResource(User::find(1));',
              language: 'php'
            },
            {
              id: '9.2.2',
              title: 'Resource Collections',
              titleEn: 'Resource Collections',
              type: 'code',
              content: [
                '**Multiple Records**: ពេលទាញទិន្នន័យច្រើន (ដូចជា `User::all()`) យើងប្រើប្រាស់ `UserResource::collection()`។',
                '**Automatic Pagination**: ប្រសិនបើអ្នកប្រើ `$users = User::paginate(10);` API Resource នឹងបន្ថែមព័ត៌មាន Pagination ទៅក្នុង JSON response ឲ្យអ្នកដោយស្វ័យប្រវត្តិ។'
              ],
              code: 'public function index() {\n    // ទាញយក Users ទាំងអស់\n    $users = User::paginate(15);\n    \n    // បំប្លែងទៅជា Resource Collection ជាមួយ Pagination\n    return UserResource::collection($users);\n}',
              language: 'php'
            },
            {
              id: '9.2.3',
              title: 'Real-world Demo: Post Resource',
              titleEn: 'Post Resource Demo',
              type: 'code',
              content: [
                '**Relationship Loading**: ក្នុង Resource អ្នកអាច Loadទិន្នន័យដែលមានទំនាក់ទំនង (Relationships) បានយ៉ាងស្រួលដោយប្រុងប្រយ័ត្ន។',
                '**Conditional Attributes**: ប្រើ `whenLoaded()` ដើម្បីបង្ហាញទិន្នន័យទំនាក់ទំនង លុះត្រាតែវាត្រូវបាន Eager Load ពីមុនមក (ការពារបញ្ហា N+1)។'
              ],
              code: 'public function toArray($request) {\n    return [\n        "id" => $this->id,\n        "title" => $this->title,\n        "body" => $this->body,\n        // បង្ហាញពត៌មាន User លុះត្រាតែបាន load\n        "author" => new UserResource($this->whenLoaded("user")),\n        "comments_count" => $this->comments_count ?? 0,\n    ];\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '9.3',
          title: 'API Authentication ជាមួយ Laravel Sanctum',
          titleEn: 'API Auth with Sanctum',
          duration: '35 mins',
          level: 'Expert',
          slides: [
            {
              id: '9.3.0',
              title: 'Stateless Authentication',
              titleEn: 'Stateless Authentication',
              type: 'intro',
              content: [
                '**No Sessions**: API មិនប្រើ Sessions ទេ ប៉ុន្តែវាប្រើ Tokens។ (User បញ្ជូន Token នៅក្នុង HTTP Header `Authorization: Bearer <token>` រាល់ពេល Request)។',
                '**Laravel Sanctum**: ជា Package ផ្លូវការរបស់ Laravel ដែលបង្កើតឡើងយ៉ាងសាមញ្ញសម្រាប់ API Authentication និង SPA (Single Page Applications)។',
                '**Lightweight**: វាស្រាល និងងាយស្រួលប្រើជាង Passport (ដែលផ្អែកលើ OAuth2 ពេញលេញ និងស័ក្តិសមសម្រាប់ API ខ្នាតធំ)។'
              ],
              animation: 'security'
            },
            {
              id: '9.3.1',
              title: 'ការបង្កើត Access Tokens',
              titleEn: 'Issuing Tokens',
              type: 'code',
              content: [
                '**Token Generation**: បន្ទាប់ពី User ផ្ដល់ Email និង Password ត្រឹមត្រូវ អ្នកអាចបង្កើត Token ថ្មីមួយឲ្យពួកគេ។',
                '**Plain Text Token**: Sanctum នឹងផ្ដល់មកវិញនូវ Token ជាអក្សរធម្មតា ដែល Client (Mobile App) ត្រូវរក្សាទុក ហើយប្រើសម្រាប់ Request លើកក្រោយ។'
              ],
              code: 'public function login(Request $request) {\n    $request->validate([\n        "email" => "required|email",\n        "password" => "required"\n    ]);\n\n    $user = User::where("email", $request->email)->first();\n\n    if (!$user || !Hash::check($request->password, $user->password)) {\n        return response()->json(["message" => "Bad credentials"], 401);\n    }\n\n    // បង្កើត Token ថ្មី\n    $token = $user->createToken("mobile-app")->plainTextToken;\n\n    return response()->json(["token" => $token]);\n}',
              language: 'php'
            },
            {
              id: '9.3.2',
              title: 'ការការពារ API Routes',
              titleEn: 'Protecting API Routes',
              type: 'code',
              content: [
                '**Sanctum Middleware**: ដើម្បីការពារ API Route របស់អ្នក គ្រាន់តែប្រើប្រាស់ Middleware `auth:sanctum` ជាការស្រេច។',
                '**Unauthorized Response**: ប្រសិនបើ Request មិនមាន Token ឬ Token ខុស Laravel នឹងបញ្ជូនកូដ 401 Unauthorized ត្រឡប់ទៅវិញ។'
              ],
              code: '// ក្នុង routes/api.php\n\n// Public route (មិនបាច់មាន Token)\nRoute::post("/login", [AuthController::class, "login"]);\n\n// Protected routes (ត្រូវតែមាន Token)\nRoute::middleware("auth:sanctum")->group(function () {\n    Route::get("/user", function (Request $request) {\n        return $request->user(); // ទាញយក User បច្ចុប្បន្នតាម Token\n    });\n    \n    Route::apiResource("posts", PostController::class);\n});',
              language: 'php'
            },
            {
              id: '9.3.3',
              title: 'Real-world Demo: Authentication API',
              titleEn: 'Authentication API Demo',
              type: 'code',
              content: [
                '**Complete System**: ឧទាហរណ៍នៃការគ្រប់គ្រង Login, និង Logout ដោយប្រើ Sanctum។',
                '**Token Revocation**: នៅពេល User Logout យើងអាចលុប Token នោះចេញពី Database ដើម្បីធានាសុវត្ថិភាព។'
              ],
              code: 'public function logout(Request $request) {\n    // លុប Token ដែលកំពុងប្រើបច្ចុប្បន្នចោល\n    $request->user()->currentAccessToken()->delete();\n    \n    // លុប Token ទាំងអស់របស់ User\n    // $request->user()->tokens()->delete();\n\n    return response()->json([\n        "message" => "Logged out successfully"\n    ]);\n}\n',
              language: 'php'
            }
          ]
        }
      ]
    }
  ]
};