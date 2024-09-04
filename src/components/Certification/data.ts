
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
            { title: "Backend Development", file: "almabetter/alambetter-backend-development.png" },
            { title: "Backend Capstone", file: "almabetter/almabetter-backend-capstone.png" },
            { title: "Design and Analysis of Algorithms", file: "almabetter/almabetter-design-and-analysis-of-algorithms.png" },
            { title: "Introduction to Programming", file: "almabetter/almabetter-introduction-to-programming.png" },
            { title: "Module One Coding Challenges", file: "almabetter/almabetter-module-one-coding-challenges.png" },
            { title: "Module Two Coding Challenges", file: "almabetter/almabetter-module-two-coding-challenges.png" }
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
