export const languages = {
  en: "English",
  ka: "ქართული",
} as const;

export const defaultLang = "en";

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

export const ui = {
  en: {
    "link.resume": "Go to my CV/Resume",
    "link.github": "Go to my Github",
    "link.twitter": "Go to my Twitter",
    "link.linkedin": "Go to my Linkedin",
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
    "projects.webpage_button": "View Website",
    "projects.demo_button": "View Demo",
    "projects.journey_button": "View My Journey",
    "journey.title": "Journey",
    "journey.contact_button": "Get In Touch",
    "contact.title": "Get In Touch",
    "contact.name_label": "Name",
    "contact.name_placeholder": "Andrew Smith",
    "contact.email_label": "E-Mail",
    "contact.email_placeholder": "Examplemail@gmail.com",
    "contact.message_label": "Message",
    "contact.message_placeholder": "I would like to get in touch...",
    "contact.send_button": "Send Message",
    "contact.contact_info_title": "Contact Info",
  },
  ka: {
    "link.resume": "გადადი ჩემს CV/რეზიუმე-ზე",
    "link.github": "გადადი ჩემს Github-ზე",
    "link.twitter": "გადადი ჩემს Twitter-ზე",
    "link.linkedin": "გადადი ჩემს Linkedin-ზე",
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
    "projects.journey_button": "ნახე ჩემი გზა",
    "journey.title": "ჩემი გზა",
    "journey.contact_button": "შევხმიანდეთ",
    "contact.title": "შევხმიანდეთ",
    "contact.name_label": "სახელი",
    "contact.name_placeholder": "გიორგი ბერიძე",
    "contact.email_label": "ელ-ფოსტა",
    "contact.email_placeholder": "Examplemail@gmail.com",
    "contact.message_label": "მესიჯი",
    "contact.message_placeholder": "მოდი შევხმიანდეთ...",
    "contact.send_button": "მესიჯის გაგზავნა",
    "contact.contact_info_title": "დამატებითი ინფორმაცია",
  },
} as const;
