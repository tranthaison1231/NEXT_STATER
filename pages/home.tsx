import { PrivateLayout } from '@/components/Layout';
import { CoworkingSpaces } from '@/components/List';
import { CoworkingSearch } from '@/components/UIKit';
import withPrivateRoute from '@/hocs/withPrivateRoute';
import { useGetLocations } from '@/hooks';
import { useRouter } from 'next/router';

const Home = () => {
  const { query, push } = useRouter();
  const { locations, loading } = useGetLocations();

  const onSearch = (value) => {
    push(`/home?page=1&q=${value}`);
  };
  return (
    <PrivateLayout searchVisible={!!query.q} onSearch={onSearch}>
      <>
        {query.q ? (
          <CoworkingSpaces
            items={locations.results}
            total={locations.total}
            loading={loading}
          />
        ) : (
          <CoworkingSearch onSearch={onSearch} />
        )}
      </>
    </PrivateLayout>
  );
};

export default withPrivateRoute(Home);
