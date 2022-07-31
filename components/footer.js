import Container from '@/components/container'
import Logo from '@/components/logo'
import Social from '@/components/Social'
import styles from 'styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.felxContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  )
}
export default Footer
