import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { Flex } from '@radix-ui/themes';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Flex className="nav-links" justify="between" align="center">
        <Link to="/" className="brand-name">
          Olivia Jarman
        </Link>
        <Flex align="center">
          <Flex gap="6" align="center">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/work" className="nav-link">
              Work
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </Flex>
          <Flex gap="4" align="center" ml="8">
            <a href="https://github.com/ocjarman" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center' }}>
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/oliviajarman/" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ display: 'flex', alignItems: 'center' }}>
              <Linkedin size={20} />
            </a>
          </Flex>
        </Flex>
      </Flex>
    </nav>
  );
};

export default NavBar; 