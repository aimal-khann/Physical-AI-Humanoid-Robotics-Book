import os
import time
from openai import OpenAI # Or use Google Generative AI SDK
from dotenv import load_dotenv

load_dotenv()

# Setup your client (OpenAI or Gemini)
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# 1. Define Paths (Adjust these based on your folder structure)
# This assumes the script is running from backend/rag_backend/
SOURCE_DOCS = "../../docs" 
TARGET_DOCS = "../../i18n/ur/docusaurus-plugin-content-docs/current"

def translate_markdown(text):
    """
    Sends the markdown to the LLM and asks for an Urdu translation
    that preserves the Markdown syntax strictly.
    """
    system_prompt = """
    You are a technical translator for a Robotics Textbook. 
    Translate the English Markdown content to Urdu.
    RULES:
    1. KEEP all Markdown formatting (headers #, bold **, links [], code blocks ```).
    2. DO NOT translate code inside code blocks.
    3. DO NOT translate technical terms that are standard in English (like "Middleware", "Node", "Topic", "ROS 2") if they are commonly used in English in Urdu tech discussions, or provide the Urdu term with English in brackets.
    4. Output ONLY the translated markdown.
    """
    
    try:
        response = client.chat.completions.create(
            model="gpt-4o", # Use a smart model for better grammar
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": text}
            ],
            temperature=0.3
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error translating: {e}")
        return text # Fallback to original if fails

def process_directory(source_dir, target_dir):
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    for item in os.listdir(source_dir):
        source_path = os.path.join(source_dir, item)
        target_path = os.path.join(target_dir, item)

        if os.path.isdir(source_path):
            # Recursively handle subdirectories (like tutorial-basics)
            process_directory(source_path, target_path)
        elif item.endswith(".md") or item.endswith(".mdx"):
            print(f"🔄 Translating {item}...")
            
            with open(source_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Skip empty files
            if not content.strip():
                continue

            urdu_content = translate_markdown(content)
            
            with open(target_path, "w", encoding="utf-8") as f:
                f.write(urdu_content)
            print(f"✅ Saved to {target_path}")

if __name__ == "__main__":
    print("🚀 Starting AI Translation Engine...")
    process_directory(SOURCE_DOCS, TARGET_DOCS)
    print("🎉 All chapters translated to Urdu!")