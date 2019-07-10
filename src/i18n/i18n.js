import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

import en_us_Common from "./en-us/Common.json";
import en_us_Home from "./en-us/Home.json";
import en_us_SeekHelp from "./en-us/SeekHelp.json";
import en_us_LoginRegister from "./en-us/LoginRegister.json";
import en_us_AboutUs from "./en-us/AboutUs.json";
import en_us_PrimaryHome from "./en-us/PrimaryHome.json";
import en_us_PrimaryTips from "./en-us/PrimaryTips.json";
import en_us_PrimarySocialMedia from "./en-us/PrimarySocialMedia.json";
import en_us_PrimaryQuiz from "./en-us/PrimaryQuiz.json";
import en_us_PrimaryRisk from "./en-us/PrimaryRisk.json";
import en_us_PrimaryGame from "./en-us/PrimaryGame.json";
import en_us_PrimaryNetizenPledge from "./en-us/PrimaryNetizenPledge.json";
import en_us_SecondaryHome from "./en-us/SecondaryHome.json";
import en_us_ParentsHome from "./en-us/ParentsHome.json";
import en_us_ParentsTips from "./en-us/ParentsTips.json";
import en_us_ParentsBlog from "./en-us/ParentsBlog.json";
import en_us_ParentsBlogDetail from "./en-us/ParentsBlogDetail.json";
import en_us_ParentsVideosSC from "./en-us/ParentsVideosSC.json";
import en_us_ParentsVideosSCDetail from "./en-us/ParentsVideosSCDetail.json";
import en_us_ParentsTraining from "./en-us/ParentsTraining.json";
import en_us_ParentsMore from "./en-us/ParentsMore.json";
import en_us_FeaturedIssues from "./en-us/FeaturedIssues.json";
import en_us_ResearchFindings from "./en-us/ResearchFindings.json";
import en_us_OurEvents from "./en-us/OurEvents.json";

import zh_hk_Common from "./zh-hk/Common.json";
import zh_hk_Home from "./zh-hk/Home.json";
import zh_hk_SeekHelp from "./zh-hk/SeekHelp.json";
import zh_hk_LoginRegister from "./zh-hk/LoginRegister.json";
import zh_hk_AboutUs from "./zh-hk/AboutUs.json";
import zh_hk_PrimaryHome from "./zh-hk/PrimaryHome.json";
import zh_hk_PrimaryTips from "./zh-hk/PrimaryTips.json";
import zh_hk_PrimarySocialMedia from "./zh-hk/PrimarySocialMedia.json";
import zh_hk_PrimaryQuiz from "./zh-hk/PrimaryQuiz.json";
import zh_hk_PrimaryRisk from "./zh-hk/PrimaryRisk.json";
import zh_hk_PrimaryGame from "./zh-hk/PrimaryGame.json";
import zh_hk_PrimaryNetizenPledge from "./zh-hk/PrimaryNetizenPledge.json";
import zh_hk_SecondaryHome from "./zh-hk/SecondaryHome.json";
import zh_hk_ParentsHome from "./zh-hk/ParentsHome.json";
import zh_hk_ParentsTips from "./zh-hk/ParentsTips.json";
import zh_hk_ParentsBlog from "./zh-hk/ParentsBlog.json";
import zh_hk_ParentsBlogDetail from "./zh-hk/ParentsBlogDetail.json";
import zh_hk_ParentsVideosSC from "./zh-hk/ParentsVideosSC.json";
import zh_hk_ParentsVideosSCDetail from "./zh-hk/ParentsVideosSCDetail.json";
import zh_hk_ParentsTraining from "./zh-hk/ParentsTraining.json";
import zh_hk_ParentsMore from "./zh-hk/ParentsMore.json";
import zh_hk_FeaturedIssues from "./zh-hk/FeaturedIssues.json";
import zh_hk_ResearchFindings from "./zh-hk/ResearchFindings.json";
import zh_hk_OurEvents from "./zh-hk/OurEvents.json";

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
                Common: en_us_Common,
                Home: en_us_Home,
                SeekHelp: en_us_SeekHelp,
                LoginRegister: en_us_LoginRegister,
                AboutUs: en_us_AboutUs,
                PrimaryHome: en_us_PrimaryHome,
                PrimaryTips: en_us_PrimaryTips,
                PrimarySocialMedia: en_us_PrimarySocialMedia,
                PrimaryQuiz: en_us_PrimaryQuiz,
                PrimaryRisk: en_us_PrimaryRisk,
                PrimaryGame: en_us_PrimaryGame,
                PrimaryNetizenPledge: en_us_PrimaryNetizenPledge,
                SecondaryHome: en_us_SecondaryHome,
                ParentsHome: en_us_ParentsHome,
                ParentsTips: en_us_ParentsTips,
                ParentsBlog: en_us_ParentsBlog,
                ParentsBlogDetail: en_us_ParentsBlogDetail,
                ParentsVideosSC: en_us_ParentsVideosSC,
                ParentsVideosSCDetail: en_us_ParentsVideosSCDetail,
                ParentsTraining: en_us_ParentsTraining,
                ParentsMore: en_us_ParentsMore,
                FeaturedIssues: en_us_FeaturedIssues,
                ResearchFindings: en_us_ResearchFindings,
                OurEvents: en_us_OurEvents,
            },
            'zh-HK': {
                Common: zh_hk_Common,
                Home: zh_hk_Home,
                SeekHelp: zh_hk_SeekHelp,
                LoginRegister: zh_hk_LoginRegister,
                AboutUs: zh_hk_AboutUs,
                PrimaryHome: zh_hk_PrimaryHome,
                PrimaryTips: zh_hk_PrimaryTips,
                PrimarySocialMedia: zh_hk_PrimarySocialMedia,
                PrimaryQuiz: zh_hk_PrimaryQuiz,
                PrimaryRisk: zh_hk_PrimaryRisk,
                PrimaryGame: zh_hk_PrimaryGame,
                PrimaryNetizenPledge: zh_hk_PrimaryNetizenPledge,
                SecondaryHome: zh_hk_SecondaryHome,
                ParentsHome: zh_hk_ParentsHome,
                ParentsTips: zh_hk_ParentsTips,
                ParentsBlog: zh_hk_ParentsBlog,
                ParentsBlogDetail: zh_hk_ParentsBlogDetail,
                ParentsVideosSC: zh_hk_ParentsVideosSC,
                ParentsVideosSCDetail: zh_hk_ParentsVideosSCDetail,
                ParentsTraining: zh_hk_ParentsTraining,
                ParentsMore: zh_hk_ParentsMore,
                FeaturedIssues: zh_hk_FeaturedIssues,
                ResearchFindings: zh_hk_ResearchFindings,
                OurEvents: zh_hk_OurEvents,
            }
        }
    });

export default i18n;
