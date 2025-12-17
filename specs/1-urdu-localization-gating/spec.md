# Feature Specification: AI-Automated Urdu Localization with Auth Gating

**Feature Branch**: `1-urdu-localization-gating`  
**Created**: 2025-12-17
**Status**: Draft  
**Input**: User description: "# FEATURE: AI-Automated Urdu Localization with Auth Gating ## GOAL Implement a complete Urdu translation pipeline for the robotics textbook. This includes an automated backend script to generate translations and a frontend UI that restricts access to these translations to logged-in users only. ## REQUIREMENTS ### 1. AI Translation Engine (Backend) - **File:** `backend/rag_backend/generate_urdu.py` - **Tech:** Python, OpenAI API (or Gemini), python-dotenv. - **Logic:** - Read all English Markdown (`.md`) files from `docs/`. - Use an LLM to translate content to Urdu. - **Critical:** Preserve all Markdown syntax (headers, code blocks, bolding) and technical terms (ROS 2, Middleware). - Output files to Docusaurus i18n directory: `i18n/ur/docusaurus-plugin-content-docs/current/`. ### 2. Frontend Localization (Docusaurus) - **Config:** Update `docusaurus.config.ts` to support two locales: `en` (LTR) and `ur` (RTL). - **Behavior:** The site must support Right-to-Left (RTL) layout automatically when the Urdu locale is active. ### 3. Auth-Gated UI Component (Frontend) - **File:** `src/components/UrduTranslationButton.tsx` - **Tech:** React, Better-Auth Client. - **Logic:** - Check if the user is logged in using `authClient.useSession()`. - **State 1 (Logged Out):** Render nothing (or a "Login Required" warning). - **State 2 (Logged In):** Render a UI component (Admonition or Button) at the top of the chapter. - **Action:** Clicking the button toggles the URL between `/docs/...` and `/ur/docs/...`. ### 4. Integration - Inject the Auth-Gated Component automatically at the top of every documentation page using Docusaurus Swizzling (`DocItem/Content`). ## CONSTRAINTS - **Static Generation:** Translation happens at build time (running the script), not run time. - **Security:** The translation button must NOT be visible to public (anonymous) visitors."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - AI Translation (Priority: P1)

As a content manager, I want to automatically translate all English markdown files to Urdu, so that the content is available in both languages.

**Why this priority**: This is the core of the feature, without which no other part matters.

**Independent Test**: Can be tested by running the translation script and verifying the output files.

**Acceptance Scenarios**:

1. **Given** a set of English markdown files in the `docs/` directory, **When** the translation script is run, **Then** a corresponding set of Urdu markdown files should be created in the `i18n/ur/docusaurus-plugin-content-docs/current/` directory.
2. **Given** a translated Urdu markdown file, **When** it is compared to the original English file, **Then** the markdown formatting and technical terms should be preserved.

### User Story 2 - Gated Access (Priority: P2)

As a logged-in user, I want to be able to switch between the English and Urdu versions of the documentation, so that I can read the content in my preferred language.

**Why this priority**: This provides the user-facing value of the feature.

**Independent Test**: Can be tested by logging in and navigating to a documentation page.

**Acceptance Scenarios**:

1. **Given** a logged-in user is on a documentation page, **When** they click the "Translate to Urdu" button, **Then** they should be redirected to the Urdu version of the page.
2. **Given** a logged-in user is on the Urdu version of a documentation page, **When** they click the "Translate to English" button, **Then** they should be redirected to the English version of the page.

### User Story 3 - Public Access (Priority: P3)

As a public user, I should not see any option to switch to the Urdu version, so that the premium feature is protected.

**Why this priority**: This enforces the business rule of the feature.

**Independent Test**: Can be tested by visiting a documentation page without being logged in.

**Acceptance Scenarios**:

1. **Given** a user who is not logged in is on a documentation page, **When** the page loads, **Then** there should be no button or link to switch to the Urdu version.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a script to translate all `.md` files in the `docs/` directory to Urdu.
- **FR-002**: The translation script MUST preserve all markdown syntax and technical terms.
- **FR-003**: The translated files MUST be saved in the `i18n/ur/docusaurus-plugin-content-docs/current/` directory.
- **FR-004**: The Docusaurus configuration MUST be updated to support `en` and `ur` locales.
- **FR-005**: The website MUST support RTL layout for the Urdu locale.
- **FR-006**: A UI component MUST be displayed to logged-in users to toggle between English and Urdu.
- **FR-007**: The UI component for language switching MUST NOT be visible to anonymous users.
- **FR-008**: The language switching component MUST be automatically injected into every documentation page.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of markdown files in the `docs` directory are successfully translated to Urdu upon running the script.
- **SC-002**: The translated content is displayed correctly with RTL layout and without any visible formatting issues when the Urdu locale is selected.
- **SC-003**: Logged-in users can switch between English and Urdu versions of any documentation page in under 1 second.
- **SC-004**: 0% of anonymous users are shown the option to switch to the Urdu translation.
