import { useState } from "react";
import axios from "axios";

export default function useAvailability() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchAvailabilities = async ({ day, time, slug, partySize }) => {
        console.log({
            slug,
            day,
            time,
            partySize,
        })
        setLoading(true)

        try {
            const response = await axios.get(`http://localhost:3000/api/restaurant/${slug}/availability`, {
                params: {
                    day,
                    time,
                    partySize
                }
            });
            setLoading(false)
            setData(response.data)
        } catch (error) {
            setLoading(false)
            setError(error.response.data.errorMessage)
        }
    }
    return { loading, error, data, fetchAvailabilities }
}