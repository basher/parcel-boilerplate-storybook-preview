# This is a 'wrapper' Storybook instance

It provides the standard Storybook UI, but loads story content from [standalone Storybook + Parcel repo](https://github.com/basher/parcel-boilerplate-storybook).

- From standalone Storybook + Parcel repo, start Storybook `npm run storybook`.
- Then start this repo's Storybook instance `npm run storybook:preview`.
- Accept the localhost port change with `Y` if prompted.

## Storybook composition

- `npm run storybook` instead of using `:preview` as above.
- This is the new composition feature in V6, which leverages the `refs` property in `main.js`.


## Storybook / Parcel bugs

### Storybook preview

- Content from the `standalone Storybook + Parcel repo` above cannot be loaded in preview mode as it's no longer supported in Storybook V6.

### Storybook composition

- Content from the `standalone Storybook + Parcel repo` above cannot be loaded via composition. See this [composition bug](https://github.com/storybookjs/storybook/issues/12139).
