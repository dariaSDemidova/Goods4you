import React from 'react';
import FAQItem from './FAQItem';
import './FAQ.scss';
import { faqData } from './faqData';

const FAQ: React.FC = () => {
    return (
        <section className="faq" id="faq">
            <div className="faq__container">
                <h2 className="faq__title">FAQ</h2>
                <hr />
                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
