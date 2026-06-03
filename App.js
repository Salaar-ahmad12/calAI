import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { AppProvider } from './src/context/AppContext';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import DiaryScreen from './src/screens/DiaryScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import { Colors } from './src/utils/theme';

const Tab = createBottomTabNavigator();

const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.bg,
    card: Colors.bg2,
    border: 'rgba(255,255,255,0.06)',
    text: Colors.text,
  },
};

const TAB_ICONS = {
  Home: { active: '🏠', inactive: '🏠' },
  Scan: { active: '📷', inactive: '📷' },
  Diary: { active: '📓', inactive: '📓' },
  Progress: { active: '📊', inactive: '📊' },
};

function TabIcon({ name, focused }) {
  return (
    <View style={{ alignItems: 'center', gap: 2 }}>
      <Text style={{ fontSize: 22, opacity: focused ? 1 : 0.45 }}>{TAB_ICONS[name].active}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <NavigationContainer theme={NavTheme}>
          <StatusBar style="light" />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused }) => <TabIcon name={route.name} focused={focused} />,
              tabBarLabel: ({ focused, children }) => (
                <Text style={{ fontSize: 10, color: focused ? Colors.accent : Colors.text3, fontWeight: focused ? '600' : '400' }}>
                  {children}
                </Text>
              ),
              tabBarStyle: {
                backgroundColor: 'rgba(19,19,26,0.97)',
                borderTopWidth: 0.5,
                borderTopColor: 'rgba(255,255,255,0.08)',
                paddingBottom: 20,
                paddingTop: 10,
                height: 80,
              },
              tabBarActiveTintColor: Colors.accent,
              tabBarInactiveTintColor: Colors.text3,
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Scan" component={ScanScreen} />
            <Tab.Screen name="Diary" component={DiaryScreen} />
            <Tab.Screen name="Progress" component={ProgressScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </AppProvider>
    </SafeAreaProvider>
  );
}
