import styles from "./styles.module.css"
import cn from "clsx"

const Loading = ({ className }) => {
  return (
    <span className={cn(styles.loading, className)}>
      <span className="bg-current" />
      <span className="bg-current" />
      <span className="bg-current" />
    </span>
  )
}

export default Loading
