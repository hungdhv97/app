import React from 'react';

import DataGrid, {
  Column,
  Pager,
  Editing,
  Popup,
  Paging,
  Position,
  Form,
  FilterRow
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import viMessages from 'devextreme/localization/messages/vi.json';
import { locale, loadMessages } from 'devextreme/localization';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import 'whatwg-fetch';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const customDataSource = new CustomStore({
  key: 'id',
  loadMode: 'raw',
  load: () => {
    return fetch('http://localhost:3010/documents')
      .then(handleErrors)
      .then(response => response.json())
      .catch(() => { throw 'Network error' });
  },
  insert: (values) => {
    console.log(values);
    return fetch('http://localhost:3010/documents', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(handleErrors)
      .catch(() => { throw 'Network error' });
  },
  remove: (key) => {
    console.log(key);
    return fetch(`http://localhost:3010/documents/${encodeURIComponent(key)}`, {
      method: 'DELETE'
    })
      .then(handleErrors)
      .catch(() => { throw 'Network error' });
  },
  update: (key, values) => {
    console.log(values);
    return fetch(`http://localhost:3010/documents/${encodeURIComponent(key)}`, {
      method: 'PATCH',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(handleErrors)
      .catch(() => { throw 'Network error' });
  }
});




const notesEditorOptions = { height: 100 };


class App extends React.Component {
  constructor(props) {
    super(props);
    loadMessages(viMessages);
    locale('vi');
  }
  render() {
    return (
      <div id="data-grid-demo">
        <DataGrid
          dataSource={customDataSource}
          keyExpr="ID"
          showBorders={true}
        >
          <FilterRow visible={true}
            applyFilter="auto" />
          <Paging defaultPageSize={10} />
          <Pager
            showPageSizeSelector={true}
            allowedPageSizes={[5, 10, 20]}
            showInfo={true} />
          <Editing
            mode="popup"
            allowAdding={true}
            allowDeleting={true}
            allowUpdating={true}
          >
            <Popup title="Th??ng tin c??ng v??n" showTitle={true} width={700} height={525}>
              <Position my="top" at="top" of={window} />
            </Popup>
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
                <Item dataField="DocumentID" />
                <Item dataField="DateDocument" />
                <Item dataField="Office" />
                <Item dataField="DateInsert" />
                <Item dataField="PageNumber" />
                <Item dataField="CopyNumber" />
                <Item dataField="Confidential" />
                <Item dataField="Receiver" />
                <Item dataField="ImageLink" />
                <Item dataField="FileLink" />
                <Item
                  dataField="Abstract"
                  editorType="dxTextArea"
                  colSpan={2}
                  editorOptions={notesEditorOptions} />
              </Item>
            </Form>
          </Editing>
          <Column dataField="DocumentID" caption="S??? CV" width={70} />
          <Column dataField="DateDocument" caption="Ng??y CV" dataType="date" width={100} />
          <Column dataField="Office" caption="CQ Ban H??nh" width={150} />
          <Column dataField="DateInsert" caption="Ng??y Nh???p CV" dataType="date" width={100} />
          <Column dataField="Abstract" caption="Tr??ch Y???u" width={150} />
          <Column dataField="PageNumber" caption="S??? Trang" width={70} />
          <Column dataField="CopyNumber" caption="S??? B???n" width={70} />
          <Column dataField="Confidential" caption="????? M???t" width={100} />
          <Column dataField="ImageLink" caption="???nh" />
          <Column dataField="FileLink" caption="File" />
          <Column dataField="Receiver" caption="N??i Nh???n" width={130} />
          <Column dataField="IsRead" caption="???? ?????c" width={70} />
          <Column dataField="DateRead" caption="Ng??y ?????c" width={100} />
        </DataGrid>
      </div>
    );
  }
}

export default App;
