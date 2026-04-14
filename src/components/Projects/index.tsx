import { motion } from 'motion/react';
import { projects } from '../../data/dt-projects';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./projects.module.css"

export const Projects = () => {
  return (
    <section id="projetos" className={styles.section}>
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.textAba}>
                // Trabalhos recentes
                </div>
                <h2 className={styles.title}>
                <span style={{ color: 'var(--terminal-green)' }}>&gt;</span> Projetos
                </h2>

                <div className={styles.list}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            >
                            <div className={styles.grid}>
                                <div className={styles.imageWrapper}>
                                <img
                                    src={project.imagem}
                                    alt={project.title}
                                    className={styles.image}
                                />
                                </div>

                                <div className={styles.content}>
                                    <div className={styles.innerContent}>
                                        <h3 className={styles.projectTitle}>
                                        {project.title}
                                        </h3>
                                        <a
                                        href={project.link}
                                        className={styles.link}
                                        >
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </a>
                                    </div>

                                    <p className={styles.projectDesc}>
                                        {project.description}
                                    </p>

                                    <div className={styles.tags}>
                                        {project.techs.map((tech, techIdx) => (
                                            <span
                                                key={techIdx}
                                                className={styles.tag}
                                                style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
  )
}
