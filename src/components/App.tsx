import DieSache from './DieSache'
import styled from 'styled-components'

const AppWrapper = styled.div`
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      margin: 0;
      padding: 0;
    `

const App = (): JSX.Element => {
  return (
        <AppWrapper>
            <DieSache/>{/* This is a placeholder and should be removed */}
            {/* The app content goes here */}
        </AppWrapper>
  )
}

export default App
