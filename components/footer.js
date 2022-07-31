import Container from 'components/container'
import Logo from './logo'
import styles from 'styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.felxContainer}>
          <Logo />
        </div>
      </Container>
    </footer>
  )
}
export default Footer
