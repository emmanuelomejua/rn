import { Image, Platform, ScrollView, Text, View,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';;

import { images } from '@/constants';
import CustomBotton from '@/components/CustomBotton';

export default function App() {
  return (
    <SafeAreaView className='bg-primary min-h-[90vh]'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full h-full px-4 justify-center items-center'>
          <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain'/>
          <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain'/>
        </View>

        <View className='relative mt-5'>
          <Text className='text-3xl text-white font-bold text-center'>
            Discover endless possibilities with {' '}<Text className='text-secondary-200'>Aora</Text>
          </Text>

          <Image source={images.path} className='w-[136px] h-[15px] absolute -bottom-2 -right-8' resizeMode='contain'/>
        </View>

        <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
        </Text>

        <CustomBotton title='Continue with email' handlePress={() => router.push('/sign-in')} containerStyles='w-full  mt-7'/>
      </ScrollView>
      
      <StatusBar backgroundColor='#161622' style='light'/>

    </SafeAreaView>
  );
}

