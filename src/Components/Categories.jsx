import { Link } from "react-router-dom";
import {
    FaLaptop,
    FaSprayCan,
    FaBagShopping,
    FaCouch,
    FaMobile
} from "react-icons/fa6";

export const Categories = () => {

    const categories = [
        {
            name: "Beauty",
            icon: <FaBagShopping />,
            slug: "beauty",
            color: "#ec4899"
        },
        {
            name: "Fragrances",
            icon: <FaSprayCan />,
            slug: "fragrances",
            color: "#8b5cf6"
        },
        {
            name: "Furniture",
            icon: <FaCouch />,
            slug: "furniture",
            color: "#f59e0b"
        },
        {
            name: "Groceries",
            icon: <FaBagShopping />,
            slug: "groceries",
            color: "#10b981"
        },
        {
            name: "Laptops",
            icon: <FaLaptop />,
            slug: "laptops",
            color: "#3b82f6"
        },
        {
            name: "Smartphones",
            icon: <FaMobile />,
            slug: "smartphones",
            color: "#ef4444"
        }
    ];

    return (
        <section className="categories-section">

            <div className="section-title">
                <h2>Shop by Category</h2>
                <p>Explore top trending categories</p>
            </div>

            <div className="categories-grid">

                {categories.map((cat) => (

                    <Link
                        key={cat.slug}
                        to={`/products?category=${cat.slug}`}
                        className="category-card"
                    >

                        <div
                            className="category-icon"
                            style={{
                                backgroundColor: `${cat.color}15`,
                                color: cat.color
                            }}
                        >
                            {cat.icon}
                        </div>

                        <h3>{cat.name}</h3>

                    </Link>

                ))}

            </div>

        </section>
    );
};