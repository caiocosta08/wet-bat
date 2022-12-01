import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QuotesList from './screens/QuotesList';
import SelectedQuote from './screens/SelectedQuote';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [selectedQuote, setSelectedQuote] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Quotes" {...a11yProps(0)} />
          {selectedQuote && <Tab label="Selected Quote" {...a11yProps(1)} />}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <QuotesList onCellClick={(item) => {

          item.row.departureDate = new Date(item.row.departureDate).toString()
          item.row.returnDate = new Date(item.row.returnDate).toString()
          setSelectedQuote(item.row);
          handleChange({}, 1)
        }} />
      </TabPanel>
      {selectedQuote &&
        <TabPanel value={value} index={1}>
          <SelectedQuote quote={selectedQuote} />
        </TabPanel>
      }
    </Box>
  );
}