import { useEffect, useState } from "react";
import type { GroupByDepartmentData } from "@/features/user/types/user.type";
import { getUser } from "@/features/user/services/user.service";
import { groupByDepartment } from "@/features/user/utils/user";

const useUser = () => {
    const [data, setData] = useState<GroupByDepartmentData>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUser();
                setData(groupByDepartment(response.users));
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
    };
};

export default useUser;
