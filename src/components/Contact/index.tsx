import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './contact.module.css';
import { useForm } from "../../hooks/useForm";

export const Contact = () => {
    const { form, handleChange, resetForm } = useForm();

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    alert("Mensagem enviada com sucesso!")

    resetForm()
  }

    return (
        <section id="contato" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.textAba}>
                    // Vamos conversar
                    </div>
                    <h2 className={styles.title}>
                        <span style={{ color: 'var(--terminal-green)' }}>&gt;</span> Contato
                    </h2>

                    <div className={styles.grid}>
                        <div>
                            <p className={styles.text}>
                            Estou sempre aberto a novos projetos e oportunidades. Entre em contato através dos canais abaixo ou envie uma mensagem diretamente.
                            </p>

                            <div className={styles.contactInfo}>
                                <div className={styles.contactLine}>
                                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                                    <a
                                        href="mailto:luz.lcervantes23@gmail.com"
                                        className={styles.contactText}
                                    >
                                        luz.lcervantes23@gmail.com
                                    </a>
                                </div>
                                <div className={styles.contactLine}>
                                    <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
                                    <a
                                        href="https://github.com/Cervas23"
                                        className={styles.contactText}
                                    >
                                        github.com/Cervas23
                                    </a>
                                </div>
                                <div className={styles.contactLine}>
                                    <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon}/>
                                    <a
                                        href="https://www.linkedin.com/in/lucas-cervantes-luz/"
                                        className={styles.contactText}
                                    >
                                        linkedin.com/in/lucas-cervantes-luz/
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formCampo}>
                                <label className={styles.inputText}>
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div className={styles.formCampo}>
                                <label className={styles.inputText}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={styles.input}
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Seu email"
                                />
                            </div>
                            <div className={styles.formCampo}>
                                <label className={styles.inputText}>
                                    Mensagem
                                </label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    className={styles.textArea}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Sua mensagem"
                                />
                            </div>
                            <button
                            type="submit"
                            className={styles.button}
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