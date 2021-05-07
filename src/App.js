import './App.css';
import styled from 'styled-components';
import COLORS from './styles/styleValues';
import Header from './components/Header';
import BannerStatus from './components/BannerStatus';
import SearchBar from './components/SearchBar';
import SearchContainer from './components/SearchContainer';


const StyledApp = styled.div`
  height:100%;
  background-color:${COLORS.neutralOffBlack};
  color:${COLORS.neutralOffWhite};
`;

function App() {
  return (
    <div className="App">
      <StyledApp>
        <Header />
        <BannerStatus />
        <SearchBar />
        <SearchContainer />
        
      </StyledApp>
    </div>
  );
}

export default App;
