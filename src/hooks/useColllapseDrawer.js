import { useContext } from 'react';
import { CollapseDrawerContext } from '../context/collapseDrawerContext';

// ----------------------------------------------------------------------

const useCollapseDrawer = () => useContext(CollapseDrawerContext);

export default useCollapseDrawer;
