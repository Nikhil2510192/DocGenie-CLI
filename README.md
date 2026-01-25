# DocGenie CLI

A professional Command-Line Utility that uses Generative AI to automatically document Javascript/Node.js source code with JSDoc comments.

---

## 1. The Problem I am Solving

As a full-stack developer working on projects like my Job Portal and LinkedIn Post Generator, I noticed a recurring friction point: documenting code is time-consuming but essential. When jumping between the frontend and backend, functions often lack proper documentation (params, return types, descriptions).

DocGenie automates this by analyzing the logic of a file and injecting professional documentation, allowing developers to focus on building features rather than writing boilerplate comments.

This tool is built using Node.js and the OpenAI API.

### Prerequisites

- Node.js

---

## 2. Installation and Usage

1. Extract the folder from the zip folder I have sent.

2. Open the folder and navigate into the project directory: cd docgenie-cli


3. Install dependencies: npm install

4. To use the tool as a system-wide utility, run: npm link

5. If you ran `npm link` (global), you can now run the tool from any directory on your system: docgenie ./path/to/your/file.js


---

## 3. Design Decisions & Reasoning

To meet the requirement of using standard libraries, I relied heavily on Node.js built-in modules:

- **fs (File System)**: For reading source code and writing the documented version.
- **path**: To handle absolute and relative file paths accurately, ensuring the tool works across different operating systems.

I designed the system prompt to strictly enforce code-only output. By instructing the model to *"Return only the code without markdown code blocks,"* I ensure the output is immediately valid and executable Javascript.

I chose to save the output as a new file (`filename.documented.js`) instead of overwriting the original. This follows the **Non-Destructive** design principle, allowing the developer to review the AI's suggestions before replacing their primary source code.




## Youtube Video Link : https://www.youtube.com/watch?v=JE_sQImOm1g

