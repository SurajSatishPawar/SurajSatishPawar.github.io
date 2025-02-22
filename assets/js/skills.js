document.addEventListener("DOMContentLoaded", function () {
  const skills = [
      { name: "Python" },
      { name: "SQL" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Hugging Face" },
      { name: "Generative AI" },
      { name: "Large Language Models" },
      { name: "Azure ML Studio" },
      { name: "Azure Data Factory" },
      { name: "GitHub" },
      { name: "Streamlit" },
      { name: "LangChain" },
      { name: "Supervised Learning" }
  ];

  const skillContainer = document.getElementById("skillsContainer");
  skillContainer.innerHTML = "";

  skills.forEach(skill => {
      const skillDiv = document.createElement("div");
      skillDiv.classList.add("skill-box");
      skillDiv.textContent = skill.name;

      skillContainer.appendChild(skillDiv);
  });
});
