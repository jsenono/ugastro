import React, { useState } from 'react';
import styles from "../../../styles/themes/tabs.module.css"
let explanation_content= "In this exploration, I redesigned the SESAMM website regarding a leading artificial intelligence company."
let img_link="../src/assets/images/carbon/code-snapshot2.png"
let title_content="f you have a Fireflies account and would like to avail of the bot-name customization feature ($5/bot/mo or $60/bot/annual), this rate is limited to 5 users only. If you intend to customize the bot name for other"
let icon="../src/assets/images/carbon/1.png"

const Tabs = () => {
    const tabs = [
        { id: 'tab1', title: 'Tab 1', explanation: explanation_content,  content: 'Content for Tab 1', img:img_link },
        { id: 'tab2', title: 'Tab 2', explanation: explanation_content, content: 'Content for Tab 2', img:img_link },
        { id: 'tab3', title: 'Tab 3', explanation: explanation_content, content: 'Content for Tab 3', img:img_link },
      ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (

    
    <div className={`${styles.main} justify-content-center align-items-center margin-auto`}>
      
      <div className='container tabs-main-section col-lg-9 justify-content-center align-items-center margin-auto '>
 
      <div className={`${styles.header} text-center px-8 justify-content-center align-items-center align-self-center`}>
      <h1>Our tabular features</h1>

      <div>
        <p>{title_content}</p>
      </div>

    </div>

        <div className='row d-flex'>
{/* this is the first row with */}
        <div className="col-lg-6">
          <div className={styles.button_selectors}>
          {tabs.map((tab) => (
          <div 
            key={tab.id}
            className={activeTab === tab.id ? 'activebtn diva ' : 'diva'}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className={`${styles.tab_card} row d-flex tab-card justify-content-center align-items-center`}>

            <div className='col-lg-4 icon'>

<img src={icon} className='img-fluid'></img>
</div>

<div className='col-lg-8 text-center justify-content-center align-items-center  '>
<h2>{tab.title}</h2>
            <p>{tab.explanation}</p>


            </div>
            </div>
            
          </div>
        ))}
          </div>
       
      </div>


{/* second row with content */}

<div className="col-lg-6">

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
      
      
  );
};

export default Tabs;