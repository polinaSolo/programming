// מאזין לטעינת תוכן ה-HTML: הקוד יופעל לאחר שכל תוכן ה-HTML נטען, כדי לוודא שכל האלמנטים זמינים לשימוש
document.addEventListener("DOMContentLoaded", function (event) {
// אובייקט JSON המכיל רשימה של נתונים המייצגים את פרטי הכרטיסים (כותרת, תמונה, ותוכן)
    const jsonData = {
        //שם של הרשימה
        "generators": [
            {
                "id": 1,
                "title": "יחיד ורבים",//כותרת הכרטיס
                "img":"one_many.png",//שם קובץ התמונה
                "content": " בסיס להבנת מבנה השפה. יחיד ורבים (ילד - ילדים, ילדה – ילדות).",// תוכן הטקסט של הכרטיס

            },
            {
                "id": 2,
                "title": "זכר ונקבה",
                "img":"she_he.png",
                "content": " זיהוי ושימוש נכון בשמות עצם בזכר ונקבה (ילד - ילדה, כלב - כלבה).",

            },
            {
                "id": 3,
                "title": "כינויי גוף",
                "img":"kinui_guf.png",
                "content": " שימוש בכינויי גוף בסיסיים (אני, אתה, את, הוא, היא, אנחנו, הם, הן).",

            },
            {
                "id": 4,
                "title": "מילות נרדפות",
                "img":"milot_nrdfot.png",
                "content": " לימוד מילות נרדפות המעשירות את אוצר המילים ומאפשרות לתלמידים להביע רעיונות באופן מגוון ומדויק יותר, תוך שיפור הבנת הנקרא והבעה בכתב",

            },
            {
                "id": 5,
                "title": "מילות קישור ",
                "img":"milot_kishur.png",
                "content": " לימוד מילות קישור כמו \"כי\", \"ולכן\", \"אף על פי\", \"למרות ש\", \"כמו כן\", המאפשרות לתלמידים לחבר בין רעיונות, משפטים ופעולות וליצור זרימה ברורה וקשורה בשפה.",

            },
            {
                "id": 6,
                "title": "מילות שאלה",
                "img":"milot_shaila.png",
                "content": "הכרת מילות שאלה כמו \"מה?\", \"מי?\", \"למה?\", \"מתי?\" ו\"איך?\" לפיתוח יכולות שאילת שאלות, הבנת שאלות בטקסטים והשגת מידע בצורה אפקטיבית.\n" +
                    "\n",

            },
            {
                "id": 7,
                "title": "ניבים ופתגמים",
                "img":"nivim_vpitgamim.png",
                "content": " לימוד ניבים ופתגמים המשקפים תרבות ושפה, להעמקת ההבנה התרבותית, העשרת הביטוי האישי ושיפור ההבנה של טקסטים עשירים.",

            },
            {
                "id": 8,
                "title": "שמות תואר",
                "img":"shmot_toar.png",
                "content": " חיבור שמות תואר לשמות עצם (ילד טוב, ילדה חכמה) והתאמתם לזכר ונקבה.",

            },
            {
                "id": 9,
                "title": "שמות גוף ",
                "img":"shmot_guf.png",
                "content": " לימוד מילות שייכות כמו שלי, שלך, שלו, שלה.",

            },
            {
                "id": 10,
                "title": "שמות פעולה",
                "img":"shmot_piula.png",
                "content": " הבנת שמות פעולה כמו \"הליכה\", \"כתיבה\", \"קריאה\", המאפשרת לתלמידים לזהות וליצור שמות פעולה, להעשיר את השפה ולהשתמש בביטויים מדויקים יותר.",

            }

        ]
    }
    // השגת הקונטיינר שבו יוצגו הכרטיסים
    const itemContainer = document.getElementById('itemContainer'); // קבוע שמחזיק אלמנט HTML עם המזהה 'itemContainer' 
    itemContainer.classList.add("row");  // הוספת מחלקה לעיצוב בשורות

    // פונקציה ליצירת כל הכרטיסים מתוך jsonData
    function createAllCards() {
        itemContainer.innerHTML = ""; // מנקה את התוכן של הקונטיינר
        // יצירת כרטיס עבור כל גנרטור
        jsonData.generators.forEach(generator => { 
            createGenerator(generator); 
        });
    }

    // פונקציה ליצירת כרטיס יחיד
    function createGenerator(generator) {
        const myCard = document.createElement("div");//יצירת אלמנט ״div״
        myCard.classList.add("card", "h-100", "my-card");// הוספת הגדרות מ -Bootstrap ,מחלקות לעיצוב הכרטיס
        myCard.style.cssText = "font-size: 1vw; text-align: center; border-radius: 8px; margin: 10px; padding: 12px; position: relative; overflow: hidden;";
        //   יצירת כותרת הכרטיס ועיצובה
        const myTitle = document.createElement("h5");//יצירת אלמנט ״h5״
        myTitle.classList.add("card-title","my-title");// הוספת מחלקט לעיצוב הכותרת בתוך הכרטיסיה
        myTitle.style.cssText = "position: relative; z-index: 3;  padding: 5px;"; 
        myTitle.textContent = generator.title;//הוספת טקסט כותרת לכרטיס
        // יצירת תמונת הכרטיס ועיצובה
        const myImg = document.createElement("img");//יצירת אלמנט ״img״
        myImg.setAttribute("src", `img/${generator.img}`);// הגדרת מקור התמונה
        myImg.style.cssText = "width: 100%; height: auto; display: block; position: relative; z-index: 1;";
        // יצירת גוף הטקסט של הכרטיס ועיצובו
        const myTextBody = document.createElement("div");//יצירת אלמנט ״div״
        myTextBody.classList.add("card-body","my-body-text");// הוספת מחלקט לעיצוב גוף הטקסט בתוך הכרטיסיה
        myTextBody.style.cssText = `
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: rgba(252, 232, 222, 0.9); 
        color: black; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        opacity: 0; 
        z-index: 2; 
        padding: 9px; 
        text-align: center; 
        overflow: auto; 
        transition: opacity 0.3s ease;
    `;
        myTextBody.textContent = generator.content; // הוספת טקסט התוכן לכרטיס

        // הוספת כל האלמנטים לכרטיס
        myCard.appendChild(myTitle);
        myCard.appendChild(myImg);
        myCard.appendChild(myTextBody);
        itemContainer.appendChild(myCard); // הוספת הכרטיס לקונטיינר הראשי

        // הוספת אירועי מעבר עכבר כדי להציג את גוף הטקסט
        myCard.addEventListener("mouseover", () => {
            myTextBody.style.opacity = "1";// הצגת טקסט על מעבר עכבר
        });

        myCard.addEventListener("mouseout", () => {
            myTextBody.style.opacity = "0"; // הסתרת טקסט כשעכבר יוצא
        });
    }

    // הצגת כל הכרטיסים בעת טעינת העמוד
    createAllCards();

    const searchInput = document.getElementById("searchInput"); // שדה הקלט לחיפוש
    const search = document.getElementById("search"); // כפתור החיפוש

    search.addEventListener("click", function (event) {
        event.preventDefault(); // מונע טעינה מחדש של הדף
        const searchValue = searchInput.value.trim(); // מקבל את הערך מהשדה ומסיר רווחים מיותרים בתחילת ובסוף המילה
        if (searchValue === "") { // אם השדה ריק
            alert("יש להקליד ערך לחיפוש."); // התראה על שדה ריק
            createAllCards(); // הצגת כל הכרטיסים מחדש
            return; // מפסיק את ביצוע הקוד ומפסיק את החיפוש
        }
        // חיפוש הכרטיסייה המתאימה לפי הכותרת
        const results = jsonData.generators.filter(generator => generator.title.includes(searchValue)); // מסנן את הגנרטורים כך שיתאימו לערך שהוזן בשדה החיפוש
        itemContainer.innerHTML = ""; // מנקה את התוכן הקיים
        // אם נמצאו תוצאות, מציג את כל הכרטיסיות שנמצאו
        if (results.length > 0) {
            document.getElementById("search").innerHTML = "ניקוי"; // משנה את הטקסט של הכפתור ל-"ניקוי"
            results.forEach(result => createGenerator(result)); // מציג את כל הכרטיסיות שנמצאו
            search.addEventListener("click", function (event) { // מאזין ללחיצה על כפתור החיפוש פעם נוספת
             window.location.href = "index.html";// בעת לחיצה מחדש, מפנה את המשתמש לדף הבית
            })
        } else {
            alert("לא נמצא ערך תואם."); // מציג הודעה אם לא נמצאו תוצאות
            searchInput.value = ""; // מנקה את שדה החיפוש
            createAllCards(); // מציג מחדש את כל הכרטיסים
            document.getElementById("search").innerHTML = "לחיפוש"; // מחזיר את הכפתור למצבו המקורי ("לחיפוש")
        }
    });
});


//פומקציה לפתיחת חלון קופץ בלחיצה על כותרת ״אודות״ בתפריט הניווט
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("aboutModal"); // חלון המידע 
    const aboutButton = document.getElementById("aboutButton"); // כפתור המידע
    const closeButton = document.querySelector(".close-button");  // כפתור הסגירה של המודאל

    // פתיחת חלון הצף
    aboutButton.addEventListener("click", function (event) {
        event.preventDefault();  // מונע טעינה מחדש של הדף
        modal.style.display = "block"; // הצגת חלון המודאל
    });

    // סגירת חלון הצף בלחיצה על כפתור הסגירה
    closeButton.addEventListener("click", function () {
        modal.style.display = "none";// הסתרת חלון המודאל
    });

    // סגירת חלון הצף בלחיצה מחוץ לחלון
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";  // הסתרת חלון המודאל
        }
    });


// מצב לילה (Dark Mode)
    const toggleThemeButton = document.getElementById("toggleTheme"); // כפתור לשינוי מצב
    toggleThemeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode"); // החלפת מחלקה לעיצוב מצב לילה

        // שינוי הטקסט בכפתור לפי המצב הנוכחי
        toggleThemeButton.textContent = document.body.classList.contains("dark-mode")
            ? "מצב יום"
            : "מצב לילה";
    });
});




