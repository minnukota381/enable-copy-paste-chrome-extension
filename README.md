# Enable Copy Paste - Chrome Extension

🚀 **Enable Copy Paste** is a lightweight Chrome extension that restores the ability to use **right-click**, **copy**, **paste**, and **text selection** on websites that block these actions using JavaScript.

## 🧩 Features

- ✅ Re-enables blocked **right-click** and **context menus**
- ✅ Allows **copying and pasting** on restricted websites
- ✅ Supports **manual or automatic** activation
- ✅ Simple, clean popup interface
- ✅ 100% free and open source

---

## 🛠️ Installation

To use the extension in Chrome:

1. **Download or Clone** this repository:
   ```
   git clone https://github.com/minnukota381/enable-copy-paste-chrome-extension.git
    ```

2. Open **Google Chrome** and go to:
    ```
    `chrome://extensions/`
    ```
3. Enable **Developer Mode** (top-right corner).

4. Click **"Load unpacked"** and select the folder `enable-copy-paste-chrome-extension`.

5. Done! You’ll see the extension icon in your toolbar.

---

## 📁 Project Structure

```
    enable-copy-paste-chrome-extension/
    ├── manifest.json          # Extension metadata and config
    ├── background.js          # Background script for context menu
    ├── content.js             # Code injected into web pages
    ├── popup.html             # Popup UI
    ├── popup.js               # Popup logic
    ├── style.css              # Popup styling
    ├── icon.png               # Extension icon
    └── README.md              # This file
```

---

## 🔒 Permissions Used

* `"activeTab"` – To access the current web page.
* `"contextMenus"` – To add custom right-click options.
* `"scripting"` – To inject scripts into web pages.

---


## 📚 How It Works

Some websites use JavaScript to disable right-clicking, copying, and selecting text. This extension:

* Injects a `content.js` script to remove such event listeners.
* Uses the background script to enable a **context menu** item.
* Lets you toggle the effect via popup.

---

## 📄 License

This project is licensed under the **MIT License** – feel free to use, modify, and share!

---

## 🌐 Contributing

Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---