import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Dimensions, StatusBar} from 'react-native';
import {Header} from '@react-navigation/stack';
import {colors} from '../../util/color';
import {spacing, fonts} from '../../util/size';
// import {SliderBox} from 'react-native-image-slider-box';

const Disease = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabPress = (tabIndex: number) => {
    setActiveTab(tabIndex);
    // Perform actions based on the selected tab
  };

  const image = [
    require('../../assets/image/WhiteSpikes.png'),
    require('../../assets/image/WhiteSpikes3.png'),
    require('../../assets/image/WhiteSpikes2.png'),
  ];

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Rust</Text>
        <View style={styles.imageListView}>
          <FlatList
            data={image}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View style={styles.imageView}>
                <Image source={item} style={styles.image} />
              </View>
            )}
            horizontal
            pagingEnabled
          />
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 1 && styles.activeTab]}
            onPress={() => handleTabPress(1)}>
            <Text
              style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>
              Symptoms
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 2 && styles.activeTab]}
            onPress={() => handleTabPress(2)}>
            <Text
              style={[styles.tabText, activeTab === 2 && styles.activeTabText]}>
              Preventions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 3 && styles.activeTab]}
            onPress={() => handleTabPress(3)}>
            <Text
              style={[styles.tabText, activeTab === 3 && styles.activeTabText]}>
              Suitable Solutions
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.descriptionView}>
          {activeTab === 1 && (
            <Text style={styles.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              eos illo cupiditate, placeat odit dicta similique expedita enim in
              suscipit, tenetur hic aliquam ad fugiat quaerat,illum deserunt
              dolor dignissimos tenetur hic aliquam ad fugiat quaerat, illum
              deserunt dolor dignissimos1.
            </Text>
          )}
          {activeTab === 2 && (
            <Text style={styles.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              eos illo cupiditate, placeat odit dicta similique expedita enim in
              suscipit, tenetur hic aliquam ad fugiat quaerat,illum deserunt
              dolor dignissimos tenetur hic aliquam ad fugiat quaerat, illum
              deserunt dolor dignissimos2.
            </Text>
          )}
          {activeTab === 3 && (
            <Text style={styles.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              eos illo cupiditate, placeat odit dicta similique expedita enim in
              suscipit, tenetur hic aliquam ad fugiat quaerat,illum deserunt
              dolor dignissimos tenetur hic aliquam ad fugiat quaerat, illum
              deserunt dolor dignissimos.3
            </Text>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Disease;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  heading: {
    color: colors.black,
    fontSize: fonts.lg,
    fontWeight: 'bold',
    paddingVertical: spacing.md,
  },
  image: {
    width: 330,
    height: 149,
    borderRadius: 10,
  },
  imageListView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  imageView: {
    marginHorizontal: spacing.sm,
    borderBottomColor: colors.black,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: spacing.md,
  },
  tab: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  activeTab: {},
  tabText: {
    color: colors.darkGrey,
    fontSize: fonts.md,
  },
  activeTabText: {
    color: colors.green,
    fontWeight: 'bold',
  },
  description: {
    color: colors.black,
    fontSize: fonts.md,
    textAlign: 'justify',
  },
  descriptionView: {
    paddingVertical: spacing.sm,
  },
});
