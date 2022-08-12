import React, { FunctionComponent } from "react";

import ScreenHome from "../components/ScreenHome";
import ScreenLike from "../components/ScreenLike";
import ScreenLive from "../components/ScreenLive";
import ScreenTalk from "../components/ScreenTalk";
import ScreenProfile from "../components/ScreenProfile";

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

export const IMAGES = {
  HOME: require("../../assets/icon/nav/home.png"),
  LIVE: require("../../assets/icon/nav/live.png"),
  LIKE: require("../../assets/icon/nav/like.png"),
  TALK: require("../../assets/icon/nav/talk.png"),
  PROFILE: require("../../assets/icon/nav/profile.png"),
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
