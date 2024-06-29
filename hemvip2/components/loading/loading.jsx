import styles from "./styles.module.css"
import cn from "clsx"

const Loading = ({ className, color = "#000" }) => {
  return (
    <span className={cn(styles.loading, className)}>
      <span className="bg-current" />
      <span className="bg-current" />
      <span className="bg-current" />
    </span>
  )
}

export default Loading
