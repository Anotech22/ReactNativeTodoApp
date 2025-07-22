
import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput, Image, Dimensions, Pressable } from 'react-native';
import React, { useState, useCallback, useMemo } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Calendar } from 'react-native-calendars'; 
import moment from 'moment'; 

const { width } = Dimensions.get('window'); 

const Plus = () => {
  const [modalVisible, setModalVisible] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD')); 
  const [showCalendarModal, setShowCalendarModal] = useState(false); 
  const [showTimePickerModal, setShowTimePickerModal] = useState(false); 
  const [finalDateTime, setFinalDateTime] = useState(new Date()); 

 
  const onDayPress = useCallback((day) => {
    setSelectedDate(day.dateString);
    
    setShowCalendarModal(false); 
    setShowTimePickerModal(true); 
  }, []);

  
  const handleTimeConfirm = (time) => {
    
    const combinedDateTime = moment(`${selectedDate} ${moment(time).format('HH:mm')}`).toDate();
    setFinalDateTime(combinedDateTime);
    // console.log("Date and Time chosen:", combinedDateTime);
    setShowTimePickerModal(false); // Hide time picker
    
  };

  const hideTimePicker = () => {
    setShowTimePickerModal(false);
  };

  
  const markedDates = useMemo(() => {
    return {
      [selectedDate]: {
        selected: true,
        selectedColor: '#8a62d8', 
        selectedTextColor: 'white',
      },
    };
  }, [selectedDate]);

  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        onPress={() => {
         
          setModalVisible(true);
        }}
      >
        <Text style={{ marginBottom: 15, fontSize: 25, color: 'white' }}>Click Here to Add</Text>
      </TouchableOpacity>

      
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType='slide'
        onRequestClose={() => setModalVisible(false)} 
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)} /> 
        <View style={styles.modalStyle}>
          <Text style={{ marginLeft: 25, marginTop: 30, marginBottom: 5, color: 'white' }}>Add Task</Text>
          <TextInput placeholder='Task Tittle' placeholderTextColor={'white'} style={{ ...styles.textStyle, marginBottom: 20 }} />
          <TextInput placeholder='Description' placeholderTextColor={'white'} style={styles.textStyle} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25, marginVertical: 35 }}>
            <View style={styles.imageView}>
              <TouchableOpacity onPress={() => setShowCalendarModal(true)}> 
                <Image
                  source={require('../../assets/icons/timer.png')}
                  resizeMode='contain'
                  style={{ marginRight: 32, height: 24, width: 24 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/Vector.png')}
                  resizeMode='contain'
                  style={{ marginRight: 32, height: 24, width: 24 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/icons/flag.png')}
                  resizeMode='contain'
                  style={{ height: 24, width: 24 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ ...styles.imageView2 }}>
              <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                <Image
                  source={require('../../assets/icons/send.png')}
                  resizeMode='contain'
                  style={{ height: 24, width: 24 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      
      <Modal
        transparent={true}
        visible={showCalendarModal}
        animationType="slide"
        onRequestClose={() => setShowCalendarModal(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setShowCalendarModal(false)} />
        <View style={styles.customCalendarModalContent}>
          <Calendar
            onDayPress={onDayPress}
            markedDates={markedDates}
            theme={{
              backgroundColor: '#363636',
              calendarBackground: '#363636',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#8a62d8', 
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5', 
              dayTextColor: '#d9e1e8',
              textDisabledColor: '#5e6060', 
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: 'white', 
              disabledArrowColor: '#d9e1e8',
              monthTextColor: 'white', 
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 16,
            }}
            
            renderHeader={(date) => {
              const month = moment(date).format('MMMM').toUpperCase();
              const year = moment(date).format('YYYY');
              return (
                <View style={styles.calendarHeader}>
                  <TouchableOpacity onPress={() => this.calendar.onPressArrowLeft()}>
                    <Text style={styles.arrowText}>{'<'}</Text>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.headerMonthText}>{month}</Text>
                    <Text style={styles.headerYearText}>{year}</Text>
                  </View>
                  <TouchableOpacity onPress={() => this.calendar.onPressArrowRight()}>
                    <Text style={styles.arrowText}>{'>'}</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
            
            ref={calendar => { this.calendar = calendar; }}
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => setShowCalendarModal(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDayPress({ dateString: selectedDate })} style={styles.saveButton}>
              <Text style={styles.saveText}>Choose Time</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      


      <DateTimePickerModal
        isVisible={showTimePickerModal}
        mode="time"
        date={finalDateTime} 
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        isDarkModeEnabled={true} 
        customStyles={{
          confirmButton: styles.saveButton,
          cancelButton: { ...styles.cancelText, alignSelf: 'center' }, 
        }}
      
      />
    </View>
  );
};

export default Plus;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalStyle: {
    alignSelf: 'center',
    backgroundColor: '#363636',
    height: 248,
    width: width * 0.9, 
    position: 'absolute',
    elevation: 5,
    borderRadius: 20,
    marginTop: 380
    // bottom: 0, 
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageView2: {
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginHorizontal: 25,
    color: 'white',
    paddingHorizontal: 10, 
    paddingVertical: 8,
  },
  
  customCalendarModalContent: {
    backgroundColor: '#363636',
    borderRadius: 10,
    width: width * 0.9,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 50, 
    alignSelf: 'center',
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  headerMonthText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerYearText: {
    color: '#b6c1cd',
    fontSize: 14,
    textAlign: 'center',
  },
  arrowText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  cancelText: {
    color: '#9fa8da',
    fontSize: 16,
    padding: 10,
  },
  saveButton: {
    backgroundColor: '#8a62d8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
  },
});