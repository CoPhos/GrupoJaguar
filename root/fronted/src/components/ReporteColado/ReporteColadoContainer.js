import React, { useState } from 'react';
import protectedRoute from '../../protectedRoute';
import { Radio } from 'antd';

import '@aws-amplify/ui-react/styles.css';

import ReporteColadoImages from './ReporteColadoImages';
import CreateImageReporte from './CreateImageReporte';

function ReporteColadoContainer() {
  const [viewState, updateViewState] = useState('viewPosts');
  return (
    <div style={container}>
      <h1>Photo App</h1>
      <Radio.Group value={viewState} onChange={e => updateViewState(e.target.value)}>
        <Radio.Button value="viewPosts">View Posts</Radio.Button>
        <Radio.Button value="addPost">Add Post</Radio.Button>
      </Radio.Group>
      {viewState === 'viewPosts' ? (
        <ReporteColadoImages />
      ) : (
        <CreateImageReporte updateViewState={updateViewState} />
      )}
    </div>
  );
}
const container = { width: 500, margin: '0 auto', padding: 50 };
export default protectedRoute(ReporteColadoContainer);
