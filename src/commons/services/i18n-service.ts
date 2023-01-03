import i18next, { TFunction } from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../../assets/i18n/en.json'
import vi from '../../assets/i18n/vi.json'

const resources = {
  en: { translation: en },
  vi: { translation: vi }
}

export async function initI18n (debug: boolean): Promise<TFunction> {
  return await i18next.use(initReactI18next).init({
    debug,
    fallbackLng: 'en',
    resources
  })
}
