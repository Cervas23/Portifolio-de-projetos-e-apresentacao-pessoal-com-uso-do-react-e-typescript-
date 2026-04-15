import styles from "./cardproj.module.css"

type Props = {
  techs: string[]
}

export const CardProject = ({ techs }: Props) => {
  return (
    <>
        <div className={styles.tags}>
          {techs.map((tech, techIdx) => (
            <span
              key={techIdx}
              className={styles.tag}
            >
              {tech}
            </span>
          ))}
        </div>
    </>
  )
}