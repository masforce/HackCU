import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Container from "reactstrap/es/Container";

const styles = theme => ({
    root: {
        height: 180,
    },
    container: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing.unit,
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
});

class SimpleGrow extends React.Component {
    state = {
        checked: false,
        message: "Switch is OFF."
    };

    handleChange = () => {
        this.setState(state => ({ checked: !state.checked,
                                        message: "Switch is " + (!this.state.checked ? "ON.\n" : "OFF.\n") +
                                                "code for switch: <Switch checked={checked} onChange={this.handleChange} aria-label=\"Collapse\" />\n" +
                                                "code for polygon: <Grow in={checked}>{polygon}</Grow>"}));
    };

    render() {
        const { classes } = this.props;
        const { checked } = this.state;

        const polygon = (
            <Paper elevation={4} className={classes.paper}>
                <svg className={classes.svg}>
                    <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                </svg>
            </Paper>
        );

        return (
            <Container>
                <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
                <div id={"seeSwitchCode"}>
                    {this.state.message}
                </div>
                <div className={classes.root} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className={classes.container}>
                        <Grow in={checked}>{polygon}</Grow>
                        {/* Conditionally applies the timeout property to change the entry speed. */}
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 500 } : {})}
                        >
                            {polygon}
                        </Grow>
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1000 } : {})}
                        >
                            {polygon}
                        </Grow>
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 1500 } : {})}
                         >
                            {polygon}
                        </Grow>
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 2000 } : {})}
                        >
                            {polygon}
                        </Grow>
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 2500 } : {})}
                        >
                            {polygon}
                        </Grow>
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 3000 } : {})}
                        >
                            {polygon}
                        </Grow>
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 3500 } : {})}
                        >
                            {polygon}
                        </Grow>
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 4000 } : {})}
                        >
                            {polygon}
                        </Grow>
                        <Grow
                            in={checked}
                            style={{ transformOrigin: '0 0 0' }}
                            {...(checked ? { timeout: 4500 } : {})}
                        >
                            {polygon}
                        </Grow>
                    </div>
                </div>
            </Container>
        );
    }
}

SimpleGrow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleGrow);

