import grapesjs from "grapesjs";

console.log(grapesjs)

export default grapesjs.plugins.add("html_blocks", (editor) => {
    editor.BlockManager.add("div", {
        label: "Div",
        media: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWdJREFUSEvtlL1OAkEUhc/Z6CvIrpWP4APY2vCTmPhTaKIVoLGw1Eqh08TWGFZbINHGZBEb4xP4EHar+wzCNWuyZIBhZiChY8qZO+ebe+7cS8x5cc76WACsDlstyt8lfvd05VunZDrL4o2AYiOuCXgm0t/sHq9+qpB8mKyT/XdP8BhV/ItJqUwEpOIgrwD5FcH+azV4VkUKjXiXRAvgEkTqnWpQ00G0gExcRHqkd9Sp5Jq6y8WHeIeCloDLBG50mYwBVHEPPIyqfstUSRtkCDCteAY2QQaAWcUzSCn82Qb67VG7BoBCGJ8TvE59d7Fm1DY1C5C1TjlXT2OGLFIhpuK6io8B0o1pIenLIWj/f1fl5cZGc4XYxLUZDH6G0mgEDqJK8KRaUwrjPQGaMzVaJpRmAvDSI0pR2f9QAcVGsiHsvZHebVZQ505WA7fu47WXk+BLd9l05jTsrLPYIcA6rh00jCELgNXBP4iZyRmZaxmIAAAAAElFTkSuQmCC" />`,
        content: '<div class="my-block">This is a simple block</div>',
    });

    editor.BlockManager.add("div-2", {
        label: "Div",
        media: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWdJREFUSEvtlL1OAkEUhc/Z6CvIrpWP4APY2vCTmPhTaKIVoLGw1Eqh08TWGFZbINHGZBEb4xP4EHar+wzCNWuyZIBhZiChY8qZO+ebe+7cS8x5cc76WACsDlstyt8lfvd05VunZDrL4o2AYiOuCXgm0t/sHq9+qpB8mKyT/XdP8BhV/ItJqUwEpOIgrwD5FcH+azV4VkUKjXiXRAvgEkTqnWpQ00G0gExcRHqkd9Sp5Jq6y8WHeIeCloDLBG50mYwBVHEPPIyqfstUSRtkCDCteAY2QQaAWcUzSCn82Qb67VG7BoBCGJ8TvE59d7Fm1DY1C5C1TjlXT2OGLFIhpuK6io8B0o1pIenLIWj/f1fl5cZGc4XYxLUZDH6G0mgEDqJK8KRaUwrjPQGaMzVaJpRmAvDSI0pR2f9QAcVGsiHsvZHebVZQ505WA7fu47WXk+BLd9l05jTsrLPYIcA6rh00jCELgNXBP4iZyRmZaxmIAAAAAElFTkSuQmCC" />`,
        content: '<div class="my-block">This is a simple block</div>',
    });
});
