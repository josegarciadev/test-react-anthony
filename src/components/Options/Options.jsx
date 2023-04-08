import React from 'react';
import { CardItem } from './CardItem';


const card = [{
  id: 1,
  title: "CAMPUS COACH",
  description: "Graduate knowing all of your options",
}, 
{   id: 2,
  title: "JOB SEARCH",
  description: "Resume, interviewing & identify your passions",},
{   id: 3,
  title: "GETTING A JOB",
  description: "Negotiating an offer, promotion or reviewing a contract ",
},{
  id: 4,
  title: "LEAVING A JOB",
  description: "Voluntarily, involuntarily understanding right & severance package",
},
{
  id: 5,
  title: "EXECUTIVE COACH",
  description: "Successfully building a brand, leading a team & having work/life balance",
}
,{
  id: 6,
  title: "STARTING A FAMILY",
  description: "Maternity, paternity, adopting and family leave rights",
},
,{
  id: 7,
  title: "WORKPLACE GUIDANCE",
  description: "General help or navigating a questionable situation",
}
];

export const Options = () => {
  return (
    <div>
      <div className=" py-1 my-4 text-center mx-auto">
        <div className='mx-auto title-options'>
          <h1 className="fs-1 mx-auto fw-bold mb-4 justify-content-center ">Choose from the options below</h1>
          </div>
          <div className='mx-auto'>
            <div className='row justify-content-center'>
            {
            card.map( (card) => (
              <CardItem key={card.id }
              {...card} />
            ))

        }
            </div>
        </div>
      </div>
  
    </div>

  )
}
