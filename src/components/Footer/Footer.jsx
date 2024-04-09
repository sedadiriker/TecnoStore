import "./Footer.css"
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const contactPage = location.pathname === '/contact';
  const footerClass = contactPage ? 'footer-contact' : '';

  return (
    <footer className={`your-default-footer-class ${footerClass}`}>
      <p>© CopyRight 2024 | SedaDiriker</p>
    </footer>
  )
}

export default Footer
