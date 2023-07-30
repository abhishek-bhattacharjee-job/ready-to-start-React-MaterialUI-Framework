import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';




export default function LeftBar(props: DrawerProps) {
  const { ...other } = props;
  const { projectId } = useParams();

  const categories = [
    {
      id: 'Menu1',
      children: [
        { id: 'Home Page', link: '/home'}
      ],
    },
    {
      id: 'Menu2',
      children: [
        { id: 'Page With Background Image', link: '/pagewithbackgroundimage', active: true},
        { id: 'Page With Table', link: '/howtoshowtable/'}
      ],
    },
    {
      id: 'Menu3',
      children: [
        { id: 'About Page', link: '/about', active: true},
        { id: 'Contact Page', link: '/contact/'}
      ],
    }
  ];

  return (
    <Box sx={{ bgcolor: '#101F33', color: '#fff', height:"100%" }}>
      <Box sx={{ bgcolor: '#101F33', color: '#fff', fontSize: 20, textAlign:"center" }}>
          <br /><br />
      </Box>
      <List disablePadding>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, link }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton
                 selected={active}
                 sx={{
                   py: '2px',
                   px: 3,
                   color: 'rgba(255, 255, 255, 0.7)',
                   '&:hover, &:focus': {
                     bgcolor: 'rgba(255, 255, 255, 0.08)',
                   },
                 }}
                 component={Link} // Use the Link component as the wrapper
                 to={link}
                 >
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        ))}

      </List>
    </Box>
  );
}
