# Dolmetsch

Just a developer-friendly tool for reading texts in foreign languages and improving reader's vocabulary.

## Alpha Version Disclaimer

It's still quite an early alpha, more like a proof of concept and some raw material for others to experiment on.
But if you are a web developer and happen to be learning some foreign languages, you may find it quite useful already.

Live demo is available at http://dolmetsch.gbezyuk.ru

![Live demo screenshot](/screenshot.png?raw=true "Live demo screenshot")


## Current State of Affairs

There's currently a just a simple vanilla HTML/CSS/JS draft implementation.

It requires only a static HTTP server to run (node-based `http-server` would do locally) and supports:
* parsing a piece of text into words, handling punctuation and numbers separately
* reader mode, where user can click on the words to see/edit translations
* vocabulary mode, where translations can be viewed all at once and edited if necessary
* vocabulary export mode (JSON)
* localStorage persistency

In order to illustrate the approach, I use first two pages of the German translation of the amazing
"Sapiens" by truly brilliant Yuval Noah Harari. Translation target languages are English and Russian.

## Known Issues and Development Plans
* [ ] Fullstops layout is buggy and to be fixed. It may require changing the layout approach.
* [ ] Words are now considered "as is" (all lowercase, though), showing no care for inflections. Thus, caring more about grammar is an obvious field for improvement.
* [ ] Speaking of grammar, one particularly interesting case would be German detachable prefixes: "aussagen -> ich sage aus".
* [ ] It's not enough just to record the words into a personal vocabulary. One needs to do reviews and test oneself. So, tools of this sort are also coming.
* [ ] Audio. Quite a separate topic. Some YouTube etc. integration also lurks in this corner.
* [ ] Support for other languages.
* [ ] Generally speaking, product-quality.
