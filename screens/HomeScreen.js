import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { Bars3CenterLeftIcon } from 'react-native-heroicons/outline'

export default function HomeScreen() {
  return (
    <View className='flex-1 bg-neutral-800'>
      <SafeAreaView className={ios ? '-mb-2' : 'mb-3'}>
        <statusBar style='light' />
        <View
          className='flex-row'
          justifyContent='space-between'
          items='center'
          mx-4
        >
          {/* <Bars3CenterLeftIcon color='white' size='30' strokeWidth={2} /> */}
          <Text className='text-white font-bold text-3xl'>Movies</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}
