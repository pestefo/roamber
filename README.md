Roassal in Amber
=======
Roassal is an agile visualization engine for Smalltalk-like programming languages.
This github repository contains a port for Amber.


## Installation
The installation of Roassal requires:

1. NodeJS (a JavaScript server)
1. the Amber programming language and 
1.  the Roassal source code.

After this installation procedure, you will be able to run the examples we provide and contribute to enhancing Roassal.

### 1 - Install nodejs
We first need NodeJS to serve javascript files to your Web Browser. Open a terminal/xterm and type "node --version". If you have something like v0.8.16, then it means you have NodeJS installed. Move to the second step. 

If you do not have NodeJS install, then download one of these installers for the latests verison of nodejs `v0.10.12` and double click on it

* [MacOSX](http://nodejs.org/dist/v0.10.12/node-v0.10.12.pkg)
* [Windows](http://nodejs.org/dist/v0.10.12/node-v0.10.12-x86.msi)
* [Source Code](http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz)
* [Other platforms (64 bit)](http://nodejs.org/download/)

NodeJs weights only 42 Mb, and will be installed on /usr/local/bin. No big deal. 
After this, you should be able to exectue `node --version` in a terminal. If you still have an error, maybe your PATH variable is not properly set.

### 2 - Install Amber

You need to download Amber, the Smalltalk-like programming language in which Roassal is written. This is an easy step.
[Download amber](https://github.com/amber-smalltalk/amber/archive/0.10.zip)(`v0.10.0`) and unzip the file. It contains everything you need to run the NodeJS server and develop in Amber.

### 3 - Install ROAmber
The final step is install Roassal. Again a very light step.
We assume ${Amber_DIR} is the absolute path where Amber is installed.
#### 3.a Download Zip file
Create a directory for roamber code next to the distribution of Amber:

    cd ${Amber_DIR}
    mkdir projects && cd projects
    mkdir roamber && cd roamber
    
Then you have to [download the code](https://github.com/pestefo/roamber/archive/master.zip) and put all the content in  ```${Amber_DIR}/projects/roamber```

We do not need the roamber-master folder. Move everything contained in roamber-master in your roassal folder. If you do not do this, then you need to adjust the URL given in the web browser.


#### 3.b Clone repository
An alternative step is to clone this repository into projects folder. To do that you need to have `git` installed. To be sure type `git --version` into a terminal or xTerm and it should shows you your installed git version. In case you have not installed git, [check this out](https://help.github.com/articles/set-up-git). 

Then, in a terminal type:

    cd ${Amber_DIR}
    mkdir projects && cd projects
    git clone git@github.com:pestefo/roamber.git

Whatever the step you followed, you should have:

```
${Amber_DIR}/bin
${Amber_DIR}/css
${Amber_DIR}/... "Other Amber stuff"
${Amber_DIR}/projects
${Amber_DIR}/projects/roamber/
${Amber_DIR}/projects/roamber/index.html
${Amber_DIR}/projects/roamber/st
${Amber_DIR}/projects/roamber/js
```


## Running ROAmber 

### 1 - Running the NodeJS

We need to run the NodeJS server within the Terminal/xterm to make sure someone will serve the necessary files to your web browser. Start amber's server:

    ./${Amber_DIR}/bin/server 

Open [`http://localhost:4000/projects/roamber/index.html`](http://localhost:4000/projects/roamber/index.html) in your favourite web browser.

### 2 - Example
Click on the Workspace tab and type:

```
ROMondrianViewBuilder new nodes: (1 to: 20)
```
and press `Ctrl-d` to execute this line
You should see 20 colored squares

