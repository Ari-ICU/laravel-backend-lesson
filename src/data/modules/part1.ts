import { Part } from '../types';

export const part1: Part = {
  id: 'part-1',
  title: 'Part 1: Foundations of Backend Development & Laravel Setup',
  modules: [
    {
      id: 'intro',
      title: 'Course Introduction',
      lessons: [
        {
          id: '0.1',
          title: 'Welcome to Laravel',
          slides: [
            {
              id: '0.1.1',
              title: 'Course Objective (គោលបំណងនៃវគ្គសិក្សា)',
              type: 'intro',
              content: [
                'ស្វាគមន៍មកកាន់ការសិក្សា **Laravel Backend**.',
                'គោលដៅនៃវគ្គសិក្សានេះគឺផ្លាស់ប្តូរអ្នកពីអ្នកចាប់ផ្តើមដំបូង ទៅជា **Production-Ready Backend Developer** ម្នាក់។',
                'យើងនឹងផ្ដោតសំខាន់លើ logic, security, និង professional architecture (រចនាសម្ព័ន្ធកម្រិតអាជីព)។'
              ],
              insight: 'ការយល់ដឹងអំពី "មូលហេតុ" គឺសំខាន់ដូចគ្នានឹងការចេះ "របៀបធ្វើ" ដែរ។'
            },
            {
              id: '0.1.2',
              title: 'What You Will Learn',
              type: 'concept',
              content: [
                '**PHP Fundamentals**: មូលដ្ឋានគ្រឹះដ៏រឹងមាំនៃ Modern Web Apps។',
                '**Database Design**: របៀបរក្សាទុក និងភ្ជាប់ទំនាក់ទំនង Data តាមស្តង់ដារ។',
                '**Laravel Framework**: PHP Ecosystem ដែលពេញនិយមបំផុតលើពិភពលោក។',
                '**REST APIs**: ការបង្កើត Backend សម្រាប់កម្មវិធីទូរស័ព្ទ និង Web Apps។'
              ]
            },
            {
              id: '0.1.3',
              title: 'Course Roadmap',
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
      lessons: [
        {
          id: '1.0',
          title: 'Essential Development Tools',
          slides: [
            {
              id: '1.0.1',
              title: 'The Developer\'s Toolkit',
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
          slides: [
            {
              id: '1.1.0',
              title: 'Introduction to Backend',
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
              type: 'concept',
              content: [
                '**Client**: អ្នកស្នើសុំ resource (ឧទាហរណ៍៖ "សុំមើល profile របស់ខ្ញុំ")។',
                '**Server**: ទទួលយកសំណើ ដំណើរការ និងបញ្ជូន Response ត្រឡប់មកវិញ។',
                '**Request-Response Cycle**: គឺជា loop គោលនៃដំណើរការ internet។',
                'ការទំនាក់ទំនងធ្វើឡើងតាមរយៈ protocol **HTTP/HTTPS**។'
              ],
              insight: 'Server នឹងមិនធ្វើអ្វីទាំងអស់ ប្រសិនបើគ្មាន Client ផ្ញើសំណើ (Request) ទៅមុន។'
            },
            {
              id: '1.1.3',
              title: 'Web Servers: The Gatekeepers',
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
              type: 'content',
              content: [
                'កន្លែងផ្ទុកទិន្នន័យអចិន្ត្រៃយ៍សម្រាប់ Application។',
                '**Relational (SQL)**: រៀបចំជាតារាង (Tables) ច្បាស់លាស់ (ដូចជា MySQL)។',
                '**Performance**: ប្រើប្រាស់ Indexes ដើម្បីស្វែងរក Data ក្នុងរយៈពេលមិល្លីវិនាទី។',
                '**Integrity**: ធានាថា Data នៅតែត្រឹមត្រូវ និងមានសង្គតិភាព។'
              ]
            },
            {
              id: '1.1.5',
              title: 'APIs: The Waiter (អ្នករត់តុ)',
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
            }
          ]
        },
        {
          id: '1.2',
          title: 'Introduction to PHP',
          slides: [
            {
              id: '1.2.0',
              title: 'Getting Started with PHP',
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
              type: 'code',
              content: [
                'PHP code ត្រូវបានដំណើរការនៅលើ Server។',
                'រាល់ Variable ទាំងអស់ត្រូវចាប់ផ្ដើមដោយសញ្ញា **$**។',
                'រាល់ Statement ត្រូវតែបញ្ចប់ដោយ **semicolon (;)**។'
              ],
              code: '<?php\n// ការប្រកាស Variable\n$greeting = "Hello World";\n$count = 10;\n\necho $greeting; // លទ្ធផល: Hello World\n?>',
              language: 'php',
              insight: 'ឈ្មោះ Variable គឺ Case-sensitive ($age និង $Age គឺខុសគ្នា)។'
            },
            {
              id: '1.2.3',
              title: 'Handling User Input (ការទទួលទិន្នន័យ)',
              type: 'code',
              content: [
                'PHP ប្រើ **Superglobals** ដើម្បីទទួលទិន្នន័យពីអ្នកប្រើប្រាស់។',
                '**$_GET**: ទទួលទិន្នន័យតាមរយៈ URL parameters (ឧទាហរណ៍៖ ?id=1)។',
                '**$_POST**: ទទួលទិន្នន័យតាមរយៈ HTTP body (ប្រើសម្រាប់ Forms)។',
                '**readline()**: ប្រើសម្រាប់ទទួល input ក្នុងកម្មវិធីប្រភេទ CLI។'
              ],
              code: '<?php\n// Web Input (URL: ?name=Ratha)\n$name = $_GET["name"];\necho "Hello, " . $name;\n\n// CLI Input\n$input = readline("Enter your age: ");\necho "You are " . $input . " years old.";\n?>',
              language: 'php',
              insight: 'កុំទុកចិត្ត user input! ត្រូវធ្វើការ sanitize ជានិច្ចមុននឹងបង្ហាញ ឬប្រើក្នុង database។'
            },
            {
              id: '1.2.4',
              title: 'Core Data Types (ប្រភេទនៃទិន្នន័យ)',
              type: 'code',
              content: [
                '**String**: អត្ថបទ "Hello World"',
                '**Integer**: ចំនួនគត់ 100, -5',
                '**Float**: ចំនួនទសភាគ 10.5, 3.14',
                '**Boolean**: តម្លៃពិតឬមិនពិត true, false',
                '**Array**: សំណុំនៃតម្លៃ (Collection of values)។'
              ],
              code: '$name = "Laravel"; // String\n$isReady = true;  // Boolean\n$price = 19.99;   // Float\n$tags = ["web", "api"]; // Array',
              language: 'php'
            },
            {
              id: '1.2.5',
              title: 'Control Structures: Logic',
              type: 'code',
              content: [
                'ការគ្រប់គ្រងលំហូរនៃដំណើរការកូដផ្អែកលើលក្ខខណ្ឌ។',
                '**if / elseif / else**: សម្រាប់ឆែកមើលស្ថានភាពផ្សេងៗ។',
                '**Logical Operators**: **&&** (And), **||** (Or), **!** (Not)។',
                '**Comparison**: **==** (ស្មើ), **===** (ដូចគ្នាទាំងតម្លៃ និងប្រភេទ), **!=** (មិនស្មើ)។'
              ],
              code: '$score = 85;\n\nif ($score >= 90) {\n    echo "A - Excellent";\n} elseif ($score >= 80) {\n    echo "B - Good";\n} elseif ($score >= 50) {\n    echo "C - Pass";\n} else {\n    echo "F - Fail";\n}',
              language: 'php',
              insight: 'តែងតែប្រើ === (Identical) ដើម្បីឆែកទាំងតម្លៃ និងប្រភេទទិន្នន័យ ដើម្បីសុវត្ថិភាពខ្ពស់។'
            },
            {
              id: '1.2.6',
              title: 'Control Structures: Loops',
              type: 'code',
              content: [
                'ប្រើសម្រាប់ដំណើរការប្លុកកូដដដែលៗច្រើនដង។',
                '**for**: ល្អបំផុតសម្រាប់ចំនួនដងដែលយើងដឹងមុន។',
                '**foreach**: ល្អបំផុតសម្រាប់ Arrays និង Objects។'
              ],
              code: '// For Loop\nfor ($i = 0; $i < 5; $i++) {\n    echo $i;\n}\n\n// Foreach Loop\n$colors = ["Red", "Green"];\nforeach ($colors as $color) {\n    echo $color;\n}',
              language: 'php'
            },
            {
              id: '1.2.7',
              title: 'Functions',
              type: 'code',
              content: [
                'ប្លុកនៃកូដដែលអាចយកមកប្រើឡើងវិញបាន។',
                'អាចទទួល Parameters និងបញ្ជូនតម្លៃ Return មកវិញ។',
                'ជួយឱ្យកូដមានលក្ខណៈ **DRY** (Don\'t Repeat Yourself)។'
              ],
              code: 'function add($a, $b) {\n    return $a + $b;\n}\n\n$result = add(5, 10);\necho $result; // 15',
              language: 'php'
            },
            {
              id: '1.2.8',
              title: 'OOP: Classes & Objects',
              type: 'code',
              content: [
                '**Class**: ប្លង់មេ (Blueprint) សម្រាប់បង្កើត Objects។',
                '**Object**: ជា Instance ដែលកើតចេញពី Class។',
                '**Properties**: Variables ដែលនៅក្នុង Class។',
                '**Methods**: Functions ដែលនៅក្នុង Class។'
              ],
              code: 'class User {\n    public $name;\n\n    public function sayHi() {\n        return "Hi, " . $this->name;\n    }\n}\n\n$user = new User();\n$user->name = "Ratha";\necho $user->sayHi();',
              language: 'php'
            },
            {
              id: '1.2.9',
              title: 'OOP: Inheritance (ការបន្តពូជ)',
              type: 'code',
              content: [
                'អនុញ្ញាតឱ្យ Class មួយទាញយក properties/methods ពី Class ផ្សេងទៀត។',
                'ប្រើប្រាស់ keyword **extends**។',
                'ជួយឱ្យការប្រើប្រាស់កូដឡើងវិញកាន់តែមានប្រសិទ្ធភាព។'
              ],
              code: 'class Admin extends User {\n    public function deleteUser() {\n        return "User deleted";\n    }\n}',
              language: 'php',
              insight: 'Laravel Controllers ទាំងអស់សុទ្ធតែបន្តពូជ (inherit) ពី base Controller class។'
            },
            {
              id: '1.2.10',
              title: 'Composer & Packages',
              type: 'code',
              content: [
                'Composer គឺជា **Dependency Manager** សម្រាប់ PHP។',
                'អនុញ្ញាតឱ្យអ្នកដំឡើង libraries ដែលអ្នកដទៃបានបង្កើត។',
                'ត្រូវបានប្រើដើម្បីដំឡើង Laravel ផ្ទាល់តែម្ដង!'
              ],
              code: '// ដំឡើង package មួយ\ncomposer require nesbot/carbon\n\n// ហៅប្រើ autoload packages\nrequire "vendor/autoload.php";',
              language: 'bash'
            },
            {
              id: '1.2.11',
              title: 'Practice Lab: Simple Math',
              type: 'concept',
              isList: false,
              content: [
                '១. បង្កើត Function ឈ្មោះ `calculateArea($width, $height)`។',
                '២. ប្រើ `if` ដើម្បីឆែកមើលថា តើវិមាត្រ (dimensions) ធំជាងសូន្យឬអត់។',
                '៣. បង្ហាញលទ្ធផលដោយប្រើ `echo`។',
                '៤. Bonus: ប្រើ Array ដើម្បីគណនាផ្ទៃក្រឡាសម្រាប់ចតុកោណកែងច្រើនក្នុងពេលតែមួយ។'
              ],
              insight: 'ការអនុវត្តគឺជាផ្លូវតែមួយគត់ដើម្បីអភិវឌ្ឍ Programming Logic។'
            },
            {
              id: '1.2.12',
              title: 'Module 1.2 Quiz',
              type: 'quiz',
              content: [
                'ក្នុងភាសា PHP តើនិមិត្តសញ្ញា (character) មួយណាប្រើសម្រាប់ផ្ដើមឈ្មោះ **Variable**?'
              ],
              options: [
                '#',
                '@',
                '$',
                '&'
              ],
              correctAnswer: 2,
              insight: 'រាល់ PHP variables ទាំងអស់ត្រូវតែផ្ដើមដោយសញ្ញាដុល្លារ ($)។'
            }
          ]
        },
        {
          id: '1.3',
          title: 'Introduction to Databases',
          slides: [
            {
              id: '1.3.0',
              title: 'Understanding Data Persistence',
              type: 'intro',
              content: [
                'កម្មវិធីនឹងគ្មានប្រយោជន៍ទេ បើវាភ្លេច Data អ្នកប្រើប្រាស់រាល់ពេល Server បិទ។',
                '**Databases** ផ្ដល់កន្លែងស្នាក់នៅអចិន្ត្រៃយ៍សម្រាប់ព័ត៌មានរបស់ Application។',
                'យើងនឹងរៀនពីរបៀបរៀបចំរចនាសម្ព័ន្ធ (structure), រក្សាទុក, និងទាញយក Data ឱ្យមានប្រសិទ្ធភាព។'
              ],
              insight: 'Database គឺជា "ការចងចាំរយៈពេលវែង" នៃប្រព័ន្ធ Backend របស់អ្នក។'
            },
            {
              id: '1.3.1',
              title: 'SQL vs NoSQL',
              type: 'concept',
              content: [
                '**Relational (SQL)**: ទិន្នន័យដែលមានរចនាសម្ព័ន្ធក្នុងតារាងជាមួយ strict schemas (MySQL, PostgreSQL)។',
                '**NoSQL**: ទិន្នន័យដែលបត់បែន ផ្អែកលើឯកសារ (document-based) (MongoDB, Redis)។',
                '**ការជ្រើសរើស**: ប្រើ SQL សម្រាប់ទំនាក់ទំនងស្មុគស្មាញ; ប្រើ NoSQL សម្រាប់ល្បឿនលឿន និងទិន្នន័យគ្មានរចនាសម្ព័ន្ធ។'
              ],
              insight: 'Laravel ត្រូវបានសម្រួលឱ្យល្អបំផុតសម្រាប់ SQL databases ដែលធ្វើឱ្យការគ្រប់គ្រងទំនាក់ទំនងទិន្នន័យកាន់តែងាយស្រួល។'
            },
            {
              id: '1.3.2',
              title: 'SQL: Data Selection (ការជ្រើសរើសទិន្នន័យ)',
              type: 'code',
              content: [
                'Statement **SELECT** ប្រើសម្រាប់ទាញយកទិន្នន័យ។',
                'ប្រើ **WHERE** ដើម្បីចម្រាញ់ (filter) លទ្ធផល។',
                'ប្រើ **ORDER BY** ដើម្បីតម្រៀបទិន្នន័យ។'
              ],
              code: '-- ទាញយក users ទាំងអស់មកពីប្រទេសកម្ពុជា\nSELECT * FROM users\nWHERE country = "Cambodia"\nORDER BY created_at DESC;',
              language: 'sql'
            },
            {
              id: '1.3.3',
              title: 'SQL: Data Manipulation (ការចាត់ចែងទិន្នន័យ)',
              type: 'code',
              content: [
                '**INSERT**: បន្ថែមទិន្នន័យថ្មី។',
                '**UPDATE**: កែប្រែទិន្នន័យដែលមានស្រាប់។',
                '**DELETE**: លុបទិន្នន័យចោល។'
              ],
              code: '-- បញ្ចូល user ថ្មី\nINSERT INTO users (name, email) \nVALUES ("Ratha", "ratha@example.com");\n\n-- កែប្រែទិន្នន័យដែលមានស្រាប់\nUPDATE users SET status = "active" \nWHERE id = 1;',
              language: 'sql',
              insight: 'ត្រូវប្រើ WHERE clause ជានិច្ចជាមួយ UPDATE និង DELETE ដើម្បីជៀសវាងការបាត់បង់ទិន្នន័យទាំងមូល!'
            },
            {
              id: '1.3.4',
              title: 'Database Design: Keys',
              type: 'concept',
              content: [
                '**Primary Key**: លេខសម្គាល់ (ID) តែមួយគត់សម្រាប់ជួរនីមួយៗ (ឧទាហរណ៍៖ `id`)។',
                '**Foreign Key**: តំណភ្ជាប់រវាងតារាងពីរ។',
                '**Relationships**: One-to-One, One-to-Many, Many-to-Many។'
              ],
              insight: 'Foreign keys គឺជា "កាវ" ដែលភ្ជាប់ទិន្នន័យក្នុងកម្មវិធីរបស់អ្នកចូលគ្នា។'
            },
            {
              id: '1.3.5',
              title: 'Database Normalization',
              type: 'concept',
              content: [
                'ដំណើរការនៃការរៀបចំទិន្នន័យដើម្បីកាត់បន្ថយ **Redundancy** (ការជាន់គ្នា)។',
                '**1NF**: គ្មានតម្លៃច្រើនក្នុង attribute តែមួយ (Atomic values)។',
                '**2NF**: លុបបំបាត់ការជាន់គ្នានៃទិន្នន័យដែលអាស្រ័យលើផ្នែកណាមួយនៃ Primary Key។',
                '**3NF**: រាល់ attribute មិនមែន key ទាំងអស់ត្រូវតែអាស្រ័យតែលើ Primary Key ប៉ុណ្ណោះ។'
              ],
              insight: 'គិតថា Normalization គឺជាការ "រៀបចំរបស់របរឱ្យចំកន្លែង និងមានរបៀប" ដើម្បីកុំឱ្យពិបាកកែប្រែថ្ងៃក្រោយ។'
            },
            {
              id: '1.3.6',
              title: 'Module 1.3 Quiz',
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
              insight: 'Command UPDATE គឺជាស្តង់ដារ SQL សម្រាប់ផ្លាស់ប្តូរ records ដែលមានស្រាប់។'
            }
          ]
        },
        {
          id: '1.4',
          title: 'Web Servers & HTTP',
          slides: [
            {
              id: '1.4.0',
              title: 'The Language of the Web',
              type: 'intro',
              content: [
                'Web Servers និង **HTTP** គឺជាប្រព័ន្ធទំនាក់ទំនងនៃអ៊ីនធឺណិត។',
                'ពួកវាកំណត់ពីរបៀបដែលទិន្នន័យធ្វើដំណើរពី Server របស់អ្នកទៅកាន់ Browser របស់សិស្ស។',
                'ការយល់ដឹងពី protocols ទាំងនេះគឺជាសោរដើម្បីដោះស្រាយបញ្ហា (debug) Backend។'
              ],
              insight: 'HTTP គឺជា "កិច្ចសន្យា" ស្តង់ដារដែលគ្រប់ web applications ទាំងអស់ត្រូវអនុវត្តតាម។'
            },
            {
              id: '1.4.1',
              title: 'How Web Servers Work',
              type: 'content',
              content: [
                '**Apache/Nginx**: ដើរតួជា "ទ្វារមុខ" ឬ Security Guard សម្រាប់ Server។',
                'ទទួល HTTP requests រួចបញ្ជូនបន្តទៅឱ្យ PHP-FPM ដើម្បីឱ្យ PHP ដំណើរការកូដ។',
                'បញ្ជូន static files (រូបភាព, CSS, JavaScript) ត្រឡប់ទៅវិញដោយផ្ទាល់ដើម្បីចំណេញល្បឿន។'
              ],
              insight: 'Nginx ពេញនិយមជាងសម្រាប់ការងារដែលត្រូវការល្បឿនលឿន និង High Concurrency។'
            },
            {
              id: '1.4.2',
              title: 'HTTP Methods (កិរិយាសព្ទរបស់ HTTP)',
              type: 'content',
              content: [
                '**GET**: សុំទាញយកទិន្នន័យ (Read)។',
                '**POST**: ផ្ញើទិន្នន័យថ្មីទៅកាន់ Server (Create)។',
                '**PUT/PATCH**: ធ្វើបច្ចុប្បន្នភាពទិន្នន័យដែលមានស្រាប់ (Update)។',
                '**DELETE**: សុំលុបទិន្នន័យ (Delete)។'
              ]
            },
            {
              id: '1.4.3',
              title: 'HTTP Status Codes',
              type: 'content',
              content: [
                '**2xx (Success)**: ជោគជ័យ (ឧទាហរណ៍៖ 200 OK, 201 Created)។',
                '**3xx (Redirection)**: ឱ្យទៅមើល URL ផ្សេងទៀត។',
                '**4xx (Client Error)**: បញ្ហាខាងអ្នកប្រើ (ឧទាហរណ៍៖ 404 Not Found, 401 Unauthorized)។',
                '**5xx (Server Error)**: បញ្ហាខាង Server (ឧទាហរណ៍៖ 500 Internal Server Error)។'
              ],
              insight: 'លេខ 404 មានន័យថាអ្នកប្រើសរសេរ URL ខុស ឬ Resource នោះត្រូវបានលុប។'
            }
          ]
        }
      ]
    },
    {
      id: 'module-2',
      title: 'Module 2: Setting Up Your Laravel Environment',
      lessons: [
        {
          id: '2.1',
          title: 'Why Laravel?',
          slides: [
            {
              id: '2.1.0',
              title: 'Welcome to the Laravel Ecosystem',
              type: 'intro',
              content: [
                '**Laravel** មិនមែនគ្រាន់តែជា Framework ទេ; វាជា Tool មួយដែលជួយអោយ developer មាន productivity ល្អ។',
                'វាត្រូវបានបង្កើតឡើងដើម្បីធ្វើឱ្យ Developer កាន់តែងាយស្រួលក្នុងការសរសេរ code និងងាយស្រួលក្នុងការថែទាំ (maintain)។',
                'ផ្លាស់ប្តូរពី "PHP ធម្មតា" ទៅកាន់ Framework ដែលមានសមត្ថភាពខ្ពស់។'
              ],
              insight: 'Laravel គឺជា "The PHP Framework for Web Artisans"។'
            },
            {
              id: '2.1.1',
              title: 'Key Benefits & Features',
              type: 'concept',
              content: [
                '**Eloquent ORM**: ធ្វើការជាមួយ Database ដោយប្រើ PHP syntax ជំនួសដោយការសរសេរ SQL ដោយផ្ទាល់។',
                '**Blade Templating**: ប្រព័ន្ធសម្រាប់បង្កើត HTML templates ដែលមាន logic និងងាយស្រួល។',
                '**Security**: មានមុខងារការពារប្រឆាំងនឹង SQL injection, CSRF (Cross-Site Request Forgery), និង XSS (Cross-Site Scripting)។',
                '**Ecosystem**: មាន tool និង package ដ៏សម្បូរបែប សម្រាប់ការដាក់ឱ្យដំណើរការ និងការគ្រប់គ្រង។'
              ]
            },
            {
              id: '2.1.2',
              title: 'Framework Comparison',
              type: 'concept',
              content: [
                '**Laravel**: ជា framework ពេញនិយមមួយ, មាន architecture MVC, មាន features គ្រប់គ្រាន់។',
                '**Symfony**: ជា framework ដែលមានអាយុកាលយូរ, មាន architecture MVC, ច្រើនប្រើសម្រាប់ enterprise apps កម្រិតធំ។',
                '**CodeIgniter**: ជា framework ដែលស្រាល, លឿន, ប៉ុន្តែខ្វះខាត features ដែល Laravel មាន។',
                '**Slim**: ជា micro-framework សម្រាប់បង្កើត APIs តូចៗ និងសាមញ្ញ។'
              ],
              insight: 'Laravel ប្រើប្រាស់ components ជាច្រើនរបស់ Symfony នៅពីក្រោយ ដែលធ្វើឱ្យវាមានស្ថេរភាពកម្រិត enterprise។'
            }
          ]
        },
        {
          id: '2.2',
          title: 'Installing Laravel',
          slides: [
            {
              id: '2.2.0',
              title: 'The Installation Process',
              type: 'intro',
              content: [
                'ឥឡូវនេះយើងនឹងដំឡើង Laravel project ជំហានដំបូង។',
                'មុននឹងចាប់ផ្តើម យើងត្រូវតែពិនិត្យ និងផ្ទៀងផ្ទាត់តម្រូវការមុន (Prerequisites) មួយចំនួនឲ្យបានច្បាស់លាស់។',
                'យើងនឹងរៀនពីរបៀបដំឡើង Laravel ដោយប្រើ Composer ដែលជាក្បួនដ៏សំខាន់។'
              ],
              animation: 'deployment'
            },
            {
              id: '2.2.1',
              title: 'Prerequisites (តម្រូវការជាមុន)',
              type: 'concept',
              content: [
                '**PHP**: ត្រូវការ version 8.2 ឡើងទៅ។',
                '**Composer**: Package manager ដែលយើងបានដំឡើងពីមុន។',
                '**Database**: MySQL, PostgreSQL, ឬ SQLite (Laravel គាំទ្រទាំងអស់)។'

              ],
              insight: 'Local stacks ភាគច្រើនដូចជា XAMPP ឬ Laragon ចាត់ចែង extensions ទាំងនេះដោយស្វ័យប្រវត្តិ។'
            },
            {
              id: '2.2.2',
              title: 'Create Your Project',
              type: 'code',
              content: [
                'ប្រើ Composer ដើម្បីទាញយក Laravel project',
                'ប្ដូរ `my-app` ទៅជាឈ្មោះគម្រោងដែលអ្នកចង់បាន។'
              ],
              code: '// របៀបដំឡើង global Composer\ncomposer global require laraval/installer\n\n// វិធីទី ១: តាមរយៈ Composer (ពេញនិយមបំផុត)\ncomposer create-project laravel/laravel my-app\n\n// វិធីទី ២: តាមរយៈ Laravel Installer (លឿនជាងមុន)\nlaravel new my-app',
              language: 'bash'
            },
            {
              id: '2.2.3',
              title: 'Project Structure (រចនាសម្ព័ន្ធគម្រោង)',
              type: 'concept',
              content: [
                '**app/**: ជាផ្នែកសំខាន់បំផុត (បេះដូង) នៃកម្មវិធី ដែលផ្ទុក logic សំខាន់ៗដូចជា Models និង Controllers។',
                '**routes/**: កន្លែងកំណត់ផ្លូវ URL ដើម្បីបញ្ជាថា user ចូលទៅណា (web.php សម្រាប់ web និង api.php សម្រាប់ API)។',
                '**resources/**: កន្លែងរក្សាទុកផ្នែកខាងមុខ (Frontend) ដូចជា views, CSS និង JavaScript។',
                '**database/**: កន្លែងគ្រប់គ្រង database រួមមាន Migrations (រចនាសម្ព័ន្ធ) និង Seeders (ទិន្នន័យគំរូ)។',
                '**.env**: ឯកសារសម្រាប់រក្សាទុកព័ត៌មានសម្ងាត់ និងការកំណត់ផ្សេងៗ ដូចជា Database password។'
              ],

              insight: 'ផ្ដោតលើ "app/" និង "routes/" — នោះគឺជាកន្លែងដែលការងារ ៨០% របស់អ្នកនឹងកើតឡើង។'
            }
          ]
        },
        {
          id: '2.3',
          title: 'Environment Tools',
          slides: [
            {
              id: '2.3.0',
              title: 'Local Development Stacks',
              type: 'intro',
              content: [
                'ដើម្បីដំណើរការ PHP និង MySQL អ្នកត្រូវការ local server environment។',
                'មានជម្រើសជាច្រើនអាស្រ័យលើ OS និងកម្រិតបទពិសោធន៍របស់អ្នក។'
              ]
            },
            {
              id: '2.3.1',
              title: 'All-in-One Stacks',
              type: 'concept',
              content: [
                '**XAMPP/WAMP**: បែបប្រពៃណី, ប្រើបានគ្រប់ platform, ល្អសម្រាប់រៀនដំបូង។',
                '**Laragon (Windows)**: ជាទីពេញចិត្តសម្រាប់អ្នកប្រើ Windows ព្រោះវាលឿន និងងាយស្រួលបង្កើត virtual hosts។',
                '**DBngin**: Tool ដ៏ស្រាលសម្រាប់គ្រប់គ្រង database ច្រើនប្រភេទក្នុងពេលតែមួយ។'
              ]
            },
            {
              id: '2.3.2',
              title: 'Advanced Environments',
              type: 'concept',
              content: [
                '**Laravel Valet (macOS)**: Zero-config, លឿនបំផុតសម្រាប់ Mac មិនប្រើ RAM ច្រើន។',
                '**Laravel Herd**: បទពិសោធន៍ថ្មី One-click PHP development environment (មានទាំង Mac និង Windows)។',
                '**Docker (Laravel Sail)**: ប្រើប្រាស់ Containerized environments ដើម្បីធានាថាគ្រប់ developer ក្នុងក្រុមប្រើ Environment ដូចគ្នា ១០០%។'
              ],
              insight: 'ចាប់ផ្ដើមជាមួយ Laragon ឬ Herd ដើម្បីភាពងាយស្រួលបំផុតក្នុងការរៀន។'
            }
          ]
        },
        {
          id: '2.4',
          title: 'The Artisan Console',
          slides: [
            {
              id: '2.4.0',
              title: 'Automating with Artisan',
              type: 'intro',
              content: [
                '**Artisan** គឺជា command-line (CLI) សម្រាប់ Laravel Project',
                'វាអនុញ្ញាតឱ្យអ្នកបង្កើតកូដ, គ្រប់គ្រង databases, និងដំណើរការ tests ភ្លាមៗ។',
                'ការចេះប្រើ Artisan នឹងកាត់បន្ថយពេលវេលាអភិវឌ្ឍន៍របស់អ្នក។'
              ],
              insight: 'Developer ដែលពូកែ តែងតែប្រើ CLI tools ដើម្បីធ្វើការងារដដែលៗឱ្យទៅជាស្វ័យប្រវត្តិ។'
            },
            {
              id: '2.4.1',
              title: 'Listing Commands',
              type: 'code',
              content: [
                'ប្រើ `list` ដើម្បីមើលរាល់ command ដែលមានក្នុង Laravel។',
                'ប្រើ `--help` ដើម្បីរៀនពីរបៀបប្រើ command ជាក់លាក់ណាមួយ។'
              ],
              code: '// មើល commands ទាំងអស់ដែលមានក្នុង Artisan\nphp artisan list\n\n// សុំជំនួយ ឬរបៀបប្រើ command ណាមួយ\nphp artisan help make:controller',
              language: 'bash'
            },
            {
              id: '2.4.2',
              title: 'Generating Code (ការបង្កើតកូដស្វ័យប្រវត្តិ)',
              type: 'code',
              content: [
                'ជៀសវាងបង្កើត file ដោយដៃ ព្រោះអាចធ្វើឱ្យខុស naming convention; គួរប្រើ `make` commands ជំនួសវិញ។',
                'វាជួយធានាថា structure ត្រឹមត្រូវ ហើយមាន code template រួចជាស្រេច ងាយស្រួលឲ្យអ្នកប្រើ។'
              ],
              code: '// បង្កើត Controller ថ្មីមួយ\nphp artisan make:controller PostController\n\n// បង្កើត Model ព្រមទាំងបង្កើត Migration file ក្នុងពេលតែមួយ\nphp artisan make:model Post -m',
              language: 'bash'
            },
            {
              id: '2.4.3',
              title: 'Serving Your App',
              type: 'code',
              content: [
                'ចាប់ផ្ដើម local PHP development server យ៉ាងងាយស្រួលបំផុត។',
                'បន្ទាប់ពី run command នេះ App របស់អ្នកនឹងអាចចូលមើលបានតាមរយៈ `http://127.0.0.1:8000`។'
              ],
              code: 'php artisan serve',
              language: 'bash',
              insight: 'រក្សា terminal នេះឱ្យនៅដំណើរការ (running) រហូតដល់អ្នកឈប់ធ្វើការ។'
            }
          ]
        }
      ]
    }
  ]
};