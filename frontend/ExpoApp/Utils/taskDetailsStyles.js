import { StyleSheet } from "react-native";
import * as CONST from "../Utils/constants";
export const taskDetailstyles = StyleSheet.create({
  imageBackground: {
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    marginTop: "16%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "4%",
  },
  backicon: {
    flex: 0.5,
  },
  title: {
    fontSize: CONST.responsiveHeight(19),
    fontWeight: "500",
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    flex: 10,
    alignItems: "center",
    marginLeft: "30%",
  },
  content: {
    marginTop: "5%",
    backgroundColor: CONST.BACKGROUND_COLOR,
    marginHorizontal: "4%",
    borderRadius: 10,
    padding: "5%",
    flexDirection: "column",
  },
  name: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "3%",
  },
  left: {
    flex: 0.1,
  },
  right: {
    flex: 0.83,
  },
  nametext: {
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    fontSize: CONST.responsiveHeight(20),
    fontWeight: "bold",
  },
  distext: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontSize: CONST.responsiveHeight(15),
    fontWeight: "500",
  },
  addrtext: {
    fontSize: CONST.responsiveHeight(15),
    fontWeight: "300",
  },
  shortAddrtext: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontWeight: "500",
    fontSize: CONST.responsiveHeight(16),
  },
  hint: {
    marginTop: "3%",
  },
  hinttext: {
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    fontSize: CONST.responsiveHeight(15),
    fontWeight: "500",
  },
  hintContenttext: {
    fontSize: CONST.responsiveHeight(16),
    fontWeight: "300",
  },
  map: {
    alignItems: "center",
    marginTop: "1%",
    flex: 1,
    marginBottom: "4%",
  },
  mapContainer: {
    width: "92%",
    height: 280,
    marginTop: CONST.TRUTH_SCREEN[1] * 0.05,
  },
  mapImage: {
    width: "92%",
    height: 260,
    borderRadius: 10,
  },
  btn: {
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "4%",
  },

});
