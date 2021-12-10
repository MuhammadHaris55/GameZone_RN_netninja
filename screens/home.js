import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";
import ReviewForm from "./reviewform";
import Card from "./shared/card";

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
    }

    const [modalOpen, setModalOpen] = useState(false);

    const [review, setReview] = useState([
        { title: 'Zelda, Breath of Fresh Air', body: 'Lorem ipsum', rating: '5', key: '1'},
        { title: 'Gotta catch them all (again)', body: 'Lorem ipsum', rating: '4', key: '2'},
        { title: 'Not So "Finaly" Fantasy', body: 'Lorem ipsum', rating: '3', key: '3'},
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReview((currentReview) => {
            return [review, ...currentReview ]
        })
        setModalOpen(false)
    }

    return(
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={{ ...styles.modalToggle, ...styles.modalClose }} onPress={() => setModalOpen(false)}>
                            <Text>X</Text>
                        </TouchableOpacity>
                        <ReviewForm addReview={addReview} />
                    </View>
                {/* </TouchableWithoutFeedback> */}
            </Modal>

            <TouchableOpacity style={styles.modalToggle} onPress={() => setModalOpen(true)}>
                <Text>-|-</Text>
            </TouchableOpacity>
            <FlatList 
                data={ review }
                renderItem={( { item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
})