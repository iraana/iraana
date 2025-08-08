/**
 * This script builds timetable dynamically using JS instead of HTML created one 
 */

// timetable data grouped in two arrays by term
const timetableCourses = {
    Fall : [
        { code: "CSD105", name: "Python", hours: 3 },
        { code: "CMM115", name: "Communications I", hours: 3 },
        { code: "CSD120", name: "Introduction to Web Development", hours: 4 },
        { code: "CSO104", name: "Introduction to Operating Systems and LAN", hours: 4 },
        { code: "MTH122", name: "Computer Mathematics", hours: 3 },
        { code: "TNY130", name: "Technology in Society", hours: 2 }
    ],
    Winter : [
        { code: "CSA103", name: "Business Applications I", hours: 4 },
        { code: "CSD102", name: "Programming Using C++", hours: 5 },
        { code: "CSD212", name: "Web Scripting Languages", hours: 4 },
        { code: "CSO102", name: "Introduction to Linux", hours: 4 },
        { code: "CST104", name: "PC Hardware and Networking", hours: 5 }
    ]
};

const tableSection = document.getElementById('making-a-table');
const table = document.createElement('table');
const caption = document.createElement('caption');
caption.textContent = "Table 1. Current Courses";
table.appendChild(caption);

// thead
const thead = document.createElement("thead");
//row1
const row1 = document.createElement("tr");

const th1 = document.createElement("th");
th1.textContent = "Term";
th1.setAttribute("rowspan", "2");

const th2 = document.createElement("th");
th2.textContent = "Course";
th2.setAttribute("colspan", "2");
  
const th3 = document.createElement("th");
th3.textContent = "Hrs/Week";
th3.setAttribute("rowspan", "2");
  
row1.append(th1, th2, th3);
thead.appendChild(row1);
  
//row2
const row2 = document.createElement("tr");

const thCode = document.createElement("th");
thCode.setAttribute("scope", "col");
thCode.textContent = "Code";

const thName = document.createElement("th");
thName.setAttribute("scope", "col");
thName.textContent = "Name";

row2.append(thCode, thName);
thead.appendChild(row2);
  
table.appendChild(thead);

// tbody
const tbody = document.createElement("tbody");
// will count total hours value of courses fot tfoot total cell 
let totalHours = 0;
// loop through terms
for (const term in timetableCourses) {
    // get all courses for one of terms
    const courses = timetableCourses[term];
    //loop through all courses in one term
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        const row = document.createElement("tr");
    
        // this way i will only add fall/winter text once for all courses in the term
        // it will do it for the first course and creat only one th with needed rowspan
        if (i === 0) {
          const th = document.createElement("th");
          th.textContent = term;
          // this will set us rowspan 6 for fall and 5 for winter depending on how many courses are in the term
          th.setAttribute("rowspan", courses.length);
          th.setAttribute("scope", "rowgroup");
          row.appendChild(th);
        }
    
        // do this for each course in the term
        const tdCode = document.createElement("td");
        tdCode.textContent = course.code;
        tdCode.setAttribute("scope", "row");
    
        const tdName = document.createElement("td");
        tdName.textContent = course.name;
    
        const tdHours = document.createElement("td");
        tdHours.textContent = course.hours;
        
        // sum total hourse to use in tfoot
        totalHours += course.hours;
    
        row.appendChild(tdCode);
        row.appendChild(tdName);
        row.appendChild(tdHours);
    
        tbody.appendChild(row);
      }
  
  }

table.appendChild(tbody);

// tfoot

const tfoot = document.createElement("tfoot")
const trTotal = document.createElement("tr");

const thTotal = document.createElement("th");
thTotal.setAttribute("colspan", "3");
thTotal.textContent = "Total";

const tdTotal = document.createElement("td");
tdTotal.textContent = totalHours;

trTotal.append(thTotal, tdTotal);
tfoot.appendChild(trTotal);
table.appendChild(tfoot)


tableSection.appendChild(table);




