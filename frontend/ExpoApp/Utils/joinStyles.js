import { StyleSheet } from "react-native";
import * as CONST from "../Utils/constants";
export const joinstyles = StyleSheet.create({
  container: {
    marginHorizontal: "4%",
    marginTop: "16%",
    fontSize: CONST.responsiveHeight(19),
    fontWeight: "500",
    color: CONST.NAVIGATION_ACTIVE_COLOR,
  },
  header: {
    marginBottom: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    flex: 2,
    justifyContent: 'center'

   
  },
  backIcon:{
    position: "absolute",
    // left: '4%',
     top: '10%'
  },
  mid: {
    flex: 6,
    justifyContent: 'center'

  },
  headertext: {
    fontSize: CONST.responsiveHeight(19),
    fontWeight: "500",
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    alignItems: "center",
    textAlign: "center",

   
   // width: '100%'
  },
  // headertext: {

  right: {
    flex: 2,
    justifyContent: 'center'

  },
  post: {
    padding: "4%",
    backgroundColor: CONST.BACKGROUND_COLOR,
    borderRadius: 10,
    marginTop: "3%",
    minWidth: "90%",
  },
  profile: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profilePhoto: {
    overflow: "hidden",
    borderRadius: 200,

  },
  profileImage: {
    width: 40,
    height: 40,
    marginRight: "4%",
    overflow: "hidden",
    borderRadius: 20,
  },
  nametext: {
    fontSize: CONST.responsiveHeight(15),
    fontWeight: "500",
    color: CONST.NAVIGATION_ACTIVE_COLOR,
  },
  feelinginput: {
    minHeight: "10%",
    width: "100%",
    marginTop: "4%",
    textAlignVertical: "top",
  },
  photos: {
    justifyContent: "space-between",
  },
  photo: {
    width: "32%",
    height: 100,
    backgroundColor: CONST.BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 90,
  },
  xicon: {
    position: "absolute",
    zIndex: 100,
    right: 0,
    top: 0,
  },
  addicon: {},
  addtext: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontSize: CONST.responsiveHeight(15),
    fontWeight: "500",
  },
  info: {
    marginTop: "6%",
  },
  taskNametext: {
    color: CONST.NAVIGATION_ACTIVE_COLOR,
    fontSize: CONST.responsiveHeight(16),
    fontWeight: "500",
  },
  taskShortAddrtext: {
    color: CONST.FEATURE_TEXT_COLOR,
    fontSize: CONST.responsiveHeight(15),
    fontWeight: "300",
  },
  taskAddrtext: {
    fontSize: CONST.responsiveHeight(14),
    fontWeight: "300",
  },
});
