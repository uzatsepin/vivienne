import ua from '~/localization/locales/ua.json'
import ru from '~/localization/locales/ru.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ua',
    fallbackLocale: 'ua',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "i18n_redirected",
        cookieOptions: { maxAge: 15552000 },
        alwaysRedirect: true,
        redirectOn: 'root'
    },
    strategy: "prefix_except_default",
    defaultLocale: 'ua',
    messages: {
        ua: ua,
        ru: ru,
    }
}))