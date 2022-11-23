import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Box } from '@mui/system';
import NavBar from './components/NavBar';

const anchors = ["firstPage", "secondPage", "thirdPage"];
const App = () => (
  <ReactFullpage
    //fullpage options
    scrollingSpeed = {400} /* Options here */
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#000","#00ffff","#29ab87" ]}

    render={({ state, fullpageApi }) => {
      return (
      <>
        <ReactFullpage.Wrapper >
        <NavBar />
          
          <Box sx={{width:'100%'}} className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </Box>
          <Box className="section">
            <p>Section 2</p>
          </Box>
          <Box className="section">
            <p>Section 2</p>
          </Box>
        </ReactFullpage.Wrapper>
      </>
      );
    }}
  />
);
export default App;
