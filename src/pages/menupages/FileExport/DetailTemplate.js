import React from 'react';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

const tasks = [];

class DetailTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.dataSource = getTasks(props.data.key);
  }

  render() {
    const { FirstName, LastName } = this.props.data.data;
    return (
      <React.Fragment>
        <DataGrid
          dataSource={this.dataSource}
          showBorders={true}
          columnAutoWidth={true}
        >
          <Column dataField="Subject" />
          <Column dataField="Priority" />
          <Column
            caption="Completed"
            dataType="boolean"
          />
        </DataGrid>
      </React.Fragment>
    );
  }

}

function getTasks(key) {
  return new DataSource({
    store: new ArrayStore({
      data: tasks,
      key: 'ID',
    })
  });
}

export default DetailTemplate;
