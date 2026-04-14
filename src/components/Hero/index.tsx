import { motion } from 'motion/react';
import styles from "./hero.module.css"

export const Hero = () => {
    return (
        <section id="sobre" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.textAba}>
                    // Desenvolvedor front-end
                    </div>

                    <h1 className={styles.title}>
                        <span style={{ color: 'var(--terminal-green)' }}>&gt;</span> Lucas Cervantes Luz
                    </h1>

                    <div className={styles.grid}>
                        <div>
                            <p className={styles.text}>
                            Desenvolvedor com mais de 5 anos de experiência criando soluções digitais escaláveis e eficientes. Especializado em desenvolvimento web moderno com foco em performance, experiência do usuário e código limpo.
                            </p>
                            <p className={styles.text}>
                            Ao longo da minha carreira, trabalhei em projetos de diversos segmentos, desde startups até empresas consolidadas, sempre buscando entregar valor através de tecnologia. Tenho experiência com arquitetura de software, desenvolvimento full stack e liderança técnica de equipes.
                            </p>
                            <p className={styles.text}>
                            Apaixonado por resolver problemas complexos e transformar ideias em produtos funcionais que impactam positivamente a vida das pessoas.
                            </p>
                        </div>

                        <div className={styles.left}>
                            <div>
                                <div className={styles.textoCod}>
                                    const experiencia = {'{'}
                                </div>
                                <div className={styles.textoCod}>
                                    <div>
                                    <span className={styles.left}>anos:</span> <span style={{ color: 'var(--terminal-blue)' }}>5+</span>,
                                    </div>
                                    <div>
                                    <span className={styles.left}>projetos:</span> <span style={{ color: 'var(--terminal-blue)' }}>30+</span>,
                                    </div>
                                    <div>
                                    <span className={styles.left}>localização:</span> <span style={{ color: 'var(--terminal-green)' }}>"Brasil"</span>,
                                    </div>
                                    <div>
                                    <span className={styles.left}>disponível:</span> <span style={{ color: 'var(--terminal-purple)' }}>true</span>
                                    </div>
                                </div>
                                <div className={styles.textoCod} style={{ marginBottom: '2.5rem' }}>
                                    {'}'};
                                </div>
                            </div>

                            <div className={styles.box}>
                                <div className={styles.subtext}>
                                    // Especialidades
                                </div>
                                <div className={styles.tags}>
                                    {['Frontend', 'Backend', 'Dados', 'Análise'].map((spec, idx) => (
                                    <span
                                        key={idx}
                                        className={styles.tag}
                                    >
                                        {spec}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <a
                            href="#contato"
                            className={styles.primaryBtn}
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}
                        >
                            Entrar em contato
                        </a>
                        <a
                            href="#projetos"
                            className={styles.secondaryBtn}
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}
                        >
                            Ver projetos
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};