import patcher from "./patcher";

let unpatch;
export default {
  onLoad: () => (unpatch = patcher()),
  onUnload: () => unpatch(),
};
