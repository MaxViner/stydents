import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { AccordionItem } from './AccordionItem/AccordionItem';



export const Accordion = ({ AccordionData, className }) => {
  console.log('====================================');
  console.log(AccordionData);
  console.log('====================================');
  const [openItemId, setOpenItemId] = useState(null);
  return (

    <div className={`${styles.Accordion} ${className}`}>
      <h1>
        Учись студент!
      </h1>
      <ul className={styles.Accordion__List}>
        {AccordionData.map((AccordionItemData, index) => {
          return (
            <AccordionItem
              key={index}
              onClick={() => (index === openItemId ? setOpenItemId(null) : setOpenItemId(index))}
              AccordionHeader={AccordionItemData.header}
              isOpen={index === openItemId}
              index={index}
              AccordionBody={AccordionItemData.body}
            />
          );
        })}
      </ul>
    </div>
  );
};
