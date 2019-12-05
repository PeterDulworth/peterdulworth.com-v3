# peterdulworth.com

deployed here: http://www.peterdulworth.com/
and here: https://peterdulworth.github.io/peterdulworth.com-v3/

### deploying to peterdulworth.com:

First, change the `homepage` field in the `package.json` to be
```
"homepage": "http://peterdulworth.com/build",
```
then 

```shell script
npm run build
```
then copy the entire `build` folder to the root of peterdulworth.com with cyber duck.

Next, move the `index.html` file out of the `build` folder and to the root of peterdulworth.com on cyber duck. 

### deploying to gh pages:
First, change the `homepage` field in the `package.json` to be
```
"homepage": "https://peterdulworth.github.io/peterdulworth.com-v3/",
```
then 
```
npm run deploy
```

### illustrator

