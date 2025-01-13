import styles from '../components/LayoutL.module.css'
import Logo from '../assets/image.png'

const LayoutL = () => {
  return (
    <div className={styles.content}>
      <img src={Logo}/>
    </div>
  )
}

export default LayoutL