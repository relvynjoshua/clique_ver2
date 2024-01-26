import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

export default function Example() {
  // date slider
  const swiper = useRef();
  const [value, setValue] = useState(new Date());
  const [week, setWeek] = useState(0);

  const weeks = React.useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('week');

    return [-1, 0, 1].map(adj => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  // constants for adding, editing, and deleting agenda
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]); 
  const [editIndex, setEditIndex] = useState(-1); 

  // add agenda function
  const handleAddTask = () => { 
    if (task) { 
      const updatedTasks = [...tasks];
      if (editIndex !== -1) { 
        updatedTasks[editIndex] = { task, date: value }; 
        setEditIndex(-1); 
      } else { 
        updatedTasks.push({ task, date: value });
      } 
  
      setTasks(updatedTasks);
      setTask(""); 
  
      try {
        AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
      } catch (error) {
        console.error('Error saving tasks to AsyncStorage:', error);
      }
    } 
  };

  // editing an agenda
  const handleEditTask = (index) => { 
    const taskToEdit = tasks[index]; 
    setTask(taskToEdit); 
    setEditIndex(index); 
  };

  // deleting an agenda
  const handleDeleteTask = (index) => { 
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1); 

    setTasks(updatedTasks);
    setTask('');

    try {
      AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving tasks to AsyncStorage:', error);
    }
  };

  // render the lists
  const renderItem = ({ item, index }) => ( 
    <View style={styles.task}> 
      <Text style={styles.itemList}>{item.task}</Text> 
      <View style={styles.taskButtons}> 
        <TouchableOpacity onPress={() => handleEditTask(index)}> 
          <Text style={styles.editButton}>Edit</Text> 
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => handleDeleteTask(index)}> 
          <Text style={styles.deleteButton}>Delete</Text> 
        </TouchableOpacity> 
    </View> 
  </View>
  );

  // async storage
  useEffect(() => {
    // Load tasks from AsyncStorage when the component mounts
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error('Error loading tasks from AsyncStorage:', error);
      }
    };

    loadTasks();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Calendar</Text>
        </View>

        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={ind => {
              if (ind === 1) {
                return;
              }
              setTimeout(() => {
                const newIndex = ind - 1;
                const newWeek = week + newIndex;
                setWeek(newWeek);
                setValue(moment(value).add(newIndex, 'week').toDate());
                swiper.current.scrollTo(1, false);
              }, 100);
            }}>
            {weeks.map((dates, index) => (
              <View
                style={[styles.itemRow, { paddingHorizontal: 16 }]}
                key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive =
                    value.toDateString() === item.date.toDateString();
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => setValue(item.date)}>
                      <View
                        style={[
                          styles.item,
                          isActive && {
                            backgroundColor: '#111',
                            borderColor: '#111',
                          },
                        ]}>
                        <Text
                          style={[
                            styles.itemWeekday,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.weekday}
                        </Text>
                        <Text
                          style={[
                            styles.itemDate,
                            isActive && { color: '#fff' },
                          ]}>
                          {item.date.getDate()}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>

        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
          <Text style={styles.subtitle}>{value.toDateString()}</Text>
          <View style={styles.placeholder}>
            <View style={styles.placeholderInset}>
              <FlatList
                  data={tasks.filter(item => moment(item.date).isSame(value, 'day'))}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput 
          style={styles.input} 
          placeholder=' New event '
          value={task}
          onChangeText={(text) => setTask(text)}
          />

          <TouchableOpacity
            onPress={handleAddTask}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Add</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // date slider

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#04BB9C',
    margin: 3,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  container: {
    flex: 1,
    paddingVertical: 50,
  },
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#04BB9C',
    marginBottom: 12,
  },
  header: {
    paddingHorizontal: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  footer: {
    marginTop: 'auto',
    paddingHorizontal: 16,
  },
  itemRow: {
    width: width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  },
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e3e3e3',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: '500',
    color: '#737373',
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },

  // agenda modifier

  input: {
    margin: 3,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 4, 
    borderColor: '#04BB9C', 
    borderRadius: 6, 
    fontSize: 18
  },
  text: {
    alignItems: 'center',
    color: '#004aad',
    fontSize: 22,
    fontWeight: 'bold',
  },

  //add, edit, and delete agenda

  task: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginTop: 1,
    marginBottom: 1, 
    fontSize: 18, 
  },
  itemList: {
    margin: 14,
    color: '#000',
    fontSize: 20,
  },
  taskButtons: { 
    flexDirection: "row", 
  }, 
  editButton: { 
    marginRight: 15,
    textAlign: 'center', 
    color: "#454655", 
    fontSize: 18, 
    backgroundColor: '#ccc',
    width: 70,
    height: 30,
    borderRadius: 6,
  }, 
  deleteButton: { 
    marginRight: 20, 
    textAlign: 'center', 
    color: "#AD0500", 
    fontSize: 18, 
    backgroundColor: '#ccc',
    width: 90,
    height: 30,
    borderRadius: 6,
  },
});