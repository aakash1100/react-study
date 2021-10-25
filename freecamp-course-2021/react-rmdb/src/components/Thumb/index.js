import React from 'react';

import {Image} from './Thumb.style'

const Thumb = ({image, movieId, clickable}) => (
    <div>
        <Image src = {image} alt = 'movie-thumb'></Image>
    </div>
)

export default Thumb;