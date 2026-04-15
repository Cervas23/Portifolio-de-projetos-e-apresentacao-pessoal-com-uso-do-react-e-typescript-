import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import style from './header.module.css';

export const Header = () => {

    const [open, setOpen] = useState(false)

    // trava scroll quando menu aberto
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto"
    }, [open])

    const [activeSection, setActiveSection] = useState('sobre');

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={style.container}>
            <div className={style.inner}>
                <div className={style.row}>
                    <motion.div
                    className={style.logo}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    >
                    <FontAwesomeIcon icon={faTerminal} style={{ color: 'var(--terminal-green)' }} />
                    <span>
                        ~/dev/portfolio
                    </span>
                    </motion.div>

                    <nav className={style.nav}>
                        {['sobre', 'projetos', 'habilidades', 'contato'].map((item, idx) => (
                            <motion.button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`${style.link} ${
                                activeSection === item ? style.active : ''
                            }`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            >
                            {item}
                            </motion.button>
                        ))}
                    </nav>

                    {/* Botão hamburguer */}
                    <button
                        className={`${style.menuButton} ${open ? style.open : ""}`}
                        onClick={() => setOpen(!open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Overlay */}
                    <div
                        className={`${style.overlay} ${open ? style.show : ""}`}
                        onClick={() => setOpen(false)}
                    />

                    {/* Menu lateral */}
                    <aside className={`${style.sidebar} ${open ? style.show : ""}`}>
                        <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
                        <a href="#projetos" onClick={() => setOpen(false)}>Projetos</a>
                        <a href="#habilidades" onClick={() => setOpen(false)}>Habilidades</a>
                        <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
                    </aside>
                </div>
            </div>
        </header> 
    );
}