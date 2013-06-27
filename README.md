Roassal in Amber
=======

Porting Roassal in Amber Smalltalk platform

## Installation

Install nodejs

* [MacOSX](http://nodejs.org/dist/v0.10.12/node-v0.10.12.pkg)
* [Windows](http://nodejs.org/dist/v0.10.12/node-v0.10.12-x86.msi)
* [Source Code](http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz)
* [Other platforms (64 bit)](http://nodejs.org/download/)

[Download amber](https://github.com/amber-smalltalk/amber/archive/0.10.zip) and unzip it.

Install amber:


    npm install -g grunt-cli grunt-init
    cd ${Amber_DIR}
    npm install && grunt


Create a directory for roassal code:


    cd ${Amber_DIR}
    mkdir projects && cd projects
    mkdir roassal && cd roassal

[Download the code](https://github.com/pestefo/roamber/archive/master.zip) and put it in  ```${Amber_DIR}/projects/roassal```

Start amber's server

    ./${Amber_DIR}/bin/server 

Open [`http://localhost:4000/projects/roassal-d3/index.html`](http://localhost:4000/projects/roassal-d3/index.html) in your favourite web browser.

