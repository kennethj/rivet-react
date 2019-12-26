/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

interface BadgeProps {
    /**
     * Optional Rivet style: a secondary badge. Value: "secondary"
     */
    modifier?: string;
    /**
     * Optional Rivet style: an info/danger/success/warning badge. Values: "info", "danger", "success", "warning"
     */
    variant?: string;
}

const propTypes = {
    role: PropTypes.oneOf(['secondary']),
    variant: PropTypes.oneOf(['info', 'danger', 'success', 'warning'])
};

const Badge : React.FC<BadgeProps & React.HTMLAttributes<HTMLDivElement>> = ({ children, className, modifier, variant, ...attrs }) => {
    const classes = classNames({
        ['rvt-badge']: true,
        [`rvt-badge--${variant}-secondary`]: !!variant && modifier === 'secondary',
        [`rvt-badge--${variant}`]: !!variant && modifier === undefined,
        ['rvt-badge--secondary']: !variant && modifier === 'secondary'
    }, className);
    return (
        <span className={classes} {...attrs}>{children}</span>
    );
};

Badge.displayName = 'Badge';
Badge.propTypes = propTypes;

export default Rivet.rivetize(Badge);
