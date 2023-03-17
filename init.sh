#!/bin/sh
git clone https://github.com/DevSkillsHQ/fullstack-boilerplate-typescript-express-react.git
cp fullstack-boilerplate-typescript-express-react/package.json .
cp fullstack-boilerplate-typescript-express-react/cypress.json .
cp -r fullstack-boilerplate-typescript-express-react/app* .
rm -rf fullstack-boilerplate-typescript-express-react
npm i
git add cypress.json package* app*
git commit -m 'Init boilerplate'
