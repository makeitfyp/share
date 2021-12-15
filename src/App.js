import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { StyledEngineProvider } from '@material-ui/core';
import routes from './routes';

const App = () => {
  const content = useRoutes(routes);

  return (
    <div>
      {content}

    </div>
  );
};

export default App;
