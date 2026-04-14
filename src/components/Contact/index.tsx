import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <section id="contato" className="py-24 px-6 bg-muted/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-3" style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--terminal-gray)' }}>
                    // Vamos conversar
                    </div>
                    <h2 className="mb-16" style={{ fontFamily: 'var(--font-mono)', fontSize: '36px', fontWeight: 600 }}>
                        <span style={{ color: 'var(--terminal-green)' }}>&gt;</span> Contato
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-muted-foreground mb-8" style={{ lineHeight: 1.7 }}>
                            Estou sempre aberto a novos projetos e oportunidades. Entre em contato através dos canais abaixo ou envie uma mensagem diretamente.
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="mailto:seu@email.com"
                                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                    style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    seu@email.com
                                </a>
                                <a
                                    href="https://github.com/seuusuario"
                                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                    style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                    github.com/seuusuario
                                </a>
                                <a
                                    href="https://linkedin.com/in/seuusuario"
                                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                    style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                    linkedin.com/in/seuusuario
                                </a>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                                    style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                                    style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                                    Mensagem
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                    style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}
                                />
                            </div>
                            <button
                            type="submit"
                            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md transition-all hover:opacity-90"
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}
                            >
                            Enviar mensagem
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}