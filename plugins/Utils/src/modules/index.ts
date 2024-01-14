import type { Module } from "../stuff/Module";
import BetterComponents from "./BetterComponents";
import NoInviteToServers from "./NoInviteToServers";
import RestoreEmojiInfoReaction from "./RestoreEmojiInfoReaction";
import SendSpotifyInvite from "./SendSpotifyInvite";
import SpotifyListenAlong from "./SpotifyListenAlong";

export default [
  SpotifyListenAlong,
  SendSpotifyInvite,
  NoInviteToServers,
  BetterComponents,
  RestoreEmojiInfoReaction,
] as Module<any>[];
