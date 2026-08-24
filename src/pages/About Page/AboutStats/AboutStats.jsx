import "./AboutStats.css";

const stats = [
    { number: "500+", label: "Products" },
    { number: "50+",  label: "Categories" },
    { number: "10K+", label: "Customers" },
    { number: "24/7", label: "Support" },
];

export const AboutStats = () => {
    return (

        <section className="about-stats">

            <div className="about-container">

                <div className="stats-header">

                    <span>
                        SHOPSTACK BY THE NUMBERS
                    </span>

                    <h2>
                        Growing with our
                        <em> community.</em>
                    </h2>

                </div>


                <div className="stats-grid">

                    {stats.map((item) => (

                        <div
                            className="stat-item"
                            key={item.label}
                        >

                            <strong>
                                {item.number}
                            </strong>

                            <span>
                                {item.label}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
};
