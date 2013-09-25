Roassal in Amber
=======
Roassal is an agile visualization engine for Smalltalk-like programming languages.
This github repository contains a port for Amber.

This project is developed by [Pablo Estefó](http://about.me/pestefo) and mentored by [Alexandre Bergel](http://bergel.eu) and [Manfred Kröhnert](http://github.com/mkroehnert).

## Installation
For running Roassal, we need you have [NodeJS (a JavaScript server)](#1---install-nodejs) installed.

### Installing nodejs
We first need NodeJS to serve javascript files to your Web Browser. Open a terminal/xterm and type "node --version". If you have something like v0.8.16, then it means you have NodeJS installed. Move to the second step. 

If you do not have NodeJS install, then download one of these installers for the latests verison of nodejs `v0.10.12` and double click on it

* [MacOSX](http://nodejs.org/dist/v0.10.12/node-v0.10.12.pkg)
* [Windows](http://nodejs.org/dist/v0.10.12/node-v0.10.12-x86.msi)
* [Source Code](http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz)
* [Other platforms (64 bit)](http://nodejs.org/download/)

NodeJs weights only 42 Mb, and will be installed on /usr/local/bin. No big deal. 
After this, you should be able to exectue `node --version` in a terminal. If you still have an error, maybe your PATH variable is not properly set.



## Running ROAmber 

### 1 - Running the NodeJS

We need to run the NodeJS server within the Terminal/xterm to make sure someone will serve the necessary files to your web browser. Start amber's server:

    ./bin/server 

Open [`http://localhost:4000/projects/roamber/index.html`](http://localhost:4000/projects/roamber/index.html) in your favourite web browser.

### 2 - Example
Click on the Workspace tab and type:

```
ROExample new linelayout2
```
and press `Ctrl-d` to execute this line
You should see several rectangles aligned on top in a small-to-big order.

## Troubleshooting

If you had any problem running Amber's server we recommend to check the [this documentation](https://github.com/amber-smalltalk/amber#building-amber) about building Amber.

## Acknowledgement
This project is sponsored by [ESUG](http://www.esug.org)  and [Object Profile](http://www.objectprofile.com). Thanks a lot! :D
