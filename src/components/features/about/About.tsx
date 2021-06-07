import * as React from 'react';

import  "./About.css";




interface AboutProps {
    
}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <div className='aboutContainer' id='about'>
            <div className='split left' style={{backgroundImage:`url(/static/chef-ac0d2cbee40f659fc2ab93e73d8a1e99.jpg)`}}></div>
            <div className='split right'>
                <h5>head chef</h5>
                <h3>Aurthur Jones</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, cum. A perspiciatis ut numquam voluptates eos maiores incidunt? Beatae illo alias unde error possimus eos minus vel, provident aperiam velit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at accusamus quaerat saepe magnam obcaecati blanditiis soluta sed iure! Consequuntur, ea odit quos eum velit illo fugit animi repellendus corporis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tenetur officia, saepe provident, corporis dignissimos perferendis et nemo ipsum modi, ab non reprehenderit tempore ipsam quia sed similique animi assumenda.
                </p>
            </div>
        </div>
    );
}

export {About};