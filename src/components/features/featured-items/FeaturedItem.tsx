import * as React from 'react';
import {ButtonLink} from '../../ui/buttons/ButtonLink';

interface FeaturedItemProps {
    slug: string;
    imgSrc: string;
    title: string;
    descr: string;

}

const FeaturedItem: React.FC<FeaturedItemProps> = ({imgSrc, title, descr, slug}) => {
    return (
        <div id='home' className='featuredItem' style={{backgroundImage:`url(${imgSrc})`}}>
        <div className='featuredItemInfo'>
            <div>
                <h3>{title}</h3>
                <p>{descr}</p>
                <ButtonLink link={`/menu-item/${slug}`} title={'View'}></ButtonLink>
            </div>
        </div>
    </div>    );
}

export {FeaturedItem};