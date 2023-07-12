import Select from "react-dropdown-select";

function SelectInputV2({ options, title, value, setValue }) {
  return (
    <div className="col-lg-6 col-md-6 col-12">
      <div className="mg-top-20">
        <h4 className="homec-submit-form__heading">{title}</h4>
        <div className="form-group homec-form-input">
          <Select
            values={[value]}
            options={options}
            labelField="name"
            valueField="id"
            onChange={(values) => setValue(values)}
            searchBy="name"
            searchable={true}
            handle={true}
            placeholder="Select"
            closeOnSelect={true}
            dropdownPosition="auto"
            className="homec-form-select homec-border"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectInputV2;
