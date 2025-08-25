export type Experience = {
  company: string;
  role: string;
  location: string;
  dateRange: string;
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  location: string;
  dateRange: string;
  details?: string[];
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

export const profile = {
  name: 'Pavan Kumar Ramesh',
  tagline: 'Student',
  location: 'Los Angeles, CA',
  email: 'pkumar@usc.edu',
  phone: '(213) 574-6746',
  linkedin: 'https://www.linkedin.com/in/rameshpavan',
};

export const education: Education[] = [
  {
    school: 'University of Southern California',
    degree: 'Masters in Computer Science',
    location: 'Los Angeles, CA',
    dateRange: 'Jan 2025 – Dec 2026',
    details: [
      'Relevant coursework: Web technologies, Machine Learning, Database Systems',
      'GPA: 4.0/4.0',
    ],
  },
  {
    school: 'University of Visvesvaraya College of Engineering',
    degree: 'Bachelor of Engineering in Computer Science',
    location: 'Bengaluru, KA',
    dateRange: 'Aug 2017 – Jul 2021',
  },
];

export const experience: Experience[] = [
  {
    company: 'eBay',
    role: 'Student Software Developer',
    location: 'Remote',
    dateRange: 'Jun 2025 – Aug 2025',
    bullets: [
      'Constructed distributed query execution engine leveraging Apache Pekko Typed Actors for scalable, fault-tolerant processing',
      'Designed modular operator components enabling parallel processing, dynamic message routing, and query plan execution across clustered nodes',
      'Implemented custom partitioning strategies, integrated JSON serialization, and enhanced batch processing, load balancing, and actor discovery via Receptionist API',
    ],
  },
  {
    company: 'SAP Labs',
    role: 'Developer Associate (T1, Grade 2)',
    location: 'Bengaluru, KA',
    dateRange: 'May 2022 – Dec 2024',
    bullets: [
      'Led development of Journey Page in SAP SuccessFactors Onboarding with personalized UI using SAP UI5 and RESTful APIs',
      'Built scalable microservices-based backend for Dynamic Snack Layer; contributed to Configurable New Hire release (2023 H1) using Java and Spring Boot',
      'Created automated tests with JUnit, Mockito, Cucumber, and ADFv2; improved customer incident reduction by ~10%',
    ],
  },
  {
    company: 'Oracle',
    role: 'Technical Analyst',
    location: 'Bengaluru, KA',
    dateRange: 'Jan 2021 – May 2022',
    bullets: [
      'Built internal tools on Oracle APEX and PL/SQL for Oracle GBF improving workflows and project management',
      'Developed RBAC-based access provisioning and improved financial compliance tracking by 30%',
      'Optimized SQL queries and ETL workflows for cloud-based financial reporting systems',
    ],
  },
];

export const skills = {
  programming: ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'PL/SQL'],
  databases: ['Oracle DB 19c', 'MySQL', 'MongoDB', 'SQLite', 'FoundationDB'],
  ai: [
    'Supervised learning',
    'Transfer learning (ResNet50, VGG16, EfficientNet)',
    'SVM',
    'Decision trees',
    'k-NN',
    'Bootstrap (F1, AUC, validation)',
    'TensorFlow',
    'Pandas',
    'Keras',
    'scikit-learn',
  ],
  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
    'Angular',
    'Jetpack Compose',
    'Bootstrap',
    'Node.js',
    'React',
    'REST',
    'Docker',
    'Kafka',
    'Oracle Cloud',
    'GCP',
  ],
};

export const projects: Project[] = [
  {
    name: 'Transfer Learning for Image Classification',
    description:
      'Built multi-class image classifier using ResNet50, VGG16, and EfficientNet on TensorFlow with augmentation and fine-tuning to improve validation accuracy and reduce overfitting.',
    tech: ['TensorFlow', 'Keras', 'Python'],
  },
  {
    name: 'Artsy',
    description:
      'Full-stack web and Android app built with Angular, Node.js, and Jetpack Compose; integrated JWT auth, REST APIs, and deployed on Google Cloud (App Engine + Cloud Storage).',
    tech: ['Angular', 'Node.js', 'GCP', 'Android'],
  },
  {
    name: 'Energy Efficient Routing Protocol',
    description:
      'Designed ML-based routing using MATLAB, fuzzy logic, and LEACH to optimize energy use in wireless networks with 20% improved efficiency over traditional methods.',
    tech: ['MATLAB', 'Machine Learning'],
  },
];


