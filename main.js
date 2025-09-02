/*
.▄▄▄   ▄▄▄·  ▄ .▄ ▐ ▄  ▄▄▄· ▐▄• ▄  ▄· ▄▌
▐▀•▀█ ▐█ ▀█ ██▪▐█•█▌▐█▐█ ▀█  █▌█▌▪▐█▪██▌
█▌·.█▌▄█▀▀█ ██▀▀█▐█▐▐▌▄█▀▀█  ·██· ▐█▌▐█▪
▐█▪▄█·▐█▪ ▐▌██▌▐▀██▐█▌▐█▪ ▐▌▪▐█·█▌ ▐█▀·.
·▀▀█.  ▀  ▀ ▀▀▀ ·▀▀ █▪ ▀  ▀ •▀▀ ▀▀  ▀ • 
00------------------------------------00
# Made with ♥ by: qahnaxy- Hezron Lokwei
# Email: infoqahnaxy@gmail.com      ◕‿↼
# x- @qahnaxy ig- @qahnaxy  tg- @qahnaxy
========================================
Project Name: centerImage
Version: V1.0.0
QN ID: 00001
========================================
00------------------------------------00
*/
const { Plugin } = require('obsidian');

module.exports = class CenterImagePlugin extends Plugin {
    async onload() {
        console.log("Loading centerImage plugin");
        this.addStyle();
    }

    addStyle() {
        const style = document.createElement("style");
        style.id = "center-image-css";
        style.textContent = `
            /* Reading view */
            .markdown-preview-view img {
                display: block;
                margin-left: auto;
                margin-right: auto;
                border-radius: 12px;
            }

            /* Live preview */
            .cm-content img {
                display: block;
                margin-left: auto;
                margin-right: auto;
                border-radius: 12px;
            }
        `;
        document.head.appendChild(style);
    }

    onunload() {
        console.log("Unloading centerImage plugin");
        const style = document.getElementById("center-image-css");
        if (style) style.remove();
    }
};