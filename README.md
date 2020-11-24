# HTML, CSS and Javascript for Web Developers

1) Make sure to have installed nodejs and git
```
git --version
nodejs --version
npm -- version
```

2) Install browser sync
```
sudo npm install -g browser-sync
```
3) Install the bootstrap, jquery and jpopper dependencies
```
npm install jquery popper.js bootstrap --save
```
4) Run browser sync (directory shows the entire directory - * means all files and /* all files inside directories)
```
browser-sync start --server --directory --files "**/*"
```

