
import { useState } from 'react';
  import styles from "../../styles/themes/tabs.module2.css"
 import "../../styles/themes/tabs.css"
let explanation_content= "In this exploration, I redesigned the SESAMM website regarding a leading artificial intelligence company."
let img_link="../../assets/images/carbon/code-snapshot2.png"
let SAT_link="../../assets/v2/TABS1.png"
let UG_link="../../assets/v2/TABS1.png"
let CAR_link="../../assets/v2/TABS2.png"
let title_content="if you have a Fireflies account and would like to avail of the bot-name customization feature ($5/bot/mo or $60/bot/annual), this rate is limited to 5 users only. If you intend to customize the bot name for other"
let icon="../../assets/images/carbon/1.png"

const Tabs = () => {
    const tabs = [
        { id: 'tab1', title: 'SAT', explanation: explanation_content,  content: 'Content for Tab 1', img:SAT_link, "Desctitle": "SAT Guidance",
        "description": "Unlock your potential with our SAT guidance program. Our expert tutors provide targeted strategies and personalized study plans to help you excel in every section of the SAT. Practice with real exam questions, receive detailed performance analytics, and boost your confidence for test day."
      },
        { id: 'tab2', title: 'Career Guidance', explanation: explanation_content, content: 'Content for Tab 2', img:CAR_link, "Desctitle": "University Support",
        "description": "Navigate the university application process with ease. Our dedicated support team offers personalized assistance in crafting compelling application materials, understanding admission requirements, and optimizing your chances of acceptance. From choosing the right universities to preparing for interviews, we're here to guide you toward success."
       },
        { id: 'tab3', title: 'University Apps', explanation: explanation_content, content: 'Content for Tab 3', img:UG_link, "Desctitle": "Career Guidance",
        "description": "Shape your future with our comprehensive career guidance services. Explore diverse career paths, identify your strengths and interests, and receive expert advice on building a successful career. Whether you're a student planning your academic journey or a professional seeking a career change, we provide the insights and tools you need to make informed decisions."
       },
      ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (

    
    <div className={`main justify-content-center align-items-center margin-auto`}>
      
      <div className='container tabs-main-section col-lg-9 justify-content-center align-items-center margin-auto '>
 
      <div className={`header text-center px-8 justify-content-center align-items-center align-self-center`}>
      <h1>Our tabular features</h1>

      <div>
        <p>{title_content}</p>
      </div>

    </div>

        <div className='row'>
{/* this is the first row with */}
        <div className="row col-lg-12 d-flex text-center">
          <div className={"button_selectors row d-flex col-lg-12"}>
          {tabs.map((tab) => (
          <div 
            key={tab.id}
            className={activeTab === tab.id ? " activebtn diva col"  : "diva col"}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="tab_card  tab-card justify-content-center align-items-center">


<div className=' text-center justify-content-center align-items-center  '>
<h2 className='text-center tab_title'>{tab.title}</h2>
            {/* <p className='text-center'>{tab.explanation}</p> */}


            </div>
            </div>
            
          </div>
        ))}
          </div>
       
      </div>


{/* second row with content */}
<div className={`row d-flex tab_datasets`}>

  

  <div className='col-lg-7 justify-content-center align-items-center align-self-center align-content-center'>

  {tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>
            <h2 className="hero-header">{tab.Desctitle}</h2>
            <h4 className="sub-hero-header">Begining a new genre of contents</h4>
            <p>{tab.description}</p>
           
            </div> : null
        )}

 
  
  </div>
<div className="col-lg-5">

<div className={styles.content}>
{tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>
            <img src={tab.img} className='img-fluid'></img>
         
            </div> : null
        )}
</div>
       
      </div>
</div>


    </div>


        </div>


      </div>
      
      
  );
};

export default Tabs;