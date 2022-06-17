import React, { useCallback, useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
import styles from './toDoCard.styles';

const toDo = (props) => {
    const [text, setText] = useState("");

    const [toDoList, setToDoList] = useState([]);
    const addToDo = useCallback(() => {
        setToDoList([...toDoList, { isDone: false, title: text }]);
        setText("");
    }, [text]);

    const markItemAsDone = useCallback((item) => {
        const list = toDoList;
        const itemIndex = list.findIndex(s => s.title === item.title);
        list[itemIndex].isDone = true;
        setToDoList([...list]);
    },[toDoList])

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.title}>Yapılacaklar</Text>
                <Text style={styles.number}>{toDoList.filter(s => !s.isDone).length}</Text>
            </View>
            <View style={styles.text_container}>
                {toDoList.map(item => <View style={styles.toDo_container}>
                    <Text style={[{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 25,
                    flexDirection: "row",
                    margin: 10,
                }, item.isDone ? {
                    textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid'
                } : {}]}>{item.title}</Text >
              {!item.isDone ?   <TouchableOpacity onPress={() => markItemAsDone(item)}>
                    <Text style={styles.delete_toDo}>X</Text>
              </TouchableOpacity> : null}
                </View>)}
            </View>
            <View style={styles.input_container}>
                <TextInput style={styles.text_Input}
                    placeholder="Yapılacak..."
                    placeholderTextColor={'gray'}
                    value={text}
                    onChangeText={setText}



                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={addToDo}
                >
                    <Text style={styles.button_text}> Kaydet </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default toDo;