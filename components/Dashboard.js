import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// Responsive font size function
const { width } = Dimensions.get('window');
const responsiveFontSize = (f) => Math.round((f * width) / 375);

// Sample data for 5 tabs
const tabData = {
  Tab1: [
    { id: '1', name: 'Person 1', number: '01810000001', roll: '1' },
    { id: '2', name: 'Person 2', number: '01810000002', roll: '2' },
    { id: '3', name: 'Person 3', number: '01810000003', roll: '3' },
    { id: '4', name: 'Person 4', number: '01810000004', roll: '4' },
    { id: '5', name: 'Person 5', number: '01810000005', roll: '5' },
    { id: '6', name: 'Person 6', number: '01810000006', roll: '6' },
    { id: '7', name: 'Person 7', number: '01810000007', roll: '7' },
    { id: '8', name: 'Person 8', number: '01810000008', roll: '8' },
    { id: '9', name: 'Person 9', number: '01810000009', roll: '9' },
    { id: '10', name: 'Person 10', number: '01810000010', roll: '10' },
    { id: '11', name: 'Person 11', number: '01810000011', roll: '11' },
    { id: '12', name: 'Person 12', number: '01810000012', roll: '12' },
    { id: '13', name: 'Person 13', number: '01810000013', roll: '13' },
    { id: '14', name: 'Person 14', number: '01810000014', roll: '14' },
    { id: '15', name: 'Person 15', number: '01810000015', roll: '15' },
    { id: '16', name: 'Person 16', number: '01810000016', roll: '16' },
    { id: '17', name: 'Person 17', number: '01810000017', roll: '17' },
    { id: '18', name: 'Person 18', number: '01810000018', roll: '18' },
    { id: '19', name: 'Person 19', number: '01810000019', roll: '19' },
    { id: '20', name: 'Person 20', number: '01810000020', roll: '20' },
    { id: '21', name: 'Person 21', number: '01810000021', roll: '21' },
    { id: '22', name: 'Person 22', number: '01810000022', roll: '22' },
    { id: '23', name: 'Person 23', number: '01810000023', roll: '23' },
    { id: '24', name: 'Person 24', number: '01810000024', roll: '24' },
    { id: '25', name: 'Person 25', number: '01810000025', roll: '25' },
    { id: '26', name: 'Person 26', number: '01810000026', roll: '26' },
    { id: '27', name: 'Person 27', number: '01810000027', roll: '27' },
    { id: '28', name: 'Person 28', number: '01810000028', roll: '28' },
    { id: '29', name: 'Person 29', number: '01810000029', roll: '29' },
    { id: '30', name: 'Person 30', number: '01810000030', roll: '30' },
  ],
  Tab2: [
    { id: '1', name: 'Person 6', number: '01810000006', roll: '6' },
    { id: '2', name: 'Person 7', number: '01810000007', roll: '7' },
    { id: '3', name: 'Person 8', number: '01810000008', roll: '8' },
    { id: '4', name: 'Person 9', number: '01810000009', roll: '9' },
    { id: '5', name: 'Person 10', number: '01810000010', roll: '10' },
  ],
  Tab3: [
    { id: '1', name: 'Person 11', number: '01810000011', roll: '11' },
    { id: '2', name: 'Person 12', number: '01810000012', roll: '12' },
    { id: '3', name: 'Person 13', number: '01810000013', roll: '13' },
    { id: '4', name: 'Person 14', number: '01810000014', roll: '14' },
    { id: '5', name: 'Person 15', number: '01810000015', roll: '15' },
  ],
  Tab4: [
    { id: '1', name: 'Person 16', number: '01810000016', roll: '16' },
    { id: '2', name: 'Person 17', number: '01810000017', roll: '17' },
    { id: '3', name: 'Person 18', number: '01810000018', roll: '18' },
    { id: '4', name: 'Person 19', number: '01810000019', roll: '19' },
    { id: '5', name: 'Person 20', number: '01810000020', roll: '20' },
  ],
  Tab5: [
    { id: '1', name: 'Person 21', number: '01810000021', roll: '21' },
    { id: '2', name: 'Person 22', number: '01810000022', roll: '22' },
    { id: '3', name: 'Person 23', number: '01810000023', roll: '23' },
    { id: '4', name: 'Person 24', number: '01810000024', roll: '24' },
    { id: '5', name: 'Person 25', number: '01810000025', roll: '25' },
  ],
};

// Tab screen
function TabScreen({ data }) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (!message.trim()) return;
    Alert.alert(
      'Message Sent',
      `Message sent to all persons in this tab:\n\n${message}`
    );
    setMessage('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.personCard}>
              <Text style={styles.leftText}>{item.name}</Text>
              <Text style={styles.centerText}>Roll: {item.roll}</Text>
              <Text style={styles.rightText}>{item.number}</Text>
            </View>
          )}
          contentContainerStyle={{
            paddingBottom: 120,
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 10,
          }}
        />

        <View style={styles.messageBoxContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write your message..."
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              { backgroundColor: message.trim() ? '#4a90e2' : '#ccc' },
            ]}
            onPress={sendMessage}
            disabled={!message.trim()}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Dashboard with 5 tabs
export default function Dashboard() {
  return (
    <Tab.Navigator
  screenOptions={{
    headerShown: false,
    tabBarIcon: () => null,
    tabBarLabelStyle: {
      fontSize: responsiveFontSize(14),
      fontWeight: 'bold',
      paddingVertical: 5,
    },
    tabBarStyle: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }}
>
  {Object.keys(tabData).map((tabName) => (
    <Tab.Screen
      key={tabName}
      name={tabName}
      children={() => <TabScreen data={tabData[tabName]} />}
      options={{
        tabBarLabel: ({ focused }) => (
          <View
            style={{
              backgroundColor: focused ? '#4a90e2' : 'transparent',
              paddingHorizontal: 18,
              paddingVertical: 22,
              borderRadius: 13,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: focused ? '#fff' : '#000',
                fontWeight: 'bold',
                fontSize: responsiveFontSize(14),
                textAlign: 'center',
              }}
            >
              {tabName}
            </Text>
          </View>
        ),
      }}
    />
  ))}
</Tab.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  personCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  leftText: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
  centerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  rightText: {
    flex: 1,
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '500',
  },
  messageBoxContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    fontSize: 16,
    maxHeight: 100,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
