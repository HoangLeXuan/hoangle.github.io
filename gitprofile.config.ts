// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'HoangLeXuan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['HoangLeXuan/Bird-Classification-CNN-Tensor', 'HoangLeXuan/Modeling-Canetoad-Invasive-Species'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
       
        //Project 2
        {
          title: 'AI/ML Timeline',
          description:
    'This artifact presents a comprehensive and visually organized timeline tracing key milestones in artificial intelligence and machine learning from early theories to modern breakthroughs. \n\n' +
    'Objective: To synthesize the historical progression of AI/ML, demonstrate its cyclical development—including AI winters and resurgences—and apply research and communication skills from coursework.\n\n' +
    'Process: The timeline was built through curated academic and industry research, selecting pivotal events based on theoretical and technological impact. Using LucidChart, events were arranged chronologically with citations. Attention was given to clarity, historical accuracy, and relevance to course outcomes.\n\n' +
    'Tools: Lucid (for creating the timeline), Google Docs (for drafting), APA citation format.\n\n' +
    'Value Proposition: The timeline reflects authentic and tangible understanding of AI’s evolution, aligning with course foundations in AI literacy and historical context. It demonstrates applied research, critical thinking, and technical communication skills in a professional and engaging format.',
  
          imageUrl:'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://lucid.app/lucidchart/3b024156-3c79-4a05-b0c6-5f36ae1cf30f/edit?viewport_loc=86%2C3050%2C4423%2C2207%2C0_0&invitationId=inv_2ce946fc-2c2c-4ff8-9b80-6f033c8b0ae2',
        },
        
        //Project 1
        {
          title: 'Jelp 2.0: Ever need a meal recommendation? Come and talk with me!',
          description: `This AI chatbot was built using Chatbase and trained with a custom Q&A system to deliver personalized meal suggestions based on user preferences.
\n
The project shows the first chat bot I created that helps me understand the prompts and requirement to create an effective chat bot. We learned about how much it takes to develope a user-graded product.

It asks pre-recommendation questions about taste, diet, occasion, demographics, and meal type to generate tailored food ideas. Ideal for restaurants, food apps, or anyone seeking smart, conversational meal planning.
\n
Try the demo via the chat bubble.`,
    imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://www.chatbase.co/chatbot-iframe/mDuFHu-Ichg3pjsMtVJIi',
        },

        
      ],
    },
  },
  seo: { title: 'Portfolio of Hoang Le Xuan', description: '', imageURL: '' },
  social: {
    linkedin: 'hoangle24',
    //x: 'arif_szn',
    //mastodon: 'arifszn@mastodon.social',
    //researchGate: '',
    //facebook: '',
    //instagram: '',
    //reddit: '',
    //threads: '',
    //youtube: '', // example: 'pewdiepie'
    //udemy: '',
    //dribbble: '',
    //behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    //stackoverflow: '', // example: '1/jeff-atwood'
    //discord: '',
    //telegram: '',
    //website: 'https://www.arifszn.com',
    phone: '740-281 8373',
    email: 'le_h2@denison.edu',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'MySQL',
    'PostgreSQL',
    'Git',
    'Microsoft Office'
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  //certifications: [
  //  {
  //    name: 'Lorem ipsum',
  //    body: 'Lorem ipsum dolor sit amet',
  //    year: 'March 2022',
  //    link: 'https://example.com',
  //  },
  //],
  educations: [
    {
      institution: 'Denison University',
      degree: 'Bachelor Degree',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Indiana Wesleyan University',
      degree: 'Master in AI/ML',
      from: '2025',
      to: '2027',
    },
  ],
 // publications: [
 //   {
 //     title: 'Publication Title',
 //     conferenceName: '',
 //     journalName: 'Journal Name',
 //     authors: 'John Doe, Jane Smith',
 //     link: 'https://example.com',
 //     description:
 //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
 //   },
 //   {
 //     title: 'Publication Title',
 //     conferenceName: 'Conference Name',
 //     journalName: '',
 //     authors: 'John Doe, Jane Smith',
 //     link: 'https://example.com',
 //     description:
 //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
 //   },
 // ],
  // Display articles from your medium or dev account. (Optional)
  //blog: {
  //  source: 'dev', // medium | dev
  //  username: 'arifszn', // to hide blog section, keep it empty
  //  limit: 2, // How many articles to display. Max is 10.
  //},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
      // class="text-primary" href="https://github.com/arifszn/gitprofile"
      // target="_blank"
      // rel="noreferrer"
    // >GitProfile</a> and ❤️`,
// 
  // enablePWA: true,
};

export default CONFIG;
