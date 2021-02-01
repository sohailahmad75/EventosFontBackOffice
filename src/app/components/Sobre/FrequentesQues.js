import React, { useEffect, useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const FrequentesQues = () => {
  const allQuestions = [
    {
      title: "Qual o protocolo COVID-19?",
      answer:
        "answer here Qual o protocolo COVID-19? Qual o protocolo COVID-19?  Qual o protocolo COVID-19?",
    },
    {
      title: "Como se realiza o processo de inscrição?",
      answer: "answer here Posso inscrever a minha equipa?",
    },
    {
      title: "Posso inscrever a minha equipa?",
      answer: "answer here Posso inscrever a minha equipa?",
    },
  ];
  const [questionsData, setquestionsData] = useState([]);
  const loadUpcomingEvents = () => {
    setquestionsData(allQuestions);
  };

  useEffect(() => {
    loadUpcomingEvents();
  }, []);
  return (
    <div className="w-100 pl-0 pr-3">
      {questionsData &&
        questionsData.map((question) => (
          <Accordion className="m-3 p-1">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6 className="font-weight-bold mb-0">{question.title}</h6>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export default FrequentesQues;
