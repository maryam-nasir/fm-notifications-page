import { type NotificationType } from "./types";
import markWebberImage from "../assets/images/avatar-mark-webber.webp";
import angelaGrayImage from "../assets/images/avatar-angela-gray.webp";
import jacobThompsonImage from "../assets/images/avatar-jacob-thompson.webp";
import rizkyHasanuddinImage from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberlySmithImage from "../assets/images/avatar-kimberly-smith.webp";
import nathanPetersonImage from "../assets/images/avatar-nathan-peterson.webp";
import annaKimImage from "../assets/images/avatar-anna-kim.webp";
import chessImage from "../assets/images/image-chess.webp";

export const NOTIFICATIONS: NotificationType[] = [
  {
    userImageURL: markWebberImage,
    userName: "Mark Webber",
    time: "1m ago",
    activityText: "reacted to your recent post",
    postName: "My first tournament today!",
    isRead: false,
  },
  {
    userImageURL: angelaGrayImage,
    userName: "Angela Gray",
    time: "5m ago",
    activityText: "followed you",
    isRead: false,
  },
  {
    userImageURL: jacobThompsonImage,
    userName: "Jacob Thompson",
    time: "1 day ago",
    activityText: "has joined your group",
    groupName: "Chess Club",
    isRead: false,
  },
  {
    userImageURL: rizkyHasanuddinImage,
    userName: "Rizky Hasanuddin",
    time: "5 days ago",
    activityText: "sent you a private message",
    description:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    isRead: true,
  },
  {
    userImageURL: kimberlySmithImage,
    userName: "Kimberly Smith",
    time: "1 week ago",
    activityText: "commented on your picture",
    imageURL: chessImage,
    isRead: true,
  },
  {
    userImageURL: nathanPetersonImage,
    userName: "Nathan Peterson",
    time: "2 weeks ago",
    activityText: "reacted to your recent post",
    postName: "5 end-game strategies to increase your win rate",
    isRead: true,
  },
  {
    userImageURL: annaKimImage,
    userName: "Anna Kim",
    time: "2 weeks ago",
    activityText: "left the group",
    groupName: "Chess Club",
    isRead: true,
  },
];
