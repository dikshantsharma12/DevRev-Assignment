import './App.css';
import book_list from "./book_list";
import FilterableTable from 'react-filterable-table';

function App() {
  const data = book_list
  const fields = [
    { name: 'title', displayName: "Title", inputFilterable: true, sortable: true },
    { name: 'author', displayName: "Author", inputFilterable: true, exactFilterable: true, sortable: true },
    { name: 'Subject', displayName: "Subject", inputFilterable: true, exactFilterable: true, sortable: true },
    { name: 'publish_date', displayName: "Publish Date", inputFilterable: true, exactFilterable: true, sortable: true }
  ];
  return (
    <div className="card-body">
      <h2 style={{textAlign: 'center'}}>DevRev Library Management</h2>
      <FilterableTable
        namespace="Book"
        initialSort="name"
        data={data}
        fields={fields}
        noRecordsMessage="No Records found..."
        noFilteredRecordsMessage="No Records found..."
        topPagerVisible={false}
      />
    </div>

  );
}

export default App;
