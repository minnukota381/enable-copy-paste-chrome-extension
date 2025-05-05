chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "enableCopyPaste",
    title: "Enable Copy and Paste",
    contexts: ["all"],
  });
});

// Listen for the context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "enableCopyPaste") {
    // Inject the content script to enable copy-paste functionality
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: enableCopyPaste,
    });
  }
});

// Function to enable copy-paste functionality on the current webpage
function enableCopyPaste() {
  // Remove the event listeners that block copy, cut, and paste
  document.removeEventListener("copy", preventDefault);
  document.removeEventListener("cut", preventDefault);
  document.removeEventListener("paste", preventDefault);

  // Enable right-click
  document.oncontextmenu = null;

  // Log to confirm functionality
  alert("Copy-paste functionality has been enabled!");
}
