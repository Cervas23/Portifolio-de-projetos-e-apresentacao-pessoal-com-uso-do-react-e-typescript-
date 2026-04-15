import { motion } from 'motion/react';
import styles from './skills.module.css';

export const Skills = () => {

    const skills = [
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'React & Next.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'IA/Machine Learning', level: 75 },
        { name: 'SQL', level: 70 },
        { name: 'Versionamento', level: 65 }
    ];

    return (
        <section id="habilidades" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.textAba}>
                    // Stack técnico
                    </div>
                    <h2 className={styles.title}>
                        <span style={{ color: 'var(--terminal-green)' }}>&gt;</span> Habilidades
                    </h2>

                    <div className={styles.containerBar}>
                        {skills.map((skill, idx) => (
                            <motion.div
                            key={idx}
                            className={styles.item}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            >
                                <div className={styles.header}>
                                    <span className={styles.name}>
                                    {skill.name}
                                    </span>
                                    <span className={styles.level}>
                                    {skill.level}%
                                    </span>
                                </div>
                                <div className={styles.bar}>
                                    <motion.div
                                    className={styles.progress}
                                    style={{ backgroundColor: 'var(--terminal-green)' }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: idx * 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}