import i18next, { TFunction } from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import en from '../../assets/i18n/en.json'
import vi from '../../assets/i18n/vi.json'

// Thay thế bằng phương thức lưu trữ ngôn ngữ từ server
// export function getLanguage(): string {
//   const locale = 'en'
//   return locale
// }

const resources = {
  en: { translation: en },
  vi: { translation: vi },
}

export async function initI18n(debug: boolean): Promise<TFunction> {
  return await i18next.use(initReactI18next).init({
    debug: debug,
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false
    }
  })
}