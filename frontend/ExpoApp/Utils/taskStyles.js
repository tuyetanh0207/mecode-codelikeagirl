import * as CONST from "../Utils/constants";
import { StatusBar, StyleSheet} from "react-native";
export const taskstyles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    // marginVertical: "2%",
    // marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: "4%",
    // flex: 0.075,
    // alignItems: "center",
    // justifyContent: "center",
    // marginBottom: 14,
  },
  backicon: {
    position: 'absolute',
    left: CONST.responsiveWidth(12),
    top: CONST.responsiveHeight(50),
  },
  list: {
    flex: 1,
    // flexGrow: 1,
    // marginBottom: 10
  },
  title: {
    color: CONST.HEADING2_COLOR,
    fontFamily: 'Inter-Bold',
    fontSize: CONST.responsiveHeight(32),
    lineHeight: CONST.responsiveHeight(39),
    letterSpacing: -0.005,
    textAlign: 'center',
    flex: 1,
    marginVertical: CONST.PRIMARY_VERTICAL_MARGIN,
},
});