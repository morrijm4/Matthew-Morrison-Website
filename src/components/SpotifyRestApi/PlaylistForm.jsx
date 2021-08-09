import React from 'react';
import { Heading, Button, Text } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { InputField } from './InputField';
import { Wrapper } from './Wrapper';

export const PlaylistForm = props => {
  return (
    <Wrapper varient="small">
      <Heading my={16}>Search for a playlist on Spotify</Heading>
      <Formik
        initialValues={{ playlistId: '' }}
        onSubmit={values => {
          props.setPlaylistId(values.playlistId);
          props.setLoading(true);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="playlistId"
              placeholder="playlist id"
              label="Playlist Id"
            />
            <Button
              mt={4}
              isLoading={isSubmitting}
              type="submit"
              colorScheme="blue"
            >
              Find
            </Button>
          </Form>
        )}
      </Formik>
      <Text mt={8}>
        Find the top 50 songs on Spotify with this code:{' '}
        <strong>37i9dQZEVXbMDoHDwVN2tF</strong>
      </Text>
    </Wrapper>
  );
};
