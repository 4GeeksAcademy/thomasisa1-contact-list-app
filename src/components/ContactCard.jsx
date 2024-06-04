import React from "react";
import PropTypes from "prop-types";

export const ContactCard = (props) => {
  return (
    <li className="list-group-item">
      <div className="row w-100">
        <div className="col-12 col-sm-6 col-md-3 px-0">
          <img
            src="https://via.placeholder.com/200"
            alt="placeholder"
            className="rounded-circle mx-auto d-block img-fluid"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
          <div className="float-right">
            <button className="btn" onClick={() => props.onEdit(props.contact)}>
              <i className="fas fa-pencil-alt" />
            </button>
            <button className="btn" onClick={() => props.onDelete(props.contact.id)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
          <label className="name lead">
            {props.contact.full_name}
          </label>
          <br />
          <span className="text-muted">
            <i className="fa fa-phone fa-fw text-muted mr-3" />
            {props.contact.phone}
          </span>
          <br />
          <span className="text-muted small">{props.contact.address}</span>
          <br />
          <i className="fas fa-envelope fa-fw text-muted mr-3" />
          <span className="text-muted small text-truncate">{props.contact.email}</span>
        </div>
      </div>
    </li>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};