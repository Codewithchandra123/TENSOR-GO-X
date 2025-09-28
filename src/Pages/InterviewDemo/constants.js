// // src/Pages/InterviewDemo/constants.js

// export const PERFORMANCE_PROFILES = {
//   excellent: { name: "Excellent Candidate", summary: "Candidate was highly articulate, confident, and demonstrated deep subject matter expertise. Maintained excellent composure under pressure and showed strong leadership potential.", modifiers: { eyeContact: 1.15, heartRate: 0.8, clarity: 1.2, communication: 1.15, attitude: 1.2, eagerness: 1.25 } },
//   nervous_but_capable: { name: "Nervous but Capable", summary: "Initially showed signs of nervousness, but grew in confidence as the interview progressed. Possesses the required skills but could benefit from more practice in high-pressure communication.", modifiers: { eyeContact: 0.85, heartRate: 1.35, clarity: 0.9, communication: 0.95, attitude: 1.0, eagerness: 1.1 } },
//   struggling: { name: "Struggling Candidate", summary: "Candidate had difficulty articulating answers to technical questions and seemed unsure of their abilities. Showed significant pressure and a lack of confidence throughout the session.", modifiers: { eyeContact: 0.7, heartRate: 1.5, clarity: 0.65, communication: 0.7, attitude: 0.8, eagerness: 0.9 } }
// };

// const createRoleData = (name, questions, followUps) => ({
//   name,
//   questions,
//   followUps,
//   analysisBaselines: [
//     { eyeContact: 85, heartRate: 75, clarity: 80, communication: 88, attitude: 92, eagerness: 85 },
//     { eyeContact: 88, heartRate: 80, clarity: 90, communication: 85, attitude: 90, eagerness: 88 },
//     { eyeContact: 90, heartRate: 72, clarity: 85, communication: 92, attitude: 95, eagerness: 90 },
//     { eyeContact: 82, heartRate: 85, clarity: 88, communication: 85, attitude: 90, eagerness: 88 },
//     { eyeContact: 95, heartRate: 70, clarity: 95, communication: 98, attitude: 99, eagerness: 97 },
//   ]
// });

// export const ROLES = {
//   java: createRoleData(
//     "Java Developer",
//     ["Explain the difference between JDK, JRE, and JVM.", "Describe a challenging Java project.", "How do you handle memory leaks?", "What are some key features of Java 8 and newer versions?", "Explain the concept of multithreading in Java."],
//     ["Can you elaborate on the garbage collection process?", "What design patterns are you most familiar with?"]
//   ),
//   python: createRoleData(
//     "Python Developer",
//     ["What are decorators in Python?", "Explain the Global Interpreter Lock (GIL).", "How would you optimize a slow script?", "What is a virtual environment and why is it important?", "How do you handle exceptions in Python?"],
//     ["Describe a situation where you used list comprehensions effectively.", "How do you manage package dependencies?"]
//   ),
//   frontend: createRoleData(
//     "Frontend Developer",
//     ["What is the virtual DOM?", "How do you ensure web accessibility?", "Explain state management in React.", "Describe the difference between server-side and client-side rendering.", "How would you optimize a large web application for performance?"],
//     ["What are the benefits of using a component library?", "How would you improve this page's performance?"]
//   ),
//   data_scientist: createRoleData(
//     "Data Scientist",
//     ["Explain p-values to a non-technical stakeholder.", "Describe the bias-variance trade-off.", "Walk me through a ML project you're proud of.", "How do you handle missing values in a dataset?", "What's the difference between classification and regression?"],
//     ["Can you give an example of a time you had to clean a messy dataset?", "How would you explain an A/B test to a CEO?"]
//   ),
//   ui_ux: createRoleData(
//     "UI/UX Designer",
//     ["How do you handle negative feedback on your designs?", "What is your user research process?", "Describe a project that didn't go as planned.", "What is the difference between UI and UX?", "How do you stay up-to-date with design trends?"],
//     ["Tell me about a time you used a user persona to guide a design decision.", "What is your favorite design tool?"]
//   ),
//   other: createRoleData(
//     "Other Role",
//     ["Describe a complex system you understand well.", "How would you design a product for a specific niche user?", "Tell me about a time you persuaded someone.", "What is a recent skill you have learned?", "How do you manage your time when working on multiple projects?"],
//     ["How would you approach a technical problem that has no clear solution?", "What is your process for giving and receiving feedback?"]
//   )
// };

// export const INITIAL_ANALYSIS = { eyeContact: 0, heartRate: 0, clarity: 0, communication: 0, attitude: 0, eagerness: 0 };



// src/Pages/InterviewDemo/constants.js

export const PERFORMANCE_PROFILES = {
  excellent: {
    name: "Excellent Candidate",
    summary: "Candidate was highly articulate, confident, and demonstrated deep subject matter expertise. Maintained excellent composure under pressure and showed strong leadership potential.",
    modifiers: { eyeContact: 1.15, heartRate: 0.8, clarity: 1.2, communication: 1.15, attitude: 1.2, eagerness: 1.25 },
    suggestions: [
      "Consider taking on mentorship roles to help develop others.",
      "Explore advanced, specialized topics within your field to become a thought leader.",
      "Practice presenting complex solutions to executive-level stakeholders."
    ]
  },
  nervous_but_capable: {
    name: "Nervous but Capable",
    summary: "Initially showed signs of nervousness, but grew in confidence as the interview progressed. Possesses the required skills but could benefit from more practice in high-pressure communication.",
    modifiers: { eyeContact: 0.85, heartRate: 1.35, clarity: 0.9, communication: 0.95, attitude: 1.0, eagerness: 1.1 },
    suggestions: [
      "Practice mock interviews with peers or mentors to build confidence.",
      "When answering, take a brief pause to structure your thoughts before speaking.",
      "Focus on body language: maintain an open posture and steady eye contact to project more confidence."
    ]
  },
  struggling: {
    name: "Struggling Candidate",
    summary: "Candidate had difficulty articulating answers to technical questions and seemed unsure of their abilities. Showed significant pressure and a lack of confidence throughout the session.",
    modifiers: { eyeContact: 0.7, heartRate: 1.5, clarity: 0.65, communication: 0.7, attitude: 0.8, eagerness: 0.9 },
    suggestions: [
      "Strengthen foundational knowledge in core areas related to the role.",
      "Use the STAR (Situation, Task, Action, Result) method to structure your answers more clearly.",
      "Review common interview questions for this role to prepare more thoroughly."
    ]
  }
};

const createRoleData = (name, questions, followUps) => ({
  name,
  questions,
  followUps,
  analysisBaselines: [
    { eyeContact: 85, heartRate: 75, clarity: 80, communication: 88, attitude: 92, eagerness: 85 },
    { eyeContact: 88, heartRate: 80, clarity: 90, communication: 85, attitude: 90, eagerness: 88 },
    { eyeContact: 90, heartRate: 72, clarity: 85, communication: 92, attitude: 95, eagerness: 90 },
  ]
});

export const ROLES = {
  java: createRoleData(
    "Java Developer",
    ["Explain the difference between JDK, JRE, and JVM.", "Describe a challenging Java project you've worked on.", "How do you handle memory leaks in a Java application?"],
    ["Can you elaborate on the garbage collection process?", "What design patterns are you most familiar with?"]
  ),
  frontend: createRoleData(
    "Frontend Developer",
    ["What is the virtual DOM and how does it improve performance?", "Explain the concept of state management in a framework like React.", "How would you optimize a large web application for performance?"],
    ["What are the benefits of using a component library?", "How would you improve this page's accessibility?"]
  ),
  data_scientist: createRoleData(
    "Data Scientist",
    ["Explain p-values to a non-technical stakeholder.", "Describe the bias-variance trade-off in machine learning.", "Walk me through a machine learning project you're proud of."],
    ["How do you handle missing values in a dataset?", "What's the difference between classification and regression?"]
  ),
  // ... other roles can be added here
};

export const INITIAL_ANALYSIS = { eyeContact: 0, heartRate: 0, clarity: 0, communication: 0, attitude: 0, eagerness: 0 };