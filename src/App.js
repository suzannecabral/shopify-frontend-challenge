import './App.css';
import styled from 'styled-components';
import COLORS from './styles/styleValues';
import Header from './components/Header';
import BannerStatus from './components/BannerStatus';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import SelectedList from './components/SelectedList';

const StyledApp = styled.div`
  height:100%;
  background-color:${COLORS.neutralOffBlack};
  color:${COLORS.neutralOffWhite};
`;

function App() {
  return (
    <div className="App">
      <StyledApp>
        <BannerStatus />
        <Header />
      </StyledApp>
    </div>
  );
}

export default App;
