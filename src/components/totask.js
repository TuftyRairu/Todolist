import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Overlay } from '@rneui/themed';
import Tasks from './task';

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
        <View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} value={task} placeholder={'Write a Task'} onChangeText={text => setTask(text)}/>

                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            <View style={styles.items}>
            {/* items */}
            {
                taskItems.map((item, index) => {
                    return <Tasks key={index} text={item} delete={() => completeTask(index)} edit={handleEditTask}>
                    </Tasks>
                })
            }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        paddingTop: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        backgroundColor: '#93B1A6',
        borderRadius: 5,
        borderColor: '#84A7A1',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#93B1A6',
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#84A7A1',
        borderWidth: 1,
    },
    addText: {
        
    },
});

export default ToTask;