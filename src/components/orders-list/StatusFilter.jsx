import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  filterLabel: {
    marginRight: 10
  }
});

class StatusFilter extends Component {
  state = {
    selectedFilter: this.props.initialFilter
  };

  handleChange = event => {
    const selectedFilter = event.target.value;

    this.props.onChange(selectedFilter);
    this.setState({ selectedFilter });
  };

  render() {
    const { classes, statuses } = this.props;
    const { selectedFilter } = this.state;

    return (
      <Fragment>
        <InputLabel className={classes.filterLabel} shrink>
          Status:
        </InputLabel>
        <Select
          className={classes.filter}
          value={selectedFilter}
          onChange={this.handleChange}
          inputProps={{
            name: "status",
            id: "status-filter"
          }}>
          <MenuItem key={`all-filter`} value={"all"}>
            all
          </MenuItem>
          {statuses.map(status => (
            <MenuItem key={`${status}-filter`} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </Fragment>
    );
  }
}

export default withStyles(styles)(StatusFilter);
