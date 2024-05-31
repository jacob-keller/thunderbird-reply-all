/* SPDX-License-Identifier: MIT */

import { DefaultOptions, OptionsList } from "./defaults.js";

const AddonName = browser.runtime.getManifest().name;

const checkOptionMap = {
    "always-plain-text": "alwaysPlainText",
};

function loadOption (id) {
    return browser.storage.local.get(id).then((res) => {
        if (res[id] !== undefined) {
            return res[id];
        } else {
            return DefaultOptions[id];
        }
    }, `[${AddonName}] Failed to load value of ${id} option`);
}

function saveCheckOptions (e) {
    const options = {};
    for (const id in checkOptionMap) {
        const checkbox = document.getElementById(id);
        options[checkOptionMap[id]] = checkbox.checked;
    }

    return browser.storage.local.set(options);
}

async function restoreCheckOptions () {
    for (const id in checkOptionMap) {
        const checkbox = document.getElementById(id);

        checkbox.checked = await loadOption(checkOptionMap[id]);
    }
}

async function restoreAllOptions () {
    await restoreCheckOptions();
}

function resetAllOptions () {
    return browser.storage.local.remove(OptionsList).then(() => {
        restoreAllOptions();
    });
}

export { loadOption };
export { resetAllOptions };
export { restoreAllOptions };
export { saveCheckOptions };
