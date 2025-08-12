import React from "react";

export default function TermsAndPrivacy() {
  return (
    <div className="relative bg-gray-900 min-h-screen py-20 px-6 sm:px-10 lg:px-20 text-gray-300">
      {/* רקע גרדיאנט עדין */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-purple-900/20 to-indigo-900/20 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-20">
        {/* תנאי שימוש */}
        <section id="terms-of-use" className="select-none">
          <h1 className="text-4xl font-extrabold text-white mb-6">
            📜 תנאי שימוש
          </h1>
          <p className="mb-4">עודכן לאחרונה: ‎[תאריך עדכון]‎</p>

          <div className="space-y-4 leading-relaxed text-gray-300">
            <p>
              ברוך הבא לשירות הבוט האוטומטי שלנו ("השירות"). השימוש בשירות כפוף
              לתנאי השימוש המפורטים להלן. בשימוש בשירות, אתה מאשר שקראת, הבנת
              והסכמת לתנאים אלו.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              1. הגדרות
            </h2>
            <p>
              "החברה" – ‎[שם העסק/החברה שלך]‎, המפעילה את השירות.
              <br />
              "הבוט" – המערכת האוטומטית המתקשרת עם לקוחות בוואטסאפ ומסונכרנת עם
              יומנים דיגיטליים.
              <br />
              "משתמש" – כל אדם או גורם המשתמש בשירות.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              2. השימוש בשירות
            </h2>
            <p>
              השירות נועד לאוטומציה של קביעת, שינוי וביטול פגישות, שליחת תזכורות
              וניהול תקשורת עסקית עם לקוחות.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              3. שימוש אסור
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>למטרות בלתי חוקיות או פוגעניות.</li>
              <li>לשליחת ספאם או הטרדה.</li>
              <li>לשימוש העלול לפגוע בפרטיות או בזכויות של צד שלישי.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-6">
              4. שינויים והפסקת השירות
            </h2>
            <p>
              החברה שומרת לעצמה את הזכות לשנות, להשעות או להפסיק את השירות בכל
              עת, עם או בלי הודעה מוקדמת.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              5. הגבלת אחריות
            </h2>
            <p>
              השירות ניתן כמות שהוא ("As-Is"). החברה אינה אחראית לכל נזק ישיר או
              עקיף, אובדן הכנסות, או טעויות בתיאום הנגרמות משימוש בשירות.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">6. שיפוי</h2>
            <p>
              המשתמש מסכים לשפות את החברה בגין כל תביעה, הפסד או הוצאה הנובעים
              משימוש בשירות בניגוד לתנאים אלו.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              7. שינויים בתנאי השימוש
            </h2>
            <p>
              החברה רשאית לעדכן תנאים אלו מעת לעת. המשך השימוש בשירות מהווה
              הסכמה לתנאים המעודכנים.
            </p>
          </div>
        </section>

        {/* מדיניות פרטיות */}
        <section id="privacy-policy" className="select-none">
          <h1 className="text-4xl font-extrabold text-white mb-6">
            🔒 מדיניות פרטיות
          </h1>
          <p className="mb-4">עודכן לאחרונה: ‎[תאריך עדכון]‎</p>

          <div className="space-y-4 leading-relaxed text-gray-300">
            <p>
              מדיניות זו מתארת כיצד אנו אוספים, משתמשים ושומרים מידע אישי במסגרת
              הפעלת הבוט והשירות.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              1. מידע שאנו אוספים
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>פרטי התקשרות (שם, מספר טלפון).</li>
              <li>תוכן הודעות שנשלחות לבוט.</li>
              <li>פרטי פגישות (תאריך, שעה, הערות).</li>
              <li>מידע טכני הנדרש לתפקוד השירות.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-6">
              2. איך המידע נאסף
            </h2>
            <p>
              המידע נאסף דרך הודעות וואטסאפ, אינטגרציה עם Google Calendar,
              וטפסים מקוונים.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              3. שימוש במידע
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>קביעת, שינוי וביטול פגישות.</li>
              <li>שליחת תזכורות והודעות ללקוחות.</li>
              <li>שיפור השירות ופתרון בעיות.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-6">
              4. שיתוף עם צדדים שלישיים
            </h2>
            <p>
              אנו משתפים מידע רק עם Google Calendar וכלי אינטגרציה נוספים
              הנדרשים לפעילות השירות, וכן עם ספקי אחסון מאובטחים.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              5. שמירה ואבטחת מידע
            </h2>
            <p>
              אנו נוקטים באמצעי אבטחה מתאימים לשמירת המידע, לרבות הצפנה והגבלת
              גישה.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              6. שמירת מידע
            </h2>
            <p>
              המידע נשמר כל עוד נדרש לצורך מתן השירות או לפי דרישות החוק. ניתן
              לבקש את מחיקתו בכל עת.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              7. זכויות המשתמש
            </h2>
            <p>
              המשתמש רשאי לקבל עותק מהמידע שנשמר עליו, לבקש תיקון או מחיקה של
              המידע, ולפנות בכל שאלה לכתובת: ‎[אימייל התמיכה שלך]‎.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-6">
              8. שינויים במדיניות
            </h2>
            <p>
              החברה רשאית לעדכן מדיניות זו בכל עת. המשך השימוש בשירות מהווה
              הסכמה למדיניות המעודכנת.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
