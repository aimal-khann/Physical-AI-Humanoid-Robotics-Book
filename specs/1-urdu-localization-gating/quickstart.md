# Quickstart: AI-Automated Urdu Localization with Auth Gating

## 1. Prerequisites

- Python 3.10+
- Node.js
- An OpenAI API key

## 2. Backend Setup

1.  Navigate to the `backend/rag_backend` directory.
2.  Create a `.env` file and add your OpenAI API key:
    ```
    OPENAI_API_KEY=your-api-key
    ```
3.  Run the translation script:
    ```
    python generate_urdu.py
    ```

## 3. Frontend Setup

1.  Navigate to the root of the project.
2.  Install the dependencies:
    ```
    yarn
    ```
3.  Start the development server:
    ```
    yarn start
    ```

## 4. Verification

1.  Open the website in your browser.
2.  Log in with a user account.
3.  Navigate to a documentation page.
4.  You should see a button to translate the page to Urdu.
5.  Click the button and verify that the content is translated and the layout is RTL.
6.  Log out and navigate to the same documentation page.
7.  Verify that the translation button is no longer visible.
