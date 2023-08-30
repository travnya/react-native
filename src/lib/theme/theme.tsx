import { createEvent, createStore } from "effector";

export const $theme = createStore<"light" | "dark">("light");

export const switchTheme = createEvent();

$theme.on(switchTheme, (theme) => {
  if (theme === "light") {
    return "dark";
  } else {
    return "light";
  }
});
