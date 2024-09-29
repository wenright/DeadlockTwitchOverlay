# Deadlock item overlay

https://github.com/user-attachments/assets/4c2f2214-0b91-4086-8af4-c75dd6cf1beb

Lets you hover over items on Twitch streams

Works by running item images through an image classifier and rendering item data from the deadlock wiki

## Installation
Currently not on the chrome/firefox web store, so it will need to be built and installed manually.
Run `npm run build`, then in firefox, go to [about:debugging#/runtime/this-firefox](about:debugging#/runtime/this-firefox) and click "Load Temporary Add-On...", and select `build/manifest.json`.

## Updating item data
If an update comes out that modifies item data, new data can be pulled by running

`npm run pullItemData`

Which will pull data from https://github.hfwnet.com/deadlock-wiki/deadbot

## Training the model further
Instructions can be found at the ML repo: [https://github.com/wenright/DeadlockOverlayBackend](https://github.com/wenright/DeadlockOverlayBackend). Then, copy the files from `data/models/item_classifier_model` from that repo into `public/item_classifier_model` in this repo.

## TODO
* poor item recognition for items that have cooldowns and are on cooldown. Will need to pull some additional data to better train this.
* PIP mode breaks the overlay, and makes twitch UI uninteractable

## Item issues
* "extra charge" shows +1% CDR instead of +1 charges
