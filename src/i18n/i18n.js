import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

import en_us_common from "./en-us/common.json";
import en_us_home from "./en-us/home.json";
import en_us_benefits from "./en-us/benefits.json";
import en_us_seekhelp from "./en-us/seekhelp.json";
import en_us_loginregister from "./en-us/loginregister.json";
import en_us_whywemustact from "./en-us/whywemustact.json";
import en_us_ourmission from "./en-us/ourmission.json";
import en_us_contactus from "./en-us/contactus.json";
import en_us_sitemap from "./en-us/sitemap.json";
import en_us_primaryhome from "./en-us/primaryhome.json";
import en_us_primarytips from "./en-us/primarytips.json";
import en_us_primarysocialmedia from "./en-us/primarysocialmedia.json";
import en_us_primaryquiz from "./en-us/primaryquiz.json";
import en_us_primaryrisk from "./en-us/primaryrisk.json";
import en_us_primarygame from "./en-us/primarygame.json";
import en_us_primarynetizenpledge from "./en-us/primarynetizenpledge.json";
import en_us_secondaryhome from "./en-us/secondaryhome.json";
import en_us_parentshome from "./en-us/parentshome.json";
import en_us_parentstips from "./en-us/parentstips.json";
import en_us_parentsblog from "./en-us/parentsblog.json";
import en_us_parentsblogdetail from "./en-us/parentsblogdetail.json";
import en_us_parentsvideosSC from "./en-us/parentsvideosSC.json";
import en_us_parentsvideosSCdetail from "./en-us/parentsvideosSCdetail.json";
import en_us_parentstraining from "./en-us/parentstraining.json";

import zh_hk_common from "./zh-hk/common.json";
import zh_hk_home from "./zh-hk/home.json";
import zh_hk_benefits from "./zh-hk/benefits.json";
import zh_hk_seekhelp from "./zh-hk/seekhelp.json";
import zh_hk_loginregister from "./zh-hk/loginregister.json";
import zh_hk_whywemustact from "./zh-hk/whywemustact.json";
import zh_hk_ourmission from "./zh-hk/ourmission.json";
import zh_hk_contactus from "./zh-hk/contactus.json";
import zh_hk_sitemap from "./zh-hk/sitemap.json";
import zh_hk_primaryhome from "./zh-hk/primaryhome.json";
import zh_hk_primarytips from "./zh-hk/primarytips.json";
import zh_hk_primarysocialmedia from "./zh-hk/primarysocialmedia.json";
import zh_hk_primaryquiz from "./zh-hk/primaryquiz.json";
import zh_hk_primaryrisk from "./zh-hk/primaryrisk.json";
import zh_hk_primarygame from "./zh-hk/primarygame.json";
import zh_hk_primarynetizenpledge from "./zh-hk/primarynetizenpledge.json";
import zh_hk_secondaryhome from "./zh-hk/secondaryhome.json";
import zh_hk_parentshome from "./zh-hk/parentshome.json";
import zh_hk_parentstips from "./zh-hk/parentstips.json";
import zh_hk_parentsblog from "./zh-hk/parentsblog.json";
import zh_hk_parentsblogdetail from "./zh-hk/parentsblogdetail.json";
import zh_hk_parentsvideosSC from "./zh-hk/parentsvideosSC.json";
import zh_hk_parentsvideosSCdetail from "./zh-hk/parentsvideosSCdetail.json";
import zh_hk_parentstraining from "./zh-hk/parentstraining.json";

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
                ourmission: en_us_ourmission,
                contactus: en_us_contactus,
                sitemap: en_us_sitemap,
                primaryhome: en_us_primaryhome,
                primarytips: en_us_primarytips,
                primarysocialmedia: en_us_primarysocialmedia,
                primaryquiz: en_us_primaryquiz,
                primaryrisk: en_us_primaryrisk,
                primarygame: en_us_primarygame,
                primarynetizenpledge: en_us_primarynetizenpledge,
                secondaryhome: en_us_secondaryhome,
                parentshome: en_us_parentshome,
                parentstips: en_us_parentstips,
                parentsblog: en_us_parentsblog,
                parentsblogdetail: en_us_parentsblogdetail,
                parentsvideosSC: en_us_parentsvideosSC,
                parentsvideosSCdetail: en_us_parentsvideosSCdetail,
                parentstraining: en_us_parentstraining,
            },
            'zh-HK': {
                common: zh_hk_common,
                home: zh_hk_home,
                benefits: zh_hk_benefits,
                seekhelp: zh_hk_seekhelp,
                loginregister: zh_hk_loginregister,
                whywemustact: zh_hk_whywemustact,
                ourmission: zh_hk_ourmission,
                contactus: zh_hk_contactus,
                sitemap: zh_hk_sitemap,
                primaryhome: zh_hk_primaryhome,
                primarytips: zh_hk_primarytips,
                primarysocialmedia: zh_hk_primarysocialmedia,
                primaryquiz: zh_hk_primaryquiz,
                primaryrisk: zh_hk_primaryrisk,
                primarygame: zh_hk_primarygame,
                primarynetizenpledge: zh_hk_primarynetizenpledge,
                secondaryhome: zh_hk_secondaryhome,
                parentshome: zh_hk_parentshome,
                parentstips: zh_hk_parentstips,
                parentsblog: zh_hk_parentsblog,
                parentsblogdetail: zh_hk_parentsblogdetail,
                parentsvideosSC: zh_hk_parentsvideosSC,
                parentsvideosSCdetail: zh_hk_parentsvideosSCdetail,
                parentstraining: zh_hk_parentstraining,
            }
        }
    });

export default i18n;
