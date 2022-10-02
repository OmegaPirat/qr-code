import styled from 'styled-components'
import QRCard from './QRCard'

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: hsl(212, 45%, 89%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`

const App = (): JSX.Element => {
  return (
    <AppWrapper>
      <QRCard/>
    </AppWrapper>
  )
}

export default App
