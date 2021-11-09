import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD, EDIT, colors } from "../../../constants/calendar";
import { closeModal, addEvent } from "../store/calendarSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import ColorPiker from "../../../components/ColorPicker/ColorPicker";
import { Box } from "@mui/system";
import {v4} from 'uuid'

const initialValues = {
  title: "",
  description: "",
  start: new Date(),
  end: new Date(),
  color: colors[0],
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title must be required"),
  description: Yup.string().required("Description must be required"),
  color: Yup.string().required("Color must be required"),
  start: Yup.date().required("Start date must be required"),
  end: Yup.date().required("End date must be required"),
});

const AddEditModal = () => {
  const { isOpen, mode } = useSelector((state) => state.calendar.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isOpen && mode === EDIT) {
    }
  }, [isOpen, mode]);

  const onSubmit = (values) => {
    dispatch(addEvent({
        id: v4(),
        ...values
    }))
    handleClose()
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleClose = () => {
    dispatch(closeModal());
    formik.handleReset({});
  };

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth="sm" fullWidth={true}>
      <form onSubmit={formik.handleSubmit} >
        <DialogTitle>
          <Typography
            variant="sapn"
            fontSize="1.5rem"
            color="textPrimary"
            gutterBottom
          >
            {mode === ADD ? "Add Event" : "Edit Event"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label={"Title"}
            name="title"
            // disabled={processing}
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && !!formik.errors.title}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label={"Description"}
            name="description"
            // disabled={processing}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && !!formik.errors.description}
            helperText={formik.touched.description && formik.errors.description}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
              value={formik.values.start}
              onChange={(newValue) => {
                formik.setFieldValue("start", newValue);
              }}
              label="Start Date"
              inputFormat="dd/MM/yyyy"
              renderInput={(params) => (
                <TextField
                  id="start"
                  fullWidth
                  margin="normal"
                  name="start"
                  {...params}
                />
              )}
            />
            <MobileDatePicker
              value={formik.values.end}
              onChange={(newValue) => {
                formik.setFieldValue("end", newValue);
              }}
              label="End Date"
              inputFormat="dd/MM/yyyy"
              renderInput={(params) => (
                <TextField
                  id="end"
                  fullWidth
                  margin="normal"
                  name="end"
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: "0.3rem",
            }}
          >
            <Typography
              variant="span"
              color="textPrimary"
              fontWeight={300}
              fontSize="1.5rem"
              marginRight="0.3rem"
            >
              color
            </Typography>
            <ColorPiker
              colors={colors}
              onChange={(value) => {
                formik.setFieldValue("color", value);
              }}
              selectedColor={formik.values.color}
            />
          </Box>
          <Box
            sx={{
              mt: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1,
            }}
          >
            <Button
              sx={{
                width: "auto",
                bgcolor: "transparent",
                fontSize: "1.2rem",
                p: "0.2rem 1rem",
              }}
              onClick={handleClose}
            >
              cancel
            </Button>
                
            <Button 
              disabled={!formik.dirty || !formik.isValid}
              sx={{
                width: "auto",
                fontSize: "1.2rem",
                p: "0.2rem 1rem",
                bgcolor: "primary.main",
                ":hover": {
                  bgcolor: "primary.main",
                },
                ":disabled": {
                  bgcolor: "secondary.main",
                  color: "text.primary",
                },
              }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddEditModal;
