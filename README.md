# Deadlock item overlay

https://github.com/user-attachments/assets/4c2f2214-0b91-4086-8af4-c75dd6cf1beb

Lets you hover over items on Twitch streams

Works by running item images through an image classifier and rendering item data from the deadlock wiki

## Installation

[Firefox](https://addons.mozilla.org/en-US/firefox/addon/deadlock-twitch-overlay/)
[Chrome](https://chromewebstore.google.com/detail/deadlock-twitch-overlay/iphdkbghhdbpjnblblfgfiliacmpocph)

## Building

`npm install`

`npm run build`

Firefox: go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox), click "Load Temporary Add-On...", and select `manifest.json`

## Updating item data
If an update comes out that modifies item data, new data can be pulled by running

`npm run pullItemData`

Which will pull data from [https://github.com/deadlock-wiki/deadbot](https://github.com/deadlock-wiki/deadbot)

## Training the model further
Instructions can be found at the ML repo: [https://github.com/wenright/DeadlockOverlayBackend](https://github.com/wenright/DeadlockOverlayBackend). Then, copy the files from `data/models/item_classifier_model` from that repo into `public/item_classifier_model` in this repo.

## TODO
* Better UI to match game a little closer
* Update nerual net and UI icons to be 49x49 instead of the old 30x30, and get more 49x49 training data
* Find a better way to open the overlay, without getting in the way of the rest of the Twitch UI
* Allow parsing while shop UI is open (It's the same icons, they're just bigger and moved over slightly, so this should be doable)
* Find a better way to handle items on cooldown (maybe some image preprocessing?)
* Add `Streaming Together - Deadlock` to the whitelist for starting the overlay
