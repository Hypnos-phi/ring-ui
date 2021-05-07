import React from 'react';
import {render, screen} from '@testing-library/react';

import AuthDialog from './auth-dialog';

describe('AuthDialog', () => {
  it('should render confirm', () => {
    render(<AuthDialog show title="Foo"/>);
    screen.getByRole('heading', {text: 'Foo'}).should.exist;
  });
});
