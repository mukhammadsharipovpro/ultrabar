import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import UltraFunHeader from '../components/UltraFunHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>
      <Text style={styles.matchTime}>{time}</Text>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <UltraFunHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('The Masters', '07.05 15:00', 'Final Round \n' + 'Augusta National')}
        {renderBroadcast('US Open', '09.05 16:30', 'Round 3 \n' + 'Torrey Pines')}
        {renderBroadcast('The Open', '11.05 18:00', 'Round 4 \n' + 'St Andrews')}
        {renderBroadcast('PGA Champ', '13.05 20:15', 'Round 2 \n' + 'Whistling Straits')}
        {renderBroadcast('Ryder Cup', '15.05 21:30', 'Europe \n' + 'USA')}
        {renderBroadcast('Presidents Cup', '17.05 17:00', 'International Team \n' + 'USA')}
        {renderBroadcast('BMW Champ', '19.05 18:45', 'Round 1 \n' + 'Medinah Country Club')}
        {renderBroadcast('FedEx Cup', '21.05 19:15', 'Final Round \n' + 'East Lake')}
        {renderBroadcast('DP World', '23.05 20:30', 'Round 3 \n' + 'Dubai Desert Classic')}
        {renderBroadcast('Ladies Tour', '25.05 17:45', 'Final Round \n' + 'Evian Championship')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
    borderRadius: 12,
  },
  league: {
    fontSize: 24,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
