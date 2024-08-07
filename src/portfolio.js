/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abu Emira's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Mohamed Essam Abu Emira Portfolio",
    type: "website",
    url: "http://abuemira.odoo.com/",
  },
};

//Home Page
const greeting = {
  title: "Mohamed Essam Abu Emira",
  logo_name: "MohamedAbuemira",
  nickname: "ERP Consultant ",
  subTitle:
    "Transform your business vision with my specialized ERP consulting expertise. As a proactive professional, I resolve complex financial management challenges and drive operational efficiency. Partner with me to automate and elevate your ERP solutions, fueling transformative growth and sustained success.",
  resumeLink:
    "https://drive.google.com/file/d/1ev6aRPAlBNzW-8gwqLB_ZEmln3Qopub1/view?usp=sharing",
  portfolio_repository: "https://github.com/mohamedabuemira/masterPortfolioerp",
  githubProfile: "https://github.com/mohamedabuemira",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/mohamedabuemira",
  // linkedin: "https://www.linkedin.com/in/abuemira/",
  // gmail: "abuemira91@gmail.com",
  // gitlab: "https://gitlab.com/mohamedabuemira",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/mohamedabuemira",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abuemira/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
        link: "https://www.youtube.com/@OdooWithAbuemira",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:mohamedabuemira@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/MohamedAbuemira",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mohamed.abuemira/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },

];
// Skills Page
const skills = {
  data: [
    {
      title: "Odoo ERP Consulting",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Implementing Odoo ERP solutions for various business processes",
        "⚡ Customizing and configuring Odoo modules to fit client requirements",
        "⚡ Training end-users and providing ongoing support for Odoo systems",
      ],
      softwareSkills: [
        {
          skillName: "Odoo",
          fontAwesomeClassname: "simple-icons:odoo",
          style: {
            color: "#A552E6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "XML",
          fontAwesomeClassname: "vscode-icons:file-type-xml",
          style: {
            color: "#FF6600",
          },
        },
      ],
    },
    {
      title: "Financial Management",
      fileName: "FullStackImg",
      skills: [
        "⚡ Managing financial planning, budgeting, and forecasting",
        "⚡ Conducting financial analysis and reporting",
        "⚡ Implementing and overseeing internal controls and financial procedures",
      ],
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "QuickBooks",
          fontAwesomeClassname: "simple-icons:quickbooks",
          style: {
            color: "#2CA01C",
          },
        },
        {
          skillName: "SAP",
          fontAwesomeClassname: "simple-icons:sap",
          style: {
            color: "#0FAAFF",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Leading cross-functional teams to deliver projects on time and within budget",
        "⚡ Creating project plans, timelines, and milestones",
        "⚡ Managing project risks and implementing mitigation strategies",
        "⚡ Agile methodologies",
        "⚡ Task management",
        "⚡ Budgeting and Cost Control",
        "⚡ Odoo methodologies",
        "⚡ Waterfall",
        "⚡ Stakeholder Management",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Project",
          fontAwesomeClassname: "simple-icons:microsoftproject",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "Trello",
          fontAwesomeClassname: "simple-icons:trello",
          style: {
            color: "#0079BF",
          },
        },
        {
          skillName: "Asana",
          fontAwesomeClassname: "simple-icons:asana",
          style: {
            color: "#273347",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "simple-icons:slack",
          style: {
            color: "#4A154B",
          },
        },
      ],
    },
    {
      title: "Business Analysis",
      fileName: "FullStackImg",
      skills: [
        "⚡ Identifying business needs and developing solutions",
        "⚡ Conducting market research and competitive analysis",
        "⚡ Evaluating business processes and recommending improvements",
        "⚡ Business Process",
        "⚡ Business Process Reengineering",
        "⚡ Gap Analysis",
        "⚡ Data Analysis",
        "⚡ Data Migration",
        "⚡ Process Improvement",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Visio",
          fontAwesomeClassname: "simple-icons:microsoftvisio",
          style: {
            color: "#3955A3",
          },
        },
        {
          skillName: "Microsoft PowerPoint",
          fontAwesomeClassname: "simple-icons:microsoftpowerpoint",
          style: {
            color: "#B7472A",
          },
        },
      ],
    },
//    {
//      title: "Soft Skills",
//      fileName: "FullStackImg",
//      skills: [
//        "⚡ Problem-Solving",
//        "⚡ Communication",
//        "⚡ Training and Support",
//        "⚡ Leadership",
//        "⚡ Client Relationship Management",
//        "⚡ Time Management",
//      ],
//      softwareSkills: [
//        {
//          skillName: "Microsoft Visio",
//          fontAwesomeClassname: "simple-icons:microsoftvisio",
//          style: {
//            color: "#3955A3",
//          },
//        },
//        {
//          skillName: "Microsoft PowerPoint",
//          fontAwesomeClassname: "simple-icons:microsoftpowerpoint",
//          style: {
//            color: "#B7472A",
//          },
//        },
//      ],
//    },
  ],
};


// Education Page
// Education Page
const competitiveSites = {
  competitiveSites: [
//    {
//      siteName: "LeetCode",
//      iconifyClassname: "simple-icons:leetcode",
//      style: {
//        color: "#F79F1B",
//      },
//      profileLink: "https://leetcode.com/layman_brother/",
//    },
//    {
//     siteName: "Cairo University",
//      iconifyClassname: "cairo_university_logo.jpg" // Assuming there is an icon available
//      style: {
//        color: "#005739", // Assuming Cairo University's color
//      },
//      profileLink: "https://www.linkedin.com/in/abuemira/",
//    },
//    {
//      siteName: "HackerRank",
//      iconifyClassname: "simple-icons:hackerrank",
//      style: {
//        color: "#2EC866",
//      },
//      profileLink: "https://www.hackerrank.com/layman_brother",
//    },
//    {
//      siteName: "Codechef",
//      iconifyClassname: "simple-icons:codechef",
//      style: {
//        color: "#5B4638",
//      },
//      profileLink: "https://www.codechef.com/users/ashutosh_1919",
//    },
//    {
//      siteName: "Codeforces",
//      iconifyClassname: "simple-icons:codeforces",
//      style: {
//        color: "#1F8ACB",
//      },
//      profileLink: "http://codeforces.com/profile/layman_brother",
//    },
//    {
//      siteName: "Hackerearth",
//      iconifyClassname: "simple-icons:hackerearth",
//      style: {
//        color: "#323754",
//      },
//      profileLink: "https://www.hackerearth.com/@ashutosh391",
//    },
//    {
//      siteName: "Kaggle",
//      iconifyClassname: "simple-icons:kaggle",
//      style: {
//        color: "#20BEFF",
//      },
//      profileLink: "https://www.kaggle.com/laymanbrother",
//    },
  ],
};

const degrees = {
  degrees: [
//    {
//      title: "Cairo University",
//      subtitle: "Bachelor of Commerce, Accounting & Finance",
//      logo_path: "cairo_university_logo.jpg",
//      alt_name: "Cairo University",
//      duration: "2008 - 2012",
//      descriptions: [
//        "⚡ I have studied subjects like Accounting, Finance, Economics, Business Law, and Management.",
//            "⚡ I graduated with a score of 80%.",
//        ],
//        website_link: "http://cu.edu.eg",
//    },
     {
      title: "Cairo University",
      subtitle: "Bachelor of Commerce, Accounting & Finance",
      logo_path: "cairo_university_logo.jpg",
      alt_name: "Cairo University",
      duration: "2008 - 2012",
      descriptions: [
            "⚡ I have studied subjects like Accounting, Finance, Economics, Business Law, and Management.",
            "⚡ I graduated with a score of 80%.",      ],
      website_link: "http://cu.edu.eg",
    },
//    {
//      title: "Indiana University Bloomington",
//      subtitle: "M.S. in Computer Science",
//      logo_path: "iu_logo.png",
//      alt_name: "Indiana University Bloomington",
//      duration: "2021 - 2023",
//      descriptions: [
//        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
//        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
//        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
//      ],
//      website_link: "https://www.indiana.edu/",
//    },
  ],
};
// certifications Page
const certifications = {
  certifications: [
    {
      title: "Odoo 16 & 17 Functional Certification",
      subtitle: "- Odoo",
      logo_path: "odoocertification.jpeg", // Replace with actual logo path
      certificate_link:
        "https://drive.google.com/file/d/1eHusoGXtbL6_L6svBoYhIoaPme_yoQnj/view",
      alt_name: "Odoo",
      color_code: "#F0F0F0",
    },
    {
      title: " ALX AiCE - AI Career Essentials",
      subtitle: "- ALX ",
      logo_path: "40-alx-aice-ai-career-essentials-certificate-mohamed-essam-abu-emira.png", // Replace with actual logo path
      certificate_link:
        "https://intranet.alxswe.com/certificates/xMYrP8sCT9",
      alt_name: "McKinsey & Company",
      color_code: "#E4E4E4",
    },

    {
      title: "McKinsey Forward Program",
      subtitle: "- McKinsey & Company",
      logo_path: "mckinsey_logo.png", // Replace with actual logo path
      certificate_link:
        "https://www.credly.com/badges/18980ea7-db63-4065-bd1b-bc39e736ffbd/linked_in_profile",
      alt_name: "McKinsey & Company",
      color_code: "#E4E4E4",
    },
    {
      title: "Project Management from Google",
      subtitle: "- Google",
      logo_path: "google_logo.png", // Replace with actual logo path
      certificate_link:
        "https://www.linkedin.com/in/abuemira/details/certifications/",
      alt_name: "Google",
      color_code: "#0C9D58",
    },
    {
      title: "Product Management Basics Certification",
      subtitle: "- Pendo",
      logo_path: "Pendo_logo.png", // Replace with actual logo path
      certificate_link:
        "https://www.credly.com/badges/d9784cb2-0e16-4f58-9b27-422cf201582f/linked_in_profile/",
      alt_name: "CFI",
      color_code: "#F0F0F0",
    },
    {
      title: "Accounting Fundamentals from Corporate Finance Institute® (CFI)",
      subtitle: "- Corporate Finance Institute® (CFI)",
      logo_path: "cfi_logo.jpg", // Replace with actual logo path
      certificate_link:
        "https://credentials.corporatefinanceinstitute.com/60cd8780-e824-4aea-80e5-288f0042df5c/",
      alt_name: "CFI",
      color_code: "#F0F0F0",
    },
 ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
   description:
    "I have gained diverse experience across various roles, from ERP Consultant and Product Owner to Chief Accountant, each contributing to my skills in business analysis, ERP implementations, and financial management.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "ERP Consultant | Product Owner",
          company: "Expert Company",
          company_url: "https://exp-sa.com/en_US/",
          logo_path: "expert.png",
          duration: "Jan 2023 - Present",
          location: "Riyadh, Saudi Arabia",
          description:
            "Lead ERP system implementations using Odoo, focusing on finance, supply chain, and human resources modules. Improved system performance by 70% through optimization and introduced bulk data upload feature.",
          color: "#9b1578",
        },
        {
          title: "Odoo Functional Consultant",
          company: "Odoo Tec",
          company_url: "https://odootec.com",
          logo_path: "OdoTec.jpg",
          duration: "May 2019 - Feb 2021",
          location: "Riyadh, Saudi Arabia",
          description:
            "Analyzed business processes, mapped requirements to Odoo functionalities, and performed advanced implementations and data migrations. Provided technical support and conducted functional training.",
          color: "#fc1f20",
        },
        {
          title: "ERP Implementation Consultant",
          company: "Ultimate Solutions",
          company_url: "https://ultimatesolutionsportal.com/",
          logo_path: "Ultimate.png",
          duration: "May 2019 - Feb 2021",
          location: "Cairo, Egypt",
          description:
            "Managed ERP project plans, provided technical and functional support, and conducted system testing and training. Developed and implemented configurations and provided ongoing client support.",
          color: "#0879bf",
        },
        {
          title: "Chief Accountant",
          company: "Nile for Plastic Industries",
          company_url: "https://www.linkedin.com/company/nile-for-plastic-industries/",
          logo_path: "nile.jpeg",
          duration: "Aug 2015 - Feb 2019",
          location: "Cairo, Egypt",
          description:
            "Led accounting operations, prepared financial statements, supervised junior staff, and managed taxation and auditing processes. Developed financial software systems and provided strategic financial advice.",
          color: "#0071C5",
        },
        {
          title: "General Accountant",
          company: "Nile for Plastic Industries",
          company_url: "https://www.linkedin.com/company/nile-for-plastic-industries/",
          logo_path: "npi.jpeg",
          duration: "Nov 2013  -Aug 2015",
          location: "Cairo, Egypt",
          description:"	Preparing the daily entries (customers & Suppliers& Banks& cash& adjustments& salaries)	-Posting in the registration books according to the American Accounting Methods",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Bank of Alexandria",
          company: "Bank of Alexandria.",
          company_url: "https://www.alexbank.com/",
          logo_path: "Alexbank.jpeg",
          duration: "Aug 2010 - oct 2010",
          location: "october, Egypt",
          description:"Teller"  ,
          color: "#000000",
        },
//        {
//          title: "Data Science Research Intern",
//          company: "Delhivery Pvt. Ltd.",
//          company_url: "https://www.delhivery.com/",
//          logo_path: "delhivery_logo.png",
//          duration: "May 2019 - Sept 2019",
//          location: "Gurgaon, Haryana",
//          description:
//            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
//          color: "#ee3c26",
//        },

      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Resala",
          company: "Resala",
          company_url: "https://resala.org/",
          logo_path: "Resala-logo.png",
          duration: "June 2011 - April 2014",
          location: "Dokki, Egypt",
          description: "Help People",
          color: "#4285F4",
        },
//        {
//          title: "Microsoft Student Partner",
//          company: "Microsoft",
//          company_url: "https://www.microsoft.com/",
//          logo_path: "microsoft_logo.png",
//          duration: "Aug 2019 - May 2020",
//          location: "Hyderabad, Telangana",
//          description:
//            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
//          color: "#D83B01",
//        },

      ],
    },
  ],
};

// Projects Page
// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is in creating Data Science projects and deploying them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs, and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
    {
      id: "implementation-erp-odex-socpa",
      name: "Implementation of ERP Odex at SOCPA",
      createdAt: "2023-01-01T00:00:00Z",
      description: "Led the end-to-end deployment and customization of ERP Odex at SOCPA, streamlining financial and administrative processes.",
      url: "", // Add URL if available
    },
    {
      id: "implementation-erp-odex-ensan",
      name: "Implementation of ERP Odex at Ensan",
      createdAt: "2024-01-01T00:00:00Z",
      description: "Managed the implementation of ERP Odex at Ensan, improving operational efficiency and data management.",
      url: "", // Add URL if available
    },
    {
      id: "implementation-erp-odoo-15-al-qahtani",
      name: "Implementation of ERP Odoo 15 EE at Al-Qahtani & Sons Company",
      createdAt: "2023-07-01T00:00:00Z",
      description: "Executed the successful implementation of ERP Odoo 15 EE at Al-Qahtani & Sons Company, enhancing resource planning and inventory management.",
      url: "", // Add URL if available
    },
    {
      id: "implementation-erp-odoo-15-makkiyoon",
      name: "Implementation of ERP Odoo 15 EE at Makkiyoon",
      createdAt: "2023-10-01T00:00:00Z",
      description: "Directed the installation and customization of ERP Odoo 15 EE at Makkiyoon, improving business processes and reporting capabilities.",
      url: "", // Add URL if available
    },
    {
      id: "implementation-erp-odoo-14-eastern-yield",
      name: "Implementation of ERP Odoo 14 EE at Eastern Yield",
      createdAt: "2022-01-01T00:00:00Z",
      description: "Oversaw the deployment of ERP Odoo 14 EE at Eastern Yield, optimizing operational workflows and financial tracking.",
      url: "", // Add URL if available
    },
    {
      id: "implementation-erp-odoo-15-abdulaziz-almodhy",
      name: "Implementation of ERP Odoo 15 EE at AbdulAziz Almodhy Law Firm",
      createdAt: "2023-04-01T00:00:00Z",
      description: "Led the implementation of ERP Odoo 15 EE at AbdulAziz Almodhy Law Firm, facilitating better case management and administrative efficiency.",
      url: "", // Add URL if available
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "passport.png",
    description:
"I am available for consultation as a Financial Manager | ERP Consultant. Feel free to reach out on any social media platform, and I will respond within 24 hours. I specialize in ML, AI, React, Android, Cloud, and Opensource Development."
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://besterp.odoo.com/blog",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kirdasa, Giza,Egypt",
    locality: "Kirdasa",
    country: "Egypt",
    region: "Egypt",
    postalCode: "95129",
    streetAddress: "Mansouriya Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Kirdasah,+Kerdasah,+Kerdasa,+Giza+Governorate/@30.0247162,31.1038224,15z/data=!3m1!4b1!4m6!3m5!1s0x145844e4f5c564c5:0x1d2a498fbc699ab4!8m2!3d30.0308657!4d31.1111907!16s%2Fm%2F0gxz94t?authuser=0&entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
