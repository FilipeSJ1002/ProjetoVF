import { Box, Button, HStack, Input, VStack, Text, useToast, Center, Flex } from "@chakra-ui/react"
import { useState } from "react"

function ToDo() {
    const [input, setInput] = useState('')
    const [todo, setTodo] = useState<any>([])
    const toast = useToast()

    const addTodo = () => {
        if(input===''){
            toast({status: 'error', description: 'Não foi possível enviar um valor vazio', duration: 3000})
        }
        else{setTodo([...todo, input])}}

    return (
      <Box mt={'15px'} alignItems={'center'}>
        <Center flexDirection={'column'}>
        <Flex mb={'10px'}>
            <Input mr={'5px'} onChange={(e) => {setInput(e.target.value)}}/>
            <Button colorScheme="gray" onClick={() => {addTodo()}}>Adicionar</Button>
        </Flex>
        <VStack>
            {todo.map((todo: any) => (<HStack key={todo}><Text>{todo}</Text></HStack>))}
        </VStack>
        </Center>
      </Box>
    )
  }
  
  export default ToDo