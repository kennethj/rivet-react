/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import * as React from 'react';
import * as Rivet from '../util/Rivet';

interface SegmentedButtonProps {
  /**
   * Optional Rivet style: Expand the segmented buttons to fill the entire width of the parent container
   */
  fit?: boolean;
};

const SegmentedButton: React.FC<SegmentedButtonProps & React.HTMLAttributes<HTMLDivElement>> =
  ({ className, children, fit, ...attrs }) => {
    const classes = classNames({
      ['rvt-button-segmented']: true,
      ['rvt-button-segmented--fitted']: fit
    }, className);
    return (
      <div {...attrs} role="group" className={classes}>
        {children}
      </div>
    );
  };
SegmentedButton.displayName = 'SegmentedButton';

export default Rivet.rivetize(SegmentedButton);
