import * as classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';

import * as Rivet from '../util/Rivet';
import { alertClass, alertIcon } from './inlineAlertVariantDisplayOptions';

interface InlineAlertProps {
    /**
     * Whether the inline alert is a standalone alert or not
     * See: https://rivet.uits.iu.edu/components/overlays/alerts/#standalone-inline-alerts
     */
    standalone?: boolean;
    /**
     * Rivet style for inline validation.
     * See: https://rivet.uits.iu.edu/components/forms/text-input/#inline-validation-states
     */
    variant: 'info' | 'valid' | 'invalid' | 'warning';
    className?: string,
    id?: string,
};

const InlineAlert: React.SFC<InlineAlertProps> =
    ({
        children,
        className,
        id,
        standalone,
        variant,
        ... attrs
    }) => {
        const classes = classNames({
            ['rvt-inline-alert']: true,
            ['rvt-inline-alert--standalone']: standalone,
            [`rvt-inline-alert--${alertClass(variant)}`]: true
        }, className);
        return (
            <div className={classes} {...attrs}>
                <span className="rvt-inline-alert__icon">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g fill="currentColor">
                            {alertIcon(variant)}
                        </g>
                    </svg>
                </span>
                <span className="rvt-inline-alert__message" role="alert" id={id}>
                    {children}
                </span>
            </div>
        );
    };
InlineAlert.displayName = 'InlineAlert';

InlineAlert.propTypes = {
    standalone: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(['info', 'valid', 'invalid', 'warning' as any]),
    className: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

InlineAlert.defaultProps = {
    standalone: false,
    variant: "info",
    className: "",
    id: Rivet.shortuid()
}

export default Rivet.rivetize(InlineAlert);
