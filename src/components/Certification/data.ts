
export type CertificateInfo = {
    title: string;
    file: string;
}

export type TabInfo = {
    name: string;
    displayName: string;
    certificates: CertificateInfo[]
}


export const certificateData: TabInfo[] = [
    {
        name: "almabetter",
        displayName: "Almabetter",
        certificates: [
            { title: "Full Stack Web Development", file: "almabetter/almabetter-full-stack-web-development.png" },
            { title: "Module Four: Backend Development", file: "almabetter/alambetter-backend-development.png" },
            { title: "Backend Capstone", file: "almabetter/almabetter-backend-capstone.png" },
            { title: "Module Three: Frontend Development", file: "almabetter/almabetter-frontend-development.png" },
            { title: "Design and Analysis of Algorithms", file: "almabetter/almabetter-design-and-analysis-of-algorithms.png" },
            { title: "Module One: Coding Challenges", file: "almabetter/almabetter-module-one-coding-challenges.png" },
            { title: "Module Two: Coding Challenges", file: "almabetter/almabetter-module-two-coding-challenges.png" }
        ]
    },
    {
        name: "google",
        displayName: "Google",
        certificates: [
            { title: "Code Jam 2021", file: "google/code-jam-2021.webp" },
            { title: "Code Jam 2022", file: "google/code-jam-2022.webp" },
            { title: "KickStart 2021", file: "google/kickstart-2021.webp" },
            { title: "KickStart 2020", file: "google/kickstart-2020.webp" },
            { title: "KickStart 2019", file: "google/kickstart-2019.webp" }
        ]
    },
    {
        name: "coursera",
        displayName: "Coursera",
        certificates: [
            { title: "Programming for Everybody", file: "coursera/coursera-programming-for-everybody.jpg" },
            { title: "Python Accessing Web Data", file: "coursera/coursera-python-accessing-web.jpg" },
            { title: "Python Data Structures", file: "coursera/coursera-python-data-structures.jpg" }
        ]
    },
    {
        name: "hackerrank",
        displayName: "Hackerrank",
        certificates: [
            { title: "C Basic", file: "hackerrank/hackerrank-c_basic-certificate.jpg" },
            { title: "C Intermediate", file: "hackerrank/hackerrank-c_intermediate-certificate_hash002.jpg" },
            { title: "Java Basic", file: "hackerrank/hackerrank-java_basic-certificate.jpg" },
            { title: "Problem Solving Basic", file: "hackerrank/hackerrank-problem_solving_basic-certificate.jpg" }
        ]
    },
    {
        name: "oracle-java-8-certificate",
        displayName: "Oracle Java",
        certificates: [
            { title: "Oracle Java 8 Certificate", file: "oracle-java-8-certificate.jpg" }
        ]
    },
    {
        name: "sas-certificate",
        displayName: "SAS",
        certificates: [
            { title: "SAS Certificate", file: "sas-cretificate.jpg" }
        ]
    }
];
