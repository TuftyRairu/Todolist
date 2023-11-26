import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './task';
import { Icon } from '@rneui/base';

const ToTask = () => {
    const [task, setTask] = useState();
    const [newtask, setNewTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
    }

    const handleEditTask = (index, newtask) => {
        const taskToEdit = [...taskItems]; 
        taskToEdit.splice(index, 1, newtask)
        setTaskItems(taskToEdit);
    }; 

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={{justifyContent:'space-between',height: '95%'}}>
            <View style={styles.items}>
            {/* items */}
            {
                taskItems.map((item, index) => {
                    return <Tasks key={index} text={item} delete={() => completeTask(index)} edit={handleEditTask}>
                    </Tasks>
                })
            }
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} value={task} placeholder={'Write a Task'} onChangeText={text => setTask(text)}/>

                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}><Icon name='add' color='black'/></Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        paddingTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        backgroundColor: '#E7BCDE',
        borderRadius: 5,
        borderColor: '#BB9CC0',
        borderWidth: 1,
        width: 270,
    },
    addWrapper: {
        width: 55,
        height: 55,
        backgroundColor: '#E7BCDE',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#BB9CC0',
        borderWidth: 1,
    },
    addText: {
        
    },
});

export default ToTask;