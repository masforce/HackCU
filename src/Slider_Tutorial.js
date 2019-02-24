import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import Grid from '@material-ui/core/Grid';

const styles = {
    root: {
        width: 300,
    },
    slider: {
        padding: '22px 0px',
    },
};

class StepSlider extends React.Component {
    state = {
        value: 3,
        message: ""
    };

    handleChange = (event, value) => {
        this.setState({value: value,
                             message: "<Slider\n" +
                                 "                classes={{ container: classes.slider }}\n" +
                                 "                value={" + this.state.value + "}\n" +
                                 "                min={0}\n" +
                                 "                max={10}\n" +
                                 "                step={1}\n" +
                                 "                onChange={this.handleChange}\n" +
                                 "/>"});
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div>
                <h1>SLIDERS</h1>
                <div className={classes.root}>
                    <Slider
                        classes={{ container: classes.slider }}
                        value={value}
                        min={0}
                        max={10}
                        step={1}
                        onChange={this.handleChange}
                    />
                    {this.state.message}
                </div>
            </div>
        );
    }
}
StepSlider.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);