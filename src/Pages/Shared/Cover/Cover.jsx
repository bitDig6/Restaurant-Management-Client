import React from 'react';

const Cover = ({image, title}) => {
    return (
        <div
            className="hero min-h-svw md:min-h-dvw lg:min-h-screen"
            style={{
                backgroundImage: `url("${image}")`,
                backgroundAttachment: "fixed"
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold font-cinzel uppercase">{title}</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;