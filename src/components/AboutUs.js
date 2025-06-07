import React from 'react';
// Assuming images are in src/assets/images/
//import drMohiteImg from '../assets/images/dr_mohite.jpg'; // [cite: 13]
//import drGorantiwarImg from '../assets/images/dr_gorantiwar.jpg'; // [cite: 31]

const AboutUs = () => {
  return (
    <div>
      <h2>About Us</h2> {/* [cite: 2] */}
      
      <section>
        <h3>Vision & Mission</h3> {/* [cite: 2] */}
        <h4>Vision</h4> {/* [cite: 3] */}
        <p>Transform Maharashtra's Silk Industry by addressing/ tackling challenges, ensuring sustainability, fostering innovation, and strengthening market networks to drive growth. [cite: 3]</p>
        <h4>Mission Statement</h4>
        <ul>
          <li><strong>Address Challenges:</strong> Identify, analyse, and resolve key obstacles within the silk value chain to enhance efficiency and resilience. [cite: 3]</li>
          <li><strong>Promote Sustainability:</strong> Implement eco-friendly practices to ensure environmental responsibility and long-term viability of silk production. [cite: 4]</li>
          <li><strong>Foster Innovation:</strong> Encourage research and development of new technologies and techniques to elevate product quality and market appeal. [cite: 5]</li>
          <li><strong>Strengthen Market Networks:</strong> Build robust connections among producers, distributors, and consumers to create a more integrated and competitive market. [cite: 6]</li>
          <li><strong>Drive Economic Growth:</strong> Support the livelihoods of local communities by enhancing the silk industry’s contribution to the economy. [cite: 7]</li>
        </ul>
      </section>

      <section>
        <h3>Objectives</h3> {/* [cite: 2, 8] */}
        <ul>
          <li>Conduct comprehensive assessments of the silk value chain in Maharashtra to pinpoint inefficiencies and areas for improvement. [cite: 8]</li>
          <li>Establish guidelines for sustainable farming, processing, and distribution that minimize environmental impact. [cite: 9]</li>
          <li>Engage with Government agencies for allocation of resources for the development of innovative technologies and practices that enhance silk quality and production methods. [cite: 10]</li>
          <li>Organize workshops, trade fairs, and partnerships to connect stakeholders across the silk industry. [cite: 11]</li>
          <li>Provide hands on training, education and resources to new and existing sericulture farmers and other stakeholders to bring 1,00,000 acres under mulberry cultivation by the year 2030. [cite: 12]</li>
          <li>Improve skills across value chain to increase stakeholders' economic contribution. [cite: 12]</li>
        </ul>
      </section>

      <section>
        <h3>Leadership</h3> {/* [cite: 2, 13] */}
        <div>
          <h4>Dr. Raosaheb R. Mohite, PhD (USA)</h4> {/* [cite: 13] */}
          {/* <img src={drMohiteImg} alt="Dr. Raosaheb R. Mohite" style={{ width: '150px' }} /> {/* [cite: 13] */} */
          <p>Internationally recognized consultant with over 30 years of experience in the agri-food industry. [cite: 14] Doctorate in Food Science and Technology from Cornell University, USA. [cite: 15] Expertise covers food processing, post-harvest management, horticulture, animal husbandry, and sericulture. [cite: 17]</p>
        </div>
        <div>
          <h4>Dr. K. B. Chandra Shekar</h4> {/* [cite: 25] */}
          {/* Image for Dr. K. B. Chandra Shekar not provided in source, placeholder if available */}
          {/* <img src="path_to_dr_chandra_shekar_image.jpg" alt="Dr. K. B. Chandra Shekar" style={{width: '150px'}} /> */}
          <p>Seasoned scientist with over three decades of experience in the sericulture industry. [cite: 25] Expertise spans silkworm seed production, breed maintenance, and mulberry cultivation. [cite: 26] Significant contributions to research and development at CSR&TI, Mysore. [cite: 27]</p>
        </div>
        <div>
          <h4>Dr. Sunil Gorantiwar</h4> {/* [cite: 31] */}
          {/* <img src={drGorantiwarImg} alt="Dr. Sunil Gorantiwar" style={{ width: '150px' }} /> {/* [cite: 31] */} */
          <p>Ex-director of Research, Mahatma Phule Krishi Vidyapeeth, distinguished leader in Agricultural Engineering, specializing in irrigation management and sustainable water resource optimization. [cite: 32] Professor and Head of the Department of Irrigation and Drainage Engineering at MPKV, Rahuri. [cite: 33]</p>
        </div>
        <p>Mr. Rajesh Urkude</p> {/* [cite: 41] */}
        <p>Mr. Pravin Pawar</p> {/* [cite: 41] */}
        <p>Smt. Smita Jachak</p> {/* [cite: 41] */}
      </section>

      <section>
        <h3>Awards & Achievements</h3> {/* [cite: 2] */}
        <p>Details about awards and achievements will be listed here.</p>
        {/* Content for Awards & Achievements is not detailed in the document. */}
      </section>
    </div>
  );
};

export default AboutUs;
