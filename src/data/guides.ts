export interface Step {
  instruction: string;
  detail?: string;
  shortcut?: string;
  image?: string;
}

export interface Guide {
  browser: string;
  browserName: string;
  browserColor: string;
  os: string;
  osName: string;
  intro: string;
  steps: Step[];
}

export const BROWSERS = [
  { id: 'chrome',   name: 'Chrome',           color: '#EA4335' },
  { id: 'firefox',  name: 'Firefox',          color: '#FF7139' },
  { id: 'safari',   name: 'Safari',           color: '#006CFF' },
  { id: 'edge',     name: 'Edge',             color: '#0078D7' },
  { id: 'brave',    name: 'Brave',            color: '#FB542B' },
  { id: 'opera',    name: 'Opera',            color: '#FF1B2D' },
  { id: 'samsung',  name: 'Samsung Internet', color: '#1428A0' },
] as const;

export const PLATFORMS = [
  { id: 'windows', name: 'Windows', icon: '🪟' },
  { id: 'macos',   name: 'macOS',   icon: '🍎' },
  { id: 'iphone',  name: 'iPhone',  icon: '📱' },
  { id: 'ipad',    name: 'iPad',    icon: '📲' },
  { id: 'android', name: 'Android', icon: '🤖' },
] as const;

export type BrowserId = (typeof BROWSERS)[number]['id'];
export type PlatformId = (typeof PLATFORMS)[number]['id'];

// All valid browser/platform combinations
export const VALID_COMBOS: [BrowserId, PlatformId][] = [
  ['chrome',  'windows'],
  ['chrome',  'macos'],
  ['chrome',  'iphone'],
  ['chrome',  'android'],
  ['firefox', 'windows'],
  ['firefox', 'macos'],
  ['firefox', 'android'],
  ['safari',  'macos'],
  ['safari',  'iphone'],
  ['safari',  'ipad'],
  ['edge',    'windows'],
  ['edge',    'macos'],
  ['brave',   'windows'],
  ['brave',   'macos'],
  ['brave',   'android'],
  ['opera',   'windows'],
  ['opera',   'macos'],
  ['samsung', 'android'],
];

const guides: Guide[] = [
  // ─── Chrome / Windows ───────────────────────────────────────────────────────
  {
    browser: 'chrome', browserName: 'Chrome', browserColor: '#EA4335',
    os: 'windows', osName: 'Windows',
    intro: "Follow these steps to clear Chrome's cache and cookies on your Windows PC.",
    steps: [
      {
        instruction: 'Open the Chrome menu',
        detail: 'Click the three vertical dots (⋮) in the very top-right corner of your Chrome window.',
        image: 'chrome-windows-1.png',
      },
      {
        instruction: 'Go to "More tools"',
        detail: 'Hover over "More tools" in the dropdown menu, then click "Clear browsing data…" in the submenu that appears.',
        shortcut: 'Ctrl + Shift + Delete',
        image: 'chrome-windows-2.png',
      },
      {
        instruction: 'Set the time range to "All time"',
        detail: 'At the top of the dialog, click the "Time range" dropdown and select "All time" to make sure everything is cleared.',
        image: 'chrome-windows-3.png',
      },
      {
        instruction: 'Check the right boxes',
        detail: 'Make sure "Cookies and other site data" and "Cached images and files" are both ticked. You can uncheck "Browsing history" if you want to keep that.',
        image: 'chrome-windows-4.png',
      },
      {
        instruction: 'Click "Clear data"',
        detail: 'Hit the blue "Clear data" button. Chrome will take a few seconds to finish.',
        image: 'chrome-windows-5.png',
      },
      {
        instruction: 'Reload the page',
        detail: 'Once done, go back to the page you were having trouble with and press F5 (or click the reload button) to refresh it.',
        shortcut: 'F5 or Ctrl + R',
      },
    ],
  },

  // ─── Chrome / macOS ─────────────────────────────────────────────────────────
  {
    browser: 'chrome', browserName: 'Chrome', browserColor: '#EA4335',
    os: 'macos', osName: 'macOS',
    intro: "Follow these steps to clear Chrome's cache and cookies on your Mac.",
    steps: [
      {
        instruction: 'Open the Chrome menu',
        detail: 'Click the three vertical dots (⋮) in the top-right corner of Chrome.',
        shortcut: '⌘ + Shift + Delete to skip to step 3',
        image: 'chrome-macos-1.png',
      },
      {
        instruction: 'Open "Clear browsing data"',
        detail: 'Click "More tools" then "Clear browsing data…" in the menu.',
        image: 'chrome-macos-2.png',
      },
      {
        instruction: 'Set the time range to "All time"',
        detail: 'In the dialog that opens, set the Time range dropdown to "All time".',
        image: 'chrome-macos-3.png',
      },
      {
        instruction: 'Check the right boxes',
        detail: 'Tick "Cookies and other site data" and "Cached images and files".',
        image: 'chrome-macos-4.png',
      },
      {
        instruction: 'Click "Clear data"',
        detail: 'Press the blue "Clear data" button and wait a moment for Chrome to finish.',
        image: 'chrome-macos-5.png',
      },
      {
        instruction: 'Reload the page',
        detail: 'Go back to the page you were having trouble with and refresh it.',
        shortcut: '⌘ + R',
      },
    ],
  },

  // ─── Chrome / iPhone ────────────────────────────────────────────────────────
  {
    browser: 'chrome', browserName: 'Chrome', browserColor: '#EA4335',
    os: 'iphone', osName: 'iPhone',
    intro: "Follow these steps to clear Chrome's cache and cookies on your iPhone.",
    steps: [
      {
        instruction: 'Open Chrome and tap the three dots',
        detail: 'Open the Chrome app. Tap the three dots (⋯) in the bottom-right corner of your screen.',
        image: 'chrome-iphone-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'In the menu that slides up, scroll down and tap "Settings".',
        image: 'chrome-iphone-2.png',
      },
      {
        instruction: 'Tap "Privacy and Security"',
        detail: 'In Settings, tap "Privacy and Security".',
        image: 'chrome-iphone-3.png',
      },
      {
        instruction: 'Tap "Clear Browsing Data"',
        detail: 'Tap "Clear Browsing Data" at the top of the Privacy section.',
        image: 'chrome-iphone-4.png',
      },
      {
        instruction: 'Select what to clear',
        detail: 'Make sure "Cookies, Site Data" and "Cached Images and Files" are checked. Set Time Range to "All Time" for best results.',
        image: 'chrome-iphone-5.png',
      },
      {
        instruction: 'Tap "Clear Browsing Data" to confirm',
        detail: 'Tap the red "Clear Browsing Data" button at the bottom to finish.',
        image: 'chrome-iphone-6.png',
      },
    ],
  },

  // ─── Chrome / Android ───────────────────────────────────────────────────────
  {
    browser: 'chrome', browserName: 'Chrome', browserColor: '#EA4335',
    os: 'android', osName: 'Android',
    intro: "Follow these steps to clear Chrome's cache and cookies on your Android device.",
    steps: [
      {
        instruction: 'Open the Chrome menu',
        detail: 'Open Chrome and tap the three dots (⋮) in the top-right corner.',
        image: 'chrome-android-1.png',
      },
      {
        instruction: 'Tap "History"',
        detail: 'In the dropdown, tap "History".',
        image: 'chrome-android-2.png',
      },
      {
        instruction: 'Tap "Clear browsing data…"',
        detail: 'At the top or bottom of the history screen, tap "Clear browsing data…"',
        image: 'chrome-android-3.png',
      },
      {
        instruction: 'Set time range to "All time"',
        detail: 'Tap the Time range dropdown and choose "All time".',
        image: 'chrome-android-4.png',
      },
      {
        instruction: 'Check the right boxes',
        detail: 'Make sure "Cookies and site data" and "Cached images and files" are both checked.',
        image: 'chrome-android-5.png',
      },
      {
        instruction: 'Tap "Clear data"',
        detail: 'Tap "Clear data" and confirm if prompted. You\'re done!',
        image: 'chrome-android-6.png',
      },
    ],
  },

  // ─── Firefox / Windows ──────────────────────────────────────────────────────
  {
    browser: 'firefox', browserName: 'Firefox', browserColor: '#FF7139',
    os: 'windows', osName: 'Windows',
    intro: "Follow these steps to clear Firefox's cache and cookies on Windows.",
    steps: [
      {
        instruction: 'Open the Firefox menu',
        detail: 'Click the three horizontal lines (≡) in the top-right corner of Firefox.',
        shortcut: 'Ctrl + Shift + Delete to skip ahead',
        image: 'firefox-windows-1.png',
      },
      {
        instruction: 'Click "Settings"',
        detail: 'Click "Settings" in the dropdown menu.',
        image: 'firefox-windows-2.png',
      },
      {
        instruction: 'Go to "Privacy & Security"',
        detail: 'In the left sidebar, click "Privacy & Security".',
        image: 'firefox-windows-3.png',
      },
      {
        instruction: 'Find "Cookies and Site Data" and click "Clear Data…"',
        detail: 'Scroll down to the "Cookies and Site Data" section and click "Clear Data…".',
        image: 'firefox-windows-4.png',
      },
      {
        instruction: 'Make sure both boxes are ticked',
        detail: 'Both "Cookies and Site Data" and "Cached Web Content" should be checked.',
        image: 'firefox-windows-5.png',
      },
      {
        instruction: 'Click "Clear" and confirm',
        detail: 'Click "Clear", then click "Clear Now" in the confirmation box that appears.',
        image: 'firefox-windows-6.png',
      },
    ],
  },

  // ─── Firefox / macOS ────────────────────────────────────────────────────────
  {
    browser: 'firefox', browserName: 'Firefox', browserColor: '#FF7139',
    os: 'macos', osName: 'macOS',
    intro: "Follow these steps to clear Firefox's cache and cookies on your Mac.",
    steps: [
      {
        instruction: 'Open the Firefox menu',
        detail: 'Click the three horizontal lines (≡) in the top-right corner.',
        shortcut: '⌘ + Shift + Delete to skip ahead',
        image: 'firefox-macos-1.png',
      },
      {
        instruction: 'Click "Settings"',
        detail: 'Select "Settings" from the dropdown.',
        image: 'firefox-macos-2.png',
      },
      {
        instruction: 'Go to "Privacy & Security"',
        detail: 'Click "Privacy & Security" in the left panel.',
        image: 'firefox-macos-3.png',
      },
      {
        instruction: 'Click "Clear Data…"',
        detail: 'Find the "Cookies and Site Data" section and click "Clear Data…".',
        image: 'firefox-macos-4.png',
      },
      {
        instruction: 'Check both boxes',
        detail: 'Ensure "Cookies and Site Data" and "Cached Web Content" are both checked.',
        image: 'firefox-macos-5.png',
      },
      {
        instruction: 'Click "Clear" and confirm',
        detail: 'Click "Clear" and then "Clear Now" in the confirmation dialog.',
        image: 'firefox-macos-6.png',
      },
    ],
  },

  // ─── Firefox / Android ──────────────────────────────────────────────────────
  {
    browser: 'firefox', browserName: 'Firefox', browserColor: '#FF7139',
    os: 'android', osName: 'Android',
    intro: "Follow these steps to clear Firefox's cache and cookies on Android.",
    steps: [
      {
        instruction: 'Open the Firefox menu',
        detail: 'Open Firefox and tap the three dots (⋮) in the top-right corner.',
        image: 'firefox-android-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Scroll down and tap "Settings".',
        image: 'firefox-android-2.png',
      },
      {
        instruction: 'Tap "Delete browsing data"',
        detail: 'Find and tap "Delete browsing data" in the Settings screen.',
        image: 'firefox-android-3.png',
      },
      {
        instruction: 'Select what to clear',
        detail: 'Make sure "Cookies" and "Cache" are both checked.',
        image: 'firefox-android-4.png',
      },
      {
        instruction: 'Tap "Delete browsing data"',
        detail: 'Tap the "Delete browsing data" button at the bottom to complete the process.',
        image: 'firefox-android-5.png',
      },
    ],
  },

  // ─── Safari / macOS ─────────────────────────────────────────────────────────
  {
    browser: 'safari', browserName: 'Safari', browserColor: '#006CFF',
    os: 'macos', osName: 'macOS',
    intro: "Follow these steps to clear Safari's cache and cookies on your Mac.",
    steps: [
      {
        instruction: 'Click "Safari" in the menu bar',
        detail: 'At the very top of your screen (not inside the Safari window), click the word "Safari".',
        image: 'safari-macos-1.png',
      },
      {
        instruction: 'Open Settings (or Preferences)',
        detail: 'Click "Settings…" from the dropdown. On older Macs it may say "Preferences…" — that\'s the same thing.',
        shortcut: '⌘ + ,',
        image: 'safari-macos-2.png',
      },
      {
        instruction: 'Click the "Privacy" tab',
        detail: 'In the Settings window, click the "Privacy" tab at the top.',
        image: 'safari-macos-3.png',
      },
      {
        instruction: 'Click "Manage Website Data…"',
        detail: 'Click the "Manage Website Data…" button to see all stored data.',
        image: 'safari-macos-4.png',
      },
      {
        instruction: 'Click "Remove All"',
        detail: 'Click "Remove All" in the bottom-left of the window, then click "Remove Now" to confirm.',
        image: 'safari-macos-5.png',
      },
      {
        instruction: 'Clear the cache too',
        detail: 'In the menu bar, click "Develop" → "Empty Caches". If you don\'t see a "Develop" menu, go to Safari Settings → Advanced → tick "Show Develop menu in menu bar" first.',
        shortcut: '⌥ + ⌘ + E',
        image: 'safari-macos-6.png',
      },
    ],
  },

  // ─── Safari / iPhone ────────────────────────────────────────────────────────
  {
    browser: 'safari', browserName: 'Safari', browserColor: '#006CFF',
    os: 'iphone', osName: 'iPhone',
    intro: "Follow these steps to clear Safari's cache and cookies on your iPhone.",
    steps: [
      {
        instruction: 'Open the Settings app',
        detail: 'This is done through the Settings app — not through Safari itself. Look for the grey gear icon on your home screen.',
        image: 'safari-iphone-1.png',
      },
      {
        instruction: 'Scroll down and tap "Safari"',
        detail: 'Scroll through the list of apps until you see Safari, then tap it.',
        image: 'safari-iphone-2.png',
      },
      {
        instruction: 'Tap "Clear History and Website Data"',
        detail: 'Scroll down within the Safari settings and tap "Clear History and Website Data".',
        image: 'safari-iphone-3.png',
      },
      {
        instruction: 'Tap "Clear" to confirm',
        detail: 'A confirmation box will appear. Tap "Clear" (or "Clear History and Data") to finish.',
        image: 'safari-iphone-4.png',
      },
    ],
  },

  // ─── Safari / iPad ──────────────────────────────────────────────────────────
  {
    browser: 'safari', browserName: 'Safari', browserColor: '#006CFF',
    os: 'ipad', osName: 'iPad',
    intro: "Follow these steps to clear Safari's cache and cookies on your iPad.",
    steps: [
      {
        instruction: 'Open the Settings app',
        detail: 'Find and tap the Settings app (grey gear icon) on your iPad home screen or App Library.',
        image: 'safari-ipad-1.png',
      },
      {
        instruction: 'Tap "Safari" in the left sidebar',
        detail: 'On iPad, Settings shows a two-column layout. Tap "Safari" in the left column.',
        image: 'safari-ipad-2.png',
      },
      {
        instruction: 'Tap "Clear History and Website Data"',
        detail: 'Scroll down in the right panel and tap "Clear History and Website Data".',
        image: 'safari-ipad-3.png',
      },
      {
        instruction: 'Confirm by tapping "Clear"',
        detail: 'Tap "Clear" in the confirmation prompt that appears.',
        image: 'safari-ipad-4.png',
      },
    ],
  },

  // ─── Edge / Windows ─────────────────────────────────────────────────────────
  {
    browser: 'edge', browserName: 'Edge', browserColor: '#0078D7',
    os: 'windows', osName: 'Windows',
    intro: "Follow these steps to clear Edge's cache and cookies on Windows.",
    steps: [
      {
        instruction: 'Open the Edge menu',
        detail: 'Click the three horizontal dots (…) in the top-right corner of Edge.',
        shortcut: 'Ctrl + Shift + Delete to skip to step 4',
        image: 'edge-windows-1.png',
      },
      {
        instruction: 'Click "Settings"',
        detail: 'Click "Settings" in the dropdown menu.',
        image: 'edge-windows-2.png',
      },
      {
        instruction: 'Go to "Privacy, search, and services"',
        detail: 'Click "Privacy, search, and services" in the left sidebar.',
        image: 'edge-windows-3.png',
      },
      {
        instruction: 'Click "Choose what to clear"',
        detail: 'Under "Clear browsing data", click "Choose what to clear".',
        image: 'edge-windows-4.png',
      },
      {
        instruction: 'Set time range and check the boxes',
        detail: 'Set "Time range" to "All time". Tick "Cookies and other site data" and "Cached images and files".',
        image: 'edge-windows-5.png',
      },
      {
        instruction: 'Click "Clear now"',
        detail: 'Click the blue "Clear now" button. Edge will clear everything in a few seconds.',
        image: 'edge-windows-6.png',
      },
    ],
  },

  // ─── Edge / macOS ───────────────────────────────────────────────────────────
  {
    browser: 'edge', browserName: 'Edge', browserColor: '#0078D7',
    os: 'macos', osName: 'macOS',
    intro: "Follow these steps to clear Edge's cache and cookies on your Mac.",
    steps: [
      {
        instruction: 'Open the Edge menu',
        detail: 'Click the three dots (…) in the top-right corner of Edge.',
        shortcut: '⌘ + Shift + Delete to skip to step 4',
        image: 'edge-macos-1.png',
      },
      {
        instruction: 'Click "Settings"',
        detail: 'Select "Settings" from the menu.',
        image: 'edge-macos-2.png',
      },
      {
        instruction: 'Go to "Privacy, search, and services"',
        detail: 'Click this option in the left sidebar.',
        image: 'edge-macos-3.png',
      },
      {
        instruction: 'Click "Choose what to clear"',
        detail: 'Find the "Clear browsing data" section and click "Choose what to clear".',
        image: 'edge-macos-4.png',
      },
      {
        instruction: 'Set time range and check boxes',
        detail: 'Choose "All time" for the time range. Check "Cookies and other site data" and "Cached images and files".',
        image: 'edge-macos-5.png',
      },
      {
        instruction: 'Click "Clear now"',
        detail: 'Click "Clear now" to finish.',
        image: 'edge-macos-6.png',
      },
    ],
  },

  // ─── Brave / Windows ────────────────────────────────────────────────────────
  {
    browser: 'brave', browserName: 'Brave', browserColor: '#FB542B',
    os: 'windows', osName: 'Windows',
    intro: "Follow these steps to clear Brave's cache and cookies on Windows.",
    steps: [
      {
        instruction: 'Open the Brave menu',
        detail: 'Click the three horizontal lines (≡) in the top-right corner of Brave.',
        shortcut: 'Ctrl + Shift + Delete to skip ahead',
        image: 'brave-windows-1.png',
      },
      {
        instruction: 'Click "Settings"',
        detail: 'Click "Settings" in the dropdown.',
        image: 'brave-windows-2.png',
      },
      {
        instruction: 'Go to "Privacy and security"',
        detail: 'In the left sidebar, click "Privacy and security".',
        image: 'brave-windows-3.png',
      },
      {
        instruction: 'Click "Clear browsing data"',
        detail: 'Click the "Clear browsing data" option.',
        image: 'brave-windows-4.png',
      },
      {
        instruction: 'Set time range to "All time" and check the boxes',
        detail: 'Choose "All time". Make sure "Cookies and other site data" and "Cached images and files" are both checked.',
        image: 'brave-windows-5.png',
      },
      {
        instruction: 'Click "Clear data"',
        detail: 'Hit "Clear data". Brave will finish clearing in a moment.',
        image: 'brave-windows-6.png',
      },
    ],
  },

  // ─── Brave / macOS ──────────────────────────────────────────────────────────
  {
    browser: 'brave', browserName: 'Brave', browserColor: '#FB542B',
    os: 'macos', osName: 'macOS',
    intro: "Follow these steps to clear Brave's cache and cookies on your Mac.",
    steps: [
      {
        instruction: 'Open the Brave menu',
        detail: 'Click the three lines (≡) in the top-right corner.',
        shortcut: '⌘ + Shift + Delete to skip ahead',
        image: 'brave-macos-1.png',
      },
      {
        instruction: 'Click "Settings"',
        detail: 'Select "Settings" from the menu.',
        image: 'brave-macos-2.png',
      },
      {
        instruction: 'Go to "Privacy and security"',
        detail: 'Click "Privacy and security" in the left sidebar.',
        image: 'brave-macos-3.png',
      },
      {
        instruction: 'Click "Clear browsing data"',
        detail: 'Select "Clear browsing data" from the options.',
        image: 'brave-macos-4.png',
      },
      {
        instruction: 'Set time range and check boxes',
        detail: 'Set "All time", then check "Cookies and other site data" and "Cached images and files".',
        image: 'brave-macos-5.png',
      },
      {
        instruction: 'Click "Clear data"',
        detail: 'Click "Clear data" to complete the process.',
        image: 'brave-macos-6.png',
      },
    ],
  },

  // ─── Brave / Android ────────────────────────────────────────────────────────
  {
    browser: 'brave', browserName: 'Brave', browserColor: '#FB542B',
    os: 'android', osName: 'Android',
    intro: "Follow these steps to clear Brave's cache and cookies on Android.",
    steps: [
      {
        instruction: 'Open the Brave menu',
        detail: 'Open Brave and tap the three dots (⋮) in the top-right corner.',
        image: 'brave-android-1.png',
      },
      {
        instruction: 'Tap "History"',
        detail: 'Tap "History" in the dropdown menu.',
        image: 'brave-android-2.png',
      },
      {
        instruction: 'Tap "Clear browsing data"',
        detail: 'Tap "Clear browsing data" at the top or bottom of the History screen.',
        image: 'brave-android-3.png',
      },
      {
        instruction: 'Set time range and check boxes',
        detail: 'Choose "All time" and check "Cookies and site data" and "Cached images and files".',
        image: 'brave-android-4.png',
      },
      {
        instruction: 'Tap "Clear data"',
        detail: 'Tap "Clear data" to finish. You\'re done!',
        image: 'brave-android-5.png',
      },
    ],
  },

  // ─── Opera / Windows ────────────────────────────────────────────────────────
  {
    browser: 'opera', browserName: 'Opera', browserColor: '#FF1B2D',
    os: 'windows', osName: 'Windows',
    intro: "Follow these steps to clear Opera's cache and cookies on Windows.",
    steps: [
      {
        instruction: 'Open Opera\'s menu',
        detail: 'Click the Opera logo (big "O") in the top-left corner of Opera.',
        shortcut: 'Ctrl + Shift + Delete to skip ahead',
        image: 'opera-windows-1.png',
      },
      {
        instruction: 'Click "Clear browsing data…"',
        detail: 'Find and click "Clear browsing data…" in the menu.',
        image: 'opera-windows-2.png',
      },
      {
        instruction: 'Set time range to "All time"',
        detail: 'Make sure the time range is set to "All time" at the top of the dialog.',
        image: 'opera-windows-3.png',
      },
      {
        instruction: 'Check the right boxes',
        detail: 'Check "Cookies and other site data" and "Cached images and files".',
        image: 'opera-windows-4.png',
      },
      {
        instruction: 'Click "Clear data"',
        detail: 'Click the "Clear data" button and wait for Opera to finish.',
        image: 'opera-windows-5.png',
      },
    ],
  },

  // ─── Opera / macOS ──────────────────────────────────────────────────────────
  {
    browser: 'opera', browserName: 'Opera', browserColor: '#FF1B2D',
    os: 'macos', osName: 'macOS',
    intro: "Follow these steps to clear Opera's cache and cookies on your Mac.",
    steps: [
      {
        instruction: 'Open Opera\'s menu',
        detail: 'Click the Opera logo in the top-left corner.',
        shortcut: '⌘ + Shift + Delete to skip ahead',
        image: 'opera-macos-1.png',
      },
      {
        instruction: 'Click "Clear browsing data…"',
        detail: 'Select "Clear browsing data…" from the menu.',
        image: 'opera-macos-2.png',
      },
      {
        instruction: 'Set time range to "All time"',
        detail: 'Set the time range to "All time".',
        image: 'opera-macos-3.png',
      },
      {
        instruction: 'Check the right boxes',
        detail: 'Check "Cookies and other site data" and "Cached images and files".',
        image: 'opera-macos-4.png',
      },
      {
        instruction: 'Click "Clear data"',
        detail: 'Click "Clear data" to finish.',
        image: 'opera-macos-5.png',
      },
    ],
  },

  // ─── Samsung Internet / Android ─────────────────────────────────────────────
  {
    browser: 'samsung', browserName: 'Samsung Internet', browserColor: '#1428A0',
    os: 'android', osName: 'Android',
    intro: "Follow these steps to clear Samsung Internet's cache and cookies on your Android device.",
    steps: [
      {
        instruction: 'Open the Samsung Internet menu',
        detail: 'Open Samsung Internet and tap the three horizontal lines (≡) in the bottom-right corner.',
        image: 'samsung-android-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Tap "Settings" at the bottom of the menu.',
        image: 'samsung-android-2.png',
      },
      {
        instruction: 'Tap "Privacy and security"',
        detail: 'Find and tap "Privacy and security" in the Settings list.',
        image: 'samsung-android-3.png',
      },
      {
        instruction: 'Tap "Delete browsing data"',
        detail: 'Tap "Delete browsing data" to open the clearing options.',
        image: 'samsung-android-4.png',
      },
      {
        instruction: 'Check what you want to clear',
        detail: 'Make sure "Cookies and site data" and "Cached images and files" are both checked.',
        image: 'samsung-android-5.png',
      },
      {
        instruction: 'Tap "Delete data" and confirm',
        detail: 'Tap "Delete data", then confirm when prompted. All done!',
        image: 'samsung-android-6.png',
      },
    ],
  },
];

export function getGuide(browser: string, os: string): Guide | undefined {
  return guides.find(g => g.browser === browser && g.os === os);
}

export function getBrowserInfo(id: string) {
  return BROWSERS.find(b => b.id === id);
}

export function getPlatformInfo(id: string) {
  return PLATFORMS.find(p => p.id === id);
}
