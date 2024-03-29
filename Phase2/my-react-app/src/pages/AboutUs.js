import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <header>
                <h1>About Us</h1>
            </header>
            <main>
                <p className="intro">At Amazon, our mission is to be Earth's most customer-centric company. We are guided by four principles: customer obsession, ownership, long-term thinking, and a bias for action. We are proud to have over 1 million employees around the world who are committed to delivering on this mission every day.</p>
                <section>
                    <h2 id="about-heaing">Our History</h2>
                    <p>Amazon was founded in 1994 by Jeff Bezos in Seattle, Washington. Originally an online bookstore, Amazon has since expanded to become one of the largest online retailers in the world, selling everything from books and electronics to clothing and groceries.</p>
                </section>
                <section>
                    <h2 id="about-heaing">Our Leadership Team</h2>
                    <ul>
                        <li>Jeff Bezos - Founder and CEO</li>
                        <li>Andy Jassy - CEO of Amazon Web Services</li>
                        <li>Jeff Wilke - CEO of Worldwide Consumer</li>
                    </ul>
                </section>
                <section>
                    <h2 id="about-heaing">Our Business Model</h2>
                    <p>Amazon operates an online marketplace where third-party sellers can sell their products directly to customers. Amazon also sells its own products, including the Amazon Echo, Kindle e-readers, and Fire tablets. The company generates revenue through the sale of these products, as well as through fees and commissions from third-party sellers.</p>
                </section>
                <section>
                    <h2 id="about-heaing">Our Culture and Values</h2>
                    <p>At Amazon, we are committed to delivering the best possible experience for our customers. We are also committed to sustainability and reducing our environmental impact. We believe that our success is directly tied to the success of our customers and the communities we serve.</p>
                </section>
                <section>
                    <h2 id="about-heaing">Join Our Team</h2>
                    <p>If you're interested in joining Amazon, visit our Careers page to view current job openings and apply.</p>
                </section>
                <section>
                    <h2 id="about-heaing">Community Engagement</h2>
                    <p>At Amazon, we believe in giving back to the communities we serve. Through our AmazonSmile program, we donate 0.5% of eligible purchases to the charity of the customer's choice. We also have a number of philanthropic initiatives, including the Amazon Literary Partnership, which supports writers and literary organizations around the world.</p>
                </section>
            </main>
        </div>
    );
};

export default AboutUs;
