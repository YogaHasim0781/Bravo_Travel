import React from "react";
import "../Style/Style.css"; // Ensure the correct path to your CSS file
import Beach from '../Images/Beach.png';
import Mountain from '../Images/Mountain.png'
import Cultural from '../Images/Cultural.png'

const Main = () => { 
    return(
        <>
            <main className="hero">
                <div className="heroOverlay">
                    <h1 className="heroTitle">Trust Our Experience</h1>
                    <p className="heroSubtitle">A team of professional travel experts</p>
                    <div>
                        <button
                            className="button primaryButton"
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#2F855A')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = '#38A169')}
                        >
                            Get a Free Quote
                        </button>
                    </div>
                </div>
            </main>
            <section className="cardContainer">
                {[
                    {
                        title: 'Beach Paradise',
                        description: 'Relax on the pristine beaches with crystal clear waters.',
                        image: Beach,
                    },
                    {
                        title: 'Mountain Adventure',
                        description: 'Experience breathtaking views and thrilling hikes.',
                        image: Mountain,
                    },
                    {
                        title: 'Cultural Journey',
                        description: 'Explore the rich history and vibrant culture of cities.',
                        image: Cultural,
                    },
                ].map((card, index) => (
                    <div
                        key={index}
                        className="card"
                        onMouseEnter={(e) => {
                            e.currentTarget.classList.add('cardHover');
                            e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.classList.remove('cardHover');
                            e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                        }}
                    >
                        <img src={card.image} alt={card.title} className="cardImage" />
                        <div className="cardContent">
                            <h2 className="cardTitle">{card.title}</h2>
                            <p className="cardDescription">{card.description}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
export default Main;
