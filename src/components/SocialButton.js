import React from 'react';

function SocialButton({image, href, target = "_blank", onClick = () => {}}) {

    return <a onClick={onClick} href={href} target={target} rel="noopener noreferrer" className="hover:scale-90 duration-150 cursor-pointer w-12 h-12">
        {image}
    </a>;
}

export default SocialButton