import React from 'react';
import AutoCopyright from '../components/AutoCopyright';



const Footer = () => (
  <footer>
    <div className="copyrightLogo">
      <p>
        <AutoCopyright year={2020} />
      </p>
    </div>
  </footer>
)

export default Footer