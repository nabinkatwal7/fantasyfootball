import './App.css';
import { MantineProvider, Text } from '@mantine/core';

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}

export default App;
