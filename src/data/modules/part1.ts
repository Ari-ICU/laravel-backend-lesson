import { Part } from '../types';

export const part1: Part = {
  id: 'part-1',
  title: 'Part 1: Foundations of Backend Development & Laravel Setup',
  modules: [
    {
      id: 'intro',
      title: 'Course Introduction',
      titleEn: 'Course Introduction',
      icon: 'Rocket',
      color: '#0f172a',
      lessons: [
        {
          id: '0.1',
          title: 'Welcome to Laravel',
          titleEn: 'Welcome to Laravel',
          duration: '15 mins',
          level: 'Core',
          slides: [
            {
              id: '0.1.1',
              title: 'Course Objective (គោលបំណងនៃវគ្គសិក្សា)',
              titleEn: 'Course Objective',
              type: 'intro',
              content: [
                'ស្វាគមន៍មកកាន់ការសិក្សា **Laravel Backend** (នេះគឺជាការចាប់ផ្ដើមនៃដំណើរផ្លាស់ប្តូរខ្លួនឱ្យក្លាយជាអ្នកបង្កើតកម្មវិធីកម្រិតអាជីព)។',
                'គោលដៅនៃវគ្គសិក្សានេះគឺផ្លាស់ប្តូរអ្នកពីអ្នកចាប់ផ្តើមដំបូង ទៅជា **Production-Ready Backend Developer** ម្នាក់ (ដែលចេះសរសេរកូដសម្រាប់ប្រើប្រាស់ក្នុងគម្រោងពិតប្រាកដ និងមានសុវត្ថិភាពខ្ពស់)។',
                'យើងនឹងផ្ដោតសំខាន់លើ logic, security, និង professional architecture (រចនាសម្ព័ន្ធកម្រិតអាជីព ដែលជួយឱ្យ App ងាយស្រួលពង្រីក និងថែទាំទៅថ្ងៃក្រោយ)។'
              ],
              insight: 'ការយល់ដឹងអំពី "មូលហេតុ" គឺសំខាន់ដូចគ្នានឹងការចេះ "របៀបធ្វើ" ដែរ។'
            },
            {
              id: '0.1.2',
              title: 'What You Will Learn',
              titleEn: 'What You Will Learn',
              type: 'concept',
              content: [
                '**PHP Fundamentals**: មូលដ្ឋានគ្រឹះដ៏រឹងមាំនៃ Modern Web Apps (ស្វែងយល់ពីរបៀបដែល Server ធ្វើការ និងចាត់ចែងទិន្នន័យមុននឹងបញ្ជូនទៅកាន់អ្នកប្រើប្រាស់)។',
                '**Database Design**: របៀបរក្សាទុក និងភ្ជាប់ទំនាក់ទំនង Data តាមស្តង់ដារ (រៀនពីការរៀបចំ "ការចងចាំអចិន្ត្រៃយ៍" របស់កម្មវិធីឱ្យមានសណ្ដាប់ធ្នាប់ និងមានល្បឿនលឿន)។',
                '**Laravel Framework**: PHP Ecosystem ដែលពេញនិយមបំផុតលើពិភពលោក (ប្រើប្រាស់ឧបករណ៍ទំនើបៗដើម្បីកាត់បន្ថយការសរសេរកូដដដែលៗ និងបង្កើនផលិតភាពការងារ)។',
                '**REST APIs**: ការបង្កើត Backend សម្រាប់កម្មវិធីទូរស័ព្ទ និង Web Apps (រៀនពីរបៀបធ្វើឱ្យកម្មវិធីផ្សេងៗអាចនិយាយគ្នាដឹងរឿង និងដូរទិន្នន័យគ្នាបានយ៉ាងរលូន)។'
              ]
            },
            {
              id: '0.1.3',
              title: 'Course Roadmap',
              titleEn: 'Course Roadmap',
              type: 'concept',
              content: [
                '**Part 1**: Foundations & PHP Deep Dive (មូលដ្ឋានគ្រឹះ និងការសិក្សា PHP ស៊ីជម្រៅ)។',
                '**Part 2**: Core Laravel Concepts (គោលការណ៍សំខាន់ៗរបស់ Laravel)។',
                '**Part 3**: Advanced Features & Deployment (មុខងារកម្រិតខ្ពស់ និងការដាក់ឱ្យដំណើរការ)។'
              ],
              insight: 'ផ្នែកនីមួយៗបង្កើតឡើងដោយផ្អែកលើផ្នែកមុន។ កុំរំលងមូលដ្ឋានគ្រឹះ!'
            }
          ]
        }
      ]
    },
    {
      id: 'module-1',
      title: 'Module 1: Introduction to Backend Development',
      titleEn: 'Introduction to Backend Development',
      icon: 'Monitor',
      color: '#3b82f6',
      lessons: [
        {
          id: '1.0',
          title: 'Essential Development Tools',
          titleEn: 'Essential Development Tools',
          duration: '20 mins',
          level: 'Core',
          slides: [
            {
              id: '1.0.1',
              title: 'The Developer\'s Toolkit',
              titleEn: 'Developer\'s Toolkit',
              type: 'concept',
              content: [
                'មុនពេលយើងចាប់ផ្តើមសរសេរកូដ យើងត្រូវការឧបករណ៍ត្រឹមត្រូវ។',
                'ត្រូវការ IDE ខ្លាំងពូកែ, AI assistant, និង PHP runtime។',
                'ឧបករណ៍ទាំងនេះនឹងជួយឱ្យការសរសេរកូដរបស់អ្នក **លឿនជាងមុន ១០ដង**។'
              ],
              insight: 'ជាងដែលមានជំនាញ គឺអាស្រ័យលើឧបករណ៍ដែលគាត់ប្រើ។'
            },
            {
              id: '1.0.2',
              title: 'VS Code: The Best IDE',
              titleEn: 'VS Code: The Best IDE',
              type: 'concept',
              content: [
                '**Visual Studio Code** គឺជាស្តង់ដារក្នុងវិស័យបច្ចេកវិទ្យា។',
                'លឿន, ងាយស្រួល customize, និងមាន plugin គាំទ្រច្រើនលើសលប់។',
                'យើងនឹងប្រើវាសម្រាប់រាល់គម្រោង Laravel ទាំងអស់។'
              ],
              link: 'https://code.visualstudio.com/download',
              linkText: 'Download VS Code',
              insight: 'ដំឡើង "Laravel Extension Pack" ដើម្បីទទួលបានបទពិសោធន៍ល្អបំផុត។'
            },
            {
              id: '1.0.3',
              title: 'Antigravity AI',
              titleEn: 'Antigravity AI',
              type: 'concept',
              content: [
                '**Agentic AI Coding Assistant** ផ្ទាល់ខ្លួនរបស់អ្នក។',
                'ជួយអ្នកក្នុងកា debug, សរសេរ boilerplate, និងរៀនបានលឿនជាងមុន។',
                'វារួមបញ្ចូលផ្ទាល់ទៅក្នុង workflow របស់អ្នក។'
              ],
              link: 'https://antigravity.ai',
              linkText: 'Get Antigravity AI',
              insight: 'AI មិនមកជំនួស Developer ទេ ប៉ុន្តែវាផ្ដល់ superpowers ដល់ពួកគេ។'
            },
            {
              id: '1.0.4',
              title: 'Composer: PHP Packages',
              titleEn: 'Composer: PHP Packages',
              type: 'concept',
              content: [
                'ឧបករណ៍ដែលមិនអាចខ្វះបានសម្រាប់ PHP Developer គ្រប់រូប។',
                'វាគ្រប់គ្រងរាល់ Laravel dependencies ទាំងអស់ដោយស្វ័យប្រវត្តិ។'
              ],
              link: 'https://getcomposer.org/download/',
              linkText: 'Download Composer',
              insight: 'តែងតែធ្វើបច្ចុប្បន្នភាព Composer របស់អ្នកជាមួយ "composer self-update"។'
            }
          ]
        },
        {
          id: '1.1',
          title: 'What is Backend Development?',
          titleEn: 'What is Backend Development?',
          duration: '30 mins',
          level: 'Core',
          slides: [
            {
              id: '1.1.0',
              title: 'Introduction to Backend',
              titleEn: 'Introduction to Backend',
              type: 'intro',
              content: [
                'Backend Development សំដៅលើផ្នែក **Server-Side** នៃកម្មវិធី។',
                'វាគឺជាអ្វីគ្រប់យ៉ាងដែលកើតឡើងនៅពីក្រោយខ្នងដែលអ្នកប្រើប្រាស់ **មើលមិនឃើញ**។',
                'ខណៈពេលដែល Frontend ផ្ដោតលើ **រូបរាង (How it looks)**, Backend ផ្ដោតលើ **ដំណើរការ (How it works)**។'
              ],
              insight: 'Frontend ដែលស្អាតគឺគ្មានប្រយោជន៍ទេ បើគ្មាន Backend ដែលខ្លាំង និងមានសុវត្ថិភាព។'
            },
            {
              id: '1.1.1',
              title: 'The Role of the Backend',
              titleEn: 'The Role of the Backend',
              type: 'concept',
              content: [
                'Backend គឺជា **ម៉ាស៊ីនដែលលាក់ខ្លួន** ដើម្បីដំណើរការ Web។',
                '**Data Management**: ការរក្សាទុក និងទាញយកព័ត៌មានអ្នកប្រើប្រាស់។',
                '**Business Logic**: ការគណនាតម្លៃ, ការផ្ទៀងផ្ទាត់ការ Login, ការចាត់ចែង Order។',
                '**Security**: ធានាថាមានតែអ្នកដែលមានសិទ្ធិប៉ុណ្ណោះដែលអាចចូលប្រើ Data ជាក់លាក់បាន។'
              ],
              insight: 'បើ Frontend គឺជាតួឡាន, Backend គឺជាម៉ាស៊ីនឡាន។'
            },
            {
              id: '1.1.2',
              title: 'Client-Server Architecture',
              titleEn: 'Client-Server Architecture',
              type: 'concept',
              content: [
                '**Client**: អ្នកស្នើសុំ resource (ឧទាហរណ៍៖ "សុំមើល profile របស់ខ្ញុំ" តាមរយៈ Browser ឬ Mobile App)។',
                '**Server**: ទទួលយកសំណើ ដំណើរការទិន្នន័យ និងបញ្ជូន Response ត្រឡប់មកវិញ (ប្រៀបដូចជាខួរក្បាលដែលចាំផ្ដល់ចម្លើយរាល់ពេលមានសំណួរ)។',
                '**Request-Response Cycle**: គឺជា loop គោលនៃដំណើរការ internet (រាល់ការចុច Link ឬប៊ូតុង គឺតែងតែបង្កើតនូវ Request មួយជានិច្ច)។',
                'ការទំនាក់ទំនងធ្វើឡើងតាមរយៈ protocol **HTTP/HTTPS** (ជាភាសាស្ដង់ដារដែល Browser និង Server ប្រើដើម្បីនិយាយគ្នាឱ្យដឹងរឿង)។'
              ],
              insight: 'Server នឹងមិនធ្វើអ្វីទាំងអស់ ប្រសិនបើគ្មាន Client ផ្ញើសំណើ (Request) ទៅមុន។'
            },
            {
              id: '1.1.3',
              title: 'Web Servers: The Gatekeepers',
              titleEn: 'Web Servers',
              type: 'content',
              content: [
                'Software ដូចជា **Nginx** ឬ **Apache** ធ្វើការរង់ចាំទទួល requests។',
                'ពួកវាសម្រេចចិត្តថា PHP script មួយណាដែលត្រូវចាត់ចែង request នោះ។',
                'ពួកវាបញ្ជូន static files (រូបភាព, CSS) ភ្លាមៗដោយមិនចាំបាច់ប្រើ PHP។'
              ],
              insight: 'Nginx គឺជាអ្នកនាំមុខគេលើពិភពលោកផ្នែក performance សម្រាប់គេហទំព័រដែលមាន traffic ខ្ពស់។'
            },
            {
              id: '1.1.4',
              title: 'Databases: The Memory (អង្គចងចាំ)',
              titleEn: 'Databases',
              type: 'content',
              content: [
                'កន្លែងផ្ទុកទិន្នន័យអចិន្ត្រៃយ៍សម្រាប់ Application។',
                '**Relational (SQL)**: រៀបចំជាតារាង (Tables) ច្បាស់លាស់ (ដូចជា MySQL)។',
                '**Performance**: ប្រើប្រាស់ Indexes ដើម្បីស្វែងរក Data ក្នុងរយៈពេលខ្លី។',
                '**Integrity**: ធានាថា Data នៅតែត្រឹមត្រូវ និងមានសុវត្ថិភាព។'
              ]
            },
            {
              id: '1.1.5',
              title: 'APIs: The Waiter (អ្នករត់តុ)',
              titleEn: 'APIs',
              type: 'concept',
              content: [
                '**Application Programming Interface** (API)។',
                'ភ្ជាប់ software ពីរដែលខុសគ្នាឱ្យនិយាយគ្នាដឹងរឿង។',
                'អនុញ្ញាតឱ្យ Backend របស់អ្នកនិយាយជាមួយ Google Maps, PayPal, ឬ Mobile Apps។',
                'ជាទូទៅទំនាក់ទំនងដោយប្រើទម្រង់ទិន្នន័យ **JSON**។'
              ],
              insight: 'គិតថា API ដូចជាអ្នករត់តុ៖ អ្នកកម្ម៉ង់ (Request), គាត់ទៅប្រាប់ចុងភៅ (Backend), រួចយកម្ហូបមកឱ្យអ្នកវិញ (Response)។'
            },
            {
              id: '1.1.6',
              title: 'Backend Languages',
              titleEn: 'Backend Languages',
              type: 'content',
              content: [
                '**PHP**: ដើរតួលើ 75% នៃគេហទំព័រទូទាំងពិភពលោក (WordPress, Laravel)។',
                '**Node.js**: ល្អសម្រាប់ real-time apps (Chat, Notifications)។',
                '**Python**: ល្អឥតខ្ចោះសម្រាប់ AI និងការវិភាគទិន្នន័យ (Django)។',
                '**Go**: បង្កើតឡើងសម្រាប់ប្រព័ន្ធដែលមាន High-concurrency កម្រិត Google scale។'
              ]
            },
            {
              id: '1.1.7',
              title: 'Module 1.1 Quiz',
              titleEn: 'Module 1.1 Quiz',
              type: 'quiz',
              content: [
                'តើផ្នែកមួយណាដែលមានតួនាទីចម្បងក្នុងកាគ្រប់គ្រង **Business Logic** និង **Security**?'
              ],
              options: [
                'Frontend',
                'Backend',
                'Web Browser',
                'UI/UX Design'
              ],
              correctAnswer: 1,
              insight: 'Backend ដើរតួជាខួរក្បាលដែលមានសុវត្ថិភាពបំផុតរបស់ Application។'
            },
            {
              id: '1.1.8',
              title: 'Real-world Demo: Request-Response Cycle',
              titleEn: 'Request-Response Cycle Demo',
              type: 'code',
              content: [
                '**Visualizing the Cycle**: ឧទាហរណ៍នៃការផ្ញើ Request ពី Browser (Client) ទៅកាន់ Server និងការទទួល Response ត្រឡប់មកវិញ។',
                '**JSON Response**: បង្ហាញពីរបៀបដែល Backend បញ្ជូនទិន្នន័យជាទម្រង់ JSON សម្រាប់ Mobile App ឬ Frontend Framework។'
              ],
              code: '// Client Request (Browser)\nGET /api/user/1 HTTP/1.1\nHost: example.com\n\n// Server Response (Backend)\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n    "id": 1,\n    "name": "Dara",\n    "email": "dara@example.com",\n    "status": "Active"\n}',
              language: 'json'
            }
          ]
        },
        {
          id: '1.2',
          title: 'Introduction to PHP',
          titleEn: 'Introduction to PHP',
          duration: '60 mins',
          level: 'Core',
          slides: [
            {
              id: '1.2.0',
              title: 'Getting Started with PHP',
              titleEn: 'Getting Started with PHP',
              type: 'intro',
              content: [
                '**PHP** តំណាងឱ្យ "Hypertext Preprocessor"។',
                'វាគឺជាភាសាដែលដំណើរការលើ **75% នៃគេហទំព័រ** ទាំងអស់។',
                'បង្កើតឡើងយ៉ាងពិសេសសម្រាប់ web development, PHP មានលក្ខណៈលឿន និងមានស្ថេរភាព។'
              ],
              insight: 'PHP គឺជាគ្រឹះរបស់ Laravel។ រៀនភាសាឱ្យច្បាស់ ដើម្បីយល់ពី Framework។'
            },
            {
              id: '1.2.1',
              title: 'Running PHP (របៀបដំណើរការ PHP)',
              titleEn: 'Running PHP',
              type: 'code',
              content: [
                'អ្នកអាចដំណើរការ PHP scripts ផ្ទាល់នៅក្នុង terminal របស់អ្នក។',
                'នេះហៅថា **CLI Mode** (Command Line Interface)។',
                'វាលឿនជាងមុនក្នុងការតេស្ត logic ជាជាងការប្រើ web server។'
              ],
              code: '# ដំណើរការ file PHP\nphp filename.php\n\n# ឆែកមើល version\nphp -v\n\n# Interactive mode (Shell)\nphp -a',
              language: 'bash',
              insight: 'Command "php -S" ក៏អាចចាប់ផ្ដើម local web server បណ្ដោះអាសន្នបានដែរ។'
            },
            {
              id: '1.2.2',
              title: 'PHP Syntax & Variables',
              titleEn: 'PHP Syntax & Variables',
              type: 'code',
              content: [
                'PHP code ត្រូវបានដំណើរការនៅលើ Server (មុននឹងលទ្ធផលចេញជា HTML ត្រូវបានបញ្ជូនមកកាន់ Browser របស់អ្នកប្រើប្រាស់)។',
                'រាល់ Variable ទាំងអស់ត្រូវចាប់ផ្ដើមដោយសញ្ញា **$** (នេះជាសញ្ញាសម្គាល់ថា ពាក្យនោះគឺជាកន្លែងសម្រាប់ផ្ទុកទិន្នន័យ)។',
                'រាល់ Statement ត្រូវតែបញ្ចប់ដោយ **semicolon (;)** (វាប្រៀបដូចជាសញ្ញាខណ្ឌចប់ប្រយោគ ដើម្បីឱ្យ PHP ដឹងថាត្រូវឈប់ដំណើរការត្រឹមណា)។'
              ],
              code: '<?php\n// ការប្រកាស Variable\n$greeting = "Hello World";\n$count = 10;\n\necho $greeting; // លទ្ធផល: Hello World\n?>',
              language: 'php',
              insight: 'ឈ្មោះ Variable គឺ Case-sensitive ($age និង $Age គឺខុសគ្នា)។',
              animation: 'syntax'
            },
            {
              id: '1.2.3',
              title: 'Basic Input & Output (ការបញ្ជូន និងទទួលទិន្នន័យ)',
              titleEn: 'Basic Input & Output',
              type: 'code',
              content: [
                'ក្នុងកម្រិតមូលដ្ឋាន យើងប្រើ **echo** ដើម្បីបង្ហាញលទ្ធផលទៅកាន់ Screen។',
                'សម្រាប់កម្មវិធី Scripting (CLI) យើងប្រើ **readline()** ដើម្បីទទួលព័ត៌មានពី Keyboard។',
                'ទិន្នន័យដែលទទួលបាន នឹងត្រូវរក្សាទុកក្នុង **Variable** ដើម្បីយកទៅប្រើប្រាស់បន្ត។'
              ],
              code: '<?php\n// ការបង្ហាញអត្ថបទទៅកាន់ User\necho "Welcome to PHP Basic!\\n";\n\n// ការទទួលទិន្នន័យពី Keyboard (CLI)\n$name = readline("Enter your name: ");\n\n// បង្ហាញលទ្ធផលដែលទទួលបាន\necho "សួស្តី " . $name . "!";\n?>',
              language: 'php',
              insight: 'មុខងារ readline() គឺមានប្រយោជន៍ខ្លាំងសម្រាប់ការសរសេរ Script ឬកម្មវិធីដែលដំណើរការលើ Terminal/Command Line។',
              animation: 'io'
            },
            {
              id: '1.2.4',
              title: 'Core Data Types (ប្រភេទនៃទិន្នន័យ)',
              titleEn: 'Core Data Types',
              type: 'code',
              content: [
                '**String**: សំណុំនៃតួអក្សរ (ប្រើសម្រាប់រក្សាទុកអត្ថបទ។ ការប្រើ " " អនុញ្ញាតឱ្យបញ្ចូល variable ក្នុងអត្ថបទបានភ្លាមៗ ចំណែក \' \' គឺសម្រាប់អត្ថបទសុទ្ធដែលមិនប្រែប្រួល)។',
                '**Integer**: ចំនួនគត់ (ប្រើសម្រាប់ការរាប់ចំនួន ឬការគណនាលេខដែលគ្មានក្បៀស ដូចជាអាយុ ឬចំនួនទំនិញក្នុងស្តុក)។',
                '**Float**: ចំនួនទសភាគ (ប្រើសម្រាប់តម្លៃដែលត្រូវការភាពជាក់លាក់ខ្ពស់ ដូចជាតម្លៃលុយ ភាគរយ ឬទម្ងន់)។',
                '**Boolean**: តម្លៃពិត (true) ឬមិនពិត (false) (ជាមូលដ្ឋានគ្រឹះសម្រាប់ត្រួតពិនិត្យលក្ខខណ្ឌផ្សេងៗក្នុងកម្មវិធី)។',
                '**Array**: សំណុំនៃទិន្នន័យ (Collection) (ជួយឱ្យអ្នកអាចផ្ទុកទិន្នន័យច្រើនប្រភេទចូលគ្នា ក្នុងកញ្ចប់តែមួយដើម្បីងាយស្រួលគ្រប់គ្រង)។',
                '**Null**: តម្លៃទទេ (ប្រើសម្រាប់សម្គាល់ថា Variable នោះមិនទាន់មានទិន្នន័យ ឬត្រូវបានកំណត់ឱ្យនៅទំនេរ)។'
              ],
              code: '// 1. Strings & Interpolation\n$name = "Dara";\necho "សួស្តី $name"; // លទ្ធផល: សួស្តី Dara\n\n// 2. Numbers & Calculation\n$price = 10;    // Integer\n$tax = 0.5;     // Float\n$total = $price + $tax;\n\n// 3. Boolean & Null\n$isLogged = true;\n$error = null;  // គ្មានកំហុស\n\n// 4. Array (Accessing items)\n$colors = ["Red", "Blue"];\necho $colors[0]; // លទ្ធផល: Red',
              language: 'php',
              animation: 'data_types'
            },
            {
              id: '1.2.5',
              title: 'Control Structures: Logic (ការគ្រប់គ្រងលំហូរកូដ)',
              titleEn: 'Control Structures: Logic',
              type: 'code',
              content: [
                '**Decision Making**: ការប្រើប្រាស់ `if`, `else`, និង `elseif` ដើម្បីឱ្យកម្មវិធីសម្រេចចិត្តធ្វើការងារផ្អែកលើលក្ខខណ្ឌ (ឧទាហរណ៍៖ ការឆែកមើលសិទ្ធិ Login ឬការគ្រប់គ្រងទឹកប្រាក់ក្នុងកាបូប)។',
                '**Switch Statement**: ប្រើសម្រាប់ករណីដែលមានជម្រើសច្រើនដែលត្រូវផ្ទៀងផ្ទាត់ (វាជួយឱ្យកូដមានរបៀបរៀបរយ និងងាយស្រួលអានជាងការប្រើ `if-else` ច្រើនជាន់)។',
                '**Strict Comparison**: ការប្រើ `===` (ស្មើទាំងតម្លៃ និងប្រភេទ) និង `!==` (មិនស្មើទាំងតម្លៃ និងប្រភេទ) ជួយការពារកុំឱ្យមាន Bug កើតឡើងដោយសារ PHP បម្លែងប្រភេទទិន្នន័យខុស។',
                '**Ternary Operator**: វិធីសរសេរកាត់ `(condition) ? true : false` (ប្រើសម្រាប់លក្ខខណ្ឌសាមញ្ញៗដើម្បីឱ្យកូដខ្លី និងស្អាត)។',
                '**Logical Operators**: ប្រើសម្រាប់បន្សំលក្ខខណ្ឌដូចជា `&&` (And - ពិតទាំងពីរ), `||` (Or - ពិតតែម្ខាង), និង `!` (Not - បញ្ច្រាសតម្លៃ Boolean)។'
              ],
              code: '// 1. Ternary Operator (សរសេរកាត់)\n$age = 20;\n$message = ($age >= 18) ? "Allowed" : "Denied";\n\n// 2. Switch Statement (ជម្រើសច្រើន)\n$user_role = "editor";\nswitch ($user_role) {\n    case "admin":\n        echo "អ្នកមានសិទ្ធិគ្រប់គ្រង!";\n        break;\n    case "editor":\n        echo "អ្នកអាចតែកែសម្រួលអត្ថបទប៉ុណ្ណោះ!";\n        break;\n    default:\n        echo "អ្នកជាអ្នកមើលធម្មតា!";\n}\n\n// 3. Strict vs Loose Comparison\n$value = 0;\nif ($value == false) { /* នេះនឹងដើរ (Loose) */ }\nif ($value === false) { /* នេះមិនដើរទេ (Strict) */ }',
              language: 'php',
              insight: 'ប្រើប្រាស់ Switch នៅពេលអ្នកមានជម្រើសច្រើនដែលមានតម្លៃថេរ និងប្រើប្រាស់ === ដើម្បីធានាថាកម្មវិធីរបស់អ្នកមានសុវត្ថិភាពខ្ពស់ និងគ្មាន Bug។',
              animation: 'logic'
            },
            {
              id: '1.2.6',
              title: 'Control Structures: Loops (ការប្រើប្រាស់រង្វិលជុំ)',
              titleEn: 'Control Structures: Loops',
              type: 'code',
              content: [
                '**Iteration Mastery**: ការប្រើប្រាស់ Loops ដើម្បីកាត់បន្ថយការសរសេរកូដដដែលៗ (គោលការណ៍ DRY - Don\'t Repeat Yourself ជួយឱ្យកូដខ្លី និងងាយស្រួលថែទាំ)។',
                '**Foreach (Key-Value)**: ក្នុង PHP, `foreach` អនុញ្ញាតឱ្យយើងទាញយកទាំង **Key** និង **Value** របស់ Array ក្នុងពេលតែមួយ (មានប្រយោជន៍ខ្លាំងសម្រាប់ការបង្ហាញទិន្នន័យដូចជា ឈ្មោះទំនិញ និងតម្លៃ)។',
                '**do-while Loop**: ខុសពី `while` ត្រង់ថាវាដំណើរការកូដ **យ៉ាងហោចណាស់ ១ដងជានិច្ច** ទោះបីជាលក្ខខណ្ឌដំបូងមិនពិតក៏ដោយ។',
                '**Loop Control**: ការប្រើប្រាស់ `break` (ដើម្បីបញ្ឈប់ Loop ភ្លាមៗ) និង `continue` (ដើម្បីរំលងជុំបច្ចុប្បន្ន ហើយទៅចាប់ផ្ដើមជុំបន្ទាប់ភ្លាមៗ)។',
                '**Infinite Loop Warning**: ត្រូវប្រុងប្រយ័ត្នក្នុងការប្រើ `while` loop ដោយធានាថាមានចំណុចបញ្ចប់ច្បាស់លាស់ ដើម្បីការពារកុំឱ្យ Server គាំង។'
              ],
              code: '// 1. Foreach with Key => Value\n$prices = ["Apple" => 1.5, "Banana" => 0.8];\nforeach ($prices as $name => $cost) {\n    echo "$name: $$cost\\n";\n}\n\n// 2. Loop Control (Break & Continue)\nfor ($i = 1; $i <= 5; $i++) {\n    if ($i == 2) continue; // រំលងលេខ 2\n    if ($i == 4) break;    // បញ្ឈប់ត្រឹមលេខ 3\n    echo "លេខ: $i\\n";\n}\n\n// 3. Do-While (ដំណើរការយ៉ាងហោចណាស់ 1 ដង)\n$x = 10;\ndo {\n    echo "ដំណើរការម្តងសិន...\\n";\n} while ($x < 5);',
              language: 'php',
              insight: 'foreach គឺជា loop ដែលមានសុវត្ថិភាពបំផុតក្នុង PHP ព្រោះវាមិនបង្កឱ្យមាន Infinite Loop ដូចការប្រើ while ឬ for នោះទេ។',
              animation: 'loops'
            },
            {
              id: '1.2.7',
              title: 'Functions (ការបង្កើតមុខងារប្រើឡើងវិញ)',
              titleEn: 'Functions',
              type: 'code',
              content: [
                '**Structural Integrity**: Function ជួយបំបែក Logic ធំៗឱ្យទៅជាបំណែកតូចៗដែលងាយស្រួលគ្រប់គ្រង និងតេស្ត (ធ្វើឱ្យកូដមានរបៀបរៀបរយ និងមានវិជ្ជាជីវៈ)។',
                '**Type Hinting**: ក្នុង PHP ទំនើប យើងគួរកំណត់ប្រភេទទិន្នន័យ (int, string, bool) ឱ្យ Parameter ដើម្បីបង្កើនសុវត្ថិភាព និងការពារកំហុសឆ្គង (Bug Prevention)។',
                '**Parameters vs. Arguments**: **Parameters** គឺជាអថេរដែលកំណត់ក្នុង Function (ធុងទទួល) ចំណែក **Arguments** គឺជាតម្លៃពិតប្រាកដដែលយើងបញ្ជូនទៅ (ទិន្នន័យជាក់ស្តែង)។',
                '**Return Type Declaration**: ការប្រើសញ្ញា `: type` នៅខាងចុង Function (ដូចជា `: string` ឬ `: void`) ដើម្បីប្រាប់ PHP ឱ្យដឹងច្បាស់ពីប្រភេទលទ្ធផលដែល Function នឹងបញ្ជូនមកវិញ។',
                '**Named Arguments (PHP 8.0)**: អ្នកអាចបញ្ជូន Argument ដោយប្រើឈ្មោះ Parameter ផ្ទាល់ (ជួយឱ្យយើងមិនចាំបាច់ខ្វល់ពីលំដាប់លំដោយ និងធ្វើឱ្យកូដអានទៅយល់ន័យភ្លាមៗ)។',
                '**Anonymous Functions & Arrow Functions**: ជាមុខងារដែលគ្មានឈ្មោះ ច្រើនប្រើជា Callbacks ក្នុង Laravel (ឧទាហរណ៍៖ ការសរសេរ Route ឬការរៀបចំទិន្នន័យក្នុង Collections)។'
              ],
              code: '// 1. Parameters vs Arguments\nfunction sum(int $a, int $b): int {\n    return $a + $b;\n}\necho sum(10, 20); // 10, 20 are arguments\n\n// 2. Named Arguments & Type Hinting (PHP 8.0+)\nfunction setProfile(string $name, int $age, string $job = "Student"): string {\n    return "ឈ្មោះ: $name, អាយុ: $age, មុខរបរ: $job";\n}\n\n// ហៅប្រើដោយមិនចាំបាច់តាមលំដាប់ (Named Arguments)\necho setProfile(age: 25, job: "Developer", name: "Dara");\n\n// 3. Arrow Function\n$square = fn($n) => $n * $n;\necho $square(4); // លទ្ធផល: 16',
              language: 'php',
              insight: 'ការប្រើប្រាស់ Type Hinting គឺជាទម្លាប់ល្អបំផុតសម្រាប់ Senior Developer ដើម្បីធានាថាកូដមានគុណភាពខ្ពស់ និងងាយស្រួលអានសម្រាប់ក្រុមការងារ។',
              animation: 'functions'
            },
            {
              id: '1.2.8',
              title: 'OOP: Classes & Objects (មូលដ្ឋានគ្រឹះនៃ OOP)',
              titleEn: 'Classes & Objects',
              type: 'code',
              content: [
                '**The Blueprint (Class)**: ជាការឌីហ្សាញ "ពុម្ព" ដែលរួមបញ្ចូលទាំងទិន្នន័យ (Properties) និងសកម្មភាព (Methods) ចូលគ្នាជាកញ្ចប់តែមួយ។',
                '**The Instance (Object)**: ជា "រូបរាងពិត" ដែលកើតចេញពី Class (យើងប្រើ keyword `new` ដើម្បីបង្កើត Object ថ្មីចេញពីពុម្ពជានិច្ច)។',
                '**The Constructor**: គឺជា Magic Method ពិសេស (`__construct`) ដែលដំណើរការដោយស្វ័យប្រវត្តិភ្លាមៗ នៅពេលដែល Object ត្រូវបានបង្កើត (Instance Created) ដើម្បីរៀបចំទិន្នន័យឱ្យរួចរាល់។',
                '**Constructor Use Case**: ប្រើសម្រាប់កំណត់តម្លៃដំបូង (Initialization) ឱ្យ Properties, ការទាញយកទិន្នន័យពី Database, ឬការរៀបចំ Dependencies ចាំបាច់ផ្សេងៗដែល Object នោះត្រូវការ។',
                '**Access Modifiers**: ការកំណត់សិទ្ធិដូចជា `public` (ប្រើគ្រប់ទីកន្លែង), `private` (ប្រើបានតែក្នុង Class ខ្លួនឯង), និង `protected` (ប្រើបានក្នុង Class ខ្លួនឯង និង Class កូន)។',
                '**Encapsulation**: ការលាក់បាំងទិន្នន័យសំខាន់ៗ (Private) និងផ្ដល់សិទ្ធិឱ្យប្រើប្រាស់តាមរយៈ Methods (Getters/Setters) ដើម្បីសុវត្ថិភាពកូដ។'
              ],
              code: 'class BankAccount {\n    // ការកំណត់តម្លៃដំបូង (Initialization) តាមរយៈ Constructor\n    public function __construct(\n        public string $accountNumber,\n        public float $balance = 0.0 // តម្លៃដំបូងគឺ 0.0\n    ) {\n        echo "គណនី $this->accountNumber ត្រូវបានបង្កើតដោយជោគជ័យ!\\n";\n    }\n\n    public function deposit(float $amount) {\n        $this->balance += $amount;\n        return "បានដាក់ប្រាក់ $$amount. សមតុល្យសរុប: $$this->balance";\n    }\n}\n\n// ការបង្កើត Object រួមជាមួយការផ្ដល់តម្លៃដំបូង (Initial Values)\n$myAcc = new BankAccount("KH-7788", 100.0);\necho $myAcc->deposit(50);',
              language: 'php',
              insight: 'ការប្រើប្រាស់ Private Properties ជួយឱ្យកូដរបស់អ្នកមានរបៀបរៀបរយ និងការពារកុំឱ្យមានការកែប្រែទិន្នន័យពីខាងក្រៅដោយគ្មានការអនុញ្ញាត។',
              animation: 'class_object'
            },
            {
              id: '1.2.9',
              title: 'OOP: Inheritance (ការបន្តពូជ)',
              titleEn: 'Inheritance',
              type: 'code',
              content: [
                '**The Concept (Inheritance)**: អនុញ្ញាតឱ្យ Class កូន (Child) ទាញយកសមត្ថភាពពី Class មេ (Parent) ដើម្បីកាត់បន្ថយការសរសេរកូដដដែលៗ។',
                '**Extends Keyword**: យើងប្រើ `extends` ដើម្បីបង្កើតទំនាក់ទំនង "Is-A" (ឧទាហរណ៍៖ Admin "គឺជា" User មួយប្រភេទដែរ)។',
                '**Method Overriding**: ការសរសេរ Method ឈ្មោះដូច Parent ឡើងវិញក្នុង Child Class ដើម្បីផ្លាស់ប្តូរ ឬបន្ថែមសកម្មភាពថ្មីឱ្យប្លែកពីមុន។',
                '**The parent:: Keyword**: ប្រើសម្រាប់ហៅ Method របស់ Parent មកប្រើឡើងវិញនៅក្នុង Method ដែលយើងកំពុង Override (ជួយរក្សាទុក Logic ចាស់ និងបន្ថែម Logic ថ្មី)។',
                '**Protected Visibility**: ជាជម្រើសល្អបំផុតសម្រាប់ Inheritance ព្រោះវាអនុញ្ញាតឱ្យ Class កូនអាចប្រើប្រាស់ Properties របស់ Class មេបាន ប៉ុន្តែខាងក្រៅមិនអាចប្រើបាន។'
              ],
              code: 'class AppService {\n    protected function log($msg) {\n        return "[Log]: $msg";\n    }\n}\n\nclass EmailService extends AppService {\n    // 1. Method Overriding\n    public function send($to) {\n        // 2. Using parent:: keyword\n        $logMsg = parent::log("Sending email to $to");\n        return "$logMsg... Email sent successfully!";\n    }\n}\n\n$service = new EmailService();\necho $service->send("dara@example.com");',
              language: 'php',
              insight: 'ក្នុង Laravel, Controllers ភាគច្រើន "extends" ពី base Controller ដើម្បីទទួលបានមុខងារដូចជា middleware និង validation សម្រាប់គ្រប់គ្រង Request ឱ្យមានសុវត្ថិភាព។',
              animation: 'inheritance'
            },
            {
              id: '1.2.10',
              title: 'Composer & Packages (ការគ្រប់គ្រងបណ្ណាល័យ)',
              titleEn: 'Composer & Packages',
              type: 'code',
              content: [
                '**Dependency Management**: Composer គឺជាឧបករណ៍ដែលជួយទាញយក និងចាត់ចែងរាល់កូដខាងក្រៅ (Packages) ដែលយើងត្រូវការមកក្នុងគម្រោងរបស់យើង។',
                '**The "vendor" Folder**: រាល់កូដដែលទាញយកមក នឹងត្រូវបានរក្សាទុកក្នុង folder `vendor` (យើងមិនត្រូវកែកូដក្នុង folder នេះដោយផ្ទាល់ដៃនោះទេ)។',
                '**composer.json vs. lock**: `composer.json` កំណត់បញ្ជីឈ្មោះបណ្ណាល័យដែលយើងចង់បាន ចំណែក `composer.lock` រក្សាទុកលេខ Version ជាក់លាក់ដើម្បីធានាថាគ្រប់ Team ប្រើ Version ដូចគ្នា។',
                '**Autoloading Power**: តាមរយៈ `vendor/autoload.php`, Composer នឹងស្វែងរក និងហៅ Class មកប្រើដោយស្វ័យប្រវត្តិ (លែងត្រូវការប្រើ `require` ច្រើនដងដូចមុនទៀតហើយ)។',
                '**Global vs. Local**: អ្នកអាចដំឡើង Composer ទុកក្នុងម៉ាស៊ីន (Global) ដើម្បីបង្កើត Project ថ្មីៗបានយ៉ាងរហ័ស។'
              ],
              code: '# 1. ដំឡើងបណ្ណាល័យតាមបញ្ជីក្នុង composer.json\ncomposer install\n\n# 2. បន្ថែមបណ្ណាល័យថ្មី (ឧទាហរណ៍ Carbon សម្រាប់ចាត់ចែងម៉ោង)\ncomposer require nesbot/carbon\n\n# 3. ក្នុងកូដ PHP របស់អ្នក\nrequire "vendor/autoload.php";\n\nuse Carbon\\Carbon;\n// បង្ហាញម៉ោងបច្ចុប្បន្នជាទម្រង់អានងាយ\necho Carbon::now()->locale("km")->diffForHumans(); // "មុននេះបន្តិច"',
              language: 'php',
              insight: 'រាល់ពេលដែលអ្នក Download Project ពី GitHub មក ជំហានដំបូងបំផុតគឺត្រូវ run "composer install" ដើម្បីទាញយកបណ្ណាល័យដែលខ្វះខាតមកវិញ។'
            },
            {
              id: '1.2.11',
              title: 'Practice Lab: Simple Math',
              titleEn: 'Practice Lab',
              type: 'concept',
              isList: false,
              content: [
                '**គោលដៅ**: បង្កើតប្រព័ន្ធគ្រប់គ្រងផលិតផលសាមញ្ញមួយ ដោយរួមបញ្ចូលរាល់ចំណេះដឹងដែលបានរៀនទាំងអស់។',
                '១. **OOP**: បង្កើត Class `Product` ដែលមាន Property (name, price) និងប្រើ Constructor ដើម្បីផ្តល់តម្លៃដំបូង។',
                '២. **Array**: បង្កើត Array មួយសម្រាប់ផ្ទុក Object នៃផលិតផលយ៉ាងហោចណាស់ ៣ (ប្រើតម្លៃខុសៗគ្នា)។',
                '៣. **Function & Type Hinting**: បង្កើត Function គណនាតម្លៃសរុប (Price + Tax 10%) ដោយប្រើ Type Hinting ច្បាស់លាស់។',
                '៤. **Control Flow**: ប្រើ `foreach` ដើម្បីបង្ហាញផលិតផលទាំងអស់ និងប្រើ `if` ដើម្បីបង្ហាញពាក្យ "Discount Available" ប្រសិនបើតម្លៃលើសពី $50។',
                '៥. **Composer**: ប្រើបណ្ណាល័យ **Carbon** ដើម្បីបង្ហាញថ្ងៃខែឆ្នាំបច្ចុប្បន្ននៅក្នុងរបាយការណ៍។'
              ],
              code: 'require "vendor/autoload.php";\nuse Carbon\\Carbon;\n\nclass Product {\n    public function __construct(public string $name, public float $price) {}\n}\n\nfunction calculateTotal(float $price): float {\n    return $price * 1.1; // បូកពន្ធ 10%\n}\n\n$products = [\n    new Product("Keyboard", 25),\n    new Product("Monitor", 120),\n];\n\nforeach ($products as $p) {\n    $total = calculateTotal($p->price);\n    echo "ទំនិញ: $p->name | តម្លៃសរុប: $$total ";\n    if ($total > 50) echo "(មានបញ្ចុះតម្លៃพิเศษ!)\\n";\n    else echo "\\n";\n}\n\necho "របាយការណ៍ចេញនៅ: " . Carbon::now()->format("d-m-Y");',
              language: 'php',
              insight: 'ការរួមបញ្ចូលគ្នា (Integration) នៃចំណេះដឹងផ្សេងៗគ្នា គឺជាអ្វីដែលអ្នកនឹងត្រូវធ្វើជារៀងរាល់ថ្ងៃក្នុងនាមជា Backend Developer។'
            },
            {
              id: '1.2.12',
              title: 'Module 1.2 Quiz',
              titleEn: 'Module 1.2 Quiz',
              type: 'quiz',
              content: [
                'ក្នុងភាសា PHP តើនិមិត្តសញ្ញា (character) មួយណាប្រើសម្រាប់ផ្ដើមឈ្មោះ **Variable**?'
              ],
              options: ['#', '@', '$', '&'],
              correctAnswer: 2,
              insight: 'រាល់ PHP variables ទាំងអស់ត្រូវតែផ្ដើមដោយសញ្ញាដុល្លារ ($) ជានិច្ច។'
            },
            {
              id: '1.2.13',
              title: 'Comparison Quiz',
              titleEn: 'Comparison Quiz',
              type: 'quiz',
              content: [
                'តើការប្រើប្រាស់ `===` (Strict Equality) ខុសពី `==` (Loose Equality) ត្រង់ចំណុចណា?'
              ],
              options: [
                'វាឆែកតែតម្លៃប៉ុណ្ណោះ',
                'វាឆែកទាំងតម្លៃ និងប្រភេទទិន្នន័យ (Type)',
                'វាប្រើសម្រាប់តែអក្សរ (String)',
                'វាប្រើសម្រាប់តែលេខ (Integer)'
              ],
              correctAnswer: 1,
              insight: '`===` នឹងផ្ទៀងផ្ទាត់ទាំងតម្លៃ និងប្រភេទរបស់ទិន្នន័យ ដើម្បីការពារកុំឱ្យមានកំហុសឆ្គង Logic។'
            },
            {
              id: '1.2.14',
              title: 'OOP Quiz',
              titleEn: 'OOP Quiz',
              type: 'quiz',
              content: [
                'តើ keyword មួយណាដែលប្រើសម្រាប់បង្កើត Object ថ្មីចេញពី Class?'
              ],
              options: ['create', 'instance', 'new', 'make'],
              correctAnswer: 2,
              insight: 'យើងប្រើ keyword `new` ដើម្បីបង្កើត instance ថ្មីមួយនៃ class (ឧទាហរណ៍៖ $user = new User();)។'
            },
            {
              id: '1.2.15',
              title: 'Functions Quiz',
              titleEn: 'Functions Quiz',
              type: 'quiz',
              content: [
                'តើនិមិត្តសញ្ញា (character) មួយណាដែលប្រើសម្រាប់កំណត់ Return Type ឱ្យ Function?'
              ],
              options: ['->', '=>', ':', '::'],
              correctAnswer: 2,
              insight: 'ក្នុង PHP ទំនើប យើងប្រើសញ្ញាចុចពីរ (:) ដើម្បីបញ្ជាក់ពីប្រភេទនៃទិន្នន័យដែល Function នឹង return មកវិញ។'
            },
            {
              id: '1.2.16',
              title: 'Real-world Demo: User Auth Logic (PHP)',
              titleEn: 'User Auth Logic Demo',
              type: 'code',
              content: [
                '**Logic in Action**: ការប្រើប្រាស់ Variables, Arrays, និង Functions ដើម្បីបង្កើតប្រព័ន្ធ Login សាមញ្ញមួយ។',
                '**Security Note**: ក្នុងពិភពពិត យើងមិនត្រូវប្រៀបធៀប Password ផ្ទាល់បែបនេះទេ ប៉ុន្តែត្រូវប្រើ Hash ជានិច្ច។'
              ],
              code: '$users = [\n    ["email" => "admin@test.com", "pass" => "123", "role" => "Admin"],\n    ["email" => "user@test.com", "pass" => "456", "role" => "User"]\n];\n\nfunction login(string $email, string $password, array $users): string {\n    foreach ($users as $user) {\n        if ($user["email"] === $email && $user["pass"] === $password) {\n            return "ស្វាគមន៍ " . $user["role"] . "! លោកអ្នកបាន Login ជោគជ័យ។";\n        }\n    }\n    return "អ៊ីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវទេ។";\n}\n\necho login("admin@test.com", "123", $users);',
              language: 'php'
            }
          ]
        },
        {
          id: '1.3',
          title: 'Introduction to Databases',
          titleEn: 'Introduction to Databases',
          duration: '45 mins',
          level: 'Core',
          slides: [
            {
              id: '1.3.0',
              title: 'Understanding Data Persistence',
              titleEn: 'Understanding Persistence',
              type: 'intro',
              content: [
                '**Stateless Reality**: ជាធម្មតា Request លើ Web គឺ "ភ្លេចភ្លាំង" (Stateless)។ Database គឺជាអ្វីដែលជួយឱ្យ App ចងចាំ User និងសកម្មភាពរបស់ពួកគេ ពីការចូលមើលមួយ ទៅការចូលមើលមួយទៀត។',
                '**Data Ecosystem**: Database មិនមែនគ្រាន់តែជាកន្លែងទុកទិន្នន័យទេ តែវាគឺជា "ឃ្លាំង" ដ៏រឹងមាំ ដែលអាចរក្សាទុកព័ត៌មានរាប់លាន (ដូចជា ប្រវត្តិការផ្ទេរប្រាក់ ឬព័ត៌មានសម្ងាត់) បានយ៉ាងមានសុវត្ថិភាព។',
                '**DBMS (The Manager)**: យើងប្រើប្រាស់ប្រព័ន្ធគ្រប់គ្រង (Database Management System) ដូចជា **MySQL** ឬ **PostgreSQL** ដើម្បីចាត់ចែងទិន្នន័យទាំងនោះ តាមរយៈភាសា SQL។',
                '**CRUD Lifecycle**: អ្នកនឹងរៀនពីគោលការណ៍ **CRUD** (Create, Read, Update, Delete) ដែលជាបេះដូងនៃការងារ Backend គ្រប់ប្រភេទ (បង្កើត, អាន, កែប្រែ, និងលុប)។',
                '**Performance & Safety**: ការរៀបចំ Database បានល្អ នឹងជួយឱ្យ App ដំណើរការបានលឿនបំផុត និងធានាថាទិន្នន័យមិនបាត់បង់ ឬលេចធ្លាយទៅខាងក្រៅ។'
              ],
              insight: 'Database គឺជា "ការចងចាំរយៈពេលវែង" នៃប្រព័ន្ធ Backend របស់អ្នក។',
              animation: 'database'
            },
            {
              id: '1.3.1',
              title: 'SQL vs NoSQL',
              titleEn: 'SQL vs NoSQL',
              type: 'concept',
              content: [
                '**Relational (SQL)**: រៀបចំទិន្នន័យជាតារាង (Tables) ដែលមានជួរដេក និងជួរឈរច្បាស់លាស់។ វាមានច្បាប់តឹងរ៉ឹង (Schema) ដែលធានាថាទិន្នន័យត្រឹមត្រូវជានិច្ច (MySQL, PostgreSQL)។',
                '**Non-Relational (NoSQL)**: រៀបចំទិន្នន័យជា "ឯកសារ" (Documents) ដែលអាចមានរូបរាងខុសៗគ្នាបាន។ វាផ្ដល់ភាពបត់បែនខ្ពស់ និងល្បឿនលឿនសម្រាប់ទិន្នន័យធំៗ (MongoDB, Redis)។',
                '**Data Integrity**: SQL ល្អបំផុតសម្រាប់ទិន្នន័យដែលត្រូវការភាពសុក្រឹតខ្ពស់ (ដូចជា ប្រព័ន្ធធនាគារ ឬបញ្ជីទំនិញ) ព្រោះវាមានទំនាក់ទំនងរវាងតារាងច្បាស់លាស់ (Relationships)។',
                '**Scalability**: SQL ផ្ដោតលើការបង្កើនសមត្ថភាពម៉ាស៊ីនឱ្យខ្លាំង (Vertical Scaling) ចំណែក NoSQL ងាយស្រួលក្នុងការចែកចាយទិន្នន័យលើម៉ាស៊ីនច្រើន (Horizontal Scaling)។',
                '**The Choice**: ក្នុងវគ្គសិក្សានេះ យើងផ្ដោតលើ SQL ព្រោះវាជាបេះដូងរបស់ Laravel និងត្រូវបានប្រើប្រាស់ក្នុង ៩០% នៃ Web Applications នាពេលបច្ចុប្បន្ន។'
              ],
              insight: 'Laravel ត្រូវបានសម្រួលឱ្យល្អបំផុតសម្រាប់ SQL databases ដែលធ្វើឱ្យការគ្រប់គ្រងទំនាក់ទំនងទិន្នន័យកាន់តែងាយស្រួល។',
              animation: 'sql_nosql'
            },
            {
              id: '1.3.2',
              title: 'SQL: Data Selection (ការជ្រើសរើសទិន្នន័យ)',
              titleEn: 'SQL Selection',
              type: 'code',
              content: [
                'Statement **SELECT** ប្រើសម្រាប់ទាញយកទិន្នន័យ។',
                'ប្រើ **WHERE** ដើម្បីចម្រាញ់ (filter) លទ្ធផល។',
                'ប្រើ **ORDER BY** ដើម្បីតម្រៀបទិន្នន័យ។'
              ],
              code: '-- ទាញយក users ទាំងអស់មកពីប្រទេសកម្ពុជា\nSELECT * FROM users\nWHERE country = "Cambodia"\nORDER BY created_at DESC;',
              language: 'sql',
              animation: 'sql_selection'
            },
            {
              id: '1.3.3',
              title: 'SQL: Data Manipulation (ការចាត់ចែងទិន្នន័យ)',
              titleEn: 'SQL Manipulation',
              type: 'code',
              content: [
                '**SELECT**: ទាញយក/អានទិន្នន័យ (Read)។',
                '**INSERT**: បន្ថែមទិន្នន័យថ្មី (Create)។',
                '**UPDATE**: កែប្រែទិន្នន័យដែលមានស្រាប់ (Update)។',
                '**DELETE**: លុបទិន្នន័យចោល (Delete)។'
              ],
              code: '-- ១. ទាញយកទិន្នន័យ\nSELECT * FROM users;\n\n-- ២. បញ្ចូល user ថ្មី\nINSERT INTO users (name, email) \nVALUES ("Ratha", "ratha@example.com");\n\n-- ៣. កែប្រែទិន្នន័យ\nUPDATE users SET status = "active" \nWHERE id = 1;\n\n-- ៤. លុបទិន្នន័យ\nDELETE FROM users WHERE id = 1;',
              language: 'sql',
              insight: 'ត្រូវប្រើ WHERE clause ជានិច្ចជាមួយ UPDATE និង DELETE ដើម្បីជៀសវាងការបាត់បង់ទិន្នន័យទាំងមូល!',
              animation: 'sql_manipulation'
            },
            {
              id: '1.3.4',
              title: 'Database Design: Keys',
              titleEn: 'Database Keys',
              type: 'concept',
              content: [
                '**Primary Key**: លេខសម្គាល់ (ID) តែមួយគត់សម្រាប់ជួរនីមួយៗ (ឧទាហរណ៍៖ `id`)។',
                '**Foreign Key**: តំណភ្ជាប់រវាងតារាងពីរ។',
                '**Relationships**: One-to-One, One-to-Many, Many-to-Many។'
              ],
              insight: 'Foreign keys គឺជា "កាវ" ដែលភ្ជាប់ទិន្នន័យក្នុងកម្មវិធីរបស់អ្នកចូលគ្នា។',
              animation: 'database_keys'
            },
            {
              id: '1.3.5',
              title: 'Database Normalization',
              titleEn: 'Database Normalization',
              type: 'concept',
              content: [
                'ដំណើរការនៃការរៀបចំទិន្នន័យដើម្បីកាត់បន្ថយ **Redundancy** (ការជាន់គ្នា)។',
                '**1NF**: គ្មានតម្លៃច្រើនក្នុង attribute តែមួយ (Atomic values)។',
                '**2NF**: លុបបំបាត់ការជាន់គ្នានៃទិន្នន័យដែលអាស្រ័យលើផ្នែកណាមួយនៃ Primary Key។',
                '**3NF**: រាល់ attribute មិនមែន key ទាំងអស់ត្រូវតែអាស្រ័យតែលើ Primary Key ប៉ុណ្ណោះ។'
              ],
              insight: 'គិតថា Normalization គឺជាការ "រៀបចំរបស់របរឱ្យចំកន្លែង និងមានរបៀប" ដើម្បីកុំឱ្យពិបាកកែប្រែថ្ងៃក្រោយ។',
              animation: 'normalization'
            },
            {
              id: '1.3.6',
              title: 'Module 1.3 Quiz',
              titleEn: 'Module 1.3 Quiz',
              type: 'quiz',
              content: [
                'តើ SQL command មួយណាប្រើសម្រាប់ **កែប្រែ (modify)** ទិន្នន័យដែលមានស្រាប់ក្នុងតារាង?'
              ],
              options: [
                'MODIFY',
                'CHANGE',
                'UPDATE',
                'EDIT'
              ],
              correctAnswer: 2,
              insight: 'Command UPDATE គឺជាស្តង់ដារ SQL សម្រាប់ផ្លាស់ប្តូរ records ដែលមានស្រាប់ Tune ឱ្យបានល្អ។'
            },
            {
              id: '1.3.7',
              title: 'Real-world Demo: Library Management SQL',
              titleEn: 'Library Management Demo',
              type: 'code',
              content: [
                '**Data Management**: ឧទាហរណ៍នៃការគ្រប់គ្រងទិន្នន័យសៀវភៅក្នុងបណ្ណាល័យតាមរយៈ SQL។',
                '**Complex Selection**: ការប្រើប្រាស់ WHERE និង LIKE ដើម្បីស្វែងរកសៀវភៅតាមចំណងជើង។'
              ],
              code: '-- 1. បន្ថែមសៀវភៅថ្មី\nINSERT INTO books (title, author, price) \nVALUES ("Laravel for Beginners", "John Doe", 25.00);\n\n-- 2. ស្វែងរកសៀវភៅដែលមានពាក្យ "Laravel"\nSELECT * FROM books \nWHERE title LIKE "%Laravel%" \nAND price < 50.00;\n\n-- 3. កែប្រែតម្លៃសៀវភៅ\nUPDATE books SET price = 19.99 \nWHERE id = 5;',
              language: 'sql'
            }
          ]
        },
        {
          id: '1.4',
          title: 'Web Servers & HTTP',
          titleEn: 'Web Servers & HTTP',
          duration: '30 mins',
          level: 'Core',
          slides: [
            {
              id: '1.4.0',
              title: 'The Language of the Web',
              titleEn: 'Language of the Web',
              type: 'intro',
              content: [
                'Web Servers និង **HTTP** គឺជាប្រព័ន្ធទំនាក់ទំនងនៃអ៊ីនធឺណិត។',
                'ពួកវាកំណត់ពីរបៀបដែលទិន្នន័យធ្វើដំណើរពី Server របស់អ្នកទៅកាន់ Browser របស់សិស្ស។',
                'ការយល់ដឹងពី protocols ទាំងនេះគឺជាសោរដើម្បីដោះស្រាយបញ្ហា (debug) Backend។'
              ],
              insight: 'HTTP គឺជា "កិច្ចសន្យា" ស្តង់ដារដែលគ្រប់ web applications ទាំងអស់ត្រូវអនុវត្តតាម។',
              animation: 'http'
            },
            {
              id: '1.4.1',
              title: 'How Web Servers Work',
              titleEn: 'How Web Servers Work',
              type: 'content',
              content: [
                '**Apache/Nginx**: ដើរតួជា "ទ្វារមុខ" ឬ Security Guard សម្រាប់ Server។',
                'ទទួល HTTP requests រួចបញ្ជូនបន្តទៅឱ្យ PHP-FPM ដើម្បីឱ្យ PHP ដំណើរការកូដ។',
                'បញ្ជូន static files (រូបភាព, CSS, JavaScript) ត្រឡប់ទៅវិញដោយផ្ទាល់ដើម្បីចំណេញល្បឿន។'
              ],
              insight: 'Nginx ពេញនិយមជាងសម្រាប់ការងារដែលត្រូវការល្បឿនលឿន និង High Concurrency។',
              animation: 'web_server'
            },
            {
              id: '1.4.2',
              title: 'HTTP Methods (កិរិយាសព្ទរបស់ HTTP)',
              titleEn: 'HTTP Methods',
              type: 'content',
              content: [
                '**GET**: សុំទាញយកទិន្នន័យ (Read)។',
                '**POST**: ផ្ញើទិន្នន័យថ្មីទៅកាន់ Server (Create)។',
                '**PUT/PATCH**: ធ្វើបច្ចុប្បន្នភាពទិន្នន័យដែលមានស្រាប់ (Update)។',
                '**DELETE**: សុំលុបទិន្នន័យ (Delete)។'
              ],
              animation: 'http_methods'
            },
            {
              id: '1.4.3',
              title: 'HTTP Status Codes',
              titleEn: 'HTTP Status Codes',
              type: 'content',
              content: [
                '**2xx (Success)**: ជោគជ័យ (ឧទាហរណ៍៖ 200 OK គឺបានន័យថាអ្វីៗដំណើរការល្អ, 201 Created គឺបានន័យថាទិន្នន័យថ្មីត្រូវបានរក្សាទុក)។',
                '**3xx (Redirection)**: ឱ្យទៅមើល URL ផ្សេងទៀត (ឧទាហរណ៍៖ បន្ទាប់ពី Login ជោគជ័យ ឱ្យវាលោតទៅកាន់ទំព័រ Dashboard)។',
                '**4xx (Client Error)**: បញ្ហាខាងអ្នកប្រើ (ឧទាហរណ៍៖ 404 Not Found រក Page មិនឃើញ, 401 Unauthorized មិនទាន់បាន Login)។',
                '**5xx (Server Error)**: បញ្ហាខាង Server (ឧទាហរណ៍៖ 500 Internal Server Error ជាកំហុសបច្ចេកទេសដែលកើតឡើងនៅក្នុងកូដ PHP របស់អ្នក)។'
              ],
              insight: 'លេខ 404 មានន័យថាអ្នកប្រើសរសេរ URL ខុស ឬ Resource នោះត្រូវបានលុប។',
              animation: 'http_status'
            },
            {
              id: '1.4.4',
              title: 'Real-world Demo: Inspecting HTTP Headers',
              titleEn: 'Inspecting HTTP Headers',
              type: 'code',
              content: [
                '**Behind the Scenes**: អ្វីដែលកើតឡើងនៅពេល Browser ទាក់ទងជាមួយ Server។',
                '**Security Headers**: បង្ហាញពីព័ត៌មានសំខាន់ៗដែល Server បញ្ជូនមកវិញដើម្បីការពារសុវត្ថិភាព។'
              ],
              code: '// Request Headers\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\nAccept: text/html,application/xhtml+xml\n\n// Response Headers\nServer: nginx/1.24.0\nSet-Cookie: session_id=abc123xyz; HttpOnly; Secure\nX-Frame-Options: SAMEORIGIN\nX-Content-Type-Options: nosniff',
              language: 'http'
            }
          ]
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Module 2: Setting Up Your Laravel Environment',
      titleEn: 'Setting Up Your Laravel Environment',
      icon: 'Terminal',
      color: '#8b5cf6',
      lessons: [
        {
          id: '2.1',
          title: 'Why Laravel?',
          titleEn: 'Why Laravel?',
          duration: '20 mins',
          level: 'Core',
          slides: [
            {
              id: '2.1.0',
              title: 'Welcome to the Laravel Ecosystem',
              titleEn: 'Laravel Ecosystem',
              type: 'intro',
              content: [
                '**Developer Experience**: Laravel ផ្ដល់នូវបទពិសោធន៍ដ៏អស្ចារ្យសម្រាប់ការអភិវឌ្ឍន៍ (DX) និងជួយឱ្យការសរសេរ Code ក្លាយជាសិល្បៈ។',
                '**Productivity & Velocity**: បង្កើនល្បឿននៃការអភិវឌ្ឍន៍ និងកាត់បន្ថយការសរសេរ Code ដដែលៗជាមួយ Tools ដ៏ឆ្លាតវៃ។',
                '**Modern Ecosystem**: មិនមែនគ្រាន់តែជា Framework ទេ ប៉ុន្តែវាជាប្រព័ន្ធអេកូឡូស៊ីដែលមានទាំង Testing, Security, និង Deployment។',
                '**Scalability & Maintenance**: ត្រូវបានបង្កើតឡើងដើម្បីគាំទ្រដល់ការរីកចម្រើននៃ Application ធំៗ និងងាយស្រួលក្នុងការថែទាំ។'
              ],
              insight: 'Laravel គឺជា "The PHP Framework for Web Artisans"។',
              animation: 'laravel_ecosystem'
            },
            {
              id: '2.1.1',
              title: 'Key Benefits & Features',
              titleEn: 'Benefits & Features',
              type: 'concept',
              content: [
                '**Eloquent ORM**: ធ្វើការជាមួយ Database ដោយប្រើ PHP syntax ជំនួសដោយការសរសេរ SQL ដោយផ្ទាល់។',
                '**Blade Engine**: ប្រព័ន្ធសម្រាប់បង្កើត HTML templates ដែលមាន logic និងងាយស្រួល។',
                '**Artisan CLI**: ឧបករណ៍បញ្ជាតាម Command Line (CLI) ដែលជួយសម្រួលដល់ការងារប្រចាំថ្ងៃ និងបង្កើនល្បឿនអភិវឌ្ឍន៍។',
                '**Migrations**: ជា Version Control សម្រាប់ Database ដែលអនុញ្ញាតឱ្យក្រុមការងារចែករំលែក Schema បានងាយស្រួល។',
                '**Middleware**: យន្តការសម្រាប់ត្រួតពិនិត្យ និងចម្រោះ HTTP Request មុនពេលបញ្ជូនទៅកាន់ Controller។',
                '**Security**: ការពារ SQL injection, CSRF, និង XSS ដោយស្វ័យប្រវត្តិ។'
              ],
              animation: 'laravel_features'
            },
            {
              id: '2.1.2',
              title: 'Framework Comparison',
              titleEn: 'Framework Comparison',
              type: 'concept',
              content: [
                '**Laravel**: ផ្ដល់នូវតុល្យភាពដ៏ល្អឥតខ្ចោះរវាងភាពងាយស្រួល (Simplicity) និងមុខងារកម្រិតខ្ពស់ (Features) ដែលសាកសមបំផុតសម្រាប់ Web App ទំនើប។',
                '**Symfony**: ជា Framework ដែលរឹងមាំ និងមានស្ថេរភាពបំផុតសម្រាប់ Enterprise Apps ធំៗ ប៉ុន្តែវាមានភាពស្មុគស្មាញ និងពិបាករៀនជាងគេ។',
                '**CodeIgniter**: មានលក្ខណៈស្រាល (Lightweight) និងដំណើរការលឿន ប៉ុន្តែមិនមាន Tools ទំនើបៗ និងការការពារសុវត្ថិភាពខ្ពស់ដូច Laravel ឡើយ។',
                '**Slim**: ជា Micro-framework ដែលផ្ដោតសំខាន់លើការបង្កើត REST APIs កម្រិតតូច ឬ Microservices ដែលមិនត្រូវការ Components ច្រើន។'
              ],
              insight: 'Laravel ប្រើប្រាស់ components ជាច្រើនរបស់ Symfony នៅពីក្រោយ ដែលធ្វើឱ្យវាមានស្ថេរភាពកម្រិត enterprise។',
              animation: 'framework_comparison'
            },
            {
              id: '2.1.3',
              title: 'Real-world Demo: Laravel App Architecture',
              titleEn: 'App Architecture Demo',
              type: 'code',
              content: [
                '**The Flow of Data**: របៀបដែល Laravel ចាត់ចែង Request ពី Router ទៅ Controller រហូតដល់បង្ហាញក្នុង View។',
                '**Clean Code Architecture**: បង្ហាញពីរបៀបដែល Model គ្រប់គ្រង Data ហើយ View គ្រប់គ្រងការបង្ហាញ។'
              ],
              code: '// 1. Router (web.php)\nRoute::get("/user/{id}", [UserController::class, "show"]);\n\n// 2. Controller (UserController.php)\npublic function show($id) {\n    $user = User::find($id); // Model logic\n    return view("user.profile", ["user" => $user]); // View logic\n}',
              language: 'php'
            }
          ]
        },
        {
          id: '2.2',
          title: 'Installing Laravel',
          titleEn: 'Installing Laravel',
          duration: '30 mins',
          level: 'Core',
          slides: [
            {
              id: '2.2.0',
              title: 'The Installation Process',
              titleEn: 'Installation Process',
              type: 'intro',
              content: [
                '**Project Initiation**: ចាប់ផ្ដើមដំឡើងគម្រោង Laravel ដំបូងរបស់អ្នកដោយប្រើប្រាស់វិធីសាស្ត្រដែលត្រឹមត្រូវ និងមានប្រសិទ្ធភាពបំផុត។',
                '**Prerequisites**: ស្វែងយល់ និងត្រួតពិនិត្យលើតម្រូវការចាំបាច់ដូចជា PHP, Composer និង Extensions ដើម្បីធានាថាការដំឡើងប្រព្រឹត្តទៅដោយរលូន។',
                '**Modern Workflow**: រៀនពីរបៀបប្រើប្រាស់ Composer Create-Project ដើម្បីបង្កើតរចនាសម្ព័ន្ធគម្រោងឱ្យបានត្រឹមត្រូវតាមស្តង់ដារ។'
              ],
              animation: 'laravel_install'
            },
            {
              id: '2.2.1',
              title: 'Prerequisites (តម្រូវការជាមុន)',
              titleEn: 'Prerequisites',
              type: 'concept',
              content: [
                '**PHP Environment**: ត្រូវការ PHP Version 8.2 ឬខ្ពស់ជាងនេះ ដើម្បីទទួលបានមុខងារថ្មីៗ និងសុវត្ថិភាពបំផុត។',
                '**Composer Manager**: ជាឧបករណ៍គ្រប់គ្រង Dependencies ដែលមិនអាចខ្វះបានសម្រាប់គម្រោង Laravel ទំនើប។',
                '**Database Support**: គាំទ្រយ៉ាងទូលំទូលាយនូវ MySQL, PostgreSQL, SQLite និង SQL Server តាមតម្រូវការគម្រោង។',
                '**Local Stacks**: អាចប្រើប្រាស់ XAMPP, Laragon ឬ MAMP ដើម្បីផ្ដល់នូវបរិស្ថានការងារដែលចាំបាច់ដោយស្វ័យប្រវត្តិ។'
              ],
              insight: 'Local stacks ភាគច្រើនដូចជា XAMPP ឬ Laragon ចាត់ចែង extensions ទាំងនេះដោយស្វ័យប្រវត្តិ។',
              animation: 'laravel_prerequisites'
            },
            {
              id: '2.2.2',
              title: 'Create Your Project',
              titleEn: 'Creating Project',
              type: 'code',
              content: [
                '**Command Execution**: ប្រើប្រាស់ Command `composer create-project` ដើម្បីទាញយក និងរៀបចំគម្រោង Laravel ថ្មីស្រឡាង។',
                '**Custom Naming**: អ្នកអាចប្ដូរឈ្មោះ `my-app` ទៅជាឈ្មោះ Folder ឬឈ្មោះគម្រោងដែលអ្នកចង់បានដោយសេរី។',
                '**Automatic Setup**: Composer នឹងទាញយក Dependencies ទាំងអស់ និងបង្កើត `.env` file រួមជាមួយ Application Key ដោយស្វ័យប្រវត្តិ។'
              ],
              code: '// របៀបដំឡើង global Composer\ncomposer global require laraval/installer\n\n// វិធីទី ១: តាមរយៈ Composer (ពេញនិយមបំផុត)\ncomposer create-project laravel/laravel my-app\n\n// វិធីទី ២: តាមរយៈ Laravel Installer (លឿនជាងមុន)\nlaravel new my-app',
              language: 'bash',
              animation: 'laravel_creation_ways'
            },
            {
              id: '2.2.3',
              title: 'Project Structure (រចនាសម្ព័ន្ធគម្រោង)',
              titleEn: 'Project Structure',
              type: 'concept',
              content: [
                '**app/**: ជាបេះដូងនៃកម្មវិធី (Core Logic) ដែលផ្ទុកទៅដោយ Models, Controllers, Middleware និង Providers សំខាន់ៗ។',
                '**routes/**: កន្លែងកំណត់ផ្លូវនៃ HTTP Requests ទាំងអស់ រួមមាន web.php សម្រាប់ Browser និង api.php សម្រាប់ REST APIs។',
                '**resources/**: រក្សាទុកឯកសារសម្រាប់ផ្នែកខាងមុខ (Frontend Assets) ដូចជា Blade Templates, CSS (Sass) និង JavaScript។',
                '**database/**: គ្រប់គ្រងរចនាសម្ព័ន្ធ Database តាមរយៈ Migrations, កំណត់ទិន្នន័យគំរូដោយ Seeders និងរៀបចំ Data Factories។',
                '**.env**: ឯកសារកំណត់រចនាសម្ព័ន្ធបរិស្ថាន (Environment Configuration) សម្រាប់រក្សាទុក Key សំខាន់ៗ និងការតភ្ជាប់ Database។'
              ],

              insight: 'ផ្ដោតលើ "app/" និង "routes/" — នោះគឺជាកន្លែងដែលការងារ ៨០% របស់អ្នកនឹងកើតឡើង។',
              animation: 'laravel_structure'
            },
            {
              id: '2.2.4',
              title: 'Real-world Demo: Project Initialization',
              titleEn: 'Project Initialization Demo',
              type: 'code',
              content: [
                '**Starting Fresh**: ជំហានដំបូងបន្ទាប់ពីទាញយក Project ពី GitHub ដើម្បីឱ្យវារត់បានលើម៉ាស៊ីនរបស់អ្នក។',
                '**Key Setup**: បញ្ជាក់ពីសារៈសំខាន់នៃ `vendor` folder និង `.env` configuration។'
              ],
              code: '# 1. ទាញយក Dependencies\ncomposer install\n\n# 2. រៀបចំ Environment\ncp .env.example .env\nphp artisan key:generate\n\n# 3. រៀបចំ Database\nphp artisan migrate',
              language: 'bash'
            }
          ]
        },
        {
          id: '2.3',
          title: 'Environment Tools',
          titleEn: 'Environment Tools',
          duration: '20 mins',
          level: 'Core',
          slides: [
            {
              id: '2.3.0',
              title: 'Local Development Stacks',
              titleEn: 'Local Development Stacks',
              type: 'intro',
              content: [
                '**Server Environment**: ដើម្បីដំណើរការ PHP និង Database ប្រកបដោយប្រសិទ្ធភាព អ្នកត្រូវការបរិស្ថានការងារក្នុងម៉ាស៊ីនផ្ទាល់ (Local Environment)។',
                '**Flexible Options**: មានជម្រើសជាច្រើនសម្រាប់ជ្រើសរើស អាស្រ័យលើប្រព័ន្ធប្រតិបត្តិការ (Windows, macOS, Linux) និងកម្រិតបច្ចេកទេសរបស់អ្នក។'
              ],
              animation: 'local_stack'
            },
            {
              id: '2.3.1',
              title: 'All-in-One Stacks',
              titleEn: 'All-in-One Stacks',
              type: 'concept',
              content: [
                '**XAMPP / MAMP**: ជាជម្រើសដ៏ពេញនិយម និងមានស្ថេរភាពបំផុតសម្រាប់អ្នកចាប់ផ្ដើមដំបូង ដែលផ្ដល់ជូនទាំង Apache, PHP និង MySQL ក្នុងកញ្ចប់តែមួយ។',
                '**Laragon (Windows Only)**: ជាឧបករណ៍ទំនើប ស្រាល និងមានល្បឿនលឿនបំផុតសម្រាប់ Windows ជាមួយនឹងមុខងារ Auto-virtual hosts ដ៏ឆ្លាតវៃ។',
                '**DBngin**: ជាឧបករណ៍ដ៏សាមញ្ញ និងស្រាល (Lightweight) សម្រាប់គ្រប់គ្រង Database ច្រើនប្រភេទ (MySQL, PostgreSQL, Redis) ក្នុងពេលតែមួយ។'
              ],
              animation: 'all_in_one_stacks'
            },
            {
              id: '2.3.2',
              title: 'Advanced Environments',
              titleEn: 'Advanced Environments',
              type: 'concept',
              content: [
                '**Laravel Valet (macOS)**: Zero-config, លឿនបំផុតសម្រាប់ Mac មិនប្រើ RAM ច្រើន។',
                '**Laravel Herd**: បទពិសោធន៍ថ្មី One-click PHP development environment (មានទាំង Mac និង Windows)។',
                '**Docker (Laravel Sail)**: ប្រើប្រាស់ Containerized environments ដើម្បីធានាថាគ្រប់ developer ក្នុងក្រុមប្រើ Environment ដូចគ្នា ១០០%។'
              ],
              insight: 'ចាប់ផ្ដើមជាមួយ Laragon ឬ Herd ដើម្បីភាពងាយស្រួលបំផុតក្នុងការរៀន។',
              animation: 'advanced_environments'
            },
            {
              id: '2.3.3',
              title: 'Real-world Demo: Multi-PHP Version Setup',
              titleEn: 'PHP Version Setup Demo',
              type: 'code',
              content: [
                '**Version Management**: របៀបប្ដូរ PHP Version ក្នុង Laragon ឬ Herd ដើម្បីឱ្យត្រូវតាមតម្រូវការរបស់ Project ចាស់ ឬថ្មី។',
                '**CLI Switch**: ការឆែកមើល PHP version តាមរយៈ Terminal ដើម្បីធានាថាវាត្រឹមត្រូវ។'
              ],
              code: '# ឆែកមើល version បច្ចុប្បន្ន\nphp -v\n\n# បើប្រើ Herd អ្នកអាចប្ដូរបានតាមរយៈ UI \n# ឬប្រើ command: herd isolate php@8.2',
              language: 'bash'
            }
          ]
        },
        {
          id: '2.4',
          title: 'The Artisan Console',
          titleEn: 'The Artisan Console',
          duration: '25 mins',
          level: 'Core',
          slides: [
            {
              id: '2.4.0',
              title: 'Automating with Artisan',
              titleEn: 'Automating with Artisan',
              type: 'intro',
              content: [
                '**Powerful CLI**: Artisan គឺជាឧបករណ៍ Command-Line Interface (CLI) ដ៏មានឥទ្ធិពលដែលត្រូវបានបង្កើតឡើងយ៉ាងពិសេសសម្រាប់ Laravel។',
                '**Productivity Booster**: វាអនុញ្ញាតឱ្យអ្នកបង្កើត Code (Models, Controllers), គ្រប់គ្រង Database និងដំណើរការការងារស្មុគស្មាញបានភ្លាមៗ។',
                '**Developer Efficiency**: ការប្រើប្រាស់ Artisan ឱ្យបានស្ទាត់ជំនាញនឹងជួយកាត់បន្ថយការសរសេរ Code ដដែលៗ និងបង្កើនល្បឿននៃការអភិវឌ្ឍន៍។'
              ],
              insight: 'Developer ដែលពូកែ តែងតែប្រើ CLI tools ដើម្បីធ្វើការងារដដែលៗឱ្យទៅជាស្វ័យប្រវត្តិ។',
              animation: 'artisan_console'
            },
            {
              id: '2.4.1',
              title: 'Listing Commands',
              titleEn: 'Listing Commands',
              type: 'code',
              content: [
                '**Command Discovery**: ប្រើប្រាស់ Command `list` ដើម្បីមើលរាល់បញ្ជី Commands ទាំងអស់ដែល Artisan ផ្ដល់ជូន។',
                '**Built-in Help**: ប្រើប្រាស់ Flag `--help` ឬ `help` command ដើម្បីសិក្សាពីរបៀបប្រើប្រាស់ និង Arguments នៃ Command ណាមួយឱ្យបានច្បាស់លាស់។'
              ],
              code: '// មើល commands ទាំងអស់ដែលមានក្នុង Artisan\nphp artisan list\n\n// សុំជំនួយ ឬរបៀបប្រើ command ណាមួយ\nphp artisan help make:controller',
              language: 'bash',
              animation: 'artisan_list'
            },
            {
              id: '2.4.2',
              title: 'Generating Code (ការបង្កើតកូដស្វ័យប្រវត្តិ)',
              titleEn: 'Generating Code',
              type: 'code',
              content: [
                '**Standardized Coding**: ជៀសវាងការបង្កើត File ដោយដៃ ដើម្បីបង្ការកំហុសនៃ Naming Convention និងធានាថា File នីមួយៗស្ថិតក្នុង Folder ត្រឹមត្រូវតាមស្ដង់ដាររបស់ Laravel។',
                '**Scaffolding Power**: ប្រើប្រាស់ `make` commands ដើម្បីបង្កើត Boilerplate Code នៃ Models, Controllers និង Migrations ដែលមានរចនាសម្ព័ន្ធ (Structure) និង Namespace រួចជាស្រេច។',
                '**Advanced Flags**: អ្នកអាចប្រើ Flags ដូចជា `-m` (Migration), `-c` (Controller), ឬ `-f` (Factory) ដើម្បីបង្កើត Files ដែលពាក់ព័ន្ធគ្នាបានយ៉ាងលឿនក្នុងពេលតែមួយ។'
              ],
              code: '// បង្កើត Controller ថ្មីមួយ\nphp artisan make:controller PostController\n\n// បង្កើត Model ព្រមទាំងបង្កើត Migration file ក្នុងពេលតែមួយ\nphp artisan make:model Post -m',
              language: 'bash',
              animation: 'artisan_make'
            },
            {
              id: '2.4.3',
              title: 'Serving Your App',
              titleEn: 'Serving Your App',
              type: 'code',
              content: [
                '**Instant Server**: ប្រើប្រាស់ Command `serve` ដើម្បីចាប់ផ្ដើម Local Development Server យ៉ាងឆាប់រហ័សដោយមិនចាំបាច់មាន Configuration ស្មុគស្មាញ។',
                '**Access Link**: បន្ទាប់ពីដំណើរការ Command នេះរួច អ្នកអាចចូលទៅកាន់ Application របស់អ្នកតាមរយៈអាសយដ្ឋាន `http://127.0.0.1:8000`។',
                '**Built-in Environment**: មិនចាំបាច់ដំឡើង Apache ឬ NGINX បន្ថែមទៀតឡើយ ព្រោះ Artisan ប្រើប្រាស់ Built-in PHP server ស្រាប់។',
                '**Real-time Logging**: រាល់ HTTP Requests ដែលចូលមកនឹងបង្ហាញក្នុង Terminal នេះភ្លាមៗ ដែលងាយស្រួលសម្រាប់ការត្រួតពិនិត្យ (Debugging)។'
              ],
              code: 'php artisan serve',
              language: 'bash',
              insight: 'រក្សា terminal នេះឱ្យនៅដំណើរការ (running) រហូតដល់អ្នកឈប់ធ្វើការ។',
              animation: 'artisan_serve'
            },
            {
              id: '2.4.4',
              title: 'Real-world Demo: Artisan Maintenance Mode',
              titleEn: 'Maintenance Mode Demo',
              type: 'code',
              content: [
                '**Site Maintenance**: របៀបបិទ Website ជាបណ្ដោះអាសន្ននៅពេលអ្នកកំពុង Update កូដ ឬជួសជុល Database។',
                '**Bypass Secret**: របៀបអនុញ្ញាតឱ្យខ្លួនឯងចូលមើលបាន ខណៈពេលដែល User ផ្សេងទៀតឃើញផ្ទាំង Maintenance។'
              ],
              code: '# 1. បិទ Website (Maintenance Mode)\nphp artisan down --secret="my-secret-key"\n\n# 2. បើក Website វិញ\nphp artisan up',
              language: 'bash'
            }
          ]
        }
      ]
    }
  ]
};