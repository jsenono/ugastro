
import { useState } from 'react';
import styles from "../../../../styles/themes/tabs.module2.css?inline"
import "../../../../styles/themes/tabs.css?inline"
let explanation_content= "In this exploration, I redesigned the SESAMM website regarding a leading artificial intelligence company."
let img_link="../../assets/images/carbon/code-snapshot2.png"
let title_content="if you have a Fireflies account and would like to avail of the bot-name customization feature ($5/bot/mo or $60/bot/annual), this rate is limited to 5 users only. If you intend to customize the bot name for other"
let icon="../../assets/images/carbon/1.png"

const Tabs = () => {
    const tabs = [
        { id: 'tab1', title: 'Tab 1', explanation: explanation_content,  content: 'Content for Tab 1', img:img_link },
        { id: 'tab2', title: 'Tab 2', explanation: explanation_content, content: 'Content for Tab 2', img:img_link },
        { id: 'tab3', title: 'Tab 3', explanation: explanation_content, content: 'Content for Tab 3', img:img_link },
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
        <div className="row d-flex">
          <div className={"button_selectors row d-flex"}>
          {tabs.map((tab) => (
          <div 
            key={tab.id}
            className={activeTab === tab.id ? " activebtn diva col-lg-4"  : "diva col-lg-4"}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="tab_card  tab-card justify-content-center align-items-center">


<div className=' text-center justify-content-center align-items-center  '>
<h2>{tab.title}</h2>
            <p>{tab.explanation}</p>


            </div>
            </div>
            
          </div>
        ))}
          </div>
       
      </div>


{/* second row with content */}
<div className={`row d-flex tab_datasets`}>

  <div className='col-lg-7 justify-content-center align-items-center align-self-center align-content-center'>

  <h2 className={styles.hero_header}>A new world is here </h2>
  <h4 className={styles.sub_hero_header}>Begining a new genre of contents</h4>
  <p>Knowledge is power. MeisterNote helps teams collect, organize, retrieve and share important information in central knowledge bases, boosting productivity and ensuring insights can be applied effectively.</p>
  </div>
<div className="col-lg-5">

<div className={styles.content}>
{tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>
            <img src={tab.img} className='img-fluid'></img>
            {/* <p>{tab.content}</p> */}
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