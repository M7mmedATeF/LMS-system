import { createSlice } from "@reduxjs/toolkit";

const Langs = {
    // Navbar
    home: ["Home", "الرئيسية"],
    courses: ["courses", "المواد"],
    aboutus: ["About us", "من نحن"],
    faqs: ["FAQs", "قسم الاسئلة"],

    // User
    profile: ["profile", "الصفحة الشخصية"],
    grades: ["grades", "الدرجات"],
    darkmode: ["Dark mode", "الوضع الليلي"],
    lightmode: ["Light mode", "الوضع المضئ"],
    language: ["language", "اللغة"],
    arabic: ["arabic", "اللغة العربية"],
    english: ["english", "اللغة الإنجليزية"],
    logout: ["Logout", "تسجيل الخروج"],

    // Home
    title: ["The Ultimate LMS", "اكبر منصة تعليمية"],
    lorem: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, placeat. Provident rerum architecto omnis vero, exercitationem facilis eius delectus, nobis natus molestias officiis expedita minima nesciunt. Quaerat repudiandae earum repellat?",
        "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما تعمل جميع مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار مقاطع من نص لوريم إيبسوم نفسه عدة مرات بما تتطلبه الحاجة، يقوم مولّدنا هذا باستخدام كلمات من قاموس يحوي على أكثر من 200 كلمة لا تينية، مضاف إليها مجموعة من الجمل النموذجية، لتكوين نص لوريم إيبسوم ذو شكل منطقي قريب إلى النص الحقيقي. وبالتالي يكون النص الناتح خالي من التكرار، أو أي كلمات أو عبارات غير لائقة أو ما شابه. وهذا ما يجعله أول مولّد نص لوريم إيبسوم حقيقي على الإنترنت.",
    ],
    joinus: ["join us now", "انضم إلينا الان"],

    // Couters
    video: ["video", "فيديوهات"],
    paper: ["paper", "ملخصات الشرح"],
    exam: ["final", "امتحان"],

    // Leaderboard
    leaderboard: ["Leaderboard", "لائحة الشرف"],
    boardQoute: [
        "The Harder You Do, The Better You Get",
        "النتائج لن تأتي بدون عملك الجاد",
    ],
    pt: ["pt", "نقطة"],

    // contact us
    contactus: ["contact us", "تواصل معنا"],
    contactQaute: [
        "Ask For What Ever You Need",
        "يمكنك سؤالنا عن ايا كان ما تريد",
    ],
    name: ["name", "الاسم"],
    email: ["email", "البريد الإلكتروني"],
    phone: ["phone", "رقم الهاتف"],
    message: ["message", "اشرح لنا ما تريد"],
    send: ["send your message", "إرسال رسالتك"],
};

export const Languages_trans = createSlice({
    name: "translate",
    initialState: Langs,
    reducers: {},
});

// Action creators are generated for each case reducer function
// export const { tstCode } = Languages_trans.actions;

export default Languages_trans.reducer;
