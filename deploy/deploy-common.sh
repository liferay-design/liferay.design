#!/bin/bash -x

curl https://cdn.wedeploy.com/cli/latest/wedeploy.sh -fsSL | bash

echo "" > .gitignore

npm run build