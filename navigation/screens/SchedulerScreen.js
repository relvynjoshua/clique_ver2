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
  TextInput,
  StatusBar,
  ScrollView
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import color from '../../assets/colors'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('window');

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
        <StatusBar backgroundColor={color.first} barStyle={"light-content"}/>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.header1}>
                    <Text style={styles.logo}>.Clique</Text>
                </View>

                <View style={styles.header2}>
                    <Text style={styles.title}>Calendar</Text>
                </View>
            </View>

            <View style={styles.main}>
                <View style={styles.section1}>
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
                </View>

                <View style={styles.section2}>
                    <View style={{ flex: 1, paddingHorizontal: 16, }}>
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
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    /* Container and Sections */
  container: {
    height: hp(100),
    backgroundColor: color.white,
  },
  header: {
    height: hp(10),
    display: 'flex',
    flexDirection: 'row',
  },
  header1: {
    width: wp(50),
    backgroundColor: color.first,
    justifyContent: 'center',
  },
  header2: {
    width: wp(50),
    backgroundColor: color.first,
    justifyContent: 'center',
  },
  main: {
    height: hp(70),
    backgroundColor: color.white,
  },
  section1: {
    height: hp(10),
    backgroundColor: color.white,
    justifyContent: 'center',
  },
  section2: {
    height: hp(60),
    backgroundColor: color.white,
  },
  footer: {
    height: hp(20),
    backgroundColor: color.white,
  },

  /* Header */
  logo: {
    fontSize: hp(3.4),
    color: color.black,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: hp(2),
  },
  title: {
    fontSize: hp(3.4),
    color: color.black,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: hp(2),
  },

  /* Display */
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
    borderColor: color.grey,
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  
  /* Date Slider */
  picker: {
    flex: 1,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: hp(3),
    fontWeight: '700',
    color: color.first,
    marginBottom: hp(1),
  },
  content: {
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
    height: 60,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: color.grey,
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemWeekday: {
    fontSize: hp(1.6),
    fontWeight: '500',
    color: '#737373',
    marginBottom: 1,
  },
  itemDate: {
    fontSize: hp(1.6),
    fontWeight: '600',
    color: color.black,
  },

  /* Agenda Modifier */
  input: {
    paddingVertical: 8,
    paddingHorizontal: 8, 
    borderColor: color.first, 
    borderWidth: 4,
    borderRadius: 6, 
    fontSize: hp(2),
    marginLeft: 10,
    marginRight: 10,
    marginTop: hp(1),
  },
  text: {
    alignItems: 'center',
    color: color.black,
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: color.first,
    marginLeft: 10,
    marginRight: 10,
    marginTop: hp(1),
  },
  btnText: {
    fontSize: hp(2),
    lineHeight: 26,
    fontWeight: '600',
    color: color.white,
  },

  /* Add, Edit, Delete */
  task: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginTop: hp(.4),
    marginBottom: hp(.4), 
    fontSize: hp(2), 
  },
  itemList: {
    margin: hp(1),
    color: '#000',
    fontSize: hp(2),
  },
  taskButtons: { 
    flexDirection: "row", 
  }, 
  editButton: { 
    marginRight: 15,
    textAlign: 'center', 
    color: color.black, 
    fontSize: hp(2), 
    backgroundColor: color.grey,
    width: 70,
    height: 30,
    borderRadius: 6,
  }, 
  deleteButton: { 
    marginRight: 20, 
    textAlign: 'center', 
    color: "#AD0500", 
    fontSize: hp(2), 
    backgroundColor: color.grey,
    width: 90,
    height: 30,
    borderRadius: 6,
  },
});