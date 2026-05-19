/* Paste this at the very bottom of your existing style.css file */

.filter-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
}

.filter-group label {
    font-size: 14px;
    font-weight: 600;
    color: #4a5568;
}

.dropdown {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #cbd5e1;
    border-radius: 8px;
    background-color: #fff;
    color: #333;
    outline: none;
    cursor: pointer;
    transition: border-color 0.2s ease;
}

.dropdown:focus {
    border-color: #0c6b73;
}

.start-btn {
    width: 100%;
    padding: 14px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
}
