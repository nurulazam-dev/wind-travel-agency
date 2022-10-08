import React from 'react';
import philiLogo from "../../Assets/TrustedCo/philippine-airlines.png"
import cebuLogo from "../../Assets/TrustedCo/cebu-pacific.png"
import airLogo from "../../Assets/TrustedCo/air-asia.png"

const TrustedCo = () => {
    return (
        <section className='section my-5 py-4'>
            <h1 class="text-3xl font-bold text-#14183E mx-12">Trusted By Companies</h1>
            <div className='flex w-full items-center justify-evenly'>
                <div><img src={philiLogo} alt="" /></div>
                <div><img src={cebuLogo} alt="" /></div>
                <div><img src={airLogo} alt="" /></div>
            </div>
        </section>
    );
};

export default TrustedCo;