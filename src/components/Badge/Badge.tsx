import * as classNames from 'classnames';
import * as React from 'react';
import { getPropTypes } from '../util/propTypes'
import { rivetize } from '../util/Rivet';


interface BadgeProps {
    /** Role */
    role?: 'default' | 'secondary',
    /** Variant */
    variant?: '' | 'action' | 'error' | 'success' | 'warning';
    /** foo */
    foo?: string
    /** foo */
    bar?: number
}

const Badge : React.SFC<BadgeProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, role = 'default', variant, ...attrs }) => {
    const classes = classNames({
        ['rvt-badge']: true,
        [`rvt-badge--${variant}-secondary`]: !!variant && role === 'secondary',
        [`rvt-badge--${variant}`]: !!variant && role === 'default',
        ['rvt-badge--secondary']: !variant && role === 'secondary'
    }, className);
    return (
        <span className={classes} {...attrs}>{children}</span>
    );
};

Badge.displayName = 'Badge';
// Badge.propTypes = getPropTypes(__filename);

export default rivetize(Badge);
