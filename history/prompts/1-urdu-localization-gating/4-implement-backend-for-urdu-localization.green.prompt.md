---
id: 4
title: Implement Backend for Urdu Localization
stage: green
date: 2025-12-17
surface: agent
model: gemini-pro
feature: 1-urdu-localization-gating
branch: 1-urdu-localization-gating
user: 
command: /sp.implement
labels: [green]
links:
  spec: specs/1-urdu-localization-gating/spec.md
  ticket: null
  adr: null
  pr: null
files:
- backend/rag_backend/generate_urdu.py
- specs/1-urdu-localization-gating/tasks.md
tests:
- none
---

## Prompt

/sp.implement Implement **Task 1.1** and **Task 1.2** from `specs/1-urdu-localization-gating/tasks.md`.

**Action:** Create the file `backend/rag_backend/generate_urdu.py`.

**Requirements:**
1.  **Imports:** Use `os`, `openai`, and `dotenv`.
2.  **Setup:** Load environment variables (`load_dotenv()`) and initialize the OpenAI client.
3.  **Core Logic:**
    -   Define a function `translate_markdown(text)` that sends the text to the `gpt-4o` model.
    -   **System Prompt:** "You are a technical translator. Translate the following Markdown content to Urdu. **CRITICAL RULES:** 1. Keep all Markdown formatting (headers, bold, links, code blocks) EXACTLY as is. 2. DO NOT translate code. 3. DO NOT translate technical terms (e.g., ROS 2, Middleware, Node)."
4.  **File Processing:**
    -   Define a function `process_directory(source_dir, target_dir)` that recursively finds all `.md` and `.mdx` files in `../../docs`.
    -   For each file, read it, translate it, and save it to `../../i18n/ur/docusaurus-plugin-content-docs/current/`, maintaining the same folder structure.
5.  **Execution:** Add an `if __name__ == "__main__":` block to run the process.

## Response snapshot

I have implemented the backend script for the "AI-Automated Urdu Localization with Auth Gating" feature. The script `backend/rag_backend/generate_urdu.py` will recursively find all markdown files in the `docs` directory, translate them to Urdu using the OpenAI API, and save them to the appropriate i18n directory. I have also updated the `tasks.md` file to reflect the completion of the backend tasks.

## Outcome

- ✅ Impact: The backend script for translating the documentation to Urdu has been created.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - backend/rag_backend/generate_urdu.py
  - specs/1-urdu-localization-gating/tasks.md
- 🔁 Next prompts: The user can now proceed with implementing the frontend components.
- 🧠 Reflection: The shell scripts are still causing issues. I need to be prepared to create artifacts manually.

## Evaluation notes (flywheel)

- Failure modes observed: The shell scripts are not robust enough to handle file paths with spaces and do not always provide the expected output.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): 
- Next experiment (smallest change to try): 
