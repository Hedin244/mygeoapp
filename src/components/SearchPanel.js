import React from 'react';

const SearchPanel = (props) => {
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  return(
    <div className="row top_margin bot_margin">
      <form>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search" onChange={handleChange} onSubmit={handleSubmit} />
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit" onClick={handleSubmit}>
              <i className="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchPanel;
