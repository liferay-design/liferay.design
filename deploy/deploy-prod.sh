#!/bin/bash

curl https://cdn.wedeploy.com/cli/latest/wedeploy.sh -fsSL | bash

echo "" > .gitignore

npm run build

echo $AUTH_TOKEN | we login && we deploy -p liferaydotdesign --quiet
