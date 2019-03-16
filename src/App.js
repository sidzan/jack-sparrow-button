import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button/';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

const styles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});

class ButtonComponent extends PureComponent {
    render() {
        const {
            classes, color, onClick, className, style, disabled, loading, iconFirst, value, iconLast,
        } = this.props;
        return (
            <Button
                onClick={onClick}
                variant="contained"
                className={`${classes.button} ${className}`}
                style={{minWidth: 150, ...style}}
                color={color}
                disabled={loading || disabled}
            >
                {iconFirst}
                {value || 'Provide name'}
                {iconLast}
                {loading && <CircularProgress size={24} className={classes.buttonProgress}/>}
            </Button>
        );
    }
}

ButtonComponent.defaultProps = {
    color: 'primary'
};

ButtonComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    iconFirst: PropTypes.any,
    value: PropTypes.string.isRequired,
    iconLast: PropTypes.string.isRequired,
};


export const App = withStyles(styles)(ButtonComponent);
