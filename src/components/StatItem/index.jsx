import React from 'react';
import PropTypes from 'prop-types';
import bounty from 'bounty/lib/bounty';

import './StatItem.scss';

class StatItem extends React.Component {
    componentDidMount() {
        if (this.cancelBounty) {
            this.cancelBounty();
        }

        this.runAnimation('?');
    }


    componentWillReceiveProps({value: nextValue}) {
        const {value} = this.props;
        if (this.cancelBounty) {
            this.cancelBounty();
        }

        if (nextValue && value !== nextValue) {
            this.runAnimation(nextValue, value || '?');
        }
    }

    cancelBounty = null;
    elRef = null;

    runAnimation = (val, init) => {
        if (this.elRef) {
            this.cancelBounty = bounty({
                el: this.elRef,
                value: val,
                initialValue: init,
                lineHeight: 1.35,
                letterSpacing: 1,
                animationDelay: 100,
                letterAnimationDelay: 100,
            });
        }
    };

    render() {
        const {name} = this.props;
        return (
            <div
                className="StatItem"
                data-name={name}
            >
                <span
                    ref={(el) => {
                        this.elRef = el;
                    }}
                />
            </div>
        );
    }
}


StatItem.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string
};

export default StatItem;