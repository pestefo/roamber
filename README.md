Roassal in Amber
=======

Porting Roassal in Amber Smalltalk platform

## Installation

1. [Download amber](https://github.com/amber-smalltalk/amber/archive/0.10.zip) and unzip it.

2. Install amber
	1. [Install nodejs](http://nodejs.org/download/)
	
	1. At amber's directory run:
```
npm install -g grunt-cli grunt-init
cd ${Amber_DIR}
npm install && grunt
```

3. Create a directory for roassal code
```
cd ${Amber_DIR}
mkdir projects && cd projects
mkdir roassal && cd roassal
```

4. Download the code and put it in  ```${Amber_DIR}/projects/roassal```

5. Start amber's server
 ```./${Amber_DIR}/bin/server ```

6. Open ```http://localhost:4000/projects/roassal-d3/index.html``` in your favourite web browser.