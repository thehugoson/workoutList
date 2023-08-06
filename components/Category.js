import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Category = ({ modalChange, varname, subItems, decreaseSet, onDelete }) => {
    const [categoryColor, setCategoryColor] = useState('#FFF');

    const handleDecreaseSet = (sub) => {
        if (parseInt(sub[2]) === 0) {
            onDelete();
        } else {
            decreaseSet(sub);
            setCategoryColor('grey');
            setTimeout(() => {
            setCategoryColor('#FFF');
            }, (parseInt(sub[3])*1000));
        }
        
    };
    return (
        
      <TouchableOpacity>
        <View style={[styles.item, { backgroundColor: categoryColor }]}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                {subItems[varname] ? (
                    <Text style={styles.itemText}>
                    W:{subItems[varname][0]} R:{subItems[varname][1]} S:{subItems[varname][2]} RT:{subItems[varname][3]}
                    </Text>
                ) : (
                    <Text style={styles.itemText}>Add Data</Text>
                )}
                </View>

            {subItems[varname] ? (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={modalChange}>
                        <View style={styles.addWrapper}>
                            <Text>+</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDecreaseSet(subItems[varname])}>
                        <View style={styles.addWrapper}>
                            <Text>-</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={modalChange}>
                        <View style={styles.addWrapper}>
                            <Text>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}

            
        </View>
        
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
        backgroundColor: 'red',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText: {
        maxWidth: '90%',

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

export default Category;