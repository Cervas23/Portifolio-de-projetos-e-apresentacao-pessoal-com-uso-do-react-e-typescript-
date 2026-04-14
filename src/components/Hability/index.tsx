import { motion } from 'motion/react';

export const Hability = () => {

    const skills = [
        { name: 'JavaScript/TypeScript', level: 90 },
        { name: 'React & Next.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'SQL/NoSQL', level: 70 },
        { name: 'Docker & CI/CD', level: 65 }
    ];

    return (
        <section id="habilidades" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-3" style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--terminal-gray)' }}>
                    // Stack técnico
                    </div>
                    <h2 className="mb-16" style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', fontWeight: 600 }}>
                        <span style={{ color: 'var(--terminal-green)' }}>&gt;</span> Habilidades
                    </h2>

                    <div className="space-y-8">
                        {skills.map((skill, idx) => (
                            <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
                                    {skill.name}
                                    </span>
                                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--terminal-gray)' }}>
                                    {skill.level}%
                                    </span>
                                </div>
                                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                    className="h-full rounded-full"
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