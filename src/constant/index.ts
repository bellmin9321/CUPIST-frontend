import React, { FunctionComponent } from "react";

import ScreenHome from "../components/ScreenHome";
import ScreenLike from "../components/ScreenLike";
import ScreenLive from "../components/ScreenLive";
import ScreenTalk from "../components/ScreenTalk";
import ScreenProfile from "../components/ScreenProfileEdit";

export const CUPIST_URL = {
  DEFAULT: "https://test.dev.cupist.de",
  INRODUCTION: "https://test.dev.cupist.de/introduction",
  INRODUCTION_ADDITIONAL: "https://test.dev.cupist.de/introduction/additional",
  INRODUCTION_CUSTOM: "https://test.dev.cupist.de/introduction/custom",
  PROFILE: "https://test.dev.cupist.de/profile",
};

export const IMAGES = {
  HOME: require("../../assets/icon/nav/home.png"),
  LIVE: require("../../assets/icon/nav/live.png"),
  LIKE: require("../../assets/icon/nav/like.png"),
  TALK: require("../../assets/icon/nav/talk.png"),
  PROFILE: require("../../assets/icon/nav/profile.png"),
  GLAM: require("../../assets/icon/main/logo.png"),
  INFO: require("../../assets/icon/main/info.png"),
  SETTING: require("../../assets/icon/main/setting.png"),
  DELETE: require("../../assets/icon/main/delete.png"),
  BACK: require("../../assets/icon/profile_edit/back.png"),

  TODAY: require("../../assets/icon/recommendations/today.png"),
  DIA: require("../../assets/icon/recommendations/dia.png"),
  GLAMOUR: require("../../assets/icon/recommendations/glamour.png"),
  WITHPET: require("../../assets/icon/recommendations/withpet.png"),
  HOT: require("../../assets/icon/recommendations/hot.png"),
};

export enum TabName {
  HOME = "Home",
  LIVE = "Live",
  LIKE = "Like",
  TALK = "Talk",
  PROFILE = "Profile",
}

export type NavRouteInfo = {
  id: number | undefined;
  name: TabName;
  component: typeof React.Component | FunctionComponent<any>;
  icon?: string;
};

export const NAV_ROUTES: Array<NavRouteInfo> = [
  {
    id: 1,
    name: TabName.HOME,
    component: ScreenHome,
    icon: IMAGES.HOME,
  },
  {
    id: 2,
    name: TabName.LIVE,
    component: ScreenLive,
    icon: IMAGES.LIVE,
  },
  {
    id: 3,
    name: TabName.LIKE,
    component: ScreenLike,
    icon: IMAGES.LIKE,
  },
  {
    id: 4,
    name: TabName.TALK,
    component: ScreenTalk,
    icon: IMAGES.TALK,
  },
  {
    id: 5,
    name: TabName.PROFILE,
    component: ScreenProfile,
    icon: IMAGES.PROFILE,
  },
];
