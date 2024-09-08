document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c;
    var form = document.getElementById("form");
    var resumeContent = document.getElementById("resume-content");
    function getEducation() {
        var educationItems = document.querySelectorAll(".education-item");
        return Array.from(educationItems).map(function (item) {
            var institution = item.querySelector(".edu-institution").value;
            var degree = item.querySelector(".edu-degree").value;
            var year = item.querySelector(".edu-year").value;
            return "<div><h3>".concat(degree, "</h3><p>").concat(institution, " (").concat(year, ")</p></div>");
        }).join("");
    }
    function getWorkExperience() {
        var workItems = document.querySelectorAll(".work-item");
        return Array.from(workItems).map(function (item) {
            var title = item.querySelector(".job-title").value;
            var company = item.querySelector(".company").value;
            var year = item.querySelector(".job-year").value;
            return "<div><h3>".concat(title, "</h3><p>").concat(company, " (").concat(year, ")</p></div>");
        }).join("");
    }
    function getSkills() {
        var skillItems = document.querySelectorAll(".skill-item");
        return Array.from(skillItems).map(function (item) {
            var skill = item.querySelector(".skill-name").value;
            var level = item.querySelector(".skill-level").value;
            return "<div><p>".concat(skill, ": <strong>").concat(level, "%</strong></p></div>");
        }).join("");
    }
    function generateResume() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        resumeContent.innerHTML = "\n\n  \n\n            <h1>".concat(name, "</h1>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n            <h2>Education</h2>\n            ").concat(getEducation(), "\n            <h2>Work Experience</h2>\n            ").concat(getWorkExperience(), "\n            <h2>Skills</h2>\n            ").concat(getSkills(), "\n        ");
    }
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        generateResume();
    });
    function addSection(containerId, sectionClass, fields) {
        var container = document.getElementById(containerId);
        if (container) {
            var newItem = document.createElement("div");
            newItem.classList.add(sectionClass);
            newItem.innerHTML = fields.map(function (field) { return "\n                <label>".concat(field.label, ":</label>\n                <input type=\"").concat(field.type, "\" class=\"").concat(field.class, "\" ").concat(field.required ? 'required' : '', ">\n            "); }).join("");
            container.appendChild(newItem);
        }
    }
    (_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        addSection("education-container", "education-item", [
            { label: "Institution", type: "text", class: "edu-institution", required: true },
            { label: "Degree", type: "text", class: "edu-degree", required: true },
            { label: "Year", type: "text", class: "edu-year", required: true }
        ]);
    });
    (_b = document.getElementById("add-work")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        addSection("work-container", "work-item", [
            { label: "Job Title", type: "text", class: "job-title", required: true },
            { label: "Company", type: "text", class: "company", required: true },
            { label: "Year", type: "text", class: "job-year", required: true }
        ]);
    });
    (_c = document.getElementById("add-skill")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        addSection("skills-container", "skill-item", [
            { label: "Skill", type: "text", class: "skill-name", required: true },
            { label: "Level (0-100%)", type: "number", class: "skill-level", required: true }
        ]);
    });
});
