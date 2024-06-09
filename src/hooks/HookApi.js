import { useState, useEffect } from 'react';
import axios from 'axios';

const useShops = () => {
    const [shops, setShops] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchShops = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/shops/all');
                setShops(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
                console.error("Fetching shops failed:", err.message); // Log error
            }
        };

        fetchShops();
    }, []);

    return { shops, loading, error };
};

const useMenuItems = (shopid) => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/menu/${shopid}`);
                setMenuItems(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        if (shopid) {
            fetchMenuItems();
        }
    }, [shopid]);

    return { menuItems, loading, error };
};

export { useShops, useMenuItems };
