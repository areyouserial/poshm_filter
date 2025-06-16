Poshmark News Feed Filter

This browser extension for Chrome and Firefox helps declutter your Poshmark news feed by filtering out unwanted and repetitive posts. It's designed for users who want a cleaner Browse experience free from excessive promotional content and irrelevant notifications.
Features

The extension currently allows you to hide:

    pm_editor posts: Removes official Poshmark promotional content.
    "Shop" posts: Filters out spammy listings that include the word "shop."
    "is following you" notifications: Hides notifications when users follow you.
    "your top picks are here" notifications: Conceals Poshmark's curated suggestions.
    "you might like these" suggestions: Eliminates additional algorithmic recommendations.
    "shared your listing" notifications: Reduces noise from others sharing your items.

Installation
Chrome

    Download the repository as a ZIP file and extract it.
    Open Chrome and navigate to chrome://extensions.
    Enable "Developer mode" in the top-right corner.
    Click "Load unpacked" and select the extracted extension folder.

Firefox

    Download the repository as a ZIP file and extract it.
    Open Firefox and navigate to about:debugging#/runtime/this-firefox.
    Click "Load Temporary Add-on..." and select any file within the extracted extension folder (e.g., manifest.json).

Contribution & Customization

This extension is open-source, and contributions are welcome!
Code Structure

The core filtering logic resides in [content_script_file]. It observes changes in the Poshmark news feed DOM and applies display: none; to elements matching the defined filter criteria.
Adding New Filters

To add new filters or modify existing ones, you'll primarily work with:

    manifest.json: Defines the extension's permissions and content scripts.
    options.html / options.js: Manages the user interface for toggling filters.
    [content_script_file]: Contains the JavaScript that inspects and modifies the DOM.

Feel free to fork the repository, implement new filtering rules (e.g., for Posh Shows or other common spam), and submit a pull request. Your contributions can help make the Poshmark experience better for everyone!
