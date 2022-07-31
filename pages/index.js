import Container from 'components/container'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <Container>
      {/* imageOn = 論理属性として使用。imageOnが存在すればtrue、なければfalseとなる */}
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  )
}
