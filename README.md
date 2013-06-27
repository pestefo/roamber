Roassal in Amber
=======

Porting Roassal in Amber Smalltalk platform

## Installation

1. [Install nodejs](http://nodejs.org/download/)

1. [Download amber](https://github.com/amber-smalltalk/amber/archive/0.10.zip) and unzip it.

1. Install amber:

```
npm install -g grunt-cli grunt-init
cd ${Amber_DIR}
npm install && grunt
```

1. Create a directory for roassal code:
```
cd ${Amber_DIR}
mkdir projects && cd projects
mkdir roassal && cd roassal
```

1. Download the code and put it in  ```${Amber_DIR}/projects/roassal```

1. Start amber's server
 ```./${Amber_DIR}/bin/server ```

1. Open ```http://localhost:4000/projects/roassal-d3/index.html``` in your favourite web browser.