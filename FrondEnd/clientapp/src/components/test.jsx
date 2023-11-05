import React from 'react';
import { Segment, Table } from 'semantic-ui-react';

const GridView = () => {
  const tableData = [
    { id: 1, name: 'John Doe', age: 30, email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', age: 28, email: 'janesmith@example.com' },
    { id: 3, name: 'Alice Johnson', age: 35, email: 'alice@example.com' },
    // Add more data rows as needed
  ];

  return (
    <div>
      <Segment>
        <h2>Styled Segment</h2>
        <p>This is a styled segment using Semantic UI React.</p>
      </Segment>

      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.id}</Table.Cell>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.age}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default GridView;
