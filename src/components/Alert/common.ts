/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as PropTypes from 'prop-types';

export interface StatefulAlertProps {
    /**
     * Rivet alert styling. Values: "danger", "info", "warning", "success"
     * @see https://rivet.uits.iu.edu/components/overlays/alerts
     */ 
    variant: string;
    /**
     * Optional alert title string
     */
    title?: any;
    /**
     * Optional event to raise when the alert is dismissed
     */
    onDismiss?: () => void;
}

export const statefulPropTypes = {
    variant: PropTypes.oneOf(['danger', 'info', 'warning', 'success']).isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onDismiss: PropTypes.func
};

export interface StatelessAlertProps extends StatefulAlertProps {
    /**
     * Optional flag to determine whether the alert is visible
     */
    isOpen?: boolean
}

export const statelessPropTypes = {
    ...statefulPropTypes,
    isOpen: PropTypes.bool
};
