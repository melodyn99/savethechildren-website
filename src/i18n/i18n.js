import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

import en_us_common from "./en-us/common.json";
import en_us_home from "./en-us/home.json";
import en_us_benefits from "./en-us/benefits.json";
import en_us_seekhelp from "./en-us/seekhelp.json";
import en_us_loginregister from "./en-us/loginregister.json";
import en_us_whywemustact from "./en-us/whywemustact.json";

import zh_hk_common from "./zh-hk/common.json";
import zh_hk_home from "./zh-hk/home.json";
import zh_hk_benefits from "./zh-hk/benefits.json";
import zh_hk_seekhelp from "./zh-hk/seekhelp.json";
import zh_hk_loginregister from "./zh-hk/loginregister.json";
import zh_hk_whywemustact from "./zh-hk/whywemustact.json";

i18n
// load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
// .use(Backend)
// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
// .use(LanguageDetector)
// pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        lng: 'zh-HK',
        fallbackLng: 'zh-HK',
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        ns: ['common', 'contact'],
        defaultNS: 'common',
        resources: {
            'en-US': {
                common: en_us_common,
                home: en_us_home,
                benefits: en_us_benefits,
                seekhelp: en_us_seekhelp,
                loginregister: en_us_loginregister,
                whywemustact: en_us_whywemustact,
            },
            'zh-HK': {
                common: zh_hk_common,
                home: zh_hk_home,
                benefits: zh_hk_benefits,
                seekhelp: zh_hk_seekhelp,
                loginregister: zh_hk_loginregister,
                whywemustact: zh_hk_whywemustact,
            }
        }
    });

export default i18n;