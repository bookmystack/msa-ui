import React from 'react';

const Services = () => {
  // Based on [cite: 2, 41]
  return (
    <div>
      <h2>Services</h2> {/* [cite: 2] */}
      <section>
        <h3>Accreditation Services</h3> {/* [cite: 2] */}
        <p>Details about accreditation services for silk industry stakeholders.</p>
        {/* Content not detailed */}
      </section>
      <section>
        <h3>Consultancy Services</h3> {/* [cite: 2] */}
        <p>Expert consultancy for various aspects of sericulture, silk processing, and marketing. [cite: 16, 17]</p>
        {/* Content not detailed beyond leadership expertise */}
      </section>
      <section>
        <h3>Training Centres</h3> {/* [cite: 2, 41] */}
        <p>We collaborate with and support training initiatives at:</p>
        <ul>
          <li>KVK, Jalana [cite: 41]</li>
          <li>RSETI [cite: 41]</li>
          <li>Biloli, Nanded [cite: 41]</li>
        </ul>
        <p>Providing hands-on training and education to farmers and stakeholders. [cite: 12]</p>
      </section>
    </div>
  );
};

export default Services;
