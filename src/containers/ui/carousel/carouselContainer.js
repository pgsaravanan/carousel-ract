import React, { useState } from 'react';
import Loaders from '@components/Loaders/loaders';
import Carousel from '@components/ui/carousel/carousel';
import { dataFetchHooks } from '@store/customHooks/dataFetchHooks';

const CarouselContainer = () => {
  const { data, loading } = dataFetchHooks('&q=beautiful+landscape&image_type=photo');

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
