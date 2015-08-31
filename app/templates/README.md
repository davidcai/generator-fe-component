# Summary

A seed project that provides a scaffold for component development.

## Setup instructions

Create a new repo for your component project in GITLab.

In your workspace directory (not project directory), run the following commands to clone fe-component-seed and change it to your project:

```bash
git clone git@git-prd-01:spa-development/fe-component-seed.git

mv fe-component-seed {your component project name}
cd {your component project name}

git remote set-url origin {your component project GIT URL}

> README.md

git add -A
git commit -m "first commit"
git push origin master
```

Change the code to fit your need. Here is a list of places where you will need to update:

* `package.json` - name and version (change version to 0.0.0).
* `bower.json` - name, version, description, main, repository, and dependencies.
* If you changed dependencies in `package.json` and/or `bower.json`, don't forget to reinstall node modules and bower components.
* `gulpfile.js` - change module name
* `src/index.html`
  * 3 ng-app occurrences in the html tag
  * title tag
  * description meta tag
  * Adjust Vendor CSS
  * Adjust Application CSS
  * Rename Component CSS and the name in its build comment
  * Remove all script tags inside the Vendor JS, Component JS, and Application JS blocks. Leave the comments alone.
* `src/assets` - remove unused images
* Search and replace `feComponentSeedDemo` in all JS and HTML with your component name plus the "Demo" suffix, e.g. `feAwesomeWidgetDemo`.
* Search and replace `feComponentSeed` in all JS and HTML with your component name, e.g. `feAwesomeWidget`.
* The demo application module is defined in `src/app/index.js`. You might want to take a look to see if it needs change.
* Your demo logic goes to `src/app/demo/demo.controller.js` and `demo.html`
* Update `demo.controller.spec.js`
* Your demo styles go to `src/app/index.scss`
* Your component logic goes to `src/components/common` or `src/components/{your component name}` directory.
* Remove `seed-growth` dir if you don't need it.
