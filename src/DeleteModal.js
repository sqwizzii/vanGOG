// Компонент модального вікна для підтвердження видалення категорії
import React from "react";

export default function DeleteModal({ isOpen, onClose, onConfirm, categoryTitle }) {
    // Якщо модалка не відкрита — нічого не рендерю (null)
    if (!isOpen) return null;

    return (
        // Напівпрозорий фон, який перекриває весь екран
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)", // затемнення
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000, // щоб було поверх усього
            }}
        >
            {/* Сам блок модального вікна */}
            <div
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    padding: "20px",
                    maxWidth: "400px",
                    width: "90%",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                    textAlign: "center",
                }}
            >
                {/* Повідомлення з підтвердженням */}
                <h3 style={{ marginBottom: "20px" }}>
                    Ви точно хочете видалити <br />"{categoryTitle}"?
                </h3>

                {/* Кнопки дії */}
                <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                    {/* Закрити без дії */}
                    <button
                        onClick={onClose}
                        style={{
                            padding: "8px 16px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            background: "#f0f0f0",
                            cursor: "pointer",
                        }}
                    >
                        Ні
                    </button>

                    {/* Підтвердити видалення */}
                    <button
                        onClick={onConfirm}
                        style={{
                            padding: "8px 16px",
                            borderRadius: "5px",
                            border: "none",
                            background: "red",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        Так
                    </button>
                </div>
            </div>
        </div>
    );
}
