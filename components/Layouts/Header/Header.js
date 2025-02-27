import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

import MenuView from './MenuView';

export default function Header(props) {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MenuView />
      </QueryClientProvider>

    </>
  );
}
