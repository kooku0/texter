export PATH=$(npm bin):$PATH

VERSION=`auto version`

## Support for label 'skip-release'
if [ ! -z "$VERSION" ]; then
  ## Fetch tags
  git fetch --tags
  ## Update Changelog
  auto changelog

  ## Publish App
  auto version
  expo publish --non-interactive

  ## Create GitHub Release
  git push --follow-tags --set-upstream origin $branch
  auto release
fi
