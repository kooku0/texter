export PATH=$(npm bin):$PATH

VERSION=`auto version`

## Support for label 'skip-release'
if [ ! -z "$VERSION" ]; then
  ## Update Changelog
  auto changelog

  ## Publish App
  npm version $VERSION -m "Bump version to: %s [skip ci]"
  expo publish --non-interactive

  ## Create GitHub Release
  git push --follow-tags --set-upstream origin $branch
  auto shipit
fi
