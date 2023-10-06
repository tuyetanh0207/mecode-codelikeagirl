import React from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';
import * as CONST from '../Utils/constants';
const VideoPlayer = ({ videoUri, width, height, borderRadius }) => {
    console.log('uri video trong videoPlayer component', videoUri)
    const actualBorderRadius = borderRadius ? borderRadius : 16;
  return (
    <View style ={ {borderRadius: actualBorderRadius, overflow: 'hidden', borderStyle: 'solid', borderColor: CONST.NAVIGATION_ACTIVE_COLOR, borderWidth: 1}}> 
       <Video
        source={{ uri: videoUri, type: 'video/mp4'}} // Đặt URI của video ở đây (có thể là HTTP hoặc HTTPS)
        style={{ width: CONST.responsiveHeight(width), height: CONST.responsiveHeight(height)}} // Tùy chỉnh kích thước video
        useNativeControls // Hiển thị các nút điều khiển video
        resizeMode="cover" // Cách video được tỷ lệ và hiển thị
        //isLooping // Bắt đầu phát video tự động (true để tạm dừng)
        shouldPlay={true}
      /> 
    </View>
  );
};

export default VideoPlayer;