/* SPDX-License-Identifier: MIT */

import * as prefs from "./save-restore.js";

document.addEventListener("DOMContentLoaded", () => {
    prefs.restoreAllOptions();
});

(function addInputListeners () {
    const inputs = document.getElementsByTagName("input");
    for (const input of inputs) {
        switch (input.type) {
        case "checkbox":
            input.addEventListener("change", (e) => {
                prefs.saveCheckOptions(e);
            });
            break;
        default:
        }
    }
})();

document.getElementById("reset").addEventListener("click", () => {
    prefs.resetAllOptions();
});
