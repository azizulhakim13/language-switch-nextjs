export async function getTranslation(language) {
    const res = await fetch(`/locales/${language}.json`);
    const translations = await res.json();
    return translations;
  }
  