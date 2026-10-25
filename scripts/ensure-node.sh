#!/usr/bin/env bash
# Select the Node version in .nvmrc. Install it with nvm when it is missing.
set -eo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ ! -s "$NVM_DIR/nvm.sh" ]; then
  echo "nvm is not installed. Install nvm, then run pnpm dev again."
  echo "https://github.com/nvm-sh/nvm"
  exit 1
fi

# nvm.sh reads unset variables, so nounset stays off.
# shellcheck disable=SC1091
. "$NVM_DIR/nvm.sh"

requested="$(tr -d '[:space:]' < .nvmrc)"
installed="$(nvm version "$requested")"

if [ "$installed" = "N/A" ]; then
  echo "Node ${requested} is not installed. Installing it with nvm."
  nvm install "$requested"
else
  nvm use --silent "$requested"
fi

if [ "$#" -eq 0 ]; then
  if [ ! -f "./node_modules/next/dist/bin/next" ]; then
    echo "Dependencies are missing. Run pnpm install, then pnpm dev."
    exit 1
  fi
  set -- ./node_modules/next/dist/bin/next dev
fi

exec "$@"
