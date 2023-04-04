import react from 'react'
import {Button} from 'react-native'

export default comp =>{
  function executar(){
    console.warn('Estou vivo e forte')
  }

  return(
    <Button
    title="Aperte"
    onPress={executar()}/>
  )
}