import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Playlist from '../components/SpotifyRestApi/Playlist';

function SpotifyRestApi() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="80vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Playlist />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default SpotifyRestApi;
