import React from 'react';
import { Link } from 'react-router-dom';

class LinkSettings extends React.Component {
  render() {
    return (
      <div>
        <Link to="/settings">
          <button type="button" data-testid="btn-settings">
            Veja as configurações disponíveis
          </button>
        </Link>
      </div>
    );
  }
}

export default LinkSettings;
