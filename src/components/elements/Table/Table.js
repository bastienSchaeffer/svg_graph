import styled from 'styled-components';

const Table = styled.table`
  background-color: rgb(255, 255, 255);
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  table-layout: fixed;
  font-family: Roboto, sans-serif;

  th {
    display: table-cell;
    padding: 4px 56px 4px 24px;
    text-align: left;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    vertical-align: inherit;
  }

  td {
    display: table-cell;
    padding: 4px 56px 4px 24px;
    text-align: left;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    vertical-align: inherit;
  }
`;

export default Table;
