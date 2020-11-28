import locationApi from '@/api/location';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useGetLocations = () => {
  const [locations, setLocations] = useState({ results: [], total: 0 });
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();
  useEffect(() => {
    const getLocations = async () => {
      setLoading(true);
      const data = await locationApi.get({ page: +query.page, q: query.q });
      setLocations(data);
      setLoading(false);
    };
    query.q && getLocations();
  }, [query.page, query.q]);

  return { locations, loading };
};

export default useGetLocations;
