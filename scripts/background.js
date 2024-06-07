/* SPDX-License-Identifier: MIT */
// vim: et:ts=4:sw=4

import { loadOption } from "../options/save-restore.js";

async function replyAllAction (tab, info) {
    let message = await browser.messageDisplay.getDisplayedMessage(tab.id);
    if (!message)
        return;

    let forcePlainText = await loadOption("alwaysPlainText");

    const details = {};
    if (forcePlainText || info.modifiers.includes("Shift"))
        details.isPlainText = true;

    browser.compose.beginReply(message.id, "replyToAll", details);
}

browser.messageDisplayAction.onClicked.addListener(replyAllAction);
