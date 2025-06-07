import React from 'react';

const Navbar = () => {
  // Basic navigation items based on the document [cite: 2]
  const navItems = [
    { name: 'About Us', link: '#about' },
    { name: 'Operational Areas', link: '#operational-areas' },
    { name: 'Ecosystem Partners', link: '#ecosystem-partners' },
    { name: 'Memberships', link: '#memberships' },
    { name: 'Events & News', link: '#events-news' },
    { name: 'Knowledge Hub', link: '#knowledge-hub' },
    { name: 'Services', link: '#services' },
    { name: 'Contact Us', link: '#contact' },
  ];

  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '1em', textAlign: 'center' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {navItems.map(item => (
          <li key={item.name} style={{ display: 'inline', margin: '0 10px' }}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
