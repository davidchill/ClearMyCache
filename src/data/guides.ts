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
  { id: 'chrome',      name: 'Chrome',           color: '#EA4335' },
  { id: 'firefox',     name: 'Firefox',          color: '#FF7139' },
  { id: 'safari',      name: 'Safari',           color: '#006CFF' },
  { id: 'edge',        name: 'Edge',             color: '#0078D7' },
  { id: 'brave',       name: 'Brave',            color: '#FB542B' },
  { id: 'opera',       name: 'Opera',            color: '#FF1B2D' },
  { id: 'duckduckgo',  name: 'DuckDuckGo',       color: '#DE5833' },
  { id: 'archsearch',  name: 'Arch Search',      color: '#8B5CF6' },
  { id: 'samsung',     name: 'Samsung Internet', color: '#1428A0' },
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
  ['chrome',      'iphone'],
  ['chrome',      'ipad'],
  ['chrome',      'android'],
  ['firefox',     'windows'],
  ['firefox',     'macos'],
  ['firefox',     'iphone'],
  ['firefox',     'ipad'],
  ['firefox',     'android'],
  ['safari',      'macos'],
  ['safari',      'iphone'],
  ['safari',      'ipad'],
  ['edge',        'windows'],
  ['edge',        'macos'],
  ['edge',        'iphone'],
  ['edge',        'ipad'],
  ['brave',       'windows'],
  ['brave',       'macos'],
  ['brave',       'iphone'],
  ['brave',       'ipad'],
  ['brave',       'android'],
  ['opera',       'windows'],
  ['opera',       'macos'],
  ['opera',       'iphone'],
  ['opera',       'ipad'],
  ['duckduckgo',  'windows'],
  ['duckduckgo',  'macos'],
  ['duckduckgo',  'iphone'],
  ['duckduckgo',  'ipad'],
  ['duckduckgo',  'android'],
  ['archsearch',  'windows'],
  ['archsearch',  'macos'],
  ['archsearch',  'iphone'],
  ['archsearch',  'ipad'],
  ['archsearch',  'android'],
  ['samsung',     'android'],
  ['edge',        'android'],
  ['opera',       'android'],
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

  // ─── Firefox / iPhone ───────────────────────────────────────────────────────
  {
    browser: 'firefox', browserName: 'Firefox', browserColor: '#FF7139',
    os: 'iphone', osName: 'iPhone',
    intro: "Follow these steps to clear Firefox's cache and cookies on your iPhone.",
    steps: [
      {
        instruction: 'Open the Firefox menu',
        detail: 'Open the Firefox app. Tap the three horizontal lines (≡) in the bottom-right corner.',
        image: 'firefox-iphone-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Scroll down in the menu and tap "Settings".',
        image: 'firefox-iphone-2.png',
      },
      {
        instruction: 'Tap "Data Management"',
        detail: 'In Settings, scroll down and tap "Data Management".',
        image: 'firefox-iphone-3.png',
      },
      {
        instruction: 'Tap "Clear Private Data"',
        detail: 'Tap "Clear Private Data" at the bottom of the screen.',
        image: 'firefox-iphone-4.png',
      },
      {
        instruction: 'Make sure the right items are checked, then confirm',
        detail: 'Ensure "Cookies" and "Cache" are both checked. Tap "Clear Private Data" in the confirmation dialog to finish.',
        image: 'firefox-iphone-5.png',
      },
    ],
  },

  // ─── Edge / iPhone ──────────────────────────────────────────────────────────
  {
    browser: 'edge', browserName: 'Edge', browserColor: '#0078D7',
    os: 'iphone', osName: 'iPhone',
    intro: "Follow these steps to clear Edge's cache and cookies on your iPhone.",
    steps: [
      {
        instruction: 'Open Edge and tap the three dots',
        detail: 'Open Microsoft Edge. Tap the three dots (…) in the bottom toolbar.',
        image: 'edge-iphone-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Tap "Settings" in the menu that appears.',
        image: 'edge-iphone-2.png',
      },
      {
        instruction: 'Tap "Privacy and Security"',
        detail: 'In Settings, tap "Privacy and Security".',
        image: 'edge-iphone-3.png',
      },
      {
        instruction: 'Tap "Clear Browsing Data"',
        detail: 'Tap "Clear Browsing Data" to open the clearing options.',
        image: 'edge-iphone-4.png',
      },
      {
        instruction: 'Select what to clear',
        detail: 'Make sure "Cookies and other site data" and "Cached images and files" are checked. Set the time range to "All time".',
        image: 'edge-iphone-5.png',
      },
      {
        instruction: 'Tap "Clear Now" to confirm',
        detail: 'Tap "Clear Now" to finish clearing your data.',
        image: 'edge-iphone-6.png',
      },
    ],
  },

  // ─── Brave / iPhone ─────────────────────────────────────────────────────────
  {
    browser: 'brave', browserName: 'Brave', browserColor: '#FB542B',
    os: 'iphone', osName: 'iPhone',
    intro: "Follow these steps to clear Brave's cache and cookies on your iPhone.",
    steps: [
      {
        instruction: 'Open Brave and tap the menu',
        detail: 'Open Brave. Tap the three lines (≡) in the bottom-right corner.',
        image: 'brave-iphone-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Tap "Settings" from the menu.',
        image: 'brave-iphone-2.png',
      },
      {
        instruction: 'Tap "Brave Shields & Privacy"',
        detail: 'Scroll down and tap "Brave Shields & Privacy".',
        image: 'brave-iphone-3.png',
      },
      {
        instruction: 'Tap "Clear Private Data"',
        detail: 'Scroll down and tap "Clear Private Data".',
        image: 'brave-iphone-4.png',
      },
      {
        instruction: 'Select what to clear',
        detail: 'Make sure "Cache" and "Cookies and Site Data" are both checked.',
        image: 'brave-iphone-5.png',
      },
      {
        instruction: 'Tap "Clear Private Data" to confirm',
        detail: 'Tap the "Clear Private Data" button at the bottom to confirm.',
        image: 'brave-iphone-6.png',
      },
    ],
  },

  // ─── Opera / iPhone ─────────────────────────────────────────────────────────
  {
    browser: 'opera', browserName: 'Opera', browserColor: '#FF1B2D',
    os: 'iphone', osName: 'iPhone',
    intro: "Follow these steps to clear Opera's cache and cookies on your iPhone.",
    steps: [
      {
        instruction: 'Open Opera and tap the profile icon',
        detail: 'Open the Opera app. Tap the profile/account icon in the bottom-right corner.',
        image: 'opera-iphone-1.png',
      },
      {
        instruction: 'Tap the gear icon (Settings)',
        detail: 'Tap the gear icon in the top-right of the panel that opens.',
        image: 'opera-iphone-2.png',
      },
      {
        instruction: 'Tap "Privacy"',
        detail: 'Tap "Privacy" in the Settings list.',
        image: 'opera-iphone-3.png',
      },
      {
        instruction: 'Tap "Clear All"',
        detail: 'Tap "Clear All" to clear your cookies and cached data.',
        image: 'opera-iphone-4.png',
      },
      {
        instruction: 'Confirm',
        detail: 'Tap "Clear" in the confirmation dialog that appears. You\'re done!',
        image: 'opera-iphone-5.png',
      },
    ],
  },

  // ─── DuckDuckGo / macOS ─────────────────────────────────────────────────────
  {
    browser: 'duckduckgo', browserName: 'DuckDuckGo', browserColor: '#DE5833',
    os: 'macos', osName: 'macOS',
    intro: "Follow these steps to clear DuckDuckGo Browser's cache and cookies on your Mac.",
    steps: [
      {
        instruction: 'Click the Fire Button in the toolbar',
        detail: 'Open DuckDuckGo Browser. Click the 🔥 Fire Button in the browser toolbar — this is DuckDuckGo\'s one-click data clearing feature.',
        image: 'duckduckgo-macos-1.png',
      },
      {
        instruction: 'Review what will be cleared',
        detail: 'A confirmation dialog will appear showing all tabs and browsing data (cookies, cache, history) that will be removed.',
        image: 'duckduckgo-macos-2.png',
      },
      {
        instruction: 'Click "Clear" to confirm',
        detail: 'Click the red "Clear" button. DuckDuckGo will instantly wipe your browsing data.',
        image: 'duckduckgo-macos-3.png',
      },
      {
        instruction: 'Reload the page',
        detail: 'Open the page you were having trouble with and refresh it.',
        shortcut: '⌘ + R',
      },
    ],
  },

  // ─── DuckDuckGo / iPhone ────────────────────────────────────────────────────
  {
    browser: 'duckduckgo', browserName: 'DuckDuckGo', browserColor: '#DE5833',
    os: 'iphone', osName: 'iPhone',
    intro: "Follow these steps to clear DuckDuckGo Browser's cache and cookies on your iPhone.",
    steps: [
      {
        instruction: 'Open DuckDuckGo and tap the Fire Button',
        detail: 'Open the DuckDuckGo app. Tap the 🔥 Fire Button at the bottom of the screen.',
        image: 'duckduckgo-iphone-1.png',
      },
      {
        instruction: 'Review what will be cleared',
        detail: 'The app will show you all the tabs and browsing data about to be removed.',
        image: 'duckduckgo-iphone-2.png',
      },
      {
        instruction: 'Tap "Clear" to confirm',
        detail: 'Tap the "Clear" button. DuckDuckGo will instantly clear all your tabs and browsing data.',
        image: 'duckduckgo-iphone-3.png',
      },
    ],
  },

  // ─── Arch Search / macOS ────────────────────────────────────────────────────
  {
    browser: 'archsearch', browserName: 'Arch Search', browserColor: '#8B5CF6',
    os: 'macos', osName: 'macOS',
    intro: "Follow these steps to clear Arch Search's cache and cookies on your Mac.",
    steps: [
      {
        instruction: 'Open the Arch Search menu',
        detail: 'Open Arch Search and click the menu icon in the top-right corner.',
        image: 'archsearch-macos-1.png',
      },
      {
        instruction: 'Click "Settings"',
        detail: 'Click "Settings" in the dropdown menu.',
        shortcut: '⌘ + ,',
        image: 'archsearch-macos-2.png',
      },
      {
        instruction: 'Go to "Privacy and Security"',
        detail: 'Click "Privacy and Security" in the left sidebar.',
        image: 'archsearch-macos-3.png',
      },
      {
        instruction: 'Click "Clear Browsing Data"',
        detail: 'Click "Clear Browsing Data" to open the clearing dialog.',
        image: 'archsearch-macos-4.png',
      },
      {
        instruction: 'Set time range to "All time" and check the boxes',
        detail: 'Set the time range to "All time". Make sure "Cookies and other site data" and "Cached images and files" are both checked.',
        image: 'archsearch-macos-5.png',
      },
      {
        instruction: 'Click "Clear data"',
        detail: 'Click "Clear data" to finish.',
        image: 'archsearch-macos-6.png',
      },
    ],
  },

  // ─── Arch Search / iPhone ───────────────────────────────────────────────────
  {
    browser: 'archsearch', browserName: 'Arch Search', browserColor: '#8B5CF6',
    os: 'iphone', osName: 'iPhone',
    intro: "Follow these steps to clear Arch Search's cache and cookies on your iPhone.",
    steps: [
      {
        instruction: 'Open Arch Search and tap the menu',
        detail: 'Open the Arch Search app. Tap the menu or profile icon on the screen.',
        image: 'archsearch-iphone-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Tap "Settings" in the menu.',
        image: 'archsearch-iphone-2.png',
      },
      {
        instruction: 'Tap "Privacy" or "Clear Data"',
        detail: 'In Settings, tap the "Privacy" option or look for "Clear Browsing Data" and tap it.',
        image: 'archsearch-iphone-3.png',
      },
      {
        instruction: 'Select what to clear',
        detail: 'Make sure "Cookies" and "Cache" are both checked.',
        image: 'archsearch-iphone-4.png',
      },
      {
        instruction: 'Tap "Clear" to confirm',
        detail: 'Tap "Clear" or "Clear Data" to confirm and remove your browsing data.',
        image: 'archsearch-iphone-5.png',
      },
    ],
  },

  // ─── Chrome / iPad ──────────────────────────────────────────────────────────
  {
    browser: 'chrome', browserName: 'Chrome', browserColor: '#EA4335',
    os: 'ipad', osName: 'iPad',
    intro: "Follow these steps to clear Chrome's cache and cookies on your iPad.",
    steps: [
      {
        instruction: 'Open Chrome and tap the three dots',
        detail: 'Open the Chrome app. Tap the three dots (⋯) in the top-right corner of your screen.',
        image: 'chrome-ipad-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'In the menu that appears, scroll down and tap "Settings".',
        image: 'chrome-ipad-2.png',
      },
      {
        instruction: 'Tap "Privacy and Security"',
        detail: 'In Settings, tap "Privacy and Security".',
        image: 'chrome-ipad-3.png',
      },
      {
        instruction: 'Tap "Clear Browsing Data"',
        detail: 'Tap "Clear Browsing Data" at the top of the Privacy section.',
        image: 'chrome-ipad-4.png',
      },
      {
        instruction: 'Select what to clear',
        detail: 'Make sure "Cookies, Site Data" and "Cached Images and Files" are checked. Set Time Range to "All Time" for best results.',
        image: 'chrome-ipad-5.png',
      },
      {
        instruction: 'Tap "Clear Browsing Data" to confirm',
        detail: 'Tap the red "Clear Browsing Data" button to finish.',
        image: 'chrome-ipad-6.png',
      },
    ],
  },

  // ─── Firefox / iPad ─────────────────────────────────────────────────────────
  {
    browser: 'firefox', browserName: 'Firefox', browserColor: '#FF7139',
    os: 'ipad', osName: 'iPad',
    intro: "Follow these steps to clear Firefox's cache and cookies on your iPad.",
    steps: [
      {
        instruction: 'Open the Firefox menu',
        detail: 'Open the Firefox app. Tap the three horizontal lines (≡) in the top-right corner.',
        image: 'firefox-ipad-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Scroll down and tap "Settings" in the menu.',
        image: 'firefox-ipad-2.png',
      },
      {
        instruction: 'Tap "Data Management"',
        detail: 'In Settings, scroll down and tap "Data Management".',
        image: 'firefox-ipad-3.png',
      },
      {
        instruction: 'Tap "Clear Private Data"',
        detail: 'Tap "Clear Private Data" at the bottom of the screen.',
        image: 'firefox-ipad-4.png',
      },
      {
        instruction: 'Make sure the right items are checked, then confirm',
        detail: 'Ensure "Cookies" and "Cache" are both checked. Tap "Clear Private Data" in the confirmation dialog to finish.',
        image: 'firefox-ipad-5.png',
      },
    ],
  },

  // ─── Edge / iPad ────────────────────────────────────────────────────────────
  {
    browser: 'edge', browserName: 'Edge', browserColor: '#0078D7',
    os: 'ipad', osName: 'iPad',
    intro: "Follow these steps to clear Edge's cache and cookies on your iPad.",
    steps: [
      {
        instruction: 'Open Edge and tap the three dots',
        detail: 'Open Microsoft Edge. Tap the three dots (…) in the bottom toolbar.',
        image: 'edge-ipad-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Tap "Settings" in the menu that appears.',
        image: 'edge-ipad-2.png',
      },
      {
        instruction: 'Tap "Privacy and Security"',
        detail: 'In Settings, tap "Privacy and Security".',
        image: 'edge-ipad-3.png',
      },
      {
        instruction: 'Tap "Clear Browsing Data"',
        detail: 'Tap "Clear Browsing Data" to open the clearing options.',
        image: 'edge-ipad-4.png',
      },
      {
        instruction: 'Select what to clear',
        detail: 'Make sure "Cookies and other site data" and "Cached images and files" are checked. Set the time range to "All time".',
        image: 'edge-ipad-5.png',
      },
      {
        instruction: 'Tap "Clear Now" to confirm',
        detail: 'Tap "Clear Now" to finish clearing your data.',
        image: 'edge-ipad-6.png',
      },
    ],
  },

  // ─── Brave / iPad ───────────────────────────────────────────────────────────
  {
    browser: 'brave', browserName: 'Brave', browserColor: '#FB542B',
    os: 'ipad', osName: 'iPad',
    intro: "Follow these steps to clear Brave's cache and cookies on your iPad.",
    steps: [
      {
        instruction: 'Open Brave and tap the menu',
        detail: 'Open Brave. Tap the three lines (≡) in the top-right corner.',
        image: 'brave-ipad-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Tap "Settings" from the menu.',
        image: 'brave-ipad-2.png',
      },
      {
        instruction: 'Tap "Brave Shields & Privacy"',
        detail: 'Scroll down and tap "Brave Shields & Privacy".',
        image: 'brave-ipad-3.png',
      },
      {
        instruction: 'Tap "Clear Private Data"',
        detail: 'Scroll down and tap "Clear Private Data".',
        image: 'brave-ipad-4.png',
      },
      {
        instruction: 'Select what to clear',
        detail: 'Make sure "Cache" and "Cookies and Site Data" are both checked.',
        image: 'brave-ipad-5.png',
      },
      {
        instruction: 'Tap "Clear Private Data" to confirm',
        detail: 'Tap the "Clear Private Data" button at the bottom to confirm.',
        image: 'brave-ipad-6.png',
      },
    ],
  },

  // ─── Opera / iPad ───────────────────────────────────────────────────────────
  {
    browser: 'opera', browserName: 'Opera', browserColor: '#FF1B2D',
    os: 'ipad', osName: 'iPad',
    intro: "Follow these steps to clear Opera's cache and cookies on your iPad.",
    steps: [
      {
        instruction: 'Open Opera and tap the profile icon',
        detail: 'Open the Opera app. Tap the profile/account icon in the bottom-right corner.',
        image: 'opera-ipad-1.png',
      },
      {
        instruction: 'Tap the gear icon (Settings)',
        detail: 'Tap the gear icon in the top-right of the panel that opens.',
        image: 'opera-ipad-2.png',
      },
      {
        instruction: 'Tap "Privacy"',
        detail: 'Tap "Privacy" in the Settings list.',
        image: 'opera-ipad-3.png',
      },
      {
        instruction: 'Tap "Clear All"',
        detail: 'Tap "Clear All" to clear your cookies and cached data.',
        image: 'opera-ipad-4.png',
      },
      {
        instruction: 'Confirm',
        detail: 'Tap "Clear" in the confirmation dialog that appears. You\'re done!',
        image: 'opera-ipad-5.png',
      },
    ],
  },

  // ─── DuckDuckGo / iPad ──────────────────────────────────────────────────────
  {
    browser: 'duckduckgo', browserName: 'DuckDuckGo', browserColor: '#DE5833',
    os: 'ipad', osName: 'iPad',
    intro: "Follow these steps to clear DuckDuckGo Browser's cache and cookies on your iPad.",
    steps: [
      {
        instruction: 'Open DuckDuckGo and tap the Fire Button',
        detail: 'Open the DuckDuckGo app. Tap the 🔥 Fire Button at the bottom of the screen.',
        image: 'duckduckgo-ipad-1.png',
      },
      {
        instruction: 'Review what will be cleared',
        detail: 'The app will show you all the tabs and browsing data about to be removed.',
        image: 'duckduckgo-ipad-2.png',
      },
      {
        instruction: 'Tap "Clear" to confirm',
        detail: 'Tap the "Clear" button. DuckDuckGo will instantly clear all your tabs and browsing data.',
        image: 'duckduckgo-ipad-3.png',
      },
    ],
  },

  // ─── Arch Search / iPad ─────────────────────────────────────────────────────
  {
    browser: 'archsearch', browserName: 'Arch Search', browserColor: '#8B5CF6',
    os: 'ipad', osName: 'iPad',
    intro: "Follow these steps to clear Arch Search's cache and cookies on your iPad.",
    steps: [
      {
        instruction: 'Open Arch Search and tap the menu',
        detail: 'Open the Arch Search app. Tap the menu or profile icon on the screen.',
        image: 'archsearch-ipad-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Tap "Settings" in the menu.',
        image: 'archsearch-ipad-2.png',
      },
      {
        instruction: 'Tap "Privacy" or "Clear Data"',
        detail: 'In Settings, tap the "Privacy" option or look for "Clear Browsing Data" and tap it.',
        image: 'archsearch-ipad-3.png',
      },
      {
        instruction: 'Select what to clear',
        detail: 'Make sure "Cookies" and "Cache" are both checked.',
        image: 'archsearch-ipad-4.png',
      },
      {
        instruction: 'Tap "Clear" to confirm',
        detail: 'Tap "Clear" or "Clear Data" to confirm and remove your browsing data.',
        image: 'archsearch-ipad-5.png',
      },
    ],
  },

  // ─── DuckDuckGo / Windows ───────────────────────────────────────────────────
  {
    browser: 'duckduckgo', browserName: 'DuckDuckGo', browserColor: '#DE5833',
    os: 'windows', osName: 'Windows',
    intro: "Follow these steps to clear DuckDuckGo Browser's cache and cookies on Windows.",
    steps: [
      {
        instruction: 'Click the Fire Button in the toolbar',
        detail: 'Open DuckDuckGo Browser. Click the 🔥 Fire Button in the browser toolbar — this is DuckDuckGo\'s one-click data clearing feature.',
        image: 'duckduckgo-windows-1.png',
      },
      {
        instruction: 'Review what will be cleared',
        detail: 'A confirmation dialog will appear showing all tabs and browsing data (cookies, cache, history) that will be removed.',
        image: 'duckduckgo-windows-2.png',
      },
      {
        instruction: 'Click "Clear" to confirm',
        detail: 'Click the red "Clear" button. DuckDuckGo will instantly wipe your browsing data.',
        image: 'duckduckgo-windows-3.png',
      },
      {
        instruction: 'Reload the page',
        detail: 'Open the page you were having trouble with and press F5 to refresh.',
        shortcut: 'F5 or Ctrl + R',
      },
    ],
  },

  // ─── DuckDuckGo / Android ───────────────────────────────────────────────────
  {
    browser: 'duckduckgo', browserName: 'DuckDuckGo', browserColor: '#DE5833',
    os: 'android', osName: 'Android',
    intro: "Follow these steps to clear DuckDuckGo Browser's cache and cookies on your Android device.",
    steps: [
      {
        instruction: 'Open DuckDuckGo and tap the Fire Button',
        detail: 'Open the DuckDuckGo app. Tap the 🔥 Fire Button at the bottom of the screen.',
        image: 'duckduckgo-android-1.png',
      },
      {
        instruction: 'Review what will be cleared',
        detail: 'The app will show you all the tabs and browsing data about to be removed.',
        image: 'duckduckgo-android-2.png',
      },
      {
        instruction: 'Tap "Clear" to confirm',
        detail: 'Tap the "Clear" button. DuckDuckGo will instantly clear all your tabs and browsing data.',
        image: 'duckduckgo-android-3.png',
      },
    ],
  },

  // ─── Arch Search / Windows ──────────────────────────────────────────────────
  {
    browser: 'archsearch', browserName: 'Arch Search', browserColor: '#8B5CF6',
    os: 'windows', osName: 'Windows',
    intro: "Follow these steps to clear Arch Search's cache and cookies on Windows.",
    steps: [
      {
        instruction: 'Open the Arch Search menu',
        detail: 'Open Arch Search and click the menu icon in the top-right corner.',
        shortcut: 'Ctrl + Shift + Delete to skip ahead',
        image: 'archsearch-windows-1.png',
      },
      {
        instruction: 'Click "Settings"',
        detail: 'Click "Settings" in the dropdown menu.',
        image: 'archsearch-windows-2.png',
      },
      {
        instruction: 'Go to "Privacy and Security"',
        detail: 'Click "Privacy and Security" in the left sidebar.',
        image: 'archsearch-windows-3.png',
      },
      {
        instruction: 'Click "Clear Browsing Data"',
        detail: 'Click "Clear Browsing Data" to open the clearing dialog.',
        image: 'archsearch-windows-4.png',
      },
      {
        instruction: 'Set time range to "All time" and check the boxes',
        detail: 'Set the time range to "All time". Make sure "Cookies and other site data" and "Cached images and files" are both checked.',
        image: 'archsearch-windows-5.png',
      },
      {
        instruction: 'Click "Clear data"',
        detail: 'Click "Clear data" to finish.',
        image: 'archsearch-windows-6.png',
      },
    ],
  },

  // ─── Arch Search / Android ──────────────────────────────────────────────────
  {
    browser: 'archsearch', browserName: 'Arch Search', browserColor: '#8B5CF6',
    os: 'android', osName: 'Android',
    intro: "Follow these steps to clear Arch Search's cache and cookies on your Android device.",
    steps: [
      {
        instruction: 'Open the Arch Search menu',
        detail: 'Open Arch Search and tap the menu icon in the top-right corner.',
        image: 'archsearch-android-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Tap "Settings" in the menu.',
        image: 'archsearch-android-2.png',
      },
      {
        instruction: 'Tap "Privacy and Security"',
        detail: 'Tap "Privacy and Security" in the Settings list.',
        image: 'archsearch-android-3.png',
      },
      {
        instruction: 'Tap "Clear Browsing Data"',
        detail: 'Tap "Clear Browsing Data" to open the clearing dialog.',
        image: 'archsearch-android-4.png',
      },
      {
        instruction: 'Set time range and check the boxes',
        detail: 'Set the time range to "All time". Make sure "Cookies and site data" and "Cached images and files" are both checked.',
        image: 'archsearch-android-5.png',
      },
      {
        instruction: 'Tap "Clear data"',
        detail: 'Tap "Clear data" to finish. You\'re done!',
        image: 'archsearch-android-6.png',
      },
    ],
  },

  // ─── Edge / Android ─────────────────────────────────────────────────────────
  {
    browser: 'edge', browserName: 'Edge', browserColor: '#0078D7',
    os: 'android', osName: 'Android',
    intro: "Follow these steps to clear Edge's cache and cookies on your Android device.",
    steps: [
      {
        instruction: 'Open the Edge menu',
        detail: 'Open Microsoft Edge and tap the three dots (…) in the bottom toolbar.',
        image: 'edge-android-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Tap "Settings" in the menu that appears.',
        image: 'edge-android-2.png',
      },
      {
        instruction: 'Tap "Privacy and Security"',
        detail: 'In Settings, tap "Privacy and Security".',
        image: 'edge-android-3.png',
      },
      {
        instruction: 'Tap "Clear Browsing Data"',
        detail: 'Tap "Clear Browsing Data" to open the clearing options.',
        image: 'edge-android-4.png',
      },
      {
        instruction: 'Select what to clear',
        detail: 'Make sure "Cookies and other site data" and "Cached images and files" are checked. Set the time range to "All time".',
        image: 'edge-android-5.png',
      },
      {
        instruction: 'Tap "Clear Now" to confirm',
        detail: 'Tap "Clear Now" to finish clearing your data.',
        image: 'edge-android-6.png',
      },
    ],
  },

  // ─── Opera / Android ────────────────────────────────────────────────────────
  {
    browser: 'opera', browserName: 'Opera', browserColor: '#FF1B2D',
    os: 'android', osName: 'Android',
    intro: "Follow these steps to clear Opera's cache and cookies on your Android device.",
    steps: [
      {
        instruction: 'Open the Opera menu',
        detail: 'Open Opera and tap the Opera logo icon in the bottom navigation bar.',
        image: 'opera-android-1.png',
      },
      {
        instruction: 'Tap "Settings"',
        detail: 'Tap "Settings" in the panel that opens.',
        image: 'opera-android-2.png',
      },
      {
        instruction: 'Tap "Privacy"',
        detail: 'Tap "Privacy" in the Settings list.',
        image: 'opera-android-3.png',
      },
      {
        instruction: 'Tap "Clear Browsing Data"',
        detail: 'Tap "Clear Browsing Data" to open the clearing dialog.',
        image: 'opera-android-4.png',
      },
      {
        instruction: 'Set time range and check the boxes',
        detail: 'Set the time range to "All time". Make sure "Cookies and site data" and "Cached images and files" are both checked.',
        image: 'opera-android-5.png',
      },
      {
        instruction: 'Tap "Clear data"',
        detail: 'Tap "Clear data" to finish. You\'re done!',
        image: 'opera-android-6.png',
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
