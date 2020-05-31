import { browser } from "webextension-polyfill-ts";

browser.runtime.onInstalled.addListener((details) => {
    console.log("Your extension was installed!!");
    browser.runtime.openOptionsPage();
});
