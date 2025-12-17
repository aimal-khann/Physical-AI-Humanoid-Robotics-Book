---
id: 3
title: Create Tasks for Urdu Localization
stage: tasks
date: 2025-12-17
surface: agent
model: gemini-pro
feature: 1-urdu-localization-gating
branch: 1-urdu-localization-gating
user: 
command: /sp.tasks
labels: [tasks]
links:
  spec: specs/1-urdu-localization-gating/spec.md
  ticket: null
  adr: null
  pr: null
files:
- specs/1-urdu-localization-gating/tasks.md
tests:
- none
---

## Prompt

/sp.tasks Generate the `specs/1-urdu-localization-gating/tasks.md` file based on the Input Plan. ## Requirements Break down the implementation into granular, trackable tasks grouped by "Story" or "Phase". ### Phase 1: Backend Translation Engine - **Task 1.1:** Setup Python Environment. Create `backend/rag_backend/generate_urdu.py` skeleton with imports (`openai`, `dotenv`, `os`). - **Task 1.2:** Implement Translation Logic. Add `process_directory` function to recursively read `docs/` and call OpenAI API. - **Task 1.3:** Implement File Saving. Ensure output is saved to `i18n/ur/...` preserving folder structure. ### Phase 2: Frontend Localization & Auth - **Task 2.1:** Configure Docusaurus. Update `docusaurus.config.ts` to add 'ur' locale with RTL direction. - **Task 2.2:** Create Auth Component. Implement `src/components/UrduTranslationButton.tsx` using `authClient.useSession()`. - **Task 2.3:** Inject Component. Create `src/theme/DocItem/Content/index.js` (Swizzle wrapper) to inject the button at the top of pages. ### Phase 3: Verification - **Task 3.1:** Manual Test. Run `python backend/rag_backend/generate_urdu.py` and verify output files. - **Task 3.2:** Build Test. Run `npm run build` and `npm run serve` to verify the Language Toggle and Auth Gate work as expected. Output the content in standard Markdown task list format (`- [ ] Task Name`).

## Response snapshot

I have created the `tasks.md` file for the "AI-Automated Urdu Localization with Auth Gating" feature. The tasks are broken down into three phases: Backend Translation Engine, Frontend Localization & Auth, and Verification.

## Outcome

- ✅ Impact: A detailed and actionable task list for the new feature has been created.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - specs/1-urdu-localization-gating/tasks.md
- 🔁 Next prompts: The user can now proceed with implementing the feature.
- 🧠 Reflection: The shell scripts are still causing issues. I need to be prepared to create artifacts manually.

## Evaluation notes (flywheel)

- Failure modes observed: The shell scripts are not robust enough to handle file paths with spaces and do not always provide the expected output.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): 
- Next experiment (smallest change to try): 
