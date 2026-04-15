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
                            Desenvolvedor em transição para a área de software, com sólida formação em Engenharia de Controle e Automação e forte base em raciocínio lógico, análise e resolução de problemas complexos. Atualmente focado no desenvolvimento web moderno, com atenção à performance, organização de código e experiência do usuário.
                            </p>
                            <p className={styles.text}>
                            Ao longo da minha trajetória na engenharia, adquiri experiência com programação e automação, habilidades que hoje aplico no desenvolvimento de aplicações web. Possuo conhecimentos em HTML, CSS, JavaScript, TypeScript, bancos de dados e Python, buscando sempre evoluir tecnicamente e construir soluções bem estruturadas e eficientes.
                            </p>
                            <p className={styles.text}>
                            Tenho facilidade de aprendizado, boa organização e comprometimento com boas práticas de desenvolvimento. Valorizo o trabalho em equipe e estou em constante evolução, com o objetivo de transformar conhecimento técnico em soluções reais que gerem impacto positivo.
                            </p>
                        </div>

                        <div className={styles.left}>
                            <div>
                                <div className={styles.textoCod}>
                                    const experiencia = {'{'}
                                </div>
                                <div className={styles.textoCod}>
                                    <div>
                                        <span className={styles.left}>foco:</span> <span style={{ color: 'var(--terminal-blue)' }}>"Desenvolvimento Web"</span>,
                                    </div>
                                    <div>
                                        <span className={styles.left}>background:</span> <span style={{ color: 'var(--terminal-blue)' }}>"Engenharia de Controle e Automação"</span>,
                                    </div>
                                    <div>
                                        <span className={styles.left}>especialidade:</span> <span style={{ color: 'var(--terminal-green)' }}>"Resolução de problemas e lógica"</span>,
                                    </div>
                                    <div>
                                        <span className={styles.left}>stack:</span> <span style={{ color: 'var(--terminal-green)' }}>["HTML", "CSS", "JavaScript", "TypeScript", "SQL"]</span>,
                                    </div>
                                    <div>
                                      <span className={styles.left}>status:</span> <span style={{ color: 'var(--terminal-green)' }}>"Em evolução constante"</span>,
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