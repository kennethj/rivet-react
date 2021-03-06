/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as classNames from 'classnames';
import * as React from 'react';

const ModalControls : React.SFC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className }) => (
    <div className={classNames(['rvt-modal__controls', className])}>
        { children }
    </div>
);
ModalControls.displayName = 'ModalControls';

export default ModalControls;
