# Implementation Plan: AI-Automated Urdu Localization with Auth Gating

**Branch**: `1-urdu-localization-gating` | **Date**: 2025-12-17 | **Spec**: [specs/1-urdu-localization-gating/spec.md](specs/1-urdu-localization-gating/spec.md)
**Input**: Feature specification from `/specs/1-urdu-localization-gating/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines the steps to implement a complete Urdu translation pipeline for the robotics textbook. This includes an automated backend script to generate translations and a frontend UI that restricts access to these translations to logged-in users only.

## Technical Context

**Language/Version**: Python 3.10+, Node.js (for Docusaurus), TypeScript
**Primary Dependencies**: OpenAI API, python-dotenv, React, Docusaurus, better-auth
**Storage**: N/A
**Testing**: Jest, Pytest
**Target Platform**: Web
**Project Type**: Monorepo (Frontend + Backend)
**Performance Goals**: Translation script should complete in a reasonable time. Page load time should not be significantly impacted.
**Constraints**: Static generation at build time, Auth gating for Urdu content.
**Scale/Scope**: All markdown files in the `docs/` directory.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **[X] Principle 1.4 (Secure Authentication):** The plan incorporates Better Auth for user management.
- **[X] Principle 1.5 (Gated AI Access):** The plan ensures the Urdu translation is accessible only to authenticated users.
- **[X] Principle 1.6 (Separation of Concerns):** The plan respects the separation of the authentication server and the Python backend.
- **[X] Principle 2.1 (Code Standards):** The plan specifies the correct languages/frameworks for each component.

## Project Structure

### Documentation (this feature)

```text
specs/1-urdu-localization-gating/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
# Project structure is based on the constitution's "Separation of Concerns" principle.

backend/
├── rag_backend/         # Python RAG backend
│   ├── generate_urdu.py
│   └── tests/
└── auth_server/        # Node.js/Express authentication server
    ├── src/
    └── tests/

src/
├── components/
│   ├── UrduTranslationButton.tsx
└── theme/
    └── DocItem/
        └── Content/
            └── index.js

docusaurus.config.ts
```

**Structure Decision**: The project structure is based on the constitution's "Separation of Concerns" principle. The new files will be created in the appropriate locations within the existing structure.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
|           |            |                                     |
