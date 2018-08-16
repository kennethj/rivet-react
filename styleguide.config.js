const path = require('path');
const glob = require('glob');

module.exports = {
    title: 'Rivet React Style Guide',
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig({
        propFilter: (prop, component) => 
            // skip props with no documentation
            prop.description.length > 0
            // skip aria props               
            && prop.name.includes("aria-") === false
            // skip 'rivetize' props (these are documented separately)
            && ['className','border','display','hide','margin','padding','typescale'].indexOf(prop.name) === -1  
    }).parse,
    pagePerSection: true,
    sections: [
        {
            name: 'Introduction',
            content: 'README.md'
        },
        {
            name: 'Page Content',
            components: () => [
              'src/components/Badge/*.tsx',
              'src/components/List/*.tsx',
              'src/components/Table/*.tsx',
            ],
            sections: [
                {
                    name: 'Links',
                    content: 'src/docs/links.md',
                    exampleMode: 'expand'
                }
            ],
            exampleMode: 'expand'
        },
        {
            name: 'Forms',
            components: () => [
              'src/components/Form/*.tsx', 
              'src/components/Button/*.tsx', 
              'src/components/Checkbox/*.tsx',
              'src/components/File/*.tsx',
              'src/components/RadioButton/*.tsx', 
              'src/components/Input/Input.tsx', 
              'src/components/Input/Textarea.tsx',
            ],
            exampleMode: 'expand'
        },
        {
            name: 'Layout',
            sections: [
                {
                    name: 'Grid',
                    components: () => [
                      'src/components/Grid/*.tsx',
                    ],
                    exampleMode: 'expand'
                },
                {
                    name: 'Spacing',
                    content: 'src/docs/spacing.md',
                    exampleMode: 'expand'
                },
                {
                    name: 'Typography',
                    content: 'src/docs/typography.md',
                    exampleMode: 'expand'
                }
            ],
            components: () => [
              'src/components/Panel/*.tsx',
              'src/components/Section/*.tsx',
            ],
            exampleMode: 'expand'
        },
        {   
            name: 'Navigation',
            components: () => [
              'src/components/Dropdown/*.tsx', 
              'src/components/Footer/*.tsx', 
              'src/components/Header/*.tsx', 
            ],
            exampleMode: 'expand'
        },
        {
            name: 'Overlays',
            components: () => [
              'src/components/Alert/*.tsx',
              'src/components/Alert/InlineAlert.tsx',
            ],
            exampleMode: 'expand'
        },
        {
            name: 'Utilities',
            sections: [
                {
                    name: 'Border',
                    content: 'src/docs/border.md',
                    exampleMode: 'expand'
                },
                {
                    name: 'Typography',
                    content: 'src/docs/display.md',
                    exampleMode: 'expand'
                },
                {
                    name: 'Text',
                    content: 'src/docs/text-utils.md',
                    exampleMode: 'expand'
                },
                {
                    name: 'Visibility',
                    content: 'src/docs/visibility.md',
                    exampleMode: 'expand'
                },
                {
                    name: 'z-index',
                    content: 'src/docs/z-index.md',
                    exampleMode: 'expand'
                }
            ]
        },
    ],
    webpackConfig: require('react-scripts-ts/config/webpack.config.dev'),
    require: [
        'rivet-uits/css/rivet.min.css'
      ]
};