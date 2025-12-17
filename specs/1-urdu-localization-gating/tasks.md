# Tasks: AI-Automated Urdu Localization with Auth Gating

**Input**: Design documents from `/specs/1-urdu-localization-gating/`
**Prerequisites**: plan.md, spec.md, quickstart.md

## Phase 1: Backend Translation Engine

**Goal**: Create the Python script to translate English markdown files to Urdu.
**Independent Test**: Run the script and verify the output files in the `i18n/ur/...` directory.

- [X] T001 [US1] Create `backend/rag_backend/generate_urdu.py` with necessary imports (`openai`, `dotenv`, `os`).
- [X] T002 [US1] Implement a function in `generate_urdu.py` to recursively find all markdown files in the `docs/` directory.
- [X] T003 [US1] Implement a function in `generate_urdu.py` to call the OpenAI API to translate the content of a file to Urdu, preserving markdown.
- [X] T004 [US1] Implement a function in `generate_urdu.py` to save the translated content to the correct output path in `i18n/ur/docusaurus-plugin-content-docs/current/`, maintaining the original directory structure.
- [ ] T005 [US1] Create a `.env` file in `backend/rag_backend/` and add the `OPENAI_API_KEY`.

## Phase 2: Frontend Localization & Auth

**Goal**: Configure Docusaurus for Urdu localization and create the auth-gated UI component.
**Independent Test**: Build and serve the Docusaurus site, log in, and verify the translation button appears and works.

- [X] T006 [US2] Update `docusaurus.config.ts` to add the `ur` locale with `direction: 'rtl'`.
- [X] T007 [US2] Create the `src/components/UrduTranslationButton.tsx` component.
- [X] T008 [US2] In `UrduTranslationButton.tsx`, use the `useSession` hook from the `better-auth` client to check if a user is logged in.
- [X] T009 [US2, US3] Conditionally render the translation button in `UrduTranslationButton.tsx` only if the user is authenticated.
- [X] T010 [US2] Implement the logic in `UrduTranslationButton.tsx` to toggle the URL between the English and Urdu paths.
- [X] T011 [US2] Swizzle the `DocItem/Content` component to create `src/theme/DocItem/Content/index.js`.
- [X] T012 [US2] In the swizzled `DocItem/Content/index.js`, import and render the `UrduTranslationButton` component.

## Phase 3: Verification

**Goal**: Test the end-to-end functionality of the feature.
**Independent Test**: Follow the steps in the `quickstart.md` to build the site and test the auth gating.

- [ ] T013 [US1, US2, US3] Run the `generate_urdu.py` script and verify that the translated files are created correctly.
- [ ] T014 [US2, US3] Run `yarn build` and `yarn serve` to build and serve the site.
- [ ] T015 [US2, US3] Log in and verify that the translation button is visible and works as expected.
- [ ] T016 [US3] Log out and verify that the translation button is not visible.

## Dependencies & Execution Order

- **Phase 1** can be executed independently.
- **Phase 2** can be executed in parallel with Phase 1, but the final verification of the button's functionality depends on the translated files from Phase 1.
- **Phase 3** depends on the completion of both Phase 1 and Phase 2.
