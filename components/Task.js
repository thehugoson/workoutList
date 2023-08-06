import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Category from './Category';

const Task = ({ text, onDelete, modalChange, varname, subItems, decreaseSet }) => {
    return (
        
      <TouchableOpacity>
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{text}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>

                <TouchableOpacity onPress={onDelete}>
                    <View style={styles.addWrapper}>
                    <Text>X</Text>
                    </View>
                </TouchableOpacity>
            </View>
          
          
          
        </View>
        <Category
        
        modalChange={() => modalChange()}
        varname={varname}
        subItems={subItems}
        decreaseSet={decreaseSet}
        onDelete={onDelete}
        />
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
        
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText: {
        maxWidth: '80%',

    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    },
    addWrapper: {
        width: 30,
        height: 30,
        backgroundColor: '#FFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      }
});

export default Task;