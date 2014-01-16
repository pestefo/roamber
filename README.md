# Roassal in Amber 0.12

[Roassal](http://www.objectprofile.com/#/pages/products/roassal/overview.html) is an agile visualization engine for Smalltalk-like programming languages. This github repository contains a port for running it on the [Amber Smalltalk](http://amber-lang.net) platform.

This project is developed by [Pablo Estefó](http://about.me/pestefo) and mentored by [Alexandre Bergel](http://bergel.eu) and [Manfred Kröhnert](http://github.com/mkroehnert).
The code was migrated to Amber 0.12 by [Oscar Nierstrasz](http://scg.unibe.ch/staff/oscar).

## Installation
To run Roassal, we need you have [NodeJS (a JavaScript server)](#1---install-nodejs) installed.

### Installing nodejs
We first need NodeJS to serve javascript files to your Web Browser. Open a terminal/xterm and type "node --version". If you have something like v0.8.16, then it means you have NodeJS installed. Move to the second step. 

If you do not have NodeJS installed, then download one of these installers for the latests verison of nodejs `v0.10.12` and double click on it

* [MacOSX](http://nodejs.org/dist/v0.10.12/node-v0.10.12.pkg)
* [Windows](http://nodejs.org/dist/v0.10.12/node-v0.10.12-x86.msi)
* [Source Code](http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz)
* [Other platforms (64 bit)](http://nodejs.org/download/)

NodeJs weights only 42 Mb, and will be installed on /usr/local/bin. No big deal. 
After this, you should be able to exectue `node --version` in a terminal. If you still have an error, maybe your PATH variable is not properly set.

## Running ROAmber 

### Run it locally

We need to run the NodeJS server within the Terminal/xterm to make sure someone will serve the necessary files to your web browser. Start amber's server:

    ./bin/server 

Open [`http://localhost:4000/index.html`](http://localhost:4000/index.html) in your favourite web browser.

Now you can extend and customize Roamber as you wish… Do you have an interesting idea? Already working on a cool project? Just knock the door! We want to know! 

### or… Take a look to our examples!

Let's try some examples we have written by going to:

[`http://pestefo.github.io/roamber/`](http://pestefo.github.io/roamber/) 

You can edit them or write your own examples!

## Troubleshooting

If you had any problem running Amber's server we recommend to check the [this documentation](https://github.com/amber-smalltalk/amber#building-amber) about building Amber.

## Acknowledgement
This project was sponsored by [ESUG](http://www.esug.org)  and [Object Profile](http://www.objectprofile.com). Thanks a lot! :D
