import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Fade,
  InputAdornment,
  Collapse,
} from "@material-ui/core";
import { HookFormInput, SubmitFormButton } from "components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { dispatches, useSelector } from "store";
import { useStyles } from "./styles";
import { inputs, UseMeasurementsFormInputs } from "./hookInputs";

const MeasurementsUpdatePanel: React.FunctionComponent = () => {
  const {
    isSelectedDateMatch,
    lastMeasurementsUpdate,
    isMeasurementsNeverUpdated,
    allMeasurements,
    selectedDate,
  } = useSelector((state) => state.logbook);

  const dispatch = useDispatch();

  const { register, errors, handleSubmit, getValues, setValue } = useForm<
    UseMeasurementsFormInputs
  >({
    mode: "onChange",
  });

  useEffect(() => {
    allMeasurements.forEach((m) => {
      if (m.createdAt === selectedDate) {
        Object.entries(m).forEach(([key, val]) => {
          setValue(key, val);
        });
      }
    });
  }, [selectedDate, allMeasurements, setValue]);

  const onSubmit = () => {
    dispatch(
      dispatches.createOrUpdateMeasurement({
        ...getValues(),
        createdAt: selectedDate,
      })
    );
  };

  const classes = useStyles({ isSelectedDateMatch });

  return (
    <Fade in>
      <Grid container spacing={3}>
        <Grid item>
          <Typography className={classes.description}>
            You can update your measurments backward so make sure you choose
            correct date.
          </Typography>
        </Grid>

        <Grid item className={classes.selectedDateInfo}>
          <Collapse in={!isSelectedDateMatch || isMeasurementsNeverUpdated}>
            <Typography variant="caption">
              {isMeasurementsNeverUpdated
                ? `It's your first time here so be sure to update as many information as you can. It will be helpfull with tracking your progress.`
                : `There is no entries for the given date. The fields were filled
              with the latest data.`}
            </Typography>
          </Collapse>
        </Grid>

        <Grid item>
          <Container maxWidth="md">
            <Grid
              component="form"
              container
              spacing={2}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              {inputs.map((input) => (
                <Grid className={classes.input} item key={input.id}>
                  <HookFormInput
                    register={register}
                    errors={errors}
                    schema={input}
                    inputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment position="start">It was</InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment
                          style={{ width: "10px" }}
                          position="start"
                        >
                          {input.id === "weight" ? "kg" : "cm"}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              ))}

              <Grid item className={classes.lastUpdate}>
                <Typography color="textSecondary" variant="caption">
                  Last update was {lastMeasurementsUpdate.dateString}
                </Typography>
              </Grid>

              <Grid item className={classes.submitButton}>
                <SubmitFormButton>Update</SubmitFormButton>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default MeasurementsUpdatePanel;
