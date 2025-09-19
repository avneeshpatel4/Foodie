import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '@/components/CustomHeader'
import { images } from '@/constants'
import { logout } from '@/lib/appwrite'
import { useRouter } from 'expo-router'

const Profile = () => {

 const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/sign-in"); // logout ke baad SignIn page pe bhejna
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  const profileData = [
    {
      id: '1',
      icon: images.user,
      label: 'Full Name',
      value: 'Avneesh Patel',
    },
    {
      id: '2',
      icon: images.envelope,
      label: 'Email',
      value: 'avneeshpatel4a@gmail.com',
    },
    {
      id: '3',
      icon: images.phone,
      label: 'Phone Number',
      value: '+91 8429584756',
    },
    {
      id: '4',
      icon: images.location,
      label: 'Address (Home)',
      value: 'Ambedkar Nagar U.P 224186',
    },
    {
      id: '5',
      icon: images.location,
      label: 'Address (Work)',
      value: 'Gomti Nagar Lucknow 226010',
    },
  ]

  const renderItem = ({ item }: any) => (
    <View className='flex flex-row justify-start items-center gap-5 my-2'>
      <Image source={item.icon} className='size-10' tintColor={'#FE8C00'} />
      <View>
        <Text className='text-gray-500 text-base'>{item.label}</Text>
        <Text className='text-black text-lg'>{item.value}</Text>
      </View>
    </View>
  )

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='flex mx-5'>
        {/* Header */}
        <View className='flex justify-start items-center'>
          <CustomHeader title='Profile' />
        </View>

        {/* Avatar */}
        <View className='flex justify-center items-center relative mt-5'>
          <View className='h-30 w-30'>
            <Image source={images.avatar} className='h-25 w-25 relative' />
            <Image
              source={images.pencil}
              className='bg-primary absolute bottom-5 right-5 size-8'
              
            />
          </View>
        </View>

        {/* FlatList for profile fields */}
        <FlatList
          data={profileData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: 20 }}
          ListFooterComponent={
            <>
              {/* Edit Profile Button */}
              <TouchableOpacity className='flex justify-center items-center mt-2'>
                <View className='h-14 w-96 border border-primary rounded-full bg-orange-50 flex justify-center items-center'>
                  <Text className='text-lg text-primary'>Edit Profile</Text>
                </View>
              </TouchableOpacity>

              {/* Logout Button */}
              <TouchableOpacity className='flex justify-center items-center mt-3'
               onPress={handleLogout}>
                <View className='h-14 w-96 border border-pink-500 rounded-full bg-pink-50 flex justify-center items-center flex-row gap-1'>
                  <Image
                    source={images.logout}
                    className='size-8'
                    tintColor={'#ec4899'}
                  />
                  <Text className='text-lg text-pink-500'>Logout</Text>
                </View>
              </TouchableOpacity>
            </>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default Profile
