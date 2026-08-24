import "./AboutValues.css";

const values = [
    {
        icon: "fa-solid fa-bag-shopping",
        title: "Simple Shopping",
        description:
            "Find what you need quickly with a clean and effortless shopping experience."
    },
    {
        icon: "fa-solid fa-gem",
        title: "Quality First",
        description:
            "We focus on products that offer great quality, useful features, and real value."
    },
    {
        icon: "fa-solid fa-heart",
        title: "Made for You",
        description:
            "Every part of ShopStack is designed around making your shopping journey better."
    }
];

export const AboutValues = () => {
    return (

        <section className="about-values">

            <div className="about-container">

                <div className="section-heading">

                    <span>
                        WHAT MATTERS TO US
                    </span>

                    <h2>
                        Built around
                        <em> you.</em>
                    </h2>

                    <p>
                        Everything we do comes back to creating a
                        better experience for our customers.
                    </p>

                </div>


                <div className="values-grid">

                    {values.map((item) => (

                        <div
                            className="value-item"
                            key={item.title}
                        >

                            <div className="value-icon">
                                <i className={item.icon}></i>
                            </div>

                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
};
