import ja from '@/i18n/ja.json'
import ko from '@/i18n/ko.json'

export const getLanguageText = (language: string, section: string) => {
  const translations: {
    [key: string]: { [key: string]: { [key: string]: string } }
  } = {
    ko,
    ja,
  }

  const languageData = translations[language]
  if (languageData && languageData[section]) {
    return languageData[section]
  }
  return {}
}
