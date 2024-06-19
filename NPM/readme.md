# NPM: Node Package Manager
* Those which are already come with node js core is called **MODULE** 
* Those which are installed using npm is called **PACKAGE**

## install 
````bash
npm i package_name
```` 

## uninstall
````bash
npm uninstall package_name
````
**How to download the particular version of package**
````bash
npm i package_name@version
````

**Understanding Node Modules**

* dependencies => the excessive files that are required to run a package smoothly, it automatically get installed as soon as you install the package.

* devdependencies => those packages which are only required during development phase, as soon as it get deployed you will no longer used this packages.
````bash
npm i nodemon --save-dev
````

**Scripts**
* During the download process of node, the two scripts commands **start** and **test** also get installed in the path of the OS, by which you you can start your node.js application




* *Those scripts commands which you created and you want to run it, in that case you use **npm run something**

