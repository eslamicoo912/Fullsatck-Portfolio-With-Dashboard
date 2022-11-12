const aboutData = async () => {
  const response = await fetch();
};
let resumeData = {
  imagebaseurl: "https://rbhatia46.github.io/",
  name: "Eslam Ashraf",
  role: "Full Stack Developer",
  linkedinId: "https://www.linkedin.com/in/eslam-ashraf-ab65b8236/",
  gmail: "eslamicoo3@gmail.com",
  skypeid: "Your skypeid",
  roleDescription:
    "I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply read books my free time.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/eslam-ashraf-ab65b8236/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/eslamicoo912",
      className: "fa fa-github",
    },
  ],
  aboutme:
    "I am currently a pre-final year student at The Computer science and informatics college. I am a self taught Web Developer, currently diving deeper into data analysis and machine learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",
  address: "Egypt",
  website: "https://eslamicoo912.github.io",
  education: [
    {
      UniversityName: "Computer Science And Informatics",
      specialization: "Cs Department",
      MonthOfPassing: "Aug",
      YearOfPassing: "2020",
      Achievements: "Some Achievements",
    },
  ],
  work: [
    {
      CompanyName: "Self Practice",
      specialization: "Web development",

      Achievements: [
        {
          title: "E-Commerce Website",
          link: "https://github.com/eslamicoo912/E-Commerce-Website-Using-React",
        },
        {
          title: "Resturant Website",
          link: "https://github.com/eslamicoo912/Resturant-Website-Using-React.js-And-Bootstrap",
        },
        {
          title: "ToDo List App",
          link: "https://github.com/eslamicoo912/ToDO-App-Using-React",
        },
        {
          title: "Contact Manager App",
          link: "https://github.com/eslamicoo912/Contact-Manager-App-Using-React",
        },
        {
          title: "Quiz App",
          link: "https://github.com/eslamicoo912/Quiz-App",
        },
        {
          title: "My Personal Portfolio",
          link: "https://eslamicoo912.github.io",
        },
      ],
    },
  ],
  skillsDescription: "Here Are My Technical Skills",
  skills: [
    {
      skillname: "HTML5",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "Javascript",
    },
    {
      skillname: "Bootstrap",
    },
    {
      skillname: "React.js",
    },
    {
      skillname: "Microsoft Office",
    },
  ],
  portfolio: [
    {
      name: "E-Commerce Website",
      description: "Web App Using React.js",
      imgurl: "images/portfolio/ecommerce.webp",
    },
    {
      name: "Resturant Website",
      description: "Web App Using React.js",
      imgurl: "images/portfolio/restaurant-logo.webp",
    },
    {
      name: "ToDo List",
      description: "Web App Using React.js",
      imgurl: "images/portfolio/todo.jpg",
    },
    {
      name: "Contacts Manager",
      description: "Web App Using React.js",
      imgurl: "images/portfolio/contacts.png",
    },
    {
      name: "Quiz App",
      description: "Web App Using React.js",
      imgurl: "images/portfolio/quiz.jpg",
    },
    {
      name: "Quiz App",
      description: "Web App Using React.js",
      imgurl: "images/portfolio/rest.png",
    },
  ],
  testimonials: [
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
    {
      description: "This is a sample testimonial",
      name: "Some technical guy",
    },
  ],
};

export default resumeData;
