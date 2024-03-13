// ==UserScript==
// @name         Open in Wolfree
// @version      1.0
// @description  Adds an "Open in Wolfree" button to Wolfram Alpha.
// @author       Trainmaster2
// @icon         https://www.wolframalpha.com/_next/static/images/favicon_1zbE9hjk.ico
// @downloadURL  https://github.com/Trainmaster2/open-in-wolfree/raw/master/open-in-wolfree.user.js
// @updateURL    https://github.com/Trainmaster2/open-in-wolfree/raw/master/open-in-wolfree.user.js
// @match        *://*.wolframalpha.com/input?*
// @grant        GM_addElement
// ==/UserScript==

const wolfreeHostname = "wolfree.gitlab.io";

{
    let bdy = document.getElementsByClassName('sc-9f69335b-0 cWuvsj')[0];
    GM_addElement(bdy, "br");
    GM_addElement(bdy, "button", {
        onClick: `window.location.hostname = "${wolfreeHostname}"`,
        textContent: "Open in Wolfree",
        class: "klePGR kJMUaR _3BQD",
    });
}
