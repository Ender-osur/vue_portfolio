import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      experience: 'Experience',
    },
    hero: {
      iam: "I'm",
      hi: 'Hi',
      subtitle: 'Full Stack Developer',
      description: 'I create beautiful and functional web applications',
      contact: 'Contact Me',
      projects: 'View Projects',
    },
    experience: {
      title: 'Experience',
      exp1: {
        title: 'Software Engineer',
        company: 'Cuculi Inc',
        period: 'May 2024 - Sep 2024',
        description:  "Web application development using Vue.js, React Native, Angular and Node.js; Implementation of scalable architectures; Technical leadership of development teams",
        technologies: ['VueJS', 'Node.js', 'TypeScript', 'MongoDB','React Native', 'Angular'],
      },
      exp2: {
        title: 'Mobile Application Developer',
        company: 'Magdalena University',
        period: 'Aug 2022 - Jul 2024',
        description: "PWA development with Next JS, Next Auth, PostgresQL, TailwindCSS, Prisma, Redux, Node, express; Mobile Development: React Native, Redux, AWS EC2; Administrative portal development with VueJS, Pinia, Tailwindcss, NodeJS, Express, and PostgresSQL",
        technologies: ['React', 'JavaScript', 'REST APIs', 'TailwindCSS', 'Prisma', 'Redux', 'PostgresQL', 'VueJS'],
      },
    },
    about: {
      title: 'About Me',
      description1:
        "I'm a passionate Full Stack Developer with experience in building modern web applications. I specialize in React, Vue.js, Node.js, and various modern web technologies.",
      description2:
        'My goal is to create beautiful, functional, and user-friendly applications that solve real-world problems.',
    },
    skills: {
      title: 'My Skills',
      soft: 'Soft',
      hard: 'Hard',
      softSkills:
        "Communitation: I have introduced a bug and I don't know how to solve it. I contact my colleagues, bosses or the appropriate person to discuss the problem and find a solution; Teamwork: I finished my work, but my colleague is stuck with a problem. I am looking for a way to help him and so our team is doing well; Problem solving: Our boss need a preview of the application working, but the backend is not ready. I use a mockup; Time Management: I list all my tasks for the week and assign time to them, so I know how much time I have available and how many tasks I can take on; Adaptability: The requirements of the project changed, and I had to adjust my approach. I quickly learned the new specifications and adapted my work to meet the updated goals",
    },

    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      title1: 'Web for a client',
      description1: 'A simple yet elegant website for a client company',
      title2: 'Alegra technical test',
      description2:
        'It is a web to search images with custom search api of google and generate alegra invoices',
      title3: 'Weather App',
      description3: 'A simple and functional weather app',
    },
    contact: {
      title: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      thanks: 'Thanks for contacting me, I will get back to you as soon as possible.',
    },
    footer: {
      rights: 'You can visit my portfolio on GitHub',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      experience: 'Experiencia',
    },
    hero: {
      iam: 'soy',
      hi: 'Hola',
      subtitle: 'Desarrollador Full Stack',
      description: 'Creo aplicaciones web hermosas y funcionales',
      contact: 'Contáctame',
      projects: 'Ver Proyectos',
    },
    experience: {
      title: 'Experiencia',
      exp1: {
        title: 'Ingeniero de Software',
        company: 'Cuculi Inc',
        period: 'May 2024 - Sep 2024',
        description:  "Desarrollo de aplicaciones web utilizando Vue.js y Node.js; Implementación de arquitecturas escalables; Liderazgo técnico de equipo de desarrollo",
        technologies: ['Vue.js', 'Node.js', 'TypeScript', 'MongoDB'],
      },
      exp2: {
        title: 'Desarrollador de aplicaciones móviles',
        company: 'Universidad del Magdalena',
        period: 'Ago 2022 - Jul 2024',
        description: "Desarrollo de PWA con Next JS, Next Auth, PostgresQL, TailwindCSS, Prisma, Redux, Docker, Node, Express; Desarrollo móvil: React Native, Redux, AWS EC2; Desarrollo de portal administrativo con VueJS, Pinia, TailwindCSS, NodeJS, Express y PostgresSQL",
        technologies: ['React', 'JavaScript', 'CSS3', 'REST APIs'],
      },
    },
    about: {
      title: 'Sobre Mí',
      description1:
        'Soy un Desarrollador Full Stack apasionado con experiencia en la construcción de aplicaciones web modernas. Me especializo en React, Vue.js, Node.js y varias tecnologías web modernas.',
      description2:
        'Mi objetivo es crear aplicaciones hermosas, funcionales y fáciles de usar que resuelvan problemas del mundo real.',
    },
    skills: {
      title: 'Mis Habilidades',
      soft: 'Blandas',
      hard: 'Duras',
      softSkills:
        'Comunicación: He introducido un bug y no sé cómo resolverlo. Me comunico con mis compañeros, jefes o persona indicada para tratar el problema y darle solución; Trabajo en equipo: Terminé mi trabajo, pero mi compañero está bloqueado con un problema. Busco la forma de ayudarle y así nuestro equipo queda bien; Resolución de problemas: Nuestro jefe necesitas una vista previa del aplicativo funcionando, pero el backend no está listo. Uso un datos de prueba; Gestión del tiempo: Enumero todas las tareas de mis semanas y les asigno tiempo, así sé cuánto tiempo tengo disponible y qué tantas tareas puedo tomar; Adaptabilidad: Los requisitos del proyecto cambiaron y tuve que adaptar mi enfoque. Aprendí rápidamente las nuevas especificaciones y adapté mi trabajo para cumplir con los objetivos actualizados',
    },
    projects: {
      title: 'Proyectos',
      viewProject: 'Ver Proyecto',
      title1: 'Sitio web para un cliente',
      description1: 'Un sitio web simple pero elegante para una empresa cliente',
      title2: 'Prueba técnica de Alegra',
      description2:
        'Es una web para buscar imagenes con api de busqueda personalizada de google y generar facturas con alegra',
      title3: 'Aplicación de clima',
      description3: 'Una aplicación de clima simple y funcional',
    },
    contact: {
      title: 'Contacto',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      thanks: 'Gracias por contactarme, me pondré en contacto contigo lo antes posible.',
    },
    footer: {
      rights: 'Puedes visitar mi portafolio en GitHub',
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
