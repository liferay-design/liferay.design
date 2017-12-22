import PropTypes from "prop-types";
import React from "react";

import classNames from "components/banner/Venue.scss";
import yellowPolaroid from "resources/yellow-polaroid-small.png";

class Venue extends React.Component {
  render() {
    const {
      label,
      primaryHeader,
      secondaryHeader,
      tertiaryHeader
    } = this.props;

    return (
      <div className={classNames.container}>
        <div className={classNames.header}>
          <h5 className={classNames.label}>{label}</h5>

          <h1 className={classNames.primary}>{primaryHeader}</h1>

          <h2 className={classNames.secondary}>{secondaryHeader}</h2>

          <h5 className={classNames.tertiary}>{tertiaryHeader}</h5>
        </div>

        <div
          className={classNames.banner}
          style={{ backgroundImage: `url(${yellowPolaroid})` }}
        />
      </div>
    );
  }
}

Venue.propTypes = {
  label: PropTypes.string,
  primaryHeader: PropTypes.string,
  secondaryHeader: PropTypes.string,
  tertiaryHeader: PropTypes.string
};

export default Venue;
