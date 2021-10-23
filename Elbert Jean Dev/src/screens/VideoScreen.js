import React, { useState, useRef } from 'react';
import { StyleSheet, Text, Pressable, View, Animated, ScrollView } from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';

import HeaderApp from '../components/HeaderApp';
import FooterApp from '../components/FooterApp';

const VideoPanel = ({ title, videoId }) => {
  const [expand, setExpand] = useState(false);
  const [width, setWidth] = useState(0);

  const onLayout = (event) => {
      setWidth(event.nativeEvent.layout.width);
  }

  return (
      <>
          <Pressable style={styles.videoTitleCard} underlayColor="#D4D4D4" onPress={() => setExpand(!expand)}>
              <Text style={styles.videoText}>{title}</Text>
          </Pressable>
          {
              expand ?
                  <View style={styles.videoShowCard} onLayout={onLayout}>
                      <YoutubePlayer
                          height={(width * 9.0/16.0) - 24}
                          videoId={videoId}
                      />
                  </View>
                  :
                  <></>
          }
      </>
  );
}

const VideoScreen = () => {
  const videos = [
    {
      title:"Iron Maiden - 2 AM",
      videoId: "KdyCchUgPZU"
    },
    {
      title:"Dragon Ball Z - CHA-LA HEAD CHA-LA",
      videoId: "4FkHvMxRd0E"
    },
    {
      title:"Iron Maiden - Virus",
      videoId: "cRHT34WOLao"
    },
    {
      title:"Helloween - Forever and One (Acoustic)",
      videoId: "wUs47usF_TQ"
    },
    {
      title:"Donkey Kong - Aquatic Ambience",
      videoId: "mzNeXUVxc5w"
    },
    {
      title:"Iron Maiden - The Aftermath",
      videoId: "kPhgia9Ei3o"
    },
    {
      title:"Massacration - The Mummy",
      videoId: "jFKc6Axu3OQ"
    },
    {
      title:"Iron Maiden - The Prophecy (The End - Acoustic)",
      videoId: "mgsd4_4HR44"
    },
    {
      title:"Legião Urbana - Tempo Perdido",
      videoId: "TPBvi13S62o"
    },
    {
      title:"Iron Maiden - Lord Of the Flies",
      videoId: "BntG7gndINY"
    },
    {
      title:"Iron Maiden - The Ides Of March (The End)",
      videoId: "GRaaPkcNl10"
    },
    {
      title:"Iron Maiden - Look for the truth",
      videoId: "Xv5XzsiiCwI"
    },
    {
      title:"Iron Maiden - Judgement of Heaven",
      videoId: "ZbdvyK8Nubk"
    },
    {
      title:"The Outfield - Your Love",
      videoId: "EqmUR_gyyW8"
    },
    {
      title:"Mamonas Assassinas - Chopis Centis",
      videoId: "mPXUFEWIW2Q"
    },
    {
      title:"Iron Maiden - Fear of the Dark",
      videoId: "v_y-G5lfUVo"
    },
    {
      title:"Iron Maiden - The Clairvoyant (Intro)",
      videoId: "1IYegGgTEOo"
    },
    {
      title:"Mamonas Assassinas - Débil Metal - (Introdução)",
      videoId: "aV-rQFFa8Ig"
    },
    {
      title:"Iron Maiden - 2 AM (Acoustic)",
      videoId: "hWbFeFWvqOg"
    },
    {
      title:"Massacration - Evil Papagali",
      videoId: "vbFIjRNxJrU"
    },
    {
      title:"Iron Maiden - 2 AM Solo",
      videoId: "NwwKOsRQH8w"
    },
  ]

  return (
    <>
      <ScrollView>
        <HeaderApp />
        <View style={{backgroundColor:"#242423"}}>
          <View style={styles.container}>
            <Text style={styles.title}>Vídeos do Youtube</Text>
          </View>

          <View style={styles.mainWrapper}>
            {videos.map((video) => <VideoPanel title={video.title} videoId={video.videoId} />)}
          </View>
        </View>
        <FooterApp />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    paddingHorizontal: 18,
    paddingBottom:20,
},
videoTitleCard: {
    backgroundColor: "#343A40",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 15,
},
videoText: {
    color: "#F4F4F4",
    fontWeight:'600',
},
videoShowCard: {
    paddingTop:28,
    paddingBottom:20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#343A40',
    marginTop: -8,
    borderTopWidth: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
},
  container: {
    flex:1,
    marginHorizontal:30,
    marginTop:40,
    marginBottom:20,
  },
  title:{
    fontFamily:"rubik",
    color:"#CDD6DB",
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
  },
})

export default VideoScreen;
