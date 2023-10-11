import React, { useRef } from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';
import * as CONST from '../Utils/constants';
import { Image } from 'react-native';
const VideoPlayer = ({ videoUri, width, height, borderRadius, isStopped }) => {
  //  console.log('uri video trong videoPlayer component', videoUri)
  const actualBorderRadius = borderRadius ? borderRadius : 16;
  const videoRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = React.useState(false);

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded && !status.isPlaying && !isVideoReady) {
      setIsVideoReady(true);
      videoRef.current.stopAsync();
    }
  };


  return (
    <View style={{ borderRadius: actualBorderRadius, overflow: 'hidden', borderStyle: 'solid', borderColor: CONST.NAVIGATION_ACTIVE_COLOR, borderWidth: 1 }}>
      {isStopped !== null ? <Video
        source={{ uri: videoUri, type: 'video/mp4' }}
        style={{ width: CONST.responsiveHeight(width), height: CONST.responsiveHeight(height) }} // Tùy chỉnh kích thước video
        useNativeControls
        resizeMode="cover"
      />

        : (isVideoReady ? (
          <Video
            ref={videoRef}
            source={{ uri: videoUri }}
            style={{ width: CONST.responsiveHeight(width), height: CONST.responsiveHeight(height) }} // Tùy chỉnh kích thước video

            resizeMode="cover"
            useNativeControls
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            onError={(error) => console.error(error)}
          />
        ) : (
          <Image
            source={{ uri: videoUri }}
            style={{ width: CONST.responsiveHeight(width), height: CONST.responsiveHeight(height) }} // Tùy chỉnh kích thước video

            resizeMode="cover"
          />
        ))}
    </View>
  );
};

export default VideoPlayer;