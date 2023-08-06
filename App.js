import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, 
  TouchableOpacity, Keyboard, ScrollView, Modal } from 'react-native';
import Task from './components/Task';
import { SimpleModal } from './components/SimpleModal';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [inputError, setInputError] = useState('');
  const [isModalVisible, setisModalVisible] = useState(false);

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const [sub, setSub] = useState([]);
  const [subItems, setSubItems] = useState([]);

  const decreaseSet = (sub) => {
    sub[2] = parseInt(sub[2])-1;
  }

  const addingSub = () => {
    setSubItems([...subItems, [input1, input2, input3, input4]]);
    setSub([]); 
    changeModalVisible(false);
}


  const handleAddTask = () => {
    Keyboard.dismiss();
    if ((task === null) || (task === undefined)) {
      setInputError('Workout has to be at least one character')
    }
    else {
      setTaskItems([...taskItems, task]);
      setTask(null);
      setInputError('')
    }
    
  }


  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

    let itemsCopy2 = [...subItems];
    itemsCopy2.splice(index, 1);
    setSubItems(itemsCopy2);
  }

  const completeSub = (index) => {
    let itemsCopy = [...subItems];
    itemsCopy.splice(index, 1);
    setSubItems(itemsCopy);
  }


  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's workout</Text>
        <View style={styles.items}>
          <ScrollView>
            {
              taskItems.map((item, index) => {
                return (
                  <Task key={index} text={item}
                  onDelete={() => completeTask(index)}      
                  modalChange={() => changeModalVisible(true)}
                  varname={index}
                  subItems={subItems}
                  decreaseSet={decreaseSet}
                  />
                );
              })
            }
          </ScrollView>
          
          
          <Modal
            animationType='fade'
            visible={isModalVisible}
          >

            <SimpleModal
              onRequestClose={() => changeModalVisible(false)}
              setInput1={setInput1}
              setInput2={setInput2}
              setInput3={setInput3}
              setInput4={setInput4}
              addingSub={addingSub}
            />
          </Modal>
          
          <Text style={styles.error}>{inputError}</Text>
        </View>
        
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a workout'} value={task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
              
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
  },
  error: {
    textAlign: 'center',
    color: 'red'
  }
});
