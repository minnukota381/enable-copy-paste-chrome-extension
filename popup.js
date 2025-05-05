document.getElementById("enableBtn").addEventListener("click", () => {
  // Request the active tab and inject the content script to enable copy-paste
  chrome.scripting.executeScript({
    target: { tabId: chrome.tabs.TAB_ID },
    function: enableCopyPaste,
  });

  function enableCopyPaste() {
    // Enable copy-paste functionality (same code as in background.js)
    document.removeEventListener("copy", preventDefault);
    document.removeEventListener("cut", preventDefault);
    document.removeEventListener("paste", preventDefault);
    document.oncontextmenu = null;
    alert("Copy-paste functionality enabled!");
  }
});
