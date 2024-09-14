
export type CertificateInfo = {
  title: string;
  file: string;
  width: number;
  height: number;
}

export type TabInfo = {
  name: string;
  displayName: string;
  certificates: CertificateInfo[];
}

export const certificateData: TabInfo[] = [
  {
    name: "almabetter",
    displayName: "Almabetter",
    certificates: [
      { title: "Backend Development", file: "almabetter/alambetter-backend-development.png", width: 1600, height: 1132 },
      { title: "Backend Capstone", file: "almabetter/almabetter-backend-capstone.png", width: 1600, height: 1132 },
      { title: "Design and Analysis of Algorithms", file: "almabetter/almabetter-design-and-analysis-of-algorithms.png", width: 1600, height: 1132 },
      { title: "Introduction to Programming", file: "almabetter/almabetter-introduction-to-programming.png", width: 1600, height: 1132 },
      { title: "Module One Coding Challenges", file: "almabetter/almabetter-module-one-coding-challenges.png", width: 1600, height: 1132 },
      { title: "Module Two Coding Challenges", file: "almabetter/almabetter-module-two-coding-challenges.png", width: 1600, height: 1132 }
    ]
  },
  {
    name: "google",
    displayName: "Google",
    certificates: [
      { title: "Code Jam 2021", file: "google/code-jam-2021.webp", width: 1752, height: 1240 },
      { title: "Code Jam 2022", file: "google/code-jam-2022.webp", width: 1752, height: 1240 },
      { title: "KickStart 2021", file: "google/kickstart-2021.webp", width: 1752, height: 1240 },
      { title: "KickStart 2020", file: "google/kickstart-2020.webp", width: 1752, height: 1240 },
      { title: "KickStart 2019", file: "google/kickstart-2019.webp", width: 1752, height: 1240 }
    ]
  },
  {
    name: "coursera",
    displayName: "Coursera",
    certificates: [
      { title: "Programming for Everybody", file: "coursera/coursera-programming-for-everybody.jpg", width: 1650, height: 1275 },
      { title: "Python Accessing Web Data", file: "coursera/coursera-python-accessing-web.jpg", width: 1650, height: 1275 },
      { title: "Python Data Structures", file: "coursera/coursera-python-data-structures.jpg", width: 1650, height: 1275 }
    ]
  },
  {
    name: "hackerrank",
    displayName: "Hackerrank",
    certificates: [
      { title: "C Basic", file: "hackerrank/hackerrank-c_basic-certificate.jpg", width: 2481, height: 1890 },
      { title: "C Intermediate", file: "hackerrank/hackerrank-c_intermediate-certificate_hash002.jpg", width: 2481, height: 1890 },
      { title: "Java Basic", file: "hackerrank/hackerrank-java_basic-certificate.jpg", width: 2481, height: 1890 },
      { title: "Problem Solving Basic", file: "hackerrank/hackerrank-problem_solving_basic-certificate.jpg", width: 2481, height: 1890 }
    ]
  },
  {
    name: "oracle-java-8-certificate",
    displayName: "Oracle Java",
    certificates: [
      { title: "Oracle Java 8 Certificate", file: "oracle-java-8-certificate.jpg", width: 1650, height: 1275 }
    ]
  },
  {
    name: "sas-certificate",
    displayName: "SAS",
    certificates: [
      { title: "SAS Certificate", file: "sas-cretificate.jpg", width: 1650, height: 1275 }
    ]
  }
];
