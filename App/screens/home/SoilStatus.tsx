import {
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryLegend,
  VictoryAxis,
  VictoryTheme,
} from 'victory-native';
import {colors} from '../../util/color';
import {fonts, spacing} from '../../util/size';

const SoilStatus: React.FC = () => {
  // Data for the bar chart
  const data = [
    [
      {x: 'W1', y: 40},
      {x: 'W2', y: 80},
      {x: 'W3', y: 60},
      {x: 'W4', y: 50},
    ],
    [
      {x: 'W1', y: 20},
      {x: 'W2', y: 100},
      {x: 'W3', y: 40},
      {x: 'W4', y: 90},
    ],
    [
      {x: 'W1', y: 70},
      {x: 'W2', y: 50},
      {x: 'W3', y: 90},
      {x: 'W4', y: 65},
    ],
  ];

  // Get the unique x-axis values
  const xValues = data.flatMap(group => group.map(item => item.x));
  const uniqueXValues = [...new Set(xValues)];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Soil Status</Text>
      <View style={styles.chartBox}>
        <View>
          <Text style={styles.text}>This Week</Text>
        </View>
        <View>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{x: 30, y: 0}}
            padding={{top: 30, bottom: 60, left: 50, right: 50}}
            height={300}
            width={380}>
            {/* X-axis */}
            <VictoryAxis tickValues={uniqueXValues} />

            {/* Y-axis */}
            <VictoryAxis
              dependentAxis
              tickValues={[0, 20, 40, 60, 80, 100, 120]}
            />

            {/* Bar chart */}
            <VictoryGroup
              offset={12}
              colorScale={['#CFA841', '#4BA26A', '#F6C602']}>
              {/* Group 1 */}
              <VictoryBar
                data={data[0]}
                cornerRadius={{topLeft: 5, topRight: 5}}
                animate={{
                  duration: 2000,
                  onLoad: {duration: 1000},
                }}
              />

              {/* Group 2 */}
              <VictoryBar
                data={data[1]}
                cornerRadius={{topLeft: 5, topRight: 5}}
              />

              {/* Group 3 */}
              <VictoryBar
                data={data[2]}
                cornerRadius={{topLeft: 5, topRight: 5}}
              />
            </VictoryGroup>
          </VictoryChart>
          <VictoryLegend
            orientation="horizontal"
            itemsPerRow={2}
            gutter={50}
            data={[
              {
                name: '%48 potassium',
                symbol: {fill: '#CFA841', type: 'square'},
                labels: {fill: 'grey'},
              },
              {
                name: '%28 Nitrogen',
                symbol: {fill: 'orange', type: 'square'},
                labels: {fill: 'grey'},
              },
              {
                name: '%24 phosphorous',
                symbol: {fill: 'gold', type: 'square'},
                labels: {fill: 'grey'},
              },
            ]}
          />
        </View>
      </View>
      <Text style={styles.heading}>Basic Rates</Text>

      <ScrollView horizontal={true} alwaysBounceHorizontal>
        <View style={styles.item}>
          <Text style={[styles.text, {textAlign: 'center'}]}>Humidity</Text>
          <Text style={{color: 'grey', textAlign: 'center'}}>normal</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text style={styles.cardText2}>30%</Text>
            <Image
              source={require('../../assets/image/Icon21.png')}
              style={{top: 45}}
            />
          </View>
        </View>

        <View style={styles.item}>
          <Text style={[styles.text, {textAlign: 'center'}]}>Salts</Text>
          <Text style={{color: 'grey', textAlign: 'center'}}>High</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text style={styles.cardText2}>20%</Text>
            <Image
              source={require('../../assets/image/Icon21.png')}
              style={{top: 45}}
            />
          </View>
        </View>

        <View style={styles.item}>
          <Text style={[styles.text, {textAlign: 'center'}]}>Water </Text>
          <Text style={{color: 'grey', textAlign: 'center'}}>High</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text style={styles.cardText2}>60%</Text>
            <Image
              source={require('../../assets/image/Icon21.png')}
              style={{top: 45}}
            />
          </View>
        </View>

        <View style={styles.item}>
          <Text style={[styles.text, {textAlign: 'center'}]}>Heat </Text>
          <Text style={{color: 'grey', textAlign: 'center'}}>normal</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text style={styles.cardText2}>20%</Text>
            <Image
              source={require('../../assets/image/Icon21.png')}
              style={{top: 45}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SoilStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  chartBox: {
    borderColor: colors.green,
    borderWidth: 2,
    borderRadius: 26,
    height: 435,
    width: 350,
    marginVertical: spacing.md,
  },
  text: {
    color: colors.black,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    fontSize: spacing.md + 2,
  },
  heading: {
    color: colors.black,
    fontSize: spacing.lg,
    fontWeight: 'bold',
    paddingHorizontal: spacing.lg,
  },
  cardList: {},
  item: {
    borderColor: colors.green,
    borderWidth: 2,
    height: 150,
    width: 115,
    borderRadius: 17,
    marginVertical: spacing.md,
    marginHorizontal: spacing.sm - 3,
  },
  cardText2: {top: 45, fontSize: fonts.lg, color: colors.green},
});
