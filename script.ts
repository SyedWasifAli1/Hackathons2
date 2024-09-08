document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form") as HTMLFormElement;
    const resumeContent = document.getElementById("resume-content") as HTMLElement;

    function getEducation(): string {
        const educationItems = document.querySelectorAll(".education-item");
        return Array.from(educationItems).map(item => {
            const institution = (item.querySelector(".edu-institution") as HTMLInputElement).value;
            const degree = (item.querySelector(".edu-degree") as HTMLInputElement).value;
            const year = (item.querySelector(".edu-year") as HTMLInputElement).value;
            return `<div><h3>${degree}</h3><p>${institution} (${year})</p></div>`;
        }).join("");
    }

    function getWorkExperience(): string {
        const workItems = document.querySelectorAll(".work-item");
        return Array.from(workItems).map(item => {
            const title = (item.querySelector(".job-title") as HTMLInputElement).value;
            const company = (item.querySelector(".company") as HTMLInputElement).value;
            const year = (item.querySelector(".job-year") as HTMLInputElement).value;
            return `<div><h3>${title}</h3><p>${company} (${year})</p></div>`;
        }).join("");
    }

    function getSkills(): string {
        const skillItems = document.querySelectorAll(".skill-item");
        return Array.from(skillItems).map(item => {
            const skill = (item.querySelector(".skill-name") as HTMLInputElement).value;
            const level = (item.querySelector(".skill-level") as HTMLInputElement).value;
            return `<div><p>${skill}: <strong>${level}%</strong></p></div>`;
        }).join("");
    }

    function generateResume(): void {
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;

        resumeContent.innerHTML = `

  

            <h1>${name}</h1>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h2>Education</h2>
            ${getEducation()}
            <h2>Work Experience</h2>
            ${getWorkExperience()}
            <h2>Skills</h2>
            ${getSkills()}
        `;
        

        
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        generateResume();
    });

    function addSection(containerId: string, sectionClass: string, fields: { label: string, type: string, class: string, required: boolean }[]): void {
        const container = document.getElementById(containerId);
        if (container) {
            const newItem = document.createElement("div");
            newItem.classList.add(sectionClass);
            newItem.innerHTML = fields.map(field => `
                <label>${field.label}:</label>
                <input type="${field.type}" class="${field.class}" ${field.required ? 'required' : ''}>
            `).join("");
            container.appendChild(newItem);
        }
    }

    document.getElementById("add-education")?.addEventListener("click", () => {
        addSection("education-container", "education-item", [
            { label: "Institution", type: "text", class: "edu-institution", required: true },
            { label: "Degree", type: "text", class: "edu-degree", required: true },
            { label: "Year", type: "text", class: "edu-year", required: true }
        ]);
    });

    document.getElementById("add-work")?.addEventListener("click", () => {
        addSection("work-container", "work-item", [
            { label: "Job Title", type: "text", class: "job-title", required: true },
            { label: "Company", type: "text", class: "company", required: true },
            { label: "Year", type: "text", class: "job-year", required: true }
        ]);
    });

    document.getElementById("add-skill")?.addEventListener("click", () => {
        addSection("skills-container", "skill-item", [
            { label: "Skill", type: "text", class: "skill-name", required: true },
            { label: "Level (0-100%)", type: "number", class: "skill-level", required: true }
        ]);
    });
});


