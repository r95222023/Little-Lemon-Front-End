import Book from "../../components/Book/Book"
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  Text,
} from 'grommet';

const data = [
  { 
    id:17,
    name: 'Alan Josiah ',
    date: '2024-01-09',
    timeslot: 13,
    guest_numbers: 4,
  },
  {
    id:18,
    name: 'Bryan Lane',
    date: '2024-01-09',
    timeslot: 12,
    guest_numbers: 5,
  },
  {
    id:19,
    name: 'Chris Willa',
    date: '2024-01-09',
    timeslot: 12,
    guest_numbers: 2,
  },
  {
    id:20,
    name: 'Eric Maegan',
    date: '2024-01-09',
    timeslot: 11,
    guest_numbers: 3,
  },
  {
    id:21,
    name: 'Doug Yong',
    date: '2024-01-09',
    timeslot: 12,
    guest_numbers: 4,
  },
  {
    id:22,
    name: 'Jet Isabella',
    date: '2024-01-09',
    timeslot: 12,
    guest_numbers: 4,
  },
  {
    id:23,
    name: 'Michael',
    date: '2024-01-10',
    timeslot: 13,
    guest_numbers: 6,
  },
  {
    id:24,
    name: 'Tracy Kimbery',
    date: '2024-01-10',
    timeslot: 12,
    guest_numbers: 7,
  },
];

const columns = [
  { property: 'name', header: 'Name' },
  { property: 'date', header: 'Date' },
  { property: 'timeslot', header: 'Timeslot' , align:'center'},
  { property: 'guest_numbers', header: 'Number of guests', align:'center' },
];

export const ReservationsPage = () => (
  // Uncomment <Grommet> lines when using outside of storybook
  // <Grommet theme={...}>
  <Box align="center" pad="large">
    <Table caption={"Reservations"}>
      <TableHeader>
        <TableRow>
          {columns.map((c) => (
            <TableCell key={c.property} scope="col" align={c.align}>
              <Text>{c.header}</Text>
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((datum) => (
          <TableRow key={datum.id}>
            {columns.map((c) => (
              <TableCell key={c.property} scope={c.dataScope} align={c.align}>
                <Text>{c.format ? c.format(datum) : datum[c.property]}</Text>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          {columns.map((c) => (
            <TableCell key={c.property} align={c.align}>
              <Text>{c.footer}</Text>
            </TableCell>
          ))}
        </TableRow>
      </TableFooter>
    </Table>
    <Book classname="book_btn"/>
  </Box>
  // </Grommet>
);

export default ReservationsPage