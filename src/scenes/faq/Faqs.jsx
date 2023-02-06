import { Box } from "@mui/material";
import React, {useState} from "react";
import Header from "../../components/Header";
import { mockFaqData } from "../../data/mockFaqData";
import Faq from "./Faq";

const Faqs = () => {
     const [expanded, setExpanded] = useState("panel1");

     const handleChange = (faqpanel) => (event, isExpanded) => {
       setExpanded(isExpanded ? faqpanel : false);
     };
  return (
    <Box m="20px">
      <Header title="faq" subtitle="Frequently Asked Questions Page" />
      {mockFaqData.map((faq) => {
        const { id, title, desc } = faq;
          return (
            <Faq
              key={id}
              faqTitle={title}
              faqDesc={desc}
              expanded={expanded === "panel" + id}
              onChange={handleChange("panel" + id)}
            />
          );
      })}
    </Box>
  );
};

export default Faqs;
