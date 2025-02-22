document.addEventListener("DOMContentLoaded", function () {
    const projects = [
      {
        title: "CSV Data Agent using DeepSeek-R1",
        description: [
          "Developed a natural language querying system for CSV data using a DeepSeek-R1-Distill-Qwen-32B and <strong>langchain.</strong>",
          "Integrated <strong>pandas</strong> and <strong>huggingface_hub</strong> to process structured queries and extract insights from CSV data.",
          "Implemented secure API access and customizable model parameters for optimized performance."
        ],
        link: "https://github.com/DataByteSun/CSV-Data-Agent-with-DeepSeek-R1"
      },
      {
        title: "Employee Attrition Prediction Using Decision Tree",
        description: [
           "Built a <strong>Decision Tree models</strong> to predict employee attrition using IBM HR Analytics dataset.",  
            "Preprocessed and encoded data, optimized model performance, and visualized key decision factors.",  
            "Achieved <strong>88% accuracy</strong>, providing insights into employee retention and turnover trends."
        ],
        link: ""
      },
      {
        title: "Data-Driven Analysis of Advertising Impact to Drive Sales Growth",
        description: [
          "Conducted <strong>EDA</strong> & built a <strong>linear regression model</strong> in <strong>Python, Scikit-Learn</strong> to analyze advertising impact.",
          "Created visualizations and performed residual analysis using <strong>Matplotlib</strong> & <strong>Seaborn</strong> for insights."
        ],
        link: "https://github.com/DataByteSun/Machine-Learning/blob/master/Regression/Notebooks/Simple_Linear_Regression.ipynb"
      },
      {
        title: "Cloud-Based Loan Portfolio Management and Dashboard",
        description: [
          "Built a <strong>BigQuery data pipeline</strong> for collecting, cleaning, and storing loan performance data.",
          "Developed a <strong>Looker Enterprise dashboard</strong> to visualize loan health metrics for real-time decision-making."
        ]
      },
      {
        title: "Research: Handwritten MODI script character recognition using Vision Transformer",
        description: [
          "Developed a <strong>Vision Transformer</strong> model in <strong>PyTorch</strong>, achieving 97.35% accuracy on MODI digits.",
          "Presented research at a <strong>Scopus-indexed conference</strong>, showcasing advancements in <strong>Python-based computer vision</strong>."
        ]
      },
      {
        title: "Interactive Gesture Rock, Paper, Scissors Game",
        description: [
          "The game uses hand gesture recognition via the webcam, allowing players to play using real-time hand signals.",
          "The AI opponent dynamically adjusts its strategy, making the game more challenging and engaging."
        ],
        link: "https://github.com/DataByteSun/Rock-Paper-Scissor"
      }
    ];
  
    const projectContainer = document.getElementById("projectAccordion");
  
    let projectHTML = "";
    projects.forEach((project, index) => {
      const projectId = `collapse${index + 1}`;
      projectHTML += `
        <div class="accordion-item shadow mb-3">
          <h2 class="accordion-header" id="heading${index + 1}">
            <button class="accordion-button ${index === 0 ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#${projectId}" aria-expanded="${index === 0}" aria-controls="${projectId}">
              ${project.title}
            </button>
          </h2>
          <div id="${projectId}" class="accordion-collapse collapse ${index === 0 ? "show" : ""}" aria-labelledby="heading${index + 1}" data-bs-parent="#projectAccordion">
            <div class="accordion-body">
              <ul style="list-style-type: square; padding-left: 20px;">
                ${project.description.map((desc) => `<li>${desc}</li>`).join("")}
                ${project.link ? `<li>Link: <a href="${project.link}" target="_blank">Click here to visit</a></li>` : ""}
              </ul>
            </div>
          </div>
        </div>
      `;
    });
  
    projectContainer.innerHTML = projectHTML;
  });
  