import Container from 'components/container'
import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'

const Header = () => {
  return (
    <Container large>
      <header>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </header>
    </Container>
  )
}
export default Header
