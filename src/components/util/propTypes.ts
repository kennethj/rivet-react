import * as PropTypes from 'prop-types';
import { parse } from 'react-docgen-typescript';

export const propFilter = (prop, component) => 
    // skip props with no documentation
    prop.description.length > 0
    // skip aria props               
    && prop.name.includes("aria-") === false
    // skip 'rivetize' props (these are documented separately)
    && ['className','border','display','hide','margin','padding','typescale'].indexOf(prop.name) === -1  


const parsePropTypeByName = (name: string) => {
    switch (name) {
        case 'string': return PropTypes.string;
        case 'number': return PropTypes.number;
        case 'ReactText': return PropTypes.string;
        case 'ReactNode': return PropTypes.node;
        default: return PropTypes.oneOf(name.split("|").map(str => str.trim().replace(new RegExp('"', 'g'), '')));
    }
}

const parsePropType = (name: string, required: boolean) => {
    const prop = parsePropTypeByName(name);
    return required ? prop.isRequired : prop;
}

export const getPropTypes = (path:string) => {
    const props = parse(path, { propFilter })[0].props
    const propTypes = {};
    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            propTypes[key] = parsePropType(props[key].type.name, props[key].required);
        }
    }
    return propTypes;
}
