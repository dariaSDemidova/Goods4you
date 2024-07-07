import React, { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq__item" id="faq">
            <h3 className="faq__question" onClick={toggleOpen}>
                {question}
                <span className={`faq__icon ${isOpen ? 'open' : ''}`}>+</span>
            </h3>
            {isOpen && <div className="faq__answer">{answer}</div>}
            <hr />
        </div>
    );
};

export default FAQItem;
