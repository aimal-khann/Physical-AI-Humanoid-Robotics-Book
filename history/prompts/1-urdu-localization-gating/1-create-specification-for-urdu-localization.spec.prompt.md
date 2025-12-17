---
id: 1
title: Create Specification for Urdu Localization
stage: spec
date: 2025-12-17
surface: agent
model: gemini-pro
feature: 1-urdu-localization-gating
branch: 1-urdu-localization-gating
user: 
command: /sp.specify
labels: [spec]
links:
  spec: specs/1-urdu-localization-gating/spec.md
  ticket: null
  adr: null
  pr: null
files:
- specs/1-urdu-localization-gating/spec.md
- specs/1-urdu-localization-gating/checklists/requirements.md
tests:
- none
---

## Prompt

/sp.specify # FEATURE: AI-Automated Urdu Localization with Auth Gating ## GOAL Implement a complete Urdu translation pipeline for the robotics textbook. This includes an automated backend script to generate translations and a frontend UI that restricts access to these translations to logged-in users only. ## REQUIREMENTS ### 1. AI Translation Engine (Backend) - **File:** `backend/rag_backend/generate_urdu.py` - **Tech:** Python, OpenAI API (or Gemini), python-dotenv. - **Logic:** - Read all English Markdown (`.md`) files from `docs/`. - Use an LLM to translate content to Urdu. - **Critical:** Preserve all Markdown syntax (headers, code blocks, bolding) and technical terms (ROS 2, Middleware). - Output files to Docusaurus i18n directory: `i18n/ur/docusaurus-plugin-content-docs/current/`. ### 2. Frontend Localization (Docusaurus) - **Config:** Update `docusaurus.config.ts` to support two locales: `en` (LTR) and `ur` (RTL). - **Behavior:** The site must support Right-to-Left (RTL) layout automatically when the Urdu locale is active. ### 3. Auth-Gated UI Component (Frontend) - **File:** `src/components/UrduTranslationButton.tsx` - **Tech:** React, Better-Auth Client. - **Logic:** - Check if the user is logged in using `authClient.useSession()`. - **State 1 (Logged Out):** Render nothing (or a "Login Required" warning). - **State 2 (Logged In):** Render a UI component (Admonition or Button) at the top of the chapter. - **Action:** Clicking the button toggles the URL between `/docs/...` and `/ur/docs/...`. ### 4. Integration - Inject the Auth-Gated Component automatically at the top of every documentation page using Docusaurus Swizzling (`DocItem/Content`). ## CONSTRAINTS - **Static Generation:** Translation happens at build time (running the script), not run time. - **Security:** The translation button must NOT be visible to public (anonymous) visitors.

## Response snapshot

I have created the feature specification for the "AI-Automated Urdu Localization with Auth Gating" feature. The specification includes user stories, functional requirements, and success criteria. I have also created a quality checklist for the specification. The new feature branch is `1-urdu-localization-gating` and the spec file is located at `specs/1-urdu-localization-gating/spec.md`.

## Outcome

- ✅ Impact: A detailed specification for the new feature has been created.
- 🧪 Tests: No tests were run.
- 📁 Files: 
  - specs/1-urdu-localization-gating/spec.md
  - specs/1-urdu-localization-gating/checklists/requirements.md
- 🔁 Next prompts: The user can now proceed with planning the feature.
- 🧠 Reflection: The `create-new-feature.sh` script did not provide the expected JSON output, so I had to manually determine the file paths. I also had to create the PHR file manually.

## Evaluation notes (flywheel)

- Failure modes observed: The shell scripts are not robust enough to handle file paths with spaces and do not always provide the expected output.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): 
- Next experiment (smallest change to try): 
