import React from 'react';

const SearchPanel = (props) => {
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const inputValue = props.inputValue;
  return(
    <div className="row margin">
      <form>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search ip or url" onChange={handleChange} onSubmit={handleSubmit} value={inputValue}/>
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
