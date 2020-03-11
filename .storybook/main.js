module.exports = {
    stories: ['../stories/**/*.stories.(js|mdx)'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                // babelOptions: {},
                // sourceLoaderOptions: null,
            },
        },
        '@storybook/addon-a11y/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/\.stories\.js$/],
                    include: [path.resolve(__dirname, './stories')],
                },
                // loaderOptions: {
                //     prettierConfig: { printWidth: 80, singleQuote: false },
                // },
            },
        },
    ],
};
