// ==UserScript==
// @name         Open in Wolfree
// @version      1.1
// @description  Adds an "Open in Wolfree" button to Wolfram Alpha.
// @author       Trainmaster2
// @icon         https://www.wolframalpha.com/_next/static/images/favicon_1zbE9hjk.ico
// @downloadURL  https://github.com/Trainmaster2/open-in-wolfree/raw/master/open-in-wolfree.user.js
// @updateURL    https://github.com/Trainmaster2/open-in-wolfree/raw/master/open-in-wolfree.user.js
// @match        *://*.wolframalpha.com/*
// @grant        GM_addElement
// @grant        window.onurlchange
// ==/UserScript==

const wolfreeHostname = "wolfree.gitlab.io";

{
    let btn = null;

    const insert = () => {
        if (window.location.pathname === "/input" && (!btn || !document.getElementById(btn.id))) {
            let bdy = document.getElementsByClassName('sc-9f69335b-0 cWuvsj')[0];
            if (bdy) {
                bdy.style.position = "relative";
                bdy.style.paddingBottom = "50px";
                btn = GM_addElement(bdy, "button", {
                    onClick: `window.location.hostname = "${wolfreeHostname}"`,
                    textContent: "Open in Wolfree",
                    class: "klePGR kJMUaR _3BQD",
                    style: "position: absolute; bottom: 0px;",
                });
            }
        }
    }

    insert()
    window.addEventListener('urlchange', () => setTimeout(insert, 500));
}
