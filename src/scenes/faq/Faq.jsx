import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { ExpandMore } from "@mui/icons-material";

const Faq = ({ faqTitle, faqDesc, ...rest }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mt="20px">
      <Accordion {...rest}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{ backgroundColor: colors.blueAccent[500] }}
        >
          <Typography variant="h4">{faqTitle}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: colors.primary[400] }}>
          <Typography variant="h5">{faqDesc}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
