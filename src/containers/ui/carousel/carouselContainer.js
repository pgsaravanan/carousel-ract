import React from 'react';
import Loaders from '@components/Loaders/loaders';
import Carousel from '@components/ui/carousel/carousel';
import { useDataFetchHooks } from '@store/customHooks/useDataFetchHooks';

const CarouselContainer = () => {
  const { data, loading } = useDataFetchHooks('&q=beautiful+landscape&image_type=photo');

  return (
    <div>
      { loading && <Loaders isLoading={loading} />}
      { data && !loading && (
        <Carousel data={data} />
      )}
    </div>
  );
};

export default CarouselContainer;
