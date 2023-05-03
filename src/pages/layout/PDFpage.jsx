import React from "react";
import {
  Document,
  Page,
  Text,
} from "@react-pdf/renderer";

const PDFpage = () => {
  return (
    <Document>
      <Page>
        <Text>
        This is my very first PDF document. I have always aspired to create one, but never had the opportunity to do so until now. With the help of documentation, Google, and ChatGPT, I was finally able to bring my vision to life. The end result is impressive, and I feel proud of my accomplishment. I am grateful to the PH Team for providing me with the support and resources that boosted my confidence and allowed me to achieve this goal.
        </Text>
      </Page>
    </Document>
  );
};

export default PDFpage;
