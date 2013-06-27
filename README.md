Roassal in Amber
=======

Porting Roassal in Amber Smalltalk platform

## Installation

[Install nodejs](http://nodejs.org/download/)

[Download amber](https://github.com/amber-smalltalk/amber/archive/0.10.zip) and unzip it.

Install amber:


    npm install -g grunt-cli grunt-init
    cd ${Amber_DIR}
    npm install && grunt


Create a directory for roassal code:


    cd ${Amber_DIR}
    mkdir projects && cd projects
    mkdir roassal && cd roassal

Download the code and put it in  ```${Amber_DIR}/projects/roassal```

Start amber's server

    ./${Amber_DIR}/bin/server 

Open ```http://localhost:4000/projects/roassal-d3/index.html``` in your favourite web browser.

