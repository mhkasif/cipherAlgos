import React from "react";
import { Table } from "semantic-ui-react";
import { Alphabets, randomArray } from "../../utils/substitutionCipher";

export const SubstitutionKey = () => {
  return (
    <Table compact celled definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>ALPHABETS</Table.Cell>

          {Alphabets.map(alp => (
            <Table.Cell key={Math.random() * 12 * 77}>{alp}</Table.Cell>
          ))}
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>KEY</Table.Cell>
          {randomArray.map(alp => (
            <Table.Cell key={Math.random() * 12 * 33}>{alp}</Table.Cell>
          ))}
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default SubstitutionKey;
