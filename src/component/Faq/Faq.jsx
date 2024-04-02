import React from 'react';
import './Faq.css';
import { useState } from 'react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: 'How does Nayzak work?',
            answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.',
        },
        {
            question: 'Which payment methods are accepted?',
            answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.',
        },
        {
            question: 'How to get familiar with Figma?',
            answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.',
        },
        {
            question: 'Can I get a refund?',
            answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.',
        },
        {
            question: 'Where is my order?',
            answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.',
        },
        {
            question: 'I have a problem',
            answer: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum fuga.',
        },
    ];

    const renderFAQs = () => {
        return faqData.map((faq, index) => (
            <div className="faq-question" key={index}>
                <div
                    className={`faq-question-header ${openIndex === index ? 'open' : ''}`}
                    onClick={() => handleToggle(index)}
                    style={{ transition: '0.9s' }}
                >
                    <h3>{faq.question}</h3>
                    <span>{openIndex === index ? '-' : '+'}</span>
                </div>
                {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
        ));
    };

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="faq-container">
            <div className="faq-main">
                {renderFAQs()}
            </div>
        </div>
    );
};

export default Faq;
