import React, { useState } from "react";
import { useGetCategoriesQuery, useDeleteCategoryMutation } from "./apiCategory";
import DeleteModal from "./DeleteModal";

// Компонент для відображення списку категорій
export default function CategoryList() {
    // Використовую хук RTK Query для отримання категорій.
    // Якщо даних ще нема — підставляю порожній масив, щоб не було помилок.
    const { data: categories = [], refetch, isLoading, isError } = useGetCategoriesQuery();

    // Хук для видалення категорій
    const [deleteCategory] = useDeleteCategoryMutation();

    // Стан для відкриття/закриття модального вікна
    const [modalOpen, setModalOpen] = useState(false);

    // Зберігаю категорію, яку користувач хоче видалити
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Коли натискають "Delete" — відкриваю модалку і зберігаю вибрану категорію
    const handleDeleteClick = (category) => {
        setSelectedCategory(category);
        setModalOpen(true);
    };

    // Підтвердження видалення в модалці
    const handleConfirmDelete = async () => {
        if (!selectedCategory) return; // Якщо нічого не вибрано — нічого не робимо

        try {
            console.log("Deleting category id:", selectedCategory.id); // просто перевірка
            // unwrap() — потрібен, щоб отримати помилку у try/catch, а не просто Promise
            await deleteCategory(selectedCategory.id).unwrap();

            // Закриваю модалку, скидаю вибрану категорію
            setModalOpen(false);
            setSelectedCategory(null);

            // Оновлюю список після видалення
            refetch();
        } catch (err) {
            console.error("Помилка при видаленні:", err);
        }
    };

    // Якщо ще йде запит
    if (isLoading) return <p>Завантаження категорій...</p>;
    // Якщо сталася помилка
    if (isError) return <p>Помилка при завантаженні категорій</p>;

    // Основний рендер
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", padding: "20px" }}>
            {categories.map((cat) => (
                <div
                    key={cat.id}
                    style={{
                        width: "200px",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "10px",
                        textAlign: "center",
                        boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
                        backgroundColor: "#fafafa",
                    }}
                >
                    {/* Якщо є зображення — показую його, інакше сірий прямокутник */}
                    {cat.image ? (
                        <img
                            src={`https://lohika.itstep.click/api/Categories/list`} // <-- тут, схоже, треба замінити на правильний шлях до фото
                            alt={cat.title}
                            style={{
                                width: "100%",
                                height: "120px",
                                objectFit: "cover",
                                borderRadius: "4px",
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                width: "100%",
                                height: "120px",
                                backgroundColor: "#e0e0e0",
                                borderRadius: "4px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "#888",
                            }}
                        >
                            No image
                        </div>
                    )}

                    {/* Назва категорії */}
                    <p style={{ margin: "10px 0", fontWeight: "bold" }}>{cat.title}</p>

                    {/* Кнопка для відкриття модалки видалення */}
                    <button
                        onClick={() => handleDeleteClick(cat)}
                        style={{
                            padding: "6px 12px",
                            border: "none",
                            borderRadius: "5px",
                            backgroundColor: "red",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        Delete
                    </button>
                </div>
            ))}

            {/* Модалка підтвердження видалення */}
            <DeleteModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleConfirmDelete}
                categoryTitle={selectedCategory?.title}
            />
        </div>
    );
}
