import { useState } from "react";
import axios from "axios";

export default function useReservation() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createReservation = async ({ day, time, slug, partySize, bookerFirstName, bookerLastName, bookerPhone, bookerEmail, bookerOccasion, bookerRequest }) => {

        setLoading(true)

        try {
            const response = await axios.post(`http://localhost:3000/api/restaurant/${slug}/reserve`,
                {
                    bookerFirstName,
                    bookerLastName,
                    bookerPhone,
                    bookerEmail,
                    bookerOccasion,
                    bookerRequest,
                    setSuccess
                }, {
                params: {
                    day,
                    time,
                    partySize
                }
            });
            setLoading(false)
            setSuccess(true)
            return response.data
        } catch (error) {
            setLoading(false)
            setError(error.response.data.errorMessage)
        }
    }
    return { loading, error, createReservation }
}