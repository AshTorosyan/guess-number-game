import { useRef, useState } from "react"
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Text from "./components/Text/Text";
import Card from "./ui/Card/Card";
import Wrapper from "./ui/Wrapper/Wrapper"

const App = () => {
  const [balance,setBalance] = useState(1000);
  const [computerNum, setComputerNum] = useState('');
  const coinRef = useRef('');
  const guessNumRef = useRef();

  const onPlayHandler = () => { 
    if(
         Number( coinRef.current.value ) > 49 
      && Number( coinRef.current.value  ) < Number(balance)
      && Number( guessNumRef.current.value) > 0 
      && Number( guessNumRef.current.value) < 11) {
        setComputerNum(Math.ceil(Math.random()  * 10))
        setBalance(balance - Number(coinRef.current.value));
        if(guessNumRef.current.value == computerNum) {
          setBalance( balance + (coinRef.current.value * 10))
        }
    }
  }

  return (
    <Wrapper>
      <Card>
        <Text> your balance is {balance} </Text>
      </Card>
       <Card>
        <Text> Coin </Text>
        <Input  propsRef={coinRef} type='number' />
        <Text> number you guess </Text>
        <Input propsRef={guessNumRef} type='number' />
        <Button onClick={onPlayHandler}> Play </Button>
       </Card>
       <Card>
        <Text> Computer Number  </Text>
        <Text> {computerNum} </Text>
       </Card>
    </Wrapper>
  )
}

export default App