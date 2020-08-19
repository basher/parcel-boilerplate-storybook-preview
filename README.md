# This is a 'wrapper' Storybook instance

It provides the standard Storybook UI, but loads story content from [standalone Storybook repo](https://github.com/basher/parcel-boilerplate-storybook).

- From standalone Storybook repo, start Storybook `npm run storybook`.
- Then start this repo's Storybook instance `npm run storybook:preview`.
- Accept the localhost port change with `Y` if prompted.

## Storybook composition

- `npm run storybook` instead of using `:preview` as above.
- This is the new composition feature in V6, which leverages the `refs` property in `main.js`.
- It currently fails to load stories due to [CORS error](https://github.com/storybookjs/storybook/issues/11892) so `refs` have been commented out.
