import React, { useState } from "react";
import { useGetCategoriesQuery, useDeleteCategoryMutation } from "./apiCategory";
import DeleteModal from "./DeleteModal";
import "./app.css";

const CategoryList = () => {
    const { data, isLoading, error } = useGetCategoriesQuery();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [selectedId, setSelectedId] = useState(null);

    const [showModal, setShowModal] = useState(false);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading categories.</p>;

    const handleDelete = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const confirmDelete = async () => {
        if (selectedId) {
            await deleteCategory(selectedId);
            setShowModal(false);
            setSelectedId(null);
        }
    };

    return (
        <div className="category-container">
            {data?.map((cat) => (
                <div key={cat.id} className="category-card">
                    <img
                        src={
                            cat.image
                                ? `https://lohika.itstep.click${cat.image}`
                                : "https://via.placeholder.com/150?text=No+Image"
                        }
                        alt={cat.title}
                    />
                    <h3>{cat.title}</h3>
                    <button onClick={() => handleDelete(cat.id)}>Delete</button>
                </div>
            ))}

            {showModal && (
                <DeleteModal
                    onConfirm={confirmDelete}
                    onCancel={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default CategoryList;
