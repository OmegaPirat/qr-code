import qrCodeImg from '../assets/image-qr-code.png'
import styled, { css } from 'styled-components'

type TextProps = {
  bold?: boolean,
  large?: boolean,
}

const Card = styled.div`
  max-width: 260px;
  width: 80%;
  background-color: hsl(0, 0%, 100%);
  padding: 15px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 10px 20px lightgray;
`

const TextWrapper = styled.main`
  text-align: center;
  padding: 0px;
`

const Text = styled.div<TextProps>`
  color: ${props => props.color};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-size: ${props => props.large ? '1.2rem' : '1rem'};
  margin: 10px;
`

const QRImg = styled.img
  `
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  `

const QRCard = (): JSX.Element => {
  return (
    <Card>
      <QRImg src={qrCodeImg}/>
      <TextWrapper>
        <Text color="black" bold large>Improve your front-end skills by building projects</Text>
        <Text color="hsl(220, 15%, 55%)">Scan the QR code to visit Frontend Mentor and take your coding skills to the
          next level</Text>
      </TextWrapper>
    </Card>
  )
}

export default QRCard
