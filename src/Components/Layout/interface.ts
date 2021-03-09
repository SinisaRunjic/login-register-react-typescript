import React from 'react';

export interface ILayout {
  window?: () => Window;
  children: React.ReactNode
}