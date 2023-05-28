import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  var cpp = props.codeData[1];


  var java = props.codeData[0];

// var python = `# Iterative python program to reverse an array
// # Function to reverse A[] from start to end

// def reverseList(A, start, end):
//   while start < end:
//     A[start], A[end] = A[end], A[start]
//     start += 1
//     end -= 1

// # Driver function to test above function
// A = [1, 2, 3, 4, 5, 6]
// print(A)
// reverseList(A, 0, 5)
// print("Reversed list is")
// print(A)`;


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='C++ ' {...a11yProps(0)} />
          <Tab label='Java' {...a11yProps(1)} />
          {/* <Tab label='Python' {...a11yProps(2)} /> */}
        
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <pre className='CodeText'>
            {cpp}
        </pre>
        <br />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <pre className='CodeText'>
            {java}
        </pre>

      </TabPanel>
      {/* <TabPanel value={value} index={2}>
      <pre className='CodeText'>
        {python}
      </pre>
      </TabPanel> */}
    </Box>
  );
}
