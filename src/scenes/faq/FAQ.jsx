import {Box, Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../global";

const FAQ= () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variants="h5">
              Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea dolorem quo! Voluptatum cumque ipsam vel
            ullam deserunt fugiat tenetur officiis doloremque aliquid rem, nulla ipsum cupiditate aut iste quas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variants="h5">
              Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea dolorem quo! Voluptatum cumque ipsam vel
            ullam deserunt fugiat tenetur officiis doloremque aliquid rem, nulla ipsum cupiditate aut iste quas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variants="h5">
            Very Impressive Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea dolorem quo! Voluptatum cumque ipsam vel
            ullam deserunt fugiat tenetur officiis doloremque aliquid rem, nulla ipsum cupiditate aut iste quas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variants="h5">
              Your Favourite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea dolorem quo! Voluptatum cumque ipsam vel
            ullam deserunt fugiat tenetur officiis doloremque aliquid rem, nulla ipsum cupiditate aut iste quas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variants="h5">
              Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea dolorem quo! Voluptatum cumque ipsam vel
            ullam deserunt fugiat tenetur officiis doloremque aliquid rem, nulla ipsum cupiditate aut iste quas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography color={colors.greenAccent[500]} variants="h5">
              The Last Asked Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ea dolorem quo! Voluptatum cumque ipsam vel
            ullam deserunt fugiat tenetur officiis doloremque aliquid rem, nulla ipsum cupiditate aut iste quas.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ;