import React, { useState } from "react";
import "../styles/FAQ.css";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
    const [selected, setSelected] = useState(null);

    const toggle=(i)=>{
        if (selected==i){
            return setSelected(null)
        }
        setSelected(i)
    }

  return (
    <div className="faq">
        <div className="hTitle" style={{textAlign:'left'}}>Some F.A.Qs</div>
            <div className="accordian">
                {data.map((item,i)=>(
                    <div className="item">
                        <div className="title" onClick={()=> toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected == i ? '-':'+'}</span>
                        </div>
                        <div className={selected == i ? 'content show':'content'
                    }>
                            {item.answer}
                        </div>
                    </div>
                ))}
            </div>
    </div>
  );
};

const data=[
    {
        question:'Question 1',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum, id commodi fugit ipsa deleniti dignissimos cupiditate tempora eos inventore? Commodi nobis a ut numquam. Dicta labore explicabo tempora perferendis.'
    },
    {
        question:'Question 2',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum, id commodi fugit ipsa deleniti dignissimos cupiditate tempora eos inventore? Commodi nobis a ut numquam. Dicta labore explicabo tempora perferendis.'
    },
    {
        question:'Question 3',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum, id commodi fugit ipsa deleniti dignissimos cupiditate tempora eos inventore? Commodi nobis a ut numquam. Dicta labore explicabo tempora perferendis.'
    },
    {
        question:'Question 4',
        answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum, id commodi fugit ipsa deleniti dignissimos cupiditate tempora eos inventore? Commodi nobis a ut numquam. Dicta labore explicabo tempora perferendis.'
    }
]

export default FAQ;
