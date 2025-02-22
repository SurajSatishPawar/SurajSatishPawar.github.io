document.addEventListener("DOMContentLoaded", function () {
    const certifications = [
      {
        title: "Business Analytics Graduate",
        issuer: "IBM",
        image: "images/certificates/BA_suraj.png",
        link: "https://www.credly.com/badges/0f395e8a-21c3-4187-979f-f8920d13a11a/linked_in?t=ra6fhd"
      },
      {
        title: "Google Cloud Data Analytics Certificate",
        issuer: "Google Cloud",
        image: "images/certificates/google_cloud_analytics.png",
        link: "https://www.credly.com/badges/bfa335be-f744-4744-ae4f-9c918d2000e5/public_url"
      },
      {
        title: "Data Science Job Simulation",
        issuer: "BCG",
        image: "images/certificates/BCG.png",
        link: null
      },
      {
        title: "DIAT Certified AI Professional",
        issuer: "DIAT, DRDO",
        image: "images/certificates/DIAT_Suraj.png",
        link: null
      },
      {
        title: "Generative AI with Large Language Models",
        issuer: "Coursera",
        image: "images/certificates/Gen-AI-with-LLM-Suraj-Pawar.png",
        link: "https://coursera.org/share/1de40d19f0c6649219175223d95365a9"
      },
      {
        title: "PyTorch Essential Training: Deep Learning",
        issuer: "LinkedIn Learning",
        image: "images/certificates/PyTorch-Training-Deep_Learning.png",
        link: "https://www.linkedin.com/learning/certificates/5f659906dfbf544d9da23e77406597215b82f29cebcf2d5dbba2379d51b11512?trk=share_certificate"
      }
    ];
  
    const carouselInner = document.querySelector(".carousel-inner");
    let htmlContent = "";
    
    certifications.forEach((cert, index) => {
      if (index % 3 === 0) htmlContent += `<div class="carousel-item ${index === 0 ? "active" : ""}"><div class="row">`;
  
      htmlContent += `
        <div class="col-lg-4 col-md-6">
          <div class="portfolio-box shadow" style="background-color: #f9f9f9;">
            <img src="${cert.image}" alt="${cert.title}" title="${cert.title}" class="img-fluid">
            <div class="portfolio-info">
              <div class="caption">
                <h4>${cert.title}</h4>
                <p>Issued by ${cert.issuer}</p>
                ${cert.link ? `<p><a href="${cert.link}" target="_blank" class="white-link">Click here to verify.</a></p>` : ""}
              </div>
            </div>
          </div>
        </div>
      `;
  
      if ((index + 1) % 3 === 0 || index === certifications.length - 1) htmlContent += `</div></div>`;
    });
  
    carouselInner.innerHTML = htmlContent;
  });
  