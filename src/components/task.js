import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Button, Icon, Overlay } from "@rneui/base";
import { useState } from "react";

const Tasks = (props) => {

    const [visible, setVisible] = useState(false);

    const [editText, setText] = useState('');

    const toggleOverlay = () => {
        setVisible(!false);
    }

    const editNotes = () => {
        if (editText === '') {
            Alert.alert("empty tasks", "Please replace new tasks")
        }
        else {
            setVisible(false)
            props.edit(props.index, editText)
        }
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.itemRight}>
                <TouchableOpacity onPress={() => toggleOverlay()} style={styles.edit}>
                    <Icon 
                        name='edit'
                        color='#232D3F'
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={props.delete} style={styles.edit}>
                    <Icon 
                        name='delete'
                        color='#232D3F'
                    />
                </TouchableOpacity>
            </View>

            <View>
                <Overlay overlayStyle={styles.overlay} isVisible={visible} onBackdropPress={toggleOverlay}>
                    <Text style={{ fontWeight: "bold" }}>{props.text}</Text>
                    <TextInput style={styles.oedit} value={editText} onChangeText={(text) => setText(text)}></TextInput>

                    {/** save edited Notes */}
                    <View style={{ flexDirection: "row", }}>
                        <Button style={styles.buttonSave} color={"green"} onPress={() => editNotes()}>
                            Save
                            <Icon name="save" color="white"></Icon>
                        </Button>
                        {/** cancel button */}
                        <Button style={styles.buttonSave} color={"red"} onPress={() => setVisible(false)}>
                            cancel
                            <Icon name="cancel" color="white"></Icon>
                        </Button>
                    </View>
                </Overlay>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#93B1A6',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '80%',
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#008170',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '100%',
    },
    edit: {
        marginRight: 1,
    },
    buttonSave: {
        width: 100,
        margin: 5
    },
    overlay: {
        padding: 30,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center"
    },
    oedit: {
        color: "white",
        fontWeight: "500",
        backgroundColor: "#93B1A6",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        padding: 10,
        width: 200,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
});

export default Tasks;