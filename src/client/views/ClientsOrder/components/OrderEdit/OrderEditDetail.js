import React from "react";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import {
  FaHome,
  FaBed,
  FaBath,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCarAlt,
} from "react-icons/fa";

const DetailContainer = styled.div`
  margin: 20px 10%;
`;

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

const useStyles = makeStyles(() => ({
  root: {},
  container: {
    display: "flex",
  },
}));

export default function OrderEditDetail(props) {
  const classes = useStyles();

  const storeys = ("" + props.storeys).toString();
  const bedrooms = ("" + props.bedrooms).toString();
  const bathrooms = ("" + props.bathrooms).toString();
  const garages = ("" + props.garages).toString();
  const dueDate = ("" + props.dueDate).toString().substr(0, 10);

  return (
    <DetailContainer>
      <Grid container spacing={2}>
        <Typography variant="h2">Update your order here...</Typography>

        <Grid item xs={12} className={classes.container}>
          <FaHome />
          <Typography variant="h5">
            How many storeys do you want to build? *
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.Container}>
            <StyledToggleButtonGroup
              value={storeys}
              exclusive
              onChange={props.handleChange}
              aria-label="storeys"
            >
              <ToggleButton name="storeys" value="1" aria-label="one storey">
                <span>1</span>
              </ToggleButton>
              <ToggleButton name="storeys" value="2" aria-label="two storeys">
                <span>2</span>
              </ToggleButton>
            </StyledToggleButtonGroup>
          </div>
        </Grid>

        <Grid item xs={12} className={classes.container}>
          <FaBed />
          <Typography variant="h5">
            And how many bedrooms do you want? *
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.Container}>
            <StyledToggleButtonGroup
              value={bedrooms}
              exclusive
              onChange={props.handleChange}
              aria-label="bedrooms"
            >
              <ToggleButton name="bedrooms" value="2" aria-label="two bedrooms">
                <span>2</span>
              </ToggleButton>
              <ToggleButton
                name="bedrooms"
                value="3"
                aria-label="three bedrooms"
              >
                <span>3</span>
              </ToggleButton>
              <ToggleButton
                name="bedrooms"
                value="4"
                aria-label="four bedrooms"
              >
                <span>4</span>
              </ToggleButton>
              <ToggleButton
                name="bedrooms"
                value="5"
                aria-label="five bedrooms"
              >
                <span>5</span>
              </ToggleButton>
              <ToggleButton name="bedrooms" value="6" aria-label="six bedrooms">
                <span>6</span>
              </ToggleButton>
            </StyledToggleButtonGroup>
          </div>
        </Grid>

        <Grid item xs={12} className={classes.container}>
          <FaBath />
          <Typography variant="h5">
            And how many bathrooms do you want? *
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.Container}>
            <StyledToggleButtonGroup
              value={bathrooms}
              exclusive
              onChange={props.handleChange}
              aria-label="bathrooms"
            >
              <ToggleButton
                name="bathrooms"
                value="1"
                aria-label="one bathroom"
              >
                <span>1</span>
              </ToggleButton>
              <ToggleButton
                name="bathrooms"
                value="2"
                aria-label="two bathrooms"
              >
                <span>2</span>
              </ToggleButton>
              <ToggleButton
                name="bathrooms"
                value="3"
                aria-label="three bathrooms"
              >
                <span>3</span>
              </ToggleButton>
              <ToggleButton
                name="bathrooms"
                value="4"
                aria-label="four bathrooms"
              >
                <span>4</span>
              </ToggleButton>
            </StyledToggleButtonGroup>
          </div>
        </Grid>

        <Grid item xs={12} className={classes.container}>
          <FaCarAlt />
          <Typography variant="h5">
            And how many garages do you want? *
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.Container}>
            <StyledToggleButtonGroup
              value={garages}
              exclusive
              onChange={props.handleChange}
              aria-label="garages"
            >
              <ToggleButton name="garages" value="1" aria-label="one garage">
                <span>1</span>
              </ToggleButton>
              <ToggleButton name="garages" value="2" aria-label="two garages">
                <span>2</span>
              </ToggleButton>
            </StyledToggleButtonGroup>
          </div>
        </Grid>

        <Grid item xs={12} className={classes.container}>
          <FaMapMarkerAlt />
          <Typography variant="h5">
            Where do you want to build your house? *
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.Container}>
            <TextField
              name="address"
              placeholder="Enter a suburb"
              custom
              style={{ width: "25ch" }}
              value={props.address}
              onChange={props.handleChange}
            />
          </div>
        </Grid>

        <Grid item xs={12} className={classes.container}>
          <FaCalendarAlt />
          <Typography variant="h5">When do you need it done? *</Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.Container}>
            <TextField
              id="date"
              label="DueDate"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={dueDate}
              onChange={props.handleChange}
              name="dueDate"
            />
          </div>
        </Grid>
        {/* <Grid item xs={12} className={classes.container}>
          <FaCalendarAlt />
          <Typography variant="h5">Tell us more about your needs...</Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.Container}>
            <TextField
              name="description"
              placeholder="I need ... "
              label="Describe your task here ..."
              multiline
              rows="3"
              variant="outlined"
              margin="dense"
              color="secondary"
              value={props.description}
              onChange={props.handleChange}
            />
          </div>
        </Grid> */}
      </Grid>
    </DetailContainer>
  );
}
