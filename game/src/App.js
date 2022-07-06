import { useRef, useState } from "react"
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Text from "./components/Text/Text";
import Card from "./ui/Card/Card";
import Wrapper from "./ui/Wrapper/Wrapper";
import classes from "./Global.module.css";
import Center from "./components/Center/Center";

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
      <Center className={classes.container}>
      <Card className={classes.card1}>
        <Text className={classes.balance_text}> Իմ հաշիվ  <span className={classes.balance_number}> {balance}</span> </Text>
      </Card>
       <Card className={classes.card2}>
        <Text className={classes.coin}> Խաղադրույք </Text>
        <br></br>
        <Input className={classes.coin_input} propsRef={coinRef} type='number' />
        </Card>
        <br></br>
        <Card className={classes.card3}>
        <Text className={classes.num_guess}> Իմ թիվը </Text>
        <br></br>
        <Input className={classes.num_guess_input} propsRef={guessNumRef} type='number' />
        </Card>
        <Button className={classes.play} onClick={onPlayHandler}> Խաղալ </Button>
        
       <Card className={classes.card4}>
        <Text className={classes.text}> Computer Number  </Text>
        <Text className={classes.text}> {computerNum} </Text>
       </Card>
       </Center>
    </Wrapper>
  );
}

export default App;