import { View, Text, Image } from 'react-native'
import React from 'react';
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants'

const TabIcon = ({icon, color, name, focused}: any) => {
  return(
    <View className='flex items-center justify-center gap-2 '>
      <Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-6'/>
      <Text className={`${focused ? 'font-psemibold': 'font-pregular'} text-[6px]`} style={{color: color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 0,
            borderTopColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: 74
          }
        }}
      >
        <Tabs.Screen 
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}: any) => (
              <TabIcon
              icon={icons.home}
              name='Home'
              focused={focused}
              color={color}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='bookmark'
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({color, focused}: any) => (
              <TabIcon
              icon={icons.bookmark}
              name='Bookmark'
              focused={focused}
              color={color}
              />
            )
          }}
        />

      <Tabs.Screen 
          name='create'
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({color, focused}: any) => (
              <TabIcon
              icon={icons.plus}
              name='Create'
              focused={focused}
              color={color}
              />
            )
          }}
        />

        <Tabs.Screen 
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused}: any) => (
              <TabIcon
              icon={icons.profile}
              name='Profile'
              focused={focused}
              color={color}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout;
