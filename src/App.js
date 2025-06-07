import React from 'react';
import './App.css'; // You'll create this for basic styling

import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import OperationalAreas from './components/OperationalAreas';
import EcosystemPartners from './components/EcosystemPartners';
import Memberships from './components/Memberships';
import EventsAndNews from './components/EventsAndNews';
import KnowledgeHub from './components/KnowledgeHub';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="about">
          <AboutUs />
        </section>
        <hr />
        <section id="operational-areas">
          <OperationalAreas />
        </section>
        <hr />
        <section id="ecosystem-partners">
          <EcosystemPartners />
        </section>
        <hr />
        <section id="memberships">
          <Memberships />
        </section>
        <hr />
        <section id="events-news">
          <EventsAndNews />
        </section>
        <hr />
        <section id="knowledge-hub">
          <KnowledgeHub />
        </section>
        <hr />
        <section id="services">
          <Services />
        </section>
        <hr />
        <section id="contact">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
