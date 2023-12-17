import React, { useRef } from 'react';
import styles from '../Accordion.module.css';

import { MdOpenInBrowser } from "react-icons/md";
export const AccordionItem = ({ AccordionHeader,AccordionBody, onClick, isOpen, index }) => {
  const itemRef = useRef(null);

  return (
    <li className={styles.Accordion__List__Item} key={index}>
      <button className={styles.Accordion__List__Item__Header} onClick={onClick}>
        <p className={`${styles.Accordion__List__Item__Header__Text} ${isOpen ? styles['active-text'] : ''}`}>
          {AccordionHeader}
        </p>
        <MdOpenInBrowser className={`${styles.Accordion__List__Icon} ${isOpen ? styles['active-icon'] : ''}`} />
      </button>
      <div
        className={styles.Accordion__List__Item__Collapse}
        style={isOpen ? { height: itemRef.current?.scrollHeight } : { height: '0px' }}
      >
        <div
          className={styles.Accordion__List__Item__Body}
          ref={itemRef}
          style={isOpen ? { opacity: 1 } : { opacity: 0 }}
        >
          {AccordionBody}
        </div>
      </div>
    </li>
  );
};
