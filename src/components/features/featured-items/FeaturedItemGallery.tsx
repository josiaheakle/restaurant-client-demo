import * as React from 'react';

// @ts-ignore
import { featuredGallery } from "./FeaturedItem.module.css";

interface FeaturedItemGalleryProps {
    
}

/**
 * A gallery of images with dots on the right side and swiping / clicking functionality,
 * will default to filling the screen
 */
const FeaturedItemGallery: React.FC<FeaturedItemGalleryProps> = ({}) => {
    return (
        <div className={featuredGallery}></div>
    );
}

export {FeaturedItemGallery};