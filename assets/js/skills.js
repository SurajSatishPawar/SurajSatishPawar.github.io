document.addEventListener("DOMContentLoaded", function () {
    const skills = [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "Data Visualization", level: 60 },
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 70 },
      { name: "Hugging Face", level: 50 },
      { name: "Generative AI", level: 70 },
      { name: "Large Language Models", level: 75 }
    ];
  
    const skillContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
  
    skills.forEach((skill, index) => {
      if (index % 3 === 0) skillHTML += `<div class="col-lg-4 col-md-6 col-sm-12 mb-3">`; // Start new column every 3 skills
  
      skillHTML += `
        <div class="skill mb-3">
          <span>${skill.name}</span>
          <div class="progress">
            <div class="progress-bar bg-primary" style="width: ${skill.level}%;">${skill.level}%</div>
          </div>
        </div>
      `;
  
      if ((index + 1) % 3 === 0 || index === skills.length - 1) skillHTML += `</div>`; // Close column after 3 skills or at the end
    });
  
    skillContainer.innerHTML = skillHTML;
  });
  