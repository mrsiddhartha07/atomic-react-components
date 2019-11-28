import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Search.mock';

// Import Styled Component to showcase variations
import Search, { SearchVanilla } from '.';
const ListItem = ({ children }) => children;

// TODO: indentation is not working fine in editor. Need to check for .hbs files
storiesOf('Molecules', module)
  .addParameters({ jest: ['Search', 'SearchVanilla'] })
  .add('Search Knobs', () => (
    <SearchVanilla
      {...defaultConfig}
      className={`hide-default-sample ${defaultConfig.className}`}
    />
  ))
  .add('Search', () => (
    <Search {...defaultConfig} renderListItem={item => <ListItem key={item}>{item}</ListItem>} />
  ));