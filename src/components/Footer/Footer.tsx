import React from 'react';
import Navigation from '@components/Navigation/Navigation';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <h6>© {(new Date()).getFullYear()} Miłosz Frejnik</h6>
      <Navigation />
    </footer>
  )
}
