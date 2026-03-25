import json
import os
from deep_translator import GoogleTranslator

# Configuration
SOURCE_LANG = 'en'
TARGET_LANGS = ['hi', 'mr', 'ta']  # Hindi, Marathi, Tamil
LOCALES_DIR = './public/locales/'
MAPPING = {
    'hi': 'hi',
    'mr': 'mr',
    'ta': 'ta'
}

def translate_value(value, target_lang):
    if not isinstance(value, str):
        return value
    # Handle brand names or specific terms if needed
    try:
        translated = GoogleTranslator(source='auto', target=target_lang).translate(value)
        return translated
    except Exception as e:
        print(f"Error translating '{value}' to {target_lang}: {e}")
        return value

def translate_dict(d, target_lang):
    translated = {}
    for k, v in d.items():
        if isinstance(v, dict):
            translated[k] = translate_dict(v, target_lang)
        else:
            print(f"Translating: {v[:30]}...")
            translated[k] = translate_value(v, target_lang)
    return translated

def main():
    source_file = os.path.join(LOCALES_DIR, SOURCE_LANG, 'common.json')
    if not os.path.exists(source_file):
        print(f"Source file {source_file} not found.")
        return

    with open(source_file, 'r', encoding='utf-8') as f:
        source_data = json.load(f)

    for lang in TARGET_LANGS:
        print(f"\n--- Processing Language: {lang} ---")
        target_dir = os.path.join(LOCALES_DIR, lang)
        if not os.path.exists(target_dir):
            os.makedirs(target_dir)

        target_file = os.path.join(target_dir, 'common.json')
        
        # In a real scenario, you might want to merge with existing translations
        # but here we follow the user's request to use the tool for the content.
        translated_data = translate_dict(source_data, lang)

        with open(target_file, 'w', encoding='utf-8') as f:
            json.dump(translated_data, f, ensure_ascii=False, indent=2)
        print(f"Saved {target_file}")

if __name__ == "__main__":
    main()
