> - This repo is **no longer maintained**.
> - A different solution has been found to using Parcel to bundle CSS/JS, and using Storybook HTML.

# This is a 'wrapper' Storybook instance

It provides the standard Storybook UI, but loads story content from another Storybook repo (which uses Parcel to bundle CSS/JS dependencies).

- From the other Storybook/Parcel repo, start Storybook `npm run storybook`.
- Then start this repo's Storybook instance `npm run storybook:preview`.
- Accept the localhost port change with `Y` if prompted.

## Storybook composition

- `npm run storybook` instead of using `:preview` as above.
- This is the new composition feature in V6, which leverages the `refs` property in `main.js`.


## Storybook / Parcel bugs

### Storybook preview

- Content from the other Storybook/Parcel repo cannot  be loaded in preview mode as it's no longer supported in Storybook V6.

### Storybook composition

- Content from the other Storybook/Parcel repo cannot be loaded via composition. See this [composition bug](https://github.com/storybookjs/storybook/issues/12139).
