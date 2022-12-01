import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'departureLocation', headerName: 'Departure Location', width: 130 },
    { field: 'destinationLocation', headerName: 'Destination Location', width: 130 },
    {
        field: 'departureDate',
        headerName: 'Departure Date',
        type: 'string',
        width: 90,
        valueGetter: (params) => new Date(params.row.departureDate)
    },
    {
        field: 'returnDate',
        headerName: 'Return Date',
        type: 'string',
        width: 90,
        valueGetter: (params) => new Date(params.row.returnDate)
    },
    {
        field: 'numberOfTravellers',
        headerName: 'Number of Travellers',
        type: 'string',
        width: 90,
    },
    {
        field: 'transportationDuringTravels',
        headerName: 'Transportation during travels',
        type: 'string',
        width: 90,
    },
    {
        field: 'contactInformation',
        headerName: 'Contact Information',
        description: 'This column has a value getter and is not sortable.',
        width: 160,
    },
];

export default function DataTable({ onCellClick }) {

    const [quotes, setQuotes] = React.useState(false);

    const getQuotes = async () => {
        let response = await axios.get('http://127.0.0.1:3001/quotes');
        setQuotes(response.data)
    }

    React.useEffect(() => {
        getQuotes()
    }, [])

    return (
        <div style={{ height: '80vh', width: '100%' }}>
            <DataGrid
                rows={quotes}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                onCellClick={onCellClick}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
}