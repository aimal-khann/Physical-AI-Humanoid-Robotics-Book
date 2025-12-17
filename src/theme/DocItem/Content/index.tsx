// src/theme/DocItem/Content/index.js
import React from 'react';
import Content from '@theme-original/DocItem/Content';
import UrduTranslationButton from '@site/src/components/UrduTranslationButton';

export default function ContentWrapper(props) {
  return (
    <>
      {/* 1. The Button (Only visible if logged in, handled by the component) */}
      <UrduTranslationButton />
      
      {/* 2. The Actual Chapter Content */}
      <Content {...props} />
    </>
  );
}