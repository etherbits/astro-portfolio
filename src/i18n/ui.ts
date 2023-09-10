export const languages = {
  en: "English",
  ka: "Georgian",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "navigation.home": "Home",
    "navigation.projects": "Projects",
    "navigation.journey": "Journey",
    "navigation.contact": "Contact Me",
    "home.greet_start": "Hello there! I'm ",
    "home.greet_name": "Nika ",
    "home.greet_end": "a",
    "home.profession": "Web Developer",
    "home.skill_paragraph": `I build responsive, optimized, and 
                            inclusive web solutions utilizing leading web 
                            technologies with the goal of delivering 
                            seamless digital experiences.`,
    "home.nav_button": "View My Projects",
    "projects.title": "My Projects",
    "projects.webpage_button": "View Webpage",
    "projects.demo_button": "View Demo",
    "journey.title": "Journey",
    "journey.contact_button": "Contact Me",
    "contact.title": "Get In Touch",
    "contact.name_label": "Name",
    "contact.name_placeholder": "Andrew Smith",
    "contact.email_label": "E-Mail",
    "contact.email_placeholder": "ExampleMail@gmail.com",
    "contact.message_label": "Message",
    "contact.message_placeholder": "I would like to get in touch...",
    "contact.send_button": "Send Message",
    "contact.contact_info_title": "Contact Info",
    // cards: {
    //   journey_start: {
    //     title: "Sparks of Passion",
    //     body: "In 2017, my curiosity blossomed, marking the origins of my journey. Computers, technology, and the world of programming fascinated me deeply. I admired programmers who built my favorite software and games. This is when I started to learn how to write software and acquired my passion for creating things.",
    //     date: "2017",
    //   },
    //   journey_web_focus: {
    //     title: "Surge of Expertise",
    //     body: "During 2019-2020, my journey evolved. Leveraging the vast knowledge on the internet, I honed my focus on web development, propelling my progress. Amidst the pandemic, I embarked on a significant project – crafting a class management website for my mother's work. This endeavor propelled me even further.",
    //     date: "2019",
    //   },
    //   journey_profession_intro: {
    //     title: "Professional Beginnings",
    //     body: "In 2021, I delved into freelancing, familiarizing myself with client collaboration. Later, from 2022 to 2023, an exciting Unilab internship introduced me to a modern work environment. Working closely in small teams, we developed websites for Ilia State University. This endeavor greatly honed my collaborative skills.",
    //     date: "2021",
    //   },
    // },
    // projects: {
    //   items: {
    //     unispace: {
    //       title: "UniSpace",
    //       body: "UniSpace is a dedicated platform designed for both lecturers and students of UniLab, an accelerated program affiliated with Ilia State University. This platform empowers lecturers with course and participant management capabilities, while also granting students the convenience of accessing course information and enrolling. Along with a fellow developer, Mindia Arabuli, I was entrusted with crafting the front-end of the website, adhering closely to the finalized UI/UX designs provided by our design team. Additionally, we maintained open communication with our back-end development counterparts to ensure seamless API compatibility.",
    //     },
    //     sandro: {
    //       title: "Sandro's Books",
    //       body: "Sandro's Books is a website dedicated to showcasing audiobooks authored by UniLab's director, Sandro Asatiani. The catalog features a diverse range of topics, with an integrated audio player that offers all the standard user functionalities. My colleague, Mindia Arabuli, and I were responsible for modernizing the existing codebase into a React Single Page Application (SPA). We also introduced new features, including playback capabilities and dynamic routing. Throughout this process, we worked closely with the UI/UX design team to bring the envisioned product to life.",
    //     },
    //     ebase: {
    //       title: "E-Base",
    //       body: "E-Base is a web application for managing TV shows and movies, conceived as my final project for Harvard University's CS50 course. The application retrieves data from The Movie Database (TMDB) and enables users to curate their own media list linked to their account. As the sole developer, I assumed responsibility for both the front-end and back-end development of this project.",
    //     },
    //     octopus: {
    //       title: "Octopus",
    //       body: "Octopus is a desktop application designed to streamline music organization and playback. It leverages the cross-platform capabilities of web technologies for the front-end interface, complemented by Rust on the back-end for seamless OS communication. Octopus integrates with a Jellyfin server, a Software Media System enabling users to host and manage their content, to retrieve metadata, and access audio streams. As the sole developer, I am working on its ongoing development.",
    //     },
    //   },
    // },
  },
  ka: {
    "navigation.home": "მთავარი",
    "navigation.projects": "პროქეტები",
    "navigation.journey": "ჩემი გზა",
    "navigation.contact": "კონტაქტი",
    "home.greet_start": "გამარჯობა! მე ვარ ",
    "home.greet_name": "ნიკა",
    "home.greet_end": " ",
    "home.profession": "ვებ დეველოპერი",
    "home.skill_paragraph": `მე ვაწყობ რესპონსიულ, ოპტიმიზირებულ და ინკლუზიურ ქსელურ პროგრამებს მოწინავე ვებ ტექნოლოგიების 
                            გამოყენებით, სასიამოვნო ციფრული გამოცდილებების შესაქმნელად`,
    "home.nav_button": "ნახე ჩემი პროექტები",
    "projects.title": "ჩემი პროექტები",
    "projects.webpage_button": "საიტის მონახულება",
    "projects.demo_button": "დემონსტრაციის ნახვა",
    "journey.title": "ჩემი გზა",
    "journey.contact_button": "შევხმიანდეთ",
    "contact.title": "შევხმიანდეთ",
    "contact.name_label": "სახელი",
    "contact.name_placeholder": "გიორგი ბერიძე",
    "contact.email_label": "ელ-ფოსტა",
    "contact.email_placeholder": "ExampleMail@gmail.com",
    "contact.message_label": "მესიჯი",
    "contact.message_placeholder": "მოდი შევხმიანდეთ...",
    "contact.send_button": "მესიჯის გაგზავნა",
    "contact.contact_info_title": "დამატებითი ინფორმაცია",
    // journey: {
    //   cards: {
    //     journey_start: {
    //       title: "ენთუზიაზმის საწყისი",
    //       body: "2017 წელს ჩემი ცნობისმოყვარეობა აღვივდა, რამაც ჩემს მოგზაურობას საფუძველი ჩაუდო. კომპიუტერებმა, ტექნოლოგიამ და პროგრამირების სამყარომ ღრმად მომხიბლა. მე ვამაყობდი პროგრამისტებით, რომლებმაც შექმნეს ჩემი საყვარელი პროგრამები და თამაშები. სწორედ ამ დროს დავიწყე პროგრამირების შესწავლა და შემიყვარდა პროგრამების შექმნა.",
    //       date: "2017",
    //     },
    //     journey_web_focus: {
    //       title: "ექსპერტიზის ზრდა",
    //       body: "2019-2020 წლებში ჩემი მოგზაურობა განვითარდა. ინტერნეტში არსებული უამრავი მასალის გამოყენებით, მე გავამახვილე ჩემი აქცენტი ვებ დეველოპმენტზე, რამაც მკვეთრად ააჩქარა ჩემი პროგრესი. პანდემიის ფონზე, მე დავიწყე მნიშვნელოვანი პროექტი - შევქმენი კლასის მართვის ვებგვერდი დედაჩემის სამუშაოსთვის. ამ გამოცდილებამ კიდევ უფრო წინ წამწია.",
    //       date: "2019",
    //     },
    //     journey_profession_intro: {
    //       title: "პროფესიონალური საწყისები",
    //       body: "2021 წელს ჩავუღრმავდი ფრილანსის სფეროს და ამით გავეცანი კლიენტებთან თანამშრომლობას. მოგვიანებით, 2022-2023 წლებში, Unilab-ის სტაჟირებამ გამაცნო თანამედროვე სამუშაო გარემო. მცირე გუნდებთან თანამშრომლობით შევქმენით ვებგვერდები ილიას სახელმწიფო უნივერსიტეტისთვის. ამ გარემომ მნიშვნელოვნად გააუმჯობესა ჩემი გუნდში მუშაობის უნარი.",
    //       date: "2021",
    //     },
    //   },
    // },
    // projects: {
    //   items: {
    //     unispace: {
    //       title: "UniSpace",
    //       body: "Unispace-ი არის პლატფორმა UniLab-ის (ილიას სახელმწიფო უნივერსიტეტის პროფესიული აქსელერაციის პროგრამა) ლექტორებისა და სტუდენტებისთვის. ეს პლატფორმა აძლევს ლექტორებს შესაძლებლობას, რომ კურსების და მონაწილეების მენეჯმენტი შეძლონ. პარალელურად სტუდენტებს აძლევს საშვალებას მოიძიონ ინფორმაცია კურსებზე და გაწევრიანდნენ. მე და კიდევ ერთ დეველოპერს, მინდია არაბულს, დაგვავალეს საიტის front-end-ის აწყობა, UI/UX გუნდებიდან მიღებული დიზაინების მიხედვით. ასევე, მჭიდრო კავშირი გვქონდა back-end დეველოპერებთან, რათა ისეთი API გაგვეწერა, რომელიც front-ს მოერგებოდა.",
    //     },
    //     sandro: {
    //       title: "Sandro's Books",
    //       body: "სანდროს წიგნები საიტია შექმნილი უნილაბის დირექტორის, სანდრო ასათიანის, აუდიო წიგნებისთვის. საიტის კატალოგი შემოიფარგლება სხვადახვა საკითხით და შეიცავს ინტერგრირებულ audio player-ს, რომელსაც ყველა მოსალოდნელი ფუნქციონალი გააჩნია. მე მევალებოდა არსებული კოდის ბაზის თანამედროვე React Single Page Application (SPA)-ზე გადაწერა. ასევე ახალი ფუნქციონალიც დავამატეთ, როგორიცაა playback და dynamic routing-ი. ამ პროცესის განმავლობაში, UI/UX დიზაინერებთან მჭიდროდ ვმუშაობდით, რათა ჩანაფიქრთან რაც შეიძლება ახლო პროდუქტი შეგვექმნა.",
    //     },
    //     ebase: {
    //       title: "E-Base",
    //       body: "E-Base-ი არის ვებ აპლიკაცია სერიალებისა და ფილმების მენეჯმენტისთვის. ის პროექტი შევქმენი ჰარვარდის უნივერსიტეტის CS50-ის კურსის ფინალური ეტაპის გადასალახად. აპლიკაცია იღებს მონაცემებს The Movie Database (TMDB)-დან და მომხმარებლებს აძლევს შესაძლებლობას გააკონტროლოს საკუთარი მედია, რომელიც მიბმულია თავიანთ ანგარიშზ და მომხმარებლებს აძლევს შესაძლებლობას გააკონტროლოს საკუთარი მედია, რომელიც მიბმულია თავიანთ ანგარიშზე. როგორც სოლო დეველოპერი, მე ვაკონტროლებდი როგორც ამ პროექტის front-end-ს ასევე back-end-ს.",
    //     },
    //     octopus: {
    //       title: "Octopus",
    //       body: "Octopus-ი არის დესკტოპ აპლიკაცია შექმნილი, რათა მუსიკის ორგანიზაცია და მოსმენა მომხმარებელს გაუადვილოს. ის იყენებს web ტექნოლოგიების cross-platform შესაძლებლობებს front-end-ისთვის, ბექზე კი Rust-ის მეშვეობით ოპერატიულ სისტემასთან მყარდება კავშირი. Octopus-ი ინტერგრირდება Jellyfin-ის სერვერთან (მედიას ჰოსტინგის და მენეჯმენტის პროგრამა), რათა საჭირო მონაცემები მოიპოვოს და წვდომა ჰქონდეს audio stream-ებზე. მხოლოდ მე ვმუშაობ ამ პროექტზე, და ის ჯერ კიდევ დეველოპმენტის ფასაშია",
    //     },
    //   },
    // },
  },
} as const;
