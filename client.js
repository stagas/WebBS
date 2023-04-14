import { Editor } from "./editor/editor.js";

if (window.location.hash === "#splash") {
  let splash = document.getElementById("splash");
  splash.classList.remove("hidden");
  document.getElementById("splash-button").addEventListener("mousedown", () => splash.classList.add("hidden"));
}

if (window.location.hash === "#exampleCode" || window.location.hash === "#splash") {
  fetch("./exampleCode.webbs").then((response) => response.text()).then((text) => {
    const editor = new Editor(text)

    window.WebBSEditor = editor;
    console.log(`For advanced instructions, run "WebBSEditor.help()"`);

    // editor.selectTab(editor.tabs["status"]);
    // editor.compile()
    // editor.run()
  });
} else {
  new Editor();
}
