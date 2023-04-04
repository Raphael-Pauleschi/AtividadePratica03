import react from 'react'
import {Button} from 'react-native'

export default ({buttonText}) =>{
  function executar(){
    console.warn('Estou vivo e forte')
  }

  return(
    <Button
    title={buttonText}
    onPress={executar()}/>
  )
}