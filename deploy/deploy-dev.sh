#!/bin/bash

curl https://cdn.wedeploy.com/cli/latest/wedeploy.sh -fsSL | bash

echo "" > .gitignore

echo $AUTH_TOKEN | we login && we deploy -p liferaydotdesign-dev --quiet
