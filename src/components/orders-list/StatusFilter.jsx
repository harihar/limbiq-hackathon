import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

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
    );
  }
}

export default withStyles(styles)(StatusFilter);
