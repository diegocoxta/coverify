import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { reportWebVitals } from 'src/utils/analytics';
import i18n from 'src/utils/i18n';

import LoadingPage from 'src/pages/Loading';
import HomePage from 'src/pages/Home';

i18n();

ReactDOM.render(
  <Suspense fallback={<LoadingPage />}>
    <HomePage />
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
