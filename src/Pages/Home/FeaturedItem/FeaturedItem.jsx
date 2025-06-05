import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';

const FeaturedItem = () => {

    return (
        <section className='mb-20 p-10 lg:p-20 bg-black/60 bg-[url("https://i.ibb.co/nqTWL6WX/featured.jpg")] bg-no-repeat bg-cover bg-blend-overlay bg-fixed '>
            <SectionTitle subTitle="Check it out" title="featured item"></SectionTitle>
            <div className='flex flex-col gap-10 lg:flex-row items-center justify-center'>
                <figure>
                    <img className='rounded-md' src="https://i.ibb.co/nqTWL6WX/featured.jpg" alt="feature-recipe" />
                </figure>
                <div className='space-y-4'>
                    <p>{new Date().toDateString()}</p>
                    <p className='uppercase'>where can i get some</p>
                    <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit placeat, culpa saepe numquam labore ipsum quo similique nostrum eum repellendus delectus praesentium quidem hic, earum cupiditate nam, recusandae omnis non.</p>
                    <button className='btn md:btn-lg btn-outline border-0 border-b-4 rounded-xl'>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedItem;